import { useState, type FormEvent } from "react";
import Seo from "@/components/Seo";
import { submitYouthQuestion } from "@/lib/youthQuestions";
import { ActionButton } from "@/components/ui/Button";
import { NIGERIA_STATES } from "@/data/nigeriaStates";
import type { YouthQuestionSubmission } from "@/types/content";

const SCHOOL_TYPES: NonNullable<YouthQuestionSubmission["school_type"]>[] = [
  "Secondary School",
  "University",
  "Other",
];

const EMPTY_FORM: YouthQuestionSubmission = {
  is_anonymous: true,
  name: "",
  age: null,
  school_type: null,
  state: null,
  question: "",
};

export default function AskPage() {
  const [form, setForm] = useState<YouthQuestionSubmission>(EMPTY_FORM);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    const result = await submitYouthQuestion(form);
    if (result.success) {
      setStatus("success");
      setForm(EMPTY_FORM);
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <Seo
        title="Ask a Question"
        description="Share a question or something on your mind, anonymously or with your details. For young people navigating everyday life."
        path="/ask"
      />

      <section className="section pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="section-inner grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest2 text-ember-dark">
              Ask
            </span>
            <h1 className="text-4xl sm:text-5xl font-medium leading-tight">
              What's On Your Mind?
            </h1>
            <p className="text-stone-600 leading-relaxed">
              Everyday life as a young person raises real questions, things
              that bother you, concerns you carry, things you wonder about
              but may not have anyone to ask. Share it here. You can stay
              completely anonymous, or include your details if you would
              like a more personal answer.
            </p>
            <p className="text-stone-500 text-sm leading-relaxed">
              Submissions are reviewed privately and are not published
              automatically. There is no immediate reply, but your question
              may shape future Daily Guide entries, messages, or content.
            </p>
          </div>

          <div>
            {status === "success" ? (
              <div className="border border-stone-200 p-8 flex flex-col gap-3">
                <h2 className="text-xl font-medium">Received</h2>
                <p className="text-stone-600">
                  Thank you for sharing. Your question has been received.
                </p>
                <ActionButton
                  variant="outline"
                  onClick={() => setStatus("idle")}
                  className="self-start mt-2"
                >
                  Submit Another Question
                </ActionButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4 border border-stone-200 p-4">
                  <div>
                    <p className="text-sm font-medium">Submit anonymously</p>
                    <p className="text-xs text-stone-500">
                      Turn this off to include your name, age, school, and
                      state.
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={form.is_anonymous}
                    onClick={() =>
                      setForm((f) => ({
                        ...f,
                        is_anonymous: !f.is_anonymous,
                      }))
                    }
                    className={`relative shrink-0 w-12 h-7 border transition-colors focus-visible:outline-2 focus-visible:outline-ember ${
                      form.is_anonymous
                        ? "bg-ink border-ink"
                        : "bg-ember border-ember"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 h-5 w-5 bg-paper transition-transform ${
                        form.is_anonymous
                          ? "translate-x-0.5"
                          : "translate-x-5"
                      }`}
                    />
                  </button>
                </div>

                {!form.is_anonymous && (
                  <>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required={!form.is_anonymous}
                        value={form.name ?? ""}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        className="border border-stone-300 px-4 py-3 focus-visible:outline-2 focus-visible:outline-ember"
                      />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="age" className="text-sm font-medium">
                          Age
                        </label>
                        <input
                          id="age"
                          type="number"
                          min={5}
                          max={100}
                          value={form.age ?? ""}
                          onChange={(e) =>
                            setForm((f) => ({
                              ...f,
                              age: e.target.value
                                ? Number(e.target.value)
                                : null,
                            }))
                          }
                          className="border border-stone-300 px-4 py-3 focus-visible:outline-2 focus-visible:outline-ember"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="school_type"
                          className="text-sm font-medium"
                        >
                          School
                        </label>
                        <select
                          id="school_type"
                          value={form.school_type ?? ""}
                          onChange={(e) =>
                            setForm((f) => ({
                              ...f,
                              school_type: (e.target.value ||
                                null) as YouthQuestionSubmission["school_type"],
                            }))
                          }
                          className="border border-stone-300 px-4 py-3 bg-paper focus-visible:outline-2 focus-visible:outline-ember"
                        >
                          <option value="">Prefer not to say</option>
                          {SCHOOL_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="state" className="text-sm font-medium">
                        Location (State)
                      </label>
                      <select
                        id="state"
                        value={form.state ?? ""}
                        onChange={(e) =>
                          setForm((f) => ({
                            ...f,
                            state: e.target.value || null,
                          }))
                        }
                        className="border border-stone-300 px-4 py-3 bg-paper focus-visible:outline-2 focus-visible:outline-ember"
                      >
                        <option value="">Prefer not to say</option>
                        {NIGERIA_STATES.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                <div className="flex flex-col gap-2">
                  <label htmlFor="question" className="text-sm font-medium">
                    Your Question
                  </label>
                  <textarea
                    id="question"
                    required
                    rows={6}
                    value={form.question}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, question: e.target.value }))
                    }
                    placeholder="What's bothering you, or what would you like to ask?"
                    className="border border-stone-300 px-4 py-3 focus-visible:outline-2 focus-visible:outline-ember resize-y"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-ember-dark" role="alert">
                    Something went wrong sending your question. Please try
                    again in a moment.
                  </p>
                )}

                <ActionButton
                  type="submit"
                  disabled={status === "submitting"}
                  className="self-start"
                >
                  {status === "submitting" ? "Sending" : "Submit Question"}
                </ActionButton>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
