'use client';
import { socketUrl } from "@/config/config";
import { createContext, useContext, useEffect } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext({ socket: null });

export const useSocket = () => useContext(SocketContext);

// Create a globally accessible socket instance
export const socket = io('https://s8080.sobhoy.com', {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  timeout: 20000,
  transports: ["websocket", "polling"],
  secure: false,
});

export const SocketProvider = ({ children }) => {
  useEffect(() => {
    console.log(socket.on("connect", () => console.log("Socket connected")));
    socket.on("connect", () => console.log("Socket connected"));
    socket.on("disconnect", (reason) => console.log(`Socket disconnected: ${reason}`));
    socket.on("reconnect_failed", () => console.log("Socket reconnection failed"));

    return () => {
      socket.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};
