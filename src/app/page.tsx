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
          <p className="font-[slabo] text-lg md:text-4xl font-bold">
            1:1 Private Sessions (In-Person, 60 min)
          </p>
          <div className="h-6" />
          <div className="flex flex-col justify-center align-center text-foreground gap-4 items-end w-full md:w-1/2">
            <PriceDisplay itemName="Single Session" cost={200} />
            <PriceDisplay itemName="4-pack" cost={750} amountOfItems={4} />
            <PriceDisplay itemName="8-pack" cost={1440} amountOfItems={8} />
            <PriceDisplay itemName="12-pack" cost={2040} amountOfItems={12} />
          </div>
          <div className="h-24" />
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-4 text-2xl items-left md:items-center justify-center">
              <a
                className="flex items-end gap-2"
                href="https://www.instagram.com/cbex64"
              >
                <IconBrandInstagram size="30px" />

                <p className="underline">cbex64</p>
              </a>
              <div className="hidden">
                <p className="hidden md:block">|</p>
                <a
                  className="flex items-end gap-2"
                  href="mailto:char@strongfitness.com"
                >
                  <IconMail size="30px" />
                  <p className="underline">char@strongfitness.com</p>
                </a>
                <p className="hidden md:block">|</p>
                <a className="flex items-end gap-2" href="tel:+123456789">
                  <IconPhone size="30px" />
                  <p className="underline">xxx-xxxx</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PriceDisplay({
  itemName,
  cost,
  amountOfItems,
}: {
  itemName: string;
  cost: number;
  amountOfItems?: number;
}) {
  return (
    <div className="w-full">
      <div className="flex justify-between text-center text-accent w-full">
        <p className="text-xl">{itemName}</p>
        <div className="grow border-b-2 border-dotted h-8 mx-2" />
        <p className="text-xl">${cost}</p>
      </div>
      {amountOfItems ? (
        <div className="w-full text-right">
          (${cost / amountOfItems}/session)
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
