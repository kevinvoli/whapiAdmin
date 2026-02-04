import React from 'react';
import {
    MessageCircle, Target, DollarSign, Percent, Star, ArrowUpRight, ArrowDownRight,
    CheckCircle, XCircle, Eye, Phone, Edit
} from 'lucide-react';
import { Commercants } from '@/app/lib/definitions';
import { getStatusColor, getPerformanceBadge } from '@/app/lib/utils';

interface PerformanceDetailsProps {
    commercial: Commercants;
}

export default function PerformanceDetails({ commercial }: PerformanceDetailsProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl relative`}>
                        {commercial.avatar}
                        <div className={`absolute bottom-0 right-0 w-4 h-4 ${getStatusColor(commercial.status)} border-2 border-white rounded-full`}></div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">{commercial.name}</h3>
                        <p className="text-sm text-gray-500">{commercial.email}</p>
                        <p className="text-xs text-gray-400">{commercial.region} • {commercial.anciennete}</p>
                    </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPerformanceBadge(commercial.performance)}`}>
                    {commercial.performance.charAt(0).toUpperCase() + commercial.performance.slice(1)}
                </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                        <MessageCircle className="w-4 h-4 text-blue-600" />
                        <p className="text-xs text-blue-600 font-medium">Messages</p>
                    </div>
                    <p className="text-2xl font-bold text-blue-900">{commercial.messagesTraites}</p>
                    <p className="text-xs text-blue-700 mt-1">{commercial.conversationsActives} actives</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-1">
                        <Target className="w-4 h-4 text-green-600" />
                        <p className="text-xs text-green-600 font-medium">Conversions</p>
                    </div>
                    <p className="text-2xl font-bold text-green-900">{commercial.conversionsJour}/{commercial.objectifJour}</p>
                    <p className="text-xs text-green-700 mt-1">{Math.round((commercial.conversionsJour / commercial.objectifJour) * 100)}% objectif</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-1">
                        <DollarSign className="w-4 h-4 text-purple-600" />
                        <p className="text-xs text-purple-600 font-medium">CA généré</p>
                    </div>
                    <p className="text-2xl font-bold text-purple-900">{(commercial.ca / 1000).toFixed(0)}K</p>
                    <p className={`text-xs mt-1 flex items-center gap-1 ${commercial.progression7j >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                        {commercial.progression7j >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {Math.abs(commercial.progression7j)}% (7j)
                    </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-2 mb-1">
                        <Percent className="w-4 h-4 text-orange-600" />
                        <p className="text-xs text-orange-600 font-medium">Taux conv.</p>
                    </div>
                    <p className="text-2xl font-bold text-orange-900">{commercial.tauxConversion}%</p>
                    <p className="text-xs text-orange-700 mt-1">Productivité: {commercial.productivite}%</p>
                </div>
            </div>

            <div className="space-y-3 mb-6">
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Taux de réponse</span>
                        <span className="text-sm font-semibold text-gray-900">{commercial.tauxReponse}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${commercial.tauxReponse}%` }}></div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Objectif CA atteint</span>
                        <span className="text-sm font-semibold text-gray-900">{Math.round((commercial.ca / commercial.caObjectif) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: `${(commercial.ca / commercial.caObjectif) * 100}%` }}></div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Taux fidélisation</span>
                        <span className="text-sm font-semibold text-gray-900">{commercial.tauxFidelisation}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${commercial.tauxFidelisation}%` }}></div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Temps réponse</p>
                    <p className="text-sm font-semibold text-gray-900">{commercial.tempsReponse}</p>
                </div>
                <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">1ère réponse</p>
                    <p className="text-sm font-semibold text-gray-900">{commercial.premiereReponse}</p>
                </div>
                <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Satisfaction</p>
                    <p className="text-sm font-semibold text-gray-900 flex items-center justify-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        {commercial.satisfaction}
                    </p>
                </div>
                <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Clients actifs</p>
                    <p className="text-sm font-semibold text-gray-900">{commercial.clientsActifs}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-xs text-gray-600 font-medium">Conv. gagnées</p>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-2xl font-bold text-green-600">{commercial.conversationsGagnees}</p>
                </div>
                <div className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-xs text-gray-600 font-medium">Conv. perdues</p>
                        <XCircle className="w-4 h-4 text-red-600" />
                    </div>
                    <p className="text-2xl font-bold text-red-600">{commercial.conversationsPerdues}</p>
                </div>
            </div>
            <div className="space-y-2 mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">Heures actives</span>
                    <span className="font-semibold text-gray-900">{commercial.heuresActives}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">Panier moyen</span>
                    <span className="font-semibold text-gray-900">{(commercial.panierMoyen / 1000).toFixed(1)}K FCFA</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">Relances effectuées</span>
                    <span className="font-semibold text-gray-900">{commercial.relancesEffectuees}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">Taux ouverture emails</span>
                    <span className="font-semibold text-gray-900">{commercial.tauxOuverture}%</span>
                </div>
            </div>
            <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    Voir détails
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contacter
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    <Edit className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
