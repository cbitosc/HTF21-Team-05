const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongodb!')
       const user = {
       username: 'u1',
         password: 'Password2!',
       }

       await new userSchema(user).save()
       
      const result = await userSchema.findOne({
        password: 'Password1!',
      })
      console.log('Result:', result.username)

    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()