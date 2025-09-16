import MaxContainer from "@/layout/MaxContainer";
import { useState } from "react";
import Image from "../ui/Image";

const reviews = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea co",
    author: "Full Name",
  },
  {
    id: 2,
    text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
    author: "Jane Smith",
  },
  {
    id: 3,
    text: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.",
    author: "John Doe",
  },
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  return (
    <section className="px-5 py-16 sm:px-8 md:px-10">
      <MaxContainer>
        <h4 className="text-gray mb-6 text-3xl md:text-4xl lg:text-5xl">
          reviews
        </h4>

        <div className="relative">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <Image
                src="/home/quote.png"
                className="h-auto w-20 object-contain sm:w-28"
              />
            </div>

            <div className="flex-1">
              <p className="mb-8 text-lg leading-relaxed">
                {reviews[currentReview].text}
              </p>

              <div className="flex items-center justify-end gap-6">
                <span className="font-serif text-lg sm:text-2xl">
                  {reviews[currentReview].author}
                </span>

                <div className="flex-shrink-0 rotate-180">
                  <Image
                    src="/home/quote.png"
                    className="h-auto w-20 object-contain sm:w-28"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`h-1 cursor-pointer transition-all duration-300 ${
                  index === currentReview
                    ? "w-16 bg-purple-600"
                    : "w-12 bg-stone-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </MaxContainer>
    </section>
  );
}
