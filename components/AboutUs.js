import styles from "./AboutUs.module.css";

import React from 'react'

export const AboutUs = () => {
  return (
    <div>
      <section className={styles.desktop1Inner}>
      <div className={styles.frameParent}>
       
        <div className={styles.frameWrapper}>
          <div className={styles.theTypicalRuralTasteParent}>
            <b className={styles.theTypicalRuralContainer}>
              <p className={styles.theTypical}>{`THE TYPICAL `}</p>
              <p className={styles.ruralTaste}>RURAL TASTE</p>
            </b>
            <div className={styles.aboutUsParent}>
              <b className={styles.aboutUs}>ABOUT US</b>
              <b className={styles.details}>
              <hr style={{borderTop:'dotted 3px'}}/>
                <div>
                  <p>Our urban-bred chickens

are raised in the heart

of the city, thriving

in unique surroundings

for healthier, happier

birds.</p>
                </div>
                <hr style={{borderTop:'dotted 3px'}}/>
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
