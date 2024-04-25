export default function TelephoneInput({ value, onFocus }) {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <label className="text-gray-500 block mb-2">Telephone</label>
      <input
        readOnly
        value={value}
        onFocus={onFocus}
        className=" text-black border border-gray-300 outline-offset-2 outline-2   w-[300px] h-[50px] focus:outline-2 focus:ring-gray-500 outline-none focus:ring-offset-2 focus:ring-1"
      />
    </div>
  );
}
