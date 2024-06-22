import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, 'Task name is required'],
    trim:true,
    maxlength:[20, 'cannot be more than 20 characters']
  },
  completed: {
    type:Boolean,
    default:false
  },
},{
    collection:'Tasks',
    versionKey:false
})

//create model
const taskModel = mongoose.model('Tasks', TaskSchema)

export default taskModel
                          