"use client"

import { useState } from 'react';
import "@/styles/dashboard/dashboard.css"

import Sidebar from './Sidebar';
import ContentArea from './ContentArea';

const DashboardPage = () => {
    const [activeView, setActiveView] = useState('dashboard');

    return (
        <>
            <div className="layout-wrapper">
                <div className="container">
                    <div className="layout dashboard-layout">
                        <Sidebar activeView={activeView} onViewChange={setActiveView} />
                        <ContentArea activeView={activeView} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage