import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import parse from "html-react-parser";
import { getComments } from "../services";

export default function Comments({ slug }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((res) => setComments(res));
  });

  return (
    <>
      {comments.length && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-8">
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div className="border-b border-gray-100 mb-4 pb-4" key={index}>
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
