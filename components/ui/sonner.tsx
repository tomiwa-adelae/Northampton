"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = "system" } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps["theme"]}
			className="toaster group text-white"
			toastOptions={{
				classNames: {
					toast: "group toast group-[.toaster]:bg-secondary text-white group-[.toaster]:shadow-lg",
					description: "group-[.toast]:text-white",
					actionButton: "group-[.toast]:bg-primary",
					cancelButton: "group-[.toast]:bg-muted",
				},
			}}
			{...props}
		/>
	);
};

export { Toaster };
