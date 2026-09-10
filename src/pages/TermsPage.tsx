import Seo from "@/components/Seo";
import { SITE } from "@/data/site";

const EFFECTIVE_DATE = "September 10, 2026";

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms and Conditions"
        description="The terms that apply when you use The Fela ishola website."
        path="/terms"
      />

      <section className="section pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="section-inner max-w-2xl">
          <div className="flex flex-col gap-4 mb-12">
            <span className="text-xs uppercase tracking-widest2 text-ember-dark">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-medium leading-tight">
              Terms and Conditions
            </h1>
            <p className="text-stone-500">Effective {EFFECTIVE_DATE}</p>
          </div>

          <div className="flex flex-col gap-10 text-stone-700 leading-relaxed">
            <p>
              Welcome to {SITE.brandName}. By using this website, you agree
              to the following terms.
            </p>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">
                About This Site
              </h2>
              <p>
                This website shares the ministry, teaching, and creative
                work of {SITE.personName}, including Freedom Nation and
                Fegitals Digitals. The content here, including the Daily
                Guide, Messages, and portfolio work, is provided for
                informational and ministry purposes.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">Using This Site</h2>
              <p>
                You are welcome to browse, read, and listen to the content
                on this site. Please do not copy, republish, or reuse the
                written content, images, audio, or design work without
                asking first.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">
                The Contact Form
              </h2>
              <p>
                When you use the contact form, please provide accurate
                information. Please do not use the form to send spam,
                unrelated advertising, or abusive messages.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">
                Content Accuracy
              </h2>
              <p>
                We do our best to keep the information on this site accurate
                and up to date, but we cannot guarantee that everything is
                always error free.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">No Warranty</h2>
              <p>
                This site and its content are provided as is, without any
                guarantee of any kind.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">
                Limitation of Liability
              </h2>
              <p>
                {SITE.brandName} and Fegitals Digitals are not responsible
                for any loss or damage that may come from using this
                website.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">Governing Law</h2>
              <p>These terms are governed by the laws of Nigeria.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">
                Changes to These Terms
              </h2>
              <p>
                We may update these terms from time to time. Continuing to
                use the site after changes means you accept the updated
                terms.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-medium text-ink">Contact Us</h2>
              <p>
                Questions about these terms can be sent to{" "}
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
