import { MessageSquarePlus } from "lucide-solid";
import { useLocation, useNavigate } from "@solidjs/router";

const NewChatToggle = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const clickFunction = () => {
    return navigation("/");
  };

  const is_index = location.pathname === "/" ? true : false;
  return (
    <>
      <div class="tooltip tooltip-right" data-tip="New Chat">
        <button
          class="btn btn-square rounded-xl btn-md"
          disabled={is_index}
          onClick={clickFunction}
        >
          <MessageSquarePlus class="text-[#B62E00]" />
        </button>
      </div>
    </>
  );
};

export default NewChatToggle;
