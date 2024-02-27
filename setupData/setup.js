import "dotenv/config";
import { MongoClient } from "mongodb";

import { users } from "./users.js";
import { roles } from "./roles.js";
import { vehicles } from "./vehicles.js";
import hash from "../src/utils/hash.js";

let userRoleIndex = -1;
let vehicleIndex = -1;
const hashedPasswordUsers = users.map((user, index) => {
  ++userRoleIndex;
  ++vehicleIndex;
  if (userRoleIndex == roles.length) userRoleIndex = 0;
  if (vehicleIndex == vehicles.length - 1) vehicleIndex = 0;
  return {
    ...user,
    password: hash(user.password),
    roles: [roles[userRoleIndex]._id],
    vehicles: [vehicles[vehicleIndex]._id, vehicles[++vehicleIndex]._id],
  };
});

hashedPasswordUsers[1].roles.push(roles[0]._id); // add multi-role user
hashedPasswordUsers[2].roles = [roles[1]._id]; // add company-owner only user

const client = new MongoClient(
  "mongodb://localhost:27017/garage?readPreference=primary&ssl=false"
);

client.connect();

const userCollection = client.db("garage").collection("users");
const roleCollection = client.db("garage").collection("roleusers");
const vehicleCollection = client.db("garage").collection("vehicles");

console.log("Connected correctly to server");

await userCollection.deleteMany();
await roleCollection.deleteMany();
await vehicleCollection.deleteMany();

const userResult = await userCollection.insertMany(hashedPasswordUsers);
const roleResult = await roleCollection.insertMany(roles);
const vehicleResult = await vehicleCollection.insertMany(vehicles);
console.log("Sample data seeded successfully");
console.log("users created", userResult);
console.log("roles created", roleResult);
console.log("vehicles created", vehicleResult);

client.close();
