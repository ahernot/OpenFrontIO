import { describe, expect, test } from "vitest";
import { shouldPreserveGhostAfterBuild } from "../../../src/client/controllers/BuildPreviewController";
import { UnitType } from "../../../src/core/game/Game";

describe("BuildPreviewController ghost preservation (locked nuke / Enter confirm)", () => {
  describe("shouldPreserveGhostAfterBuild", () => {
    test("returns true for buildable tools so ghost stays active after placement", () => {
      const buildableTypes = [
        UnitType.AtomBomb,
        UnitType.HydrogenBomb,
        UnitType.City,
        UnitType.Factory,
        UnitType.Port,
        UnitType.DefensePost,
        UnitType.MissileSilo,
        UnitType.SAMLauncher,
        UnitType.Warship,
        UnitType.MIRV,
      ];

      for (const unitType of buildableTypes) {
        expect(shouldPreserveGhostAfterBuild(unitType)).toBe(true);
      }
    });
  });
});
