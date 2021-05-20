import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const errorMessage = error.message.startsWith('Unexpected token')
    ? 'Invalid Pokemon Name'
    : error.message;
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre>{errorMessage}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
const PokemonErrorBoundry = (props) => {
  return <ErrorBoundary FallbackComponent={ErrorFallback} {...props} />;
};

export default PokemonErrorBoundry;
