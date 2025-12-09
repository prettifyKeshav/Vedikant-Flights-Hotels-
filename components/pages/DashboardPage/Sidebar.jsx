"use client"
import "@/styles/dashboard/dashboard.css"

import Image from "next/image"

const Sidebar = ({ onViewChange, activeView }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'profile', label: 'My Profile' },
        { id: 'flights', label: 'My Flights' },
        { id: 'hotels', label: 'My Hotels' },
        { id: 'password', label: 'Change Password' },
        { id: 'logout', label: 'Logout' },
    ];

    return (
        <aside className="sidebar">

            <div className="profile-wrapper">
                <figure>
                   <Image src="/assets/images/dashboard/user-image.png" width={73} height={73} alt="user image"></Image>
                </figure>
                <div className="name">
                    <p>Deepak Chauhan</p>
                </div>
                <div className="email">
                    <p>info@vedikanttravel.com</p>
                </div>

                <button>
                    <span>View Profile</span>
                </button>

            </div>

            <nav className="nav">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onViewChange(item.id)}
                        className={`menuItem ${activeView === item.id ? 'active' : ''}`}
                    >
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar