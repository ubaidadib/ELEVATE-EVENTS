import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

const mockEvents = {
  "jazz-whiskey-night": {
    title: "Jazz & Whiskey Night",
    date: "Sept 14, 2025",
    time: "20:00",
    location: "Elevate Lounge, Düsseldorf",
    image: "/images/event1.jpg",
    description: "Enjoy an evening of live jazz music while savoring a curated selection of premium whiskeys."
  },
  "wine-tasting": {
    title: "Luxury Wine Tasting",
    date: "Sept 21, 2025",
    time: "19:00",
    location: "Elevate Lounge, Düsseldorf",
    image: "/images/event2.jpg",
    description: "Indulge in an exclusive wine tasting session guided by professional sommeliers."
  },
  "cigar-cognac-evening": {
    title: "Cigar & Cognac Evening",
    date: "Oct 5, 2025",
    time: "21:00",
    location: "Elevate Lounge, Düsseldorf",
    image: "/images/event3.jpg",
    description: "An evening of premium cigars paired with distinguished cognac blends."
  }
};

export default function EventDetail() {
  const { t } = useTranslation("events");
  const router = useRouter();
  const { slug } = router.query;
  const event = mockEvents[slug];

  if (!event) return <p className="text-center p-10">{t("no_events")}</p>;

  return (
    <div className="bg-primary-charcoal text-accent-beige min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <img src={event.image} alt={event.title} className="w-full h-80 object-cover rounded-xl mb-6" />
        <h1 className="text-4xl font-heading text-secondary-amber mb-4">{event.title}</h1>
        <p><strong>{t("detail.date")}:</strong> {event.date}</p>
        <p><strong>{t("detail.time")}:</strong> {event.time}</p>
        <p><strong>{t("detail.location")}:</strong> {event.location}</p>
        <p className="mt-6">{event.description}</p>

        <div className="mt-8 flex gap-4">
          <Link href="/booking">
            <a className="bg-secondary-emerald text-white px-6 py-3 rounded-xl">{t("detail.book")}</a>
          </Link>
          <Link href="/events">
            <a className="underline">{t("back")}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["events", "common"]))
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "jazz-whiskey-night" }, locale: "en" },
      { params: { slug: "jazz-whiskey-night" }, locale: "de" },
      { params: { slug: "wine-tasting" }, locale: "en" },
      { params: { slug: "wine-tasting" }, locale: "de" },
      { params: { slug: "cigar-cognac-evening" }, locale: "en" },
      { params: { slug: "cigar-cognac-evening" }, locale: "de" }
    ],
    fallback: false
  };
}
