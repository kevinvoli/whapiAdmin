import React from 'react';
import { Commercants, StatsGlobales, SourcesClients } from '@/app/lib/definitions';
import AdvancedMetrics from './analytics/AdvancedMetrics';
import ComparisonsAndTrends from './analytics/ComparisonsAndTrends';

interface AnalyticsViewProps {
    statsGlobales: StatsGlobales;
    sourcesClients: SourcesClients[];
    commerciaux: Commercants[];
}

export default function AnalyticsView({ statsGlobales, sourcesClients, commerciaux }: AnalyticsViewProps) {
    return (
        <div className="p-6 space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Analytics Avancées</h2>
                <p className="text-blue-100">Analyses approfondies et prédictions pour optimiser les performances</p>
            </div>

            <AdvancedMetrics
                sourcesClients={sourcesClients}
                statsGlobales={statsGlobales}
                commerciaux={commerciaux}
            />
            <ComparisonsAndTrends statsGlobales={statsGlobales} />
        </div>
    );
}