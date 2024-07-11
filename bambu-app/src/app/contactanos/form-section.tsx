"use client";
import { CustomButton } from '@/components/custom-button';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  nombre: string;
  correo: string;
  asunto: string;
  mensaje: string;
}

interface Errors {
  nombre?: string;
  correo?: string;
  asunto?: string;
  mensaje?: string;
}

const errorTextClass = "text-[#000000] text-xs font-bold py-1 px-2";
const errorBorderClass = "border-[#000000]";

export const FormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = (): boolean => {
    let tempErrors: Errors = {};
    if (!formData.nombre) tempErrors.nombre = "El nombre es obligatorio";
    if (!formData.correo) {
      tempErrors.correo = "El correo es obligatorio";
    } else if (!validateEmail(formData.correo)) {
      tempErrors.correo = "El correo no es válido";
    }
    if (!formData.asunto) tempErrors.asunto = "El asunto es obligatorio";
    if (!formData.mensaje) tempErrors.mensaje = "El mensaje es obligatorio";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Aquí se realizaría el envío del formulario
      setSuccessMessage(`Hemos recibido tu mensaje, ${formData.nombre}. Pronto nos comunicaremos contigo, ¡Gracias por contactarnos!`);
      
      setFormData({ nombre: '', correo: '', asunto: '', mensaje: '' });
      setErrors({});
    } else {
      setSuccessMessage('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setSuccessMessage('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col border-none gap-2 items-end">
        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <div className="flex flex-col w-full">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`w-full px-4 py-2 text-xs sm:text-sm border-[3px] ${errors.nombre ? errorBorderClass : ''}`}
            />
            {errors.nombre && <span className={errorTextClass}>{errors.nombre}</span>}
          </div>
          <div className="flex flex-col w-full">
            <input
              type="email"
              name="correo"
              placeholder="Correo"
              value={formData.correo}
              onChange={handleChange}
              className={`w-full px-4 py-2 text-xs sm:text-sm border-[3px]  ${errors.correo ? errorBorderClass : ''}`}
            />
            {errors.correo && <span className={errorTextClass}>{errors.correo}</span>}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <input
            type="text"
            name="asunto"
            placeholder="Agregar un asunto"
            value={formData.asunto}
            onChange={handleChange}
            className={`w-full px-4 py-2 text-xs sm:text-sm border-[3px] ${errors.asunto ? errorBorderClass : ''}`}
          />
          {errors.asunto && <span className={errorTextClass}>{errors.asunto}</span>}
        </div>
        <div className="flex flex-col w-full">
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className={`w-full px-4 py-2 h-32 text-xs sm:text-sm border-[3px]  ${errors.mensaje ? errorBorderClass : ''}`}
          />
          {errors.mensaje && <span className={errorTextClass}>{errors.mensaje}</span>}
        </div>
        {successMessage && (<p className='font-bold text-xs text-right sm:text-sm'>{successMessage}</p>)}
        <CustomButton
          text="Enviar mensaje"
          bg="#134E7D"
          bg_hover="#67B1EB"
          textColor="#ffffff"
          textColorHover="#134E7D"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};
