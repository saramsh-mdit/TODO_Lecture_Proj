import React from "react";
import { toogleDone } from "../../utils";
import { Link } from "react-router-dom";

const Card = ({ title, date, isDone }) => {
  const onCheck = () => {
    toogleDone(date);
    window.location.reload();
  };
  return (
    <div className="no-underline text-xl p-4 rounded-lg border border-solid border-gray-300 grid gap-2 hover:border-blue-600">
      <div className="flex gap-2 ">
        <input
          className="w-6 h-6"
          type="checkbox"
          checked={isDone}
          onClick={onCheck}
        />
        <Link to={`/detail/${date}`}>
          <h3 className="font-semibold">{title}</h3>
        </Link>
      </div>
      <p className="text-sm text-gray-400">
        Date Created: {new Date(date).toISOString().slice(0, 10)}
      </p>
    </div>
  );
};

export default Card;
