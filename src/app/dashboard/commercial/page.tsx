"use client";

import React, { useState } from 'react';
import {
    commerciaux,
    statsGlobales,
    performanceData,
    sourcesClients,
    heuresActivite,
    produitsPopulaires,
    navigationItems
} from '@/app/data/admin-data';
import Navigation from '@/app/ui/Navigation';
import Header from '@/app/ui/Header';
import OverviewView from '@/app/ui/OverviewView';
import CommerciauxView from '@/app/ui/CommerciauxView';
import PerformanceView from '@/app/ui/PerformanceView';
import AnalyticsView from '@/app/ui/AnalyticsView';
import MessagesView from '@/app/ui/MessagesView';
import ClientsView from '@/app/ui/ClientsView';
import RapportsView from '@/app/ui/RapportsView';
import { ViewMode } from '@/app/lib/definitions';

export default function AdminDashboard() {
    const [selectedPeriod, setSelectedPeriod] = useState('today');
    const [viewMode, setViewMode] = useState<ViewMode>('overview');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const getStatusColor = (status: 'online' | 'away' | 'offline') => {
        switch(status) {
          case 'online': return 'bg-green-500';
          case 'away': return 'bg-yellow-500';
          case 'offline': return 'bg-gray-500';
          default: return 'bg-gray-500';
        }
      };
    
      const getPerformanceBadge = (performance: 'excellent' | 'moyen' | 'faible') => {
        switch(performance) {
          case 'excellent': return 'bg-green-100 text-green-800';
          case 'moyen': return 'bg-yellow-100 text-yellow-800';
          case 'faible': return 'bg-red-100 text-red-800';
          default: return 'bg-gray-100 text-gray-800';
        }
      };

    const renderContent = () => {
        switch(viewMode) {
          case 'overview':
            return (
                <OverviewView
                    statsGlobales={statsGlobales}
                    performanceData={performanceData}
                    sourcesClients={sourcesClients}
                    heuresActivite={heuresActivite}
                    produitsPopulaires={produitsPopulaires}
                    commerciaux={commerciaux}
                    getStatusColor={getStatusColor}
                />
            );
          case 'commerciaux':
            return (
                <CommerciauxView
                    commerciaux={commerciaux}
                    getStatusColor={getStatusColor}
                    getPerformanceBadge={getPerformanceBadge}
                />
            );
          case 'performance':
            return <PerformanceView />;
          case 'analytics':
            return <AnalyticsView />;
          case 'messages':
            return <MessagesView />;
          case 'clients':
            return <ClientsView />;
          case 'rapports':
            return <RapportsView />;
          default:
            return null;
        }
      };

    return (
        <div className="flex h-screen bg-gray-100">
            <Navigation
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                viewMode={viewMode}
                setViewMode={setViewMode}
                navigationItems={navigationItems}
            />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Header
                    selectedPeriod={selectedPeriod}
                    setSelectedPeriod={setSelectedPeriod}
                    viewMode={viewMode}
                    navigationItems={navigationItems}
                />

                <div className="flex-1 overflow-y-auto p-6">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}