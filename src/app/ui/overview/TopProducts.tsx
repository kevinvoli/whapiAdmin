import React from 'react';
import { ProduitsPopulaires } from '@/app/lib/definitions';

interface TopProductsProps {
    produitsPopulaires: ProduitsPopulaires[];
}

export default function TopProducts({ produitsPopulaires }: TopProductsProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Top produits/services</h3>
            <div className="space-y-4">
                {produitsPopulaires.map((produit, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            {idx + 1}
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-900">{produit.nom}</p>
                            <p className="text-xs text-gray-500">{produit.ventes} ventes - {(produit.ca / 1000).toFixed(0)}K FCFA</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-gray-900">{(produit.ca / 1000).toFixed(0)}K</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
