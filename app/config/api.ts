export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const API_ENDPOINTS = {
  causes: `${API_BASE_URL}/api/dcf/causes`,
  donations: `${API_BASE_URL}/api/dcf/donations`,
} as const;

export const API_FILTERS = {
  validatedCauses: '?filters[state][$eq]=Validée',
} as const;

export const fetchConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
} as const; 