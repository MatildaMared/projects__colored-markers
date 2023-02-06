import { Marker } from "../Marker/Marker";
import { Rule } from "../Rules/Rule";
import { Color } from "../types/color.enum";
import { MarkerBag } from "../MarkerBag/MarkerBag";

export class MarkersGame {
	private markerBag: MarkerBag = new MarkerBag();
	private pickedMarkers: Marker[] = [];
	private gameRunning: boolean = false;
	private rules: Rule[] = [];

	constructor(rules: Rule[]) {
		this.rules = rules;
	}

	setupNewGame(): void {
		console.log("Welcome to the colored markers game! Let's start! 😄");
		console.log("--------------------");
		console.log("Generating markers...");

		this.markerBag = new MarkerBag();
		this.pickedMarkers = [];
		this.gameRunning = true;

		console.log("Markers generated! 🎉");
		console.log("--------------------");
	}

	playGame(): void {
		this.setupNewGame();

		console.log("Let the game begin! 🎲");
		console.log("--------------------");

		while (this.gameRunning) {
			const pickedMarker = this.markerBag.pickRandomMarker();

			if (pickedMarker) {
				this.pickedMarkers.push(pickedMarker);
				console.log(
					`You picked a ${pickedMarker.color} marker with value ${pickedMarker.value}! 🎨 🎲`
				);
			} else {
				this.gameOver();
			}

			this.rules.forEach((rule) => {
				if (rule.applyRule(this.pickedMarkers)) {
					rule.handleRule(this.pickedMarkers, this.markerBag);
				}
			});

			const whiteMarkersValue = this.pickedMarkers
				.filter((marker) => marker.color === "white")
				.reduce((total, marker) => total + marker.value, 0);

			if (whiteMarkersValue > 7) {
				console.log("--------------------");
				console.log(
					"The value of the white markers exceeds 7 so the game is over! 😢"
				);
				console.log("--------------------");
				this.gameOver();
			}
		}
	}

	gameOver(): void {
		this.gameRunning = false;

		const totalScore = this.pickedMarkers.reduce(
			(total, marker) => total + marker.value,
			0
		);

		console.log(`Your total score is ${totalScore}! 🎉`);

		console.log("--------------------");

		console.log("Your picked markers:");

		this.pickedMarkers.forEach((marker) => {
			console.log(
				`- One ${marker.color}${
					marker.color === Color.Ruby ? "" : " marker"
				} with value ${marker.value}! ${
					marker.color === Color.Ruby ? "💎" : "🎨"
				}`
			);
		});
	}
}
