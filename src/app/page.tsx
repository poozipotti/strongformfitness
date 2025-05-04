import { IconBrandInstagram } from "@tabler/icons-react";
export default function Home() {
  return (
    <>
      <div className="w-full  bg-cover flex justify-center items-center h-[100vh]">
        <div className="flex flex-col items-center">
          <div>
            <h1
              className="text-foreground h-min text-9xl font-[anton]"
              style={{ opacity: "100%" }}
            >
              STRONGFORM NYC
            </h1>
            <p className="w-full text-right text-foreground text-3xl ">
              by Char
            </p>
          </div>
          <div className="h-48" />

          <div className="flex flex-col justify-center align-center text-foreground gap-4 items-end w-full px-12">
            <div className="flex justify-between text-center text-accent w-full">
              <p className="font-[anton] text-3xl">1:1 Training session</p>
              <div className="grow border-b-2 border-dotted h-8 mx-2" />
              <p className="font-[slabo] text-3xl ">$200/session</p>
            </div>
            <div className="flex justify-between text-center text-accent w-full">
              <p className="font-[anton] text-3xl">1:1 Training session</p>
              <div className="grow border-b-2 border-dotted h-8 mx-2" />
              <p className="font-[slabo] text-3xl ">$200/session</p>
            </div>
            <div className="flex justify-between text-center text-accent w-full">
              <p className="font-[anton] text-3xl">1:1 Training session</p>
              <div className="grow border-b-2 border-dotted h-8 mx-2" />
              <p className="font-[slabo] text-3xl ">$200/session</p>
            </div>
          </div>
          <div className="h-24" />
          <div className="w-full">
            <div className=" flex justify-center items-center">
              <div className="flex gap-4 text-2xl">
                <a
                  className="flex"
                  href="https://www.instagram.com/cbex64/?locale=en_US%2Cen_GB&hl=nl"
                >
                  <IconBrandInstagram size="38px" />
                  @charfitnesswhatever
                </a>
                <p>|</p>
                <p>charity@strongfitness.com</p>
                <p>|</p>
                <p>xxx-xxxx</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ height: "100vh" }}
        className="w-full flex justify-center content-center  "
      ></div>
    </>
  );
}
