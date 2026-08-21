import Image from "next/image";

type GuideCardProps = {
  tag: string;
  title: string;
  description: string;
  readTime: string;
  image: string;
};

export default function GuideCard({
  tag,
  title,
  description,
  readTime,
  image,
}: GuideCardProps) {
  return (
    <article className="flex flex-col w-full max-w-[292px] h-[370px] mx-auto rounded-[18px] border border-[#DFD7C6] bg-white overflow-hidden opacity-100 transition-shadow hover:shadow-md">
      {/* Image thumbnail portion */}
      <div className="relative h-[180px] w-full shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 292px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white px-3.5 py-1 text-[12px] font-medium text-[#1D4C3A] shadow-xs">
          {tag}
        </span>
      </div>

      {/* Text portion layout: width 292px, height 190px, padding 20px */}
      <div className="flex flex-col justify-between h-[190px] w-full p-[20px]">
        <div className="flex flex-col gap-0">
          {/* Title: width 252px, height 44px, Cormorant Garamond 18px weight 700 (Bold), #242824 */}
          <h4
            className="w-full max-w-[252px] h-[44px] text-[18px] font-bold leading-[100%] tracking-[0%] text-[#242824] line-clamp-2"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            {title}
          </h4>

          {/* Description: width 252px, height 60px, Circular Std 14px weight 450, line-height 20px, #5F645F */}
          <p
            className="w-full max-w-[252px] h-[60px] text-[14px] font-[450] leading-[20px] tracking-[0%] text-[#5F645F] line-clamp-3 overflow-hidden"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {description}
          </p>
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between text-xs text-[#5F645F]">
          <span className="inline-flex items-center gap-1.5 text-[#5F645F]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5F645F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
            {readTime}
          </span>
          <a
            href="#"
            className="font-bold text-[#1D4C3A] inline-flex items-center gap-1.5 hover:underline"
          >
            <span>Read</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
