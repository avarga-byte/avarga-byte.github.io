import img1 from "../images/Page5_1.png";
import img2 from "../images/Page5_2.png";
import img3 from "../images/Page5_3.png";
import img4 from "../images/Page5_4.png";
import img5 from "../images/Page5_5.png";
import img6 from "../images/Page5_6.png";
import Title from "./sidecomp/Title";

const page5Images = [img1, img2, img3, img4, img5, img6];

function Page5() {
  return (
    <>
      <div className="bg-white shadow-xl flex overflow-auto flex-col h-full w-full justify-start items-center p-2">
        <Title number={""} name={"パース"} />
        {page5Images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`page5-${i + 1}`}
            className="w-full rounded-xl border shadow-xl mt-4"
          />
        ))}

      </div>
    </>
  );
}

export default Page5;
