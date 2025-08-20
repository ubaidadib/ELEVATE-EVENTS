import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <div className="bg-primary-charcoal text-accent-beige min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-5xl font-heading text-secondary-amber text-center mb-4">
          {t("title")}
        </h1>
        <p className="text-center mb-12">{t("intro")}</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="space-y-6 bg-primary-charcoal border border-secondary-amber rounded-xl shadow-lg p-8">
            <input
              type="text"
              placeholder={t("form.name")}
              className="w-full p-3 rounded bg-primary-charcoal border border-accent-beige"
              required
            />
            <input
              type="email"
              placeholder={t("form.email")}
              className="w-full p-3 rounded bg-primary-charcoal border border-accent-beige"
              required
            />
            <textarea
              rows="6"
              placeholder={t("form.message")}
              className="w-full p-3 rounded bg-primary-charcoal border border-accent-beige"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-secondary-emerald text-white py-3 rounded-xl hover:bg-secondary-amber transition"
            >
              {t("form.send")}
            </button>
          </form>

          {/* Contact Info + Map */}
          <div>
            <h2 className="text-2xl font-heading text-secondary-amber mb-4">
              {t("info.address")}
            </h2>
            <p className="mb-6">Elevate Events GmbH<br />Königsallee 12<br />40212 Düsseldorf, Germany</p>

            <h2 className="text-2xl font-heading text-secondary-amber mb-4">
              {t("info.phone")}
            </h2>
            <p className="mb-6">+49 211 12345678</p>

            <h2 className="text-2xl font-heading text-secondary-amber mb-4">
              {t("info.email")}
            </h2>
            <p className="mb-6">contact@elevate-events.de</p>

            {/* Google Map */}
            <div className="mt-8 border border-secondary-amber rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.6653198342716!2d6.7742!3d51.2254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca3c0f0b9f17%3A0x123456789abcdef!2sKönigsallee%2012%2C%2040212%20Düsseldorf!5e0!3m2!1sen!2sde!4v1691234567890!5m2!1sen!2sde"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact", "common"]))
    }
  };
}
