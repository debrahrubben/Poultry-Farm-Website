
import styles from '../Service.module.css';

export const Services = () => {
  return (
    <div  className={styles.tableCell}>
      <div className={styles.whiteBlankBackgroundTextureParent}>
        <div className={styles.tablePropertiesWrapper}>
          <div className={styles.tableProperties}>
            <div className={styles.lineParent}>
              <div className={styles.frameChild} />
              <div className={styles.qualityInnovationAndFoodSWrapper}>
                <div className={styles.qualityInnovationAnd}>
                 <div>Quality,</div>
                  <div>innovation and </div>
                  <div>food safety.</div>
                </div>
              </div>
            </div>
            <div className={styles.layerOrderWrapper}>
              <div className={styles.layerOrder}>
                <div className={styles.welcomeToOur}>
                  <p>
                  Welcome to our world of livestock <br />
                  expertise!
                  </p>
                  <p>
                  Explore, learn,
                  grow, and buy with us.
                  </p>
                </div>
                <div className={styles.opacity}>
                  <div className={styles.containedaText}>
                    <div className={styles.text}>
                      <button className={styles.label}>Read more</button>
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
              <p id='OurServices' className={styles.servicesFor}>Services for</p>
              <p className={styles.theBestClients}>the best clients</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
