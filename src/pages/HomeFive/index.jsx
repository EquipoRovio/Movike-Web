import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const HomeFivePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-800 font-cousine h-[1024px] mx-auto relative w-full">
        <div className="md:h-[133px] h-[187px] mb-[-54px] mx-auto md:px-5 w-full z-[1]">
          <div className="absolute h-[134px] inset-x-[0] mx-auto top-[0] w-full">
            <Img
              className="h-[134px] m-auto object-cover w-full"
              src="images/img_fondo_134x1440.png"
              alt="fondo"
            />
            <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-center my-auto right-[3%] w-[26%]">
              <Img
                className="common-pointer h-[60px] mt-3 w-[60px]"
                src="images/img_search.svg"
                alt="search"
                onClick={() => navigate("/busquedathree")}
              />
              <Img
                className="common-pointer h-[60px] ml-[41px] mt-3 w-[60px]"
                src="images/img_car.svg"
                alt="car"
                onClick={() => navigate("/homethree")}
              />
              <Img
                className="common-pointer h-[60px] ml-[33px] mt-[9px] w-[60px]"
                src="images/img_grid_gray_100.svg"
                alt="grid"
                onClick={() => navigate("/homefour")}
              />
              <div className="bg-blue_gray-100_a0 flex flex-col h-[76px] items-center justify-start ml-[31px] p-[9px] rounded-[50%] w-[76px]">
                <Img
                  className="h-[57px] md:h-auto object-cover rounded-[28px] w-[95%]"
                  src="images/img_cuenta.png"
                  alt="cuenta_One"
                />
              </div>
            </div>
          </div>
          <Img
            className="common-pointer absolute h-[187px] inset-y-[0] left-[0] my-auto object-cover w-[31%]"
            src="images/img_logo_187x439.png"
            alt="logo"
            onClick={() => navigate("/homeone")}
          />
        </div>
        <div className="md:h-[1722px] sm:h-[890px] h-[950px] mt-auto mx-auto md:px-5 w-full">
          <div className="absolute md:h-[1722px] sm:h-[889px] h-[948px] inset-[0] justify-center m-auto w-full">
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
            <div className="absolute bg-black-900_ba h-[889px] inset-x-[0] mx-auto top-[0] w-full"></div>
          </div>
          <div className="absolute bg-blue_gray-800 flex flex-col md:gap-10 gap-[65px] items-center justify-start p-[15px] right-[0] rounded-[10px] top-[0] w-[41%]">
            <div className="flex flex-col gap-3 items-center justify-start mt-[3px] w-[54%] md:w-full">
              <Img
                className="h-[300px] md:h-auto rounded-[50%] w-[300px]"
                src="images/img_cuenta_300x300.png"
                alt="cuenta"
              />
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-100"
                size="txtCousineBold25"
              >
                Cambiar foto
              </Text>
            </div>
            <div className="md:h-[191px] h-[437px] sm:h-[451px] mb-[15px] relative w-full">
              <div className="md:h-44 sm:h-[436px] h-[437px] m-auto w-full">
                <div className="md:h-44 sm:h-[436px] h-[437px] m-auto w-full">
                  <div className="absolute bg-blue_gray-100 flex flex-col md:gap-10 gap-[300px] h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-[40px] w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtCousineBold25Black900"
                    >
                      Detalles de cuenta
                    </Text>
                    <Button
                      className="common-pointer !text-amber-300 border border-amber-300 border-solid cursor-pointer font-bold leading-[normal] mb-[21px] min-w-[299px] rounded-[30px] text-center text-lg"
                      onClick={() => navigate("/homenine")}
                      color="red_A700"
                      size="md"
                    >
                      Eliminar cuenta
                    </Button>
                  </div>
                  <Text
                    className="absolute bg-blue_gray-100 border border-black-900 border-solid h-[85px] inset-x-[0] justify-center mx-auto pb-[33px] pl-[25px] pr-[35px] pt-[30px] sm:px-5 text-black-900 text-lg top-[14%] w-max"
                    size="txtCousineRegular18"
                  >
                    Nombre de usuario: UsuPro45
                  </Text>
                </div>
                <Text
                  className="absolute bg-blue_gray-100 border border-black-900 border-solid h-[85px] inset-x-[0] justify-center mx-auto pl-[25px] pr-[35px] sm:px-5 py-[31px] text-black-900 text-lg top-[33%] w-max"
                  size="txtCousineRegular18"
                >
                  Contraseña: ********
                </Text>
              </div>
              <Text
                className="absolute bg-blue_gray-100 border border-black-900 border-solid bottom-[28%] h-[85px] inset-x-[0] justify-center mx-auto pb-[30px] pl-[25px] pr-[35px] pt-[33px] sm:px-5 text-black-900 text-lg w-max"
                size="txtCousineRegular18"
              >
                Correo: usuario@gmail.com
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFivePage;
