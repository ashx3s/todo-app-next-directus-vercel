export default function Button({ text, onClick, colorStyle }) {
  const colorOptions = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    error: "bg-red-500 hover:bg-red-700 text-white",
  };
  const selectedColor = colorOptions[colorStyle] || colorOptions.primary;
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${selectedColor} cursor-pointer`}
    >
      {text}
    </button>
  );
}
