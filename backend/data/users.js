import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    address: {
      city: "Navi Mumbai",
      country: "India",
      pincode: 700019,
      buildingAddress: "BhumiRaj Hermitage",
    },
  },

  {
    name: "Vaibhav Saraf",
    email: "vsaraf@example.com",
    password: bcrypt.hashSync("123456", 10),
    address: {
      city: "Mumbai",
      country: "India",
      pincode: 7000129,
      buildingAddress: "BhumiRaj Hermitage",
    },
  },
  {
    name: "John Doe",
    email: "jdoe@example.com",
    password: bcrypt.hashSync("123456", 10),
    address: {
      city: "London",
      country: "England",
      pincode: 128781,
      buildingAddress: "221 B",
    },
  },
];

export default users;
