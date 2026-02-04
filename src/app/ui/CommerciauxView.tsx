import React from 'react';
import { Commercants, StatsGlobales } from '@/app/lib/definitions';
import TeamFilters from './commerciaux/TeamFilters';
import TeamList from './commerciaux/TeamList';
import TeamSummaryStats from './commerciaux/TeamSummaryStats';

interface CommerciauxViewProps {
    commerciaux: Commercants[];
    statsGlobales: StatsGlobales;
}

export default function CommerciauxView({ commerciaux, statsGlobales }: CommerciauxViewProps) {
    return (
        <div className="p-6 space-y-6">
            <TeamFilters />
            <TeamList commerciaux={commerciaux} />
            <TeamSummaryStats statsGlobales={statsGlobales} commerciaux={commerciaux} />
        </div>
    );
}