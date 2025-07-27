// src/pages/admin/opportunities-controls.tsx
import React, { useState, useEffect } from 'react';
import withAuth from '../../components/auth/withAuth';
import { layoutApi } from '../../lib/api';

interface Position2D {
  horizontal: number;
  vertical: number;
  lastUpdated: string;
}

const OpportunitiesControls = () => {
  const [headingPosition, setHeadingPosition] = useState<Position2D>({
    horizontal: 0,
    vertical: 0,
    lastUpdated: ''
  });
  
  const [jobsPosition, setJobsPosition] = useState<Position2D>({
    horizontal: 0,
    vertical: 0,
    lastUpdated: ''
  });
  
  const [headingSize, setHeadingSize] = useState<number>(100); // Percentage
  const [jobsSize, setJobsSize] = useState<number>(100); // Percentage
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>('');

  // Load current positions on component mount
  useEffect(() => {
    loadCurrentPositions();
    loadCurrentSizes();
  }, []);

  const loadCurrentPositions = async () => {
    try {
      setLoading(true);
      const [headingPos, jobsPos] = await Promise.all([
        layoutApi.getOpportunitiesHeadingPosition(),
        layoutApi.getOpportunitiesJobsPosition()
      ]);
      
      setHeadingPosition(headingPos);
      setJobsPosition(jobsPos);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      if (errorMessage.includes('JSON') || errorMessage.includes('DOCTYPE')) {
        setMessage('⚠️ Backend server is not running. Please start the backend server first.');
      } else {
        setMessage('Failed to load current positions. Please check the backend connection.');
      }
      console.error('Error loading positions:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadCurrentSizes = async () => {
    try {
      const [headingSize, jobsSize] = await Promise.all([
        layoutApi.getOpportunitiesHeadingSize(),
        layoutApi.getOpportunitiesJobsSize()
      ]);
      
      setHeadingSize(headingSize.size);
      setJobsSize(jobsSize.size);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      if (errorMessage.includes('JSON') || errorMessage.includes('DOCTYPE')) {
        setMessage('⚠️ Backend server is not running. Please start the backend server first.');
      } else {
        setMessage('Failed to load current sizes. Please check the backend connection.');
      }
      console.error('Error loading sizes:', error);
    }
  };

  const updateHeadingPosition = async (horizontal: number, vertical: number) => {
    try {
      setLoading(true);
      const result = await layoutApi.updateOpportunitiesHeadingPosition(horizontal, vertical);
      setHeadingPosition(result);
      setMessage('Heading position updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to update heading position');
      console.error('Error updating heading position:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateJobsPosition = async (horizontal: number, vertical: number) => {
    try {
      setLoading(true);
      const result = await layoutApi.updateOpportunitiesJobsPosition(horizontal, vertical);
      setJobsPosition(result);
      setMessage('Jobs position updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to update jobs position');
      console.error('Error updating jobs position:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetToDefaults = async () => {
    try {
      setLoading(true);
      await layoutApi.resetLayout();
      await loadCurrentPositions();
      await loadCurrentSizes();
      setMessage('Layout reset to defaults!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to reset layout');
      console.error('Error resetting layout:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateHeadingSize = async (size: number) => {
    try {
      await layoutApi.updateOpportunitiesHeadingSize(size);
      setMessage('Heading size updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to update heading size');
      console.error('Error updating heading size:', error);
    }
  };

  const updateJobsSize = async (size: number) => {
    try {
      await layoutApi.updateOpportunitiesJobsSize(size);
      setMessage('Jobs size updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to update jobs size');
      console.error('Error updating jobs size:', error);
    }
  };

  const handleHeadingHorizontalChange = (value: number) => {
    const newPosition = { ...headingPosition, horizontal: value };
    setHeadingPosition(newPosition);
    updateHeadingPosition(value, headingPosition.vertical);
  };

  const handleHeadingVerticalChange = (value: number) => {
    const newPosition = { ...headingPosition, vertical: value };
    setHeadingPosition(newPosition);
    updateHeadingPosition(headingPosition.horizontal, value);
  };

  const handleJobsHorizontalChange = (value: number) => {
    const newPosition = { ...jobsPosition, horizontal: value };
    setJobsPosition(newPosition);
    updateJobsPosition(value, jobsPosition.vertical);
  };

  const handleJobsVerticalChange = (value: number) => {
    const newPosition = { ...jobsPosition, vertical: value };
    setJobsPosition(newPosition);
    updateJobsPosition(jobsPosition.horizontal, value);
  };

  return (
    <div className="py-12 max-w-6xl mx-auto px-6">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-text-dark">Opportunities Layout Controls</h1>
        <button
          onClick={() => window.history.back()}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          ← Back
        </button>
      </div>

      {message && (
        <div className={`mb-6 p-4 rounded-lg ${message.includes('Failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Title/Heading Controls */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-text-dark mb-6 border-b pb-3">
            Title/Heading Controls
          </h2>
          
          {/* Position Controls */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-text-dark">Position</h3>
            
            {/* Horizontal Position */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Horizontal Position: {headingPosition.horizontal}
              </label>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500">Left</span>
                <input
                  type="range"
                  min="-100"
                  max="100"
                  value={headingPosition.horizontal}
                  onChange={(e) => handleHeadingHorizontalChange(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  disabled={loading}
                />
                <span className="text-xs text-gray-500">Right</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>-100</span>
                <span>0</span>
                <span>100</span>
              </div>
            </div>

            {/* Vertical Position */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vertical Position: {headingPosition.vertical}
              </label>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500">Top</span>
                <input
                  type="range"
                  min="-100"
                  max="100"
                  value={headingPosition.vertical}
                  onChange={(e) => handleHeadingVerticalChange(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  disabled={loading}
                />
                <span className="text-xs text-gray-500">Bottom</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>-100</span>
                <span>0</span>
                <span>100</span>
              </div>
            </div>
          </div>

          {/* Size Controls */}
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-medium text-text-dark">Size</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Font Size: {headingSize}%
              </label>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500">Small</span>
                <input
                  type="range"
                  min="50"
                  max="200"
                  value={headingSize}
                  onChange={(e) => {
                    const newSize = Number(e.target.value);
                    setHeadingSize(newSize);
                    updateHeadingSize(newSize);
                  }}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <span className="text-xs text-gray-500">Large</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>50%</span>
                <span>100%</span>
                <span>200%</span>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Preview:</h4>
            <div 
              className="text-2xl font-bold text-primary transition-all duration-300"
              style={{ 
                fontSize: `${headingSize}%`,
                transform: `translate(${headingPosition.horizontal * 0.5}px, ${headingPosition.vertical * 0.5}px)`
              }}
            >
              Career Opportunities
            </div>
          </div>
        </div>

        {/* Job Postings Controls */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-text-dark mb-6 border-b pb-3">
            Job Postings Controls
          </h2>
          
          {/* Position Controls */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-text-dark">Position</h3>
            
            {/* Horizontal Position */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Horizontal Position: {jobsPosition.horizontal}
              </label>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500">Left</span>
                <input
                  type="range"
                  min="-100"
                  max="100"
                  value={jobsPosition.horizontal}
                  onChange={(e) => handleJobsHorizontalChange(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  disabled={loading}
                />
                <span className="text-xs text-gray-500">Right</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>-100</span>
                <span>0</span>
                <span>100</span>
              </div>
            </div>

            {/* Vertical Position */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vertical Position: {jobsPosition.vertical}
              </label>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500">Top</span>
                <input
                  type="range"
                  min="-100"
                  max="100"
                  value={jobsPosition.vertical}
                  onChange={(e) => handleJobsVerticalChange(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  disabled={loading}
                />
                <span className="text-xs text-gray-500">Bottom</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>-100</span>
                <span>0</span>
                <span>100</span>
              </div>
            </div>
          </div>

          {/* Size Controls */}
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-medium text-text-dark">Size</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scale: {jobsSize}%
              </label>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500">Small</span>
                <input
                  type="range"
                  min="50"
                  max="150"
                  value={jobsSize}
                  onChange={(e) => {
                    const newSize = Number(e.target.value);
                    setJobsSize(newSize);
                    updateJobsSize(newSize);
                  }}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <span className="text-xs text-gray-500">Large</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>50%</span>
                <span>100%</span>
                <span>150%</span>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Preview:</h4>
            <div 
              className="transition-all duration-300"
              style={{ 
                transform: `translate(${jobsPosition.horizontal * 0.5}px, ${jobsPosition.vertical * 0.5}px) scale(${jobsSize / 100})`
              }}
            >
              <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-semibold text-text-dark mb-1">Sample Job Title</h3>
                <p className="text-sm text-gray-600 mb-2">Company Name - Location</p>
                <p className="text-xs text-gray-500">Job description preview...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-4 justify-center">
        <button
          onClick={resetToDefaults}
          disabled={loading}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
        >
          {loading ? 'Resetting...' : 'Reset to Defaults'}
        </button>
        
        <button
          onClick={() => {
            loadCurrentPositions();
            loadCurrentSizes();
          }}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
        >
          {loading ? 'Refreshing...' : 'Refresh Positions'}
        </button>
      </div>

      {/* Info Panel */}
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">How to Use These Controls</h3>
        <ul className="text-blue-700 space-y-2 text-sm">
          <li>• <strong>Position sliders:</strong> Move the title and job postings around the page</li>
          <li>• <strong>Size sliders:</strong> Adjust the font size of titles and scale of job cards</li>
          <li>• <strong>Preview:</strong> See a live preview of your changes in the control panels</li>
          <li>• <strong>Reset:</strong> Return all settings to their default values</li>
          <li>• Changes are applied immediately and saved automatically</li>
        </ul>
      </div>
    </div>
  );
};

export default withAuth(OpportunitiesControls);
