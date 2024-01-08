"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { SocialLogin } from "@/components/auth/social-login";
import { PreviousButton } from "@/components/auth/previous-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerTitle: string;
  previousButtonLabel: string;
  previousButtonHref: string;
  showSocialLogin?: boolean;
}

export const CardWrapper = ({
  children,
  headerTitle,
  headerDescription,
  previousButtonLabel,
  previousButtonHref,
  showSocialLogin = true,
}: CardWrapperProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col p-6 space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">{headerTitle}</h1>
        <CardDescription className="text-sm text-muted-foreground">
          {headerDescription}
        </CardDescription>
      </CardHeader>
      <div className="p-6 pt-0 grid gap-4">
        {showSocialLogin && <SocialLogin />}
        <CardContent>{children}</CardContent>
      </div>
      <CardFooter className="text-sm text-muted-foreground">
        Not a Member yet?
        <PreviousButton
          href={previousButtonHref}
          label={previousButtonLabel}
          className="underline underline-offset-4 hover:text-primary ml-1"
        />
      </CardFooter>
    </Card>
  );
};
