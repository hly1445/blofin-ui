export type BUIComponentSize = "large" | "medium" | "small";

export type BUIComponentColor = "primary" | "success" | "danger" | "warning";

export type BUITheme = "light" | "dark";

export interface Base {
  size: BUIComponentSize | string;
  theme?: BUITheme;
  className?: string;
}
