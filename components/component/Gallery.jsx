'use client'
import "./Gallery.css";
import { useEffect } from 'react';

export function Gallery() {
  useEffect(() => {
    function init(e) {
      if (!e.target.closest('.item')) return;
      let hero = document.querySelector('div[data-pos="0"]');
      let target = e.target.parentElement;
      [target.dataset.pos, hero.dataset.pos] = [hero.dataset.pos, target.dataset.pos];
    }

    window.addEventListener('click', init);

    return () => {
      window.removeEventListener('click', init);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  return (
<div>
<div className="main">
      <main className="gallery">
        <div className="item" data-pos="0">
         
          <img src="https://res.cloudinary.com/dgpxvazru/image/upload/v1713902256/Poultry/newFile-2_aiwlbe.avif" />
        </div>
        <div className="item" data-pos="1">
        <img src="https://res.cloudinary.com/dgpxvazru/image/upload/v1713902267/Poultry/gettyimages-666073452-612x612_clqnef.jpg" />
        </div>
        <div className="item" data-pos="2">
        <video
          muted
          alt="Video 2"
          className=" rounded-lg overflow-hidden"
          height={760}
          width={400}
          controls
          preload="auto"
          
        >
          <source src="https://res.cloudinary.com/dgpxvazru/video/upload/v1713901283/Poultry/video_2024-04-19_21-39-48_q3rp64.mp4" />
        </video>
        </div>
        <div className="item" data-pos="3">
          <img src="https://res.cloudinary.com/dgpxvazru/image/upload/v1714839482/Poultry/5f75304844c7d342a0a09264da4a638c_kd9gzu.webp" />
        </div>
        <div className="item" data-pos="4">
          <img src="https://res.cloudinary.com/dgpxvazru/image/upload/v1714839483/Poultry/1bfe8c0be0617580f46012613528de72_oegnfc.webp" />
        </div>
      </main>
    </div>
   

</div>
  );
}
