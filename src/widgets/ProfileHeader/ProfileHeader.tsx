export default function ProfileHeader() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <img
          src="/images/users/Ryan.png"
          alt="avatar"
          className="w-24 h-24 rounded-full object-cover "
        />
        <div>
          <div className="font-semibold text-xl text-white mb-0.5">
            Райан Гослинг
          </div>
          <div className="text-sm text-gray-400">ryan.gosling</div>
        </div>
      </div>

      <div className="border-t border-dashed border-white/20 my-6" />

      <div className="mb-6">
        <h3 className="font-semibold mb-3">Навыки</h3>
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 border border-white/30 rounded text-sm">
            JS
          </span>
          <span className="px-3 py-1 border border-white/30 rounded text-sm">
            CSS
          </span>
          <span className="px-3 py-1 border border-white/30 rounded text-sm">
            Angular
          </span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">О себе</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Список навыков, который мы обсудили выше, – основа резюме, но не
          единственная его часть. Также можно рассказать о себе в классическом
          смысле – этот раздел можно добавить в сопроводительное письмо.
        </p>
      </div>
    </div>
  );
}
