import executeQuery from '../config/dbQuery.js';

export const create = async(name, email, password)=>{
    let query = `insert into users(name, email, password) values(?, ?, ?)`;
    let params = [name, email, password];
    return executeQuery(query, params);
}

export const findByEmail = async(email)=>{
    let query = `select * from users where email = ?`;
    let params = [email];
    return executeQuery(query, params);
}