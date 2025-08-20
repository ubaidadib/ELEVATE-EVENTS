import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Membership() {
  const { t } = useTranslation("membership");
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="bg-primary-charcoal text-accent-beige min-h-screen p-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-5xl font-heading text-secondary-amber mb-4">
          {t("title")}
        </h1>
        <p className="mb-12 text-lg">{t("intro")}</p>

        {/* Perks */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-secondary-burgundy p-6 rounded-xl shadow-lg">{t("perks.priority")}</div>
          <div className="bg-secondary-emerald p-6 rounded-xl shadow-lg">{t("perks.discounts")}</div>
          <div className="bg-secondary-burgundy p-6 rounded-xl shadow-lg">{t("perks.vip")}</div>
          <div className="bg-secondary-emerald p-6 rounded-xl shadow-lg">{t("perks.invites")}</div>
        </div>

        {/* Login / Register */}
        <div className="bg-primary-charcoal border border-secondary-amber rounded-xl shadow-lg p-8 max-w-md mx-auto text-left">
          <h2 className="text-2xl font-heading text-secondary-amber mb-6">
            {isRegister ? t("form.register_title") : t("form.login_title")}
          </h2>

          <form className="space-y-4">
            <input
              type="email"
              placeholder={t("form.email")}
              className="w-full p-3 rounded bg-primary-charcoal border border-accent-beige"
            />
            <input
              type="password"
              placeholder={t("form.password")}
              className="w-full p-3 rounded bg-primary-charcoal border border-accent-beige"
            />

            {isRegister && (
              <input
                type="password"
                placeholder={t("form.confirm_password")}
                className="w-full p-3 rounded bg-primary-charcoal border border-accent-beige"
              />
            )}

            <button
              type="submit"
              className="w-full bg-secondary-emerald text-white py-3 rounded-xl hover:bg-secondary-amber transition"
            >
              {isRegister ? t("form.register") : t("form.login")}
            </button>
          </form>

          <p
            className="mt-6 text-sm underline cursor-pointer hover:text-secondary-amber text-center"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? t("form.switch_to_login") : t("form.switch_to_register")}
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["membership", "common"]))
    }
  };
}
