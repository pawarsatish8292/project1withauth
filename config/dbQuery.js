import pool from './dbConfig.js';

const executeQuery = async (query, params = []) =>{
 try{
 const [result] = await pool.query(query,params);
 return result;
 } catch(error){
  throw error;
 }
}

export default executeQuery;