import "./app-info.css";

function AppInfo({ allWorkersAmount, getIncrease }) {
  return (
    <div className="app-info">
      <h1>Employee Accounting in Company N</h1>
      <h2>Total number of employees: {allWorkersAmount}</h2>
      <h2>Bonus will be given to: {getIncrease}</h2>
    </div>
  );
}

export default AppInfo;
