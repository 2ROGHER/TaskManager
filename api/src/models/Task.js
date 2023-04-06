const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("Task", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                lenValidator() {
                    if (!(this.content.length >= 0 && this.content.length <= 200)) {
                        throw new Error("The field must have 200 characters at last and 5 as few");
                    }
                }
            },

        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificultity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                //custom validator for fields, thiis is complex, cause is a custom validator function
                //this follows you custom format/content/inheritance
                customValidator(value) {
                    if (!(value >= 0 && this.value <= 5)) {
                        throw new Error("La dificultad debe ser un numero entre 0 y 5");
                    }
                }
            },

        }
    });
};