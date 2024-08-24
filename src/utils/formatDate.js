// utils/formatDate.js

export const formatDate = (date, config) => {
    const defaultOptions = {
        day: "2-digit",    // Corrected value for day
        month: "short",    // Valid values: "2-digit", "numeric", "narrow", "short", "long"
        year: "numeric"    // Valid values: "2-digit", "numeric"
    };
    const options = config ? config : defaultOptions;

    return new Date(date).toLocaleDateString("en-US", options);
};
