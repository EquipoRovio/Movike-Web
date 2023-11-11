import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 font-cousine h-[1024px] mx-auto pb-[51px] relative w-full">
        <div className="absolute flex flex-col inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <div className="flex flex-col items-center justify-start mx-auto w-full">
            <Img
              className="h-[579px] sm:h-auto object-cover rounded-bl-[859px] rounded-br-[859px] w-full"
              src="images/img_fondo_579x1440.png"
              alt="fondo"
            />
          </div>
          <div className="bg-gray-100 flex flex-col items-start justify-end mt-[-195px] mx-auto pt-[61px] md:px-10 sm:px-5 px-[61px] rounded-[50px] w-[69%] z-[1]">
            <Text
              className="md:ml-[0] ml-[178px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center"
              size="txtCousineBold45"
            >
              Bienvenido a Movike
            </Text>
            <Text
              className="ml-2.5 md:ml-[0] mt-[43px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
              size="txtCousineRegular25Bluegray800"
            >
              Correo:
            </Text>
            <div className="h-[29px] md:h-[31px] mt-0.5 relative w-[99%] md:w-full">
              <Line className="absolute bg-blue_gray-800 bottom-[0] h-px inset-x-[0] mx-auto w-[99%]" />
              <a
                href="mailto:usuario@gmail.com"
                className="absolute h-full inset-y-[0] left-[0] my-auto sm:text-[21px] md:text-[23px] text-[25px] text-black-900 underline"
                target="_blank"
                rel="noreferrer"
              >
                <Text>usuario@gmail.com</Text>
              </a>
            </div>
            <div className="flex flex-col justify-start ml-2.5 md:ml-[0] mt-12 w-[98%] md:w-full">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
                size="txtCousineRegular25Bluegray800"
              >
                Contraseña:
              </Text>
              <Text
                className="md:ml-[0] ml-[9px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                size="txtCousineRegular25Black900"
              >
                ************
              </Text>
              <Line className="bg-blue_gray-800 h-px mt-[13px] w-full" />
              <Button
                className="common-pointer !text-white-A700 cursor-pointer font-bold leading-[normal] min-w-[401px] sm:min-w-full mt-3 mx-auto outline outline-[0.5px] outline-gray-100 md:text-3xl sm:text-[28px] text-[32px] text-center"
                onClick={() => navigate("/homeone")}
                shape="round"
              >
                Iniciar Sesion
              </Button>
              <Text
                className="ml-64 md:ml-[0] mt-6 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800 text-center"
                size="txtCousineRegular25Bluegray800"
              >
                Olvidaste tu contraseña?
              </Text>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[355px] mt-[29px] mx-auto outline outline-[0.5px] outline-gray-100 rounded-[37px] text-3xl sm:text-[26px] md:text-[28px] text-center"
                onClick={() => navigate("/registrotwo")}
                color="amber_300"
                size="md"
              >
                Registrarme
              </Button>
            </div>
          </div>
        </div>
        <Img
          className="absolute h-[512px] inset-x-[0] max-w-[1203px] mx-auto object-cover top-[0] w-full"
          src="images/img_logo_512x1203.png"
          alt="logo"
        />
        <Img
          className="absolute h-[512px] inset-x-[0] mx-auto object-cover top-[0] w-full"
          src="images/img_logo_512x1440.png"
          alt="logo_One"
        />
      </div>
    </>
  );
};

export default LoginPage;
