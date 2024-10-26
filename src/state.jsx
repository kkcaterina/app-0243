const user = {
  name: "Иван",
  lastname: "Иванов",
  id: "1",
  email: "ivan@mail.io",
  about: "Тут я рассказываю интересную историю",
  avatar: "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg",
};

const users = {
  0: { name: "Валерия", lastanme: "Смирнова" },
  1: { name: "Павел", lastanme: "Николаев" },
  2: { name: "Владислав", lastanme: "Тетерин" },
  3: { name: "Юлия", lastanme: "Петрова" },
  4: { name: "Ксения", lastanme: "Иванова" },
};

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}