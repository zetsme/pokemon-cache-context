import { useCallback, useLayoutEffect, useReducer, useRef } from 'react';

const useSafeDispatch = (dispatch) => {
  const mounted = useRef(false);

  useLayoutEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);

  return useCallback(
    (...args) => {
      if (mounted.current) {
        dispatch(...args);
      }
    },
    [dispatch]
  );
};

const asyncReducer = (state, action) => {
  switch (action.type) {
    case 'pending':
      return { status: 'pending', data: null, error: null };
    case 'resolved':
      return { status: 'resolved', data: action.data, error: null };
    case 'rejected':
      return { status: 'rejected', data: null, error: action.error };
    default:
      throw new Error(`INhandled actio type: ${action.type}`);
  }
};

const useAsync = (initialState) => {
  const [state, unsafeDispatch] = useReducer(asyncReducer, {
    status: 'idle',
    data: null,
    error: null,
    ...initialState,
  });

  const dispatch = useSafeDispatch(unsafeDispatch);

  const { data, error, status } = state;

  const run = useCallback(
    (promise) => {
      dispatch({ type: 'pending' });
      promise.then(
        (data) => {
          dispatch({ type: 'resolved', data });
        },
        (error) => {
          dispatch({ type: 'rejected', error });
        }
      );
    },
    [dispatch]
  );

  const setData = useCallback((data) => dispatch({ type: 'resolved', data }), [dispatch]);
  const setError = useCallback((error) => dispatch({ type: 'rejected', error }), [dispatch]);

  return {
    setData,
    setError,
    error,
    status,
    data,
    run,
  };
};

export default useAsync;
