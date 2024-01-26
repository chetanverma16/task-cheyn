"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TextShimmerLabel } from "@/components/main/TextShimmerLabel";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center mx-auto max-w-5xl overflow-hidden">
      <motion.div className="w-full p-6 grid grid-cols-1 md:grid-cols-2 gap-10 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-100 ease-in-out">
        <div className="relative h-96">
          <Image
            src="/dog.jpg"
            layout="fill"
            alt="dog-image"
            className="object-cover rounded-xl"
          />
          <Image
            alt="logo"
            className="absolute top-1 left-1"
            src="/logo.png"
            height={80}
            width={80}
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-y-6">
          <TextShimmerLabel>Dr. Ernie Sandersen</TextShimmerLabel>
          <h1 className="text-3xl font-bold">Veterinarian-Approved</h1>
          <p className="text-gray-600">
            All products from Dr. Ernie&apos;s are vetted and approved by a
            qualified veterinarian, ensuring top-quality care for your pet.
          </p>
          <Button>View Products</Button>
        </div>
      </motion.div>
    </main>
  );
}
