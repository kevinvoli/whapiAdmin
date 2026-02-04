import React from 'react';
import { Download, Settings, Bell } from 'lucide-react';

interface HeaderProps {
    selectedPeriod: string;
    setSelectedPeriod: (value: string) => void;
}

export default function Header({ selectedPeriod, setSelectedPeriod }: HeaderProps) {
    return (
        <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Dashboard Admin</h1>
                        <p className="text-sm text-gray-600">Gestion et suivi des commerciaux - Temps réel</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <select
                            value={selectedPeriod}
                            onChange={(e) => setSelectedPeriod(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="today">Aujourdhui</option>
                            <option value="yesterday">Hier</option>
                            <option value="week">Cette semaine</option>
                            <option value="month">Ce mois</option>
                            <option value="quarter">Ce trimestre</option>
                            <option value="year">Cette année</option>
                        </select>

                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Settings className="w-5 h-5" />
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Exporter rapport
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
