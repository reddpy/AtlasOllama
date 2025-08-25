import { Volume2, VolumeX } from "lucide-solid";
import { Match, Switch } from "solid-js";
import { setSoundOn, sound } from "~/stores/global";

const SoundToggle = () => {
  const updateSoundSetting = () => {
    setSoundOn((prev_sound) => !prev_sound);
  };

  return (
    <div class="tooltip tooltip-right" data-tip="Sound">
      <button
        class="btn btn-square rounded-xl btn-md"
        onClick={updateSoundSetting}
      >
        <Switch>
          <Match when={sound()}>
            <Volume2 />
          </Match>
          <Match when={!sound()}>
            <VolumeX />
          </Match>
        </Switch>
      </button>
    </div>
  );
};

export default SoundToggle;
