// import { useState } from "react";

import PropTypes from "prop-types";

const MyFirstApp = ({ titulo, subTitle, userName }) => {
  return (
    <>
      <h1>{titulo}</h1>
      <p>{subTitle}</p>
      <p>hola {userName}</p>
    </>
  );
};

export { MyFirstApp };

MyFirstApp.propsType = {
  titulo: PropTypes.string,
  subTitle: PropTypes.string,
  userName: PropTypes.string.isRequired,
};
MyFirstApp.defaulrProps = {
  titulo: "Titulo",
  subTitle: "Subtitle",
  userName: "userName",
};
