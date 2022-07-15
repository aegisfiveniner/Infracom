import "./App.css";
import Dashboard from "./views/Dashboard";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Table from "./components/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "./store/actions/itemAction";
import { useEffect } from "react";
import Detail from "./components/Detail";

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Dashboard items={items} />}>
        <Route path="/" element={<Table items={items} />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="add" element={<Form form={"add"} />} />
        <Route path="edit/:id" element={<Form form={"edit"} />} />
      </Route>
    </Routes>
  );
}

export default App;
