import React from 'react';
import { Search, UserPlus } from 'lucide-react';

export default function TeamFilters() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Rechercher un commercial..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="all">Tous les statuts</option>
                    <option value="online">En ligne</option>
                    <option value="away">Absent</option>
                    <option value="offline">Hors ligne</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="all">Toutes performances</option>
                    <option value="excellent">Excellent</option>
                    <option value="moyen">Moyen</option>
                    <option value="faible">Faible</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="all">Toutes régions</option>
                    <option value="abidjan">Abidjan</option>
                    <option value="bouake">Bouaké</option>
                    <option value="yamoussoukro">Yamoussoukro</option>
                </select>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                    <UserPlus className="w-4 h-4" />
                    Ajouter
                </button>
            </div>
        </div>
    );
}
