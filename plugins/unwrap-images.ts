import { defineMdastPlugin } from "satteri";

export const unwrapAndTitleImages = defineMdastPlugin({
  name: "unwrap-and-title-images",
  paragraph(node) {
    const child = node.children[0];

    if (node.children.length === 1 && child?.type === "image") {
      return {
        ...child,
        title: child.title ?? (child.alt || undefined),
      };
    }
  },
});
