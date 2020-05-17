import { atom } from "recoil";
import { Mode } from "model";

export const mode = atom<Mode>({
  key: 'mode',
  default: 'white',
});
