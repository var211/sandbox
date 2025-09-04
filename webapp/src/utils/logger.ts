import { conf } from "@/settings"

export const logger = {
  log: (...args: unknown[]) => {
    if (conf.DEBUG) console.log(...args)
  },
  info: (...args: unknown[]) => {
    if (conf.DEBUG) console.info(...args)
  },
  debug: (...args: unknown[]) => {
    if (conf.DEBUG) console.debug(...args)
  },
  warn: (...args: unknown[]) => {
    if (conf.DEBUG) console.warn(...args)
  },
  error: (...args: unknown[]) => {
    console.error(...args)
  }
}
