
import { useEffect, useRef, useState } from 'react';

const introParagraphs = [
  'A loving person with a joyful spirit and a kind heart, with both strengths and imperfections like everyone. She’s also a proud mother to a wonderful son Ed Ryan, whose love and presence inspire her every day.',
  'Her journey to America has been shaped by courage, hope, and a determination to build a life devoted to caring for others. As a Black woman and immigrant pursuing her calling as a wellness professional, she understands how meaningful it is to feel welcomed, understood, and truly seen. She brings that understanding to every interaction.',
];

const moreParagraphs = [
  'Before becoming a Licensed Massage Therapist and Licensed Nursing Assistant, Mardochée worked in business administration, photography, and cultural journalism. These experiences deepened her appreciation for people, their stories, and the many ways we express ourselves. Still, her heart continued to lead her toward healing work, a path that allows Mardochée to help others feel supported, cared for, and more at ease.',
  'Mardochée’s journey toward healing and inner peace inspired her to support others on their paths to wellness. That calling led her to become the owner of Energy and Ease LLC, a spa created to offer more than a moment of relaxation. It’s a welcoming space where everyone can slow down, release some of the tension they’ve been carrying, and feel cared for just as they are.',
  'Through personalized massage and a compassionate, attentive approach, she hopes each guest leaves feeling seen, renewed, and more connected to their well-being.',
];

const Biography = () => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const reveal = (delay = '') =>
    `transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${delay} ${
      visible
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'
    }`;

  return (
    <section
      ref={sectionRef}
      id="biography"
      aria-labelledby="biography-heading"
      className="relative isolate w-full overflow-hidden bg-[#F3F8F2] px-5 py-20 sm:px-8 md:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#B9DCC0]/50 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[450px] w-[450px] rounded-full bg-[#D2E8D3]/60 blur-[100px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className={`mb-14 text-center md:mb-20 ${reveal()}`}>
          <div className="mb-5 inline-flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#198754]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#198754] sm:text-xs">
              The Heart Behind Energy & Ease
            </span>

            <span className="h-px w-8 bg-[#198754]" />
          </div>

          <h2
            id="biography-heading"
            className="font-serif text-4xl font-medium tracking-tight text-[#183D2B] sm:text-5xl md:text-6xl"
          >
            Wellness Begins
            <span className="block italic text-[#198754]">
              With Compassion.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#647568] sm:text-base">
            Behind every healing experience is a person who genuinely cares.
            Get to know the heart, passion, and purpose behind our spa.
          </p>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className={`mx-auto w-full max-w-[440px] ${reveal()}`}>
            <div className="relative px-3 pb-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-5 bottom-3 rounded-t-[48%] rounded-b-[12px] border border-[#198754]/60"
              />

              <div className="relative mx-auto w-full overflow-hidden rounded-t-[48%] rounded-b-[12px] bg-[#DCEBDD] shadow-[0_25px_70px_rgba(24,61,43,0.16)]">
                <img
                  src="/assets/profile.jpeg"
                  alt="Mardochée, founder of Energy and Ease LLC"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-[1.035] motion-reduce:transition-none"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#123B27]/30 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-1 left-1/2 z-10 w-[88%] -translate-x-1/2 rounded-xl border border-white/80 bg-white/95 px-4 py-4 text-center shadow-[0_12px_35px_rgba(24,61,43,0.15)] backdrop-blur-md sm:w-[80%]">
                <p className="font-serif text-xl text-[#174D35]">
                  Mardochée Bijoux
                </p>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#43835B] sm:text-[10px]">
                  Founder & Owner · Energy and Ease LLC
                </p>
              </div>

              <div
                aria-hidden="true"
                className="absolute -right-1 top-1 flex h-16 w-16 items-center justify-center rounded-full border border-[#198754]/40 bg-[#F3F8F2] text-2xl text-[#198754]"
              >
                ✳
              </div>
            </div>
          </div>

          <div className={reveal('delay-200')}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#198754]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#198754] sm:text-xs">
                A Story of Care & Purpose
              </span>
            </div>

            <h3 className="font-serif text-3xl font-medium leading-tight tracking-tight text-[#183D2B] sm:text-4xl md:text-[46px]">
              Meet Mardochée
            </h3>

            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#43835B] sm:text-sm">
              Licensed Massage Therapist
              <span className="mx-2 text-[#B9DCC0]">|</span>
              Licensed Nursing Assistant
            </p>

            <div className="my-7 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#198754]" />
              <span className="h-px w-16 bg-[#B9DCC0]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#198754]" />
            </div>

            <div className="space-y-5 text-[14px] leading-[1.95] text-[#536459] sm:text-[15px]">
              {introParagraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}

              <div
                id="bio-more"
                className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  expanded
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
                aria-hidden={!expanded}
              >
                <div className="overflow-hidden">
                  <div className="space-y-5 pt-1">
                    {moreParagraphs.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              aria-controls="bio-more"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#198754] px-7 py-3 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(25,135,84,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#146C43] hover:shadow-[0_10px_25px_rgba(25,135,84,0.30)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B9DCC0] focus-visible:ring-offset-2 active:scale-[0.97] motion-reduce:transition-none"
            >
              {expanded ? 'Read Less' : 'Discover Her Story'}

              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-4 w-4 transition-transform duration-300 ${
                  expanded
                    ? 'rotate-180'
                    : 'group-hover:translate-y-0.5'
                }`}
              >
                <path d="M10 3v13M5 11l5 5 5-5" />
              </svg>
            </button>

            {/* Signature */}
            <div className="mt-12 border-t border-[#C8DDCA] pt-7">
              <p className="font-serif text-2xl italic text-[#198754]">
                With care, compassion & intention.
              </p>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#71917A]">
                Energy and Ease LLC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
