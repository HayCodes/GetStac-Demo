"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../card";
import { Label } from "../label";
import { Input } from "../input";
import { Button } from "../button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Checkbox } from "../checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { signInSchema } from "@/core/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";

type SignInSchema = z.infer<typeof signInSchema>;

const AuthForm = () => {
  const footerLinks = [
    { text: "© Getstac" },
    { text: "·", isSeparator: true },
    { text: "Contact" },
    { text: "·", isSeparator: true },
    { text: "Privacy & terms" },
  ];
  const [showPassword, setShowPassword] = useState(false);
  const signInForm = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInSchema) => {
    //    await handleSignIn(data.email, data.password);
    console.log("Sign In Data:", data);
  };

  return (
    <div className="overflow-hidden w-full flex justify-center relative font-sans">
      <div className="inline-flex z-1 my-5 max-w-lg w-full h-full flex-col items-start gap-10 font-sans">
        <Card className="w-full bg-white rounded shadow-lg border-0">
          <CardContent className="flex flex-col items-start gap-4 p-5 sm:px-10 md:px-12 space-y-5">
            <h1 className="w-full font-semibold text-zinc-600 text-xl leading-5">
              Sign in to your account
            </h1>

            <Form {...signInForm}>
              <form
                className="inline-flex flex-col items-center gap-7 w-full"
                name="signIn-form"
                onSubmit={signInForm.handleSubmit(onSubmit)}
              >
                <div className="inline-flex flex-col items-start gap-8 w-full">
                  {/* Email Field */}
                  <FormField
                    control={signInForm.control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <FormItem className="flex flex-col w-full items-start gap-3">
                        <FormLabel className="font-medium text-zinc-600 text-sm tracking-[0] leading-[normal]">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            name="email"
                            placeholder="jane.doe@gmail.com"
                            container={{
                              className: `w-full font-normal text-[#242440] text-base tracking-[0] leading-[normal] rounded-[5px] border-[#d9dce1] ${
                                fieldState.error
                                  ? "border-red-300 focus:ring-red-500/20 focus:border-red-500"
                                  : ""
                              }`,
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signInForm.control}
                    name="password"
                    render={({ field, fieldState }) => (
                      <FormItem className="flex flex-col w-full items-start gap-3">
                        <div className="flex items-center justify-between w-full">
                          <FormLabel className=" font-normal text-zinc-600 text-sm tracking-[0] leading-[normal]">
                            Password
                          </FormLabel>
                          <button
                            className=" font-normal text-gray-600 text-sm text-right tracking-[0] leading-[normal] hover:underline cursor-pointer"
                            aria-label="Forgot Password"
                          >
                            Forgot your password?
                          </button>
                        </div>
                        <FormControl>
                          <Input
                            {...field}
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••••••••"
                            container={{
                              className: `w-full  font-normal text-[#242440] text-base tracking-[0] leading-[normal] rounded-[5px] border-[#d9dce1] transition-all ${
                                fieldState.error
                                  ? "border-red-300 focus:ring-red-500/20 focus:border-red-500"
                                  : ""
                              } `,
                            }}
                            rightElement={
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label="Toggle password"
                              >
                                {showPassword ? (
                                  <EyeOffIcon className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                                ) : (
                                  <EyeIcon className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                                )}
                              </Button>
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="inline-flex items-center gap-1.5">
                    <Checkbox
                      id="stay-signed-in"
                      className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-[#242440]"
                      defaultChecked
                    />
                    <Label
                      htmlFor="stay-signed-in"
                      className=" font-normal text-zinc-600 text-sm tracking-[0] leading-[normal] cursor-pointer"
                    >
                      Stay signed in for a week
                    </Label>
                  </div>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-[#242440]/90  font-normal text-white text-base text-center tracking-[0] leading-[normal] rounded-[5px] h-auto py-[13.5px]"
                  type="submit"
                >
                  Continue
                </Button>

                <button className=" font-normal text-primary text-sm text-right tracking-[0] leading-[normal] hover:underline cursor-pointer">
                  Validate your new account
                </button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="flex flex-col items-start gap-6 md:pl-6">
          <div className="inline-flex items-start gap-1">
            <span className=" font-normal text-zinc-600 text-sm tracking-[0] leading-[normal]">
              Don&apos;t have an account?
            </span>
            <button className=" font-normal text-[#222822] text-sm tracking-[0] leading-[normal] hover:underline cursor-pointer">
              Book a Session First!
            </button>
          </div>

          <div className="flex items-start gap-[7px]">
            {footerLinks.map((link, index) => (
              <span
                key={index}
                className={` ${
                  link.isSeparator ? "font-medium" : "font-normal"
                } text-zinc-600 text-sm tracking-[0] leading-[normal] cursor-pointer`}
              >
                {link.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
