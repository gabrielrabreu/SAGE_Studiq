import { v4 as uuidv4 } from "uuid";

import Card from "../Card/Card";
import { RecentActivitiesItemResult } from "../../services/home.service";

interface RecentActivitiesProps {
  items: RecentActivitiesItemResult[];
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({ items }) => {
  return (
    <div>
      <h1
        className="
          font-semibold py-4
          text-black
          dark:text-white"
      >
        Recent Activities
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <Card
            key={uuidv4()}
            imageUrl={item.imageUrl}
            title={item.title}
            tags={item.tags}
            authorName={item.authorName}
            authorAvatarUrl={item.authorAvatarUrl}
            onClick={() => console.log(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
