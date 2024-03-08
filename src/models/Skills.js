import mongoose, { now } from 'mongoose';
const { Schema } = mongoose;


const skillSchema = new Schema({
    name: String,
});

const projectModel = mongoose.model('skills',skillSchema)

export default projectModel