import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function RisingParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 120,
            density: { enable: true, area: 800 },
          },
          color: { value: "#00ffff" },
          opacity: {
            value: { min: 0.1, max: 0.7 },
            animation: {
              enable: true,
              speed: 0.3,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 4 }, // simulate near/far
            animation: {
              enable: false,
            },
          },
          move: {
            enable: true,
            speed: { min: 0.2, max: 1 }, // slower = farther
            direction: "top",
            outModes: {
              default: "out",
            },
          },
        },
      }}
    />
  );
}
