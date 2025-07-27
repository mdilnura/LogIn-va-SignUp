export default function FormInput({ label, type, name, placeholder }) {
  return (
    <div className="w-full">
      <span className="text-xl">{label}</span>
      <input
        className="w-full mt-2 border border-green-600 px-3 py-2 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}
