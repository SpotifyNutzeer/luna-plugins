import React from "react";
import { LunaSettings, LunaButtonSetting } from "@luna/ui";
import { copyCurrentLink } from ".";

export const Settings = () => {
	return (
		<LunaSettings>
			<LunaButtonSetting 
				title="Copy Spotify Link" 
				desc="Copy the Spotify link for the currently playing track" 
				onClick={() => copyCurrentLink('spotify')} 
			/>
			<LunaButtonSetting 
				title="Copy YouTube Link" 
				desc="Copy the YouTube link for the currently playing track" 
				onClick={() => copyCurrentLink('youtube')} 
			/>
		</LunaSettings>
	);
};