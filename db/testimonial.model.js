import { Schema, model } from 'mongoose';

const testimonialSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    testimonial: {
        type: String,
        required: [true, 'Add your testimonial text'],
    }
}
);

const Testimonial = model('Testimonial', testimonialSchema);

export default Testimonial;