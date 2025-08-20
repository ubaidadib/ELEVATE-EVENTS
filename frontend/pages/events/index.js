import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

const mockEvents = [
  {
    slug: "jazz-whiskey-night",
    title: "Jazz & Whiskey Night",
    date: "Sept 14, 2025",
    time: "20:00",
    location: "Elevate Lounge, Düsseldorf",
    image: "/images/event1.jpg",
    description: "An unforgettable night of smooth jazz and premium whiskey tasting."
  },
  {
    slug: "wine-tasting",
    title: "Luxury Wine Tasting",
    date: "Sept 21, 2025",
    time: "19:00",
    location: "Elevate Lounge, Düsseldorf",
    image: "/images/event2.jpg",
    description: "Sample rare wines with sommelier guidance."
  },
  {
    slug: "cigar-cognac-evening",
    title: "Cigar & Cognac Evening",
    date: "Oct 5, 2025",
    time: "21:00",
    location: "Elevate Lounge, Düsseldorf",
    image: "/images/event3.jpg",
    description: "An evening of premium cigars paired with cognac tastings."
  }
];

export default function Events() {
  const { t } = useTranslation("events");

  return (
    <div className="bg-primary-charcoal text-accent-beige min-h-screen p-6">
      <h1 className="text-4xl font-heading text-secondary-amber text-center mb-10">
        {t("page_title")}
      </h1>

      {mockEvents.length === 0 ? (
        <p className="text-center">{t("no_events")}</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockEvents.map((event) => (
            <div
              key={event.slug}
              className="bg-primary-charcoal border border-secondary-amber rounded-xl overflow-hidden shadow-lg"
            >
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-heading text-secondary-amber">{event.title}</h2>
                <p className="text-sm">{event.date} — {event.time}</p>
                <p className="text-sm mt-2">{event.description}</p>
                <Link href={`/events/${event.slug}`}>
                  <a className="mt-4 inline-block underline hover:text-secondary-amber">
                    {t("see_details")}
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
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
