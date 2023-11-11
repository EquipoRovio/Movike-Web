import React from "react";

import { Img } from "components";

const BusquedaPage = () => {
  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col items-center justify-start mx-auto pb-[842px] w-full">
        <div className="h-[182px] md:px-5 relative w-full">
          <div className="absolute h-[135px] inset-x-[0] mx-auto top-[0] w-full">
            <Img
              className="h-[135px] m-auto object-cover w-full"
              src="images/img_fondo_1.png"
              alt="fondo"
            />
            <div className="absolute bottom-[24%] flex flex-row items-start justify-center right-[4%] w-1/4">
              <Img
                className="h-[60px] mt-[3px] w-[60px]"
                src="images/img_search_white_a700.svg"
                alt="search"
              />
              <Img
                className="h-[60px] ml-[41px] mt-[3px] w-[60px]"
                src="images/img_car.svg"
                alt="car"
              />
              <Img
                className="h-[60px] mb-[3px] ml-[33px] w-[60px]"
                src="images/img_grid_gray_100.svg"
                alt="grid"
              />
              <Img
                className="h-[57px] md:h-auto ml-[41px] object-cover rounded-[28px] w-[16%]"
                src="images/img_cuenta.png"
                alt="cuenta"
              />
            </div>
          </div>
          <Img
            className="absolute h-[182px] inset-y-[0] left-[0] my-auto object-cover w-[26%]"
            src="images/img_logo_182x374.png"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default BusquedaPage;
