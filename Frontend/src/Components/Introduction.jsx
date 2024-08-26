const Card = ({ title, items }) => (
    <div className="bg-four text-one font-medium shadow-lg  rounded-lg p-4 mb-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="list-disc list-inside space-y-1">
        {items.map((item, index) => (
          <li key={index} className="">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
  
  const Introduction = ({ title, career }) => {
    //   console.log(content);
    //   const knowledge = content.intro.knowledge;
    //   const skills = content.intro.skills;
    //   const personalities = content.intro.personalities;
    //   const technology = content.intro.technology;
    //   const education_requirements = content.intro.education_requirements;
    //   const job_outlook = content.intro.job_outlook
  //   console.log(career);
  
    return (
      <div className="bg-gray-100 p-6 border border-black mt-4 rounded-lg ">
        {/* <div className="bg-gray-800 text-white rounded-t-lg p-6">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div> */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card title="Knowledge" items={career.intro.knowledge} />
          <Card title="Skills" items={career.intro.skills} />
          <Card title="Personalities" items={career.intro.personalities} />
          <Card title="Technology" items={career.intro.technology} />
          <Card
            title="Education Requirements"
            items={career.intro.education_requirements}
          />
          <div className="bg-white shadow-lg rounded-lg  p-4 mb-4 border border-green-400 col-span-1 md:col-span-3">
            <h3 className="text-lg font-semibold mb-2 text-green-800">Job Outlook</h3>
            <p className="text-gray-700">
              <strong>Average Salary:</strong>{" "}
              {career.intro.job_outlook.average_salary}
            </p>
            <p className="text-gray-700">
              <strong>Growth Rate:</strong> {career.intro.job_outlook.growth_rate}
            </p>
            <p className="text-gray-700">
              <strong>New Job Opportunities:</strong>{" "}
              {career.intro.job_outlook.new_job_opportunities}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Introduction;