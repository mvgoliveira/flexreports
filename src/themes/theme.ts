export const Theme = {
    colors: {
        // SPECIAL
        transparent: "transparent",

        // GRAY SCALE
        white: "#FFF",
        gray10: "#F6F6F6",
        gray20: "#EAEAEA",
        gray30: "#E0E0E0",
        gray40: "#D7D7D7",
        gray45: "#CFCFCF",
        gray50: "#C7C7C7",
        gray60: "#BFBFBF",
        gray70: "#949494",
        gray80: "#7A7A7A",
        gray90: "#171717",
        gray100: "#1C1B1F",
        black: "#000",

        // GRAY BLUE SCALE
        grayBlue20: "#5D6C95",
        grayBlue30: "#424D6B",
        grayBlue40: "#2F3A4A",
        grayBlue50: "#1C2731",

        // PURPLE SCALE
        purple10: "#F6F6FF",
        purple20: "#DAD6FE",
        purple30: "#C3BDFD",
        purple40: "#AD9DFB",
        purple50: "#4732F8",
        purple60: "#3D2BE0",
        purple70: "#3224C9",
        purple80: "#281DB2",
        purple90: "#1E169B",
        purple100: "#140F84",

        // GREEN SCALE
        green10: "#F1FBF4",
        green20: "#DFF6E8",
        green30: "#C7EFD4",
        green40: "#B0E8C0",
        green50: "#43C76E",
        green60: "#38A95D",
        green70: "#2E8C4C",
        green80: "#247F3B",
        green90: "#1A722A",
        green100: "#0F6519",

        // RED SCALE
        red10: "#FDF3F2",
        red20: "#FAD7D5",
        red30: "#F9CDCB",
        red40: "#F7C2C0",
        red50: "#EA574F",
        red60: "#D94A41",
        red70: "#C93D34",
        red80: "#B93028",
        red90: "#A6241C",
        red100: "#9A1910",

        // YELLOW SCALE
        yellow10: "#F2ECC4",
        yellow20: "#E6DFA0",
        yellow30: "#D9D37C",
        yellow40: "#CCC658",
        yellow50: "#EAD34F",
        yellow60: "#C9B541",
        yellow70: "#A88F33",
        yellow80: "#876F25",
    },
    fontSize: {
        fs25: "0.533rem", // 8px
        fs50: "0.667rem", // 10px
        fs75: "0.8rem", // 12px
        fs100: "1rem", // 15px
        fs200: "1.267rem", // 19px
        fs300: "1.553rem", // 23px
        fs400: "1.933rem", // 29px
        fs500: "2.467rem", // 37px
        fs600: "3.067rem", // 46px
        fs700: "3.8rem", // 57px
        fs800: "4.8rem", // 72px
        fs900: "5.933rem", // 89
    },
    lineHeight: {
        fs50: "16px",
        fs75: "16px",
        fs100: "24px",
        fs200: "23px",
        fs300: "28px",
        fs400: "35px",
        fs500: "45px",
        fs600: "56px",
        fs700: "69px",
        fs800: "87px",
        fs900: "108px",
    },
    letterSpacing: {
        fs50: "0.2px",
        fs75: "0.1px",
        fs100: "0.15px",
        fs200: "0.15px",
        fs300: "0.25px",
        fs400: "0.25px",
        fs500: "0.25px",
        fs600: "0.25px",
        fs700: "0.25px",
        fs800: "0.25px",
        fs900: "0.25px",
    },
    fontFamily: {
        inter: "var(--font-inter), sans-serif",
    },
    fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
};

export type ThemeType = typeof Theme;
