import floor1 from "../images/1stv2.png";
import floor2 from "../images/2nd.png";
import floor3 from "../images/3rd.png";
import danmen from "../images/danmen.jpg";
import northElevation from "../images/northElevation.png";
import Title from "./sidecomp/Title";

function Page3({ onButtonClick }) {
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
        <div className="w-full h-32 flex justify-between items-center">
          <h1
            onClick={() => onButtonClick("2")}
            className="border bg-black text-white rounded-xl p-2 m-4 mb-12 cursor-pointer"
          >
            PAGE BEFORE
          </h1>
          <h1
            onClick={() => onButtonClick("4")}
            className="border bg-black text-white rounded-xl p-2 m-4 mb-12 cursor-pointer"
          >
            NEXT PAGE
          </h1>
        </div>
      </div>
    </>
  );
}

export default Page3;
