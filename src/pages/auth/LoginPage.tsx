export default function LoginPage() {
  return (
    <div className="min-h-screen w-full grid grid-cols-2 relative overflow-hidden text-white">
      {/* Фоновая картинка */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/auth/ImgBgAuth.png')",
        }}
      />

      {/* Затемнение / оверлей (по желанию) */}
      <div className="absolute inset-0 " />

      {/* Левая часть — форма */}
      <div className="relative z-10 flex flex-col justify-center px-32">
        <h1 className="text-5xl font-semibold mb-10">Вход</h1>

        <div className="flex flex-col gap-6 w-[420px]">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Telegram username</label>
            <input
              type="text"
              placeholder="Введите логин"
              className="bg-transparent border border-[#ffffff] rounded-lg px-4 py-3 outline-none focus:border-[#9B78FF] transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Пароль</label>
            <input
              type="password"
              placeholder="Введите пароль"
              className="bg-transparent border  border-[#ffffff] rounded-lg px-4 py-3 outline-none focus:border-[#9B78FF] transition"
            />
          </div>

          <button className="mt-4 bg-[#9B78FF] text-black font-medium py-3 rounded-lg hover:bg-[#b091ff] transition">
            Войти
          </button>
        </div>
      </div>

      {/* Правая часть — логотип */}
      <div className="relative z-10 flex items-center justify-center">
        <img
          src="/images/auth/mainLogo.svg"
          alt="TIK-TALK"
          className="w-[420px] select-none"
        />
      </div>
    </div>
  );
}
