import type { RouteLocationRaw, Router } from 'vue-router';
import { useRouter } from 'vue-router';

export type PathAsPageEnum<T> = T extends { path: string } ? T & { path: string } : T;
export type RouteLocationRawEx = PathAsPageEnum<RouteLocationRaw>;

export function useGo(_router?: Router) {
  const { push, replace } = _router || useRouter();
  function go(opt: RouteLocationRawEx = '/textra', isReplace = false) {
    if (!opt) {
      return;
    }
    isReplace ? replace(opt).catch(handleError) : push(opt).catch(handleError);
  }
  return go;
}

function handleError(e: Error) {
  console.error(e);
}
