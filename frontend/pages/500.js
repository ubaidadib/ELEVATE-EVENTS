import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Custom500() {
  const { t } = useTranslation("common");

  return (
    <div className="bg-primary-charcoal text-accent-beige min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-8xl font-heading text-secondary-amber mb-6">500</h1>
      <p className="mb-6 text-lg">{t("error.500")}</p>
      <Link href="/">
        <a className="bg-secondary-emerald px-8 py-4 rounded-xl text-white shadow-lg hover:bg-secondary-amber transition">
          {t("nav.home")}
        </a>
      </Link>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}
