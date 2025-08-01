"use client";

import * as React from "react";
import { MenuBar } from "../../components/friend/MenuBar";
import { HeaderSeoulmate } from "../../components/common/HeaderSeoulmate";
import { RequestUserListItem } from "../../components/friend/request/RequestUserListItem";
import BottomNavBar from "../../components/common/BottomNavBar";

interface FriendRequest {
  id: string;
  name: string;
  percentage: string;
}

interface FriendRequestListProps {
  requests?: FriendRequest[];
  onDeleteRequest?: (id: string) => void;
  onAcceptRequest?: (id: string) => void;
}

export const FriendRequestPage: React.FC<FriendRequestListProps> = ({
  requests = [
    { id: "1", name: "name", percentage: "nn%" },
    { id: "2", name: "name", percentage: "nn%" },
    { id: "3", name: "name", percentage: "nn%" },
    { id: "4", name: "name", percentage: "nn%" },
  ],
  onDeleteRequest,
  onAcceptRequest,
}) => {
  const [activeTab, setActiveTab] = React.useState<"friends" | "requests">("requests");

  const handleDeleteRequest = (id: string) => {
    onDeleteRequest?.(id);
  };

  const handleAcceptRequest = (id: string) => {
    onAcceptRequest?.(id);
  };

  return (
    <main className="flex flex-col items-center px-6 mt-14 mb-16 mx-auto w-full min-h-screen bg-white max-w-[clamp(360px,100vw,430px)]">
        <HeaderSeoulmate title="서울메이트" alarm={false} />      
            
        <MenuBar />
        <section className="flex flex-col items-start h-60 w-[393px] max-md:w-full">
            {requests.map((request) => (
            <RequestUserListItem
                key={request.id}
                name={request.name}
                percentage={request.percentage}
                onDelete={() => handleDeleteRequest(request.id)}
                onAccept={() => handleAcceptRequest(request.id)}
            />
            ))}
        </section>

        <BottomNavBar />
    </main>
  );
};

export default FriendRequestPage;
