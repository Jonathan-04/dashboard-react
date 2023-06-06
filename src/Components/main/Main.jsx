import Candidates from "./Candidates";
import Card from "./Card";

const Main = () => {
  return (
    <main className="w-[70%] mt-4">
      <div className="relative w-[100%] flex justify-between mb-5">
        <h2 className="text-2xl font-bold">Current Openings </h2>
        <select
          className="bg-[#1E1E1E] text-[#898989] p-2 border-none rounded-3xl"
          name=""
          id=""
        >
          <option value="">Sort By: Latest</option>
        </select>
      </div>

      <div className="flex">
        <Card />
      </div>

      <section className="w-[100%] mt-9">
        <Candidates />
      </section>
    </main>
  );
};

export default Main;
