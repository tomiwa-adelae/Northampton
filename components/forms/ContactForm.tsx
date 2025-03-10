"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { Textarea } from "../ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { subjects } from "@/constants";
import { useState } from "react";
import { Spotlight } from "../ui/spotlight-new";

const FormSchema = z.object({
	name: z
		.string()
		.min(2, { message: "First name must be at least 2 characters." }),
	email: z
		.string({ required_error: "Email is required." })
		.email("Invalid email address."),
	phone: z.string().refine(isValidPhoneNumber, {
		message: "Invalid phone number",
	}),
	subject: z.string({
		required_error: "Highest level of education is required.",
	}),
	message: z.string().min(10, {
		message: "Message must be at least 10 characters.",
	}),
});

export function ContactForm() {
	const [value, setValue] = useState<string | undefined>(undefined);
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {}

	return (
		<div className="bg-white py-16 relative overflow-hidden">
			<Spotlight />
			<div className="container">
				<h2
					className={`uppercase text-xl md:text-2xl lg:text-3xl leading-loose md:leading-loose lg:leading-normal  font-semibold mb-2 text-center text-primary`}
				>
					Send us a message
				</h2>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your name"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type={"email"}
											placeholder="Enter your email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<PhoneInput
											placeholder="Enter phone number"
											value={value}
											onChange={(phone) => {
												setValue(phone);
												field.onChange(phone); // Ensure form gets updated
											}}
											defaultCountry="NG"
											className="flex h-14 w-full rounded-md border border-input bg-background px-3 py-2 text-base sm:text-sm"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="subject"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Subject</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select a subject" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{subjects.map((subject, index) => (
												<SelectItem
													key={index}
													value={subject}
												>
													{subject}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea
											placeholder="We are happy to hear your inquiries..."
											className="resize-none"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button size="lg" type="submit">
							Send message
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
}
