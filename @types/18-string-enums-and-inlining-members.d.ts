/**
 * String enums and Inlining members
 */
declare enum Sizes {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
declare let selected: Sizes;
declare function updateSize(size: Sizes): void;
