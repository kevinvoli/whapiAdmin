
import React from 'react';
import { AlertCircle, Clock, TrendingUp } from 'lucide-react';
import { Commercants } from '@/app/lib/definitions';

const AdvancedMetrics = ({ sourcesClients, statsGlobales, commerciaux }) => (
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

const ComparisonsAndTrends = ({ statsGlobales }) => (
    <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Comparaison équipe vs objectifs</h3>
            <div className="space-y-4">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">Conversions</span>
                        <span className="text-sm font-bold">{statsGlobales.totalConversions}/{statsGlobales.objectifGlobal}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className={`h-3 rounded-full ${(statsGlobales.totalConversions / statsGlobales.objectifGlobal) >= 1 ? 'bg-green-600' : 'bg-blue-600'}`} style={{ width: `${Math.min((statsGlobales.totalConversions / statsGlobales.objectifGlobal) * 100, 100)}%` }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">CA</span>
                        <span className="text-sm font-bold">{(statsGlobales.totalCA / 1000000).toFixed(1)}M/{(statsGlobales.caObjectifGlobal / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className={`h-3 rounded-full ${(statsGlobales.totalCA / statsGlobales.caObjectifGlobal) >= 1 ? 'bg-green-600' : 'bg-blue-600'}`} style={{ width: `${Math.min((statsGlobales.totalCA / statsGlobales.caObjectifGlobal) * 100, 100)}%` }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">Taux conversion cible</span>
                        <span className="text-sm font-bold">{statsGlobales.tauxConversionMoyen}%/30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className={`h-3 rounded-full ${statsGlobales.tauxConversionMoyen >= 30 ? 'bg-green-600' : 'bg-orange-600'}`} style={{ width: `${Math.min((statsGlobales.tauxConversionMoyen / 30) * 100, 100)}%` }}></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Points d'attention</h3>
            <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-semibold text-red-900">2 commerciaux sous objectif</p>
                        <p className="text-xs text-red-700">Action requise</p>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                    <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-semibold text-yellow-900">Temps de réponse en hausse</p>
                        <p className="text-xs text-yellow-700">+15% cette semaine</p>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-semibold text-green-900">Satisfaction en progression</p>
                        <p className="text-xs text-green-700">+0.3 points ce mois</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


interface AnalyticsViewProps {
    statsGlobales: any;
    sourcesClients: any[];
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
