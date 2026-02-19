import Title from "./Title";

function ViewImages({ number, name, src, alt, images }) {
  return (
    <div className="w-full p-2">
      <Title number={number} name={name} />
      {images.map((image, index) => (
        <div key={index + 1}>
          <img
            src={image.image}
            alt={image.alt}
            className="w-full rounded-xl border shadow-xl mt-4 shadow-xl"
          />
          <h1 className="w-full text-right font-bold">{image.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default ViewImages;
