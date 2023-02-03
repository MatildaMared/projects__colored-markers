import { MarkerBag } from "../../MarkerBag/MarkerBag";
import { Marker } from "../Marker";
import { Color } from "../types/color.enum";
import { Rule } from "./Rule";

export class WhiteMarkerAfterYellowRule implements Rule {
	applyRule(pickedMarkers: Marker[]): boolean {
		const lastMarker = pickedMarkers[pickedMarkers.length - 1];
		const secondLastMarker = pickedMarkers[pickedMarkers.length - 2];

		const ruleApplies =
			lastMarker.color === Color.Yellow &&
			secondLastMarker.color === Color.White;

		if (ruleApplies) {
			console.log(
				"The last marker is yellow and the second last marker is white, so the White marker after yellow rule applies!"
			);
		}

		return ruleApplies;
	}

	handleRule(pickedMarkers: Marker[], markerBag: MarkerBag): void {
		const whiteMarker = pickedMarkers.splice(pickedMarkers.length - 2, 1)[0];

		if (whiteMarker.color !== Color.White) {
			throw new Error("Marker is not white");
		}

		markerBag.addMarker(whiteMarker);
	}
}
