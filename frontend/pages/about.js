import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <div className="bg-primary-charcoal text-accent-beige min-h-screen p-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-heading text-secondary-amber mb-6">
          {t("title")}
        </h1>

        {/* Brand Image */}
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/about-venue.jpg"
            alt="Elevate Venue"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <p className="mb-6">{t("story")}</p>
        <p className="mb-12 italic">{t("mission")}</p>

        <Link href="/">
          <a className="underline hover:text-secondary-amber">{t("back")}</a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "common"]))
    }
  };
}
