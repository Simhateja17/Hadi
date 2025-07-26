// lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface LayoutPosition {
  position: number;
  lastUpdated: string;
}

export interface Layout2DPosition {
  horizontal: number;
  vertical: number;
  lastUpdated: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export const layoutApi = {
  // Get blog grid position
  getBlogGridPosition: async (): Promise<LayoutPosition> => {
    const response = await fetch(`${API_BASE_URL}/api/layout/blog-grid-position`);
    const data: ApiResponse<LayoutPosition> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.message || 'Failed to fetch layout position');
    }
    
    return data.data;
  },

  // Update blog grid position
  updateBlogGridPosition: async (position: number): Promise<LayoutPosition> => {
    const response = await fetch(`${API_BASE_URL}/api/layout/blog-grid-position`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ position })
    });
    
    const data: ApiResponse<LayoutPosition> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.message || 'Failed to update layout position');
    }
    
    return data.data;
  },

  // Get blog grid position (2D) - NEW VERSION
  getBlogGridPosition2D: async (): Promise<Layout2DPosition> => {
    const response = await fetch(`${API_BASE_URL}/api/layout/blog-grid-position-2d`);
    const data: ApiResponse<Layout2DPosition> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.message || 'Failed to fetch blog grid position');
    }
    
    return data.data;
  },

  // Update blog grid position (2D) - NEW VERSION
  updateBlogGridPosition2D: async (horizontal: number, vertical: number): Promise<Layout2DPosition> => {
    const response = await fetch(`${API_BASE_URL}/api/layout/blog-grid-position-2d`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ horizontal, vertical })
    });
    
    const data: ApiResponse<Layout2DPosition> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.message || 'Failed to update blog grid position');
    }
    
    return data.data;
  },

  // Get blog heading position
  getBlogHeadingPosition: async (): Promise<Layout2DPosition> => {
    const response = await fetch(`${API_BASE_URL}/api/layout/blog-heading-position`);
    const data: ApiResponse<Layout2DPosition> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.message || 'Failed to fetch blog heading position');
    }
    
    return data.data;
  },

  // Update blog heading position
  updateBlogHeadingPosition: async (horizontal: number, vertical: number): Promise<Layout2DPosition> => {
    const response = await fetch(`${API_BASE_URL}/api/layout/blog-heading-position`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ horizontal, vertical })
    });
    
    const data: ApiResponse<Layout2DPosition> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.message || 'Failed to update blog heading position');
    }
    
    return data.data;
  },

  // Get opportunities grid position
  getOpportunitiesGridPosition: async (): Promise<LayoutPosition> => {
    const response = await fetch(`${API_BASE_URL}/api/layout/opportunities-grid-position`);
    const data: ApiResponse<LayoutPosition> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.message || 'Failed to fetch opportunities layout position');
    }
    
    return data.data;
  },

  // Update opportunities grid position
  updateOpportunitiesGridPosition: async (position: number): Promise<LayoutPosition> => {
    const response = await fetch(`${API_BASE_URL}/api/layout/opportunities-grid-position`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ position })
    });
    
    const data: ApiResponse<LayoutPosition> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.message || 'Failed to update opportunities layout position');
    }
    
    return data.data;
  },

  // Get opportunities heading position
  getOpportunitiesHeadingPosition: async (): Promise<Layout2DPosition> => {
    const response = await fetch(`${API_BASE_URL}/api/layout/opportunities-heading-position`);
    const data: ApiResponse<Layout2DPosition> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.message || 'Failed to fetch opportunities heading position');
    }
    
    return data.data;
  },

  // Update opportunities heading position
  updateOpportunitiesHeadingPosition: async (horizontal: number, vertical: number): Promise<Layout2DPosition> => {
    const response = await fetch(`${API_BASE_URL}/api/layout/opportunities-heading-position`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ horizontal, vertical })
    });
    
    const data: ApiResponse<Layout2DPosition> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.message || 'Failed to update opportunities heading position');
    }
    
    return data.data;
  },

  // Get opportunities jobs position
  getOpportunitiesJobsPosition: async (): Promise<Layout2DPosition> => {
    const response = await fetch(`${API_BASE_URL}/api/layout/opportunities-jobs-position`);
    const data: ApiResponse<Layout2DPosition> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.message || 'Failed to fetch opportunities jobs position');
    }
    
    return data.data;
  },

  // Update opportunities jobs position
  updateOpportunitiesJobsPosition: async (horizontal: number, vertical: number): Promise<Layout2DPosition> => {
    const response = await fetch(`${API_BASE_URL}/api/layout/opportunities-jobs-position`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ horizontal, vertical })
    });
    
    const data: ApiResponse<Layout2DPosition> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.message || 'Failed to update opportunities jobs position');
    }
    
    return data.data;
  },

  // Reset layout to default
  resetLayout: async (): Promise<{ blogGridPosition: number; opportunitiesGridPosition: number; opportunitiesHeadingHorizontal: number; opportunitiesHeadingVertical: number; opportunitiesJobsHorizontal: number; opportunitiesJobsVertical: number; lastUpdated: string }> => {
    const response = await fetch(`${API_BASE_URL}/api/layout/reset`, {
      method: 'PUT'
    });
    
    const data: ApiResponse<{ blogGridPosition: number; opportunitiesGridPosition: number; opportunitiesHeadingHorizontal: number; opportunitiesHeadingVertical: number; opportunitiesJobsHorizontal: number; opportunitiesJobsVertical: number; lastUpdated: string }> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.message || 'Failed to reset layout');
    }
    
    return data.data;
  }
};
