import React from 'react';

interface NavigationProps {
    viewMode: string;
    setViewMode: (view: 'overview' | 'commerciaux' | 'performance' | 'analytics') => void;
    commerciauxLength: number;
}

export default function Navigation({ viewMode, setViewMode, commerciauxLength }: NavigationProps) {
    return (
        <div className="px-6 border-t border-gray-200 bg-white sticky top-[89px] z-40">
            <div className="flex gap-6">
                <button
                    onClick={() => setViewMode('overview')}
                    className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                        viewMode === 'overview'
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                >
                    Vue densemble
                </button>
                <button
                    onClick={() => setViewMode('commerciaux')}
                    className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                        viewMode === 'commerciaux'
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                >
                    Équipe ({commerciauxLength})
                </button>
                <button
                    onClick={() => setViewMode('performance')}
                    className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                        viewMode === 'performance'
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                >
                    Performance
                </button>
                <button
                    onClick={() => setViewMode('analytics')}
                    className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                        viewMode === 'analytics'
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                >
                    Analytics avancées
                </button>
            </div>
        </div>
    );
}
