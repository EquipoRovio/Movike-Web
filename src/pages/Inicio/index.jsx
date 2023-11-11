import React from "react";

import { Button, Img, Text } from "components";

const InicioPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-cousine h-[1024px] mx-auto relative w-full">
        <div className="md:h-[1024px] h-[1036px] m-auto pb-3 md:px-5 w-full">
          <Img
            className="h-[1024px] m-auto object-cover w-full"
            src="images/img_fondo.png"
            alt="fondo"
          />
          <div className="absolute bottom-[16%] flex flex-col gap-[47px] inset-x-[0] items-center justify-start mx-auto w-[30%]">
            <Button
              className="!text-white-A700 cursor-pointer font-bold leading-[normal] min-w-[401px] sm:min-w-full outline outline-[0.5px] outline-gray-100 md:text-3xl sm:text-[28px] text-[32px] text-center"
              shape="round"
            >
              INICIAR SESION
            </Button>
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700"
              size="txtCousineRegular25"
            >
              <span className="text-white-A700 font-cousine font-normal">
                No tienes cuenta?{" "}
              </span>
              <a
                href="javascript:"
                className="text-amber-300 font-cousine font-normal underline"
              >
                Registrate
              </a>
            </Text>
          </div>
        </div>
        <Img
          className="absolute h-[656px] inset-x-[0] mx-auto object-cover top-[0] w-full"
          src="images/img_logo.png"
          alt="logo"
        />
      </div>
    </>
  );
};

export default InicioPage;
