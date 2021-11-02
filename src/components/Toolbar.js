import ToolbarItem from "./ToolbarItem";

function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <ToolbarItem
          key={filter}
          filter={filter}
          selected={selected}
          onSelectFilter={onSelectFilter}
        />
      ))}
    </div>
  );
}

export default Toolbar;
