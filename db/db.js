const mongoose = require('mongoose');

const connection = async () => {
        const URL = `mongodb+srv://Kuldeep:97FJyFbQdmU6t2IX@clusterforapipractice.gm6fxpk.mongodb.net/react-js-coding-task`;
        try {
            await mongoose.connect(URL, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            });
            console.log(`Database connection established`);
        } catch (error) {
            console.log(`Error while connecting with database: ${error.message}`);
        }
    }
module.exports = connection

