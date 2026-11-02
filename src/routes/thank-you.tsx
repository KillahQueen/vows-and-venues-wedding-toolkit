import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Mail, ShieldCheck, Sparkles, Download, Clock } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Your Wedding Planning Toolkit Order Is Confirmed" },
      {
        name: "description",
        content:
          "Your order is confirmed. Your download link is on its way to your inbox. The debit will be performed by Digistore24.com.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Thank You — Your Order Is Confirmed" },
      {
        property: "og:description",
        content:
          "Your Wedding Planning Toolkit order is confirmed. Check your inbox for your download link.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-center px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary">
              <Heart className="size-4 fill-primary-foreground text-primary-foreground" />
            </span>
            <span className="font-display text-lg font-semibold tracking-wide">
              The Wedding Planning Toolkit
            </span>
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="hero-glow">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-24">
          <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary">
            <Heart className="size-8 fill-primary-foreground text-primary-foreground" />
          </span>

          <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Order confirmed
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium text-balance sm:text-5xl">
            Congratulations — and happy planning!
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Your purchase of The Complete Wedding Planning Toolkit went through
            successfully. You're minutes away from budgets, timelines, seating
            charts, vendors, invitations and colors — all in one place.
          </p>

          <div className="mt-10 rounded-3xl border border-border bg-card p-8 text-left shadow-xl shadow-primary/10 sm:p-10">
            <h2 className="font-display text-2xl font-semibold">
              What happens next
            </h2>
            <ol className="mt-6 space-y-6">
              <li className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Mail className="size-5 text-primary" />
                </span>
                <div>
                  <p className="font-semibold">Check your inbox</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    Your download link and receipt arrive by email within a
                    minute of your purchase. It comes from Digistore24, our
                    authorized retailer.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Download className="size-5 text-primary" />
                </span>
                <div>
                  <p className="font-semibold">Download your toolkit</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    Click the link in the email to save the toolkit to your
                    phone, tablet or computer. No installation needed —
                    everything opens right in your browser or PDF reader.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Sparkles className="size-5 text-primary" />
                </span>
                <div>
                  <p className="font-semibold">Start with the budget estimator</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    In under a minute you'll have a realistic starting number
                    for your wedding — and exactly where that money should go.
                  </p>
                </div>
              </li>
            </ol>

            <div className="mt-8 flex gap-3 rounded-2xl border border-border bg-secondary/40 p-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Didn't get the email?
                </span>{" "}
                Check your spam or promotions folder first. Still nothing after
                10 minutes? Email us and we'll resend your download link right
                away.
              </p>
            </div>
          </div>

          {/* Billing note */}
          <div className="mt-8 flex items-start justify-center gap-3 rounded-2xl border border-border bg-card px-6 py-5 text-left shadow-sm">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              The debit will be performed by Digistore24.com — it will be the
              name shown on your card or bank statement. Digistore24 is our
              authorized retailer and also handles the 60-day money-back
              guarantee.
            </p>
          </div>

          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-8 py-3 text-sm font-semibold transition-colors hover:bg-accent"
            >
              Back to the toolkit page
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            Secure checkout and the 60-day money-back guarantee are handled by
            Digistore24, our authorized retailer. This site is not affiliated
            with Digistore24 GmbH.
          </p>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Wedding Planning Toolkit. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
