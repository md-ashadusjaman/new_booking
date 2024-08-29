// uploadCloudinary.js
const upload_preset = import.meta.env.VITE_PROJECT_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_PROJECT_CLOUD_NAME;


// Log to verify environment variables are set
console.log('Upload Preset:', upload_preset); // This should log your upload preset
console.log('Cloud Name:', cloud_name);       // This should log your cloud name

const uploadImageToCloudinary = async (file) => {
    try {
        const uploadData = new FormData();
        uploadData.append('file', file);
        uploadData.append('upload_preset', upload_preset);

        if (!cloud_name) {
            throw new Error('Cloud name is not defined. Check your environment variables.');
        }

        const res = await fetch(
            `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
            {
                method: 'POST',
                body: uploadData,
            }
        );

        if (!res.ok) {
            throw new Error(`Failed to upload image: ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error uploading image:', error);
        return { error: error.message };
    }
};

export default uploadImageToCloudinary;
