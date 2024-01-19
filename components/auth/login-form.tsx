"use client"; //

import * as z from "zod"; // zod는 타입스크립트를 위한 스키마 정의 라이브러리입니다.

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // zodResolver는 zod 스키마를 사용하여 react-hook-form을 위한 유효성 검사기를 만드는 데 사용됩니다.

import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const LoginForm = ({}) => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  };

  return (
    <>
      <article className="container max-w-[460px] h-full flex items-center justify-center">
        <CardWrapper
          headerTitle="Sign In"
          headerDescription="Your Social Campaigns"
          previousButtonLabel="Sign Up"
          previousButtonHref="/auth/register"
          showSocialLogin
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        placeholder="user@example.com"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.email?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="mt-3">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} placeholder="" />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.email?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormError message="이메일 또는 비밀번호가 잘못되었습니다." />
              <FormSuccess message="로그인에 성공했습니다." />
              <Button
                type="submit"
                className="mt-3 flex items-center justify-center w-full whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
              >
                Sign In
              </Button>
            </form>
          </Form>
        </CardWrapper>
      </article>
    </>
  );
};
