import BehindScene from "@/components/home/BehindScene";
import Reviews from "@/components/home/Reviews";
import Shop from "@/components/home/Shop";
import Image from "@/components/ui/Image";

export default function Home() {
  return (
    <>
      <Image
        loading="eager"
        src="/home.png"
        alt="Hero Banner"
        className="h-[520px] w-full sm:h-[280px] md:h-[360px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]"
      />
      <Shop />
      <BehindScene />
      <Reviews />
    </>
  );
}
