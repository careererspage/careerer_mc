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
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useCallback } from "react";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "email is required.",
  }),
  password: z.string().min(5, {
    message: "password is required.",
  }),
  country: z.string().min(1, {
    message: "country is required.",
  }),
});

export const RegisterModal = () => {
  const { isOpen, onOpen, onClose, type } = useModal();

  const router = useRouter();

  const isModalOpen = isOpen && type === "RegisterModal";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      country: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/register", values);

      form.reset();
      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
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
          <DialogTitle className="text-2xl text-center font-bold">
            Create a Free account{" "}
          </DialogTitle>
          <DialogDescription className="text-zinc-500">
            Welcome to Migrate Compass.
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
                        className="bg-opacity-50 bg-slate-50 border border-gray-300 focus-visible:ring-0 focus:bg-opacity-100 focus:bg-slate-100 transition-all text-black focus-visible:ring-offset-0"
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
                        className="bg-opacity-50 bg-slate-50 border border-gray-300 focus-visible:ring-0 focus:bg-opacity-100 focus:bg-slate-100 transition-all text-black focus-visible:ring-offset-0"
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
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Country of Birth
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-opacity-50 bg-slate-50 border border-gray-300 focus-visible:ring-0 focus:bg-opacity-100 focus:bg-slate-100 transition-all text-black focus-visible:ring-offset-0"
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

        <div className="flex px-6 flex-col gap-4 mt-3">
          <hr />
          {/* <button
            disabled={isLoading}
            onClick={() => signIn("google")}
            className="relative w-full py-2 flex items-center justify-center gap-7 text-center disabled:cursor-not-allowed rounded-lg hover:opacity-75 hover:bg-slate-50 transition bg-white border-[#febb02] text-black border"
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
