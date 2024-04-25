import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";

const useAxiosMock = (axios: AxiosInstance) => {
  const mock = new MockAdapter(axios);

  mock.onPost("/api/login").reply(200, {
    accessToken: "5efb5f8a-212b-4b22-a201-ba2958005342",
    refreshToken: "91728235-6dab-4a00-93dc-9affb0b0747a",
    userName: "John Doe",
    userEmail: "johndoe@gmail.com",
    userAvatarUrl:
      "https://i.pinimg.com/originals/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg",
  });

  mock.onGet("/api/recent-activities").reply(200, {
    items: [
      {
        imageUrl:
          "https://static.vecteezy.com/system/resources/previews/000/116/431/large_2x/moon-phase-vector.jpg",
        title: "Lunar Cycle",
        tags: ["Astronomy", "Moon", "Lunar Phases"],
        authorName: "John",
        authorAvatarUrl:
          "https://i.pinimg.com/originals/49/1f/be/491fbeda943fad7a06bd606a7e128fde.png",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/51/3a/44/513a4439da7c2959feb87ab36bfa5dc9.jpg",
        title: "World War I",
        tags: ["History", "World Wars"],
        authorName: "Maria",
        authorAvatarUrl:
          "https://pbs.twimg.com/profile_images/1632175365807546368/Uu9834NN_400x400.jpg",
      },
      {
        imageUrl:
          "https://www.xtrafondos.com/wallpapers/sistema-solar-ilustracion-9454.jpg",
        title: "Solar System",
        tags: ["Astronomy", "Planets", "Stars"],
        authorName: "Carlos",
        authorAvatarUrl:
          "https://i.pinimg.com/736x/f4/fe/2f/f4fe2f9bf44f000fdcaac4210f59d515.jpg",
      },
      {
        imageUrl:
          "https://th.bing.com/th/id/OIP.4bOhbAVhZh9lzTSCjcaYkgHaG4?rs=1&pid=ImgDetMain",
        title: "Trigonometry Basics",
        tags: ["Trigonometry", "Mathematics"],
        authorName: "Trigonometry Academy",
        authorAvatarUrl:
          "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg",
      },
    ],
  });
};

export default useAxiosMock;
