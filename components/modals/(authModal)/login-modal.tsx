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
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useCallback } from "react";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "email is required.",
  }),
  password: z.string().min(5, {
    message: "password is required.",
  }),
});

export const LoginModal = () => {
  const { isOpen, onOpen, onClose, type } = useModal();

  const router = useRouter();

  const isModalOpen = isOpen && type === "loginModal";

  const onToggle = useCallback(() => {
    onOpen("loginModal");
    onOpen("RegisterModal");
  }, [onOpen]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      signIn("credentials", {
        ...values,
      }).then((callback) => {
        if (callback?.ok) {
          form.reset();
          router.refresh();
          onClose();
        }
        if (callback?.error) {
          onClose();
          console.log("Wrong credentials");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Login into your account
          </DialogTitle>
          <DialogDescription className="text-zinc-500">
            Welcome back to Migrate Compass.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4 px-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
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
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button variant="primary" disabled={isLoading}>
                Login
              </Button>
            </div>
          </form>
        </Form>

        <div className="flex px-6 flex-col gap-4 mt-3">
          <hr />
          <button
            disabled={isLoading}
            onClick={() => signIn("google")}
            className="relative w-full py-2 flex items-center justify-center gap-7 text-center disabled:cursor-not-allowed rounded-lg hover:opacity-75 hover:bg-slate-50 transition bg-white border-[#febb02] text-black border"
          >
            <FcGoogle size={24} />
            Continue with Google
          </button>

          <div className="text-neutral-500 text-center my-2 font-light">
            <p>
              Don&apos;t have an account?
              <span
                onClick={onToggle}
                className="
              text-neutral-800 ml-1
              cursor-pointer 
              hover:underline
            "
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
