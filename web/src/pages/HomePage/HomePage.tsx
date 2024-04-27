import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import RecentActivities from "../../components/RecentActivities/RecentActivities";
import { RecentActivitiesResult } from "../../services/home.service";
import homeService from "./../../services/home.service";

const HomePage: React.FC = () => {
  const [activities, setActivities] = useState<RecentActivitiesResult>();

  useEffect(() => {
    fetchRecentActivities();
  }, []);

  const fetchRecentActivities = async () => {
    await homeService
      .recentActivities()
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <RecentActivities items={activities?.items || []} />
    </div>
  );
};

export default HomePage;
