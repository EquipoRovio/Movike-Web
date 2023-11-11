import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const BusquedaTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-cousine justify-start mx-auto pb-[436px] w-full">
        <div className="flex flex-col items-center w-full">
          <div className="h-[175px] md:px-5 relative w-full">
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
                    alt="search"
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
        <div className="flex flex-col items-end mt-[5px] md:px-10 sm:px-5 px-[53px] w-full">
          <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start w-full">
              <div className="md:h-[67px] h-[82px] relative w-full">
                <Img
                  className="absolute h-[60px] right-[6%] top-[0] w-[60px]"
                  src="images/img_search_blue_gray_800.svg"
                  alt="search_One"
                />
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto md:text-5xl text-6xl text-gray-100 w-max"
                  size="txtCousineBold60"
                >
                  Resultados de la busqueda inteligente
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
                <Img
                  className="common-pointer h-[226px] md:h-auto object-cover rounded-[30px]"
                  src="images/img_rectangle5_4.png"
                  alt="rectangleFive"
                  onClick={() => navigate("/descripciondepelicula")}
                />
                <Img
                  className="common-pointer h-[226px] md:h-auto object-cover rounded-[30px]"
                  src="images/img_rectangle31_226x397.png"
                  alt="rectangleThirtyOne"
                  onClick={() => navigate("/descripciondepelicula")}
                />
                <Img
                  className="common-pointer h-[226px] md:h-auto object-cover rounded-[30px]"
                  src="images/img_rectangle32_226x397.png"
                  alt="rectangleThirtyTwo"
                  onClick={() => navigate("/descripciondepelicula")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusquedaTwoPage;
