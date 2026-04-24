import React from "react";
import { LunaSettings, LunaButtonSetting, LunaTextSetting } from "@luna/ui";
import { copyCurrentLink, storage } from ".";

export const Settings = () => {
	const [backendUrl, setBackendUrl] = React.useState(storage.backendUrl);
	return (
		<LunaSettings>
			<LunaTextSetting
				title="Backend URL"
				desc="URL of the linkhop backend (default: https://linkhop.paul.wtf)"
				value={backendUrl}
				onChange={(e) => setBackendUrl((storage.backendUrl = e.target.value))}
			/>
			<LunaButtonSetting
				title="Copy Spotify Link"
				desc="Copy the Spotify link for the currently playing track"
				onClick={() => copyCurrentLink('spotify')}
			/>
			<LunaButtonSetting
				title="Copy Deezer Link"
				desc="Copy the Deezer link for the currently playing track"
				onClick={() => copyCurrentLink('deezer')}
			/>
		</LunaSettings>
	);
};
