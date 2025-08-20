import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation(["home", "common"]);

  return (
    <div className="bg-primary-charcoal text-accent-beige min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <video className="absolute w-full h-full object-cover opacity-50" autoPlay muted loop playsInline>
          <source src="/videos/venue.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-heading text-secondary-amber">{t("hero.title")}</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">{t("hero.subtitle")}</p>
          <Link href="/booking">
            <a className="mt-8 inline-block bg-secondary-emerald text-white px-8 py-4 rounded-2xl shadow-lg">
              {t("hero.cta")}
            </a>
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-16 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-secondary-amber mb-6">{t("about.title")}</h2>
          <p>{t("about.text")}</p>
        </div>
      </section>

      {/* Events */}
      <section className="px-6 py-16 md:px-20">
        <h2 className="text-3xl md:text-4xl font-heading text-center text-secondary-amber mb-10">{t("events.title")}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <EventCard title="Jazz & Whiskey Night" date="Sept 14, 2025" image="/images/event1.jpg" />
          <EventCard title="Luxury Wine Tasting" date="Sept 21, 2025" image="/images/event2.jpg" />
          <EventCard title="Cigar & Cognac Evening" date="Oct 5, 2025" image="/images/event3.jpg" />
        </div>
        <div className="text-center mt-8">
          <Link href="/events">
            <a className="underline hover:text-secondary-amber">{t("events.see_all")}</a>
          </Link>
        </div>
      </section>

      {/* Membership */}
      <section className="px-6 py-20 md:px-20 bg-secondary-burgundy text-center text-accent-beige">
        <h2 className="text-3xl md:text-4xl font-heading text-secondary-amber mb-6">{t("membership.title")}</h2>
        <p className="mb-8 max-w-2xl mx-auto">{t("membership.text")}</p>
        <Link href="/membership">
          <a className="bg-secondary-emerald text-white px-8 py-4 rounded-2xl shadow-lg">
            {t("membership.cta")}
          </a>
        </Link>
      </section>

      {/* Gallery */}
      <section className="px-6 py-16 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-heading text-secondary-amber mb-8">{t("gallery.title")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/images/gallery1.jpg" className="rounded-xl" />
          <img src="/images/gallery2.jpg" className="rounded-xl" />
          <img src="/images/gallery3.jpg" className="rounded-xl" />
          <img src="/images/gallery4.jpg" className="rounded-xl" />
        </div>
        <div className="mt-8">
          <Link href="/gallery">
            <a className="underline hover:text-secondary-amber">{t("gallery.cta")}</a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// SSR translations
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"]))
    },
  };
}
