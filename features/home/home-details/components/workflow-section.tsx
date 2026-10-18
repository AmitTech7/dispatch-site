import Image from "next/image";
import type { WorkflowStep } from "@/content/workflow";
import { SectionHeading } from "@/components/ui/section-heading";

// Colours follow the client's workflow diagram: blue = planning/logistics, amber = receiving, green = operations.
const toneStyles: Record<WorkflowStep["tone"], { card: string; badge: string }> = {
  planning: { card: "bg-sky-50 border-sky-100", badge: "bg-brand-sky" },
  receiving: { card: "bg-amber-50 border-amber-100", badge: "bg-brand-orange" },
  operations: { card: "bg-emerald-50 border-emerald-100", badge: "bg-brand-teal" },
};

export function WorkflowSection({ steps }: { steps: WorkflowStep[] }) {
  return (
    <section id="how-it-works" aria-labelledby="workflow-title" className="bg-navy-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          id="workflow-title"
          eyebrow="How It Works"
          title="Our 7-step co-packing process"
          intro="A clear, checked process from your first message to delivered goods."
        />

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const tone = toneStyles[step.tone];
            const isLast = i === steps.length - 1;
            return (
              <li
                key={step.number}
                className={`relative flex flex-col overflow-hidden rounded-2xl border ${tone.card}`}
              >
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  width={1920}
                  height={1280}
                  sizes="(min-width: 1024px) 300px, (min-width: 768px) 50vw, 100vw"
                  className="aspect-video w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <span
                    className={`flex size-10 items-center justify-center rounded-full text-lg font-extrabold text-white ${tone.badge}`}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-extrabold text-navy-800">
                    <span className="sr-only">Step {step.number}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-1 text-muted">{step.description}</p>
                </div>
                {!isLast && (
                  <span className="pb-3 text-center text-2xl text-navy-700/50 md:hidden" aria-hidden="true">
                    ↓
                  </span>
                )}
              </li>
            );
          })}
          <li className="flex flex-col justify-center rounded-2xl bg-navy-800 p-6 text-white">
            <p className="text-lg font-extrabold">Ready to start at step 1?</p>
            <p className="mt-1 text-navy-100">Share your requirements and we&apos;ll plan the rest.</p>
            <a href="#quote" className="mt-4 inline-flex self-start rounded-full bg-brand-orange px-5 py-2.5 font-bold hover:bg-brand-orange-dark">
              Get a Quote
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
}
