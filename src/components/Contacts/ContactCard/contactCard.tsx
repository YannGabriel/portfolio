//Styles
import styles from "../contacts.module.scss";
import { motion } from "motion/react";

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
          key={index}
          className={styles.contactCard}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className={styles.contact}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <img src={contact.image} alt={contact.name} />
            <h1 className={styles.contactTitle}>{contact.name}</h1>
          </motion.div>

          <div className={styles.contactContent}>
            <motion.p 
              className={styles.contactDescription}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              {contact.description}
            </motion.p>

            <motion.a
              href={contact.link}
              className={styles.buttonTarget}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <motion.button 
                className={styles.contactButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {contact.name}
              </motion.button>
            </motion.a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};