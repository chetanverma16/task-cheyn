"use client";

import { cn } from "@/lib/utils";
import TextShimmer from "@/components/ui/TextShimmer";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export async function TextShimmerLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <TextShimmer className="inline-flex items-center justify-center px-4 py-1">
          <span>{children}</span>
          <ArrowRightIcon className="size-3 ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </TextShimmer>
      </div>
    </div>
  );
}
