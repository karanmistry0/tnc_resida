function Input({ type, placeholder,...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-4 bg-form-color focus:outline-none focus:border focus:border-blue-400  w-full"
      {...props}
    />
  );
}

export default Input;
