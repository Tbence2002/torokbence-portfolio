function ErrorFallback({error, resetErrorBoundary}) {
    return (
        <div className="alert">
            <p>Something went wrong:</p>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    )
}
export default ErrorFallback;