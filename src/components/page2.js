import map from "../images/MapScan3.png";
import data from "../images/data.png";
import map2 from "../images/MapScan2.jpg";
import diagram from "../images/diagramv2.png";
import peopleData from "../images/PeopleData.jpg";
import ViewImage from "./sidecomp/ViewImage";
import view1 from "../images/view1.jpeg";
import view2 from "../images/view2.jpeg";
import Title from "./sidecomp/Title";
import { FaStreetView } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import rightSide from "../images/rightSide.jpg";
import smallPass1 from "../images/Image15.png";

function page2() {
  return (
    <>
      <div className="bg-white shadow-xl flex overflow-auto px-2 flex-col h-full w-full justify-start items-center">
        <ViewImage number={"1"} name={"計画敷地"} src={map} alt={"map"} />
        <ViewImage
          number={"2"}
          name={"通勤する人々のデータ"}
          src={peopleData}
          alt={"data"}
        />
        <Title number={"3"} name={"敷地の現状"} />
        <div className="w-full p-2 relative">
          <div className=" flex flex-col absolute justify-center items-center top-8 right-38 rotate-30">
            <FaStreetView />
            1
            <CiLocationArrow1 className="rotate-135" />
          </div>
          <div className=" flex flex-col absolute justify-center items-center top-12 right-24 rotate-10">
            <FaStreetView />
            2
            <CiLocationArrow1 className="rotate-135" />
          </div>
          <img
            src={map2}
            alt={"map2"}
            className="w-full rounded-xl border shadow-xl"
          />
          <div className="w-full flex flex-row justify-between items-center p-2">
            <div className="w-11/24  relative  rounded-xl shadow-xl border border-1">
              <h1 className="absolute bottom-1 ml-4 px-2 text-white bg-black rounded-md">
                1
              </h1>
              <img src={view1} className="w-full h-full rounded-xl" />
            </div>
            <div className="w-11/24  relative rounded-xl shadow-xl border border-1">
              <h1 className="absolute bottom-1 ml-4 px-2 text-white bg-black rounded-md">
                2
              </h1>
              <img src={view2} className="w-full h-full rounded-xl" />
            </div>
          </div>
        </div>

        <ViewImage
          number={"4"}
          name={"提案"}
          src={data}
          alt={"data"}
          text={true}
        />
        <ViewImage
          number={"5"}
          name={"ダイヤグラム"}
          src={diagram}
          alt={"data"}
        />
        <ViewImage
          number={"6"}
          name={"西側立面図 1/100"}
          src={rightSide}
          alt={"right-side"}
        />
        <ViewImage
          number={"7"}
          name={"外観パース"}
          src={smallPass1}
          alt={"smallPass"}
        />

      </div>
    </>
  );
}

export default page2;
