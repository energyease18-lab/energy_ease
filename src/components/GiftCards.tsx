import { useEffect } from 'react';

const giftCards = [
  {
    amount: '$50',
    image: '/assets/gift50.jpeg',
    serviceId: '174',
  },
  {
    amount: '$75',
    image: '/assets/gift75.jpeg',
    serviceId: '100030',
  },
  {
    amount: '$100',
    image: '/assets/gift100.jpeg',
    serviceId: '100031',
  },
];

const GiftWidgets = () => {
  useEffect(() => {
    const scriptUrl =
      'https://widgets.mindbodyonline.com/javascripts/healcode.js';

    const existingScript = document.querySelector(
      `script[src="${scriptUrl}"]`
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-emerald-50/60 to-white px-5 py-16 md:px-8 md:py-24">
      <style>{`
        @keyframes gift-rise {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes gift-shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .gift-rise {
          opacity: 0;
          animation: gift-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .gift-skeleton {
          background: linear-gradient(90deg, #d1fae5 25%, #ecfdf5 50%, #d1fae5 75%);
          background-size: 200% 100%;
          animation: gift-shimmer 1.6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .gift-rise { animation: none; opacity: 1; }
          .gift-skeleton { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div
          className="gift-rise mx-auto mb-12 max-w-2xl text-center md:mb-16"
          style={{ animationDelay: '0ms' }}
        >
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Holiday Gift Card
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
            Give someone the gift of real relaxation. Choose an amount and
            check out securely through Mindbody.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3 md:gap-8 lg:gap-10 cursor-pointer">
          {giftCards.map((gift, index) => (
            <article
              key={gift.serviceId}
              className="gift-rise group flex flex-col items-center rounded-2xl bg-white p-4 shadow-[0_1px_3px_rgba(16,24,40,0.08)] ring-1 ring-gray-100 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(5,150,105,0.25)] hover:ring-emerald-200 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-5"
              style={{ animationDelay: `${150 + index * 120}ms` }}
            >
              <div className="mb-5 w-full overflow-hidden rounded-xl bg-gray-50">
                <img
                  src={gift.image}
                  alt={`${gift.amount} Massage Therapy Gift Card`}
                  loading="lazy"
                  className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>

              <h2 className="mb-5 text-xl font-semibold tracking-tight text-gray-900">
                {gift.amount} Gift Card
              </h2>

              <div
                className="
                  relative flex min-h-[52px] w-full justify-center
                  [&:has(.healcode-gift-card-text-link)_.gift-skeleton]:hidden
                "
              >
                <span
                  aria-hidden="true"
                  className="gift-skeleton absolute top-0 h-[52px] w-full max-w-[220px] rounded-full"
                />

                <div
                  className="
                    relative z-10 flex w-full justify-center
                    [&_.healcode-gift-card-text-link]:inline-flex
                    [&_.healcode-gift-card-text-link]:w-full
                    [&_.healcode-gift-card-text-link]:max-w-[220px]
                    [&_.healcode-gift-card-text-link]:items-center
                    [&_.healcode-gift-card-text-link]:justify-center
                    [&_.healcode-gift-card-text-link]:rounded-full
                    [&_.healcode-gift-card-text-link]:bg-emerald-600
                    [&_.healcode-gift-card-text-link]:px-8
                    [&_.healcode-gift-card-text-link]:py-3.5
                    [&_.healcode-gift-card-text-link]:text-base
                    [&_.healcode-gift-card-text-link]:font-semibold
                    [&_.healcode-gift-card-text-link]:text-white
                    [&_.healcode-gift-card-text-link]:no-underline
                    [&_.healcode-gift-card-text-link]:shadow-[0_4px_14px_rgba(5,150,105,0.35)]
                    [&_.healcode-gift-card-text-link]:transition-all
                    [&_.healcode-gift-card-text-link]:duration-300
                    [&_.healcode-gift-card-text-link]:ease-out
                    [&_.healcode-gift-card-text-link:hover]:-translate-y-0.5
                    [&_.healcode-gift-card-text-link:hover]:bg-emerald-500
                    [&_.healcode-gift-card-text-link:hover]:shadow-[0_8px_20px_rgba(5,150,105,0.45)]
                    [&_.healcode-gift-card-text-link:active]:translate-y-0
                    [&_.healcode-gift-card-text-link:active]:scale-[0.97]
                    [&_.healcode-gift-card-text-link:active]:bg-emerald-700
                    [&_.healcode-gift-card-text-link:focus-visible]:outline-none
                    [&_.healcode-gift-card-text-link:focus-visible]:ring-4
                    [&_.healcode-gift-card-text-link:focus-visible]:ring-emerald-300
                  "
                  dangerouslySetInnerHTML={{
                    __html: `
                      <healcode-widget
                        data-version="0.2"
                        data-link-class="healcode-gift-card-text-link"
                        data-site-id="134431"
                        data-mb-site-id="5753304"
                        data-service-id="${gift.serviceId}"
                        data-bw-identity-site="true"
                        data-type="gift-card-link"
                        data-inner-html="Buy Now">
                      </healcode-widget>
                    `,
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftWidgets;