import { Canvas } from "react-three-fiber";
import InfinityLogo from "./logo";
import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <InfinityLogo />
      </Canvas>

      
      <Image src="/favicon.ico" width={250} height={250} alt="Icon" />
    </div>
  );
};

export default Home;
