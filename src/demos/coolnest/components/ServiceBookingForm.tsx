"use client";

import { useId, useRef, useState } from "react";
import { CircleAlert, Copy, ExternalLink, Info, MessageCircle } from "lucide-react";
import { ENQUIRY_WHATSAPP_NUMBER, brand, services, symptoms, timeSlots, unitOptions } from "../content";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  phone: string;
  service: string;
  symptoms: string[];
  units: string;
  location: string;
  date: string;
  time: string;
  notes: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const serviceOptions = services.map((s) => ({ value: s.slug, label: s.title }));
const empty: Fields = {
  name: "",
  phone: "",
  service: "",
  symptoms: [],
  units: "",
  location: "",
  date: "",
  time: "",
  notes: "",
};

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

/** Malaysian mobile numbers: 01X-XXX XXXX(X), optionally written with +60 / 60. */
function normaliseMyMobile(input: string): string | null {
  let digits = input.replace(/[\s-]/g, "");
  if (!/^\+?\d+$/.test(digits)) return null;
  digits = digits.replace(/^\+/, "");
  if (digits.startsWith("60")) digits = "0" + digits.slice(2);
  return /^01\d{8,9}$/.test(digits) ? digits : null;
}

function formatMyMobile(digits: string) {
  // 0123456789 -> 012-345 6789, 01112345678 -> 011-1234 5678
  return digits.length === 11
    ? `${digits.slice(0, 3)}-${digits.slice(3, 7)} ${digits.slice(7)}`
    : `${digits.slice(0, 3)}-${digits.slice(3, 6)} ${digits.slice(6)}`;
}

function validate(f: Fields): Errors {
  const e: Errors = {};
  const name = f.name.trim();
  if (!name) e.name = "Please enter your name.";
  else if (name.length < 2) e.name = "Name must be at least 2 characters.";
  if (!f.phone.trim()) e.phone = "Please enter your WhatsApp number.";
  else if (!normaliseMyMobile(f.phone)) e.phone = "Please enter a valid Malaysian mobile number, e.g. 012-345 6789.";
  if (!f.service) e.service = "Please choose a service type.";
  if (f.symptoms.length === 0) e.symptoms = "Please tick at least one option.";
  if (!f.units) e.units = "Please choose the number of units.";
  if (f.location.trim().length < 3) e.location = "Please enter your area or postcode.";
  if (!f.date) e.date = "Please choose a preferred date.";
  else if (f.date < todayISO()) e.date = "Please choose a date from today onwards.";
  if (!f.time) e.time = "Please choose a preferred time slot.";
  return e;
}

function composeMessage(f: Fields): string {
  const service = serviceOptions.find((o) => o.value === f.service)?.label ?? f.service;
  const date = new Date(`${f.date}T00:00:00`).toLocaleDateString("en-MY", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const lines = [
    `Hi ${brand.shortName}, I'd like a quotation for aircond service.`,
    "",
    `*Name:* ${f.name.trim()}`,
    `*WhatsApp:* ${formatMyMobile(normaliseMyMobile(f.phone)!)}`,
    `*Service:* ${service}`,
    `*Problem:* ${f.symptoms.join("; ")}`,
    `*Units:* ${f.units}`,
    `*Location:* ${f.location.trim()}`,
    `*Preferred date:* ${date}`,
    `*Preferred time:* ${f.time}`,
  ];
  if (f.notes.trim()) lines.push(`*Notes:* ${f.notes.trim()}`);
  lines.push(
    "",
    "Please confirm the quotation and your availability. Thank you!",
    "",
    "(Demo enquiry from the CoolNest portfolio website by Nabilio Studio. CoolNest is a fictional business.)",
  );
  return lines.join("\n");
}

/** wa.me link; with no recipient configured WhatsApp asks the user to pick a chat. */
function whatsappUrl(message: string) {
  const base = ENQUIRY_WHATSAPP_NUMBER ? `https://wa.me/${ENQUIRY_WHATSAPP_NUMBER}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

const inputBase =
  "mt-2 block w-full rounded-2xl border bg-white px-4 py-3 text-base text-cn-ink placeholder:text-cn-muted/70 sm:text-[0.9375rem] " +
  "transition-[border-color,box-shadow] focus:border-cn-primary focus:ring-4 focus:ring-cn-primary/15 focus:outline-none";

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-sm text-red-700">
      <CircleAlert className="size-4 shrink-0" aria-hidden />
      {children}
    </p>
  );
}

function Field(props: {
  id: string;
  label: string;
  optional?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={props.id} className="text-sm font-semibold text-cn-ink">
        {props.label}
        {props.optional && <span className="ml-1.5 text-xs font-normal text-cn-muted">(optional)</span>}
      </label>
      {props.children}
      {props.hint && !props.error && (
        <p id={`${props.id}-hint`} className="mt-1.5 text-xs text-cn-muted">
          {props.hint}
        </p>
      )}
      {props.error && <ErrorText id={`${props.id}-error`}>{props.error}</ErrorText>}
    </div>
  );
}

const chipBase =
  "flex cursor-pointer items-center gap-2.5 rounded-2xl border bg-white px-4 py-3 text-sm text-cn-ink transition-colors " +
  "has-[:checked]:border-cn-primary has-[:checked]:bg-cn-sky has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-cn-primary";

export function ServiceBookingForm({ defaultService = "" }: { defaultService?: string }) {
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;
  const initial: Fields = {
    ...empty,
    service: serviceOptions.some((o) => o.value === defaultService) ? defaultService : "",
  };
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState<"idle" | "done" | "failed">("idle");
  const resultRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof Fields>(k: K, value: Fields[K]) => {
    setFields((f) => ({ ...f, [k]: value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };
  const update =
    (k: Exclude<keyof Fields, "symptoms">) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      set(k, e.target.value);
  const toggleSymptom = (s: string) =>
    set("symptoms", fields.symptoms.includes(s) ? fields.symptoms.filter((x) => x !== s) : [...fields.symptoms, s]);

  const describe = (k: keyof Fields, hint = false) =>
    errors[k]
      ? { "aria-invalid": true as const, "aria-describedby": `${id(k)}-error` }
      : hint
        ? { "aria-describedby": `${id(k)}-hint` }
        : {};
  const border = (k: keyof Fields) => (errors[k] ? "border-red-600" : "border-cn-line");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(id(first))?.focus();
      return;
    }
    const text = composeMessage(fields);
    setMessage(text);
    setCopied("idle");
    // Opens WhatsApp with the message prefilled. Nothing is sent: the visitor reviews it and presses Send.
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    requestAnimationFrame(() => resultRef.current?.focus());
  }

  async function copyMessage() {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setCopied("done");
    } catch {
      setCopied("failed");
    }
  }

  if (message) {
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        role="status"
        className="rounded-3xl border border-cn-mint/50 bg-cn-ice p-4 focus:outline-none sm:p-8"
      >
        <p className="flex items-center gap-2.5 font-cn-display text-lg font-bold text-cn-ink sm:gap-3 sm:text-xl">
          <MessageCircle className="size-6 shrink-0 text-cn-mint-text sm:size-7" aria-hidden />
          Your WhatsApp enquiry is ready
        </p>
        <p className="mt-4 leading-relaxed text-cn-muted">
          WhatsApp should have opened in a new tab with this message filled in.{" "}
          <strong className="text-cn-ink">Nothing has been sent automatically</strong> — you choose the chat and press
          Send yourself.
        </p>
        <p className="mt-4 flex gap-2.5 rounded-2xl border border-cn-line bg-white p-4 text-sm text-cn-ink">
          <Info className="mt-0.5 size-4 shrink-0 text-cn-primary" aria-hidden />
          <span>
            <strong className="font-semibold">Demo mode:</strong> CoolNest is a fictional business, so no WhatsApp
            number is set and <strong className="font-semibold">no real booking or quotation is created</strong>. On a
            real website, this message would open directly in the business&apos;s WhatsApp chat.
          </span>
        </p>

        <h3 id={`${uid}-preview`} className="mt-6 text-sm font-semibold text-cn-ink">
          Message preview
        </h3>
        {/* Focusable so keyboard users can scroll a long preview. */}
        <pre
          tabIndex={0}
          aria-labelledby={`${uid}-preview`}
          className="mt-2 max-h-80 overflow-auto rounded-2xl bg-white p-4 font-sans text-sm leading-relaxed whitespace-pre-wrap text-cn-ink"
        >
          {message}
        </pre>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-cn-primary px-4 font-cn-display text-[0.9375rem] font-semibold text-white transition-colors sm:px-6 hover:bg-cn-primary-hover"
          >
            <ExternalLink className="size-4 max-[359px]:hidden" aria-hidden />
            Reopen WhatsApp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <button
            type="button"
            onClick={copyMessage}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cn-line bg-white px-4 font-cn-display sm:px-6 text-[0.9375rem] font-semibold text-cn-ink transition-colors hover:border-cn-primary hover:text-cn-primary"
          >
            <Copy className="size-4 max-[359px]:hidden" aria-hidden />
            Copy message
          </button>
        </div>
        <p aria-live="polite" className="mt-2 min-h-5 text-sm text-cn-muted">
          {copied === "done" && "Message copied to your clipboard."}
          {copied === "failed" && "Couldn't copy automatically — select the text above and copy it."}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
          <button
            type="button"
            onClick={() => setMessage(null)}
            className="text-cn-primary underline underline-offset-4 hover:text-cn-primary-hover"
          >
            Edit details
          </button>
          <button
            type="button"
            onClick={() => {
              setFields(initial);
              setMessage(null);
            }}
            className="text-cn-primary underline underline-offset-4 hover:text-cn-primary-hover"
          >
            Start a new enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-7">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={id("name")} label="Your name" error={errors.name}>
          <input
            id={id("name")}
            autoComplete="name"
            value={fields.name}
            onChange={update("name")}
            className={cn(inputBase, border("name"))}
            {...describe("name")}
          />
        </Field>
        <Field id={id("phone")} label="WhatsApp number" error={errors.phone}>
          <input
            id={id("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="e.g. 012-345 6789"
            value={fields.phone}
            onChange={update("phone")}
            className={cn(inputBase, border("phone"))}
            {...describe("phone")}
          />
        </Field>
        <Field id={id("service")} label="Service type" error={errors.service}>
          <select
            id={id("service")}
            value={fields.service}
            onChange={update("service")}
            className={cn(inputBase, border("service"))}
            {...describe("service")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id={id("units")} label="Number of aircond units" error={errors.units}>
          <select
            id={id("units")}
            value={fields.units}
            onChange={update("units")}
            className={cn(inputBase, border("units"))}
            {...describe("units")}
          >
            <option value="" disabled>
              Select number of units
            </option>
            {unitOptions.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset aria-describedby={errors.symptoms ? `${id("symptoms")}-error` : `${id("symptoms")}-hint`}>
        <legend className="text-sm font-semibold text-cn-ink">Aircond problem or symptoms</legend>
        <p id={`${id("symptoms")}-hint`} className="mt-1 text-xs text-cn-muted">
          Tick all that apply.
        </p>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {symptoms.map((s, i) => (
            <label key={s} className={cn(chipBase, errors.symptoms ? "border-red-600" : "border-cn-line")}>
              <input
                type="checkbox"
                id={i === 0 ? id("symptoms") : undefined}
                checked={fields.symptoms.includes(s)}
                onChange={() => toggleSymptom(s)}
                className="size-4 shrink-0 accent-cn-primary"
              />
              {s}
            </label>
          ))}
        </div>
        {errors.symptoms && <ErrorText id={`${id("symptoms")}-error`}>{errors.symptoms}</ErrorText>}
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={id("location")} label="Location or postcode" hint="e.g. Shah Alam, or 40150" error={errors.location}>
          <input
            id={id("location")}
            autoComplete="address-level2"
            value={fields.location}
            onChange={update("location")}
            className={cn(inputBase, border("location"))}
            {...describe("location", true)}
          />
        </Field>
        <Field id={id("date")} label="Preferred date" error={errors.date}>
          <input
            id={id("date")}
            type="date"
            value={fields.date}
            onChange={update("date")}
            className={cn(inputBase, border("date"))}
            {...describe("date")}
          />
        </Field>
      </div>

      <fieldset aria-describedby={errors.time ? `${id("time")}-error` : undefined}>
        <legend className="text-sm font-semibold text-cn-ink">Preferred time slot</legend>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
          {timeSlots.map((slot, i) => (
            <label key={slot} className={cn(chipBase, errors.time ? "border-red-600" : "border-cn-line")}>
              <input
                type="radio"
                name={`${uid}-time`}
                id={i === 0 ? id("time") : undefined}
                value={slot}
                checked={fields.time === slot}
                onChange={() => set("time", slot)}
                className="size-4 shrink-0 accent-cn-primary"
              />
              {slot}
            </label>
          ))}
        </div>
        {errors.time && <ErrorText id={`${id("time")}-error`}>{errors.time}</ErrorText>}
      </fieldset>

      <Field id={id("notes")} label="Additional notes" optional>
        <textarea
          id={id("notes")}
          rows={4}
          maxLength={500}
          placeholder="e.g. aircond brand and horsepower, error code, which room, parking or access details…"
          value={fields.notes}
          onChange={update("notes")}
          className={cn(inputBase, "resize-y border-cn-line")}
        />
      </Field>

      <p className="flex gap-2.5 rounded-2xl bg-cn-ice p-4 text-sm text-cn-muted">
        <Info className="mt-0.5 size-4 shrink-0 text-cn-primary" aria-hidden />
        <span>
          <strong className="font-semibold text-cn-ink">Demo form:</strong> submitting opens WhatsApp with your enquiry
          written for you — nothing is sent automatically, stored, or delivered to a real business.
        </span>
      </p>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-cn-primary px-6 font-cn-display text-[0.9375rem] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(10,110,148,0.8)] transition-colors hover:bg-cn-primary-hover sm:w-auto"
      >
        <MessageCircle className="size-5 max-[359px]:hidden" aria-hidden />
        Continue to WhatsApp
      </button>
    </form>
  );
}
