import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getItemById, postItem, updateItem } from "../store/actions/itemAction";

export default function Form({ form }) {
  const [input, setInput] = useState({});
  const { item } = useSelector((state) => state);
  const navigate = useNavigate();

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(id);
    dispatch(getItemById(id));

    // console.log(input);
  }, []);

  useEffect(() => {
    if (form === "edit") {
      setInput({ ...input, title: item.title, userId: item.userId });
    }
  }, [form, item]);

  function submitHandler(e) {
    e.preventDefault();
    // console.log(input);
    if (form === "edit") {
      updateItem(input, id)
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("fetch error");
          }
          return resp.json();
        })
        .then((data) => {
          console.log(data);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      postItem(input)
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("fetch error");
          }
          return resp.json();
        })
        .then((data) => {
          console.log(data);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function changeHandler(e) {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="w-full h-full">
      <form className="flex flex-col" onSubmit={(e) => submitHandler(e)}>
        <label className="my-2">Title</label>
        <input
          className="my-2"
          type={"text"}
          name="title"
          onChange={(e) => changeHandler(e)}
          defaultValue={input.title}
        />
        <label className="my-2">User Id</label>
        <input
          className="my-2"
          type={"text"}
          name="userId"
          onChange={(e) => changeHandler(e)}
          defaultValue={input.userId}
        />
        <div className="flex justify-end my-2">
          <button className="p-2 bg-teal-300 rounded" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
