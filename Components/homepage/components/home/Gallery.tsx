
import User1 from "../../assets/t1.jpg";

import User2 from "../../assets/t2.jpg";
import User3 from "../../assets/t3.jpg";

import User4 from "../../assets/t4.jpg";

import User5 from "../../assets/t5.jpg";
import { poppinsBold } from "../../fonts";
import { cn } from "../../lib/utils";
import Image, { type StaticImageData } from "next/image";
import React from "react";
import { useParallax } from "react-scroll-parallax";
import SectionTitle from "../global/SectionTitle";
import SectionWrapper from "../global/SectionWrapper";
import { ParallaxProvider } from 'react-scroll-parallax';

type UserData = {
  name: string;
  background: StaticImageData;
  avatar?: StaticImageData;
};

const usersData: UserData[] = [
  { name: "@MileyTabita", background: User1 },
  { name: "Mark Moss", background: User2 },
  { name: "Tony Robbins", background: User3 },
  { name: "Bitcoin Magazine", background: User4 },
  { name: "Aubrey Marcus", background: User5 },
  { name: "Tony Robbins", background: User3 },
];

function reverseArray<IData>(array: IData[]): IData[] {
  const result: IData[] = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = array[array.length - 1 - i] as IData;
  }
  return result;
}

function UserCard(props: { user: UserData }) {
  const { user } = props;
  return (
    <div
      className={cn(
        "flex h-[250px] w-[250px] flex-col items-center rounded-[31px] p-10",
        "sm:h-[350px] sm:w-[350px]",
        "lg:h-[400px] lg:w-[500px]",
        user.avatar ? "justify-center" : "justify-end"
      )}
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url(${user.background.src}),linear-gradient(138deg,rgba(116,202,255,.8),#f46692 58%,#ffe16a)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      
    </div>
  );
}

function Row1() {
  const { ref } = useParallax({
    translateX: ["-50%", "0"],
  });
  return (
    <div
      ref={ref as React.LegacyRef<HTMLDivElement>}
      className="grid transform grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] gap-x-4"
    >
      {usersData.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
}

function Row2() {
  const { ref } = useParallax({
    translateX: ["0", "-50%"],
  });
  const reversedArray = reverseArray<UserData>(usersData);
  return (
    <div
      ref={ref as React.LegacyRef<HTMLDivElement>}
      className="grid transform grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] gap-x-4"
    >
      {reversedArray.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
}

export default function Gallery() {
  return (
    <SectionWrapper className="bg-black bg-opacity-25" noContainer>
      <div className="flex flex-col gap-28 overflow-hidden text-gray-200">
        <SectionTitle
          title="REFLECTING ON THE JOURNEY"
          description="A glimpse into our team's past adventures, memories that shape our present."
          
        />
        <div className="flex rotate-6 transform flex-col gap-4 py-24">
        <ParallaxProvider>
            <Row1 />
            <Row2 />
        </ParallaxProvider>
        </div>
      </div>
    </SectionWrapper>
  );
}
