import React from "react";

const Gallery = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6">
        <div className="card card-compact bg-base-100 w-full shadow-xl rounded-none">
          <figure>
            <img
              src={
                "https://cdn.pixabay.com/photo/2019/02/11/21/06/college-students-3990783_640.jpg"
              }
              alt="University"
            />
          </figure>
        </div>
        <div className="card card-compact bg-base-100 w-full shadow-xl rounded-none">
          <figure>
            <img
              src={
                "https://cdn.pixabay.com/photo/2017/09/08/00/38/friend-2727307_640.jpg"
              }
              alt="University"
            />
          </figure>
        </div>
        <div className="card card-compact bg-base-100 w-full shadow-xl rounded-none">
          <figure>
            <img
              src={
                "https://cdn.pixabay.com/photo/2021/04/26/17/12/group-6209550_640.jpg"
              }
              alt="University"
            />
          </figure>
        </div>
        <div className="card card-compact bg-base-100 w-full shadow-xl rounded-none">
          <figure>
            <img
              src={
                "https://cdn.pixabay.com/photo/2017/08/01/01/28/people-2562626_640.jpg"
              }
              alt="University"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Gallery;
