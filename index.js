const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongodb!')

       //Inserting values
       const user = {
        //email: 'test@email.com',
       username: 'u1',
         password: 'Password2!',
       }

       await new userSchema(user).save()
       

       /*finding values
      const result = await userSchema.findOne({
        password: 'Password1!',
      })
      console.log('Result:', result)*/

    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()