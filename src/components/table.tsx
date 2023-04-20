const fruitName: string = "Banana";
const fruitCalories: number = 88.7;
const fruitColor: string = "Yellow";
const fruitEdible: boolean = true;

const Table = () => {
  return (
    <table className="table" title="Fruit">
      <tr>
        <th>Name</th>
        <th>Calories</th>
        <th>Color</th>
        <th>Edible</th>
      </tr>
      <tr>
        <td>{fruitName}</td>
        <td>{fruitCalories}</td>
        <td>{fruitColor}</td>
        <td>{fruitEdible ? "Yes" : "No"}</td>
      </tr>
    </table>
  );
};

export default Table;
