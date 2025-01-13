import { ContactCard } from "./ContactCard/contactCard";
import styles from "./contacts.module.scss";
import { motion } from "framer-motion";

export const Contacts = () => {
  return (
    <section className={styles.contactSection} id="contacts">
      <motion.h1
        animate={{ y: 20, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1, ease: "linear" }}
        className={styles.contactTitle}
      >
        Contatos
      </motion.h1>

      <motion.p
        animate={{ y: 40, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2, ease: "linear" }}
        className={styles.contactPageDesc}
      >
        Saiba mais sobre meu trabalho e o que estou fazendo pelas minhas redes
        sociais!
      </motion.p>

      <ContactCard />
    </section>
  );
};
