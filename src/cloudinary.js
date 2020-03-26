import cloudinary from 'cloudinary-core';
const client = new cloudinary.Cloudinary();
export const createUrl = (publicId, cloud_name) => {
    return client.url(publicId, {cloud_name});
};