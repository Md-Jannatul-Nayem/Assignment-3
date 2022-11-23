const {client}=require("./dbConfig")

const insertSingleDoc=async()=>{
    try 
    {
        const database = client.db("department");
        const users = database.collection("users");
        const doc = {
            name:"Md.Jannatul Nayem",
            university:"AIUB",
            department:"BBA",
            cgpa:"3.57",
            status:"Graduated"
          }
          const result = await users.insertOne(doc);
          console.log(`A document was inserted with the _id: ${result.insertedId}`);

    } 
    catch (error)
    {
        console.log(error)
    }
    finally
    {

        await client.close();
    }
}

insertSingleDoc();