import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { motion, AnimatePresence } from "framer-motion";

export default function Booking() {
  const { t } = useTranslation("booking");
  const [step, setStep] = useState(1);

  const steps = ["date", "table", "guest", "payment", "confirmation"];

  // Animation Variants
  const variants = {
    hidden: { opacity: 0, x: 50 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="bg-primary-charcoal text-accent-beige min-h-screen p-6 flex flex-col">
      <div className="max-w-3xl mx-auto w-full">
        {/* Progress Indicator */}
        <div className="flex justify-between mb-10">
          {steps.map((s, idx) => (
            <div key={s} className="flex-1 text-center">
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-sm font-bold 
                ${step === idx + 1 ? "bg-secondary-amber text-black" : "bg-primary-charcoal border border-secondary-amber text-accent-beige"}`}
              >
                {idx + 1}
              </div>
              <p className="mt-2 text-xs">{t(`steps.${s}`)}</p>
            </div>
          ))}
        </div>

        {/* Step Content with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="bg-primary-charcoal border border-secondary-amber rounded-xl shadow-lg p-8"
          >
            {step === 1 && (
              <div className="space-y-6">
                <p>{t("date.label")}</p>
                <input type="date" className="w-full p-3 rounded bg-primary-charcoal border border-accent-beige" required />
                <input type="time" className="w-full p-3 rounded bg-primary-charcoal border border-accent-beige" required />
                <button onClick={() => setStep(2)} className="w-full bg-secondary-emerald py-3 rounded-xl text-white hover:bg-secondary-amber transition">
                  {t("date.next")}
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <p>{t("table.label")}</p>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-secondary-burgundy p-6 rounded-xl hover:bg-secondary-amber transition">Table 1</button>
                  <button className="bg-secondary-emerald p-6 rounded-xl hover:bg-secondary-amber transition">Table 2</button>
                </div>
                <div className="flex justify-between">
                  <button onClick={() => setStep(1)} className="underline">{t("table.back")}</button>
                  <button onClick={() => setStep(3)} className="bg-secondary-emerald px-6 py-3 rounded-xl text-white hover:bg-secondary-amber transition">
                    {t("table.next")}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <input placeholder={t("guest.name")} className="w-full p-3 rounded bg-primary-charcoal border border-accent-beige" required />
                <input type="email" placeholder={t("guest.email")} className="w-full p-3 rounded bg-primary-charcoal border border-accent-beige" required />
                <input type="tel" placeholder={t("guest.phone")} className="w-full p-3 rounded bg-primary-charcoal border border-accent-beige" />
                <input type="number" placeholder={t("guest.guests")} className="w-full p-3 rounded bg-primary-charcoal border border-accent-beige" min="1" max="20" />
                <div className="flex justify-between">
                  <button onClick={() => setStep(2)} className="underline">{t("guest.back")}</button>
                  <button onClick={() => setStep(4)} className="bg-secondary-emerald px-6 py-3 rounded-xl text-white hover:bg-secondary-amber transition">
                    {t("guest.next")}
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 text-center">
                <h2 className="text-xl mb-4">{t("payment.title")}</h2>
                <ul className="space-y-2">
                  <li>💳 {t("payment.stripe")}</li>
                  <li>🅿️ {t("payment.paypal")}</li>
                  <li>🛒 {t("payment.klarna")}</li>
                </ul>
                <div className="flex justify-between mt-6">
                  <button onClick={() => setStep(3)} className="underline">{t("payment.back")}</button>
                  <button onClick={() => setStep(5)} className="bg-secondary-emerald px-6 py-3 rounded-xl text-white hover:bg-secondary-amber transition">
                    {t("payment.confirm")}
                  </button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="text-center">
                <h2 className="text-2xl text-secondary-amber mb-4">{t("confirmation.success")}</h2>
                <p className="mb-6">{t("confirmation.qr_info")}</p>
                <div className="flex justify-center mb-6">
                  <div className="w-40 h-40 bg-white flex items-center justify-center rounded-lg">
                    <span className="text-black">QR Code</span>
                  </div>
                </div>
                <button onClick={() => (window.location.href = "/")} className="bg-secondary-emerald px-6 py-3 rounded-xl text-white hover:bg-secondary-amber transition">
                  {t("confirmation.back_home")}
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["booking", "common"]))
    }
  };
}
