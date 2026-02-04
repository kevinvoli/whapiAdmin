import React from 'react';
import { Commercants } from '@/app/lib/definitions';
import CommercialSelector from './performance/CommercialSelector';
import PerformanceDetails from './performance/PerformanceDetails';
import AlertsAndRecommendations from './performance/AlertsAndRecommendations';

interface PerformanceViewProps {
    commerciaux: Commercants[];
    selectedCommercial: string;
    setSelectedCommercial: (id: string) => void;
    filteredCommerciaux: Commercants[];
}

export default function PerformanceView({ commerciaux, selectedCommercial, setSelectedCommercial, filteredCommerciaux }: PerformanceViewProps) {
    return (
        <div className="p-6 space-y-6">
            <CommercialSelector
                commerciaux={commerciaux}
                selectedCommercial={selectedCommercial}
                setSelectedCommercial={setSelectedCommercial}
            />

            <div className="grid grid-cols-2 gap-6">
                {filteredCommerciaux.map((commercial) => (
                    <PerformanceDetails key={commercial.id} commercial={commercial} />
                ))}
            </div>

            <AlertsAndRecommendations />
        </div>
    );
}