import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Card from "../../components/Card/Card";
import {
  RecentActivities,
  recentActivities,
} from "../../services/home.service";

const HomePage: React.FC = () => {
  const [activities, setActivities] = useState<RecentActivities>();

  useEffect(() => {
    fetchRecentActivities();
  }, []);

  const fetchRecentActivities = async () => {
    await recentActivities()
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1
        className="
          font-semibold py-4
          text-black
          dark:text-white"
      >
        Recent Activities
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {activities?.items.map((activity, index) => (
          <Card
            key={index}
            imageUrl={activity.imageUrl}
            title={activity.title}
            tags={activity.tags}
            authorName={activity.authorName}
            authorAvatarUrl={activity.authorAvatarUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
