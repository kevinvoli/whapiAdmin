import React from 'react';
import { AlertCircle, Clock, TrendingUp } from 'lucide-react';
import { Commercants, StatsGlobales, SourcesClients } from '@/app/lib/definitions'; // Added import for StatsGlobales and SourcesClients

interface AdvancedMetricsProps {
    sourcesClients: SourcesClients[];
    statsGlobales: StatsGlobales;
    commerciaux: Commercants[];
}

export default function AdvancedMetrics({ sourcesClients, statsGlobales, commerciaux }: AdvancedMetricsProps) {
    return (
        <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Efficacité de conversion par canal</h3>
                <div className="space-y-3">
                    {sourcesClients.map((source, idx) => (
                        <div key={idx}>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-medium text-gray-700">{source.name}</span>
                                <span className="text-xs font-bold text-gray-900">{Math.round((source.conversions / source.value) * 100)}% efficacité</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                    <div className={`${source.color} h-2 rounded-full`} style={{ width: `${source.value}%` }}></div>
                                </div>
                                <span className="text-xs text-gray-500">{source.conversions} conv.</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Prédiction CA fin de mois</h3>
                <div className="text-center mb-4">
                    <p className="text-4xl font-bold text-blue-600">{((statsGlobales.totalCA / new Date().getDate()) * 30 / 1000000).toFixed(1)}M</p>
                    <p className="text-sm text-gray-500 mt-1">FCFA estimé</p>
                </div>
                <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                        <span className="text-gray-600">CA actuel:</span>
                        <span className="font-semibold">{(statsGlobales.totalCA / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Jours écoulés:</span>
                        <span className="font-semibold">{new Date().getDate()}/30</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Tendance:</span>
                        <span className="font-semibold text-green-600">+18% vs mois dernier</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Ratio performance/effort</h3>
                <div className="space-y-4">
                    {commerciaux.slice(0, 3).map((c, idx) => (
                        <div key={idx}>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-medium text-gray-700">{c.name}</span>
                                <span className="text-xs font-bold text-gray-900">{Math.round((c.ca / c.messagesTraites) / 100)}K/msg</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-gradient-to-r from-green-600 to-blue-600 h-2 rounded-full" style={{ width: `${Math.min((c.ca / c.messagesTraites) / 30, 100)}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
