
import React from 'react';
import { Search, UserPlus, Eye, Edit, Phone, ArrowUpRight, ArrowDownRight, Star } from 'lucide-react';
import { Commercants, StatsGlobales } from '@/app/lib/definitions';
import { getStatusColor, getPerformanceBadge } from '@/app/lib/utils';

const TeamFilters = () => (
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

const TeamList = ({ commerciaux }: { commerciaux: Commercants[] }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Commercial</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Messages</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conv.</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">CA</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Taux</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">RDV</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Satisf.</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Perf.</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {commerciaux.map((commercial) => (
                        <tr key={commercial.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold relative`}>
                                        {commercial.avatar}
                                        <div className={`absolute bottom-0 right-0 w-3 h-3 ${getStatusColor(commercial.status)} border-2 border-white rounded-full`}></div>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{commercial.name}</p>
                                        <p className="text-xs text-gray-500">{commercial.region} - {commercial.anciennete}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${commercial.status === 'online' ? 'bg-green-100 text-green-800' :
                                        commercial.status === 'away' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-gray-100 text-gray-800'
                                    }`}>
                                    {commercial.status === 'online' ? 'En ligne' : commercial.status === 'away' ? 'Absent' : 'Hors ligne'}
                                </span>
                                <p className="text-xs text-gray-500 mt-1">{commercial.dernierLogin}</p>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm">
                                    <p className="font-medium text-gray-900">{commercial.messagesTraites}</p>
                                    <p className="text-xs text-gray-500">{commercial.conversationsActives} actives</p>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm">
                                    <p className="font-medium text-gray-900">{commercial.conversionsJour}/{commercial.objectifJour}</p>
                                    <div className="w-16 bg-gray-200 rounded-full h-1.5 mt-1">
                                        <div
                                            className="bg-blue-600 h-1.5 rounded-full"
                                            style={{ width: `${(commercial.conversionsJour / commercial.objectifJour) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm">
                                    <p className="font-medium text-gray-900">{(commercial.ca / 1000).toFixed(0)}K</p>
                                    <p className={`text-xs flex items-center gap-1 ${commercial.progression7j >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {commercial.progression7j >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                        {Math.abs(commercial.progression7j)}%
                                    </p>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-gray-900">{commercial.tauxConversion}%</span>
                                    <div className="w-12 bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-green-600 h-2 rounded-full"
                                            style={{ width: `${commercial.tauxConversion}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm">
                                    <p className="font-medium text-gray-900">{commercial.rdvPris}</p>
                                    <p className="text-xs text-gray-500">{commercial.rdvHonores} honorés</p>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="text-sm font-medium text-gray-900">{commercial.satisfaction}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPerformanceBadge(commercial.performance)}`}>
                                    {commercial.performance.charAt(0).toUpperCase() + commercial.performance.slice(1)}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <button className="p-1 text-blue-600 hover:bg-blue-50 rounded" title="Voir détails">
                                        <Eye className="w-4 h-4" />
                                    </button>
                                    <button className="p-1 text-green-600 hover:bg-green-50 rounded" title="Contacter">
                                        <Phone className="w-4 h-4" />
                                    </button>
                                    <button className="p-1 text-gray-600 hover:bg-gray-100 rounded" title="Modifier">
                                        <Edit className="w-4 h-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const TeamSummaryStats = ({ statsGlobales, commerciaux }: { statsGlobales: StatsGlobales, commerciaux: Commercants[] }) => (
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
