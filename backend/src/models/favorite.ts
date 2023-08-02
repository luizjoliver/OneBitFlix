import { DataTypes, Model } from "sequelize";
import { CourseInstance } from "./course";
import { UserInstance } from "./user";
import { sequelize } from "../database";

export interface Favorite {
    userId: number,
    courseId: number
}

export interface FavoriteInstance extends Model <Favorite> , Favorite {
    Course?: CourseInstance,
    User?: UserInstance
}

export const Favorite = sequelize.define<FavoriteInstance, Favorite>("Favorite",{
    userId:{
        allowNull:false,
        primaryKey:true,
        type: DataTypes.INTEGER,
        references:{model:"users",key:"id"},
        onDelete:"CASCADE",
        onUpdate:"CASCADE"

    },
    courseId:{
        allowNull:false,
        primaryKey:true,
        type: DataTypes.INTEGER,
        references:{model:"courses",key:"id"},
        onDelete:"CASCADE",
        onUpdate:"CASCADE"

    }
})