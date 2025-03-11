import { whatsappNumber } from "@/constants";
import Image from "next/image";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const WhatsappIcon = () => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<div className="relative">
						<a
							href={`https://wa.me/${whatsappNumber}`}
							target="_blank"
							className="hover:bg-white/30 p-2 backdrop-blur-sm fixed bottom-3 right-2 z-50 rounded-md"
						>
							<span className="absolute inline-flex h-full w-full animate-ping duration-1000 rounded-full bg-primary opacity-50"></span>
							<Image
								src={"/assets/icons/whatsapp.svg"}
								alt={"Whatsapp Icon"}
								width={1000}
								height={1000}
								className="w-12 h-12"
							/>
						</a>
					</div>
				</TooltipTrigger>
				<TooltipContent>
					<p>Chat with us on Whatsapp</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export default WhatsappIcon;
