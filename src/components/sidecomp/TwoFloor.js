import { useFBX } from "@react-three/drei";

export default function FBXModel() {
  const model = useFBX("/models/八王子2ndfloor.fbx");

  model.scale.set(0.5, 0.5, 0.5); // FBX is usually huge

  return <primitive object={model} />;
}
