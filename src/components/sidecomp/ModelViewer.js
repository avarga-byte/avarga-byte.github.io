import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import Model from "./Model";
import One from "./OneFloor";
import Two from "./TwoFloor";
import Three from "./ThreeFloor";

/* 🔹 Camera setup */
function CameraSetup() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(10.12, 3.14, -15.95);
    camera.lookAt(10, 3, -15);
  }, [camera]);

  return null;
}

/* 🔹 Orbit controls with fixed touch + zoom */
function Controls() {
  const controls = useRef();

  useEffect(() => {
    if (controls.current) {
      controls.current.target.set(10, 3, -15);
      controls.current.update();
    }
  }, []);

  return (
    <OrbitControls
      ref={controls}
      enableDamping
      dampingFactor={0.08}
      enableZoom={true}
      enablePan={true}
      enableRotate={true}
      minDistance={0.5}
      maxDistance={60}
      maxPolarAngle={Math.PI / 1.8}
      // Touch: one finger = rotate, two fingers = zoom+pan
      touches={{
        ONE: 1, // ROTATE
        TWO: 2, // DOLLY_PAN
      }}
      // Mouse: left = rotate, middle = zoom, right = pan
      mouseButtons={{
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2,
      }}
      zoomSpeed={1.2}
      panSpeed={0.8}
      rotateSpeed={0.6}
    />
  );
}

/* 🔹 Floor renderer — key forces full unmount/remount on floor change */
function FloorModel({ floor }) {
  switch (floor) {
    case "Main":
      return <Model key="main" />;
    case "one":
      return <One key="one" />;
    case "two":
      return <Two key="two" />;
    case "three":
      return <Three key="three" />;
    default:
      return <Model key="main" />;
  }
}

export default function ModelViewer() {
  const [floor, setFloor] = useState("Main");

  const btnClass = (name) =>
    `font-semibold border rounded-xl p-2 m-2 text-center cursor-pointer select-none ${
      floor === name ? "bg-green-300 text-black" : "bg-black text-white"
    }`;

  return (
    <div className="h-1/2 md:h-2/3 lg:h-[75vh] w-full relative">
      <Canvas
        camera={{ fov: 50 }}
        className="rounded-xl"
        style={{ touchAction: "none" }}
      >
        {/* Camera */}
        <CameraSetup />

        {/* Lights */}
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        {/* Model — key ensures remount on floor change */}
        <FloorModel floor={floor} />

        {/* Controls & Environment */}
        <Controls />
        <Environment preset="city" />
      </Canvas>

      {/* Instructions */}
      <div
        style={{
          marginTop: 5,
          position: "relative",
          padding: "10px 14px",
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          fontSize: "13px",
          borderRadius: "8px",
          lineHeight: 1.5,
          pointerEvents: "none",
        }}
      >
        ☝️ 1本指：回転 &nbsp;|&nbsp; ✌️ 2本指：移動 &nbsp;|&nbsp; 🤏 ピンチ：ズーム
        <div style={{ marginTop: 4 }}>
          モデルがロードまで少々お待ちください。出て来てない場合はリフレッシュして下さい。
        </div>
      </div>

      {/* Floor buttons */}
      <div className="absolute right-0 top-0 flex flex-col w-24 justify-center items-center rounded-md">
        <div onClick={() => setFloor("three")} className={btnClass("three")}>
          ３階
        </div>
        <div onClick={() => setFloor("two")} className={btnClass("two")}>
          ２階
        </div>
        <div onClick={() => setFloor("one")} className={btnClass("one")}>
          １階
        </div>
        <div onClick={() => setFloor("Main")} className={btnClass("Main")}>
          建物
        </div>
      </div>
    </div>
  );
}
