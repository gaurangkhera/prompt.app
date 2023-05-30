import { Schema, models, model } from 'mongoose';

const promptSchema = new Schema({
    prompt: {
        type: String,
        required: [true, 'Prompt is required.'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required']
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Prompt = models.Prompt || model('Prompt', promptSchema);

export default Prompt;