import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const GenerosPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-cousine items-center justify-start mx-auto pb-[22px] w-full">
        <div className="h-[187px] md:px-5 relative w-full">
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
        <Text
          className="mt-[53px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
          size="txtCousineBold50"
        >
          Selecciona el genero que mas te guste
        </Text>
        <div className="flex flex-col md:gap-10 gap-[89px] items-center justify-start max-w-[1052px] mt-[87px] mx-auto md:px-5 w-full">
          <div className="md:gap-5 gap-[65px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
            <Button
              className="border-[5px] border-amber-300 border-solid cursor-pointer flex-1 font-bold leading-[normal] min-w-[208px] sm:text-3xl md:text-[32px] text-[34px] text-center w-full"
              shape="round"
              size="2xl"
            >
              Drama
            </Button>
            <Button
              className="border-[5px] border-amber-300 border-solid cursor-pointer flex-1 font-bold leading-[normal] min-w-[208px] sm:text-3xl md:text-[32px] text-[34px] text-center w-full"
              shape="round"
              size="2xl"
            >
              Accion
            </Button>
            <Button
              className="border-[5px] border-amber-300 border-solid cursor-pointer flex-1 font-bold leading-[normal] min-w-[208px] sm:text-3xl md:text-[32px] text-[34px] text-center w-full"
              shape="round"
              size="2xl"
            >
              Comedia
            </Button>
            <div className="h-[106px] relative w-full">
              <div className="absolute bg-blue_gray-800 border-[5px] border-amber-300 border-solid h-[106px] inset-y-[0] left-[0] my-auto rounded-[40px] w-[90%]"></div>
              <Text
                className="absolute bottom-[14%] right-[0] sm:text-[25px] md:text-[27px] text-[29px] text-amber-300 w-[82%] sm:w-full"
                size="txtCousineBold29"
              >
                Ciencia ficción
              </Text>
            </div>
            <Button
              className="border-[5px] border-amber-300 border-solid cursor-pointer flex-1 font-bold leading-[normal] min-w-[208px] sm:text-3xl md:text-[32px] text-[34px] text-center w-full"
              shape="round"
              size="2xl"
            >
              Terror
            </Button>
            <Button
              className="border-[5px] border-amber-300 border-solid cursor-pointer flex-1 font-bold leading-[normal] min-w-[208px] sm:text-3xl md:text-[32px] text-[34px] text-center w-full"
              shape="round"
              size="2xl"
            >
              Romance
            </Button>
            <Button
              className="border-[5px] border-amber-300 border-solid cursor-pointer flex-1 font-bold leading-[normal] min-w-[208px] sm:text-3xl md:text-[32px] text-[34px] text-center w-full"
              shape="round"
              size="xl"
            >
              Aventura
            </Button>
            <Button
              className="border-[5px] border-amber-300 border-solid cursor-pointer flex-1 font-bold leading-[normal] min-w-[208px] text-3xl sm:text-[26px] md:text-[28px] text-center w-full"
              shape="round"
              size="2xl"
            >
              Fantasia
            </Button>
            <Button
              className="border-[5px] border-amber-300 border-solid cursor-pointer flex-1 font-bold leading-[normal] min-w-[208px] sm:text-3xl md:text-[32px] text-[34px] text-center w-full"
              shape="round"
              size="2xl"
            >
              Crimen
            </Button>
            <Button
              className="border-[5px] border-amber-300 border-solid cursor-pointer flex-1 font-bold leading-[normal] min-w-[208px] sm:text-3xl md:text-[32px] text-[34px] text-center w-full"
              shape="round"
              size="xl"
            >
              Misterio
            </Button>
            <Button
              className="border-[5px] border-amber-300 border-solid cursor-pointer flex-1 font-bold leading-[normal] min-w-[208px] sm:text-3xl md:text-[32px] text-[34px] text-center w-full"
              shape="round"
              size="xl"
            >
              Animacion
            </Button>
            <Button
              className="border-[5px] border-amber-300 border-solid cursor-pointer flex-1 font-bold leading-[normal] min-w-[208px] text-3xl sm:text-[26px] md:text-[28px] text-center w-full"
              shape="round"
              size="3xl"
            >
              Documental
            </Button>
          </div>
          <Button
            className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[306px] rounded-[20px] sm:text-4xl md:text-[38px] text-[40px] text-center"
            onClick={() => navigate("/homeone")}
            color="blue_gray_100"
            size="sm"
          >
            Listo
          </Button>
        </div>
      </div>
    </>
  );
};

export default GenerosPage;
