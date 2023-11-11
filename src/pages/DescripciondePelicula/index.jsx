import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const DescripciondePeliculaPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-cousine items-center justify-start mx-auto pb-[19px] w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="md:h-[467px] h-[659px] md:px-5 relative w-full">
            <div className="absolute bottom-[5%] md:h-[414px] h-[469px] right-[8%] w-[59%] md:w-full">
              <div className="absolute bottom-[0] flex flex-col font-cousine inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="bg-blue-700 flex md:flex-1 flex-row items-center justify-start p-2 rounded-[15px] w-[43%] md:w-full">
                    <Text
                      className="ml-[27px] text-black-900_01 text-justify text-xl"
                      size="txtCousineBold20Black90001"
                    >
                      Calificacion:
                    </Text>
                    <Img
                      className="h-[55px] ml-6"
                      src="images/img_star.svg"
                      alt="star"
                    />
                    <Text
                      className="ml-[5px] md:text-2xl sm:text-[22px] text-[26px] text-gray-100 text-justify"
                      size="txtCousineBold26"
                    >
                      4.5
                    </Text>
                  </div>
                  <div className="bg-blue-700 flex flex-col items-center justify-start p-2.5 rounded-[15px]">
                    <Text
                      className="mb-[15px] mt-[11px] text-gray-100 text-justify text-xl"
                      size="txtCousineBold20Gray100"
                    >
                      <span className="text-black-900_02 font-cousine font-bold">
                        Género
                      </span>
                      <span className="text-black-900_01 font-cousine font-bold">
                        :
                      </span>
                      <span className="text-gray-100 font-cousine font-bold">
                        {" "}
                      </span>
                      <span className="text-gray-100 font-cousine text-lg font-bold">
                        Acción/Ciencia Ficción
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="absolute inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-justify text-white-A700 top-[0]"
                size="txtAmiriBold30"
              >
                <span className="md:text-3xl sm:text-[28px] text-amber-300 font-cousine text-[32px] font-bold">
                  <>
                    SINOPSIS
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-amiri font-bold">
                  <>
                    <br />
                  </>
                </span>
                <span className="md:text-[26px] sm:text-2xl text-white-A700 font-cousine text-[28px] font-normal">
                  Jaime Reyes, recién graduado de la universidad, regresa a casa
                  con muchos planes para su futuro, pero descubre que su casa no
                  está exactamente como la dejó. Mientras Jaime busca encontrar
                  su lugar en el mundo, el destino interviene y de repente tiene
                  en sus manos una antigua reliquia de biotecnología alienígena:
                  el Escarabajo.
                </span>
              </Text>
            </div>
            <Img
              className="absolute bottom-[0] h-[467px] left-[6%] object-cover w-[22%]"
              src="images/img_image9.png"
              alt="imageNine"
            />
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
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[484px] mt-[13px] md:px-5 w-[59%] md:w-full">
            <div className="bg-blue-700 flex flex-row gap-[27px] items-center justify-start p-[19px] rounded-[15px] w-[43%] md:w-full">
              <Text
                className="ml-[15px] text-black-900_01 text-justify text-xl"
                size="txtCousineBold20Black90001"
              >
                Año de Estreno:
              </Text>
              <Text
                className="md:text-2xl sm:text-[22px] text-[26px] text-gray-100 text-justify"
                size="txtCousineBold26"
              >
                2023
              </Text>
            </div>
            <div className="bg-blue-700 flex flex-row gap-4 items-start justify-start p-3.5 rounded-[15px] w-[43%] md:w-full">
              <Text
                className="mt-2 text-black-900_01 text-justify text-xl"
                size="txtCousineBold20Black90001"
              >
                Película / Serie:
              </Text>
              <Text
                className="mb-2.5 mt-[7px] text-[22px] text-gray-100 text-justify sm:text-lg md:text-xl"
                size="txtCousineBold22"
              >
                Película
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[87px] mt-[43px] md:text-3xl sm:text-[28px] text-[32px] text-amber-300 text-justify"
            size="txtCousineBold32"
          >
            REPARTO
          </Text>
          <div className="flex sm:flex-col flex-row gap-9 items-center justify-start max-w-[1091px] mt-[29px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[151px] md:h-auto object-cover w-[66%] sm:w-full"
              src="images/img_image10.png"
              alt="imageTen"
            />
            <Img
              className="sm:flex-1 h-[151px] md:h-auto object-cover w-[32%] sm:w-full"
              src="images/img_image11.png"
              alt="imageEleven"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DescripciondePeliculaPage;
