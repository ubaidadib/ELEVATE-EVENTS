import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      {/* Default SEO Configuration */}
      <DefaultSeo {...SEO} />

      {/* AnimatePresence enables smooth page transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default appWithTranslation(MyApp);
