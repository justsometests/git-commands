interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

const schema: User[] = [
  {
    id: 1,
    first_name: "Thurston",
    last_name: "Owens",
    email: "towens0@mapquest.com",
    gender: "Male",
    ip_address: "138.119.50.152",
  },
  {
    id: 2,
    first_name: "Ricki",
    last_name: "Shelliday",
    email: "rshelliday1@biblegateway.com",
    gender: "Female",
    ip_address: "81.207.117.148",
  },
  {
    id: 3,
    first_name: "Norbie",
    last_name: "Rowler",
    email: "nrowler2@marketwatch.com",
    gender: "Male",
    ip_address: "116.198.86.20",
  },
];
