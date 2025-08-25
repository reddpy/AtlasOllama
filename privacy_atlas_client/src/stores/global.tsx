import { makePersisted } from "@solid-primitives/storage";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

const [sound, setSoundOn] = makePersisted(createSignal(true), {
  name: "soundOn",
});

const [globalState, setGlobalState] = createStore({
  textQuery: "",
  get globalSound() {
    return sound();
  },
});

export { globalState, setGlobalState, setSoundOn, sound };
