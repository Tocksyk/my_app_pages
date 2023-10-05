import CreateSkills from "./CreateSkills";
const frontendData = ["ReactJS", "VueJS", "Pinia", "Flowbite", "Material UI", "Sass", "NextJS", "NuxtJS", "Formik", "RTK"];
const backendData = [
  "NodeJS",
  "Typescript",
  "ExpressJS",
  "NestJS",
  "Socket IO",
  "FeathersJS",
  "MySQL",
  "MongoDB",
  "Postgres",
  "Redis",
  "Elasticsearch",
];
const cloudData = ["AWS DynamoDB", "AWS S3", "AWS EC2", "AWS Lambda", "AWS SQS", "AWS Cognito", "AWS Gateway"];
function App(params) {
  return (
    <div className="h-screen md:flex md:justify-center md:items-center bg-gradient-to-r from-teal-500 to-gray-300">
      <div className="md:border-2 md:border-black md:w-4/6 md:h-4/5 md:shadow-xl md:shadow-slate-600">
        <div className="title md:p-3 flex flex-col items-center">
          <p className="md:text-black md:text-5xl md:font-extrabold md:hover:italic text-5xl text-black">Sameed Ansari</p>
          <p className="md:text-lg md:italic md:ml-12 md:hover:text-3xl md:h-10 text-2xl italic">Full Stack Developer</p>
        </div>
        <div className="h-4/6">
          <div className="md:flex md:justify-center md:content-between md:h-full md:p-3">
            <div className="links-sections md:w-2/6 flex flex-col items-center my-10">
              <p className="font-serif text-3xl mb-3 text-black font-extrabold">App Links</p>
              <ol className="list-inside list-decimal text-lg text-black">
                <li className="hover:bg-lime-200 rounded-xl px-3">
                  <a href="https://splendorous-melba-f67da0.netlify.app/" className="hover:italic font-semibold">
                    Music App
                  </a>
                </li>
              </ol>
            </div>
            <div className="skills-sections w-full">
              <div className="md:flex md:flex-row md:items-center md:m-2 md:h-2/6 flex flex-col items-center my-7">
                <p className="md:text-black md:hover:bg-lime-200 md:mr-3 md:p-3 md:shadow-xl md:shadow-black md:bg-slate-200 md:h-full md:flex md:items-center md:rounded-r-xl md:w-28 text-xl font-bold italic text-lime-400 mb-2">
                  FrontEnd
                </p>
                <div className="md:grid md:grid-cols-4 md:gap-1 grid grid-cols-2 gap-2">
                  <CreateSkills data={frontendData} folderPath={"public_frontend"} />
                </div>
              </div>
              <div className="md:flex md:flex-row md:items-center md:m-2 md:h-2/6 flex flex-col items-center my-7">
                <p className="md:text-black md:hover:bg-lime-200 md:mr-3 md:p-3 md:shadow-xl md:shadow-black md:bg-slate-200 md:h-full md:flex md:items-center md:rounded-r-xl md:w-28 text-xl font-bold italic text-lime-400 mb-2">
                  Backend
                </p>
                <div className="md:grid md:grid-cols-4 md:gap-1 grid grid-cols-2 gap-2">
                  <CreateSkills data={backendData} folderPath={"public_backend"} />
                </div>
              </div>
              <div className="md:flex md:flex-row md:items-center md:m-2 md:h-2/6 flex flex-col items-center my-7">
                <p className="md:text-black md:hover:bg-lime-200 md:mr-3 md:p-3 md:shadow-xl md:shadow-black md:bg-slate-200 md:h-full md:flex md:items-center md:rounded-r-xl md:w-28 text-xl font-bold italic text-lime-400 mb-2">
                  Cloud
                </p>
                <div className="md:grid md:grid-cols-4 md:gap-1 grid grid-cols-2 gap-2">
                  <CreateSkills data={cloudData} folderPath={"public_cloud"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
