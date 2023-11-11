import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const RegistroPage = () => {
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
          <div className="bg-gray-100 md:h-[389px] h-[589px] mt-[-195px] mx-auto rounded-[50px] w-[69%] md:w-full z-[1]">
            <div className="absolute bg-amber-300 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto outline outline-[0.5px] outline-gray-100 p-[19px] rounded-[37px]">
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
            <div
              className="common-pointer absolute bg-gray-100 flex flex-col gap-10 h-full inset-[0] items-center justify-center m-auto pt-[30px] sm:px-5 px-[30px] rounded-[50px] w-full"
              onClick={() => navigate("/registroone")}
            >
              <Text
                className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center"
                size="txtCousineBold45"
              >
                Unirme a Movike
              </Text>
              <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
                    size="txtCousineRegular25Bluegray800"
                  >
                    Nombre Completo:
                  </Text>
                  <Line className="bg-blue_gray-800 h-px w-full" />
                </div>
                <div className="flex flex-col gap-8 items-start justify-start mt-[43px] w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
                    size="txtCousineRegular25Bluegray800"
                  >
                    Correo:
                  </Text>
                  <Line className="bg-blue_gray-800 h-px w-full" />
                </div>
                <div className="flex flex-col gap-[33px] items-start justify-start mt-[30px] w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
                    size="txtCousineRegular25Bluegray800"
                  >
                    Nombre de usuario:
                  </Text>
                  <Line className="bg-blue_gray-800 h-px w-full" />
                </div>
                <div className="flex flex-col gap-[33px] items-start justify-start mt-[42px] w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800"
                    size="txtCousineRegular25Bluegray800"
                  >
                    Contraseña:
                  </Text>
                  <Line className="bg-blue_gray-800 h-px w-full" />
                </div>
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

export default RegistroPage;
