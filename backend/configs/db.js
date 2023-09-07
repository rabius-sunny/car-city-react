import mongoose from 'mongoose'
const { connect } = mongoose

const connectionString =
  'mongodb+srv://carcity:266696687carcity@cluster1.guizf.mongodb.net/carcity?retryWrites=true&w=majority'

const connection = async () => {
  try {
    const response = await connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    console.log('database connected successfully')
  } catch (error) {
    console.log(error)
  }
}

export default connection
