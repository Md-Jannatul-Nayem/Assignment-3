const {client}=require("./dbConfig");

const updateSingleDoc=async()=>{
    try 
    {
        const database=client.db('department');
        const users=database.collection('users');
        const filter = { university: "NSU",department:"CSE"};
        const options={upsert:true};
        const updateDoc={
            $set:{
                location:"Bashundhara"
            }
        };
        const result = await users.updateOne(filter, updateDoc, options);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
        
    } catch (error)
    {
        console.log(error);
        
    }
    finally
    {
        await client.close();

    }

}

updateSingleDoc();