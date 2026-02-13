import Sidebar from "@/widgets/Sidebar/Sidebar";
import ProfilePageHeader from "@/widgets/ProfilePageHeader/ProfilePageHeader";
import CreatePost from "@/features/create-post/CreatePost";
import PostCard from "@/features/post/PostCard/PostCard";
import ProfileSidebar from "@/widgets/ProfileSidebar/ProfileSidebar";
import { mockCurrentUser, mockSubscribers } from "@/shared/mocks/users";
import { mockPosts, mockComments } from "@/shared/mocks/posts";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Фон */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/auth/ImgBg1920.png')" }}
      />
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Контент */}
      <div className="relative z-20 flex flex-1">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          {/* ОДИН общий хедер на две колонки */}
          <div className="px-10 pt-8 pb-4">
            <ProfilePageHeader user={mockCurrentUser} />
          </div>

          {/* Ниже — две колонки: лента постов + правая панель */}
          <div className="px-10 pb-8">
            <div className="grid grid-cols-[minmax(0,1fr)_20rem] gap-6">
              {/* Левая колонка — посты */}
              <main>
                <CreatePost user={mockCurrentUser} />
                <div className="mt-6 space-y-6">
                  {mockPosts.map((post) => (
                    <PostCard
                      key={post.id}
                      post={post}
                      author={mockCurrentUser}
                      comments={mockComments[post.id]}
                    />
                  ))}
                </div>
              </main>

              {/* Правая колонка — информация профиля */}
              <aside className="pl-6 border-l border-white/10">
                <ProfileSidebar
                  user={mockCurrentUser}
                  subscribers={mockSubscribers}
                />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
