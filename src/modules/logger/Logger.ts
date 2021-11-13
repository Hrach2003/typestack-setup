import * as path from 'path';
import { Service } from 'typedi';
import * as winston from 'winston';
type LogType = 'error' | 'warn' | 'debug' | 'info';

@Service()
export class LoggerService {
	public static DEFAULT_SCOPE = 'app';

	private static parsePathToScope(filepath: string): string {
		if (filepath.indexOf(path.sep) >= 0) {
			filepath = filepath.replace(process.cwd(), '');
			filepath = filepath.replace(`${path.sep}src${path.sep}`, '');
			filepath = filepath.replace(`${path.sep}dist${path.sep}`, '');
			filepath = filepath.replace('.ts', '');
			filepath = filepath.replace('.js', '');
			filepath = filepath.replace(path.sep, ':');
		}
		return filepath;
	}

	private scope: string;
	private logger: winston.Logger;

	constructor(scope?: string) {
		this.scope = LoggerService.parsePathToScope(scope ? scope : LoggerService.DEFAULT_SCOPE);
		this.logger = winston.createLogger({
			transports: [
				new winston.transports.Console({
					handleExceptions: true,
					format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
				}),
			],
		});
	}

	public debug(message: string, ...args: unknown[]): void {
		this.log('debug', message, args);
	}

	public info(message: string, ...args: unknown[]): void {
		this.log('info', message, args);
	}

	public warn(message: string, ...args: unknown[]): void {
		this.log('warn', message, args);
	}

	public error(message: string, ...args: unknown[]): void {
		this.log('error', message, args);
	}

	private log(level: LogType, message: string, args: unknown[]): void {
		this.logger[level](`${this.formatScope()} ${message}`, args);
	}

	private formatScope(): string {
		return `[${this.scope}]`;
	}
}
