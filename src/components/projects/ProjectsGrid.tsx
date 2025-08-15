"use client"

import React, { useState, useEffect } from 'react';
import { Project, projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

interface ProjectsGridProps {
  onProjectSelect?: (project: Project) => void;
}

type FilterType = 'all' | 'category' | 'status' | 'technology' | 'threat';
type SortType = 'newest' | 'oldest' | 'complexity' | 'satisfaction';

export default function ProjectsGrid({ onProjectSelect }: ProjectsGridProps) {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [activeFilterValue, setActiveFilterValue] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortType>('newest');
  const [searchTerm, setSearchTerm] = useState('');
  const [scanningProjects, setScanningProjects] = useState(false);

  // Filtering and sorting logic
  useEffect(() => {
    let filtered = [...projects];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.cyberpunkName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply category/status/threat filters
    if (activeFilter !== 'all' && activeFilterValue !== 'all') {
      switch (activeFilter) {
        case 'category':
          filtered = filtered.filter(p => p.category === activeFilterValue);
          break;
        case 'status':
          filtered = filtered.filter(p => p.status === activeFilterValue);
          break;
        case 'threat':
          filtered = filtered.filter(p => p.threatLevel === activeFilterValue);
          break;
        case 'technology':
          filtered = filtered.filter(p => 
            p.technologies.some(tech => tech.name === activeFilterValue)
          );
          break;
      }
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
        break;
      case 'complexity':
        filtered.sort((a, b) => b.complexity - a.complexity);
        break;
      case 'satisfaction':
        filtered.sort((a, b) => b.clientSatisfaction - a.clientSatisfaction);
        break;
    }

    // Simulate scanning animation
    setScanningProjects(true);
    setTimeout(() => {
      setFilteredProjects(filtered);
      setScanningProjects(false);
    }, 300);
  }, [activeFilter, activeFilterValue, sortBy, searchTerm]);

  const handleFilterChange = (filterType: FilterType, value: string) => {
    setActiveFilter(filterType);
    setActiveFilterValue(value);
  };

  const clearFilters = () => {
    setActiveFilter('all');
    setActiveFilterValue('all');
    setSearchTerm('');
  };

  // Get unique values for filter options
  const categories = [...new Set(projects.map(p => p.category))];
  const statuses = [...new Set(projects.map(p => p.status))];
  const threatLevels = [...new Set(projects.map(p => p.threatLevel))];
  const technologies = [...new Set(projects.flatMap(p => p.technologies.map(t => t.name)))];

  const getFilterColor = (filterType: FilterType) => {
    switch (filterType) {
      case 'category': return 'cyan';
      case 'status': return 'green';
      case 'threat': return 'red';
      case 'technology': return 'purple';
      default: return 'gray';
    }
  };

  const getColorClass = (color: string, type: 'text' | 'border' | 'bg') => {
    const colorMap: Record<string, Record<string, string>> = {
      cyan: { text: 'text-cyan-400', border: 'border-cyan-400', bg: 'bg-cyan-400' },
      purple: { text: 'text-purple-400', border: 'border-purple-400', bg: 'bg-purple-400' },
      pink: { text: 'text-pink-400', border: 'border-pink-400', bg: 'bg-pink-400' },
      green: { text: 'text-green-400', border: 'border-green-400', bg: 'bg-green-400' },
      yellow: { text: 'text-white', border: 'border-yellow-400', bg: 'bg-yellow-400' },
      blue: { text: 'text-blue-400', border: 'border-blue-400', bg: 'bg-blue-400' },
      red: { text: 'text-red-400', border: 'border-red-400', bg: 'bg-red-400' },
      orange: { text: 'text-orange-400', border: 'border-orange-400', bg: 'bg-orange-400' },
      gray: { text: 'text-gray-400', border: 'border-gray-400', bg: 'bg-gray-400' }
    };
    return colorMap[color]?.[type] || colorMap.gray[type];
  };

  return (
    <section className="py-16 bg-gray-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(6, 182, 212, 0.3) 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Control Panel */}
        <div className="bg-gray-900 border border-gray-700 p-4 sm:p-6 mb-6 sm:mb-8"
             style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}>
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-900 border border-purple-400 flex items-center justify-center mr-3"
                   style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }}>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-400 animate-pulse" />
              </div>
              <h2 className="text-purple-400 font-mono font-bold text-base sm:text-xl">PROJECT_FILTER_MATRIX</h2>
            </div>
            
            <div className="flex items-center justify-between sm:justify-end space-x-4">
              <div className="text-gray-400 font-mono text-xs sm:text-sm">
                RESULTS: <span className="text-cyan-400">{filteredProjects.length}</span>
              </div>
              {(activeFilter !== 'all' || searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="px-3 py-1 bg-red-400 bg-opacity-20 border border-red-400 text-red-400 hover:bg-red-400 hover:text-gray-900 transition-all duration-300 font-mono text-xs"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                >
                  CLEAR_FILTERS
                </button>
              )}
            </div>
          </div>

          {/* Search */}
          <div className="mb-6">
            <label className="block text-cyan-400 font-mono text-xs sm:text-sm mb-2">NEURAL_SEARCH:</label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search projects, technologies, descriptions..."
                className="w-full bg-gray-800 border border-gray-600 text-gray-100 font-mono text-sm px-4 py-3 focus:outline-none focus:border-cyan-400 transition-colors"
                style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Category Filter */}
            <div>
              <label className="block text-cyan-400 font-mono text-xs mb-2">CATEGORY:</label>
              <select
                value={activeFilter === 'category' ? activeFilterValue : 'all'}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 text-gray-100 font-mono text-sm px-3 py-2 focus:outline-none focus:border-cyan-400"
              >
                <option value="all">ALL_CATEGORIES</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category.toUpperCase()}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-green-400 font-mono text-xs mb-2">STATUS:</label>
              <select
                value={activeFilter === 'status' ? activeFilterValue : 'all'}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 text-gray-100 font-mono text-sm px-3 py-2 focus:outline-none focus:border-green-400"
              >
                <option value="all">ALL_STATUS</option>
                {statuses.map(status => (
                  <option key={status} value={status}>{status.toUpperCase()}</option>
                ))}
              </select>
            </div>

            {/* Threat Level Filter */}
            <div>
              <label className="block text-red-400 font-mono text-xs mb-2">THREAT_LEVEL:</label>
              <select
                value={activeFilter === 'threat' ? activeFilterValue : 'all'}
                onChange={(e) => handleFilterChange('threat', e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 text-gray-100 font-mono text-sm px-3 py-2 focus:outline-none focus:border-red-400"
              >
                <option value="all">ALL_THREATS</option>
                {threatLevels.map(threat => (
                  <option key={threat} value={threat}>{threat}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-purple-400 font-mono text-xs mb-2">SORT_BY:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortType)}
                className="w-full bg-gray-800 border border-gray-600 text-gray-100 font-mono text-sm px-3 py-2 focus:outline-none focus:border-purple-400"
              >
                <option value="newest">NEWEST_FIRST</option>
                <option value="oldest">OLDEST_FIRST</option>
                <option value="complexity">COMPLEXITY_HIGH</option>
                <option value="satisfaction">SATISFACTION_HIGH</option>
              </select>
            </div>
          </div>

          {/* Technology Filter Pills */}
          <div>
            <label className="block text-purple-400 font-mono text-xs mb-3">TECHNOLOGY_STACK:</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleFilterChange('all', 'all')}
                className={`px-3 py-1 font-mono text-xs border transition-all duration-300 ${
                  activeFilter === 'all'
                    ? 'bg-gray-400 bg-opacity-20 border-gray-400 text-gray-400'
                    : 'bg-gray-700 border-gray-600 text-gray-400 hover:border-gray-400'
                }`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
              >
                ALL_TECH
              </button>
              {technologies.slice(0, 10).map(tech => (
                <button
                  key={tech}
                  onClick={() => handleFilterChange('technology', tech)}
                  className={`px-3 py-1 font-mono text-xs border transition-all duration-300 ${
                    activeFilter === 'technology' && activeFilterValue === tech
                      ? 'bg-purple-400 bg-opacity-20 border-purple-400 text-purple-400'
                      : 'bg-gray-700 border-gray-600 text-gray-400 hover:border-purple-400 hover:text-purple-400'
                  }`}
                  style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scanning Animation */}
        {scanningProjects && (
          <div className="bg-gray-900 border border-cyan-400 p-6 sm:p-8 mb-6 sm:mb-8 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              <span className="text-cyan-400 font-mono text-sm sm:text-lg">SCANNING_PROJECT_DATABASE...</span>
            </div>
          </div>
        )}

        {/* Results Header */}
        {!scanningProjects && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <h3 className="text-cyan-400 font-mono font-bold text-lg sm:text-xl">PROJECT_ARCHIVE</h3>
              <div className="text-gray-400 font-mono text-xs sm:text-sm">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'PROJECT' : 'PROJECTS'} FOUND
              </div>
            </div>
            
            {/* Active Filters Display */}
            {(activeFilter !== 'all' || searchTerm) && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-400 font-mono text-xs">ACTIVE_FILTERS:</span>
                {searchTerm && (
                  <span className="px-2 py-1 bg-cyan-400 bg-opacity-20 border border-cyan-400 text-cyan-400 font-mono text-xs">
                    SEARCH: {searchTerm}
                  </span>
                )}
                {activeFilter !== 'all' && (
                  <span className={`px-2 py-1 ${getColorClass(getFilterColor(activeFilter), 'bg')} bg-opacity-20 ${getColorClass(getFilterColor(activeFilter), 'border')} border ${getColorClass(getFilterColor(activeFilter), 'text')} font-mono text-xs`}>
                    {activeFilter.toUpperCase()}: {activeFilterValue.toUpperCase()}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Projects Grid */}
        {!scanningProjects && (
          <>
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onViewDetails={onProjectSelect}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-gray-900 border border-red-400 p-8 sm:p-12 text-center">
                <div className="text-red-400 text-4xl sm:text-6xl mb-4">⚠️</div>
                <h3 className="text-red-400 font-mono font-bold text-lg sm:text-xl mb-4">NO_PROJECTS_FOUND</h3>
                <p className="text-gray-400 font-mono text-sm mb-6">
                  Neural scan complete. No projects match current filter parameters.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-red-400 bg-opacity-20 border border-red-400 text-red-400 hover:bg-red-400 hover:text-gray-900 transition-all duration-300 font-mono text-xs sm:text-sm font-bold"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                >
                  RESET_SEARCH_PARAMETERS
                </button>
              </div>
            )}
          </>
        )}

        {/* Project Statistics Footer */}
        {!scanningProjects && filteredProjects.length > 0 && (
          <div className="mt-8 sm:mt-12 bg-gray-900 border border-gray-700 p-4 sm:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div className="bg-gray-800 border border-gray-600 p-3 sm:p-4">
                <div className="text-cyan-400 font-mono text-xs sm:text-sm font-bold">AVG_COMPLEXITY</div>
                <div className="text-white font-mono text-sm sm:text-lg">
                  {(filteredProjects.reduce((acc, p) => acc + p.complexity, 0) / filteredProjects.length).toFixed(1)}
                </div>
              </div>
              <div className="bg-gray-800 border border-gray-600 p-3 sm:p-4">
                <div className="text-green-400 font-mono text-xs sm:text-sm font-bold">AVG_SATISFACTION</div>
                <div className="text-white font-mono text-sm sm:text-lg">
                  {(filteredProjects.reduce((acc, p) => acc + p.clientSatisfaction, 0) / filteredProjects.length).toFixed(1)}%
                </div>
              </div>
              <div className="bg-gray-800 border border-gray-600 p-3 sm:p-4">
                <div className="text-purple-400 font-mono text-xs sm:text-sm font-bold">MOST_USED_TECH</div>
                <div className="text-white font-mono text-sm sm:text-lg">
                  {(() => {
                    const techCount: Record<string, number> = {};
                    filteredProjects.forEach(p => 
                      p.technologies.forEach(t => {
                        techCount[t.name] = (techCount[t.name] || 0) + 1;
                      })
                    );
                    const mostUsed = Object.entries(techCount).sort(([,a], [,b]) => b - a)[0];
                    return mostUsed ? mostUsed[0] : 'N/A';
                  })()
                  }
                </div>
              </div>
              <div className="bg-gray-800 border border-gray-600 p-3 sm:p-4">
                <div className="text-pink-400 font-mono text-xs sm:text-sm font-bold">CATEGORIES</div>
                <div className="text-white font-mono text-sm sm:text-lg">
                  {new Set(filteredProjects.map(p => p.category)).size}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
