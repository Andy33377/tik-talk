export default function EditProfileAvatar() {
  return (
    <div className="mb-8">
      <label className="text-sm text-gray-400 mb-2 block">Аватарка</label>
      <div className="flex gap-6 items-center">
        <img
          src="/images/common/avatar-placeholder.png"
          alt="avatar"
          className="w-20 h-20 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 border border-dashed border-white/30 rounded-lg p-6 text-center text-sm text-gray-400">
          <img src="/images/cloud.svg" alt="" />
          Перетащите изображение или{" "}
          <span className="text-[#9B78FF] cursor-pointer hover:underline">
            Загрузите
          </span>
          <div className="mt-1 text-xs">(до 5 000 × 5 000 px)</div>
        </div>
      </div>
    </div>
  );
}
