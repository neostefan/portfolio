import Image from "next/image";
import PortfolioImg from "../assets/portfolio-removebg-preview.png";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between px-24">
      <div className="max-w-full">
        <div className="flex items-center w-auto">
          <span className="w-[16px] h-2 bg-[#4A90E2]" />
          <span className="w-[12px]" />
          <h1 className="font-mono text-5xl font-black text-[#4A90E2]">
            ADINGUPU STEPHEN
          </h1>
        </div>
        <div className="flex space-x-4 w-auto">
          <h3 className="px-[28px] text-[#f5f5f5] font-mono font-black">
            FULLSTACK WEB DEVELOPER, MOBILE DEVELOPER
          </h3>
        </div>
        <div className="flex">
          <span className="text-[#f5f5f5]/[0.9] leading-loose max-w-lg">
            A Nigerian-based Full Stack Web and Mobile Developer focused on
            building user-friendly software that has a positive impact on the
            world.
          </span>
        </div>
      </div>

      <CardContainer>
        <CardBody className="h-auto w-auto border border-white/[0.2] rounded-xl relative hover:shadow-2xl hover:shadow-[#4A90E2]/[0.2]">
          <CardItem
            translateZ={40}
            translateX={30}
            className="border-transparent"
          >
            <Image className="rounded-xl" src={PortfolioImg} alt="profile" />
          </CardItem>
        </CardBody>
      </CardContainer>
    </main>
  );
}
