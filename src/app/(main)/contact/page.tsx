import { useTranslations } from "next-intl"

export default function Contact() {
    const translate = useTranslations('contact')

    return (
        <section className="min-h-screen flex items-center">
            <div className="w-full max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> {translate('title')} </h2>
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8">
                    <h3 className="text-2xl font-semibold text-pink-400 mb-2"> {translate('subTitle')} </h3>
                    <p className="text-gray-300 mb-6"> {translate('description')} </p>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1"> {translate('input1.title')} </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder={translate('input1.placeholder')}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1"> {translate('input2.title')} </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder={translate('input2.placeholder')}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1"> {translate('input3.title')} </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                placeholder={translate('input3.placeholder')}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
                        >
                            {translate('button')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}