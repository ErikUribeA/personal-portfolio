'use client'
import React, { useState } from 'react';
import { useTranslations } from "next-intl";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const translate = useTranslations('contact');
    const [enviando, setEnviando] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '', isError: false });
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setEnviando(true);
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                    to_name: process.env.NEXT_PUBLIC_TO_NAME,
                    email_destino: process.env.NEXT_PUBLIC_EMAIL_DESTINO
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC!
            );
            setToast({ show: true, message: translate('successMessage'), isError: false });
            reset();
        } catch (error) {
            console.error('Error al enviar el email:', error);
            setToast({ show: true, message: translate('errorMessage'), isError: true });
        }
        setEnviando(false);
        setTimeout(() => setToast({ show: false, message: '', isError: false }), 5000);
    };

    return (
        <section className="min-h-screen flex items-center">
            <div className="w-full max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {translate('title')}
                </h2>
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8">
                    <h3 className="text-2xl font-semibold text-pink-400 mb-2">{translate('subTitle')}</h3>
                    <p className="text-gray-300 mb-6">{translate('description')}</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                    {translate('input1.title')}
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    {...register("name", { required: translate('fieldRequired') })}
                                    className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder={translate('input1.placeholder')}
                                />
                                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                    {translate('input2.title')}
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email", {
                                        required: translate('fieldRequired'),
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: translate('invalidEmail')
                                        }
                                    })}
                                    className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder={translate('input2.placeholder')}
                                />
                                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                {translate('input3.title')}
                            </label>
                            <textarea
                                id="message"
                                {...register("message", { required: translate('fieldRequired') })}
                                rows={4}
                                className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                placeholder={translate('input3.placeholder')}
                            ></textarea>
                            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                        </div>
                        <button
                            type="submit"
                            disabled={enviando}
                            className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 ${enviando ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {enviando ? translate('sending') : translate('button')}
                        </button>
                    </form>
                </div>
            </div>
            {toast.show && (
                <div className={`fixed bottom-4 right-4 px-4 py-2 rounded-md text-white ${toast.isError ? 'bg-red-500' : 'bg-green-500'} transition-all duration-300 transform translate-y-0 opacity-100`}>
                    {toast.message}
                </div>
            )}
        </section>
    );
}