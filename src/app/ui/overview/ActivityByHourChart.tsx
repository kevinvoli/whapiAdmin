import React from 'react';
import { HeuresActivite } from '@/app/lib/definitions';

interface ActivityByHourChartProps {
    heuresActivite: HeuresActivite[];
}

export default function ActivityByHourChart({ heuresActivite }: ActivityByHourChartProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Activité par heure</h3>
            <div className="flex items-end justify-between gap-2 h-48">
                {heuresActivite.map((h, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                        <div className="text-xs font-semibold text-gray-900">{h.activite}%</div>
                        <div
                            className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t hover:from-blue-700 hover:to-blue-500 transition-all cursor-pointer"
                            style={{ height: `${h.activite}%` }}
                            title={`${h.heure}: ${h.activite}% d'activité`}
                        ></div>
                        <div className="text-xs text-gray-600">{h.heure}</div>
                    </div>
                ))}
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">Pic d'activité entre 15h et 17h</p>
        </div>
    );
}
