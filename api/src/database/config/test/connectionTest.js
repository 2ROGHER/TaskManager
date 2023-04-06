const connectionTest = async (sequelize) =>{
    try {
        await sequelize.authenticate();
        console.log('connected succesfully!');
    } catch (error) {
        console.error("Unable the connection", error, "closing!");
        sequelize.close(); //closing the connection
    }

};
module.exports = connectionTest;