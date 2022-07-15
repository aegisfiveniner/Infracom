import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getItemById } from "../store/actions/itemAction";

export default function Detail() {
  const dispatch = useDispatch();
  const { item } = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getItemById(id));
  });

  return (
    <div className="w-full h-full">
      <p className="text-xl font-bold">Title</p>
      <p>{item.title}</p>
      <p className="text-xl font-bold">Description</p>
      <p>{item.body}</p>
      <p className="text-xl font-bold">Author</p>
      <p>{item.userId}</p>
    </div>
  );
}
