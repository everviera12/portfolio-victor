import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactForm() {
    const formRef = useRef(null);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if (data.nickname || data.website) return;

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setSent(true);
            setTimeout(() => setSent(false), 3000);
            setError(false);
            reset();
        } catch (err) {
            console.error("Error al enviar:", err);
            setError(true);
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-5xl mx-auto text-left space-y-6 bg-black text-white"
        >
            {/* Honeypots */}
            <div className="hidden">
                <input type="text" {...register("nickname")} autoComplete="off" tabIndex={-1} />
                <input type="text" {...register("website")} autoComplete="off" tabIndex={-1} />
            </div>

            {/* Nombre */}
            <div>
                <label htmlFor="fullname" className="block text-sm mb-1">Nombre *</label>
                <input
                    type="text"
                    id="fullname"
                    {...register("fullname", {
                        required: "El nombre es obligatorio",
                        pattern: {
                            value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                            message: "Solo se permiten letras y espacios",
                        },
                    })}
                    className="w-full border-b border-white bg-transparent text-sm px-1 py-2 focus:outline-none"
                />
                {errors.fullname && <p className="text-xs text-red-500 mt-1">{errors.fullname.message}</p>}
            </div>

            {/* Teléfono + Correo en la misma fila */}
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
                {/* Teléfono */}
                <div className="w-full">
                    <label htmlFor="phone" className="block text-sm mb-1">Teléfono</label>
                    <input
                        type="tel"
                        id="phone"
                        {...register("phone", {
                            pattern: {
                                value: /^\d{7,15}$/,
                                message: "Solo se permiten números (mín. 7 dígitos)",
                            },
                        })}
                        className="w-full border-b border-white bg-transparent text-sm px-1 py-2 focus:outline-none"
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                </div>

                {/* Correo */}
                <div className="w-full">
                    <label htmlFor="mail" className="block text-sm mb-1">Correo electrónico *</label>
                    <input
                        type="email"
                        id="mail"
                        {...register("mail", {
                            required: "El correo es obligatorio",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Correo no válido",
                            },
                        })}
                        className="w-full border-b border-white bg-transparent text-sm px-1 py-2 focus:outline-none"
                    />
                    {errors.mail && <p className="text-xs text-red-500 mt-1">{errors.mail.message}</p>}
                </div>
            </div>

            {/* Mensaje */}
            <div>
                <label htmlFor="message" className="block text-sm mb-1">Mensaje *</label>
                <textarea
                    id="message"
                    rows={5}
                    {...register("message", {
                        required: "Por favor escribe un mensaje",
                        validate: (value) => value.trim().length > 0 || "El mensaje no puede estar vacío",
                    })}
                    className="w-full border-b border-white bg-transparent text-sm px-1 py-2 focus:outline-none resize-none"
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
            </div>

            {/* Mensaje de estado */}
            {sent && <p className="text-sm text-green-400">¡Mensaje enviado con éxito!</p>}
            {error && <p className="text-sm text-red-500">Hubo un error al enviar el mensaje.</p>}

            <button
                type="submit"
                className="w-full border cursor-pointer border-white py-2 text-sm font-medium uppercase bg-transparent hover:bg-white hover:text-black transition-all duration-300"
            >
                Enviar
            </button>
        </form>
    );
}
