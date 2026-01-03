import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2026</option>
          <option value="2022">2025</option>
          <option value="2021">2024</option>
          <option value="2020">2023</option>
          <option value="2019">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
