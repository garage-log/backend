import RoleUser from "../models/RoleUser.js";

const registerRoleUser = async (req, res) => {
  try {
    const userRole = req.body;

    console.log(userRole);

    const data = await RoleUser.create(userRole);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "Role could not created." });
  }
};

const findAllRole = async (req, res) => {
  try {
    const data = await RoleUser.find().exec();

    const userRole = data.map((role) => {
      return {
        id: role._id,
        roleName: role.role,
      };
    });

    res.status(200).json(userRole);
  } catch (error) {
    res.status(400).json({ message: "Role could not find." });
  }
};

const findUserRoles = async (roleIds) => {
  try {
    const data = await RoleUser.find().exec();

    return data
      .map((item) => {
        if (roleIds.includes(item._id)) return item.role;
      })
      .filter((i) => i != null);
  } catch (error) {
    console.log("Error on finding logged-in user roles");
  }
};

export { registerRoleUser, findAllRole, findUserRoles };
