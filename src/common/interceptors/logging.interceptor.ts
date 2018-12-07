import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
const logger = new Logger();
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    Logger.log('Before...');

    const now = Date.now();
    return call$.pipe(tap(() => Logger.log(`After... ${Date.now() - now}ms`)));
  }
}
