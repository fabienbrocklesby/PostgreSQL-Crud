const db = require('../utils/db');

exports.insert = async (data) => {
    const row = await db.query(`INSERT INTO posts(title, body) VALUES ($1, $2)`, [data.title, data.body]);
    if (row.affectedRows === 0) { return null; }
    return { data };
};

exports.select = async () => {
    const row = await db.query(`SELECT * FROM posts`);
    return row.rows;
};

exports.selectById = async (id) => {
    const row = await db.query('SELECT * FROM posts WHERE id = $1', [id]);
    return row.rows;
  };

exports.update = async (id, data) => {
    const row = await db.query(`UPDATE posts SET title = $1, body = $2 WHERE id = $3`, [data.title, data.body, id]);
    if (row.affectedRows === 0) { return null; }
    return { data };
};

exports.delete = async (id) => {
  const row = await db.query('DELETE FROM posts WHERE id = $1', [id]);
  if (row.affectedRows === 0) { return null; }
  return { id };
};