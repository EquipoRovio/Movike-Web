import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";

const HomeTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <List
        className="bg-blue_gray-800 flex flex-col font-cousine gap-[33px] mx-auto w-full"
        orientation="vertical"
      >
        <div className="sm:h-[289px] h-[464px] md:h-[861px] my-0 md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[91%]">
            <div className="flex flex-col gap-4 justify-start w-full">
              <Text
                className="md:ml-[0] ml-[49px] sm:text-4xl md:text-[38px] text-[40px] text-amber-300"
                size="txtCousineBold40"
              >
                PELICULAS
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                <div className="h-[226px] relative w-[35%] md:w-full">
                  <Img
                    className="absolute h-[60px] inset-y-[0] left-[0] my-auto w-[60px]"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                  <Img
                    className="common-pointer absolute h-[226px] inset-y-[0] my-auto object-cover right-[0] w-[90%]"
                    src="images/img_rectangle5_226x397.png"
                    alt="rectangleFive"
                    onClick={() => navigate("/descripciondepelicula")}
                  />
                </div>
                <Img
                  className="md:flex-1 h-[226px] sm:h-auto object-cover w-[31%] md:w-full"
                  src="images/img_rectangle6_226x397.png"
                  alt="rectangleSix"
                />
                <Img
                  className="md:flex-1 h-[227px] sm:h-auto object-cover w-[31%] md:w-full"
                  src="images/img_image5_227x397.png"
                  alt="imageFive"
                />
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft_One"
                />
              </div>
            </div>
          </div>
          <div className="absolute h-[187px] inset-x-[0] mx-auto top-[0] w-full">
            <div className="absolute h-[134px] inset-x-[0] mx-auto top-[0] w-full">
              <Img
                className="h-[134px] m-auto object-cover w-full"
                src="images/img_fondo_134x1440.png"
                alt="fondo"
              />
              <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-center my-auto right-[4%] w-1/4">
                <Img
                  className="common-pointer h-[60px] mt-[3px] w-[60px]"
                  src="images/img_search.svg"
                  alt="search"
                  onClick={() => navigate("/busquedathree")}
                />
                <Img
                  className="common-pointer h-[60px] ml-[41px] mt-[3px] w-[60px]"
                  src="images/img_car.svg"
                  alt="car"
                  onClick={() => navigate("/homethree")}
                />
                <Img
                  className="common-pointer h-[60px] mb-[3px] ml-[33px] w-[60px]"
                  src="images/img_grid.svg"
                  alt="grid"
                  onClick={() => navigate("/homefour")}
                />
                <Img
                  className="common-pointer h-[57px] md:h-auto ml-[41px] object-cover rounded-[28px] w-[16%]"
                  src="images/img_cuenta.png"
                  alt="cuenta"
                  onClick={() => navigate("/homefive")}
                />
              </div>
            </div>
            <Img
              className="common-pointer absolute h-[187px] inset-y-[0] left-[0] my-auto object-cover w-[31%]"
              src="images/img_logo_187x439.png"
              alt="logo"
              onClick={() => navigate("/homeone")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[55px] items-center justify-end ml-[52px] mr-[88px] my-0 md:px-5 w-[91%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div
              className="common-pointer flex flex-col gap-[17px] justify-start w-full"
              onClick={() => navigate("/descripciondepelicula")}
            >
              <Text
                className="md:ml-[0] ml-[49px] sm:text-4xl md:text-[38px] text-[40px] text-amber-300"
                size="txtCousineBold40"
              >
                SERIES
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                <div className="h-[202px] relative w-[35%] md:w-full">
                  <Img
                    className="absolute bottom-[29%] h-[60px] left-[0] w-[60px]"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft_Two"
                  />
                  <Img
                    className="absolute h-[202px] inset-y-[0] my-auto object-cover right-[0] w-[90%]"
                    src="images/img_rectangle8_202x397.png"
                    alt="rectangleEight"
                  />
                </div>
                <Img
                  className="md:flex-1 h-[202px] sm:h-auto object-cover w-[31%] md:w-full"
                  src="images/img_rectangle10_202x397.png"
                  alt="rectangleTen"
                />
                <Img
                  className="md:flex-1 h-[202px] sm:h-auto object-cover w-[31%] md:w-full"
                  src="images/img_image6_202x397.png"
                  alt="imageSix"
                />
                <Img
                  className="h-[60px] md:mt-0 mt-[83px] w-[60px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft_Three"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div
              className="common-pointer flex flex-col gap-[17px] justify-start w-full"
              onClick={() => navigate("/descripciondepelicula")}
            >
              <Text
                className="md:ml-[0] ml-[49px] sm:text-4xl md:text-[38px] text-[40px] text-amber-300"
                size="txtCousineBold40"
              >
                Cartoons
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                <div className="h-[202px] relative w-[35%] md:w-full">
                  <Img
                    className="absolute bottom-[29%] h-[60px] left-[0] w-[60px]"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft_Four"
                  />
                  <Img
                    className="absolute h-[202px] inset-y-[0] my-auto object-cover right-[0] w-[90%]"
                    src="images/img_rectangle8_1.png"
                    alt="rectangleEight_One"
                  />
                </div>
                <Img
                  className="md:flex-1 h-[202px] sm:h-auto object-cover w-[31%] md:w-full"
                  src="images/img_rectangle10_1.png"
                  alt="rectangleTen_One"
                />
                <Img
                  className="md:flex-1 h-[202px] sm:h-auto object-cover w-[31%] md:w-full"
                  src="images/img_image6_1.png"
                  alt="imageSix_One"
                />
                <Img
                  className="h-[60px] md:mt-0 mt-[83px] w-[60px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft_Five"
                />
              </div>
            </div>
          </div>
        </div>
      </List>
    </>
  );
};

export default HomeTwoPage;
