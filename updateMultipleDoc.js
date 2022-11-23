const {client}=require("./dbConfig");

const updateMultipleDoc=async()=>{
    try 
    {
        const database=client.db('department');
        const users=database.collection('users');
        const filter = {};
        const updateDoc={
            $set:{
                isStudent:true
            }
        };
        const result = await users.updateMany(filter, updateDoc);
        console.log(`Updated ${result.modifiedCount} documents`);
        
    } catch (error)
    {
        console.log(error);
        
    }
    finally
    {
        await client.close();

    }

}

updateMultipleDoc();