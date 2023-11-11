import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";

const HomeOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-cousine gap-[42px] items-center justify-end mx-auto w-full">
        <div className="sm:h-[382px] h-[548px] md:h-[624px] md:px-5 relative w-full">
          <div
            className="common-pointer absolute bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto w-[91%]"
            onClick={() => navigate("/hometwo")}
          >
            <Img
              className="h-[101px]"
              src="images/img_arrowbackios.svg"
              alt="arrowbackios"
            />
            <Img
              className="h-[382px] sm:h-auto object-cover w-[91%] md:w-full"
              src="images/img_rectangle12.png"
              alt="rectangleTwelve"
            />
            <Img
              className="h-[101px]"
              src="images/img_arrowbackios.svg"
              alt="arrowforwardios"
            />
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
              className="absolute h-[187px] inset-y-[0] left-[0] my-auto object-cover w-[31%]"
              src="images/img_logo_187x439.png"
              alt="logo"
            />
          </div>
        </div>
        <List
          className="flex flex-col gap-[42px] items-center max-w-[1300px] mx-auto md:px-5 w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div
              className="common-pointer flex flex-col gap-4 justify-start w-full"
              onClick={() => navigate("/hometwo")}
            >
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
                    className="absolute h-[226px] inset-y-[0] my-auto object-cover right-[0] w-[90%]"
                    src="images/img_rectangle5.png"
                    alt="rectangleFive"
                  />
                </div>
                <Img
                  className="md:flex-1 h-[226px] sm:h-auto object-cover w-[31%] md:w-full"
                  src="images/img_rectangle6.png"
                  alt="rectangleSix"
                />
                <Img
                  className="md:flex-1 h-[227px] sm:h-auto object-cover w-[31%] md:w-full"
                  src="images/img_image5.png"
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
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div
              className="common-pointer flex flex-col gap-[17px] justify-start w-full"
              onClick={() => navigate("/hometwo")}
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
                    alt="arrowleft"
                  />
                  <Img
                    className="absolute h-[202px] inset-y-[0] my-auto object-cover right-[0] w-[90%]"
                    src="images/img_rectangle8.png"
                    alt="rectangleEight"
                  />
                </div>
                <Img
                  className="md:flex-1 h-[202px] sm:h-auto object-cover w-[31%] md:w-full"
                  src="images/img_rectangle10.png"
                  alt="rectangleTen"
                />
                <Img
                  className="md:flex-1 h-[202px] sm:h-auto object-cover w-[31%] md:w-full"
                  src="images/img_image6.png"
                  alt="imageSix"
                />
                <Img
                  className="h-[60px] md:mt-0 mt-[83px] w-[60px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft_One"
                />
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

export default HomeOnePage;
