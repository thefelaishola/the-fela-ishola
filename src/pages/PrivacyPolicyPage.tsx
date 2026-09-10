import Seo from "@/components/Seo";
import { SITE } from "@/data/site";

const EFFECTIVE_DATE = "September 10, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How The Fela ishola collects, uses, and protects information submitted through this website."
        path="/privacy-policy"
      />

      <section className="section pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="section-inner max-w-2xl">
          <div className="flex flex-col gap-4 mb-12">
            <span className="text-xs uppercase tracking-widest2 text-ember-dark">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-medium leading-tight">
              Privacy Policy
            </h1>
            <p className="text-stone-500">Effective {EFFECTIVE_DATE}</p>
          </div>

          <div className="flex flex-col gap-10 text-stone-700 leading-relaxed">
            <p>
              This page explains what information {SITE.brandName} collects
              when you use this website, and how that information is used.
            </p>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">
                Information We Collect
              </h2>
              <p>
                When you fill out the contact form on this site, we collect
                your name, email address, the type of inquiry you selected,
                and the message you send. This is currently the only
                personal information this site collects.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">
                How We Use Your Information
              </h2>
              <p>
                We use the information you submit to respond to your
                inquiry, whether it is a ministry invitation, a speaking
                engagement, a design project, or a general question. We do
                not use your information for any other purpose.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">
                How We Store Your Information
              </h2>
              <p>
                Contact form submissions are stored securely using Supabase,
                our database provider. We do not sell, rent, or share your
                information with any third party.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">
                Cookies and Analytics
              </h2>
              <p>
                This site does not currently use cookies or analytics tools
                to track visitors. If that changes in the future, this page
                will be updated to reflect it.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">Your Rights</h2>
              <p>
                You can contact us at any time to ask what information we
                have about you, or to request that it be corrected or
                deleted. Reach out at{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-ember-dark hover:text-ink"
                >
                  {SITE.email}
                </a>
                .
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">
                Children's Privacy
              </h2>
              <p>
                This site is not directed at children, and we do not
                knowingly collect information from children.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">
                Changes to This Policy
              </h2>
              <p>
                We may update this page from time to time. Any changes will
                be posted here with a new effective date.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">Contact Us</h2>
              <p>
                If you have questions about this privacy policy, email{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-ember-dark hover:text-ink"
                >
                  {SITE.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
