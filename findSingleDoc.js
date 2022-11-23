const {client}=require("./dbConfig");

const findSingleDoc=async()=>{
    try 
    {
        const database=client.db('department');
        const users=database.collection('users');
        const query = { university: "NSU",department:"CSE"};
    
        const user= await users.findOne(query);
        console.log(user);
        
    } catch (error)
    {
        console.log(error);
        
    }
    finally
    {
        await client.close();

    }

}

findSingleDoc();