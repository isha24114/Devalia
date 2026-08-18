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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-[22px] body-17">
      <span
        aria-hidden
        className="absolute left-0 top-[11px] block h-[6px] w-[6px] rounded-full"
        style={{ background: "#3b3f3a" }}
      />
      {children}
    </li>
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
      {/* HERO — 1240 · 600 · radius 22 · no title above */}
      <section style={{ paddingTop: 80 }}>
        <div className="container-1240">
          <div
            className="frame-22 relative w-full"
            style={{ height: 600, opacity: 1 }}
          >
            <Image
              src="/images/2c2f52a5fedf6695107f1784fba63068926021bb.png"
              alt="Entrance gate of Devalia Safari Park — Welcome to G.I.Z. Devaliya"
              fill
              priority
              sizes="1240px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* DESTINATION GUIDE header */}
      <section style={{ paddingTop: 72 }}>
        <div className="container-1240">
          <div className="flex flex-col" style={{ gap: 24 }}>
            <Eyebrow tone="slate">Destination Guide</Eyebrow>
            <h1 className="display-40">Devalia Safari Park</h1>
            <p className="body-17" style={{ maxWidth: 1140 }}>
              Meet Gir beyond the main forest — a controlled wildlife experience
              that offers another way to observe the landscapes and animals
              associated with Gir.
            </p>
          </div>
        </div>
      </section>

      {/* 01 — Introduction */}
      <section style={{ paddingTop: 64, paddingBottom: 96 }}>
        <div className="container-1240">
          <div className="flex flex-col" style={{ gap: 24 }}>
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

      {/* 02 — At a glance  text left / image right · gap 60 · image 580 */}
      <section style={{ paddingBottom: 100 }}>
        <div className="container-1240">
          <div
            className="grid items-start"
            style={{ gridTemplateColumns: "1fr 580px", columnGap: 60 }}
          >
            <div className="flex flex-col" style={{ gap: 24 }}>
              <Eyebrow>02 — At a glance</Eyebrow>
              <h2 className="heading-28">What to Expect at Devalia</h2>
              <ul className="flex flex-col" style={{ gap: 18 }}>
                <Bullet>
                  <strong className="font-bold" style={{ color: "#3b3f3a" }}>
                    Wildlife:
                  </strong>{" "}
                  Observe animals associated with the Gir landscape in a
                  controlled environment.
                </Bullet>
                <Bullet>
                  <strong className="font-bold" style={{ color: "#3b3f3a" }}>
                    Family Friendly:
                  </strong>{" "}
                  A practical, accessible wildlife option for visitors travelling
                  with children.
                </Bullet>
                <Bullet>
                  <strong className="font-bold" style={{ color: "#3b3f3a" }}>
                    Photography:
                  </strong>{" "}
                  Open viewing opportunities support patient observation while
                  following park guidelines.
                </Bullet>
                <Bullet>
                  <strong className="font-bold" style={{ color: "#3b3f3a" }}>
                    Duration:
                  </strong>{" "}
                  Allow enough time around your scheduled safari to arrive
                  comfortably, complete entry formalities and enjoy the
                  experience without rushing.
                </Bullet>
              </ul>
            </div>

            <div
              className="frame-24 relative w-full"
              style={{ height: 414, opacity: 1 }}
            >
              <Image
                src="/images/a4e393367812c1f2a2035b0dc3c1d1265f01231f.png"
                alt="Devaliya park building and entrance area"
                fill
                sizes="580px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Closer encounter  image left / text right */}
      <section style={{ paddingBottom: 100 }}>
        <div className="container-1240">
          <div
            className="grid items-start"
            style={{ gridTemplateColumns: "580px 1fr", columnGap: 60 }}
          >
            <div
              className="frame-24 relative w-full"
              style={{ height: 354, opacity: 1 }}
            >
              <Image
                src="/images/218bf7b98e4c8578fe2fd9a4324697158a2ee266.png"
                alt="Safari jeeps with Asiatic lion crossing the track"
                fill
                sizes="580px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col" style={{ gap: 24 }}>
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
      <section style={{ paddingBottom: 100 }}>
        <div className="container-1240">
          <div
            className="grid items-start"
            style={{ gridTemplateColumns: "1fr 580px", columnGap: 60 }}
          >
            <div className="flex flex-col" style={{ gap: 24 }}>
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

            <div
              className="frame-24 relative w-full"
              style={{ height: 470, opacity: 1 }}
            >
              <Image
                src="/images/3310a2598459d2808c36023a11fc838fc38044bf.png"
                alt="Asiatic lion resting by the water under a large tree"
                fill
                sizes="580px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Why visit  three bordered cards (Somnath style) */}
      <section style={{ paddingBottom: 100 }}>
        <div className="container-1240">
          <div className="flex flex-col" style={{ gap: 24 }}>
            <Eyebrow>05 — Why visit</Eyebrow>
            <h2 className="heading-28">What Makes Devalia Worth Visiting?</h2>
            <p className="body-17" style={{ maxWidth: 700 }}>
              Devalia works particularly well for travellers who want to add
              another wildlife experience to their Gir itinerary.
            </p>
          </div>

          <div
            className="grid"
            style={{
              marginTop: 40,
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
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
                style={{
                  border: "1px solid var(--color-hairline)",
                  borderRadius: 12,
                  padding: 24,
                  background: "#fff",
                }}
              >
                <h3
                  className="font-bold"
                  style={{
                    fontSize: 18,
                    lineHeight: "26px",
                    color: "var(--color-ink)",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    lineHeight: "24px",
                    color: "var(--color-body)",
                  }}
                >
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video — flamingos · radius 24 */}
      <section style={{ paddingBottom: 100 }}>
        <div className="container-1240">
          <div
            className="frame-24 relative w-full"
            style={{ height: 575, opacity: 1 }}
          >
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
              className="absolute left-1/2 top-1/2 flex items-center justify-center rounded-full"
              style={{
                width: 64,
                height: 64,
                transform: "translate(-50%, -50%)",
                background: "#ffffff",
                boxShadow: "0 6px 24px rgba(20, 32, 26, 0.18)",
              }}
            >
              {isPlaying ? (
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
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
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
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
      <section style={{ paddingBottom: 100 }}>
        <div className="container-1240">
          <div className="flex flex-col" style={{ gap: 24 }}>
            <Eyebrow>06 — Plan Well</Eyebrow>
            <h2 className="heading-28">How to Make the Most of Your Visit</h2>
            <p className="body-17" style={{ maxWidth: 700 }}>
              A little preparation can make the experience much more enjoyable.
            </p>
          </div>

          <div
            className="grid"
            style={{
              marginTop: 40,
              gridTemplateColumns: "1fr 1fr",
              columnGap: 60,
              rowGap: 32,
            }}
          >
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
                  className="font-bold"
                  style={{
                    fontSize: 17,
                    lineHeight: "26px",
                    color: "var(--color-ink)",
                    marginBottom: 6,
                  }}
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
      <section style={{ paddingBottom: 100 }}>
        <div className="container-1240">
          <div className="flex flex-col" style={{ gap: 24 }}>
            <Eyebrow>07 — Pair it with Gir</Eyebrow>
            <h2 className="heading-28">
              Devalia as Part of Your Gir Itinerary
            </h2>
            <p className="body-17" style={{ maxWidth: 900 }}>
              Devalia doesn&rsquo;t have to be a standalone stop. It can fit into
              a wider journey of wildlife, local food, nearby destinations and
              cultural experiences.
            </p>
          </div>

          <div
            className="grid"
            style={{
              marginTop: 40,
              gridTemplateColumns: "1fr 1fr",
              columnGap: 60,
              rowGap: 28,
            }}
          >
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
                  className="font-bold"
                  style={{
                    fontSize: 17,
                    lineHeight: "26px",
                    color: "var(--color-ink)",
                    marginBottom: 6,
                  }}
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
      <section style={{ paddingBottom: 100 }}>
        <div className="container-1240">
          <div className="flex flex-col" style={{ gap: 24, maxWidth: 900 }}>
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
      <section style={{ background: "var(--color-shell)", paddingBlock: 90 }}>
        <div className="container-1240">
          <div className="flex items-start justify-between">
            <div className="flex flex-col" style={{ gap: 18 }}>
              <Eyebrow tone="related">Related Guides</Eyebrow>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 600,
                  fontSize: 32,
                  lineHeight: "40px",
                  color: "var(--color-ink-strong)",
                }}
              >
                Keep exploring GIR
              </h2>
            </div>
            <a
              href="#"
              className="hidden sm:inline-flex items-center font-bold"
              style={{
                gap: 8,
                padding: "12px 22px",
                borderRadius: 999,
                border: "1px solid var(--color-hairline)",
                background: "#fff",
                fontSize: 13,
                color: "var(--color-ink-strong)",
              }}
            >
              Destination Guides <span aria-hidden>&rarr;</span>
            </a>
          </div>

          <div
            className="grid"
            style={{
              marginTop: 40,
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
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
                style={{
                  border: "1px solid var(--color-hairline)",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "#fff",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="relative w-full" style={{ height: 160 }}>
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      background: "rgba(255,255,255,0.95)",
                      borderRadius: 999,
                      padding: "4px 10px",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--color-ink-strong)",
                    }}
                  >
                    {card.tag}
                  </span>
                </div>
                <div
                  style={{
                    padding: 18,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 400,
                      fontSize: 20,
                      lineHeight: "27px",
                      color: "var(--color-ink-strong)",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      marginTop: 10,
                      marginBottom: 20,
                      fontSize: 15,
                      lineHeight: "24px",
                      color: "var(--color-body)",
                    }}
                  >
                    {card.body}
                  </p>
                  <div
                    className="flex items-center justify-between"
                    style={{
                      marginTop: "auto",
                      paddingTop: 14,
                      borderTop: "1px solid var(--color-hairline)",
                    }}
                  >
                    <span
                      className="inline-flex items-center"
                      style={{ gap: 7, fontSize: 13, color: "#7c7e79" }}
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
                      className="inline-flex items-center font-bold"
                      style={{
                        gap: 7,
                        fontSize: 13,
                        color: "var(--color-link)",
                      }}
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
