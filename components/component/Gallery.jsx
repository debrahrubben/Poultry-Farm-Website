

export function Gallery() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-1 p-4 md:p-4">
      <div className="grid gap-2">
        <video
          muted
          alt="Video 1"
          className="aspect-video rounded-lg overflow-hidden"
          height={400}
          width={600}
          controls
          preload="none"
          style={{ border: '3px solid gray', transition: 'border-color 0.3s ease' }}
        >
          <source src="https://res.cloudinary.com/dgpxvazru/video/upload/v1713901279/Poultry/video_2024-04-16_11-04-22_uvumsk.mp4" type="video/mp4" />
        </video>
        <video
          muted
          alt="Video 2"
          className="aspect-video rounded-lg overflow-hidden"
          height={400}
          width={600}
          controls
          preload="none"
          style={{ border: '3px solid gray', transition: 'border-color 0.3s ease' }}
        >
          <source src="https://res.cloudinary.com/dgpxvazru/video/upload/v1713901283/Poultry/video_2024-04-19_21-39-48_q3rp64.mp4" />
        </video>
      </div>
      <div className="grid grid-cols-2 gap-1">
        <img
          alt="Image 1"
          className="aspect-square rounded-lg overflow-hidden shadow-md"
          height={300}
          src="https://res.cloudinary.com/dgpxvazru/image/upload/v1713902256/Poultry/newFile-2_aiwlbe.avif"
          width={350}
          style={{ border: '3px solid gray', transition: 'border-color 0.3s ease' }}
        />
        <img
          alt="Image 2"
          className="aspect-square rounded-lg overflow-hidden shadow-md"
          height={300}
          src="https://res.cloudinary.com/dgpxvazru/image/upload/v1713902267/Poultry/gettyimages-666073452-612x612_clqnef.jpg"
          width={350}
          style={{ border: '3px solid gray', transition: 'border-color 0.3s ease' }}
        />
        <img
          alt="Image 3"
          className="aspect-square rounded-lg overflow-hidden shadow-md"
          height={300}
          src="https://res.cloudinary.com/dgpxvazru/image/upload/v1714571878/Poultry/property-1variant2_gxij4a.webp"
          width={350}
          style={{ border: '3px solid gray', transition: 'border-color 0.3s ease' }}
        />
        <img
          alt="Image 4"
          className="aspect-square rounded-lg overflow-hidden shadow-md"
          height={300}
          src="https://res.cloudinary.com/dgpxvazru/image/upload/v1714571365/Poultry/rectangle-8_2x343_qwc2kd.webp"
          width={350}
          style={{ border: '3px solid gray ', transition: 'border-color 0.3s ease' }}
        />
      </div>
    </section>
  );
}
