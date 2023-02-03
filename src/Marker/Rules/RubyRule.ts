import { MarkerBag } from "../../MarkerBag/MarkerBag";
import { Marker } from "../Marker";
import { Color } from "../types/color.enum";
import { Rule } from "./Rule";

export class RubyRule implements Rule {
	applyRule(pickedMarkers: Marker[]): boolean {
		const lastMarker = pickedMarkers[pickedMarkers.length - 1];
		const secondLastMarker = pickedMarkers[pickedMarkers.length - 2];

		const ruleApplies =
			lastMarker.color === Color.Green ||
			secondLastMarker.color === Color.Green;

		if (ruleApplies) {
			console.log(
				"The last or second last marker is green, so the Ruby rule applies!"
			);
		}

		return ruleApplies;
	}

	handleRule(pickedMarkers: Marker[], _: MarkerBag): void {
		pickedMarkers.push(new Marker(Color.Ruby, 5));
		console.log("Added a Ruby marker to the picked markers! 💎");
	}
}
