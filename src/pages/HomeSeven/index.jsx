import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const HomeSevenPage = () => {
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
        <div className="md:h-[1722px] sm:h-[889px] h-[950px] mt-auto mx-auto md:px-5 w-full">
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
          <div className="absolute md:h-[1722px] sm:h-[889px] h-[891px] inset-x-[0] mx-auto top-[0] w-full">
            <div className="absolute md:h-[1722px] h-[889px] inset-[0] justify-center m-auto w-full">
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
              <div className="absolute bg-black-900_ba h-[889px] inset-[0] justify-center m-auto w-full"></div>
            </div>
            <div className="absolute bg-blue_gray-800 flex flex-col md:gap-10 gap-[140px] h-full inset-y-[0] justify-start my-auto p-[26px] sm:px-5 right-[0] rounded-[10px] w-[41%]">
              <div className="flex flex-col items-center justify-start mr-[51px] mt-8">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-amber-300"
                  size="txtCousineBold40"
                >
                  Ajustes de la pagina
                </Text>
              </div>
              <div className="flex flex-col md:gap-10 gap-[90px] items-center justify-start mb-10 ml-6 md:ml-[0] w-[88%] md:w-full">
                <List
                  className="flex flex-col gap-[30px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-[52px] justify-start my-0 w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtCousineBold30WhiteA700"
                    >
                      Idiomas
                    </Text>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[13px] w-[98%] md:w-full">
                      <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
                          <Text
                            className="mb-[7px] text-white-A700 text-xl"
                            size="txtCousineBold20"
                          >
                            Español(México)
                          </Text>
                          <Text
                            className="mt-[7px] rotate-[90deg] text-white-A700 text-xl"
                            size="txtCousineBold20"
                          >
                            <>&lt;</>
                          </Text>
                        </div>
                        <Line className="bg-black-900 h-px w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[50px] justify-start my-0 w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtCousineBold30WhiteA700"
                    >
                      Tamaño de la fuente
                    </Text>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[13px] w-[98%] md:w-full">
                      <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
                          <Text
                            className="mb-[9px] text-white-A700 text-xl"
                            size="txtCousineBold20"
                          >
                            Mediano
                          </Text>
                          <Text
                            className="mt-[9px] rotate-[90deg] text-white-A700 text-xl"
                            size="txtCousineBold20"
                          >
                            <>&lt;</>
                          </Text>
                        </div>
                        <Line className="bg-black-900 h-px w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[50px] justify-start my-0 w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtCousineBold30WhiteA700"
                    >
                      Notificaciones
                    </Text>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[13px] w-[98%] md:w-full">
                      <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
                          <Text
                            className="mb-[9px] text-white-A700 text-xl"
                            size="txtCousineBold20"
                          >
                            Silenciadas
                          </Text>
                          <Text
                            className="mt-[9px] rotate-[90deg] text-white-A700 text-xl"
                            size="txtCousineBold20"
                          >
                            <>&lt;</>
                          </Text>
                        </div>
                        <Line className="bg-black-900 h-px w-full" />
                      </div>
                    </div>
                  </div>
                </List>
                <Button
                  className="common-pointer border border-black-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[219px] rounded-[20px] text-center text-xl"
                  onClick={() => navigate("/hometwo")}
                  color="blue_gray_700"
                  size="sm"
                >
                  Guardar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSevenPage;
