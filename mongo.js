const mongoose = require('mongoose')

const mongoPath = 'mongodb+srv://user123:user123@cluster1.0jdpt.mongodb.net/cluster1?retryWrites=true&w=majority';

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  return mongoose
}