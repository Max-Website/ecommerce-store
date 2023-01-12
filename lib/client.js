import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'wpptz920',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.SANITY_PUBLIC_TOKEN
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);