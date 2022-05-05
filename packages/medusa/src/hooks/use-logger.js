import { useContext } from "react"
import LoggerContext from "../context/logger-context"

export const useLogger = () => {
  const { logger } = useContext(LoggerContext)

  if (!logger) {
    throw new Error(
      "No Logger client found. Please ensure that useLogger is used within a LoggerProvider."
    )
  }

  return logger
}
