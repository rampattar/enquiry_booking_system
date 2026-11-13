import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

// Interceptor to attach JWT token if present
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('smc_admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor to handle global errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const customError = {
      message: error.response?.data?.message || error.message || 'Something went wrong',
      errors: error.response?.data?.errors || null,
      status: error.response?.status,
    };
    return Promise.reject(customError);
  }
);

// --- Public Endpoints ---

/**
 * Submit an appointment enquiry
 */
export const submitEnquiry = async (formData) => {
  const response = await apiClient.post('/enquiries', formData);
  return response.data;
};

/**
 * Get approved public services
 */
export const getServices = async () => {
  const response = await apiClient.get('/services');
  return response.data;
};

/**
 * Get public doctor profile
 */
export const getDoctorProfile = async () => {
  const response = await apiClient.get('/profile');
  return response.data;
};

// --- Enquiry Management Endpoints ---

/**
 * List enquiries with search, filters, pagination
 */
export const getEnquiries = async (params = {}) => {
  const response = await apiClient.get('/enquiries', { params });
  return response.data;
};

/**
 * Get single enquiry details
 */
export const getEnquiryById = async (id) => {
  const response = await apiClient.get(`/enquiries/${id}`);
  return response.data;
};

/**
 * Update enquiry status
 */
export const updateEnquiryStatus = async (id, status) => {
  const response = await apiClient.patch(`/enquiries/${id}/status`, { status });
  return response.data;
};

/**
 * Update follow-up date
 */
export const updateFollowUpDate = async (id, followUpDate) => {
  const response = await apiClient.patch(`/enquiries/${id}/follow-up`, { followUpDate });
  return response.data;
};

/**
 * Assign enquiry to staff member
 */
export const assignEnquiry = async (id, assignedTo) => {
  const response = await apiClient.patch(`/enquiries/${id}/assign`, { assignedTo });
  return response.data;
};

/**
 * Record a call attempt
 */
export const recordCallAttempt = async (id, attemptData) => {
  const response = await apiClient.post(`/enquiries/${id}/call-attempt`, attemptData);
  return response.data;
};

/**
 * Add internal operational note
 */
export const addInternalNote = async (id, noteData) => {
  const response = await apiClient.patch(`/enquiries/${id}/notes`, noteData);
  return response.data;
};

/**
 * Get dashboard overview metrics
 */
export const getDashboardSummary = async () => {
  const response = await apiClient.get('/dashboard/summary');
  return response.data;
};

export default apiClient;

