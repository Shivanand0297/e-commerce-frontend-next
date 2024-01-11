"use client";

import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { Image as TImage } from "@/types";
import GalleryTab from "./GalleryTab";

interface GalleryProps {
  images: TImage[];
}

const Gallery = ({ images = [] }: GalleryProps) => {
  return (
    <Tab.Group as="div" className="flex flex-col">
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <NextImage fill src={image.url} alt="Image" className="object-cover object-center" />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
    </Tab.Group>
  );
};

export default Gallery;
