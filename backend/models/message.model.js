
import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            requied: true,
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            requied: true,
        },
        message: {
            type: String,
            requied: true,
        },
    },
    {timestamps: true}
);

const Message = mongoose.model('Messages', messageSchema)

export default Message