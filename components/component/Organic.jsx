


import styles from './Organic.module.css';

export function Organic() {
  return (
    <div className={`${styles.backgroundImage} w-full min-h-screen relative`}>
      <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-6 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">GET THE DIFFERENT TASTE HERE</h1>
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <BeefIcon className="w-8 h-8 text-white" />
            <h3 className="text-lg font-semibold text-white">Organic meat</h3>
          </div>
          <div className="flex items-center gap-4">
            <MilkIcon className="w-8 h-8 text-white" />
            <h3 className="text-lg font-semibold text-white">Healthy livestock</h3>
          </div>
          <div className="flex items-center gap-4">
            <ViewIcon className="w-8 h-8 text-white" />
            <h3 className="text-lg font-semibold text-white">Best Consultancy</h3>
          </div>
        </div>
      </div>
    </div>
  );
}




function BeefIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12.5" cy="8.5" r="2.5" />
      <path
        d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z" />
      <path
        d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
    </svg>
  );
}

function MilkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2h8" />
      <path
        d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
      <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
    </svg>
  );
}

function ViewIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

