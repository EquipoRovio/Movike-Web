import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const FormularioPage = () => {
  return (
    <>
      <div className="bg-blue_gray-800 font-cousine h-[1024px] mx-auto relative w-full">
        <div className="absolute bg-blue_gray-100 bottom-[0] flex flex-col md:gap-10 gap-[74px] justify-start p-3.5 md:px-5 right-[0] rounded-[10px] w-[41%]">
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
            <Text className="text-black-900 text-xl" size="txtCousineRegular20">
              Inserta informacion mas especifica para encontrar lanzamientos mas
              apegados a tu interes
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start mb-7 ml-7 md:ml-[0] w-[90%] md:w-full">
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
            <div className="md:h-[27px] h-px mt-[26px] relative w-full">
              <Line className="bg-black-900 h-px m-auto w-full" />
              <Line className="absolute bg-black-900 h-px inset-[0] justify-center m-auto w-full" />
            </div>
            <div className="flex flex-col gap-[26px] items-start justify-start mt-[22px] w-full">
              <Text
                className="text-black-900 text-xl"
                size="txtCousineRegular20"
              >
                Año de estreno:
              </Text>
              <Line className="bg-black-900 h-px w-full" />
            </div>
            <Input
              name="group138"
              placeholder="Genero de pelicula:"
              className="leading-[normal] p-0 placeholder:text-black-900 sm:pr-5 text-left text-xl w-full"
              wrapClassName="mt-[25px] pr-[35px] w-full"
            ></Input>
            <Input
              name="group140"
              placeholder="Año de estreno:"
              className="leading-[normal] p-0 placeholder:text-black-900 sm:pr-5 text-left text-xl w-full"
              wrapClassName="mt-[22px] pr-[35px] w-full"
            ></Input>
            <Text
              className="mt-[25px] text-black-900 text-xl"
              size="txtCousineRegular20"
            >
              Serie o pelicula?
            </Text>
            <Line className="bg-black-900 h-px mt-6 w-full" />
            <Text
              className="mt-[23px] text-black-900 text-xl"
              size="txtCousineRegular20"
            >
              Es animada?
            </Text>
            <Line className="bg-black-900 h-px mt-[26px] w-full" />
            <div className="flex flex-col gap-6 items-start justify-start mt-[25px] w-full">
              <Text
                className="text-black-900 text-xl"
                size="txtCousineRegular20"
              >
                Actor o Actriz de agrado
              </Text>
              <Line className="bg-black-900 h-px w-full" />
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[181px] md:ml-[0] ml-[319px] mt-[58px] rounded-[25px]"
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
        <div className="absolute h-[181px] md:h-[459px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <div className="absolute h-[135px] md:h-[459px] inset-x-[0] mx-auto top-[0] w-full">
            <Img
              className="h-[135px] m-auto object-cover w-full"
              src="images/img_fondo_135x1440.png"
              alt="fondo"
            />
            <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-y-[0] items-center justify-start my-auto right-[3%] w-3/5">
              <Img
                className="h-[60px]"
                src="images/img_category.svg"
                alt="category"
              />
              <Img
                className="h-[60px] md:ml-[0] ml-[81px] w-[60px]"
                src="images/img_clock.svg"
                alt="clock"
              />
              <Img
                className="h-[60px] md:ml-[0] ml-[103px] w-[60px]"
                src="images/img_search_white_a700.svg"
                alt="search"
              />
              <Img
                className="h-[60px] md:ml-[0] ml-[243px] w-[60px]"
                src="images/img_car_blue_gray_100.svg"
                alt="car"
              />
              <Img
                className="h-[60px] md:ml-[0] ml-[33px] w-[60px]"
                src="images/img_grid_white_a700.svg"
                alt="grid"
              />
              <div className="bg-blue_gray-100 h-[57px] md:ml-[0] ml-[41px] md:mt-0 my-0.5 rounded-[28px] w-[7%]"></div>
            </div>
          </div>
          <Img
            className="absolute h-[181px] inset-y-[0] left-[0] my-auto object-cover w-[27%]"
            src="images/img_logo_181x383.png"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default FormularioPage;
