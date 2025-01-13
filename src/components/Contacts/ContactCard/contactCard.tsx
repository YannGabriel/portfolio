//Styles
import styles from "../contacts.module.scss";
import { motion } from "framer-motion";

//API
import ContactData from "../../../database/api/contactsData.json";

//Hooks
import { useState, useEffect } from "react";

interface ContactProps {
  name?: string;
  image?: string;
  link?: string;
  description?: string;
}

export const ContactCard = () => {
  const [contacts, setContacts] = useState<ContactProps[]>([]);

  useEffect(() => {
    setContacts(ContactData);
  }, []);

  return (
    <div className={styles.contactsSection}>
      {contacts.map((contact, index) => (
        <motion.div
          animate={{ y: 40 + index * 0.2, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            delat: 0.1 + index * 0.1,
            ease: "linear",
          }}
          className={styles.contactCard}
          id={contact.name}
        >
          <div className={styles.contact}>
            <motion.img
              animate={{ x: -20, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delat: 0.1 + index * 0.1,
                ease: "linear",
              }}
              src={contact.image}
              alt={contact.name}
            />
            <motion.h1
              animate={{ x: -40, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delat: 0.2 + index * 0.1,
                ease: "linear",
              }}
              className={styles.contactTitle}
            >
              {contact.name}
            </motion.h1>
          </div>

          <div className={styles.contactContent}>
            <p className={styles.contactDescription}>{contact.description}</p>

            <a
              href={contact.link}
              className={styles.buttonTarget}
              id={contact.name}
            >
              <button className={styles.contactButton}>{contact.name}</button>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
