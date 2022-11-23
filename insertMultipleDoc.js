const {client}=require("./dbConfig");

const insertMultipleDoc=async()=>{
    try 
    {
        const database=client.db('department');
        const users=database.collection('users');
        const docs = [
            {
            name:"Sourv Chy",
            university:"NSU",
            department:"CSE",
            cgpa:"3.75",
            status:"Graduated"
          },
          {
            name:"Md.Ashiqur Rahman",
            university:"NSU",
            department:"CSE",
            cgpa:"3.3",
            status:"Ongoing"
          },
          {
            name:"Minhaj Uddin Mahamud",
            university:"NSU",
            department:"EEE",
            cgpa:"3.5",
            status:"Graduated"
          },
          {
            name:"Fuad Shourv",
            university:"University of Leicster",
            department:"Mechanical Engineering",
            cgpa:"3.8",
            status:"Graduated"
          },
          {
            name:"Istiaq Jion",
            university:"NSU",
            department:"CIVIL",
            cgpa:"2.8",
            status:"Ongoing"
          },

        ];
        const result = await users.insertMany(docs);
    console.log(`${result.insertedCount} documents were inserted`);
    } catch (error)
    {
        
    }
    finally
    {
        await client.close();
    }
}

insertMultipleDoc();