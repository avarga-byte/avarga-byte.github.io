function Title({ number, name }) {
  return (
    <div className="flex w-full justify-start items-end h-12 p-4 mt-4">
      <h1 className="border-t-2 border-r-2 border-l-2 rounded-tr-[5px] rounded-tl-[5px] px-2 mt-2 text-bold">
        {number}
      </h1>
      <h1 className="border-b-2 px-2 border-r-2 rounded-br-[5px] font-bold text-[20px]">
        {name}
      </h1>
    </div>
  );
}

export default Title;
