import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-primary-charcoal text-accent-beige py-6 mt-12 border-t border-secondary-amber">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p>{t("footer.rights")}</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com/elevateevents" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com/elevateevents" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://linkedin.com/company/elevateevents" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
