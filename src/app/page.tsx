import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/roof.png')",
          height: "100vh",
        }}
        className="w-full bg-center bg-cover flex justify-center items-center"
      >
        <div className="flex flex-col items-center">
          <div>
            <h1
              className="text-white h-min text-9xl font-[anton]"
              style={{ opacity: "100%" }}
            >
              STRONGFORM NYC
            </h1>
            <p className="w-full text-right text-white text-3xl ">by Char</p>
          </div>
          <div className="h-48" />

          <div className="flex justify-center text-center text-accent w-max gap-4 items-end">
            <div className="flex flex-col justify-center text-center text-accent w-max">
              <p className="font-[slabo] text-7xl ">Prioritize Wellness</p>
              <p className="font-[anton] text-6xl">Without the stress</p>j
            </div>
            <div className="p-2 w-24 h-24 bg-accent rounded-full text-primary flex justify-center items-center">
              <p className="text-sm font-bold">Join the Pilate Body Hotties</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ height: "100vh" }}
        className="w-full flex justify-center content-center bg-secondarybg-center bg-cover "
      ></div>
    </>
  );
}
