import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { fetchMessages } from "@/lib/messages";
import type { MessageRecord } from "@/types/content";
import StatePanel from "@/components/ui/StatePanel";

export default function MessagesListPage() {
  const [messages, setMessages] = useState<MessageRecord[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "empty" | "error">(
    "loading"
  );

  useEffect(() => {
    let active = true;
    fetchMessages().then(({ data, error }) => {
      if (!active) return;
      if (error) setStatus("error");
      else if (data.length === 0) setStatus("empty");
      else {
        setMessages(data);
        setStatus("ready");
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <Seo
        title="Messages"
        description="Messages from Fela Ishola. Read the description, the transcript, and listen where audio is available."
        path="/messages"
      />

      <section className="section pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="section-inner flex flex-col gap-6 max-w-2xl">
          <span className="text-xs uppercase tracking-widest2 text-ember-dark">
            Messages
          </span>
          <h1 className="text-4xl sm:text-5xl font-medium leading-tight">
            Messages
          </h1>
        </div>
      </section>

      <section className="section pb-24 sm:pb-32">
        <div className="section-inner">
          {status === "loading" && (
            <div className="grid sm:grid-cols-2 gap-6">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="h-64 border border-stone-200 animate-pulse motion-reduce:animate-none"
                />
              ))}
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
                <Link
                  key={message.id}
                  to={`/messages/${message.slug}`}
                  className="border border-stone-200 p-8 flex flex-col gap-4 hover:border-ink transition-colors"
                >
                  <span className="text-xs uppercase tracking-widest2 text-stone-400">
                    {message.part ? `Part ${message.part}` : "Message"}
                  </span>
                  <h2 className="text-xl font-medium">{message.title}</h2>
                  <p className="text-stone-600 leading-relaxed line-clamp-4">
                    {message.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
