import React from 'react';
import { AlertCircle, Clock, TrendingUp } from 'lucide-react';
import { StatsGlobales } from '@/app/lib/definitions'; // Added import for StatsGlobales

interface ComparisonsAndTrendsProps {
    statsGlobales: StatsGlobales;
}

export default function ComparisonsAndTrends({ statsGlobales }: ComparisonsAndTrendsProps) {
    return (
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
}
