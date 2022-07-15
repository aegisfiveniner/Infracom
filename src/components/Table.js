import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteItem, getItemById } from "../store/actions/itemAction";

export default function Table({ items }) {
  // const dispatch = useDispatch();

  function deleteHandler(id) {
    // console.log(id);
    deleteItem(id);
  }

  return (
    <div className="p-5 ">
      <table className="table-auto w-full text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>User Id</th>
            <th colSpan={3}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td className="text-start">{item.title}</td>
              <td>{item.userId}</td>
              <td>
                <NavLink
                  to={`edit/${item.id}`}
                  className="bg-zinc-600 text-gray-300 p-2 rounded-lg"
                >
                  Edit
                </NavLink>
              </td>
              <td>
                <button
                  onClick={() => deleteHandler(item.id)}
                  className="bg-red-600 text-gray-300 p-2 rounded-lg"
                >
                  Delete
                </button>
              </td>
              <td>
                <NavLink
                  to={`/${item.id}`}
                  className="text-gray-700 p-2 rounded-lg"
                >
                  Detail
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
