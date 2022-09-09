import {
    FileAddOutlined, FileAddTwoTone,
    FileTextOutlined, FileTextTwoTone,
    ProfileOutlined, ProfileTwoTone,
    ReadOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import React from "react";

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const secondaryMenuItemsFollowers = [
    {label:'View Blog Followers',key: '1.1',icon: <TeamOutlined/>}
];

const secondaryMenuItemsProfile = [
    {label:'View Profile',key: '3.1',icon: <ProfileTwoTone />}
];

const secondaryMenuItemsPosts = [
    {label:'View Blog Posts', key:'2.1',icon: <FileTextTwoTone />},
    {label:'Add new Posts', key:'2.2',icon: <FileAddTwoTone />},
];

export const mainMenuItems = [
    getItem('Blog Followers', '1', <TeamOutlined />,secondaryMenuItemsFollowers),
    getItem('Published Material', '2', <ReadOutlined />, secondaryMenuItemsPosts),
    getItem('Profile', '3', <UserOutlined />, secondaryMenuItemsProfile),

];
