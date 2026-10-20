"use client";

import { useId, useRef, useState } from "react";
import { CircleAlert, CircleCheck } from "lucide-react";
import { services } from "../content";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  phone: string;
  location: string;
  service: string;
  date: string;
  units: string;
  notes: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const serviceOptions = services.map((s) => ({ value: s.slug, label: s.title }));
const unitOptions = ["1 unit", "2 units", "3 units", "4 or more units"];
const empty: Fields = { name: "", phone: "", location: "", service: "", date: "", units: "", notes: "" };

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function validate(f: Fields): Errors {
  const e: Errors = {};
  const name = f.name.trim();
  if (!name) e.name = "Please enter your name.";
  else if (name.length < 2) e.name = "Name must be at least 2 characters.";
  const phoneDigits = f.phone.replace(/\D/g, "");
  if (!f.phone.trim()) e.phone = "Please enter your phone number.";
  else if (!/^[+\d][\d\s-]*$/.test(f.phone.trim()) || phoneDigits.length < 9 || phoneDigits.length > 12)
    e.phone = "Please enter a valid phone number, e.g. 012-345 6789.";
  if (f.location.trim().length < 2) e.location = "Please enter your area or town.";
  if (!f.service) e.service = "Please choose a service type.";
  if (!f.date) e.date = "Please choose a preferred date.";
  else if (f.date < todayISO()) e.date = "Please choose a date from today onwards.";
  return e;
}

const inputBase =
  "mt-2 block w-full rounded-2xl border bg-white px-4 py-3 text-[0.9375rem] text-cn-ink placeholder:text-cn-muted/70 " +
  "transition-[border-color,box-shadow] focus:border-cn-primary focus:ring-4 focus:ring-cn-primary/15 focus:outline-none";

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
      {props.error && (
        <p id={`${props.id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-red-700">
          <CircleAlert className="size-4 shrink-0" aria-hidden />
          {props.error}
        </p>
      )}
    </div>
  );
}

export function ServiceBookingForm({ defaultService = "" }: { defaultService?: string }) {
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;
  const initial: Fields = {
    ...empty,
    service: serviceOptions.some((o) => o.value === defaultService) ? defaultService : "",
  };
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const update =
    (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFields((f) => ({ ...f, [k]: e.target.value }));
      if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
    };

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
    // Demo only: nothing is sent or stored.
    setSubmitted(true);
    requestAnimationFrame(() => resultRef.current?.focus());
  }

  if (submitted) {
    const service = serviceOptions.find((o) => o.value === fields.service)?.label;
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        role="status"
        className="rounded-3xl border border-cn-mint/50 bg-cn-ice p-6 focus:outline-none sm:p-8"
      >
        <p className="flex items-center gap-3 font-cn-display text-xl font-bold text-cn-ink">
          <CircleCheck className="size-7 shrink-0 text-cn-mint-text" aria-hidden />
          Demo booking received — nothing was sent
        </p>
        <p className="mt-4 leading-relaxed text-cn-muted">
          Thanks, {fields.name.trim()}. Your details passed validation, but CoolNest is a fictional company, so this
          request was <strong className="text-cn-ink">not sent or stored anywhere</strong>. On a real website, it would
          reach the company by email or WhatsApp.
        </p>
        <dl className="mt-6 grid gap-x-6 gap-y-3 rounded-2xl bg-white p-5 text-sm sm:grid-cols-2">
          {[
            ["Service", service],
            ["Preferred date", fields.date],
            ["Location", fields.location.trim()],
            ["Units", fields.units || "Not specified"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-cn-muted">{k}</dt>
              <dd className="font-medium text-cn-ink">{v}</dd>
            </div>
          ))}
        </dl>
        <button
          type="button"
          onClick={() => {
            setFields(initial);
            setSubmitted(false);
          }}
          className="mt-6 text-sm font-semibold text-cn-primary underline underline-offset-4 hover:text-cn-primary-hover"
        >
          Make another booking
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={id("name")} label="Full name" error={errors.name}>
          <input
            id={id("name")}
            autoComplete="name"
            value={fields.name}
            onChange={update("name")}
            className={cn(inputBase, border("name"))}
            {...describe("name")}
          />
        </Field>
        <Field id={id("phone")} label="Phone number" error={errors.phone}>
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
        <Field id={id("location")} label="Location" hint="Your area or town, e.g. Shah Alam" error={errors.location}>
          <input
            id={id("location")}
            autoComplete="address-level2"
            value={fields.location}
            onChange={update("location")}
            className={cn(inputBase, border("location"))}
            {...describe("location", true)}
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
        <Field id={id("units")} label="Number of units" optional>
          <select
            id={id("units")}
            value={fields.units}
            onChange={update("units")}
            className={cn(inputBase, "border-cn-line")}
          >
            <option value="">Not sure</option>
            {unitOptions.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id={id("notes")} label="Anything we should know?" optional>
        <textarea
          id={id("notes")}
          rows={4}
          placeholder="e.g. unit brand, leaking water, error code, which room…"
          value={fields.notes}
          onChange={update("notes")}
          className={cn(inputBase, "resize-y border-cn-line")}
        />
      </Field>

      <p className="rounded-2xl bg-cn-ice p-4 text-sm text-cn-muted">
        <strong className="font-semibold text-cn-ink">Demo form:</strong> your details are checked in your browser and
        then discarded. Nothing is sent or stored.
      </p>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-cn-primary px-8 font-cn-display text-[0.9375rem] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(10,110,148,0.8)] transition-colors hover:bg-cn-primary-hover sm:w-auto"
      >
        Request Booking
      </button>
    </form>
  );
}
