import Sidebar from "@/widgets/Sidebar/Sidebar";
import ProfileHeader from "@/widgets/ProfileHeader/ProfileHeader";
import EditProfileForm from "@/features/edit-profile/EditProfileForm/EditProfileForm";

export default function EditProfilePage() {
  return (
    <div className="min-h-screen flex bg-[#0A0A0A] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/auth/ImgBg1920.png')" }}
      />
      <div className="absolute inset-0 z-[1] bg-black/40" />

      <div className="relative z-10 flex flex-1">
        <Sidebar />
        <div className="flex-1 flex">
          <div className="w-[420px] shrink-0 px-10 py-12   ">
            <ProfileHeader />
          </div>
          <div className="flex-1 flex items-start justify-center px-16">
            <div className="w-[664px] h-[852px] rotate-0 opacity-100 rounded-[2px] border border-[1px] m-[24px] p-8 gap-[10px]">
              <EditProfileForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
