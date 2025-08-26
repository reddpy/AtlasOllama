import { clientOnly } from "@solidjs/start";
import { Volume } from "lucide-solid";
import AtlasWord from "~/components/atlasWord";
import ChatBoxChat from "~/components/chatboxChat";
import ChatMessages from "~/components/chatMessages";
import NewChatToggle from "~/components/navigation/newChatToggle";
import { ChatProvider } from "~/contexts/chatContext";

const ClientOnlySoundToggle = clientOnly(
  () => import("~/components/navigation/soundToggle"),
);

const ChatPage = () => {
  return (
    <ChatProvider>
      <div class="flex flex-col h-screen">
        <div
          id="chat_header"
          class="flex flex-row justify-between items-center shadow-md sm:justify-center sm:h-9 h-12 w-full"
        >
          <div class="sm:hidden pl-2">
            {/*<ChatMenuToggle />*/}
            <NewChatToggle />
            {/*<SidebarHistory />*/}
            <ClientOnlySoundToggle
              fallback={
                <button class="btn btn-square rounded-xl btn-md" disabled>
                  <Volume />
                </button>
              }
            />
          </div>
          <p class="text-3xl">
            <AtlasWord />
          </p>
          <div></div>
        </div>

        {/* Main Content Area */}
        <div class="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div
            id="sidebar_menu_options"
            class="flex-shrink-0 ml-1 my-2 rounded-2xl"
          >
            {/* Desktop Sidebar */}
            <div class="hidden sm:flex flex-col join join-vertical gap-2 p-0.5 h-full">
              <NewChatToggle />
              {/*<SidebarHistory />*/}
              <ClientOnlySoundToggle
                fallback={
                  <button class="btn btn-square rounded-xl btn-md" disabled>
                    <Volume />
                  </button>
                }
              />
            </div>
            {/* Mobile Menu Toggle */}
          </div>

          {/* Chat Application Area */}
          <div class="flex-1 flex flex-col min-w-0">
            {/* Messages Container */}
            <div
              id="chat_message_container"
              class="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-[#FFF7ED]"
            >
              <div class="max-w-3xl mx-auto space-y-4 px-4 py-4">
                <ChatMessages />
              </div>
            </div>

            {/* Chat Input Container */}
            <div
              id="chat_box_container"
              class="flex-shrink-0 bg-[#FFF7ED] px-2 sm:px-4"
            >
              <div class="max-w-3xl mx-auto pb-2">
                <ChatBoxChat />
                <p class="pb-1 pt-1 text-xs text-center text-gray-600">
                  Atlas can make mistakes. Check important information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChatProvider>
  );
};

export default ChatPage;
