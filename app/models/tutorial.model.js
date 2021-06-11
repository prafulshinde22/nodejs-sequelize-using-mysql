module.exports = (sequelize, Datatype) => {
    const Tutorial = sequelize.define("tutorial", {
        title: {
            type: Datatype.STRING
        },
        description: {
            type: Datatype.STRING
        },
        published: {
            type: Datatype.BOOLEAN
        }
    });
    return Tutorial;
};