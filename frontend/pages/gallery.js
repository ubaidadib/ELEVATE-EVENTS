import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Link from "next/link";
import Image from "next/image";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg"
];

export default function Gallery() {
  const { t } = useTranslation("gallery");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-primary-charcoal text-accent-beige min-h-screen p-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Page Title */}
        <h1 className="text-4xl font-heading text-secondary-amber mb-6">
          {t("title")}
        </h1>
        <p className="mb-12 text-lg">{t("intro")}</p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer"
              onClick={() => {
                setPhotoIndex(idx);
                setIsOpen(true);
              }}
            >
              {/* Optimized Next.js Image */}
              <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={img}
                  alt={`${t("title")} ${idx + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                  priority={idx < 2} // preload first 2 images
                />
              </div>

              {/* Overlay CTA */}
              <span className="absolute bottom-2 right-2 text-xs bg-black/60 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                {t("cta")}
              </span>
            </div>
          ))}
        </div>

        {/* Lightbox Viewer */}
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
            imageCaption={`${t("title")} ${photoIndex + 1}`}
          />
        )}

        {/* Back to Home */}
        <div className="mt-10">
          <Link href="/">
            <a className="underline hover:text-secondary-amber">{t("back")}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Load translations
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["gallery", "common"]))
    }
  };
}
