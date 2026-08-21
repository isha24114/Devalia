"use client";

import Image from "next/image";
import { useRef, useState } from "react";

function Eyebrow({
  children,
  tone = "olive",
}: {
  children: React.ReactNode;
  tone?: "olive" | "slate" | "related";
}) {
  const color =
    tone === "olive"
      ? "var(--color-olive)"
      : tone === "slate"
        ? "var(--color-slate-eyebrow)"
        : "var(--color-related-eyebrow)";
  return (
    <p className="eyebrow" style={{ color }}>
      {children}
    </p>
  );
}

export default function DevaliaSafariPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-frame relative w-full">
            <Image
              src="/images/2c2f52a5fedf6695107f1784fba63068926021bb.png"
              alt="Entrance gate of Devalia Safari Park — Welcome to G.I.Z. Devaliya"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1240px"
              className="object-cover"
            />
            <div className="hero-overlay absolute inset-0" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 z-10 text-white">
              <div className="container-1240 hero-copy-wrap">
                <div className="flex max-w-[1240px] flex-col gap-3 sm:gap-4">
                  <p className="eyebrow hero-eyebrow">Destination · Gir, Gujarat</p>
                  <h1 className="hero-title">Devalia Safari Park</h1>
                  <p className="hero-description body-17">
                    A closer way to experience the wildlife of Gir, with open landscapes, diverse wildlife and memorable safari moments.
                  </p>
                  <div className="hero-meta flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] font-semibold sm:text-[16px]">
                    <span>6 Min Read</span>
                    <span aria-hidden>•</span>
                    <span>Published 15 August 2026</span>
                    <span aria-hidden>•</span>
                    <span>Prakash Mehta</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* 01 — Introduction */}
      <section className="pt-10 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24">
        <div className="container-1240">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <Eyebrow>01 — Introduction</Eyebrow>
            <h2 className="heading-28">Meet Gir Beyond the Main Forest</h2>
            <p className="body-17">
              Devalia Safari Park offers visitors another way to experience the
              wildlife and landscapes associated with Gir. Designed as a
              controlled wildlife experience, the park allows visitors to
              observe a variety of animals in a setting that offers a different
              perspective from a traditional forest safari.
            </p>
            <p className="body-17">
              For travellers visiting Gir for the first time, Devalia can be an
              approachable introduction to the region&rsquo;s wildlife. For
              returning visitors, it adds another experience to a wider Gir
              itinerary.
            </p>
            <p className="body-17">
              Whether you&rsquo;re travelling with family, looking for wildlife
              photography opportunities or simply want to understand the
              ecosystem beyond the famous Asiatic lion, Devalia is worth
              including in your Gir journey.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — At a glance  text left / image right */}
      <section className="pb-16 sm:pb-20 md:pb-[100px]">
        <div className="container-1240">
          <div className="split-layout">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 order-2 md:order-1">
              <Eyebrow>02 — At a glance</Eyebrow>
              <h2 className="heading-28">What to Expect at Devalia</h2>
              <ul className="flex list-none flex-col gap-3 p-0 sm:gap-4 md:gap-[18px]">
                <li className="body-17">
                  <strong className="font-bold" style={{ color: "#3b3f3a" }}>
                    Wildlife:
                  </strong>{" "}
                  Observe animals associated with the Gir landscape in a
                  controlled environment.
                </li>
                <li className="body-17">
                  <strong className="font-bold" style={{ color: "#3b3f3a" }}>
                    Family Friendly:
                  </strong>{" "}
                  A practical, accessible wildlife option for visitors travelling
                  with children.
                </li>
                <li className="body-17">
                  <strong className="font-bold" style={{ color: "#3b3f3a" }}>
                    Photography:
                  </strong>{" "}
                  Open viewing opportunities support patient observation while
                  following park guidelines.
                </li>
                <li className="body-17">
                  <strong className="font-bold" style={{ color: "#3b3f3a" }}>
                    Duration:
                  </strong>{" "}
                  Allow enough time around your scheduled safari to arrive
                  comfortably, complete entry formalities and enjoy the
                  experience without rushing.
                </li>
              </ul>
            </div>

            <div className="frame-24 relative w-full image-frame-414 order-1 md:order-2">
              <Image
                src="/images/a4e393367812c1f2a2035b0dc3c1d1265f01231f.png"
                alt="Devaliya park building and entrance area"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Closer encounter  image left / text right */}
      <section className="pb-16 sm:pb-20 md:pb-[100px]">
        <div className="container-1240">
          <div className="split-layout-reverse">
            <div className="frame-24 relative w-full image-frame-354">
              <Image
                src="/images/218bf7b98e4c8578fe2fd9a4324697158a2ee266.png"
                alt="Safari jeeps with Asiatic lion crossing the track"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              <Eyebrow>03 — A closer encounter</Eyebrow>
              <h2 className="heading-28">A Different Perspective on Gir</h2>
              <p className="body-17">
                Devalia gives visitors an opportunity to observe wildlife without
                entering the deeper forest environment of Gir National Park.
              </p>
              <p className="body-17">
                The experience is more structured, allowing visitors to focus on
                observing animals, understanding their surroundings and learning
                more about the wildlife conservation story of the region.
              </p>
              <p className="body-17 font-bold" style={{ color: "#3b3f3a" }}>
                Best suited for: First-time visitors · Families · Wildlife
                enthusiasts · Photography lovers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Wildlife story  text left / image right */}
      <section className="pb-16 sm:pb-20 md:pb-[100px]">
        <div className="container-1240">
          <div className="split-layout">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 order-2 md:order-1">
              <Eyebrow>04 — Wildlife story</Eyebrow>
              <h2 className="heading-28">Wildlife Beyond the Lion</h2>
              <p className="body-17">
                The Asiatic lion may be the most famous resident of Gir, but the
                region&rsquo;s wildlife story is much broader.
              </p>
              <p className="body-17">
                Keep an eye out for different species and notice how each animal
                interacts with its surroundings. Watching deer move through the
                grassland, birds above the landscape or animals responding to
                their environment can turn a simple safari into a richer wildlife
                experience.
              </p>
              <p className="body-17">
                A quiet, patient approach makes space for the smaller details
                that often become the most memorable part of a visit.
              </p>
              <p className="body-17 font-bold" style={{ color: "#3b3f3a" }}>
                Look beyond the obvious. The forest story is made up of many
                species, habitats and behaviours.
              </p>
            </div>

            <div className="frame-24 relative w-full image-frame-470 order-1 md:order-2">
              <Image
                src="/images/3310a2598459d2808c36023a11fc838fc38044bf.png"
                alt="Asiatic lion resting by the water under a large tree"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Why visit  three bordered cards */}
      <section className="pb-16 sm:pb-20 md:pb-[100px]">
        <div className="container-1240">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <Eyebrow>05 — Why visit</Eyebrow>
            <h2 className="heading-28">What Makes Devalia Worth Visiting?</h2>
            <p className="body-17 max-w-[700px]">
              Devalia works particularly well for travellers who want to add
              another wildlife experience to their Gir itinerary.
            </p>
          </div>

          <div className="cards-3 mt-8 sm:mt-10">
            {[
              {
                title: "You're visiting Gir for the first time",
                body: "It gives you another opportunity to understand the region's wildlife and conservation environment.",
              },
              {
                title: "You're travelling with family",
                body: "The controlled safari setting can offer a straightforward wildlife experience for visitors of different ages.",
              },
              {
                title: "You want more than a single safari",
                body: "Adding Devalia gives your Gir trip another layer instead of relying entirely on one forest experience.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="border border-[var(--color-hairline)] rounded-xl p-5 sm:p-6 bg-white"
              >
                <h3
                  className="font-bold text-[17px] sm:text-[18px] leading-[24px] sm:leading-[26px]"
                  style={{ color: "var(--color-ink)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-2 sm:mt-2.5 text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px]"
                  style={{ color: "var(--color-body)" }}
                >
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video — flamingos */}
      <section className="pb-16 sm:pb-20 md:pb-[100px]">
        <div className="container-1240">
          <div className="frame-24 relative w-full video-frame">
            <video
              ref={videoRef}
              poster="/images/flamingos.jpg"
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source
                src="https://videos.pexels.com/video-files/19741488/19741488-uhd_1440_2560_60fps.mp4"
                type="video/mp4"
              />
            </video>
            <button
              type="button"
              onClick={toggleVideo}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="absolute left-1/2 top-1/2 flex items-center justify-center rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 -translate-x-1/2 -translate-y-1/2 bg-white shadow-[0_6px_24px_rgba(20,32,26,0.18)]"
            >
              {isPlaying ? (
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" className="w-3 h-3.5 sm:w-3.5 sm:h-4 md:w-4 md:h-[18px]">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="5"
                    height="17"
                    rx="1.5"
                    fill="#1f4a3a"
                  />
                  <rect
                    x="10.5"
                    y="0.5"
                    width="5"
                    height="17"
                    rx="1.5"
                    fill="#1f4a3a"
                  />
                </svg>
              ) : (
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" className="w-3.5 h-4 sm:w-4 sm:h-5 md:w-[18px] md:h-5">
                  <path
                    d="M17 10L0.5 19.5263L0.5 0.473721L17 10Z"
                    fill="#1f4a3a"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* How to Make the Most */}
      <section className="pb-16 sm:pb-20 md:pb-[100px]">
        <div className="container-1240">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <Eyebrow>06 — Plan Well</Eyebrow>
            <h2 className="heading-28">How to Make the Most of Your Visit</h2>
            <p className="body-17 max-w-[700px]">
              A little preparation can make the experience much more enjoyable.
            </p>
          </div>

          <div className="cards-2 mt-8 sm:mt-10">
            {[
              {
                title: "Plan Ahead",
                body: "Check current safari schedules, entry requirements and availability before travelling.",
              },
              {
                title: "Arrive Prepared",
                body: "Keep booking details and identification ready, with time before scheduled entry.",
              },
              {
                title: "Dress for the Outdoors",
                body: "Choose comfortable clothing and footwear for spending time outside.",
              },
              {
                title: "Follow the Rules",
                body: "Stay within designated areas, follow staff instructions and respect wildlife.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3
                  className="font-bold text-[16px] sm:text-[17px] leading-[24px] sm:leading-[26px] mb-1.5"
                  style={{ color: "var(--color-ink)" }}
                >
                  {item.title}
                </h3>
                <p className="body-17">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devalia as Part of Itinerary */}
      <section className="pb-16 sm:pb-20 md:pb-[100px]">
        <div className="container-1240">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <Eyebrow>07 — Pair it with Gir</Eyebrow>
            <h2 className="heading-28">
              Devalia as Part of Your Gir Itinerary
            </h2>
            <p className="body-17 max-w-[900px]">
              Devalia doesn&rsquo;t have to be a standalone stop. It can fit into
              a wider journey of wildlife, local food, nearby destinations and
              cultural experiences.
            </p>
          </div>

          <div className="cards-2 mt-8 sm:mt-10">
            {[
              { title: "Morning", body: "Wildlife experience around Gir" },
              {
                title: "Afternoon",
                body: "Lunch and local food exploration",
              },
              {
                title: "Later",
                body: "Devalia Safari Park or another nearby experience",
              },
              {
                title: "Evening",
                body: "Return to your stay or explore Sasan Gir",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3
                  className="font-bold text-[16px] sm:text-[17px] leading-[24px] sm:leading-[26px] mb-1.5"
                  style={{ color: "var(--color-ink)" }}
                >
                  {item.title}
                </h3>
                <p className="body-17">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing note */}
      <section className="pb-16 sm:pb-20 md:pb-[100px]">
        <div className="container-1240">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-[900px]">
            <Eyebrow>08 — Closing Note</Eyebrow>
            <h2 className="heading-28">Take a Little More of Gir With You</h2>
            <p className="body-17">
              A visit to Devalia is not simply about seeing an animal. It is
              about slowing down, observing the landscape and understanding why
              this region is so important to wildlife conservation.
            </p>
            <p className="body-17 font-bold" style={{ color: "#3b3f3a" }}>
              Explore Gir slowly. Observe responsibly. Leave with a deeper
              connection to the region.
            </p>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="bg-[var(--color-shell)] py-12 sm:py-16 md:py-[90px]">
        <div className="container-1240">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-[18px]">
              <Eyebrow tone="related">Related Guides</Eyebrow>
              <h2
                className="related-title"
                style={{
                  color: "var(--color-ink-strong)",
                }}
              >
                Keep exploring GIR
              </h2>
            </div>
            <a
              href="#"
              className="hidden sm:inline-flex items-center font-bold gap-2 py-3 px-5 rounded-full border border-[var(--color-hairline)] bg-white text-[13px]"
              style={{ color: "var(--color-ink-strong)" }}
            >
              Destination Guides <span aria-hidden>&rarr;</span>
            </a>
          </div>

          <div className="cards-4 mt-8 sm:mt-10">
            {[
              {
                img: "/images/card-safari.jpg",
                tag: "Planning",
                title: "Best Time to Visit Gir: A Month-by-Month Guide",
                body: "When lions are most active, how the forest changes across seasons, and when to plan your safari window.",
              },
              {
                img: "/images/card-thali.jpg",
                tag: "Food",
                title: "What to Eat Around Gir: Kathiyawadi Food Trail",
                body: "From rustic Kathiyawadi thalis to farm-fresh Kesar mangoes, a guide to eating well near the forest.",
              },
              {
                img: "/images/card-lion.jpg",
                tag: "Itinerary",
                title: "3-Day Gir Itinerary: Safari, Devalia & Slow Mornings",
                body: "A relaxed plan balancing official safari time, the Devalia enclosure and unhurried resort mornings.",
              },
              {
                img: "/images/3310a2598459d2808c36023a11fc838fc38044bf.png",
                tag: "Itinerary",
                title: "3-Day Gir Itinerary: Safari, Devalia & Slow Mornings",
                body: "A relaxed plan balancing official safari time, the Devalia enclosure and unhurried resort mornings.",
              },
            ].map((card) => (
              <article
                key={card.title + card.tag + card.img}
                className="related-card border border-[var(--color-hairline)] overflow-hidden bg-white flex flex-col"
              >
                <div className="related-card-image relative w-full">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <span
                    className="absolute top-3 left-3 bg-white/95 rounded-full px-2.5 py-1 text-[11px] font-semibold"
                    style={{ color: "var(--color-ink-strong)" }}
                  >
                    {card.tag}
                  </span>
                </div>
                <div className="related-card-content flex flex-col flex-1">
                  <h3
                    className="related-card-title"
                    style={{
                      color: "var(--color-ink-strong)",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="related-card-body"
                    style={{ color: "var(--color-body)" }}
                  >
                    {card.body}
                  </p>
                  <div
                    className="flex items-center justify-between mt-auto pt-3 sm:pt-3.5 border-t border-[var(--color-hairline)]"
                  >
                    <span
                      className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px]"
                      style={{ color: "#7c7e79" }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden
                      >
                        <circle
                          cx="7"
                          cy="7"
                          r="6"
                          stroke="#9a9c97"
                          strokeWidth="1.2"
                        />
                        <path
                          d="M7 3.8V7l2.1 1.3"
                          stroke="#9a9c97"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                      6 min read
                    </span>
                    <a
                      href="#"
                      className="inline-flex items-center font-bold gap-1.5 text-[12px] sm:text-[13px]"
                      style={{ color: "var(--color-link)" }}
                    >
                      Read <span aria-hidden>&rarr;</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
