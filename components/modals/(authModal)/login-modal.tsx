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
import { useCallback, useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const formSchema = z.object({
  email: z
    .string()
    .email()
    .refine((value) => value.endsWith("@gmail.com"), {
      message: "Email must be a Gmail address.",
    }),
  password: z.string().min(5, {
    message: "Password is required.",
  }),
});

export const LoginModal = () => {
  const { isOpen, onOpen, onClose, type } = useModal();
  const { toast } = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword); // Function to toggle password visibility
  const [isLoadinging, setIsloading] = useState(false);
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsloading(true);
    try {
      const result = formSchema.safeParse(values);

      if (!result.success) {
        // If form validation fails, display the first error message
        const firstError = Object.values(result.error.errors)[0];
        toast({
          style: {
            background: "red",
            color: "#fff",
          },
          variant: "destructive",
          description: firstError.message,
          action: <ToastAction altText="Close">Close</ToastAction>,
        });
        setIsloading(false);
        return;
      }

      signIn("credentials", {
        ...values,
        redirect: false, // Disable redirection on errors
      }).then((callback) => {
        setIsloading(false);
        if (callback?.ok) {
          form.reset();
          router.refresh();
          onClose();
          router.push("invite/cd8cdd9f-a6ea-4b61-a06a-ead537c99ad5");
          window.location.reload();
        }
        if (callback?.error) {
          onClose();
          toast({
            style: {
              background: "red",
              color: "#fff",
            },
            variant: "destructive",
            description: "Wrong Credential",
            action: <ToastAction altText="Close">Close</ToastAction>,
          });
        }
      });
    } catch (error: any) {
      setIsloading(false);
      toast({
        style: {
          background: "red",
          color: "#fff",
        },
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

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="md:text-2xl sm:text-xl text-lg text-center font-bold">
            Login into your account
          </DialogTitle>
          <DialogDescription className="text-zinc-500 text-sm sm:text-base">
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
                    <FormLabel className="uppercase text-xs sm:font-bold font-semibold text-zinc-500 dark:text-secondary/70">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoadinging}
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
                      <div className="relative">
                        <Input
                          disabled={isLoadinging}
                          className="bg-opacity-50 bg-slate-50 border border-gray-300 focus-visible:ring-0 focus:bg-opacity-100 focus:bg-slate-100 transition-all text-zinc-600 !font-normal focus-visible:ring-offset-0"
                          placeholder="Enter password"
                          type={showPassword ? "text" : "password"} // Change type based on state
                          {...field}
                        />
                        <div
                          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-5 w-5" />
                          ) : (
                            <EyeIcon className="h-5 w-5" />
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button variant="primary" disabled={isLoadinging}>
                Login
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
