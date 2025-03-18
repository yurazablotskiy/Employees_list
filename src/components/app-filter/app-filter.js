import "./app-filter.css";

function AppFilter(props) {
  const buttonsData = [
    { name: "all", label: "All employees" },
    { name: "rise", label: "For promotion" },
    { name: "moreThan1000", label: "Salary greater than 1000$" },
  ];
  

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn btn-light" : "btn btn-outline-light";
    return (
      <button
        className={clazz}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
}

export default AppFilter;
