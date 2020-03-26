import cloudinary from 'cloudinary';

export const createUrl = (publicId, cloud_name) => {
    return cloudinary.v2.url(publicId, {cloud_name});
};