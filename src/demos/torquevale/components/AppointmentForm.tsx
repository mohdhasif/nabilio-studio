"use client";

import { useId, useRef, useState } from "react";
import { CircleAlert, Info } from "lucide-react";
import { autoServices } from "../content";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  phone: string;
  car: string;
  year: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const timeSlots = ["Morning (8:30 am – 12:00 pm)", "Afternoon (2:00 pm – 5:00 pm)"];
const serviceOptions = [
  ...autoServices.map((s) => ({ value: s.slug, label: s.title })),
  { value: "other", label: "Something else / not sure" },
];

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  if (!/^[+\d][\d\s-]{7,}$/.test(f.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!f.car.trim()) e.car = "Please enter your car's make and model.";
  if (f.year && !/^(19|20)\d{2}$/.test(f.year)) e.year = "Please enter a four-digit year.";
  if (!f.service) e.service = "Please choose a service.";
  if (!f.date) e.date = "Please choose a preferred date.";
  else if (f.date < todayISO()) e.date = "Please choose a date from today onwards.";
  if (!f.time) e.time = "Please choose a preferred time.";
  return e;
}

const fieldBase =
  "mt-2 block w-full border bg-tv-black px-4 py-3 text-[0.9375rem] text-tv-text placeholder:text-tv-muted/70 " +
  "transition-colors focus:border-tv-accent focus:outline-none";

function Field(props: { id: string; label: string; optional?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={props.id} className="font-tv-display text-base font-semibold tracking-wider uppercase">
        {props.label}
        {props.optional && (
          <span className="ml-2 font-sans text-xs font-normal tracking-normal text-tv-muted normal-case">
            (optional)
          </span>
        )}
      </label>
      {props.children}
      {props.error && (
        <p id={`${props.id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-[#ff8a80]">
          <CircleAlert className="size-4 shrink-0" aria-hidden />
          {props.error}
        </p>
      )}
    </div>
  );
}

const empty: Fields = { name: "", phone: "", car: "", year: "", service: "", date: "", time: "", notes: "" };

export function AppointmentForm({ defaultService = "" }: { defaultService?: string }) {
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;
  const initial = { ...empty, service: serviceOptions.some((o) => o.value === defaultService) ? defaultService : "" };
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const update =
    (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFields((f) => ({ ...f, [k]: e.target.value }));
      if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
    };

  const a11y = (k: keyof Fields) =>
    errors[k] ? { "aria-invalid": true as const, "aria-describedby": `${id(k)}-error` } : {};
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
        className="border border-tv-accent/60 bg-tv-black p-6 focus:outline-none sm:p-8"
      >
        <p className="flex items-center gap-2.5 font-tv-display text-2xl font-bold tracking-wide text-tv-accent uppercase">
          <Info className="size-6" aria-hidden />
          Demo only — nothing was sent
        </p>
        <p className="mt-4 leading-relaxed text-tv-muted">
          Your details passed validation, but Torquevale Motorworks is a fictional business, so this enquiry was{" "}
          <strong className="text-tv-text">not sent or stored anywhere</strong>. On a real website, it would go to the
          workshop by email or WhatsApp.
        </p>
        <dl className="mt-6 grid gap-x-6 gap-y-3 border-t border-tv-line pt-6 text-sm sm:grid-cols-2">
          {[
            ["Name", fields.name],
            ["Car", `${fields.car}${fields.year ? ` (${fields.year})` : ""}`],
            ["Service", service],
            ["Preferred slot", `${fields.date}, ${fields.time.split(" (")[0]}`],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-tv-muted">{k}</dt>
              <dd className="text-tv-text">{v}</dd>
            </div>
          ))}
        </dl>
        <button
          type="button"
          onClick={() => {
            setFields(initial);
            setSubmitted(false);
          }}
          className="mt-8 font-tv-display text-base font-semibold tracking-wider text-tv-text uppercase underline decoration-tv-accent decoration-2 underline-offset-4 hover:text-tv-accent"
        >
          Start a new enquiry
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={id("name")} label="Your name" error={errors.name}>
          <input
            id={id("name")}
            autoComplete="name"
            value={fields.name}
            onChange={update("name")}
            className={cn(fieldBase, border("name"))}
            {...a11y("name")}
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
            className={cn(fieldBase, border("phone"))}
            {...a11y("phone")}
          />
        </Field>
        <Field id={id("car")} label="Car make & model" error={errors.car}>
          <input
            id={id("car")}
            placeholder="e.g. Honda City"
            value={fields.car}
            onChange={update("car")}
            className={cn(fieldBase, border("car"))}
            {...a11y("car")}
          />
        </Field>
        <Field id={id("year")} label="Year" optional error={errors.year}>
          <input
            id={id("year")}
            inputMode="numeric"
            maxLength={4}
            placeholder="e.g. 2019"
            value={fields.year}
            onChange={update("year")}
            className={cn(fieldBase, border("year"))}
            {...a11y("year")}
          />
        </Field>
        <Field id={id("service")} label="Service" error={errors.service}>
          <select
            id={id("service")}
            value={fields.service}
            onChange={update("service")}
            className={cn(fieldBase, border("service"))}
            {...a11y("service")}
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
            {...a11y("date")}
          />
        </Field>
      </div>

      <fieldset {...(errors.time ? { "aria-describedby": `${id("time")}-error` } : {})}>
        <legend className="font-tv-display text-base font-semibold tracking-wider uppercase">Preferred time</legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {timeSlots.map((slot, i) => (
            <label
              key={slot}
              className={cn(
                "flex cursor-pointer items-center gap-3 border bg-tv-black px-4 py-3 text-sm transition-colors has-[:checked]:border-tv-accent has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-tv-accent",
                errors.time ? "border-[#ff8a80]" : "border-tv-line",
              )}
            >
              <input
                type="radio"
                name={`${uid}-time`}
                id={i === 0 ? id("time") : undefined}
                value={slot}
                checked={fields.time === slot}
                onChange={update("time")}
                className="size-4 accent-tv-accent"
              />
              {slot}
            </label>
          ))}
        </div>
        {errors.time && (
          <p id={`${id("time")}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-[#ff8a80]">
            <CircleAlert className="size-4 shrink-0" aria-hidden />
            {errors.time}
          </p>
        )}
      </fieldset>

      <Field id={id("notes")} label="Describe the issue" optional>
        <textarea
          id={id("notes")}
          rows={4}
          placeholder="Warning lights, noises, last service date…"
          value={fields.notes}
          onChange={update("notes")}
          className={cn(fieldBase, "resize-y border-tv-line")}
        />
      </Field>

      <p className="flex items-start gap-2.5 border-l-2 border-tv-accent pl-3 text-sm text-tv-muted">
        Demo form: submissions are checked in your browser and then discarded. Nothing is sent or stored.
      </p>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center bg-tv-accent px-8 font-tv-display text-base font-semibold tracking-wider text-tv-black uppercase transition-colors hover:bg-tv-accent-hover [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)] sm:w-auto"
      >
        Request Appointment
      </button>
    </form>
  );
}
