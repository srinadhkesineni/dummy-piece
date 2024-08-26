const SearchCareers = () => {
    return (
      <div>
        <div className="text-center text-4xl text-green-700 font-semibold ">
          Can Choose Your own Career ?
        </div>
        <div className="text-center text-2xl mt-4 font-medium ">Choose Here</div>
        <div className="mt-6 text-center">
          <input
            type="text"
            placeholder="Choose your career..."
            className="border lg:w-96 md:w-80 p-2 rounded-lg border-gray-700"
          />
        </div>
      </div>
    );
  };
  
  export default SearchCareers;