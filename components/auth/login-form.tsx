import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = ({}) => {
  return (
    <>
      <article className="container max-w-[460px] h-full flex items-center justify-center">
        <CardWrapper
          headerTitle="Sign In"
          headerDescription="Your Social Campaigns"
          previousButtonLabel="Sign Up"
          previousButtonHref="/auth/register"
          showSocialLogin
        />
      </article>
    </>
  );
};
