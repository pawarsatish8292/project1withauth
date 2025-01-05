let tableName = 'records';
import executeQuery from "../config/dbQuery.js";

export const insertRecord = async(userId, title, content)=>{
    let query = `insert into ${tableName}(user_id, title, content)
                values(?,?,?)`;
    let params = [userId, title, content];
    return executeQuery(query, params);
}

export const getRecord = async(userId)=>{
    let query = `select id, title, content from ${tableName}
                where user_id = ?`;
    let params = [userId];
    return executeQuery(query, params);
}

export const deleteRecord = async(userId, id)=>{
    let query = `delete from ${tableName}
                where id = ? and user_id = ?`;
    let params = [id, userId];
    return executeQuery(query, params);
}