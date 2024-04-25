import { AxiosResponse } from "axios";

import axiosInstance from "../libs/axios/axios.config";

export interface RecentActivitiesItem {
  imageUrl: string;
  title: string;
  tags: string[];
  authorName: string;
  authorAvatarUrl: string;
}

export interface RecentActivities {
  items: RecentActivitiesItem[];
}

export const recentActivities = async (): Promise<
  AxiosResponse<RecentActivities, void>
> => {
  return await axiosInstance.get("api/recent-activities");
};
