import mainPass from "../images/Image18.png";
import smallPass1 from "../images/Image2.png";
import smallPass2 from "../images/Image3.png";
import smallPass3 from "../images/Image6.png";
import smallPass4 from "../images/Image14.png";
import video from "../Video/Image to Video.mp4";
import ModelViewer from "./sidecomp/ModelViewer";

function page1({ onButtonClick }) {
  return (
    <div className="bg-white shadow-xl flex overflow-auto scroll-smooth flex-col h-full w-full justify-start items-center">
      <h1 className="text-[50px]">Hachioji Resthub</h1>
      <div className="w-full h-[1000px] md:h-[700px] lg:h-[900px] p-10 md:p-6">
        <ModelViewer />
        {/* <img
          src={mainPass}
          className="w-full h-full object-cover rounded-xl shadow-xl"
          alt="mainpass"
        /> */}
        {/* <video
          className="w-full h-full object-cover rounded-xl shadow-xl"
          src={video}
          loop
          autoPlay
        ></video> */}
      </div>

      <div className="flex flex-col w-full h-96">
        <div className="flex flex-col w-full text-[10px]">
          <h2 className="font-bold w-full text-[16px] text-center">
            八王子で働く人々のために作られたウェルネスセンター
          </h2>
          <h2 className="w-full mt-2 p-4 text-center">
            八王子駅から京葉方面へ通勤する方が多いため、宿泊しながら体調を整えられる場所として活用してほしいと考えています。また、八王子市に住む人々にも、より健康的で元気な毎日を送ってほしいという思いがあります。
            「病院があるのに、なぜこの施設を？」と思う方もいるでしょう。
            このセンターは、病気になる前に整えるための場所であり、病院に行かずに済む体づくりや、うつ病などのメンタル不調の予防を目的としています。
            空間づくりでは、安らぎを感じられるよう、小さなものはより丸く、大きなものは控えめな丸みを取り入れ、落ち着けるデザインを工夫しています。
            忙しい社会で生きる人々が、自分の心と向き合う時間と場所を持てるように。
            それが、このウェルネスセンターの願いです。
            <p className="border rounded-xl w-full p-2">
              建築とは、ただ単に住まいを提供するだけのものではなく、非常にシンプルな囲いであるべきだと私は考えています。建築は、人を興奮させ、落ち着かせ、考えさせるものでなければなりません。-Zaha
              Hadid 
            </p>
          </h2>
        </div>
        <div className="w-full flex flex-row justify-center items-center flex-wrap">
          <img src={smallPass1} className="w-1/2  p-2 rounded-[20px]" />
          <img src={smallPass2} className="w-1/2  p-2 rounded-[20px]" />
          <img src={smallPass3} className="w-1/2  p-2 rounded-[20px]" />
          <img src={smallPass4} className="w-1/2 p-2 rounded-[20px]" />
        </div>
        <div className="w-full h-32 flex justify-end items-center">
          <h1
            onClick={() => onButtonClick("2")}
            className="border bg-black text-white rounded-xl p-2 m-4 mb-12 cursor-pointer"
          >
            NEXT PAGE
          </h1>
        </div>
      </div>
    </div>
  );
}

export default page1;
