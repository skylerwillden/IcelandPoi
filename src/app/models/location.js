import mongoose, {mongo} from 'mongoose'

const Schema = mongoose.Schema

let locationSchema = new Schema({
    position: Object,
    title: String,
    image: String,
    description: String
})

export let Location = mongoose.model("Location", locationSchema)