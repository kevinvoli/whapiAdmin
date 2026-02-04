import React from 'react';
import {
    Target, ArrowUpRight, DollarSign, MessageCircle, Users, Percent, Calendar, FileText, Phone, PhoneCall, HeartHandshake, Star
} from 'lucide-react';
import { Commercants, StatsGlobales, PerformanceData, SourcesClients, HeuresActivite, ProduitsPopulaires } from '@/app/lib/definitions';
import { getStatusColor } from '@/app/lib/utils';


const GlobalStatsCard = ({ icon, title, value, evolution, objectif, progress, unit, bgColor }: { icon: React.ReactNode, title: string, value: string | number, evolution?: string, objectif?: string | number, progress?: string | number, unit?: string, bgColor: string }) => (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center`}>
                {icon}
            </div>
            {evolution && (
                <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    {evolution}
                </span>
            )}
        </div>
        <h3 className="text-gray-600 text-xs mb-1">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}{unit}</p>
        {objectif && (
            <div className="mt-2 flex items-center justify-between">
                <p className="text-xs text-gray-500">/{objectif}</p>
                <p className="text-xs font-medium text-blue-600">{progress}%</p>
            </div>
        )}
         {title === "Messages" && <p className="text-xs text-gray-500 mt-2">{progress} conv. actives</p>}
         {title === "Nouveaux contacts" && <p className="text-xs text-gray-500 mt-2">{progress}/{unit} actifs</p>}
         {title === "Taux conversion" && <p className="text-xs text-gray-500 mt-2">Satisfaction: {progress}★</p>}
    </div>
);

const SecondaryStatsCard = ({ icon, title, value, details }: { icon: React.ReactNode, title: string, value: string | number, details: string }) => (
    <div className={`p-4 rounded-lg border`}>
        <div className="flex items-center gap-2 mb-2">
            {icon}
            <h4 className="text-xs font-semibold">{title}</h4>
        </div>
        <p className="text-xl font-bold">{value}</p>
        <p className="text-xs mt-1">{details}</p>
    </div>
);

const WeeklyPerformanceChart = ({ performanceData }: { performanceData: PerformanceData[] }) => (
    <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Performance de la semaine</h3>
            <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded"></div>
                    <span className="text-gray-600">Conversions</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-600 rounded"></div>
                    <span className="text-gray-600">CA (x100K)</span>
                </div>
            </div>
        </div>
        <div className="flex items-end justify-between gap-4 h-64">
            {performanceData.map((jour, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-3">
                    <div className="text-sm font-semibold text-gray-900">{jour.conversions}</div>
                    <div className="w-full relative" style={{ height: '180px' }}>
                        <div
                            className="absolute bottom-0 w-full bg-blue-600 rounded-t hover:bg-blue-700 transition-all cursor-pointer"
                            style={{ height: `${(jour.conversions / 50) * 100}%` }}
                            title={`${jour.conversions} conversions`}
                        ></div>
                    </div>
                    <div className="text-xs text-gray-600 font-medium">{jour.jour}</div>
                    <div className="text-xs text-gray-500">{jour.messages} msg</div>
                </div>
            ))}
        </div>
    </div>
);

const TrafficSourcesChart = ({ sourcesClients, productiviteMoyenne }: { sourcesClients: SourcesClients[], productiviteMoyenne: number }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Sources de trafic</h3>
        <div className="space-y-4">
            {sourcesClients.map((source, idx) => (
                <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{source.name}</span>
                        <div className="text-right">
                            <span className="text-sm font-bold text-gray-900">{source.value}%</span>
                            <p className="text-xs text-gray-500">{source.conversions} conv.</p>
                        </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className={`${source.color} h-3 rounded-full transition-all`}
                            style={{ width: `${source.value}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Productivité moyenne</h4>
            <div className="flex items-center gap-3">
                <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-gradient-to-r from-green-600 to-blue-600 h-4 rounded-full" style={{ width: `${productiviteMoyenne}%` }}></div>
                    </div>
                </div>
                <span className="text-2xl font-bold text-gray-900">{productiviteMoyenne}%</span>
            </div>
        </div>
    </div>
);

const ActivityByHourChart = ({ heuresActivite }: { heuresActivite: HeuresActivite[] }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Activité par heure</h3>
        <div className="flex items-end justify-between gap-2 h-48">
            {heuresActivite.map((h, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div className="text-xs font-semibold text-gray-900">{h.activite}%</div>
                    <div
                        className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t hover:from-blue-700 hover:to-blue-500 transition-all cursor-pointer"
                        style={{ height: `${h.activite}%` }}
                        title={`${h.heure}: ${h.activite}% d'activité`}
                    ></div>
                    <div className="text-xs text-gray-600">{h.heure}</div>
                </div>
            ))}
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">Pic d'activité entre 15h et 17h</p>
    </div>
);

const TopProducts = ({ produitsPopulaires }: { produitsPopulaires: ProduitsPopulaires[] }) => (
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

const TopPerformers = ({ commerciaux }: { commerciaux: Commercants[] }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performers du jour</h3>
        <div className="grid grid-cols-3 gap-4">
            {commerciaux
                .sort((a, b) => b.tauxConversion - a.tauxConversion)
                .slice(0, 3)
                .map((commercial, idx) => (
                    <div key={commercial.id} className="border border-gray-200 rounded-lg p-4 relative hover:shadow-md transition-shadow">
                        {idx === 0 && (
                            <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">🏆</span>
                            </div>
                        )}
                        {idx === 1 && (
                            <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">🥈</span>
                            </div>
                        )}
                        {idx === 2 && (
                            <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">🥉</span>
                            </div>
                        )}
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative`}>
                                {commercial.avatar}
                                <div className={`absolute bottom-0 right-0 w-3 h-3 ${getStatusColor(commercial.status)} border-2 border-white rounded-full`}></div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">{commercial.name}</h4>
                                <p className="text-xs text-gray-500">{commercial.conversionsJour} conversions - {commercial.tauxConversion}%</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                            <div className="bg-blue-50 p-2 rounded">
                                <p className="text-blue-600 font-medium">CA</p>
                                <p className="font-bold text-blue-900">{(commercial.ca / 1000).toFixed(0)}K</p>
                            </div>
                            <div className="bg-green-50 p-2 rounded">
                                <p className="text-green-600 font-medium">Satisfaction</p>
                                <p className="font-bold text-green-900">{commercial.satisfaction}★</p>
                            </div>
                            <div className="bg-purple-50 p-2 rounded">
                                <p className="text-purple-600 font-medium">Messages</p>
                                <p className="font-bold text-purple-900">{commercial.messagesTraites}</p>
                            </div>
                            <div className="bg-orange-50 p-2 rounded">
                                <p className="text-orange-600 font-medium">RDV pris</p>
                                <p className="font-bold text-orange-900">{commercial.rdvPris}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    </div>
);


interface OverviewViewProps {
    statsGlobales: StatsGlobales;
    performanceData: PerformanceData[];
    sourcesClients: SourcesClients[];
    heuresActivite: HeuresActivite[];
    produitsPopulaires: ProduitsPopulaires[];
    commerciaux: Commercants[];
}

export default function OverviewView({
    statsGlobales,
    performanceData,
    sourcesClients,
    heuresActivite,
    produitsPopulaires,
    commerciaux
}: OverviewViewProps) {
    return (
        <div className="p-6">
            {/* Stats globales principales */}
            <div className="grid grid-cols-5 gap-4 mb-6">
                <GlobalStatsCard
                    icon={<Target className="w-5 h-5 text-blue-600" />}
                    title="Conversions"
                    value={statsGlobales.totalConversions}
                    evolution="+12%"
                    objectif={statsGlobales.objectifGlobal}
                    progress={Math.round((statsGlobales.totalConversions / statsGlobales.objectifGlobal) * 100)}
                    unit=""
                    bgColor="bg-blue-100"
                />
                <GlobalStatsCard
                    icon={<DollarSign className="w-5 h-5 text-green-600" />}
                    title="CA Total"
                    value={(statsGlobales.totalCA / 1000000).toFixed(1)}
                    unit="M"
                    evolution="+18%"
                    objectif={`Obj: ${(statsGlobales.caObjectifGlobal / 1000000).toFixed(1)}M`}
                    progress={Math.round((statsGlobales.totalCA / statsGlobales.caObjectifGlobal) * 100)}
                    bgColor="bg-green-100"
                />
                <GlobalStatsCard
                    icon={<MessageCircle className="w-5 h-5 text-purple-600" />}
                    title="Messages"
                    value={statsGlobales.totalMessages}
                    evolution="+8%"
                    progress={statsGlobales.totalConversationsActives}
                    unit=""
                    bgColor="bg-purple-100"
                />
                <GlobalStatsCard
                    icon={<Users className="w-5 h-5 text-orange-600" />}
                    title="Nouveaux contacts"
                    value={statsGlobales.totalNouveauxContacts}
                    evolution="+15%"
                    progress={statsGlobales.commerciauxActifs}
                    unit={commerciaux.length}
                    bgColor="bg-orange-100"
                />
                <GlobalStatsCard
                    icon={<Percent className="w-5 h-5 text-pink-600" />}
                    title="Taux conversion"
                    value={statsGlobales.tauxConversionMoyen}
                    unit="%"
                    evolution="+5%"
                    progress={statsGlobales.satisfactionMoyenne}
                    bgColor="bg-pink-100"
                />
            </div>

            {/* Stats secondaires */}
            <div className="grid grid-cols-6 gap-4 mb-6">
                 <SecondaryStatsCard
                    icon={<Calendar className="w-4 h-4 text-blue-600" />}
                    title="RDV pris"
                    value={statsGlobales.totalRDV}
                    details={`${statsGlobales.totalRDVHonores} honorés (${Math.round((statsGlobales.totalRDVHonores / statsGlobales.totalRDV) * 100)}%)`}
                 />
                 <SecondaryStatsCard
                    icon={<FileText className="w-4 h-4 text-green-600" />}
                    title="Devis"
                    value={statsGlobales.totalDevis}
                    details={`${statsGlobales.totalDevisAcceptes} acceptés (${Math.round((statsGlobales.totalDevisAcceptes / statsGlobales.totalDevis) * 100)}%)`}
                 />
                 <SecondaryStatsCard
                    icon={<Phone className="w-4 h-4 text-purple-600" />}
                    title="Appels sortants"
                    value={statsGlobales.totalAppelsSortants}
                    details="Proactivité commerciale"
                 />
                 <SecondaryStatsCard
                    icon={<PhoneCall className="w-4 h-4 text-orange-600" />}
                    title="Appels reçus"
                    value={statsGlobales.totalAppelsRecus}
                    details="Demandes entrantes"
                 />
                 <SecondaryStatsCard
                    icon={<DollarSign className="w-4 h-4 text-teal-600" />}
                    title="Panier moyen"
                    value={`${(statsGlobales.panierMoyen / 1000).toFixed(0)}K`}
                    details="FCFA par vente"
                 />
                 <SecondaryStatsCard
                    icon={<HeartHandshake className="w-4 h-4 text-pink-600" />}
                    title="Fidélisation"
                    value={`${statsGlobales.tauxFidelisationMoyen}%`}
                    details="Taux moyen équipe"
                 />
            </div>

            {/* Graphiques et analyses */}
            <div className="grid grid-cols-3 gap-6 mb-6">
                <WeeklyPerformanceChart performanceData={performanceData} />
                <TrafficSourcesChart sourcesClients={sourcesClients} productiviteMoyenne={statsGlobales.productiviteMoyenne} />
            </div>

            {/* Heures d'activité et produits */}
            <div className="grid grid-cols-2 gap-6 mb-6">
                <ActivityByHourChart heuresActivite={heuresActivite} />
                <TopProducts produitsPopulaires={produitsPopulaires} />
            </div>

            {/* Top performers */}
            <TopPerformers commerciaux={commerciaux} />
        </div>
    );
}
