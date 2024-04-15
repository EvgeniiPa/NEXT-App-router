export default function Button(text: any, fn: any) {
  return (
    <button
      className="flex items-center justify-center border-gray-950 border-2 rounded h-36 w-154"
      onClick={fn}
    >
      <span className="uppercase">{text}</span>
    </button>
  );
}
