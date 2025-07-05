import { ContactCard } from "./ContactCard/contactCard";
import styles from "./contacts.module.scss";
import { motion } from "motion/react";

export const Contacts = () => {
  return (
    <section className={styles.contactSection} id="contacts">
      <div className={styles.contactHeader}>
        <motion.h1
          className={styles.contactTitleSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contatos
        </motion.h1>

        <motion.p
          className={styles.contactPageDesc}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Saiba mais sobre meu trabalho e o que estou fazendo pelas minhas redes
          sociais!
        </motion.p>
      </div>

      <ContactCard />
    </section>
  );
};