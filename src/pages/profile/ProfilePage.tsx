import Sidebar from "@/widgets/Sidebar/Sidebar";
import ProfilePageHeader from "@/widgets/ProfilePageHeader/ProfilePageHeader";

import { mockCurrentUser } from "@/shared/mocks/users";
import { mockSubscribers } from "@/shared/mocks/users";
import { mockPosts, mockComments } from "@/shared/mocks/posts";
import CreatePost from "@/features/create-post/CreatePost";
import PostCard from "@/features/post/PostCard/PostCard";
import ProfileSidebar from "@/widgets/ProfileSidebar/ProfileSidebar";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex  relative overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/auth/ImgBg1920.png')",
        }}
      />
      <div className="absolute inset-0 z-10 bg-black/40" />
      <Sidebar className="relative z-20" />
      <div className="flex-1 flex relative z-20">
        <div className="flex-1 px-10 py-8">
          <ProfilePageHeader user={mockCurrentUser} />
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
        </div>

        <div className="w-80 px-6 py-8 border-l border-white/10">
          <ProfileSidebar
            user={mockCurrentUser}
            subscribers={mockSubscribers}
          />
        </div>
      </div>
    </div>
  );
}
