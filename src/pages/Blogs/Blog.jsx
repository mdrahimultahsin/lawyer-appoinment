import React from "react";

const Blog = ({blog}) => {
 
  return (
    <div className="collapse collapse-arrow bg-base-100 border border-base-300 p-2">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title font-semibold text-lg">
        {blog.question}
      </div>
      <div className="collapse-content text-base text-[#0F0F0F90]">
      {blog.answer}
      </div>
    </div>
  );
};

export default Blog;
