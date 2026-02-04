import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface GlobalStatsCardProps {
    icon: React.ReactNode;
    title: string;
    value: string | number;
    evolution?: string;
    objectif?: string | number;
    progress?: string | number;
    unit?: string;
    bgColor: string;
}

export default function GlobalStatsCard({ icon, title, value, evolution, objectif, progress, unit, bgColor }: GlobalStatsCardProps) {
    return (
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center`}>
                    {icon}
                </div>
                {evolution && (
                    <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                        <ArrowUpRight className="w-3 h-3" />
                        {evolution}
                    </span>
                )}
            </div>
            <h3 className="text-gray-600 text-xs mb-1">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{value}{unit}</p>
            {objectif && (
                <div className="mt-2 flex items-center justify-between">
                    <p className="text-xs text-gray-500">/{objectif}</p>
                    <p className="text-xs font-medium text-blue-600">{progress}%</p>
                </div>
            )}
            {title === "Messages" && <p className="text-xs text-gray-500 mt-2">{progress} conv. actives</p>}
            {title === "Nouveaux contacts" && <p className="text-xs text-gray-500 mt-2">{progress}/{unit} actifs</p>}
            {title === "Taux conversion" && <p className="text-xs text-gray-500 mt-2">Satisfaction: {progress}★</p>}
        </div>
    );
}
