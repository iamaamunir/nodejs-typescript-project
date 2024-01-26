import mongoose from 'mongoose'
import config from 'config'
import log from './logger'



async function connect(){
  const dbUri = config.get<string>("DB_URI");
  try {
    await mongoose.connect(dbUri)
    log.info('DB connected successfully');
    
  }
  catch (error) {
    log.error('DB connection unsuccssful');
    process.exit(1)
    
  }
}

export default connect