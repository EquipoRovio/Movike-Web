import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const BusquedaThreePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-800 font-cousine h-[1024px] mx-auto relative w-full">
        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-end max-w-[1250px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[93px] items-center justify-start w-full">
            <div
              className="common-pointer bg-blue_gray-100 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[23px] sm:px-5 rounded-[30px] w-[98%] md:w-full"
              onClick={() => navigate("/busquedaone")}
            >
              <Text
                className="md:ml-[0] ml-[9px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                size="txtCousineBold35"
              >
                Titulo, personaje o genero
              </Text>
              <Img
                className="h-[60px] mb-[5px] w-[60px]"
                src="images/img_search_blue_gray_800.svg"
                alt="search"
              />
            </div>
            <div className="md:gap-5 gap-[23px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <Img
                className="flex-1 h-[226px] md:h-auto object-cover rounded-[30px] w-full"
                src="images/img_rectangle5_2.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-[226px] md:h-auto object-cover rounded-[30px] w-full"
                src="images/img_rectangle6_1.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-[227px] md:h-auto object-cover rounded-[30px] w-full"
                src="images/img_image5_1.png"
                alt="image"
              />
              <Img
                className="flex-1 h-[226px] md:h-auto object-cover rounded-[30px] w-full"
                src="images/img_rectangle31.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-[226px] md:h-auto object-cover rounded-[30px] w-full"
                src="images/img_rectangle32.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-[227px] md:h-auto object-cover rounded-[30px] w-full"
                src="images/img_image6_227x397.png"
                alt="image"
              />
              <Img
                className="flex-1 h-[226px] md:h-auto object-cover rounded-[30px] w-full"
                src="images/img_rectangle33.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-[226px] md:h-auto object-cover rounded-[30px] w-full"
                src="images/img_rectangle34.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-[227px] md:h-auto object-cover rounded-[30px] w-full"
                src="images/img_image7.png"
                alt="image"
              />
            </div>
          </div>
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
            className="absolute h-[175px] inset-y-[0] left-[0] my-auto object-cover w-[31%]"
            src="images/img_logo_175x439.png"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default BusquedaThreePage;
