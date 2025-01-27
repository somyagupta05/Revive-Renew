import styles from "./gallery.module.css";

const ProjectGallery = () => {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImage}>
          <img
            src="/images/gal2.png"
            alt="Project Image 1"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className={styles.galleryImage}>
          <img
            src="/images/gal1.png"
            alt="Project Image 2"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className={styles.galleryImage}>
          <img
            src="/images/gal3.png"
            alt="Project Image 3"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className={styles.galleryImage}>
          <img
            src="/images/gal4.png"
            alt="Project Image 4"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className={styles.galleryImage5}>
          <img
            src="/images/gal5.png"
            alt="Project Image 5"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className={styles.galleryImage}>
          <img
            src="/images/gal6.png"
            alt="Project Image 6"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </div>

      <div className={styles.galleryText}>
        <h2>
          Look at what <br />
          we&apos;ve done!
        </h2>
        <p>Discover what clients were able to achieve with Reno.</p>
        <button className={styles.galleryButton}>View project gallery</button>
      </div>
    </section>
  );
};

export default ProjectGallery;
