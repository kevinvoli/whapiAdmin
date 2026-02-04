import React from 'react';
import { AlertCircle, CheckCircle, Activity, Zap } from 'lucide-react';

export default function AlertsAndRecommendations() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alertes et recommandations</h3>
            <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-red-900">Kouadio - Performance en baisse critique</p>
                        <p className="text-xs text-red-700 mt-1">Taux de conversion à 18% (objectif: 25%). Temps de réponse élevé: 4.5 min. Progression -8% sur 7 jours.</p>
                        <button className="text-xs text-red-600 font-medium mt-2 hover:underline">Planifier coaching →</button>
                    </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-yellow-900">Yao - Objectif journalier non atteint</p>
                        <p className="text-xs text-yellow-700 mt-1">Seulement 5/15 conversions (33%). Taux fidélisation bas (65%). Besoin d'accompagnement sur la fidélisation client.</p>
                        <button className="text-xs text-yellow-600 font-medium mt-2 hover:underline">Voir plan d'action →</button>
                    </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-green-900">Fatou - Performance exceptionnelle du mois</p>
                        <p className="text-xs text-green-700 mt-1">Meilleur taux de conversion (38%), satisfaction client (4.9★) et +22% progression sur 30 jours. Candidate pour prime excellence!</p>
                        <button className="text-xs text-green-600 font-medium mt-2 hover:underline">Envoyer félicitations →</button>
                    </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <Activity className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-blue-900">Objectif équipe dépassé</p>
                        <p className="text-xs text-blue-700 mt-1">38/75 conversions réalisées (51%). L'équipe est en avance de 6% sur l'objectif journalier. Excellente dynamique collective!</p>
                        <button className="text-xs text-blue-600 font-medium mt-2 hover:underline">Voir détails équipe →</button>
                    </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <Zap className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-purple-900">Pic d'activité détecté</p>
                        <p className="text-xs text-purple-700 mt-1">90% d'activité entre 15h-16h. Considérer renforcement équipe durant cette plage horaire pour optimiser conversions.</p>
                        <button className="text-xs text-purple-600 font-medium mt-2 hover:underline">Analyser planning →</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
