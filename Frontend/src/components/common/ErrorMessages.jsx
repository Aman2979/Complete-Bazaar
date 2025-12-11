const ErrorMessages = ({ errorMessages }) => {
  if (!errorMessages || errorMessages.length === 0) return null;
  return (
    <div className="bg-red-100 border border-red-300 mb-5 p-3 rounded-md">
      <ul className="list-disc pl-6 text-red-700 text-sm">
        {errorMessages.map((errorMsg, index) => (
          <li key={index}>{errorMsg}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorMessages;
