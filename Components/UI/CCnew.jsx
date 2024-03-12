import React from "react";

const CCnew = () => {
  return (
    <div className="container flex justify-evenly mx-auto mt-10">
      <div className="flex justify-center">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 inline mx-auto ">
            <div className="card rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1565208565380-02138793c3b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt="Black Pants"
                className="w-full"
              />
              <div className="card-body py-4">
                <h5 className="card-title text-center font-semibold">Black Pants</h5>
              </div>
            </div>
          </div>
          {/* Add more product cards as needed */}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 inline mx-auto">
            <div className="card rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1565208565380-02138793c3b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt="Black Pants"
                className="w-full"
              />
              <div className="card-body py-4">
                <h5 className="card-title text-center font-semibold">Black Pants</h5>
              </div>
            </div>
          </div>
          {/* Add more product cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default CCnew;



