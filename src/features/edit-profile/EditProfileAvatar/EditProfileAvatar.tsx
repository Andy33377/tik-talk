export default function EditProfileAvatar() {
  return (
    <div className="space-y-6">
      <label className="text-sm text-gray-400 block">Аватарка</label>

      <div className="flex gap-12 items-center">
        <img
          src="/images/users/Ryan.png"
          alt="avatar"
          className="w-[130px] h-[130px] rounded-full object-cover"
        />

        <div className="flex-1 border border-dashed border-white/20 rounded-xl py-12 flex flex-col items-center justify-center min-h-[180px]">
          <img
            src="/images/cloud.svg"
            alt=""
            className="w-8 h-8 mb-4 opacity-70"
          />

          <p className="text-white">
            Перетащите изображение или{" "}
            <span className="text-[#9B78FF] underline cursor-pointer">
              Загрузите
            </span>
          </p>

          <p className="mt-3 text-xs text-gray-400">
            (разрешение до 5,000 х 5,000 px)
          </p>
        </div>
      </div>
    </div>
  );
}
