import { describe, it, expect } from "vitest";
import { RubyRule } from "./RubyRule";
import { Marker } from "../Marker/Marker";
import { Color } from "../types/color.enum";

describe("RubyRule class", () => {
	describe("applyRule method", () => {
		it("should return true if the last picked marker is green", () => {
			const rule = new RubyRule();
			const markers = [
				new Marker(Color.Yellow, 2),
				new Marker(Color.White, 3),
				new Marker(Color.Green, 1),
			];

			const actual = rule.applyRule(markers);
			const expected = true;

			expect(actual).toBe(expected);
		});

		it("should return true if the second last picked marker is green", () => {
			const rule = new RubyRule();

			const markers = [
				new Marker(Color.Orange, 1),
				new Marker(Color.Green, 3),
				new Marker(Color.Yellow, 2),
			];

			const actual = rule.applyRule(markers);
			const expected = true;

			expect(actual).toBe(expected);
		});

		it("should return false if the last and second last picked marker are not green", () => {
			const rule = new RubyRule();

			const markers = [
				new Marker(Color.Orange, 1),
				new Marker(Color.White, 3),
				new Marker(Color.Yellow, 2),
			];

			const actual = rule.applyRule(markers);
			const expected = false;

			expect(actual).toBe(expected);
		});
	});
});
