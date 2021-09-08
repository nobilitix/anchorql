import morgan from "koa-morgan";
import winston from "winston";

const { createLogger, format, transports } = winston;

// TODO: Control logging from ENV / Config
const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `anchorql-combined.log`.
    // - Write all logs error (and below) to `anchorql-error.log`.
    //
    new transports.File({ filename: "anchorql-error.log", level: "error" }),
    new transports.File({ filename: "anchorql-combined.log" }),
  ],
});

const stream = {
  write(message: string) {
    logger.info(message);
  },
};

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}

// this middleware logs every single request to a logfile (and console in development environment)
const loggerMiddleware = morgan(
  process.env.NODE_ENV !== "production" ? "dev" : "combined",
  {
    stream,
  }
);

export { logger, loggerMiddleware };
