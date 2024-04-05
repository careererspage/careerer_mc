"use client";

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";

import { useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

import React from "react";
import { sendWelcomeEmail } from "@/actions/sendWelcomeEmail";

const formSchema = z.object({
  email: z
    .string()
    .email()
    .refine((value) => value.endsWith("@gmail.com"), {
      message: "Email must be a Gmail address.",
    }),
  password: z.string().min(5, {
    message: "password is required.",
  }),
  country: z.string().min(1, {
    message: "country is required.",
  }),
  firstname: z.string().min(2, {
    message: "Name is required.",
  }),
});

export const RegisterModal = () => {
  const { isOpen, onOpen, onClose, type } = useModal();
  const { toast } = useToast();

  const router = useRouter();

  const isModalOpen = isOpen && type === "RegisterModal";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      country: "",
      firstname: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const result = formSchema.safeParse(values);

      if (!result.success) {
        // If form validation fails, display the first error message
        const firstError = Object.values(result.error.errors)[0];
        toast({
          style: {
            background: "black",
            color: "#fff",
          },
          variant: "destructive",
          description: firstError.message,
          action: <ToastAction altText="Close">Close</ToastAction>,
        });
        return;
      }
      await axios.post("/api/register", values);

      // Send welcome email after successful registration
      const { error } = await sendWelcomeEmail(values);
      if (error) {
        toast({
          style: {
            background: "black",
            color: "#fff",
          },
          variant: "destructive",
          description: error,
          action: <ToastAction altText="Close">Close</ToastAction>,
        });
        return;
      }

      form.reset();
      router.refresh();
      onClose();
      toast({
        style: {
          background: "black",
          color: "#fff",
        },
        description: "Account created successfully!",
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error.response.data,
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  const onToggle = useCallback(() => {
    onOpen("RegisterModal");
    onOpen("loginModal");
  }, [onOpen]);

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="md:text-2xl sm:text-xl text-lg text-center sm:font-bold font-semibold">
            Create a Free account{" "}
          </DialogTitle>
          <DialogDescription className="text-zinc-500 text-sm sm:text-base">
            Welcome to Migrate Compass.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4 px-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState: { error } }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs sm:font-bold font-semibold text-zinc-500 dark:text-secondary/70">
                      Email
                    </FormLabel>
                    {error && (
                      <p className="text-red-500 mt-2">{error.message}</p>
                    )}
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-opacity-50 bg-slate-50 border border-gray-300 focus-visible:ring-0 focus:bg-opacity-100 focus:bg-slate-100 transition-all text-zinc-600 !font-normal focus-visible:ring-offset-0"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs sm:font-bold font-semibold text-zinc-500 dark:text-secondary/70">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-opacity-50 bg-slate-50 border border-gray-300 focus-visible:ring-0 focus:bg-opacity-100 focus:bg-slate-100 transition-all text-zinc-600 !font-normal focus-visible:ring-offset-0"
                        placeholder="Enter password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs sm:font-bold font-semibold text-zinc-500 dark:text-secondary/70">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-opacity-50 bg-slate-50 border border-gray-300 focus-visible:ring-0 focus:bg-opacity-100 focus:bg-slate-100 transition-all text-zinc-600 !font-normal focus-visible:ring-offset-0"
                        placeholder="Enter your firstname"
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
                    <FormLabel className="uppercase text-xs sm:font-bold font-semibold text-zinc-500 dark:text-secondary/70">
                      Country of Birth
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-opacity-50 bg-slate-50 border border-gray-300 focus-visible:ring-0 focus:bg-opacity-100 focus:bg-slate-100 transition-all text-zinc-600 !font-normal focus-visible:ring-offset-0"
                        placeholder="Enter your country"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button variant="primary" disabled={isLoading}>
                Create
              </Button>
            </div>
          </form>
        </Form>

        <div className="flex px-6 flex-col gap-4 mt-1">
          <hr />
          {/* <button
            disabled={isLoading}
            onClick={() => signIn("google")}
            className="relative w-full py-2 flex items-center justify-center gap-7 text-center disabled:cursor-not-allowed rounded-lg hover:opacity-75 hover:bg-slate-50 transition bg-white border-[#febb02] text-zinc-600 !font-normal border"
          >
            <FcGoogle size={24} />
            Continue with Google
          </button> */}

          <div className="text-neutral-500 text-center my-2 font-light">
            <p>
              Already have an account?
              <span
                onClick={onToggle}
                className="
              text-neutral-800 ml-1
              cursor-pointer 
              hover:underline
            "
              >
                Log in
              </span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
