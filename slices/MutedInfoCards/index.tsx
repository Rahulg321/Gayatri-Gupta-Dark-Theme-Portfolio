import { ArrowButton } from "@/components/ArrowButton";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `MutedInfoCards`.
 */
export type MutedInfoCardsProps =
  SliceComponentProps<Content.MutedInfoCardsSlice>;

/**
 * Component for "MutedInfoCards" Slices.
 */
const MutedInfoCards = ({ slice }: MutedInfoCardsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space-xl xl-narrow-container "
    >
      <div className="bg-muted rounded-lg border-2">
        <div className="px-6 py-8 border-b-2 dark:border-zinc-700">
          <h2>Discover more about my life</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <SectionCard
            heading="Books I have read"
            description="Ever curious about the books that have shaped my thinking and approach? Dive into my Books I've Devoured section to discover a curated list of titles that have inspired and informed me."
            link="lorem"
          />
          <SectionCard
            heading="Articles I have written"
            description="My written articles cover a variety of topics that might pique your interest. Browse through them and discover something new!"
            link=""
          />
          <SectionCard
            heading="Projects I work on"
            description="I'm constantly pushing myself to learn and grow. Here, you'll find a collection of projects that represent my journey so far. Take a look and see what sparks your interest!"
            link=""
          />
        </div>
      </div>
    </section>
  );
};

export default MutedInfoCards;

function SectionCard({
  heading,
  description,
  link,
}: {
  heading: string;
  description: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="hover:bg-zinc-200 transition duration-150 ease-in-out dark:hover:bg-zinc-700 py-8 px-4 border-r-2 dark:border-zinc-700 last:border-none flex flex-col justify-between"
    >
      <h4>{heading}</h4>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ArrowButton />
    </Link>
  );
}
