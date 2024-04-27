import { UserIcon, XIcon } from "lucide-react";

interface UserMenuProps {
  isOpen: boolean;
  userAvatarUrl: string;
  userName: string;
  userEmail: string;
  onClose: () => void;
  onLogout: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({
  isOpen,
  userAvatarUrl,
  userName,
  userEmail,
  onClose,
  onLogout,
}) => {
  return (
    isOpen && (
      <div className="fixed inset-0 z-50 overflow-hidden">
        <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="w-screen max-w-sm">
            <div
              className="
                h-full flex flex-col py-6 border-l rounded-l-xl
                bg-white
                dark:bg-dark-mixed-200  dark:border-dark-mixed-300"
            >
              <div className="flex items-center justify-between px-8">
                <div className="flex items-center mr-5">
                  <div className="mr-5">
                    <div
                      className="
                        flex items-center justify-center w-12 h-12 rounded-full 
                        border-stone-200 border 
                        dark:border-dark-mixed-300"
                    >
                      <img
                        src={userAvatarUrl}
                        alt="User Avatar"
                        className="w-full h-full rounded-full"
                      />
                    </div>
                  </div>
                  <div className="mr-2 ">
                    <span
                      className="
                        text-md font-medium 
                        text-black
                        dark:text-white"
                    >
                      {userName}
                    </span>
                    <span
                      className="
                        font-medium block text-sm 
                        text-dark-surface-500"
                    >
                      {userEmail}
                    </span>
                  </div>
                </div>
                <button
                  className="text-dark-surface-500"
                  type="button"
                  onClick={onClose}
                  data-testid="close-button"
                >
                  <span className="sr-only">Close</span>
                  <XIcon />
                </button>
              </div>
              <div
                className="
                  mt-4 px-8 h-full overflow-auto text-sm
                  text-black
                  dark:text-white"
              >
                <button
                  className="flex items-center px-2 py-2 my-2 rounded-md w-full"
                  type="button"
                >
                  <UserIcon className="text-dark-surface-500" />
                  <span className="ml-2">Your profile</span>
                </button>
                <button
                  className="flex items-center px-2 py-2 my-2 rounded-md w-full"
                  type="button"
                  onClick={onLogout}
                  data-testid="logout-button"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default UserMenu;
