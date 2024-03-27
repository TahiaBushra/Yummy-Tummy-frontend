"use client";

import UserProfileForm from "@/components/UserProfileForm";
import { useUpdateUser } from "@/hooks/useUpdateUser";

const UserProfilePage = () => {
  const { isLoading: isUpdateLoading, updateUser } = useUpdateUser();
  return (
    <div>
      <UserProfileForm isLoading={isUpdateLoading} onSave={updateUser} />
    </div>
  );
};

export default UserProfilePage;
