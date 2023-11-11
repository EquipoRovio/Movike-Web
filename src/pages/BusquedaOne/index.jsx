import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const BusquedaOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-800 font-cousine h-[1024px] mx-auto pb-[436px] relative w-full">
        <div className="absolute flex flex-col md:gap-10 gap-[94px] inset-x-[0] justify-start max-w-[1225px] mx-auto md:px-5 top-[15%] w-full">
          <div className="bg-blue_gray-100 flex flex-row md:gap-10 items-center justify-between p-[23px] sm:px-5 rounded-[30px] w-full">
            <Text
              className="ml-[9px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
              size="txtCousineBold35"
            >
              Blue Bettle
            </Text>
            <Img
              className="h-[60px] mb-[5px] w-[60px]"
              src="images/img_search_blue_gray_800.svg"
              alt="search"
            />
          </div>
          <Img
            className="common-pointer h-[226px] md:h-auto md:ml-[0] ml-[11px] object-cover rounded-[30px] w-[33%]"
            src="images/img_rectangle5_3.png"
            alt="rectangleFive"
            onClick={() => navigate("/descripciondepelicula")}
          />
        </div>
        <div className="absolute h-[175px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <div className="absolute h-[122px] inset-x-[0] mx-auto top-[0] w-full">
            <Img
              className="h-[122px] m-auto object-cover w-full"
              src="images/img_fondo_122x1440.png"
              alt="fondo"
            />
            <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-center my-auto right-[4%] w-1/4">
              <div className="bg-blue_gray-100_a0 flex flex-col h-[76px] items-center justify-start p-2 rounded-[50%] w-[76px]">
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_search_blue_gray_800.svg"
                  alt="search_One"
                />
              </div>
              <Img
                className="common-pointer h-[60px] ml-[33px] mt-2 w-[60px]"
                src="images/img_car.svg"
                alt="car"
                onClick={() => navigate("/homethree")}
              />
              <Img
                className="common-pointer h-[60px] ml-[33px] mt-[5px] w-[60px]"
                src="images/img_grid_gray_100.svg"
                alt="grid"
                onClick={() => navigate("/homefour")}
              />
              <Img
                className="common-pointer h-[57px] md:h-auto ml-[41px] mt-[5px] object-cover rounded-[28px] w-[16%]"
                src="images/img_cuenta.png"
                alt="cuenta"
                onClick={() => navigate("/homefive")}
              />
            </div>
          </div>
          <Img
            className="common-pointer absolute h-[175px] inset-y-[0] left-[0] my-auto object-cover w-[31%]"
            src="images/img_logo_175x439.png"
            alt="logo"
            onClick={() => navigate("/homeone")}
          />
        </div>
      </div>
    </>
  );
};

export default BusquedaOnePage;
