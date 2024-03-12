import { CardWrapper } from "@/components/auth/card-wrapper";

enum CardWrapperOptions {
  headerLabel = "Welcome back",
  buttonLabel = "Don't have an account?",
  buttonHref = "/auth/register",
}

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel={CardWrapperOptions.headerLabel}
      backButtonLabel={CardWrapperOptions.buttonLabel}
      backButtonHref={CardWrapperOptions.buttonHref}
      showSocial
    >
      Login Form
    </CardWrapper>
  );
};
