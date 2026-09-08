import { useState, type FormEvent } from "react";
import Seo from "@/components/Seo";
import { submitContactForm } from "@/lib/contact";
import { ActionButton } from "@/components/ui/Button";
import { MailIcon, InstagramIcon } from "@/components/ui/Icons";
import { SITE } from "@/data/site";
import type { ContactSubmission } from "@/types/content";

const INQUIRY_TYPES: ContactSubmission["inquiry_type"][] = [
  "Ministry Invitation",
  "Speaking Engagement",
  "Design Project",
  "General Inquiry",
];

export default function ContactPage() {
  const [form, setForm] = useState<ContactSubmission>({
    name: "",
    email: "",
    inquiry_type: "General Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    const result = await submitContactForm(form);
    if (result.success) {
      setStatus("success");
      setForm({
        name: "",
        email: "",
        inquiry_type: "General Inquiry",
        message: "",
      });
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Fela Ishola for ministry invitations, speaking engagements, design projects, or general inquiries."
        path="/contact"
      />

      <section className="section pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="section-inner grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest2 text-ember-dark">
                Contact
              </span>
              <h1 className="text-4xl sm:text-5xl font-medium leading-tight">
                Get in Touch
              </h1>
              <p className="text-stone-600 leading-relaxed">
                Whether it is a ministry invitation, a speaking engagement, a
                design project, or a general inquiry, reach out below.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-stone-700 hover:text-ember-dark transition-colors"
              >
                <MailIcon width={20} height={20} aria-hidden="true" />
                {SITE.email}
              </a>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-stone-700 hover:text-ember-dark transition-colors"
              >
                <InstagramIcon width={20} height={20} aria-hidden="true" />
                {SITE.instagramHandle}
              </a>
            </div>
          </div>

          <div>
            {status === "success" ? (
              <div className="border border-stone-200 p-8 flex flex-col gap-3">
                <h2 className="text-xl font-medium">Message Sent</h2>
                <p className="text-stone-600">
                  Thank you for reaching out. Your message has been received
                  and will be reviewed shortly.
                </p>
                <ActionButton
                  variant="outline"
                  onClick={() => setStatus("idle")}
                  className="self-start mt-2"
                >
                  Send Another Message
                </ActionButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="border border-stone-300 px-4 py-3 focus-visible:outline-2 focus-visible:outline-ember"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="border border-stone-300 px-4 py-3 focus-visible:outline-2 focus-visible:outline-ember"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="inquiry_type" className="text-sm font-medium">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry_type"
                    value={form.inquiry_type}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        inquiry_type: e.target
                          .value as ContactSubmission["inquiry_type"],
                      }))
                    }
                    className="border border-stone-300 px-4 py-3 bg-paper focus-visible:outline-2 focus-visible:outline-ember"
                  >
                    {INQUIRY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="border border-stone-300 px-4 py-3 focus-visible:outline-2 focus-visible:outline-ember resize-y"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-ember-dark" role="alert">
                    Something went wrong sending your message. Please try
                    again, or email {SITE.email} directly.
                  </p>
                )}

                <ActionButton
                  type="submit"
                  disabled={status === "submitting"}
                  className="self-start"
                >
                  {status === "submitting" ? "Sending" : "Send Message"}
                </ActionButton>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
