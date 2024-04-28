
import styles from './Service.module.css';

const Services = () => {
  return (
    <div className={styles.tableCell}>
      <div className={styles.whiteBlankBackgroundTextureParent}>
        
        <div className={styles.tablePropertiesWrapper}>
          <div className={styles.tableProperties}>
            <div className={styles.lineParent}>
              <div className={styles.frameChild} />
              <div className={styles.qualityInnovationAndFoodSWrapper}>
                <div className={styles.qualityInnovationAnd}>
                  Quality, innovation and food safety.
                </div>
              </div>
            </div>
            <div className={styles.layerOrderWrapper}>
              <div className={styles.layerOrder}>
                <div className={styles.welcomeToOur}>
                  Welcome to our world of livestock expertise! Explore, learn,
                  grow, and buy with us.
                </div>
                <div className={styles.opacity}>
                  <div className={styles.containedaText}>
                    <div className={styles.text}>
                      <div className={styles.label}>Read more</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropShadowEffect}>
          <div className={styles.blurEffect}>
            <div className={styles.servicesForTheBestContainer}>
              <u></u>
              <p className={styles.servicesFor}>Services for</p>
              <p className={styles.theBestClients}>the best clients</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Services