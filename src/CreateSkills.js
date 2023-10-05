function CreateSkills({ data, folderPath }) {
  return data.map((el) => {
    return (
      <div className="flex items-center w-32 border-2 border-black">
        <img src={`/${folderPath}/${el.toLowerCase()}.svg`} alt="vueJS" className="w-6 h-5 mx-2" />
        <p>{el}</p>
      </div>
    );
  });
}

export default CreateSkills;
