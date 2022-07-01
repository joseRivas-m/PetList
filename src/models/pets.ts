import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";

export class Pet extends Model<
  InferAttributes<Pet>,
  InferCreationAttributes<Pet>
> {
  declare petId: number;
  declare name: string;
  declare photo: string;
  declare description: string;
  declare createdOn?: Date;
  declare updatedOn?: Date;
}

export function PetFactory(sequelize: Sequelize) {
  Pet.init(
    {
      petId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdOn: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedOn: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      freezeTableName: true,
      tableName: "petDB",
      sequelize,
    }
  );
}
