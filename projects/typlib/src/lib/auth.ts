import { InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface BusEvent<T = Record<string, unknown>> {
  from: string;
  to: string;
  event: string;
  payload?: T;
  self?: true;
  status?: string;
}

// todo add data
export interface AuthStrategyBusEventPayload {
  authStrategy: string; // backend - strategy pattern

  status: string; // init, signup, login, logout, refreshToken - command pattern
}
export interface AuthStrategyBusEvent
  extends BusEvent<AuthStrategyBusEventPayload> {
  productName: string;
}

export const EVENT_BUS = new InjectionToken<BehaviorSubject<BusEvent>>('');
export const EVENT_BUS_LISTENER = new InjectionToken<Observable<BusEvent>>('');
export const EVENT_BUS_PUSHER = new InjectionToken<
  (busEvent: BusEvent) => void
>('');

export const HOST_NAME = new InjectionToken<string>('');
