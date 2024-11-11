import Filter from "./Filter";
import MYstate from "./PeopleList";

const ManagePeople = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      <Filter />
      <div>
        <Filter />
        <Filter />
      </div>

      <MYstate />
    </div>
  );
};

export default ManagePeople;
