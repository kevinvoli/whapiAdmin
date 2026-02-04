
"use client";

import Header from '@/app/ui/Header';
import Navigation from '@/app/ui/Navigation';
import OverviewView from '@/app/ui/OverviewView';
import CommerciauxView from '@/app/ui/CommerciauxView';
import PerformanceView from '@/app/ui/PerformanceView';
import AnalyticsView from '@/app/ui/AnalyticsView';
import {
    commerciaux,
    statsGlobales,
    performanceData,
    sourcesClients,
    heuresActivite,
    produitsPopulaires
} from '@/app/data/admin-data';
import { useState } from 'react';

type ViewMode = 'overview' | 'commerciaux' | 'performance' | 'analytics';

export default function AdminDashboard() {
    const [selectedPeriod, setSelectedPeriod] = useState('today');
    const [selectedCommercial, setSelectedCommercial] = useState('all');
    const [viewMode, setViewMode] = useState<ViewMode>('overview');

    const filteredCommerciaux = selectedCommercial === 'all'
        ? commerciaux
        : commerciaux.filter(c => c.id === parseInt(selectedCommercial));

    const renderView = () => {
        switch (viewMode) {
            case 'overview':
                return <OverviewView
                    statsGlobales={statsGlobales}
                    performanceData={performanceData}
                    sourcesClients={sourcesClients}
                    heuresActivite={heuresActivite}
                    produitsPopulaires={produitsPopulaires}
                    commerciaux={commerciaux}
                />;
            case 'commerciaux':
                return <CommerciauxView
                    commerciaux={commerciaux}
                    statsGlobales={statsGlobales}
                />;
            case 'performance':
                return <PerformanceView
                    commerciaux={commerciaux}
                    selectedCommercial={selectedCommercial}
                    setSelectedCommercial={setSelectedCommercial}
                    filteredCommerciaux={filteredCommerciaux}
                />;
            case 'analytics':
                return <AnalyticsView
                    statsGlobales={statsGlobales}
                    sourcesClients={sourcesClients}
                    commerciaux={commerciaux}
                />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod} />
            <Navigation
                viewMode={viewMode}
                setViewMode={setViewMode}
                commerciauxLength={commerciaux.length}
            />
            <main>
                {renderView()}
            </main>
        </div>
    );
}
