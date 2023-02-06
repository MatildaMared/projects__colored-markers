import { MarkerBag } from "../MarkerBag/MarkerBag";
import { Marker } from "../Marker/Marker";
import { Rule } from "./Rule";

export class WhiteMarkersAboveNineRule implements Rule {
	applyRule(pickedMarkers: Marker[]): boolean {
		const whiteMarkersTotalValue = pickedMarkers
			.filter((marker) => marker.color === "white")
			.reduce((total, marker) => total + marker.value, 0);

		const ruleApplies = whiteMarkersTotalValue > 9;

		if (ruleApplies) {
			console.log(
				"The total value of white markers is above 9, so the WhiteMarkersAboveNine rule applies!"
			);
		}

		return ruleApplies;
	}

	handleRule(pickedMarkers: Marker[], markerBag: MarkerBag): void {
		const allGreenMarkers = pickedMarkers.filter(
			(marker) => marker.color === "green"
		);
		allGreenMarkers.forEach((marker) => {
			const markerIndex = pickedMarkers.indexOf(marker);
			pickedMarkers.splice(markerIndex, 1);
			markerBag.addMarker(marker);
		});
	}
}
