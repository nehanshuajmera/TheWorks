import "./sort-box.styles.css";

export const SortBox = ({onSort}) => {

  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="sort-box">
      <label>SORT BY</label>
      <select
        className="sort-select"
        onChange={handleSortChange}
      >
        <option value="default">MOST VIEWED</option>
        <option value="leastViewed">LEAST VIEWED</option>
      </select>
    </div>
  );
};