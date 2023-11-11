import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const LoginOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 font-cousine h-[1024px] mx-auto pb-[51px] relative w-full">
        <div className="flex flex-col mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start mx-auto w-full">
            <Img
              className="h-[579px] sm:h-auto object-cover rounded-bl-[859px] rounded-br-[859px] w-full"
              src="images/img_fondo_579x1440.png"
              alt="fondo"
            />
          </div>
          <div
            className="common-pointer bg-gray-100 flex flex-col gap-[43px] items-center justify-end mt-[-195px] mx-auto pt-[61px] md:px-10 sm:px-5 px-[61px] rounded-[50px] w-[69%] z-[1]"
            onClick={() => navigate("/login")}
          >
            <Text
              className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center"
              size="txtCousineBold45"
            >
              Bienvenido a Movike
            </Text>
            <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
              <div className="flex flex-col gap-[29px] items-start justify-start w-full">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
                  size="txtCousineRegular25Bluegray800"
                >
                  Correo:
                </Text>
                <Line className="bg-blue_gray-800 h-px w-full" />
              </div>
              <div className="flex flex-col gap-[33px] items-start justify-start mt-[49px] w-full">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
                  size="txtCousineRegular25Bluegray800"
                >
                  Contraseña:
                </Text>
                <Line className="bg-blue_gray-800 h-px w-full" />
              </div>
              <Button
                className="!text-white-A700 cursor-pointer font-bold leading-[normal] min-w-[401px] sm:min-w-full mt-3 outline outline-[0.5px] outline-gray-100 md:text-3xl sm:text-[28px] text-[32px] text-center"
                shape="round"
              >
                Iniciar Sesion
              </Button>
              <Text
                className="mt-6 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800 text-center"
                size="txtCousineRegular25Bluegray800"
              >
                Olvidaste tu contraseña?
              </Text>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[355px] mt-[29px] outline outline-[0.5px] outline-gray-100 rounded-[37px] text-3xl sm:text-[26px] md:text-[28px] text-center"
                color="amber_300"
                size="md"
              >
                Registrarme
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute h-[512px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <Img
            className="h-[512px] m-auto object-cover w-full"
            src="images/img_logo_512x1440.png"
            alt="logo"
          />
          <Img
            className="absolute bottom-[17%] h-[142px] left-[26%] object-cover rounded-[20px] w-[42%]"
            src="images/img_movikeelementos.png"
            alt="movikeelementos"
          />
        </div>
      </div>
    </>
  );
};

export default LoginOnePage;
