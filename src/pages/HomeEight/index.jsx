import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const HomeEightPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-800 font-cousine h-[1024px] mx-auto relative w-full">
        <div className="md:h-[135px] h-[191px] mb-[-56px] mx-auto md:px-5 w-full z-[1]">
          <div className="absolute h-[135px] inset-x-[0] mx-auto top-[2%] w-full">
            <Img
              className="h-[135px] m-auto object-cover w-full"
              src="images/img_fondo_135x1440.png"
              alt="fondo"
            />
            <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-center my-auto right-[3%] w-1/4">
              <Img
                className="h-[60px] mt-[11px] w-[60px]"
                src="images/img_search_white_a700.svg"
                alt="search"
              />
              <Img
                className="h-[60px] ml-[41px] mt-[11px] w-[60px]"
                src="images/img_car.svg"
                alt="car"
              />
              <div className="bg-blue_gray-100_a0 flex flex-col h-[76px] items-center justify-start ml-[25px] p-2 rounded-[50%] w-[76px]">
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_plus.svg"
                  alt="plus"
                />
              </div>
              <Img
                className="h-[57px] md:h-auto ml-[33px] mt-2 object-cover rounded-[28px] w-[16%]"
                src="images/img_cuenta.png"
                alt="cuenta"
              />
            </div>
          </div>
          <Img
            className="common-pointer absolute h-[191px] inset-y-[0] left-[0] my-auto object-cover w-[32%]"
            src="images/img_logo_191x448.png"
            alt="logo"
            onClick={() => navigate("/homeone")}
          />
        </div>
        <div className="sm:h-[1021px] md:h-[1722px] h-[948px] mt-auto mx-auto md:px-5 w-full">
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[91%]">
            <div className="flex flex-col gap-[17px] justify-start w-full">
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
                    alt="arrowleft"
                  />
                  <Img
                    className="absolute h-[202px] inset-y-[0] my-auto object-cover right-[0] w-[90%]"
                    src="images/img_rectangle8_1.png"
                    alt="rectangleEight"
                  />
                </div>
                <Img
                  className="md:flex-1 h-[202px] sm:h-auto object-cover w-[31%] md:w-full"
                  src="images/img_rectangle10_1.png"
                  alt="rectangleTen"
                />
                <Img
                  className="md:flex-1 h-[202px] sm:h-auto object-cover w-[31%] md:w-full"
                  src="images/img_image6_1.png"
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
          <List
            className="flex flex-col gap-[33px] items-center mt-[39px] mx-auto w-[91%]"
            orientation="vertical"
          >
            <div className="flex flex-col items-center justify-start w-full">
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
                      className="absolute h-[226px] inset-y-[0] my-auto object-cover right-[0] w-[90%]"
                      src="images/img_rectangle5_1.png"
                      alt="rectangleFive"
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
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[17px] justify-start w-full">
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
                    alt="arrowleft_One"
                  />
                </div>
              </div>
            </div>
          </List>
          <div className="absolute bg-black-900_ba flex flex-col inset-x-[0] items-center justify-start mx-auto p-[161px] md:px-10 sm:px-5 top-[0] w-full">
            <div className="bg-blue_gray-100 flex flex-col items-center justify-start mb-[134px] p-[46px] md:px-10 sm:px-5 rounded-[20px] w-[63%] md:w-full">
              <div className="flex flex-col gap-[23px] items-center justify-start mb-2 w-[97%] md:w-full">
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                  size="txtCousineBold35"
                >
                  Cerrar sesion
                </Text>
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <Text
                    className="italic sm:text-[31px] md:text-[33px] text-[35px] text-black-900 w-full"
                    size="txtCousineItalic35"
                  >
                    ¿Seguro que quieres cerrar sesion?
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <Button
                      className="common-pointer !text-gray-100 cursor-pointer font-bold leading-[normal] min-w-[224px] rounded-[20px] sm:text-[31px] md:text-[33px] text-[35px] text-center"
                      onClick={() => navigate("/")}
                    >
                      Si
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[224px] rounded-[20px] sm:text-[31px] md:text-[33px] text-[35px] text-center"
                      onClick={() => navigate("/homefour")}
                      color="red_A700"
                    >
                      No
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeEightPage;
