import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        message: "Username already exists, please choose another one."
    },
    email: {
        type: String,
        // Additional validation or properties for email can be added here
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
});

// Pre-save hook to hash the password before saving
userSchema.pre('save', async function(next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model('User', userSchema);

export default User;
