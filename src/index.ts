import { RubyRule } from "./Marker/Rules/RubyRule";
import { WhiteMarkerAfterYellowRule } from "./Marker/Rules/WhiteMarkerAfterYellowRule";
import { WhiteMarkersAboveNineRule } from "./Marker/Rules/WhiteMarkersAboveNineRule";
import { MarkersGame } from "./MarkersGame/MarkersGame";

const markersGame = new MarkersGame([
	new RubyRule(),
	new WhiteMarkerAfterYellowRule(),
	new WhiteMarkersAboveNineRule(),
]);

markersGame.playGame();
