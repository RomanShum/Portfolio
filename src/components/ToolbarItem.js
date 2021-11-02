function ToolbarItem(props) {
  const { filter, selected, onSelectFilter } = props;

  return (
    <div
      className={filter === selected ? "filter active" : "filter"}
      onClick={onSelectFilter}
    >
      {filter}
    </div>
  );
}

export default ToolbarItem;
