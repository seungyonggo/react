import { DELETE_MENU, useMenuStore } from "../../../../store/1_reducer";

const ReducerQ1List = () => {
  const [ingredients, dispatch] = useMenuStore();
  const onDelete = (id) => {
    dispatch(DELETE_MENU(id));
  };
  return (
    <tbody>
      {ingredients.map((ingredient) => (
        <tr key={ingredient.id}>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button onClick={(id) => onDelete(ingredient.id)}>삭제</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;
