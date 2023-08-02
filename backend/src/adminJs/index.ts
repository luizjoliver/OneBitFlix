import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import {authenticationOptions }from "./authentication"
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
    databases: [sequelize],
    rootPath: '/admin',
    resources:adminJsResources,
    branding: brandingOptions,
    locale: locale, 
    dashboard: dashboardOptions
  })
export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs,
  authenticationOptions
  ,null,
  {
  resave:false,
  saveUninitialized: false
}
)
