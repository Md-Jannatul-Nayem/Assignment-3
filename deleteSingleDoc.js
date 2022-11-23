const {client}=require("./dbConfig");

const deleteSingleDoc=async()=>{
    try 
    {
        const database=client.db('department');
        const users=database.collection('users');
        const query = { university: "NSU",department:"CSE"};

        const result = await users.deleteOne(query);
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
          } else {
            console.log("No documents matched the query. Deleted 0 documents.");
          }
   
        
    } catch (error)
    {
        console.log(error);
        
    }
    finally
    {
        await client.close();

    }

}

deleteSingleDoc();