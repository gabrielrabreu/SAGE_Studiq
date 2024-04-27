import { AxiosResponse } from "axios";

import axiosInstance from "../libs/axios/axios.config";

export interface RecentActivitiesItemResult {
  id: string;
  imageUrl: string;
  title: string;
  tags: string[];
  authorName: string;
  authorAvatarUrl: string;
}

export interface RecentActivitiesResult {
  items: RecentActivitiesItemResult[];
}

const homeService = {
  recentActivities: async (): Promise<
    AxiosResponse<RecentActivitiesResult, void>
  > => {
    return await axiosInstance.get("recent-activities");
  },
};

export default homeService;
