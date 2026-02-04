import React from 'react';
import { Commercants } from '@/app/lib/definitions';

interface CommercialSelectorProps {
    commerciaux: Commercants[];
    selectedCommercial: string;
    setSelectedCommercial: (id: string) => void;
}

export default function CommercialSelector({ commerciaux, selectedCommercial, setSelectedCommercial }: CommercialSelectorProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <select
                value={selectedCommercial}
                onChange={(e) => setSelectedCommercial(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="all">Tous les commerciaux - Vue comparative</option>
                {commerciaux.map(c => (
                    <option key={c.id} value={c.id}>{c.name} - {c.region}</option>
                ))}
            </select>
        </div>
    );
}
