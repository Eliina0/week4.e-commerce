import React, { useContext, useState } from 'react';
import { PiMoonStarsLight } from "react-icons/pi";
import { GoSun } from "react-icons/go";
import { ThemeContext } from '../../context/Theme';

const ThemeSwitchButton = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme_switch_button">
      {isDarkTheme ? <GoSun className="theme_icon sun_icon" /> : <PiMoonStarsLight className="theme_icon moon_icon" />}
    </button>
  );
}

export default ThemeSwitchButton;
