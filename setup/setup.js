import "dotenv/config";
import { MongoClient } from "mongodb";
import hash from "../src/utils/hash.js";

import { users } from "./users.js";
import { roles } from "./roles.js";
import { vehicles } from "./vehicles.js";

const client = new MongoClient(
  "mongodb://127.0.0.1:27017/garage?retryWrites=true&w=majority"
);

let userRoleIndex = -1;
const hashedUsers = users.map((user) => {
  ++userRoleIndex;

  if (userRoleIndex == roles.length) userRoleIndex = 0;
  return {
    ...user,
    password: hash(user.password),
    roles: [roles[userRoleIndex]._id],
  };
});

hashedUsers[1].roles.push("0000d213816abba584714caa");
hashedUsers[2].roles = ["0000d225816abba584714c9d"];

client.connect();

const usersCollection = client.db("garage").collection("users");
const rolesCollection = client.db("garage").collection("roleusers");
const vehiclesCollection = client.db("garage").collection("vehicles");

await usersCollection.deleteMany();
await rolesCollection.deleteMany();
await vehiclesCollection.deleteMany();

const userSeedResult = await usersCollection.insertMany(hashedUsers);
const rolesSeedResult = await rolesCollection.insertMany(roles);
const vehiclesSeedResult = await vehiclesCollection.insertMany(vehicles);

console.log(userSeedResult);
console.log(rolesSeedResult);
console.log(vehiclesSeedResult);

client.close();
