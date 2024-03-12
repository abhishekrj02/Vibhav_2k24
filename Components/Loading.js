export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-[5.5rem] md:text-[10rem] text-[#fdff00] font-[ARCADECLASSIC] mb-8">
        VIBHAV
      </p>

      <div className="pacman">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="flex flex-row justify-start mt-8">
        <p className="text-4xl text-white font-[ARCADECLASSIC]">Loading </p>
        <div className="flex flex-row ml-4 text-4xl text-white">
          <div className={`loading`}>
            <h1>...</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
