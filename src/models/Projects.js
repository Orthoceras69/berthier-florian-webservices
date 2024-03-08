import mongoose, { now } from 'mongoose';
const { Schema } = mongoose;


const projectSchema = new Schema({
    name: String,
    users:[Schema.Types.Mixed]
});

const projectModel = mongoose.model('projects',projectSchema)

export default projectModel