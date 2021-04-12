import { DetectionRule } from "../rules";
import { ReflectSceneNodeType } from "@bridged.xyz/design-sdk/lib/nodes";
import { DEFAULT_CHIP_NAMING_CONVENTION_PATTERNS } from "@reflect-ui/lint/lib/constants/naming-conventions/chip.naming";

export default <DetectionRule>{
  mustBeSquare: true,
  allowedTypes: [
    {
      target: "*",
      allow: false,
    },
    {
      target: ReflectSceneNodeType.frame,
      allow: true,
    },
    {
      target: ReflectSceneNodeType.group,
      allow: true,
    },
    {
      target: ReflectSceneNodeType.component,
      allow: true,
    },
    {
      target: ReflectSceneNodeType.instance,
      allow: true,
    },
    {
      //Check It?
      target: ReflectSceneNodeType.vector,
      allow: false,
    },
  ],
  allowedChildren: [
    {
      target: "*",
      allow: true,
    },
  ],
  allowedNamePatterns: DEFAULT_CHIP_NAMING_CONVENTION_PATTERNS,
};
