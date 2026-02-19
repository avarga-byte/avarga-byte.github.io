import Title from "./sidecomp/Title";
import ViewImage from "./sidecomp/ViewImage";
import ViewImages from "./sidecomp/ViewImages";

import Outside from "../images/Image14.png";
import Outside2 from "../images/Image12.png";
import Outside3 from "../images/Image15.png";
import Outside4 from "../images/Image18.png";
import Inside2 from "../images/Image3.png";
import Inside3 from "../images/Image4.png";
import Inside4 from "../images/Image5.png";
import Inside5 from "../images/Image6.png";
import Inside6 from "../images/Image7.png";
import Inside7 from "../images/Image8.png";
import Inside8 from "../images/Image9.png";
import Inside9 from "../images/Image10.png";
import Inside10 from "../images/Image11.png";

const images = [
  {
    images: [
      {
        alt: "Lounge",
        name: "Outside Right",
        image: Outside,
      },
      {
        alt: "Lounge",
        name: "Outside Front",
        image: Outside2,
      },
      {
        alt: "Lounge",
        name: "Outside Front",
        image: Outside3,
      },
      {
        alt: "Lounge",
        name: "Outside Above",
        image: Outside4,
      },
    ],
    name: "外観パース",
    alt: "外観パース",
  },
  {
    images: [
      {
        alt: "Lounge",
        name: "Lounge + Reading Space",
        image: Inside2,
      },
      {
        alt: "Lounge",
        name: "GYM",
        image: Inside3,
      },
      {
        alt: "Lounge",
        name: "Cafe",
        image: Inside4,
      },
      {
        alt: "Lounge",
        name: "Lounge",
        image: Inside5,
      },
      {
        alt: "Lounge",
        name: "Office",
        image: Inside6,
      },
      {
        alt: "Lounge",
        name: "Therapy",
        image: Inside7,
      },
      {
        alt: "Lounge",
        name: "Leisure Space",
        image: Inside8,
      },
      {
        alt: "Lounge",
        name: "Reading Space",
        image: Inside9,
      },
      {
        alt: "Lounge",
        name: "Reading Space",
        image: Inside10,
      },
    ],
    name: "内観パース",
    alt: "内観パース",
  },
];

function Page4({ onButtonClick }) {
  return (
    <>
      <div className="bg-white shadow-xl flex overflow-auto flex-col h-full w-full justify-start items-center p-2">
        {images.map((user) => (
          <ViewImages
            number={"1"}
            name={user.name}
            images={user.images}
            alt={user.alt}
          />
        ))}
        <div className="w-full h-32 flex justify-between items-center">
          <h1
            onClick={() => onButtonClick("3")}
            className="border bg-black text-white rounded-xl p-2 m-4 mb-12 cursor-pointer"
          >
            PAGE BEFORE
          </h1>
          <h1
            onClick={() => onButtonClick("5")}
            className="border bg-black text-white rounded-xl p-2 m-4 mb-12 cursor-pointer"
          >
            NEXT PAGE
          </h1>
        </div>
      </div>
    </>
  );
}

export default Page4;
