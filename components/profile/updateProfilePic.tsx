"use client";
import React from "react";
import { FormControl, FormField, FormItem, Form } from "../ui/form";
import { FileUpload } from "../file-upload";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";
import { ToastAction } from "../ui/toast";

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Server image is required.",
  }),
});

interface UpdateProfilePicProps {
  currentUser?: SafeUser;
}

const UpdateProfilePic = ({ currentUser }: UpdateProfilePicProps) => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/register/${currentUser?.id}/updateImage`, values);

      form.reset();
      router.refresh();
      toast({
        variant: "default",
        title: "Image updated successfully.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "File must not be above 8mb and not more than an image.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FileUpload
                    endpoint="serverImage"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <button
            className="py-2 px-1 bg-indigo-500 text-white hover:bg-indigo-500/90 sm:text-sm text-[12px] rounded-md"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {currentUser?.imageUrl
              ? "Update profile image"
              : "Upload profile image"}
          </button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateProfilePic;
