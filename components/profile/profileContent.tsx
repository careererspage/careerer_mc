"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
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
import { SafeUser } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import UpdateProfilePic from "./updateProfilePic";

const formSchema = z.object({
  email: z.string().email({ message: "Email is required." }),
  country: z.string().min(1, { message: "country is required." }),
  address: z.string().min(1, { message: "Address is required." }),
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  language: z.string().min(1, { message: "Language is required." }),
  tel: z.string().min(1, { message: "Telephone number is required." }),
});

interface ProfileContentProps {
  currentUser?: SafeUser | undefined;
}

const ProfileContent = ({ currentUser }: ProfileContentProps) => {
  const router = useRouter();
  const [isModified, setIsModified] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: currentUser?.email || "",
      country: currentUser?.country || "",
      address: currentUser?.address || "",
      firstName: currentUser?.firstName || "",
      lastName: currentUser?.lastName || "",
      language: currentUser?.language || "",
      tel: currentUser?.tel || "",
      imageUrl: currentUser?.imageUrl || "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const { isDirty } = form.formState;

  // Update isModified state based on form dirtiness
  useEffect(() => {
    setIsModified(isDirty);
  }, [isDirty]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const hasChanges = Object.keys(values).some((key) => {
        const typedKey = key as keyof typeof values;
        return values[typedKey] !== currentUser?.[typedKey];
      });

      if (!hasChanges) {
        toast({
          style: {
            background: "black",
            color: "#fff",
          },
          description: "No changes detected!",
        });
        return;
      }

      await axios.patch(`/api/register/${currentUser?.id}`, values);
      form.reset();
      router.refresh();
      toast({
        style: {
          background: "black",
          color: "#fff",
        },
        description: "Account updated successfully!",
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: "Error upating profile, Try again",
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
    }
  };

  return (
    <div className="w-full mx-auto md:ml-6 p-4 bg-white shadow-md">
      <Container>
        <div className="">
          <UpdateProfilePic currentUser={currentUser} />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mt-4"
            >
              <h1 className="md:text-2xl text-base sm:font-bold font-semibold text-center">
                Update profile
              </h1>
              <div className=" w-full grid grid-cols-2 md:gap-8 gap-4 md:px-6 px-0">
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
