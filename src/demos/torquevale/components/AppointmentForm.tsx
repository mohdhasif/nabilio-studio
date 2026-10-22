"use client";

import { useId, useRef, useState } from "react";
import { CircleAlert, Copy, ExternalLink, Info, MessageCircle } from "lucide-react";
import { ENQUIRY_WHATSAPP_NUMBER, autoServices, brand, symptoms, timeSlots } from "../content";
import { cn } from "@/lib/utils";
import {
  formatEnquiryDate,
  formatMyMobile,
  normaliseMyMobile,
  todayISO,
  whatsappUrl as buildWhatsappUrl,
} from "@/demos/shared/whatsapp-enquiry";

const whatsappUrl = (message: string) => buildWhatsappUrl(ENQUIRY_WHATSAPP_NUMBER, message);

type Fields = {
  name: string;
  phone: string;
  car: string;
  year: string;
  mileage: string;
  service: string;
  symptoms: string[];
  date: string;
  time: string;
  notes: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const serviceOptions = [
  ...autoServices.map((s) => ({ value: s.slug, label: s.title })),
  { value: "other", label: "Something else / not sure" },
];

const empty: Fields = {
  name: "",
  phone: "",
  car: "",
  year: "",
  mileage: "",
  service: "",
  symptoms: [],
  date: "",
  time: "",
  notes: "",
};

const digitsOnly = (v: string) => v.replace(/[\s,.]/g, "");

function validate(f: Fields): Errors {
  const e: Errors = {};
  const name = f.name.trim();
  if (!name) e.name = "Please enter your name.";
  else if (name.length < 2) e.name = "Name must be at least 2 characters.";
  if (!f.phone.trim()) e.phone = "Please enter your WhatsApp number.";
  else if (!normaliseMyMobile(f.phone)) e.phone = "Please enter a valid Malaysian mobile number, e.g. 012-345 6789.";
  if (f.car.trim().length < 2) e.car = "Please enter your car's make and model.";
  const year = f.year.trim();
  if (year && (!/^(19|20)\d{2}$/.test(year) || Number(year) > new Date().getFullYear() + 1))
    e.year = "Please enter a valid four-digit year.";
  const mileage = digitsOnly(f.mileage);
  if (mileage && !/^\d{1,7}$/.test(mileage)) e.mileage = "Please enter the mileage in km, numbers only.";
  if (!f.service) e.service = "Please choose a service.";
  if (f.symptoms.length === 0) e.symptoms = "Please tick at least one option.";
  if (!f.date) e.date = "Please choose a preferred date.";
  else if (f.date < todayISO()) e.date = "Please choose a date from today onwards.";
  if (!f.time) e.time = "Please choose a preferred time.";
  return e;
}

function composeMessage(f: Fields): string {
  const service = serviceOptions.find((o) => o.value === f.service)?.label ?? f.service;
  const car = `${f.car.trim()}${f.year.trim() ? ` (${f.year.trim()})` : ""}`;
  const mileage = digitsOnly(f.mileage);
  const lines = [
    `Hi ${brand.shortName}, I'd like a quotation for my car.`,
    "",
    `*Name:* ${f.name.trim()}`,
    `*WhatsApp:* ${formatMyMobile(normaliseMyMobile(f.phone)!)}`,
    `*Car:* ${car}`,
  ];
  if (mileage) lines.push(`*Mileage:* ${Number(mileage).toLocaleString("en-MY")} km`);
  lines.push(
    `*Service:* ${service}`,
    `*Issue:* ${f.symptoms.join("; ")}`,
    `*Preferred date:* ${formatEnquiryDate(f.date)}`,
    `*Preferred time:* ${f.time}`,
  );
  if (f.notes.trim()) lines.push(`*Notes:* ${f.notes.trim()}`);
  lines.push(
    "",
    "Please confirm an estimate and an available slot. Thank you!",
    "",
    "(Demo enquiry from the Torquevale portfolio website by Nabilio Studio. Torquevale is a fictional business.)",
  );
  return lines.join("\n");
}

const fieldBase =
  "mt-2 block w-full border bg-tv-black px-4 py-3 text-base text-tv-text placeholder:text-tv-muted/70 sm:text-[0.9375rem] " +
  "transition-colors focus:border-tv-accent focus:outline-none";

const labelClass = "font-tv-display text-base font-semibold tracking-wider uppercase";

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-sm text-[#ff8a80]">
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
      <label htmlFor={props.id} className={labelClass}>
        {props.label}
        {props.optional && (
          <span className="ml-2 font-sans text-xs font-normal tracking-normal text-tv-muted normal-case">
            (optional)
          </span>
        )}
      </label>
      {props.children}
      {props.hint && !props.error && (
        <p id={`${props.id}-hint`} className="mt-1.5 text-xs text-tv-muted">
          {props.hint}
        </p>
      )}
      {props.error && <ErrorText id={`${props.id}-error`}>{props.error}</ErrorText>}
    </div>
  );
}

const chipBase =
  "flex cursor-pointer items-center gap-3 border bg-tv-black px-4 py-3 text-sm transition-colors has-[:checked]:border-tv-accent " +
  "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-tv-accent";

const solidButton =
  "inline-flex h-12 items-center justify-center gap-2 bg-tv-accent px-4 font-tv-display text-base font-semibold tracking-wider text-tv-black uppercase transition-colors hover:bg-tv-accent-hover sm:px-8 " +
  "[clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]";

const textButton =
  "font-tv-display text-base font-semibold tracking-wider text-tv-text uppercase underline decoration-tv-accent decoration-2 underline-offset-4 hover:text-tv-accent";

export function AppointmentForm({ defaultService = "" }: { defaultService?: string }) {
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
  const border = (k: keyof Fields) => (errors[k] ? "border-[#ff8a80]" : "border-tv-line");

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
        className="border border-tv-accent/60 bg-tv-black p-4 focus:outline-none sm:p-8"
      >
        <p className="flex items-center gap-2.5 font-tv-display text-2xl font-bold tracking-wide text-tv-text uppercase">
          <MessageCircle className="size-6 shrink-0 text-tv-accent" aria-hidden />
          Your WhatsApp enquiry is ready
        </p>
        <p className="mt-4 leading-relaxed text-tv-muted">
          WhatsApp should have opened in a new tab with this message filled in.{" "}
          <strong className="text-tv-text">Nothing has been sent automatically</strong> — you choose the chat and press
          Send yourself.
        </p>
        <p className="mt-4 flex gap-2.5 border-l-2 border-tv-accent bg-tv-panel p-4 text-sm text-tv-text">
          <Info className="mt-0.5 size-4 shrink-0 text-tv-accent" aria-hidden />
          <span>
            <strong className="font-semibold">Demo mode:</strong> Torquevale is a fictional business, so no WhatsApp
            number is set and <strong className="font-semibold">no real booking or quotation is created</strong>. On a
            real website, this message would open directly in the workshop&apos;s WhatsApp chat.
          </span>
        </p>

        <h3 id={`${uid}-preview`} className="mt-6 text-lg font-bold tracking-wide uppercase">
          Message preview
        </h3>
        {/* Focusable so keyboard users can scroll a long preview. */}
        <pre
          tabIndex={0}
          aria-labelledby={`${uid}-preview`}
          className="mt-2 max-h-80 overflow-auto border border-tv-line bg-tv-panel p-4 font-sans text-sm leading-relaxed whitespace-pre-wrap text-tv-text"
        >
          {message}
        </pre>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className={solidButton}>
            <ExternalLink className="size-4 max-[359px]:hidden" aria-hidden />
            Reopen WhatsApp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <button
            type="button"
            onClick={copyMessage}
            className="inline-flex h-12 items-center justify-center gap-2 border border-tv-line px-4 font-tv-display text-base font-semibold tracking-wider text-tv-text uppercase transition-colors hover:border-tv-accent hover:text-tv-accent sm:px-6"
          >
            <Copy className="size-4 max-[359px]:hidden" aria-hidden />
            Copy message
          </button>
        </div>
        <p aria-live="polite" className="mt-2 min-h-5 text-sm text-tv-muted">
          {copied === "done" && "Message copied to your clipboard."}
          {copied === "failed" && "Couldn't copy automatically — select the text above and copy it."}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <button type="button" onClick={() => setMessage(null)} className={textButton}>
            Edit details
          </button>
          <button
            type="button"
            onClick={() => {
              setFields(initial);
              setMessage(null);
            }}
            className={textButton}
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
            className={cn(fieldBase, border("name"))}
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
            className={cn(fieldBase, border("phone"))}
            {...describe("phone")}
          />
        </Field>
        <Field id={id("car")} label="Car make & model" error={errors.car}>
          <input
            id={id("car")}
            placeholder="e.g. Honda City"
            value={fields.car}
            onChange={update("car")}
            className={cn(fieldBase, border("car"))}
            {...describe("car")}
          />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field id={id("year")} label="Year" optional error={errors.year}>
            <input
              id={id("year")}
              inputMode="numeric"
              maxLength={4}
              placeholder="e.g. 2019"
              value={fields.year}
              onChange={update("year")}
              className={cn(fieldBase, border("year"))}
              {...describe("year")}
            />
          </Field>
          <Field id={id("mileage")} label="Mileage (km)" optional error={errors.mileage}>
            <input
              id={id("mileage")}
              inputMode="numeric"
              maxLength={9}
              placeholder="e.g. 85000"
              value={fields.mileage}
              onChange={update("mileage")}
              className={cn(fieldBase, border("mileage"))}
              {...describe("mileage")}
            />
          </Field>
        </div>
        <Field id={id("service")} label="Service" error={errors.service}>
          <select
            id={id("service")}
            value={fields.service}
            onChange={update("service")}
            className={cn(fieldBase, border("service"))}
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
        <Field id={id("date")} label="Preferred date" error={errors.date}>
          <input
            id={id("date")}
            type="date"
            value={fields.date}
            onChange={update("date")}
            className={cn(fieldBase, "[color-scheme:dark]", border("date"))}
            {...describe("date")}
          />
        </Field>
      </div>

      <fieldset aria-describedby={errors.symptoms ? `${id("symptoms")}-error` : `${id("symptoms")}-hint`}>
        <legend className={labelClass}>What&apos;s the issue?</legend>
        <p id={`${id("symptoms")}-hint`} className="mt-1 text-xs text-tv-muted">
          Tick all that apply.
        </p>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {symptoms.map((s, i) => (
            <label key={s} className={cn(chipBase, errors.symptoms ? "border-[#ff8a80]" : "border-tv-line")}>
              <input
                type="checkbox"
                id={i === 0 ? id("symptoms") : undefined}
                checked={fields.symptoms.includes(s)}
                onChange={() => toggleSymptom(s)}
                className="size-4 shrink-0 accent-tv-accent"
              />
              {s}
            </label>
          ))}
        </div>
        {errors.symptoms && <ErrorText id={`${id("symptoms")}-error`}>{errors.symptoms}</ErrorText>}
      </fieldset>

      <fieldset aria-describedby={errors.time ? `${id("time")}-error` : undefined}>
        <legend className={labelClass}>Preferred time</legend>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {timeSlots.map((slot, i) => (
            <label key={slot} className={cn(chipBase, errors.time ? "border-[#ff8a80]" : "border-tv-line")}>
              <input
                type="radio"
                name={`${uid}-time`}
                id={i === 0 ? id("time") : undefined}
                value={slot}
                checked={fields.time === slot}
                onChange={() => set("time", slot)}
                className="size-4 shrink-0 accent-tv-accent"
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
          placeholder="e.g. which warning light, when the noise happens, last service date…"
          value={fields.notes}
          onChange={update("notes")}
          className={cn(fieldBase, "resize-y border-tv-line")}
        />
      </Field>

      <p className="flex gap-2.5 border-l-2 border-tv-accent bg-tv-black p-4 text-sm text-tv-muted">
        <Info className="mt-0.5 size-4 shrink-0 text-tv-accent" aria-hidden />
        <span>
          <strong className="font-semibold text-tv-text">Demo form:</strong> submitting opens WhatsApp with your enquiry
          written for you — nothing is sent automatically, stored, or delivered to a real workshop.
        </span>
      </p>

      <button type="submit" className={cn(solidButton, "w-full sm:w-auto")}>
        <MessageCircle className="size-5 max-[359px]:hidden" aria-hidden />
        Continue to WhatsApp
      </button>
    </form>
  );
}
