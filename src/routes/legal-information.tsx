import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Heart } from "lucide-react";

export const Route = createFileRoute("/legal-information")({
  head: () => ({
    meta: [
      { title: "Legal Information — The Complete Wedding Planning Toolkit" },
      {
        name: "description",
        content:
          "Publisher, contact, tax and reseller information for The Complete Wedding Planning Toolkit, plus details about visitor analytics and external services.",
      },
      { property: "og:title", content: "Legal Information — Wedding Planning Toolkit" },
      {
        property: "og:description",
        content:
          "Publisher, contact, tax and reseller information for The Complete Wedding Planning Toolkit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LegalInformationPage,
});

function LegalInformationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/85">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary">
              <Heart className="size-4 fill-primary-foreground text-primary-foreground" />
            </span>
            <span className="font-display text-lg font-semibold">The Wedding Planning Toolkit</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to toolkit
          </Link>
        </div>
      </header>

      <main>
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
            <p className="text-xs font-semibold uppercase text-primary">Publisher details</p>
            <h1 className="mt-3 font-display text-4xl font-medium sm:text-5xl">
              Legal Information
            </h1>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <section aria-labelledby="publisher-heading">
            <h2 id="publisher-heading" className="font-display text-2xl font-semibold">
              Vendor / Owner
            </h2>
            <dl className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-[minmax(10rem,0.35fr)_1fr]">
              <dt className="font-semibold">Name</dt>
              <dd>Nellie Muthoni Muthama</dd>

              <dt className="font-semibold">Physical Address</dt>
              <dd>Walokana Heights 53, Nairobi, Kenya</dd>

              <dt className="font-semibold">Email</dt>
              <dd>
                <a className="text-primary underline-offset-4 hover:underline" href="mailto:nelliemuthoninm.nm@gmail.com">
                  nelliemuthoninm.nm@gmail.com
                </a>
              </dd>

              <dt className="font-semibold">Phone</dt>
              <dd>
                <a className="text-primary underline-offset-4 hover:underline" href="tel:+254718573643">
                  +254 718573643
                </a>
              </dd>

              <dt className="font-semibold">Tax Identification (KRA PIN)</dt>
              <dd>A016642695H (Not VAT registered / Exempt under Kenyan tax threshold)</dd>
            </dl>
          </section>

          <section className="mt-12 border-t border-border pt-10" aria-labelledby="reseller-heading">
            <h2 id="reseller-heading" className="font-display text-2xl font-semibold">
              Reseller Notice
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              The sale and payment processing of this product are carried out through Digistore24 Inc. as the authorized reseller.
            </p>
          </section>

          <section className="mt-12 border-t border-border pt-10" aria-labelledby="analytics-heading">
            <h2 id="analytics-heading" className="font-display text-2xl font-semibold">
              Visitor Analytics
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Lovable analytics records clicks on this site for every visitor. This site does not send custom app events. Page visits, time on page, page speed and errors are also recorded for every visitor, without cookies and without identifying anyone. The analytics uses no cookies, stores nothing on your device, does not keep IP addresses and does not identify visitors.
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              The analytics records pages visited, where visitors came from, country, browser, operating system, device type, time spent, page load speed and errors. Detailed data is kept for 90 days and daily summaries for a year. Lovable collects this data for us. <a className="text-primary underline-offset-4 hover:underline" href="https://lovable.dev/privacy" target="_blank" rel="noreferrer">Lovable&apos;s privacy policy</a> explains how it handles it.
            </p>
          </section>

          <section className="mt-12 border-t border-border pt-10" aria-labelledby="services-heading">
            <h2 id="services-heading" className="font-display text-2xl font-semibold">
              External Services
            </h2>
            <div className="mt-5 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Google Fonts:</span> Your browser requests the typefaces used on this site from Google Fonts. Google receives those requests and may process request information, such as network and browser details, to deliver the fonts. See <a className="text-primary underline-offset-4 hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google&apos;s privacy policy</a>.
              </p>
              <p>
                <span className="font-semibold text-foreground">Digistore24:</span> This site loads a Digistore24 promotional script for product 757733. When you follow a checkout link, Digistore24 receives and processes your order and payment information as the authorized reseller. Payment details are handled by Digistore24, not collected by this site.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:px-6 sm:text-left">
          <span>© {new Date().getFullYear()} The Wedding Planning Toolkit.</span>
          <Link to="/" className="text-foreground underline-offset-4 hover:underline">
            Return to the toolkit page
          </Link>
        </div>
      </footer>
    </div>
  );
}