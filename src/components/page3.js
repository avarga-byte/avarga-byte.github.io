import floor1 from "../images/1stv2.png";
import floor2 from "../images/2nd.png";
import floor3 from "../images/3rd.png";
import danmen from "../images/danmen.jpg";
import northElevation from "../images/northElevation.png";
import Title from "./sidecomp/Title";

function Page3() {
  return (
    <>
      <div className="bg-white shadow-xl flex overflow-auto flex-col h-full w-full justify-start items-center p-2">
        <Title number={"1"} name={"1階平面図"} />
        <img src={floor1} className="rounded-xl border border-2 w-full" />
        <Title number={"2"} name={"2階平面図"} />
        <img src={floor2} className="rounded-xl border border-2 w-full" />
        <Title number={"3"} name={"3階平面図"} />
        <img src={floor3} className="rounded-xl border border-2 w-full" />
        <Title number={"4"} name={"断面図"} />
        <img src={danmen} className="rounded-xl border border-2 w-full" />
        <Title number={"5"} name={"北側立面図"} />
        <img src={northElevation} className="rounded-xl border border-2 w-full" />

      </div>
    </>
  );
}

export default Page3;
