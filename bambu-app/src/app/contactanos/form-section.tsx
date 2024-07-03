export const FormSection = () => {

  return (
    <div className="flex flex-col border-none  gap-2">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full px-4 py-2 text-xs sm:text-sm"
        />
        <input
          type="email"
          placeholder="Correo"
          className="w-full px-4 py-2 text-xs sm:text-sm"
        />
      </div>
      <input
        type="text"
        placeholder="Agregar un asunto"
        className="px-4 py-2 text-xs sm:text-sm"
      />
      <textarea placeholder="Mensaje" className="px-4 py-2 h-32 text-xs sm:text-sm" />
    </div>
  );
};
