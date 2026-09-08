import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import { fetchMessageBySlug } from "@/lib/messages";
import type { MessageRecord } from "@/types/content";
import StatePanel from "@/components/ui/StatePanel";
import AudioPlayer from "@/components/messages/AudioPlayer";

export default function MessageDetailPage() {
  const { slug = "" } = useParams();
  const [message, setMessage] = useState<MessageRecord | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "empty" | "error">(
    "loading"
  );

  useEffect(() => {
    let active = true;
    setStatus("loading");
    fetchMessageBySlug(slug).then(({ data, error }) => {
      if (!active) return;
      if (error || !data) {
        setStatus(error === "not-configured" ? "error" : "empty");
        return;
      }
      setMessage(data);
      setStatus("ready");
    });
    return () => {
      active = false;
    };
  }, [slug]);

  if (status === "loading") {
    return (
      <div className="section py-24">
        <div className="section-inner max-w-2xl h-96 border border-stone-200 animate-pulse motion-reduce:animate-none" />
      </div>
    );
  }

  if (status !== "ready" || !message) {
    return (
      <div className="section py-24">
        <div className="section-inner max-w-2xl">
          <StatePanel
            kind={status === "error" ? "error" : "empty"}
            title={
              status === "error"
                ? "This message is temporarily unavailable"
                : "This message could not be found"
            }
          />
          <div className="mt-8">
            <Link
              to="/messages"
              className="text-sm uppercase tracking-widest2 text-ember-dark"
            >
              Back to Messages
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={message.title}
        description={message.description.slice(0, 155)}
        path={`/messages/${message.slug}`}
      />

      <article className="section pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="section-inner max-w-2xl flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest2 text-ember-dark">
              {message.part ? `Part ${message.part}` : "Message"}
            </span>
            <h1 className="text-3xl sm:text-4xl font-medium leading-tight">
              {message.title}
            </h1>
          </div>

          <AudioPlayer src={message.audio_url} title={message.title} />

          <section className="flex flex-col gap-4 text-stone-700 leading-relaxed text-lg">
            {message.description.split(/\n\s*\n/).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          {message.transcript && (
            <section className="flex flex-col gap-4 pt-8 border-t border-stone-200">
              <h2 className="text-sm uppercase tracking-widest2 text-stone-400">
                Transcript
              </h2>
              <div className="flex flex-col gap-4 text-stone-700 leading-relaxed">
                {message.transcript.split(/\n\s*\n/).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
