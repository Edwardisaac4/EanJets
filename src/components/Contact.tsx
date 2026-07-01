import { useState, useRef } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if the credentials have been configured
    const isConfigured =
      serviceId &&
      serviceId !== "your_service_id_here" &&
      templateId &&
      templateId !== "your_template_id_here" &&
      publicKey &&
      publicKey !== "your_public_key_here";

    if (!isConfigured) {
      console.warn(
        "EmailJS is not fully configured in your .env.local file. Simulating successful submission for development..."
      );
      // Simulate network request
      setTimeout(() => {
        setStatus("success");
        setFormData(initialFormState);
      }, 1500);
      return;
    }

    try {
      // Use emailjs to send the form
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "EAN Jets Operations",
        },
        { publicKey }
      );

      if (result.status === 200) {
        setStatus("success");
        setFormData(initialFormState);
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      const err = error as { text?: string } | null | undefined;
      setErrorMessage(
        err?.text || "An unexpected error occurred while sending your request. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden bg-bg-primary">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary mt-2">
            Start Your Journey
          </h2>
          <p className="text-sm text-text-secondary mt-3">
            Reach out to our operations team for charter inquiries, aircraft management, or FBO services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column — Contact Info */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <div className="p-8 rounded-2xl bg-bg-secondary border border-border-subtle backdrop-blur-md">
              <h3 className="text-xl font-bold text-text-primary mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">EAN Jet Center</h4>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      Murtala Muhammed International Airport,<br />
                      FAAN Terminal, Ikeja, Lagos, Nigeria
                    </p>
                  </div>
                </div>

                {/* Operations Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">Email Support</h4>
                    <p className="text-xs text-text-secondary mt-1">
                      <a href="mailto:info@eanjets.aero" className="hover:text-gold transition-colors">
                        info@eanjets.aero
                      </a>
                    </p>
                  </div>
                </div>

                {/* Operations Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">Call Operations</h4>
                    <p className="text-xs text-text-secondary mt-1">
                      <a href="tel:+2348050333410" className="hover:text-gold transition-colors">
                        +234 (0) 805 033 3410
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-bg-secondary/50 border border-border-subtle text-center">
              <p className="text-xs text-text-muted">
                Operating 24/7 for scheduled charter flights and ground support services at MMIA Terminal, Lagos.
              </p>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-bg-secondary border border-border-subtle backdrop-blur-md relative overflow-hidden">

              {/* Form Success State Screen Overlay */}
              {status === "success" && (
                <div className="absolute inset-0 bg-bg-secondary/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-gold animate-scale-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">Message Sent Successfully</h3>
                  <p className="text-sm text-text-secondary max-w-sm mb-8">
                    Thank you for reaching out to EAN Jets. A member of our operations flight crew will contact you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 text-xs font-semibold text-bg-primary bg-gold hover:bg-gold-light rounded-full transition-colors duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">Charter Inquiry Form</h3>

                {status === "error" && (
                  <div className="p-4 bg-red-950/40 border border-red-800/50 rounded-xl flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>
                    <div className="text-xs text-red-200">
                      <p className="font-semibold mb-1">Failed to send message</p>
                      <p className="leading-relaxed">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-text-secondary">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={status === "submitting"}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-bg-primary border border-border-subtle focus:border-gold outline-none rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-muted transition-all duration-300 disabled:opacity-50"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-text-secondary">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={status === "submitting"}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-bg-primary border border-border-subtle focus:border-gold outline-none rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-muted transition-all duration-300 disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold text-text-secondary">
                    Subject / Charter Type
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    disabled={status === "submitting"}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. HondaJet Charter Booking / Flight Request"
                    className="w-full bg-bg-primary border border-border-subtle focus:border-gold outline-none rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-muted transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-text-secondary">
                    Flight Requirements / Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    disabled={status === "submitting"}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your destination, schedule, passengers, or catering requirements..."
                    className="w-full bg-bg-primary border border-border-subtle focus:border-gold outline-none rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-muted transition-all duration-300 resize-none disabled:opacity-50"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-gold hover:bg-gold-light text-text-primary font-semibold py-4 rounded-full transition-all duration-300 shadow-lg shadow-gold/20 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Transmitting Flight Plan...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
