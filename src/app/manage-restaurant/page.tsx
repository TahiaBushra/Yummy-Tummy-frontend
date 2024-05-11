"use client";

import ManageRestaurantForm from "@/components/ManageRestaurantForm";
import { useCreateRestaurant } from "@/hooks/useCreateRestaurant";
import { useGetRestaurant } from "@/hooks/useGetRestaurent";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateRestaurant();
  const { currentRestaurant } = useGetRestaurant();

  return (
    <ManageRestaurantForm
      isLoading={isLoading}
      onSave={createRestaurant}
      restaurant={currentRestaurant}
    />
  );
};

export default ManageRestaurantPage;
