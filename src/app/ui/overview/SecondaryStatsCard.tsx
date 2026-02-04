import React from 'react';

interface SecondaryStatsCardProps {
    icon: React.ReactNode;
    title: string;
    value: string | number;
    details: string;
}

export default function SecondaryStatsCard({ icon, title, value, details }: SecondaryStatsCardProps) {
    return (
        <div className={`p-4 rounded-lg border`}>
            <div className="flex items-center gap-2 mb-2">
                {icon}
                <h4 className="text-xs font-semibold">{title}</h4>
            </div>
            <p className="text-xl font-bold">{value}</p>
            <p className="text-xs mt-1">{details}</p>
        </div>
    );
}
