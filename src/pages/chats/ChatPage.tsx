import Sidebar from "@/widgets/Sidebar/Sidebar";
import { mockChatPreviews, mockActiveChat } from "@/shared/mocks/chats";

function ChatSearch() {
  return (
    <div className="px-4 py-3 border-b border-white/10">
      <div className="flex items-center gap-2 bg-[#141414] border border-white/20 rounded px-3 py-2">
        <input
          type="text"
          placeholder="Искать..."
          className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
        />
        <img
          src="/images/sidebar/search.svg"
          alt="search"
          className="w-4 h-4"
        />
      </div>
    </div>
  );
}

function ChatPreviewItem({
  title,
  avatarUrl,
  lastMessage,
  lastMessageTime,
  unreadCount,
  active,
}: {
  title: string;
  avatarUrl: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount?: number;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-3 px-4 py-3 border-b border-white/10 cursor-pointer ${
        active ? "bg-white/5" : "hover:bg-white/5"
      }`}
    >
      <img
        src={avatarUrl}
        alt={title}
        className="w-8 h-8 rounded-full object-cover mt-1"
      />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">{title}</span>
          <span className="text-xs text-gray-500">{lastMessageTime}</span>
        </div>
        <p className="text-xs text-gray-400 truncate">{lastMessage}</p>
      </div>
      {unreadCount != null && unreadCount > 0 && (
        <span className="ml-2 bg-[#9B78FF] text-black text-xs px-2 py-0.5 rounded-full">
          {unreadCount}
        </span>
      )}
    </div>
  );
}

function MessageBubble({
  author,
  text,
  time,
}: {
  author: "me" | "other" | "system";
  text: string;
  time?: string;
}) {
  if (author === "system") {
    return (
      <div className="flex justify-center my-4">
        <span className="px-4 py-1 bg-[#262626] text-xs text-gray-300 rounded">
          {text}
        </span>
      </div>
    );
  }

  const isMe = author === "me";

  return (
    <div className={`flex mb-2 ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[60%] px-3 py-2 rounded text-sm ${
          isMe ? "bg-[#9B78FF] text-black" : "bg-[#333333] text-white"
        }`}
      >
        <p>{text}</p>
        {time && <p className="mt-1 text-[10px] text-black/70">{time}</p>}
      </div>
    </div>
  );
}

function ChatHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 border border-white/30 rounded flex items-center justify-center hover:bg-white/10">
          ←
        </button>
        <div className="flex items-center gap-2">
          <img
            src={mockActiveChat.avatarUrl}
            alt={mockActiveChat.title}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium">{mockActiveChat.title}</span>
        </div>
      </div>
      <button className="w-8 h-8 border border-white/30 rounded flex items-center justify-center hover:bg-white/10">
        ⋮
      </button>
    </div>
  );
}

function ChatInput() {
  return (
    <div className="px-4 py-3 border-t border-white/10">
      <div className="flex items-center gap-3 bg-[#050505] border border-white/30 rounded px-3 py-2">
        <img
          src="/images/users/Ryan.png"
          alt="me"
          className="w-8 h-8 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="Напишите что-нибудь"
          className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
        />
        <button className="text-gray-400 hover:text-white">
          <img src="/images/smile.svg" alt="" />
        </button>
        <button className="w-9 h-9 bg-[#9B78FF] text-black rounded flex items-center justify-center hover:bg-[#b091ff] transition">
          <img src="/images/cursor.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <div className="min-h-screen flex bg-black text-white">
      <Sidebar />

      {/* Центральная колонка: список чатов */}
      <div className="flex-1 flex px-10 py-8">
        <div className="w-[360px] bg-[#050505] border border-white/10 flex flex-col">
          <ChatSearch />
          <div className="flex-1 overflow-y-auto">
            {mockChatPreviews.map((chat) => (
              <ChatPreviewItem
                key={chat.id}
                title={chat.title}
                avatarUrl={chat.avatarUrl}
                lastMessage={chat.lastMessage}
                lastMessageTime={chat.lastMessageTime}
                unreadCount={chat.unreadCount}
                active={chat.id === mockActiveChat.id}
              />
            ))}
          </div>
        </div>

        {/* Правая часть: активный диалог */}
        <div className="flex-1 bg-[#050505] border border-white/10 ml-4 flex flex-col">
          <ChatHeader />
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {mockActiveChat.messages.map((m) => (
              <MessageBubble
                key={m.id}
                author={m.author === "system" ? "system" : m.author}
                text={m.text}
                time={m.time}
              />
            ))}
          </div>
          <ChatInput />
        </div>
      </div>
    </div>
  );
}
