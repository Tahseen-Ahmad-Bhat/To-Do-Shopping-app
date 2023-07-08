import { useContext } from "react";
import { NotificationContext } from "../context/NotificationProvider";

export const useNotificationContext = () => useContext(NotificationContext);
