import { describe, expect, it } from "vitest";
import { Color } from "../types/color.enum";
import { Marker } from "./Marker";

describe("Marker class", () => {
	it("should return a marker with the correct value and color", () => {
		const marker = new Marker(Color.Green, 1);

		const expected = { color: Color.Green, value: 1 };
		const actual = { color: marker.color, value: marker.value };

		expect(actual).toEqual(expected);
	});
});
