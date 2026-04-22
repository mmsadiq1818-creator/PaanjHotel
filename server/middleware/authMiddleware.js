import User from "../models/User.js";

// Middleware to check if user is authenticated
export const protect = async (req, res, next) => {
    const userId = req.auth?.userId;
    if (!userId) {
        return res.status(401).json({ success: false, message: "Not authenticated" });
    }

    let user = await User.findById(userId);

    if (!user) {
        user = await User.create({
            _id: userId,
            username: "Clerk User",
            email: `${userId}@clerk.local`,
            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            recentSearchedCities: [],
        });
    }

    req.user = user;
    next();
};