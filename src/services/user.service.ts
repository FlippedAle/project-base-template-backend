import { query } from "./database";

async function getAll() {
  const rows = await query(`SELECT * FROM users`);
  return rows;
}

async function getOne(userCF: string) {
  const user = await query(`SELECT * FROM users WHERE CF=?`, [userCF]);
  return user;
}

/*async function add(user) {
const query_keys = utils.get_json_keys(user);
const query_values = utils.get_json_values(user);

const query =
    "INSERT INTO users (" +
    query_keys +
    ") VALUES (" +
    utils.get_placeholder_for_escape(query_keys) +
    ");";
return await db.query(query, [...query_values]);
}

async function updateOne(id, newValues) {
for (let item in newValues) {
    await db.query(`UPDATE users SET ` + item + `=? WHERE CF=?`, [
    newValues[item],
    id,
    ]);
}
return true;
}*/

async function deleteOne(userID: Number) {
  return await query("DELETE FROM users WHERE CF = ?;", [userID]);
}

export const userService = {
  getAll,
  getOne,
  deleteOne,
};
