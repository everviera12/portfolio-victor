import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";

export default function ContactForm() {
    const { t } = useTranslation();
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
            className="w-full max-w-6xl mx-auto text-left space-y-6 rounded-xl text-white p-6 lg:p-0"
        >
            {/* Honeypots */}
            <div className="hidden">
                <input type="text" {...register("nickname")} autoComplete="off" tabIndex={-1} />
                <input type="text" {...register("website")} autoComplete="off" tabIndex={-1} />
            </div>

            {/* Fullname */}
            <div>
                <label htmlFor="fullname" className="block text-sm mb-1">
                    {t("form_data.fullname_label")} *
                </label>
                <input
                    type="text"
                    id="fullname"
                    {...register("fullname", { required: t("form_data.fullname_label") + " is required" })}
                    className="w-full border-b border-white bg-transparent text-white text-sm px-1 py-2 focus:outline-none "
                />
                {errors.fullname && <p className="text-xs text-victor-beige font-bricolage-medium mt-2">{errors.fullname.message}</p>}
            </div>

            {/* Phone number + Email */}
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
                <div className="w-full">
                    <label htmlFor="phone" className="block text-sm mb-1">
                        {t("form_data.phone_label")}
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        {...register("phone")}
                        className="w-full border-b border-white bg-transparent text-white text-sm px-1 py-2 focus:outline-none "
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="mail" className="block text-sm mb-1">
                        {t("form_data.mail_label")} *
                    </label>
                    <input
                        type="email"
                        id="mail"
                        {...register("mail", { required: t("form_data.mail_label") + " is required" })}
                        className="w-full border-b border-white bg-transparent text-white text-sm px-1 py-2 focus:outline-none "
                    />
                    {errors.mail && <p className="text-xs text-victor-beige font-bricolage-medium mt-2">{errors.mail.message}</p>}
                </div>
            </div>

            {/* Service Select */}
            <div className="relative w-full">
                <select
                    {...register("service", { required: true })}
                    className="w-full border border-white bg-transparent text-white text-sm p-2 focus:outline-none  appearance-none"
                >
                    <option value="">{t("form_data.services_label")}</option>
                    {t("form_data.services", { returnObjects: true }).map((service, idx) => (
                        <option key={idx} value={service} className="bg-black text-white">
                            {service}
                        </option>
                    ))}
                </select>

                {/* Flecha personalizada */}
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-white">
                    <Icon className="size-4" name="arrow-dropdown" />
                </div>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm mb-1">
                    {t("form_data.message_label")} *
                </label>
                <textarea
                    id="message"
                    rows={5}
                    {...register("message", { required: t("form_data.message_label") + " is required" })}
                    className="w-full border-b border-white bg-transparent text-white text-sm px-1 py-2 focus:outline-none  resize-none"
                />
                {errors.message && <p className="text-xs text-victor-beige font-bricolage-medium mt-2">{errors.message.message}</p>}
            </div>

            {sent && (
                <p className="text-sm font-archivo-black text-[#1AD1A5]">
                    {t("form_data.success_message")}
                </p>
            )}

            {error && (
                <p className="text-sm font-archivo-black text-[#FF3366]">
                    {t("form_data.error_message")}
                </p>
            )}

            <button
                type="submit"
                className="w-full py-3 uppercase transition-all duration-300 bg-victor-skyblue text-victor-black"
            >
                {t("form_data.submit_text")}
            </button>
        </form>
    );
}
