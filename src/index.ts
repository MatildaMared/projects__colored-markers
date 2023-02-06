import { RubyRule } from "./Rules/RubyRule";
import { WhiteMarkerAfterYellowRule } from "./Rules/WhiteMarkerAfterYellowRule";
import { WhiteMarkersAboveNineRule } from "./Rules/WhiteMarkersAboveNineRule";
import { MarkersGame } from "./MarkersGame/MarkersGame";

const markersGame = new MarkersGame([
	new RubyRule(),
	new WhiteMarkerAfterYellowRule(),
	new WhiteMarkersAboveNineRule(),
]);

markersGame.playGame();
