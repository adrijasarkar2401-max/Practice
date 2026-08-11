function ProgressBar() {
  return (
    <div className="mb-8">
      <input
        type="range"
        min="0"
        max="100"
        value="0"
        readOnly
        className="w-full cursor-pointer accent-blue-600"
      />

      <div className="mt-2 flex justify-between text-sm text-gray-700">
        <span>0:00</span>
        <span>0:00</span>
      </div>
    </div>
  );
}

export default ProgressBar;