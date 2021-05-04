import React from "react";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

export const successMessage = (message: string) =>
  NotificationManager.success(message, "Success");
export const infoMessage = (message: string) =>
  NotificationManager.info(message, "Info");
export const warningMessage = (message: string) =>
  NotificationManager.warning(message, "Warning");
export const errorMessage = (message: string) =>
  NotificationManager.error(message, "Error");
