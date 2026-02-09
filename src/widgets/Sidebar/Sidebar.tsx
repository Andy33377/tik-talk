interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={`w-64 bg-[#0F0F0F] border-r border-white/10 p-6 flex flex-col h-screen ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 mb-8">
        <img src="/images/sidebar/logo-sm-sidebar.svg" alt="logo-sm" />
      </div>

      <nav className="flex flex-col gap-4 mb-8">
        <a
          href="#"
          className="flex items-center gap-3 text-gray-300 hover:text-white"
        >
          <img src="/images/sidebar/home-svg.svg" alt="logo-sm" />
          <span>Моя страница</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-gray-300 hover:text-white relative"
        >
          <img src="/images/sidebar/message.svg" alt="logo-sm" />
          <span>Чаты</span>
          <span className="ml-auto bg-[#9B78FF] text-black text-xs px-2 py-0.5 rounded-full">
            28
          </span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-gray-300 hover:text-white"
        >
          <img src="/images/sidebar/search.svg" alt="logo-sm" />
          <span>Поиск</span>
        </a>
      </nav>

      <div className="mb-6">
        <h3 className="text-sm text-gray-400 mb-3">Подписчики</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <span className="text-sm">Сара Коннор</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <span className="text-sm">Кристанна Локен</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <span className="text-sm">Майкл Уинслоу</span>
          </div>
        </div>
        <a
          href="#"
          className="text-sm text-[#9B78FF] mt-2 flex items-center gap-1"
        >
          Все подписчики <img src="/images/arrow.svg" alt="" />
        </a>
      </div>

      <div className="mt-auto flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
        <div className="flex-1">
          <div className="text-sm font-medium">ryan.gosling</div>
        </div>
        <button className="text-gray-400 hover:text-white">
          <img src="/images/sidebar/settings.svg" alt="logo-sm" />
        </button>
      </div>
    </div>
  );
}
