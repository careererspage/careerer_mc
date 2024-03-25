"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FileUpload } from "../file-upload";
import { Input } from "../ui/input";
import { ChannelType } from "@prisma/client";
import Container from "../container";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Email is required." }),
  country: z.string().min(1, { message: "country is required." }),
  address: z.string().min(1, { message: "Address is required." }),
  firstName: z.string().min(1, { message: "First name is required." }),
  lastNmae: z.string().min(1, { message: "Last name is required." }),
  language: z.string().min(1, { message: "Language is required." }),
  tel: z.string().min(1, { message: "Telephone number is required." }),
});
const ProfileContent = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      address: "",
      firstName: "",
      lastName: "",
      language: "",
      tel: "",
      imageUrl: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Handle form submission here
    // console.log(values);
  };

  return (
    <div className="w-full ml-6 p-4 bg-white shadow-md">
      <Container>
        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <h1 className="md:text-2xl text-lg font-bold text-center">
                Update profile
              </h1>
              <div className=" w-full grid grid-cols-2 md:gap-8 gap-4 md:px-6 px-0">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase !text-[10px] font-bold text-zinc-500 dark:text-secondary/70">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border border-gray-200 focus-visible:ring-0 text-black placeholder:text-[12px] focus-visible:ring-offset-0 outline-none focus:bg-slate-50 transition-all duration-200 ease-in"
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
                      <FormLabel className="uppercase text-[10px] font-bold text-zinc-500 dark:text-secondary/70">
                        Email{" "}
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border border-gray-200 focus-visible:ring-0 text-black placeholder:text-[12px] focus-visible:ring-offset-0 outline-none focus:bg-slate-50 transition-all duration-200 ease-in"
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
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-[10px] font-bold text-zinc-500 dark:text-secondary/70">
                        First name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border border-gray-200 focus-visible:ring-0 text-black placeholder:text-[12px] focus-visible:ring-offset-0 outline-none focus:bg-slate-50 transition-all duration-200 ease-in"
                          placeholder="Enter your first name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-[10px] font-bold text-zinc-500 dark:text-secondary/70">
                        Last name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border border-gray-200 focus-visible:ring-0 text-black placeholder:text-[12px] focus-visible:ring-offset-0 outline-none focus:bg-slate-50 transition-all duration-200 ease-in"
                          placeholder="Enter your last name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-[10px] font-bold text-zinc-500 dark:text-secondary/70">
                        Country of Birth
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border border-gray-200 focus-visible:ring-0 text-black placeholder:text-[12px] focus-visible:ring-offset-0 outline-none focus:bg-slate-50 transition-all duration-200 ease-in"
                          placeholder="Enter your Country"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-[10px] font-bold text-zinc-500 dark:text-secondary/70">
                        Country of Residence
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border border-gray-200 focus-visible:ring-0 text-black placeholder:text-[12px] focus-visible:ring-offset-0 outline-none focus:bg-slate-50 transition-all duration-200 ease-in"
                          placeholder="Country you live in"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-[10px] font-bold text-zinc-500 dark:text-secondary/70">
                        Language{" "}
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border border-gray-200 focus-visible:ring-0 text-black placeholder:text-[12px] focus-visible:ring-offset-0 outline-none focus:bg-slate-50 transition-all duration-200 ease-in"
                          placeholder="Language"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-[10px] font-bold text-zinc-500 dark:text-secondary/70">
                        Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border border-gray-200 focus-visible:ring-0 text-black placeholder:text-[12px] focus-visible:ring-offset-0 outline-none focus:bg-slate-50 transition-all duration-200 ease-in"
                          placeholder="Enter your address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-[10px] font-bold text-zinc-500 dark:text-secondary/70">
                        Tel
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border border-gray-200 focus-visible:ring-0 text-black placeholder:text-[12px] focus-visible:ring-offset-0 outline-none focus:bg-slate-50 transition-all duration-200 ease-in"
                          placeholder="Enter your telephone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                variant="primary"
                size="lg"
                disabled={isLoading}
                className="mx-6"
              >
                Update
              </Button>
            </form>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default ProfileContent;
