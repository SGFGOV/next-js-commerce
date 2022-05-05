import Logger from "@loggerjs/logger-js"
import React, { createContext } from "react"
import { CartProvider } from "./cart-context"
import { CustomerProvider } from "./customer-context"
import { RegionProvider } from "./region-context"
const pinoLog = require('pino')()


const defaultLoggerContext = {
  /**
   * @type {Logger}
   */
  logger: null,
}

const LoggerContext = createContext(defaultLoggerContext)
export default LoggerContext

export const LoggerProvider = ({ children, logger=pinoLog }) => {
  const pinoLog = require('pino')()
  return (
    <LoggerContext.Provider value={{ logger }}>
      {children}
    </LoggerContext.Provider>
  )
}
