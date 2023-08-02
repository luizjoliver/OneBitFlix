import { Category } from "./category";
import { Course } from "./course";
import { Episode } from "./episode";
import { Favorite } from "./favorite";
import { Like } from "./like";
import { User } from "./user";
import { WatchTime } from "./watchTime";

Category.hasMany(Course,{as:"courses"})

Course.belongsTo(Category)
Course.hasMany(Episode,{as:"episodes"})
Course.belongsToMany(User, { through: Favorite })
Course.hasMany(Favorite, { as: 'favoritesUsers', foreignKey: 'course_id' })

Episode.belongsTo(Course)

Favorite.belongsTo(Course)
Favorite.belongsTo(User)

User.belongsToMany(Course, { through: Favorite })
User.hasMany(Favorite, { as: 'favoritesCourses', foreignKey: 'user_id' })

User.belongsToMany(Course, { through: Like })
Course.belongsToMany(User, { through: Like })

Episode.belongsTo(Course)
Episode.belongsToMany(User, { through: WatchTime })
User.belongsToMany(Course, { through: Like })

User.belongsToMany(Episode, { through: WatchTime })
User.hasMany(Favorite, { as: 'favorites_courses', foreignKey: 'user_id' })

export {
  Category,
  Course,
  Episode,
  Favorite,
	Like,
  User, 
  WatchTime
}