// import { useState } from "react";

import PropTypes from "prop-types";

const MyFirstApp = ({ title, subTitle, userName }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p> {userName}</p>
    </>
  );
};

export { MyFirstApp };

MyFirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

MyFirstApp.defaultProps = {
  // title: "default title!",
  userName: "default UserName",
  subTitle: "default Subtitle",
};
