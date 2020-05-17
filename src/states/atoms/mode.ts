import { atom } from "recoil";
import { Mode } from "model";

export const articles = atom<Mode>({
  key: 'mode',
  default: 'white',
});
