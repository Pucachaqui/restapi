import {getConnection} from "./../database/database"
const getLanguages= async (req,res)=>{
    try {
        const connection=await getConnection();
        const result=await connection.query("Select id,nombre,descripcion from tienda");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
   
};

const addLanguage =async(req,res)=>{
     try {

        const {nombre,descripcion}=req.body;
        if (nombre == undefined|| descripcion ==undefined){
            res.status(400).json({message:"MALA PETICION. PORFAVOR LLENE TODOS LOS CAMPOS"})
        }
        const tienda={nombre,descripcion}
        const connection=await getConnection();
        const result=await connection.query("Insert into tienda SET ?",tienda);
        res.json({message:"PRODUCTO AGREGADO"});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
};
const getLanguage= async (req,res)=>{
    try {
        
        console.log(req.params);
        const{id}=req.params;
        const connection=await getConnection();
        const result=await connection.query("Select id,nombre,descripcion from tienda where id= ?",id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
   
};

const deleteLanguage= async (req,res)=>{
    try {
        console.log(req.params);
        const{id}=req.params;
        const connection=await getConnection();
        const result=await connection.query("DELETE from tienda where id= ?",id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
   
};
const updateLanguage= async (req,res)=>{
    try {
        const{id}=req.params;
        const {nombre,descripcion}=req.body;
        
        if (id==undefined|| nombre == undefined|| descripcion ==undefined){
            res.status(400).json({message:"MALA PETICION. PORFAVOR LLENE TODOS LOS CAMPOS"})
        }
        console.log(req.params);
       
        const tienda={nombre,descripcion}
        const connection=await getConnection();
        const result=await connection.query("UPDATE tienda SET ? where id=?",[tienda,id]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
   
};
export const methods = {
    getLanguages,
    addLanguage,
    getLanguage,
    deleteLanguage,
    updateLanguage
};