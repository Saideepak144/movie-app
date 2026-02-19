const { pool } = require('../config/database');

const createUser = async (username, email, passwordHash) => {
  const query = `
    INSERT INTO users (username, email, password_hash)
    VALUES ($1, $2, $3)
    RETURNING id, username, email, created_at;
  `;
  
  try {
    const result = await pool.query(query, [username, email, passwordHash]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const findUserByEmail = async (email) => {
  const query = `
    SELECT id, username, email, password_hash, created_at
    FROM users
    WHERE email = $1;
  `;
  
  try {
    const result = await pool.query(query, [email]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const findUserByUsername = async (username) => {
  const query = `
    SELECT id, username, email, password_hash, created_at
    FROM users
    WHERE username = $1;
  `;
  
  try {
    const result = await pool.query(query, [username]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const findUserById = async (id) => {
  const query = `
    SELECT id, username, email, created_at
    FROM users
    WHERE id = $1;
  `;
  
  try {
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserByUsername,
  findUserById
};
