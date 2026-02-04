import React from 'react';
import { Commercants, StatsGlobales } from '@/app/lib/definitions';

interface TeamSummaryStatsProps {
    statsGlobales: StatsGlobales;
    commerciaux: Commercants[];
}

export default function TeamSummaryStats({ statsGlobales, commerciaux }: TeamSummaryStatsProps) {
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
                <h4 className="text-sm font-medium opacity-90 mb-2">Moyenne messages/jour</h4>
                <p className="text-3xl font-bold">{Math.round(statsGlobales.totalMessages / commerciaux.length)}</p>
                <p className="text-xs opacity-80 mt-2">Par commercial</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
                <h4 className="text-sm font-medium opacity-90 mb-2">Moyenne CA/jour</h4>
                <p className="text-3xl font-bold">{(statsGlobales.totalCA / commerciaux.length / 1000).toFixed(0)}K</p>
                <p className="text-xs opacity-80 mt-2">Par commercial</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
                <h4 className="text-sm font-medium opacity-90 mb-2">Temps réponse moyen</h4>
                <p className="text-3xl font-bold">2.4<span className="text-lg">min</span></p>
                <p className="text-xs opacity-80 mt-2">Toute l'équipe</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg">
                <h4 className="text-sm font-medium opacity-90 mb-2">Productivité équipe</h4>
                <p className="text-3xl font-bold">{statsGlobales.productiviteMoyenne}%</p>
                <p className="text-xs opacity-80 mt-2">Score global</p>
            </div>
        </div>
    );
}
