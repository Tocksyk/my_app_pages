import CoffeeMug from "./CoffeeMug";
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
  "Kafka",
];
const cloudData = ["AWS DynamoDB", "AWS S3", "AWS EC2", "AWS Lambda", "AWS SQS", "AWS Cognito", "AWS Gateway"];
function App(params) {
  // const bg = "bg-gradient-to-r from-teal-600  to-teal-700";
  return (
    <div className="md:h-screen h-full md:flex md:justify-center md:items-center bg-cover bg-hom">
      <div className="md:rounded-3xl md:border-2 md:border-black md:w-4/6 md:h-4/5 md:shadow-2xl md:shadow-slate-800 bg-slate-300 bg-opacity-30">
        <div className="title md:p-3 md:flex md:flex-col md:items-center flex flex-col items-center">
          <div className="md:text-black md:text-5xl md:font-bold md:hover:scale-105 hover:cursor-pointer text-5xl text-black font-bold p-3 font-pt flex items-end">
            <CoffeeMug />
            <div className="md:ml-3 md:w-5/6 w-48">Sameed Ansari</div>
          </div>
          <p className="md:text-lg md:italic md:ml-7 md:hover:text-xl md:h-10 text-2xl font-pt font-semibold italic">
            Full Stack Developer
          </p>
        </div>
        <div className="h-4/6">
          <div className="md:flex md:justify-center md:content-between md:h-full md:p-3">
            <div className="links-sections md:w-2/6 flex flex-col items-center my-7">
              <p className="font-pt text-3xl mb-3 text-black font-extrabold flex">
                <img src={`${process.env.PUBLIC_URL}/links.svg`} alt="links" className="w-10 animate-bounce" />
                <p>App Links</p>
              </p>
              <ol className="list-inside list-decimal text-lg text-black">
                <li className="hover:bg-lime-200 rounded-xl px-3">
                  <a href="https://splendorous-melba-f67da0.netlify.app/" className="hover:italic font-semibold font-pt italic">
                    Music App
                  </a>
                </li>
              </ol>
            </div>
            <div className="skills-sections w-full">
              <div className="md:flex md:flex-row md:items-center md:m-2 md:h-2/6 flex flex-col items-center my-7">
                <p className="md:text-black md:hover:bg-lime-200 md:mr-3 md:p-3 md:shadow-xl md:shadow-black md:bg-slate-200 md:h-full md:flex md:items-center md:rounded-r-xl md:w-28 text-xl font-bold italic text-black mb-2 font-pt md:hover:scale-105 place-content-center md:bg-opacity-70">
                  FrontEnd
                </p>
                <div className="md:grid md:grid-cols-4 md:gap-1 grid grid-cols-2 gap-2">
                  <CreateSkills data={frontendData} folderPath={"frontend"} />
                </div>
              </div>
              <div className="md:flex md:flex-row md:items-center md:m-2 md:h-2/6 flex flex-col items-center my-7">
                <p className="md:text-black md:hover:bg-lime-200 md:mr-3 md:p-3 md:shadow-xl md:shadow-black md:bg-slate-200 md:h-full md:flex md:items-center md:rounded-r-xl md:w-28 text-xl font-bold italic text-black mb-2 font-pt md:hover:scale-105 place-content-center md:bg-opacity-70">
                  Backend
                </p>
                <div className="md:grid md:grid-cols-4 md:gap-1 grid grid-cols-2 gap-2">
                  <CreateSkills data={backendData} folderPath={"backend"} />
                </div>
              </div>
              <div className="md:flex md:flex-row md:items-center md:m-2 md:h-2/6 flex flex-col items-center my-7">
                <p className="md:text-black md:hover:bg-lime-200 md:mr-3 md:p-3 md:shadow-xl md:shadow-black md:bg-slate-200 md:h-full md:flex md:items-center md:rounded-r-xl md:w-28 text-xl font-bold italic text-black mb-2 font-pt md:hover:scale-105 place-content-center md:bg-opacity-70">
                  Cloud
                </p>
                <div className="md:grid md:grid-cols-4 md:gap-1 grid grid-cols-2 gap-2">
                  <CreateSkills data={cloudData} folderPath={"cloud"} />
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
