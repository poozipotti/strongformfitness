import { IconBrandInstagram, IconMail, IconPhone } from "@tabler/icons-react";
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
            <div className=" flex justify-center items-end">
              <div className="flex gap-4 text-2xl items-end">
                <a
                  className="flex items-end gap-2"
                  href="https://www.instagram.com/cbex64"
                >
                  <IconBrandInstagram size="30px" />

                  <p className="underline">cbex64</p>
                </a>
                <p>|</p>
                <a
                  className="flex items-end gap-2"
                  href="mailto:char@strongfitness.com"
                >
                  <IconMail size="30px" />
                  <p className="underline">char@strongfitness.com</p>
                </a>
                <p>|</p>

                <a className="flex items-end gap-2" href="tel:+123456789">
                  <IconPhone size="30px" />
                  <p className="underline">xxx-xxxx</p>
                </a>
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
