import Image from "next/image";

export default function Computer({ children }) {
  return (
    <>
      <div className="fixed bottom-0 left-2.5 z-10">
        <Image
          src="/resources/plant pot.png"
          alt="plant pot"
          width={100}
          height={100}
        />
      </div>
      <div className="fixed bottom-0 right-2.5 z-10">
        <Image src="/resources/cup.png" alt="cup" width={100} height={100} />
      </div>
      <div className="w-full h-screen flex flex-col items-center overflow-hidden">
        <div className="mt-8 mx-auto w-4/5 h-4/5 min-h-4/5 max-h-4/5 border-5 border-black bg-white overflow-y-auto relative rounded-2xl flex flex-col flex-1">
          {children}
        </div>
        <div className="relative flex flex-col items-center">
          <div className="w-32 h-8 bg-black z-10 relative" />
          <div className="w-72 h-4 base -mt-4"/>
        </div>
        <div className="table w-screen h-1/2"></div>
      </div>
    </>
  );
}
