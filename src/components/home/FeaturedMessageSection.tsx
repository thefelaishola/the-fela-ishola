import { useEffect, useState } from "react";
import { fetchFeaturedMessages } from "@/lib/messages";
import type { MessageRecord } from "@/types/content";
import { LinkButton } from "@/components/ui/Button";
import StatePanel from "@/components/ui/StatePanel";

export default function FeaturedMessageSection() {
  const [messages, setMessages] = useState<MessageRecord[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "empty" | "error">(
    "loading"
  );

  useEffect(() => {
    let active = true;
    fetchFeaturedMessages().then(({ data, error }) => {
      if (!active) return;
      if (error) {
        setStatus("error");
      } else if (data.length === 0) {
        setStatus("empty");
      } else {
        setMessages(data);
        setStatus("ready");
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="section py-20 sm:py-28">
      <div className="section-inner">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest2 text-ember-dark">
              Featured Message
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium leading-tight">
              Peace Be Still
            </h2>
          </div>
          <LinkButton to="/messages" variant="ghost" className="border-ink">
            Read Messages
          </LinkButton>
        </div>

        {status === "loading" && (
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="h-56 border border-stone-200 animate-pulse motion-reduce:animate-none" />
            <div className="h-56 border border-stone-200 animate-pulse motion-reduce:animate-none" />
          </div>
        )}

        {(status === "empty" || status === "error") && (
          <StatePanel
            kind={status === "error" ? "error" : "empty"}
            title={
              status === "error"
                ? "Messages are temporarily unavailable"
                : "Messages are on the way"
            }
          />
        )}

        {status === "ready" && (
          <div className="grid sm:grid-cols-2 gap-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className="border border-stone-200 p-8 flex flex-col gap-4"
              >
                <span className="text-xs uppercase tracking-widest2 text-stone-400">
                  {message.part ? `Part ${message.part}` : "Message"}
                </span>
                <h3 className="text-xl font-medium">{message.title}</h3>
                <p className="text-stone-600 leading-relaxed line-clamp-4">
                  {message.description}
                </p>
                <div className="mt-2">
                  <LinkButton
                    to={`/messages/${message.slug}`}
                    variant="ghost"
                    className="border-ink"
                  >
                    Read the Full Message
                  </LinkButton>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
