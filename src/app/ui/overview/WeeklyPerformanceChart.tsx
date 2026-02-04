import React from 'react';
import { PerformanceData } from '@/app/lib/definitions';

interface WeeklyPerformanceChartProps {
    performanceData: PerformanceData[];
}

export default function WeeklyPerformanceChart({ performanceData }: WeeklyPerformanceChartProps) {
    return (
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Performance de la semaine</h3>
                <div className="flex gap-4 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-600 rounded"></div>
                        <span className="text-gray-600">Conversions</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-600 rounded"></div>
                        <span className="text-gray-600">CA (x100K)</span>
                    </div>
                </div>
            </div>
            <div className="flex items-end justify-between gap-4 h-64">
                {performanceData.map((jour, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-3">
                        <div className="text-sm font-semibold text-gray-900">{jour.conversions}</div>
                        <div className="w-full relative" style={{ height: '180px' }}>
                            <div
                                className="absolute bottom-0 w-full bg-blue-600 rounded-t hover:bg-blue-700 transition-all cursor-pointer"
                                style={{ height: `${(jour.conversions / 50) * 100}%` }}
                                title={`${jour.conversions} conversions`}
                            ></div>
                        </div>
                        <div className="text-xs text-gray-600 font-medium">{jour.jour}</div>
                        <div className="text-xs text-gray-500">{jour.messages} msg</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
