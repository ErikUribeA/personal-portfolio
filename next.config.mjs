import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const intl = createNextIntlPlugin()
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com']
    }
};

export default intl(nextConfig);
