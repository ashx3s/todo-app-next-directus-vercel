export default function Button({ text, onClick, colorStyle }) {
  const styles = "text-white px-4 py-2 rounded-lg cursor-pointer";
  const colorOptions = {
    primary: "bg-blue-500 hover:bg-blue-700",
    secondary: "bg-gray-500 hover:bg-gray-700",
    error: "bg-red-500 hover:bg-red-700",
  };
  const selectedColor = colorOptions[colorStyle] || colorOptions.primary;
  return (
    <button onClick={onClick} className={` ${selectedColor} ${styles} `}>
      {text}
    </button>
  );
}
