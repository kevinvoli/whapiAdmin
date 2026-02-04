import React from 'react';
import { Eye, Edit, Phone, ArrowUpRight, ArrowDownRight, Star } from 'lucide-react';
import { Commercants } from '@/app/lib/definitions';
import { getStatusColor, getPerformanceBadge } from '@/app/lib/utils';

interface TeamListProps {
    commerciaux: Commercants[];
}

export default function TeamList({ commerciaux }: TeamListProps) {
    return (
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
}
