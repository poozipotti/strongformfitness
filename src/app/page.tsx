import { IconBrandInstagram, IconMail, IconPhone } from "@tabler/icons-react";
export default function Home() {
  return (
    <>
      <div className="w-full  bg-cover flex justify-center items-center pt-12">
        <div className="flex flex-col items-center">
          <div>
            <h1
              className="text-foreground h-min text-5xl md:text-9xl font-[anton]"
              style={{ opacity: "100%" }}
            >
              STRONGFORM NYC
            </h1>
            <p className="w-full text-right text-foreground text-3xl ">
              by Char
            </p>
          </div>
          <div className="h-32" />
          <p className="font-[slabo] text-lg md:text-2xl font-bold align-self-start md:align-self-center ">
            Offerings
          </p>
          <div className="h-6" />
          <div className="flex flex-col justify-center align-center text-foreground gap-4 items-end w-full md:w-1/2">
            <ul className="list-disc">
              <li>Consultation/Assessment Session</li>
              <li>1:1 Private sessions (60 minutes)</li>
              <li>Group sessions 2-3 clients (60 minutes)</li>
              <li>Custom workout plans (4 week, 8 week, 12 week)</li>
            </ul>
          </div>
          <div className="h-24" />
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-4 items-left md:items-center justify-center">
              <a
                className="flex items-end gap-2"
                href="https://www.instagram.com/cbex64"
              >
                <IconBrandInstagram size="20px" />

                <p className="underline">@cbex64</p>
              </a>
              <p className="hidden md:block">|</p>
              <a
                className="flex items-end gap-2"
                href="mailto:char@strongfitness.com"
              >
                <IconMail size="20px" />
                <p className="underline">Strongformnyc@gmail.com</p>
              </a>
              <p className="hidden md:block">|</p>
              <a className="flex items-end gap-2" href="tel:+6093650727">
                <IconPhone size="20px" />
                <p className="underline">609-365-0727</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
