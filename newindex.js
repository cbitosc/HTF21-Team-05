
function Clicked(value) {
    alert(value);
 
const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongodb!')

        //Inserting values
        const user = {
        username: localStorage.getItem("uStorage") ,
        password: localStorage.getItem("pStorage"),
         registeredEvents:["a2","b3","c5"],
        }

        await new userSchema(user).save()
       

       //finding values
      const result = await userSchema.findOne({
        password: 'Password1!',
      })
      console.log('Result:', result)
      

      //finding events of the user
      const findEvents = await userSchema.findOne({
        username: 'u1 new',
      })
      console.log('Result:', findEvents.registeredEvents )

   } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()
}