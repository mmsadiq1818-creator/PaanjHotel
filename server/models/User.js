import mongoose from 'mongoose';

//Schema : for creating model
const userSchema = mongoose.Schema({
    _id: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    image: {type: String, required: true, default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"},
    role: {type: String, enum: ["user","hotelOwner"], default: "user"},
    recentSearchedCities: [{type: String, required: true, default: []}],
},{timestamps: true}
);

// User model 
const User = mongoose.model("User", userSchema);

export default User;