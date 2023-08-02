import { Model, Optional ,DataTypes} from "sequelize";
import { sequelize } from "../database";

export interface Category {
    id:number,
    name:string,
    position:number
}

export interface CategoryCreationAttributes extends Optional<Category, "id">{}

export interface CategoryInstance extends Model<Category,CategoryCreationAttributes>,Category{}

export const Category = sequelize.define<CategoryInstance, Category>("Category",{
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type: DataTypes.INTEGER
      },
      name:{
        allowNull:false,
        type: DataTypes.STRING
      },
      position:{
        allowNull:false,
        type: DataTypes.INTEGER
      }
})