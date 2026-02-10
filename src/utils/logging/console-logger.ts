import type {Logger} from './logger';
import type {LogLevel} from './log-level';

const LEVEL_PRIORITY: Record<LogLevel, number> = {
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
};

const CURRENT_LEVEL: LogLevel =
    import.meta.env.PROD ? 'warn' : 'debug';

export class ConsoleLogger implements Logger {
    private canLog(level: LogLevel) {
        return LEVEL_PRIORITY[level] >= LEVEL_PRIORITY[CURRENT_LEVEL];
    }

    log(level: LogLevel, message: string, meta?: unknown) {
        if (!this.canLog(level)) return;

        const timestamp = new Date().toISOString();
        console[level](`[${timestamp}] ${message}`, meta ?? '');
    }

    debug(message: string, meta?: unknown) {
        this.log('debug', message, meta);
    }

    info(message: string, meta?: unknown) {
        this.log('info', message, meta);
    }

    warn(message: string, meta?: unknown) {
        this.log('warn', message, meta);
    }

    error(message: string, meta?: unknown) {
        this.log('error', message, meta);
    }
}
