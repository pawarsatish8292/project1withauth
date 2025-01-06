import { insertRecord, getRecord, deleteRecord} from '../models/recordModel.js';
import { sendSuccess, sendError } from '../utils/response.js';

export const addContent = async (req, res) => {
    let { title, content } = req.body;
    if (!title || !content) return sendError(res, 'All fields are required', 400);
    let { user_id } = req.user;
    try {
        let result = await insertRecord(user_id, title, content);
        sendSuccess(res, { id: result.insertId, title, content }, 200);
    } catch (error) {
        sendError(res, error, 500);
    }
}

export const getContentList = async(req, res)=>{
    let {user_id} = req.user;
    try{
     let result = await getRecord(user_id);
     sendSuccess(res, result, 200);
    }catch(error){
        sendError(res, error, 500);
    }
}

export const inactiveRecord = async(req, res)=>{
    let {user_id} = req.user;
    let {id} = req.query;
    try{
        let result = await deleteRecord(user_id, parseInt(id));
        if(result.affectedRows === 0) return sendError(res, 'Record not found',404)
        sendSuccess(res, null,'Deleted successfully', 200);
    }catch(error){
        sendError(res, error, 500); 
    }
}