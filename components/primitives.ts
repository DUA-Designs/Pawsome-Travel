import { button } from "@nextui-org/theme";
import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
 
        primary: "from-[#FFD463] to-[#FFC107]",
  secondary: "from-[#8BC34A] to-[#8BC34A]",
  accent: "from-[#FFC107] to-[#FFC107]",

      // foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",

    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
        "primary",
"secondary",
"accent",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});



export const customButton = tv({
  ...button,
  variants: {
    color: {
      ...button.variants.color,
      customYellow: "bg-[#F7DC6F] hover:bg-[#FFC107] text-[#333333]",
      customGreen: "bg-[#6FEE8D] hover:bg-[#17c964] text-[#333333]",
    } as {
      default: string;
      primary: string;
      secondary: string;
      success: string;
      warning: string;
      danger: string;
      customYellow: string;
      customGreen: string;
    },
  },
})


