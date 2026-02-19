import Title from "./Title";

function ViewImage({ number, name, src, alt, text, title }) {
  return (
    <div className="w-full p-2">
      {title ? "" : <Title number={number} name={name} />}
      {text ? (
        <div>
          <h1 className="font-bold text-[16px] underline ">形（フォルム）</h1>
          <p className="text-[10px]">
            曲線を基調とした形状と丸みを帯びた窓により、遠くから見ても近くで見ても、落ち着きと親しみやすさを感じられる建物とする。鋭い角を極力避け、自然光を柔らかく取り入れることで、ミニマルで未来的なデザインでありながら、リラックスできる空間を実現する。
          </p>
          <h1 className="font-bold text-[16px] underline ">
            色（カラーコンセプト）
          </h1>
          <p className="text-[10px]">
            全体はやわらかく穏やかな色使いとし、自然素材の家具を取り入れる。
            使用する主な色は、白・ベージュを基調に、緑・青・茶色をアクセントとして用い、自然との調和と安心感を演出する。
          </p>
          <h1 className="font-bold text-[16px] underline ">
            計画（空間構成） 休憩スペース
          </h1>
          <p className="text-[10px]">
            　誰でも気軽に立ち寄り、心身を休めることができる空間。
            個人用スペース 　集中やプライベートな時間を確保できる静かな空間。
            アプローチはシンプルな構成とし、建物に入る前から穏やかな印象を与える。
            玄関は広く開放的な空間とし、利用者がゆったりとした気持ちで建物に入れるように設計する。
            本計画が提案するレストハブは、単なる待機や休憩の場ではなく、短時間での心理的リセットを可能にする都市的装置として機能する。
            個人の精神的回復を支えることは、結果的に周辺空間における行動の質や滞在の快適性を高め、都市全体の雰囲気とパフォーマンスの向上に寄与する。
            休息は活動の対極ではなく、都市が円滑に機能するための重要な基盤である
          </p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full rounded-xl border shadow-xl"
        />
      )}
    </div>
  );
}

export default ViewImage;
