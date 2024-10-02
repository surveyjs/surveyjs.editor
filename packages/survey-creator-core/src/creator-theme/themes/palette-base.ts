import { CreatorPalettes } from "../creator-themes";

const Palette = {
  themeName: "20",
  colorPalette: "base",
  cssVariables: {
    "--sjs-layer-1-background-500": "#FFFFFFFF",
    "--sjs-layer-1-background-400": "#F8F8F8FF",
    "--sjs-layer-1-foreground-100": "#000000E8",
    "--sjs-layer-1-foreground-50": "#00000073",
    "--sjs-layer-3-background-500": "#F3F3F3FF",
    "--sjs-layer-3-foreground-100": "#000000E8",
    "--sjs-layer-3-foreground-50": "#00000073",
    "--sjs-layer-2-background-500": "#F9F9F9FF",
    "--sjs-layer-2-background-400": "#F3F3F3FF",
    "--sjs-special-haze": "#90909080",
    "--sjs-border-25": "#00000029",
    "--sjs-border-10": "#00000017",
    "--sjs-primary-background-500": "#19B394FF",
    "--sjs-primary-background-10": "#19B3941A",
    "--sjs-primary-background-400": "#14A48BFF",
    "--sjs-primary-foreground-100": "#FFFFFFFF",
    "--sjs-primary-foreground-25": "#FFFFFF40",
    "--sjs-secondary-background-500": "#FF9814FF",
    "--sjs-secondary-background-25": "#FF981440",
    "--sjs-secondary-background-10": "#FF98141A",
    "--sjs-secondary-foreground-100": "#FFFFFFFF",
    "--sjs-secondary-forecolor-25": "#FFFFFF40",
    "--sjs-semantic-red-background-500": "#E50A3EFF",
    "--sjs-semantic-red-background-10": "#E50A3E1A",
    "--sjs-semantic-red-foreground-100": "#FFFFFFFF",
    "--sjs-semantic-green-background-500": "#19B394FF",
    "--sjs-semantic-green-background-10": "#19B3941A",
    "--sjs-semantic-green-foreground-100": "#FFFFFFFF",
    "--sjs-semantic-blue-background-500": "#437FD9FF",
    "--sjs-semantic-blue-background-10": "#437FD91A",
    "--sjs-semantic-blue-foreground-100": "#FFFFFFFF",
    "--sjs-semantic-yellow-background-500": "#FF9814FF",
    "--sjs-semantic-yellow-background-10": "#FF98141A",
    "--sjs-semantic-yellow-foreground-100": "#FFFFFFFF",
    "--sjs-semantic-white-background-500": "#FFFFFFFF",
    "--sjs-code-gray-700": "#B6B6B6FF",
    "--sjs-code-blue-500": "#326FCAFF",
    "--sjs-code-gray-300": "#505050FF",
    "--sjs-code-green-500": "#08997CFF",
    "--sjs-code-red-500": "#F41B50FF",
    "--sjs-code-purple-500": "#C22FA2FF",
    "--sjs-code-yellow-500": "#F58D06FF",
    "--sjs-code-gray-500": "#8A8A8AFF",
    "--sjs-special-background": "#F3F3F3FF",
    "--sjs-layer-1-foreground-75": "#000000BF",
    "--sjs-layer-3-background-400": "#E8E8E8FF",
    "--sjs-special-glow": "#0000001A",
    "--sjs-special-shadow": "#00000026",
    "--sjs-layer-3-foreground-75": "#000000BF",
    "--sjs-layer-2-foreground-100": "#000000E8",
    "--sjs-layer-2-foreground-75": "#000000BF",
    "--sjs-layer-2-foreground-50": "#00000073",
    "--sjs-border-25-overlay": "#00000026",
  }
};

export default Palette;
export const PaletteBase = Palette;

CreatorPalettes[Palette.colorPalette] = Palette;