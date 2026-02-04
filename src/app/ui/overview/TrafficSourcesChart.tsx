import React from 'react';
import { SourcesClients } from '@/app/lib/definitions';

interface TrafficSourcesChartProps {
    sourcesClients: SourcesClients[];
    productiviteMoyenne: number;
}

export default function TrafficSourcesChart({ sourcesClients, productiviteMoyenne }: TrafficSourcesChartProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Sources de trafic</h3>
            <div className="space-y-4">
                {sourcesClients.map((source, idx) => (
                    <div key={idx}>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">{source.name}</span>
                            <div className="text-right">
                                <span className="text-sm font-bold text-gray-900">{source.value}%</span>
                                <p className="text-xs text-gray-500">{source.conversions} conv.</p>
                            </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                                className={`${source.color} h-3 rounded-full transition-all`}
                                style={{ width: `${source.value}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Productivité moyenne</h4>
                <div className="flex items-center gap-3">
                    <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div className="bg-gradient-to-r from-green-600 to-blue-600 h-4 rounded-full" style={{ width: `${productiviteMoyenne}%` }}></div>
                        </div>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{productiviteMoyenne}%</span>
                </div>
            </div>
        </div>
    );
}
