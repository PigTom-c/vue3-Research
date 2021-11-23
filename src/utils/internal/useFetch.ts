import { ref, reactive, effect } from 'vue';

type useFetchType = {
  response: Response | null | undefined;
  error: Error;
  isLoding: boolean;
};

export default function useFetch(request: RequestInfo, init?: RequestInit): useFetchType {
  // const [response, setResponse] = ref<null | Response>();
  // const [error, setError] = ref<null | Error>();
  // const [isLoding, setIsLoding] = ref(false);
  interface State {
    response: null | Response;
    error: null | Error;
    isLoding: boolean;
  }
  const state: State = reactive({
    response: null,
    error: null,
    isLoding: false,
  });
  effect(async () => {
    const abortController = new AbortController();
    try {
      const rpd = await fetch(request, {
        ...init,
        signal: abortController.signal,
      });
      state.response = await rpd?.json();
      state.isLoding = false;
    } catch (e) {
      if (e.name === 'AbortError') {
        return;
      }
      state.error = e;
      state.isLoding = false;
    }
  });
  return [state];
}
