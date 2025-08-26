import { CircleEllipsis } from "lucide-solid";

const ChatMenuToggle = () => {
  return (
    <>
      <div class="tooltip tooltip-right" data-tip="Menu">
        <button class="btn btn-square rounded-xl btn-md">
          <CircleEllipsis />
        </button>
      </div>
    </>
  );
};

export default ChatMenuToggle;
