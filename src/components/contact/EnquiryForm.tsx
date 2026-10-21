"use client";

import { useId, useState } from "react";
import { CircleAlert, CircleCheck, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig, whatsappLink } from "@/config/site";
import { budgetOptions, serviceOptions } from "@/content/enquiry";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: Fields): Errors {
  const errors: Errors = {};
  if (!f.name.trim()) errors.name = "Please enter your name.";
  if (!f.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(f.email.trim())) errors.email = "Please enter a valid email address.";
  if (!f.service) errors.service = "Please choose a service.";
  if (f.message.trim().length < 10)
    errors.message = "Please describe your project in a few words (at least 10 characters).";
  return errors;
}

function composeMessage(f: Fields): string {
  const service = serviceOptions.find((o) => o.value === f.service)?.label ?? f.service;
  return [
    `Hello ${siteConfig.name}, I would like to enquire about a website.`,
    "",
    `Name: ${f.name.trim()}`,
    f.business.trim() ? `Business: ${f.business.trim()}` : null,
    `Email: ${f.email.trim()}`,
    f.phone.trim() ? `Phone: ${f.phone.trim()}` : null,
    `Service: ${service}`,
    f.budget ? `Budget range: ${f.budget}` : null,
    "",
    "Project details:",
    f.message.trim(),
  ]
    .filter((line) => line !== null)
    .join("\n");
}

const selectArrow: React.CSSProperties = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
};
const selectBase = "appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10";

// 16px text on phones stops iOS Safari zooming in when a field is focused.
const inputBase =
  "mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 sm:text-[0.9375rem] " +
  "transition-[border-color,box-shadow] duration-200 focus:border-navy focus:ring-2 focus:ring-gold/40 focus:outline-none";

type FieldProps = {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
};

function Field({ id, label, optional, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="font-display text-sm font-semibold text-navy">
        {label}
        {optional && <span className="ml-1.5 font-sans text-xs font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-red-700">
          <CircleAlert className="size-4 shrink-0" aria-hidden />
          {error}
        </p>
      )}
    </div>
  );
}

export function EnquiryForm({ defaultService = "" }: { defaultService?: string }) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const [fields, setFields] = useState<Fields>({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: serviceOptions.some((o) => o.value === defaultService) ? defaultService : "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "whatsapp" | "email">("idle");

  const wa = !siteConfig.contact.whatsappIsPlaceholder;
  const mail = !siteConfig.contact.emailIsPlaceholder;
  const hasChannel = wa || mail;

  const update =
    (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    };

  const errorProps = (key: keyof Fields) =>
    errors[key] ? { "aria-invalid": true, "aria-describedby": `${id(key)}-error` } : {};

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel = submitter?.value === "email" ? "email" : "whatsapp";

    const found = validate(fields);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      setStatus("idle");
      document.getElementById(id(firstInvalid))?.focus();
      return;
    }

    const message = composeMessage(fields);
    if (channel === "whatsapp" && wa) {
      window.open(whatsappLink(message) ?? "", "_blank", "noopener,noreferrer");
      setStatus("whatsapp");
    } else if (mail) {
      const subject = `Website enquiry from ${fields.name.trim()}`;
      window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      setStatus("email");
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} aria-describedby={`${uid}-how`} className="space-y-6">
      <p
        id={`${uid}-how`}
        className="rounded-xl border border-line bg-soft-white p-4 text-sm leading-relaxed text-muted"
      >
        This form does not send messages on its own. When you submit it, your details are put into a ready-to-send
        message on <strong className="font-semibold text-navy">WhatsApp</strong> or in your{" "}
        <strong className="font-semibold text-navy">email app</strong>, and you send it from there.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={id("name")} label="Your name" error={errors.name}>
          <input
            id={id("name")}
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={update("name")}
            className={cn(inputBase, errors.name ? "border-red-600" : "border-line")}
            {...errorProps("name")}
          />
        </Field>
        <Field id={id("business")} label="Business name" optional>
          <input
            id={id("business")}
            name="business"
            autoComplete="organization"
            value={fields.business}
            onChange={update("business")}
            className={cn(inputBase, "border-line")}
          />
        </Field>
        <Field id={id("email")} label="Email address" error={errors.email}>
          <input
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={fields.email}
            onChange={update("email")}
            className={cn(inputBase, errors.email ? "border-red-600" : "border-line")}
            {...errorProps("email")}
          />
        </Field>
        <Field id={id("phone")} label="Phone number" optional>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="e.g. 012-345 6789"
            value={fields.phone}
            onChange={update("phone")}
            className={cn(inputBase, "border-line")}
          />
        </Field>
        <Field id={id("service")} label="Service needed" error={errors.service}>
          <select
            id={id("service")}
            name="service"
            value={fields.service}
            onChange={update("service")}
            className={cn(inputBase, selectBase, errors.service ? "border-red-600" : "border-line")}
            style={selectArrow}
            {...errorProps("service")}
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
        <Field id={id("budget")} label="Budget range" optional>
          <select
            id={id("budget")}
            name="budget"
            value={fields.budget}
            onChange={update("budget")}
            className={cn(inputBase, selectBase, "border-line")}
            style={selectArrow}
          >
            <option value="">Prefer not to say</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id={id("message")} label="Project description" error={errors.message}>
        <textarea
          id={id("message")}
          name="message"
          rows={6}
          placeholder="Tell us about your business, what the website should do and any timeline you have in mind."
          value={fields.message}
          onChange={update("message")}
          className={cn(inputBase, "resize-y", errors.message ? "border-red-600" : "border-line")}
          {...errorProps("message")}
        />
      </Field>

      {hasChannel ? (
        <div className="flex flex-col gap-3 sm:flex-row">
          {wa && (
            <Button type="submit" name="channel" value="whatsapp" size="lg">
              <MessageCircle className="size-4 max-[359px]:hidden" aria-hidden />
              Continue on WhatsApp
            </Button>
          )}
          {mail && (
            <Button type="submit" name="channel" value="email" size="lg" variant={wa ? "outlineDark" : "primary"}>
              <Mail className="size-4 max-[359px]:hidden" aria-hidden />
              Continue by email
            </Button>
          )}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-navy/25 p-4 text-sm text-muted">
          [Placeholder] Contact details are not configured yet, so enquiries cannot be sent from this form.
        </p>
      )}

      <div aria-live="polite">
        {status !== "idle" && (
          <p className="flex items-start gap-3 rounded-xl border border-gold/50 bg-white p-4 text-sm leading-relaxed text-ink">
            <CircleCheck className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
            {status === "whatsapp"
              ? "WhatsApp has opened in a new tab with your message ready. Press send in WhatsApp to deliver it. If it didn't open, please allow pop-ups or use the WhatsApp button on this page."
              : "Your email app should now be open with your message ready. Press send there to deliver it. If nothing opened, please email us directly at the address on this page."}
          </p>
        )}
      </div>
    </form>
  );
}
