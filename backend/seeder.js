import Mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js'
import programs from './data/programs.js';
import User from './models/userModel.js'
import Program from './models/programModel.js';
import connectDB from './config/db.js';

dotenv.config()

connectDB()

const importData = async() => {
  try {
    await User.deleteMany()
    await Program.deleteMany()

    const createdUser = await User.insertMany(users)

    const adminUser = createdUser[0]._id

    const samplePrograms = programs.map(program => {
      return {...program, user: adminUser}
    })

    await Program.insertMany(samplePrograms)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async() => {
  try {
    await User.deleteMany()
    await Program.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
