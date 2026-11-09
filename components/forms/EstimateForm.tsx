"use client";

import { useState, type FormEvent } from "react";

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "projectDetails" | "consent", string>
>;

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string; mode?: string }
  | { type: "error"; message: string };

const initial = {
  name: "",
  email: "",
  phone: "",
  projectDetails: "",
  consent: false,
  /** Honeypot — leave empty; bots that fill it are rejected. */
  companyWebsite: "",
};

export function EstimateForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ type: "idle" });

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (
      values.phone.trim() &&
      values.phone.replace(/\D/g, "").length < 7
    ) {
      next.phone = "Please enter a valid phone number or leave it blank.";
    }
    if (values.projectDetails.trim().length < 10) {
      next.projectDetails =
        "Please share a bit more about your framing project.";
    }
    if (!values.consent) {
      next.consent = "Consent is required so we can contact you.";
    }
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: "idle" });
      return;
    }

    setStatus({ type: "submitting" });

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        mode?: string;
        error?: string;
        errors?: FieldErrors;
      };

      if (!response.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setStatus({
          type: "error",
          message:
            data.error ||
            "Something went wrong. Please email joynerconstllc@gmail.com.",
        });
        return;
      }

      setValues(initial);
      setErrors({});
      setStatus({
        type: "success",
        message: data.message || "Thank you. Your request was received.",
        mode: data.mode,
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Network error. Please try again or email joynerconstllc@gmail.com.",
      });
    }
  }

  const fieldClass =
    "w-full border border-charcoal/15 bg-white px-4 py-3 text-charcoal outline-none transition-colors placeholder:text-stone focus:border-copper";
  const labelClass =
    "mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stone-ink";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="relative space-y-5"
      aria-describedby="estimate-form-status"
    >
      {/* Honeypot: hidden from people, visible to simple bots */}
      <div
        aria-hidden="true"
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="estimate-company-website">Company website</label>
        <input
          id="estimate-company-website"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.companyWebsite}
          onChange={(e) =>
            setValues((v) => ({ ...v, companyWebsite: e.target.value }))
          }
        />
      </div>

      <div>
        <label htmlFor="estimate-name" className={labelClass}>
          Name <span className="text-copper-bright">*</span>
        </label>
        <input
          id="estimate-name"
          name="name"
          autoComplete="name"
          required
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className={fieldClass}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "estimate-name-error" : undefined}
        />
        {errors.name ? (
          <p id="estimate-name-error" className="mt-2 text-sm text-copper-bright">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="estimate-email" className={labelClass}>
          Email <span className="text-copper-bright">*</span>
        </label>
        <input
          id="estimate-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className={fieldClass}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "estimate-email-error" : undefined}
        />
        {errors.email ? (
          <p
            id="estimate-email-error"
            className="mt-2 text-sm text-copper-bright"
          >
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="estimate-phone" className={labelClass}>
          Phone{" "}
          <span className="font-normal normal-case tracking-normal text-stone">
            (optional)
          </span>
        </label>
        <input
          id="estimate-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
          className={fieldClass}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "estimate-phone-error" : undefined}
        />
        {errors.phone ? (
          <p
            id="estimate-phone-error"
            className="mt-2 text-sm text-copper-bright"
          >
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="estimate-details" className={labelClass}>
          Project details <span className="text-copper-bright">*</span>
        </label>
        <textarea
          id="estimate-details"
          name="projectDetails"
          required
          rows={5}
          value={values.projectDetails}
          onChange={(e) =>
            setValues((v) => ({ ...v, projectDetails: e.target.value }))
          }
          className={`${fieldClass} resize-y`}
          placeholder="New home, addition, or renovation framing in Bellingham…"
          aria-invalid={Boolean(errors.projectDetails)}
          aria-describedby={
            errors.projectDetails ? "estimate-details-error" : undefined
          }
        />
        {errors.projectDetails ? (
          <p
            id="estimate-details-error"
            className="mt-2 text-sm text-copper-bright"
          >
            {errors.projectDetails}
          </p>
        ) : null}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-stone-ink">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={(e) =>
              setValues((v) => ({ ...v, consent: e.target.checked }))
            }
            className="mt-1 h-4 w-4 accent-copper"
            aria-invalid={Boolean(errors.consent)}
          />
          <span>
            I agree to be contacted by Joyner Construction LLC about this
            estimate request. <span className="text-copper">*</span>
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-2 text-sm text-copper-bright">{errors.consent}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status.type === "submitting"}
        className="inline-flex min-h-11 w-full items-center justify-center bg-charcoal px-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-charcoal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status.type === "submitting" ? "Sending…" : "Request an Estimate"}
      </button>

      <div
        id="estimate-form-status"
        role="status"
        aria-live="polite"
        className="min-h-[1.5rem] text-sm"
      >
        {status.type === "success" ? (
          <p className="text-stone-ink">{status.message}</p>
        ) : null}
        {status.type === "error" ? (
          <p className="text-copper">{status.message}</p>
        ) : null}
      </div>
    </form>
  );
}
