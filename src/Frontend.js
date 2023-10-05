const frontendData = ["ReactJS", "VueJS", "Pinia", "Flowbite", "Material UI", "Sass", "NextJS", "NuxtJS", "Formik", "RTK"];
function FrontEndSkills(data, folderPath) {
  return frontendData.map((el) => {
    return (
      <div className="flex items-center w-32 border-2 border-black">
        <img src={`/frontend/${el.toLowerCase()}.svg`} alt="vueJS" className="w-6 h-5 mx-2" />
        <p>{el}</p>
      </div>
    );
  });
}

export default FrontEndSkills;
