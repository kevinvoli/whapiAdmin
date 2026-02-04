import React from 'react';
import { Star } from 'lucide-react';
import { Commercants } from '@/app/lib/definitions';
import { getStatusColor } from '@/app/lib/utils';

interface TopPerformersProps {
    commerciaux: Commercants[];
}

export default function TopPerformers({ commerciaux }: TopPerformersProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performers du jour</h3>
            <div className="grid grid-cols-3 gap-4">
                {commerciaux
                    .sort((a, b) => b.tauxConversion - a.tauxConversion)
                    .slice(0, 3)
                    .map((commercial, idx) => (
                        <div key={commercial.id} className="border border-gray-200 rounded-lg p-4 relative hover:shadow-md transition-shadow">
                            {idx === 0 && (
                                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-lg">🏆</span>
                                </div>
                            )}
                            {idx === 1 && (
                                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-lg">🥈</span>
                                </div>
                            )}
                            {idx === 2 && (
                                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-lg">🥉</span>
                                </div>
                            )}
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative`}>
                                    {commercial.avatar}
                                    <div className={`absolute bottom-0 right-0 w-3 h-3 ${getStatusColor(commercial.status)} border-2 border-white rounded-full`}></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{commercial.name}</h4>
                                    <p className="text-xs text-gray-500">{commercial.conversionsJour} conversions - {commercial.tauxConversion}%</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 text-xs">
                                <div className="bg-blue-50 p-2 rounded">
                                    <p className="text-blue-600 font-medium">CA</p>
                                    <p className="font-bold text-blue-900">{(commercial.ca / 1000).toFixed(0)}K</p>
                                </div>
                                <div className="bg-green-50 p-2 rounded">
                                    <p className="text-green-600 font-medium">Satisfaction</p>
                                    <p className="font-bold text-green-900">{commercial.satisfaction}★</p>
                                </div>
                                <div className="bg-purple-50 p-2 rounded">
                                    <p className="text-purple-600 font-medium">Messages</p>
                                    <p className="font-bold text-purple-900">{commercial.messagesTraites}</p>
                                </div>
                                <div className="bg-orange-50 p-2 rounded">
                                    <p className="text-orange-600 font-medium">RDV pris</p>
                                    <p className="font-bold text-orange-900">{commercial.rdvPris}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
