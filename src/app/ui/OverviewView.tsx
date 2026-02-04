import React from 'react';
import {
    Target, DollarSign, MessageCircle, Users, Percent, Calendar, FileText, Phone, PhoneCall, HeartHandshake, Star
} from 'lucide-react';
import { Commercants, StatsGlobales, PerformanceData, SourcesClients, HeuresActivite, ProduitsPopulaires } from '@/app/lib/definitions';

import GlobalStatsCard from './overview/GlobalStatsCard';
import SecondaryStatsCard from './overview/SecondaryStatsCard';
import WeeklyPerformanceChart from './overview/WeeklyPerformanceChart';
import TrafficSourcesChart from './overview/TrafficSourcesChart';
import ActivityByHourChart from './overview/ActivityByHourChart';
import TopProducts from './overview/TopProducts';
import TopPerformers from './overview/TopPerformers';

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