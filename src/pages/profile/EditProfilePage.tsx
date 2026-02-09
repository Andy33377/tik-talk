import Sidebar from "../../widgets/Sidebar/Sidebar";
import ProfileHeader from "../../widgets/ProfileHeader/ProfileHeader";
import EditProfileForm from "../../features/edit-profile/EditProfileForm/EditProfileForm";
import { mockCurrentUser } from "@/shared/mocks/users";

export default function EditProfilePage() {
  return (
    <div className="min-h-screen flex bg-[#0A0A0A] text-white">
      <Sidebar />
      <div className="flex-1 flex">
        <div className="w-[420px] px-10 py-12 border-r border-white/10">
          <ProfileHeader user={mockCurrentUser} />
        </div>
        <div className="flex-1 px-16 py-12">
          <EditProfileForm />
        </div>
      </div>
    </div>
  );
}
