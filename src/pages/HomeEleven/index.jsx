import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const HomeElevenPage = () => {
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
                className="common-pointer h-[60px] mt-[11px] w-[60px]"
                src="images/img_search.svg"
                alt="search"
                onClick={() => navigate("/busquedathree")}
              />
              <div className="bg-blue_gray-100_a0 flex flex-col h-[76px] items-center justify-end ml-[33px] p-[5px] rounded-[50%] w-[76px]">
                <Img
                  className="h-[60px] mt-1.5 w-[60px]"
                  src="images/img_ticket.svg"
                  alt="ticket"
                />
              </div>
              <Img
                className="common-pointer h-[60px] ml-[25px] mt-2 w-[60px]"
                src="images/img_grid_gray_100.svg"
                alt="grid"
                onClick={() => navigate("/homefour")}
              />
              <Img
                className="common-pointer h-[57px] md:h-auto ml-[41px] mt-2 object-cover rounded-[28px] w-[16%]"
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
          <div className="absolute bg-blue_gray-100 flex flex-col md:gap-10 gap-[74px] justify-start p-3.5 right-[0] rounded-[10px] top-[0] w-[41%]">
            <div className="flex flex-col gap-[59px] items-start justify-start ml-9 md:ml-[0] mt-1 w-[94%] md:w-full">
              <div className="md:h-[60px] h-[63px] relative w-full">
                <Img
                  className="absolute h-[60px] right-[0] top-[0] w-[60px]"
                  src="images/img_close.svg"
                  alt="close"
                />
                <Text
                  className="absolute bottom-[0] left-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtCousineBold30Black900"
                >
                  Filtro inteligente de entretenimiento
                </Text>
              </div>
              <Text
                className="text-black-900 text-xl"
                size="txtCousineRegular20"
              >
                Inserta informacion mas especifica para encontrar lanzamientos
                mas apegados a tu interes
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start mb-7 md:ml-[0] ml-[27px] w-[91%] md:w-full">
              <div className="md:h-[50px] h-[51px] relative w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                    <div className="h-[23px] relative w-[31%]">
                      <Text
                        className="m-auto text-black-900 text-xl"
                        size="txtCousineRegular20"
                      >
                        Calificacion:
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-black-900 text-xl w-max"
                        size="txtCousineRegular20"
                      >
                        Calificacion:
                      </Text>
                    </div>
                    <div className="h-px relative w-full">
                      <Line className="bg-black-900 h-px m-auto w-full" />
                      <Line className="absolute bg-black-900 h-px inset-[0] justify-center m-auto w-full" />
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute bottom-[0] left-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtCousineRegular30"
                >
                  4,5
                </Text>
              </div>
              <div className="h-12 md:h-[55px] mt-[21px] relative w-[36%]">
                <Text
                  className="absolute inset-x-[0] mx-auto text-black-900 text-xl top-[0] w-max"
                  size="txtCousineRegular20"
                >
                  Año de estreno:
                </Text>
                <Text
                  className="absolute bottom-[0] left-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtCousineRegular30"
                >
                  2017
                </Text>
              </div>
              <Line className="bg-black-900 h-px w-full" />
              <Text
                className="mt-[25px] text-black-900 text-xl"
                size="txtCousineRegular20"
              >
                Genero de pelicula:
              </Text>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtCousineRegular30"
              >
                Accion
              </Text>
              <Line className="bg-black-900 h-px w-full" />
              <div className="h-12 md:h-14 mt-[22px] relative w-2/5">
                <Text
                  className="absolute left-[0] text-black-900 text-xl top-[0]"
                  size="txtCousineRegular20"
                >
                  Duracion:
                </Text>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-max"
                  size="txtCousineRegular30"
                >
                  120 MINUTOS
                </Text>
              </div>
              <Line className="bg-black-900 h-px w-full" />
              <div className="h-[46px] md:h-[59px] mt-[25px] relative w-[41%]">
                <Text
                  className="absolute inset-x-[0] mx-auto text-black-900 text-xl top-[0] w-max"
                  size="txtCousineRegular20"
                >
                  Serie o pelicula?
                </Text>
                <Text
                  className="absolute bottom-[0] left-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtCousineRegular30"
                >
                  Serie
                </Text>
              </div>
              <Line className="bg-black-900 h-px w-full" />
              <div className="h-[50px] md:h-[73px] mt-[23px] relative w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtCousineRegular20"
                    >
                      Es animada?
                    </Text>
                    <Line className="bg-black-900 h-px w-full" />
                  </div>
                </div>
                <Text
                  className="absolute bottom-[0] left-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtCousineRegular30"
                >
                  No
                </Text>
              </div>
              <div className="h-[47px] md:h-[59px] mt-[25px] relative w-[58%]">
                <Text
                  className="absolute inset-x-[0] mx-auto text-black-900 text-xl top-[0] w-max"
                  size="txtCousineRegular20"
                >
                  Actor o Actriz de agrado
                </Text>
                <Text
                  className="absolute bottom-[0] left-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtCousineRegular30"
                >
                  Tom Holland
                </Text>
              </div>
              <Line className="bg-black-900 h-px w-full" />
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[181px] ml-80 md:ml-[0] mt-[58px] rounded-[25px]"
                onClick={() => navigate("/busquedatwo")}
                rightIcon={
                  <Img
                    className="ml-2"
                    src="images/img_ticket.svg"
                    alt="ticket"
                  />
                }
                color="amber_300"
                size="xs"
              >
                <div className="font-bold leading-[normal] md:text-[23px] sm:text-[21px] text-[25px] text-center">
                  Listo
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeElevenPage;
