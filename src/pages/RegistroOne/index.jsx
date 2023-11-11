import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const RegistroOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 font-cousine h-[1024px] mx-auto pb-[51px] relative w-full">
        <div className="absolute flex flex-col inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <div className="h-[579px] mx-auto w-full">
            <Img
              className="h-[579px] m-auto object-cover rounded-[859px] w-full"
              src="images/img_fondo_579x1440.png"
              alt="fondo"
            />
            <Img
              className="absolute h-[512px] inset-x-[0] mx-auto object-cover top-[0] w-[84%]"
              src="images/img_logo_512x1203.png"
              alt="logo"
            />
          </div>
          <div className="bg-gray-100 md:h-[385px] h-[589px] mt-[-195px] mx-auto rounded-[50px] w-[69%] md:w-full z-[1]">
            <div
              className="common-pointer absolute bg-amber-300 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto outline outline-[0.5px] outline-gray-100 p-[19px] rounded-[37px]"
              onClick={() => navigate("/homeone")}
            >
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-800 text-center"
                size="txtCousineBold30"
              >
                Registrarme
              </Text>
            </div>
            <div className="flex flex-col gap-10 h-full items-center justify-start mt-[30px] mx-auto w-[86%]">
              <Text
                className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center"
                size="txtCousineBold45"
              >
                Unirme a Movike
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="ml-0.5 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
                  size="txtCousineRegular25Bluegray800"
                >
                  Nombre Completo:
                </Text>
                <Line className="bg-blue_gray-800 h-px ml-0.5 md:ml-[0] mt-[27px] w-full" />
                <Text
                  className="ml-0.5 md:ml-[0] mt-[43px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
                  size="txtCousineRegular25Bluegray800"
                >
                  Correo:
                </Text>
                <Line className="bg-blue_gray-800 h-px ml-0.5 md:ml-[0] mt-8 w-full" />
                <Text
                  className="mt-[30px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
                  size="txtCousineRegular25Bluegray800"
                >
                  Nombre de usuario:
                </Text>
                <Line className="bg-blue_gray-800 h-px mt-[33px] w-full" />
                <Text
                  className="mt-[42px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
                  size="txtCousineRegular25Bluegray800"
                >
                  Contraseña:
                </Text>
                <Line className="bg-blue_gray-800 h-px mt-[33px] w-full" />
              </div>
            </div>
            <div className="absolute bg-gray-100 flex flex-col gap-10 h-full inset-[0] items-center justify-center m-auto pt-[30px] sm:px-5 px-[30px] rounded-[50px] w-full">
              <Text
                className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center"
                size="txtCousineBold45"
              >
                Unirme a Movike
              </Text>
              <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                <Text
                  className="ml-0.5 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
                  size="txtCousineRegular25Bluegray800"
                >
                  Nombre Completo:
                </Text>
                <Text
                  className="md:ml-[0] ml-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtCousineRegular25Black900"
                >
                  Fulanito Perez
                </Text>
                <Line className="bg-blue_gray-800 h-px ml-0.5 md:ml-[0] mt-[3px] w-full" />
                <Text
                  className="ml-0.5 md:ml-[0] mt-[43px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
                  size="txtCousineRegular25Bluegray800"
                >
                  Correo:
                </Text>
                <Text
                  className="md:ml-[0] ml-[5px] mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtCousineRegular25Black900"
                >
                  usuario@gmail.com
                </Text>
                <Line className="bg-blue_gray-800 h-px ml-0.5 md:ml-[0] w-full" />
                <Text
                  className="mt-[30px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
                  size="txtCousineRegular25Bluegray800"
                >
                  Nombre de usuario:
                </Text>
                <Text
                  className="ml-0.5 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtCousineRegular25Black900"
                >
                  UsuPro45
                </Text>
                <Line className="bg-blue_gray-800 h-px mt-0.5 w-full" />
                <Text
                  className="mt-[42px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
                  size="txtCousineRegular25Bluegray800"
                >
                  Contraseña:
                </Text>
                <Text
                  className="md:ml-[0] ml-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtCousineRegular25Black900"
                >
                  ***********
                </Text>
                <Line className="bg-blue_gray-800 h-px mt-2 w-full" />
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[355px] md:ml-[0] ml-[247px] mt-[29px] outline outline-[0.5px] outline-gray-100 rounded-[37px] text-3xl sm:text-[26px] md:text-[28px] text-center"
                  color="amber_300"
                  size="md"
                >
                  Registrarme
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Img
          className="absolute h-[512px] inset-x-[0] max-w-[1203px] mx-auto object-cover top-[0] w-full"
          src="images/img_logo_512x1203.png"
          alt="logo_One"
        />
        <Img
          className="absolute h-[512px] inset-x-[0] mx-auto object-cover top-[0] w-full"
          src="images/img_logo_512x1440.png"
          alt="logo_Two"
        />
      </div>
    </>
  );
};

export default RegistroOnePage;
