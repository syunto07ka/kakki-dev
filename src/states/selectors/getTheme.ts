import { selector } from "recoil";
import { mode } from "states/atoms/mode";
import { whiteTheme, blackTheme } from "constants/themes";

export const getTheme = selector({
  key: 'getTheme',
  get: ({get}) => {
    const value = get(mode);
    const isWhite = value === 'white';

    return isWhite ? whiteTheme : blackTheme;
  }
});
