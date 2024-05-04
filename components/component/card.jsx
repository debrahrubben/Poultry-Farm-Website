
export function Card() {
  return (
    (<div className="container mx-auto px-4  ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div
          className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <div className="aspect-video bg-gray-100 dark:bg-gray-700">
            <img
              alt="Card Image"
              className="w-full h-full object-cover"
              height="300"
              src="https://res.cloudinary.com/dgpxvazru/image/upload/v1714839316/Poultry/photo_2024-05-04_16-08-15_dzi8s1.webp"
              style={{
                aspectRatio: "500/300",
                objectFit: "cover",
              }}
              width="500" />
          </div>
          <div className="p-6">
            <div className="flex flex-col items-center mb-4">
              <div
                className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-2"><span style={{color:'#8f2e37'}}>Broiler</span></div>
              <h3 className="text-xl font-bold">The best Broiler</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400">Your source for premium broiler chickens. Quality, care, and
                  flavor in every bite.</p>
          </div>
        </div>
        <div
          className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <div className="aspect-video bg-gray-100 dark:bg-gray-700">
            <img
              alt="Card Image"
              className="w-full h-full object-cover"
              height="300"
              src="https://res.cloudinary.com/dgpxvazru/image/upload/v1714839315/Poultry/photo_2024-05-04_16-08-19_fraeqi.webp"
              style={{
                aspectRatio: "500/300",
                objectFit: "cover",
              }}
              width="500" />
          </div>
          <div className="p-6">
            <div className="flex flex-col items-center mb-4">
              <div
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
               <span style={{color:'#8f2e37'}}>Consultancy</span>
              </div>
              <h3 className="text-xl font-bold">Expert Consultancy</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400">Get expert advice for your livestock farm.
                          Optimize health, productivity, and profits.</p>
          </div>
        </div>
        <div
          className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <div className="aspect-video bg-gray-100 dark:bg-gray-700">
            <img
              alt="Card Image"
              className="w-full h-full object-cover"
              height="300"
              src="https://res.cloudinary.com/dgpxvazru/image/upload/v1714839317/Poultry/6667_nfn0e7.webp"
              style={{
                aspectRatio: "500/300",
                objectFit: "cover",
              }}
              width="500" />
          </div>
          <div className="p-6">
            <div className="flex flex-col items-center mb-4">
              <div className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-2"><span style={{color:'#8f2e37'}}>Livestock</span></div>
              <h3 className="text-xl font-bold">Quality Livestock</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
            Livestock are farm animals like cattle, sheep, pigs, and
                    goats raised for meat, milk, and other products.
            </p>
          </div>
        </div>
      </div>
    </div>)
  );
}
