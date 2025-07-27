/**
 * Utility functions for API URL management
 */

/**
 * Get the base API URL based on environment
 */
export const getApiBaseUrl = (): string => {
    // For client-side rendering, use NEXT_PUBLIC_API_URL
    if (typeof window !== 'undefined') {
        return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
    }
    
    // For server-side rendering (getStaticProps, getServerSideProps, API routes)
    return process.env.NEXT_PUBLIC_API_URL || process.env.BACKEND_URL || 'http://localhost:3001';
};

/**
 * Get the full API URL for a specific endpoint
 */
export const getApiUrl = (endpoint: string): string => {
    const baseUrl = getApiBaseUrl();
    // Remove leading slash from endpoint if present
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    return `${baseUrl}/${cleanEndpoint}`;
};

/**
 * Get the backend URL for API routes (server-side only)
 */
export const getBackendUrl = (): string => {
    return process.env.BACKEND_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
};

/**
 * Check if an image URL is absolute or needs to be prefixed with API base URL
 */
export const getImageUrl = (imageUrl: string | null | undefined): string => {
    if (!imageUrl) return '';
    
    // If it's already an absolute URL, return as is
    if (imageUrl.startsWith('http') || imageUrl.startsWith('//')) {
        return imageUrl;
    }
    
    // If it's a relative URL, prefix with API base URL
    const baseUrl = getApiBaseUrl();
    return `${baseUrl}${imageUrl.startsWith('/') ? imageUrl : '/' + imageUrl}`;
};

const apiUtils = {
    getApiBaseUrl,
    getApiUrl,
    getBackendUrl,
    getImageUrl,
};

export default apiUtils;
