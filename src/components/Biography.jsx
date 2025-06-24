function Biography({ styles }) {
  return (
    <div className={styles.about}>
      <h3 className={styles.aboutSubHeader}>Who was Marcus Aurelius?</h3>

      <p className={styles.aboutParagraph}>
        Marcus Aurelius, a Roman emperor and philosopher, became the ruler of
        Rome in 161 AD, serving until his death in 180 AD. Recognized as one of
        the “Five Good Emperors,” he reigned over the last part of the Pax
        Romana, or Roman Peace. Throughout his rule, Marcus Aurelius faced
        challenges, including military campaigns against Germanic tribes and the
        Parthian Empire.
      </p>

      <p className={styles.aboutParagraph}>
        Despite the the precedent of decadence and hedonism, he maintained a
        reputation for integrity and self-discipline, embodying Stoic principles
        in both his personal and political life.
      </p>
    </div>
  );
}

export default Biography;
