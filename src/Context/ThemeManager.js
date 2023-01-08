import { createContext, useState } from "react";
import styled from "styled-components";

export const ThemeManager = createContext();

export const ThemeProvider = (props) => {

    const [darkMode, setDarkMode] = useState();

    return <ThemeManager.Provider value={{darkMode, setDarkMode}}>
        {props.children}
    </ThemeManager.Provider>
}


const Colors = styled.div`
color: black;
`