import AppContentPrivate from "../../assets/p1.png";

import ReceivePayment from "../../assets/p1.png";

import MobileWireFrame from "../../assets/f1.png";
import Image, { type StaticImageData } from "next/image";
import React from "react";
import { Fade } from "react-reveal";
import { useParallax } from "react-scroll-parallax";
import SectionTitle from "../global/SectionTitle";
import SectionWrapper from "../global/SectionWrapper";
import { Container } from "../layout/Container";

type CardProps = {
  starterImage: StaticImageData;
  endImage: StaticImageData;
  description: string;
};

function Card(props: CardProps) {
  const { description, endImage, starterImage } = props;
  const [opacity, setOpacity] = React.useState(1);
  
  return (
    <Fade bottom distance="30px">
      <div className="flex w-full max-w-lg flex-col gap-12 rounded-[20px] p-8 shadow-[0_20px_40px_rgba(0,0,0,.05)]">
        <div className="relative mx-auto h-[640px] w-full max-w-md overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 top-auto z-[2] h-[30%] bg-[linear-gradient(rgba(29,30,30,0),#fff)]" />
          <div className="relative w-full">
            <Image
              src={MobileWireFrame}
              className="w-full"
              alt="Mobile wire frame"
            />
            <div className="absolute bottom-[35px] left-[36px] right-[36px] top-[35px] -z-[1] overflow-hidden">
              <div style={{ opacity }} className="duration-200">
                <Image
                  src={starterImage}
                  alt="Starter image"
                  
                  className="absolute -z-10 !h-full w-full overflow-hidden rounded-[40px] object-cover"
                />
              </div>
              
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-white">{description}</h2>
        </div>
      </div>
    </Fade>
  );
}

export default function CC() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-14 text-white">
        <SectionTitle
          title="CORE COORDINATOR"
          description="Streamlining operations and maximizing efficiency."
          gradient="bg-gradient-to-r from-yellow-light to-yellow-dark"
        />
        <Container>
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
            <Card
              description="Krishna Gambhir"
              starterImage={AppContentPrivate}
              endImage={AppContentPrivate}
            />
            <Card
              description="Parth Tailor"
              starterImage={ReceivePayment}
              endImage={ReceivePayment}
            />
          </div>
        </Container>
      </div>
    </SectionWrapper>
  );
}
