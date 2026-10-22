/**
 * Helpers shared by the demo enquiry forms that hand off to WhatsApp (CoolNest, Torquevale).
 * Demos pass a null recipient, so WhatsApp opens with the message prefilled and no chat selected.
 */

/** Today's date as YYYY-MM-DD in the visitor's time zone (for comparing with <input type="date">). */
export function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

/** Malaysian mobile numbers: 01X-XXX XXXX(X), optionally written with +60 / 60. Returns local digits or null. */
export function normaliseMyMobile(input: string): string | null {
  let digits = input.replace(/[\s-]/g, "");
  if (!/^\+?\d+$/.test(digits)) return null;
  digits = digits.replace(/^\+/, "");
  if (digits.startsWith("60")) digits = "0" + digits.slice(2);
  return /^01\d{8,9}$/.test(digits) ? digits : null;
}

export function formatMyMobile(digits: string) {
  // 0123456789 -> 012-345 6789, 01112345678 -> 011-1234 5678
  return digits.length === 11
    ? `${digits.slice(0, 3)}-${digits.slice(3, 7)} ${digits.slice(7)}`
    : `${digits.slice(0, 3)}-${digits.slice(3, 6)} ${digits.slice(6)}`;
}

/** e.g. "Mon, 26 Oct 2026" for a YYYY-MM-DD value. */
export function formatEnquiryDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-MY", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** wa.me link; with no recipient configured WhatsApp asks the user to pick a chat. */
export function whatsappUrl(recipient: string | null, message: string) {
  const base = recipient ? `https://wa.me/${recipient}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}
