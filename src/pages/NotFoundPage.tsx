import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { LinkButton } from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <section className="section py-32">
        <div className="section-inner flex flex-col items-center text-center gap-6">
          <span className="text-xs uppercase tracking-widest2 text-ember-dark">
            404
          </span>
          <h1 className="text-3xl sm:text-4xl font-medium">
            This page could not be found
          </h1>
          <p className="text-stone-600 max-w-md">
            The page you are looking for may have moved or no longer exists.
          </p>
          <LinkButton to="/">Return Home</LinkButton>
          <Link
            to="/daily-guide"
            className="text-sm uppercase tracking-widest2 text-stone-500 hover:text-ink"
          >
            Or read today's Daily Guide
          </Link>
        </div>
      </section>
    </>
  );
}
