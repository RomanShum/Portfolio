import ToolbarItem from "./ToolbarItem";
import { v1 as uuidv1 } from "uuid";

function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <ToolbarItem
          key={uuidv1()}
          filter={filter}
          selected={selected}
          onSelectFilter={onSelectFilter}
        />
      ))}
    </div>
  );
}

export default Toolbar;
