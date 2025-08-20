import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function Navbar() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

  const switchLanguage = (lang) => {
    router.push(router.asPath, router.asPath, { locale: lang });
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-primary-charcoal text-accent-beige shadow-lg">
      <Link href="/">
        <a className="text-2xl font-heading text-secondary-amber">Elevate Events</a>
      </Link>

      <div className="hidden md:flex space-x-6">
        <Link href="/"><a>{t("nav.home")}</a></Link>
        <Link href="/about"><a>{t("nav.about")}</a></Link>
        <Link href="/events"><a>{t("nav.events")}</a></Link>
        <Link href="/booking"><a>{t("nav.booking")}</a></Link>
        <Link href="/membership"><a>{t("nav.membership")}</a></Link>
        <Link href="/gallery"><a>{t("nav.gallery")}</a></Link>
        <Link href="/contact"><a>{t("nav.contact")}</a></Link>
      </div>

      {/* Language Switcher */}
      <div className="flex space-x-3">
        <button
          onClick={() => switchLanguage("en")}
          className={`px-2 ${locale === "en" ? "text-secondary-amber font-bold" : ""}`}
        >
          EN
        </button>
        <button
          onClick={() => switchLanguage("de")}
          className={`px-2 ${locale === "de" ? "text-secondary-amber font-bold" : ""}`}
        >
          DE
        </button>
      </div>
    </nav>
  );
}
