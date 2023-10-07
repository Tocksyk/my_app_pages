function CreateSkills({ data, folderPath }) {
  return data.map((el) => {
    return (
      <div className="flex items-center w-32 border-2 border-black hover:bg-lime-200 rounded-lg p-1">
        <img
          src={`${process.env.PUBLIC_URL}/${folderPath}/${el.toLowerCase()}.svg`}
          alt={`${el.toLowerCase()}`}
          className="w-6 h-5 mx-2"
        />
        <p className="text-sm font-semibold">{el}</p>
      </div>
    );
  });
}

export default CreateSkills;
