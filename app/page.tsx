import { LoginButton } from "@/components/auth/login-button";

export default async function Home() {
  return (
    <main className="relative h-full flex flex-col items-center justify-center">
      <article className="container flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 lg:h-[800px]">
        <div className="relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r inset-0 bg-zinc-900">
          <strong className="relative z-20 flex items-center text-lg font-medium">
            Authentication
          </strong>
        </div>

        <section className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-[400px]">
            <header className="flex flex-col space-y-2 text-center">
              <LoginButton>Login</LoginButton>
              <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
            </header>
          </div>
        </section>
      </article>
    </main>
  );
}
