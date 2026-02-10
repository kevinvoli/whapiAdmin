
export type Commercial = {
    id: number;
    name: string;
    avatar: string;
    status: 'online' | 'away' | 'offline';
    email: string;
    phone: string;
    region: string;
    anciennete: string;
    messagesTraites: number;
    conversionsJour: number;
    objectifJour: number;
    tauxConversion: number;
    ca: number;
    caObjectif: number;
    tauxReponse: number;
    tempsReponse: string;
    satisfaction: number;
    conversationsActives: number;
    nouveauxContacts: number;
    rdvPris: number;
    rdvHonores: number;
    devisEnvoyes: number;
    devisAcceptes: number;
    appelsSortants: number;
    appelsRecus: number;
    emailsEnvoyes: number;
    premiereReponse: string;
    tauxFidelisation: number;
    clientsActifs: number;
    panierMoyen: number;
    performance: 'excellent' | 'moyen' | 'faible';
    progression7j: number;
    progression30j: number;
    heuresActives: string;
    pauseTotal: string;
    conversationsGagnees: number;
    conversationsPerdues: number;
    relancesEffectuees: number;
    tauxOuverture: number;
    dernierLogin: string;
    productivite: number;
};

export type ViewMode = 'overview' | 'commerciaux' | 'performance' | 'analytics' | 'messages' | 'clients' | 'rapports';

import React from 'react'; // Import React for React.ElementType
import { Icon } from 'lucide-react';

export type NavigationItem = {
    id: ViewMode;
    name: string;
    icon: React.ElementType; // Use React.ElementType for the icon component type
    badge: string | null;
};

export type StatsGlobales = {
    totalConversions: number;
    totalCA: number;
    totalMessages: number;
    totalConversationsActives: number;
    tauxConversionMoyen: number;
    satisfactionMoyenne: string;
    objectifGlobal: number;
    totalRDV: number;
    totalRDVHonores: number;
    totalDevis: number;
    totalDevisAcceptes: number;
    totalAppelsSortants: number;
    totalAppelsRecus: number;
    totalNouveauxContacts: number;
    panierMoyen: number;
    tauxFidelisationMoyen: number;
    productiviteMoyenne: number;
    commerciauxActifs: number;
    caObjectifGlobal: number;
};

export type PerformanceData = {
    jour: string;
    conversions: number;
    ca: number;
    messages: number;
    rdv: number;
};

export type SourcesClients = {
    name: string;
    value: number;
    conversions: number;
    color: string;
};

export type HeuresActivite = {
    heure: string;
    activite: number;
};

export type ProduitsPopulaires = {
    nom: string;
    ventes: number;
    ca: number;
};
