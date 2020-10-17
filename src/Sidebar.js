import React from "react";
import "./Sidebar.css";
import SidebarChannel from "./SidebarChannel";
import { Avatar } from "@material-ui/core";
//Icon
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";



function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h1>TOP</h1>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h1>Channel</h1>
          </div>

          <AddIcon className="sidebar__addChannel" />
        </div>

        <div className="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />

        <div className="sidebar__voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
            <InfoOutlinedIcon />
            <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
          <Avatar src="https://avatars3.githubusercontent.com/u/5955384?s=60&v=4" />
          <div className="sidebar__profileInfo">
              <h3>@hilalramadan94</h3>
              <p>This is my ID</p>
          </div>

          <div className="sidebar__profileIcons">
              <MicIcon />
              <HeadsetIcon />
              <SettingsIcon />
          </div>
      </div>
    </div>
  );
}

export default Sidebar;
