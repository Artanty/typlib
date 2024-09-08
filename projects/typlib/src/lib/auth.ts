import { InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BusEvent<T = Record<string, unknown>> {
  from: string;
  to: string;
  event: string;
  payload: T;
  self?: true;
  status?: string;
}

export interface AuthStrategyBusEventPayload {
  authStrategy: string; // backend - strategy pattern
  status: string; // init, signup, login, logout, refreshToken - command pattern
}
export interface AuthStrategyBusEvent
  extends BusEvent<AuthStrategyBusEventPayload> {
  productName: string;
}

export const EVENT_BUS = new InjectionToken<BehaviorSubject<BusEvent>>('');
export const HOST_NAME = new InjectionToken<string>('');
