"use client";

import React, { useEffect } from "react";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Sidebar from "../Components/SideBar/SideBar";
import { useGlobalContextProvider } from "@/Types/contextApi";
import { menuItemType } from "@/Types/MenuItemTypes";
import Areas from "../Pages/Areas/Areas";
import AllHabits from "../Pages/AllHabits/AllHabits";
import Statistics from "../Pages/Statistics/Statistics";
import { useState } from "react";

function Dashboard(){
    const { menuItemsObject } = useGlobalContextProvider();
    const { menuItems } = menuItemsObject;
    const [selectedMenu, setSelectedMenu] = useState<menuItemType | null>(null);
    let selectComponent = null;

    useEffect(() => {
        menuItems.map((singleItem) => {
            if (singleItem.isSelected) {
                setSelectedMenu(singleItem);
            }
        });
    }, [menuItems]);

    switch (selectedMenu?.name) {
        case "All Habits":
            selectComponent = <AllHabits />;
            break;
        case "Statistics":
            selectComponent = <Statistics />;
            break;
        case "Areas":
            selectComponent = <Areas />;
            break;
        case "All Areas":
            break;
    }
    return (
        <div className="flex">
            <Sidebar />
            {selectComponent}
        </div>
    );
}

export default Dashboard;