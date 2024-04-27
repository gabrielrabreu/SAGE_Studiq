import React from "react";
import { v4 as uuidv4 } from "uuid";

interface CardProps {
  imageUrl: string;
  title: string;
  tags: string[];
  authorName: string;
  authorAvatarUrl: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  tags,
  authorName,
  authorAvatarUrl,
  onClick,
}) => {
  return (
    <article
      className="
        rounded-lg p-4 flex flex-col justify-between 
        bg-white border 
        dark:bg-dark-mixed-300 dark:border-dark-mixed-300"
      onClick={onClick}
      data-testid="card"
    >
      <div>
        <img
          src={imageUrl}
          alt="Card Image"
          className="w-full h-36 rounded-md object-cover"
          data-testid="card-image"
        />
        <div className="px-1 py-4">
          <div
            className="
              font-bold text-xl mb-2
              text-black
              dark:text-white"
            data-testid="card-title"
          >
            {title}
          </div>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={uuidv4()}
                className="
                  rounded-lg py-1.5 px-3 text-xs font-bold uppercase
                   bg-white text-black border border-stone-200 
                   dark:bg-dark-mixed-400 dark:text-white dark:border-dark-mixed-400"
                data-testid="card-tag"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <hr
          className="
            mb-4 
            border border-gray-300
            dark:border-dark-mixed-400"
        />
        <div className="flex items-center">
          <img
            src={authorAvatarUrl}
            alt="Author Avatar"
            className="h-8 w-8 mr-2 rounded-lg"
            data-testid="card-author-avatar"
          />
          <span
            className="
              text-sm font-medium 
              text-black
              dark:text-white"
            data-testid="card-author-name"
          >
            {authorName}
          </span>
        </div>
      </div>
    </article>
  );
};

export default Card;
