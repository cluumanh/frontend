import type {Logger} from './logger';
import { ConsoleLogger } from './console-logger';

class LogManager {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    debug(message: string, meta?: unknown) {
        this.logger.debug(message, meta);
    }

    info(message: string, meta?: unknown) {
        this.logger.info(message, meta);
    }

    warn(message: string, meta?: unknown) {
        this.logger.warn(message, meta);
    }

    error(message: string, meta?: unknown) {
        this.logger.error(message, meta);
    }
}

export const log = new LogManager(new ConsoleLogger());
