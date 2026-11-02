import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Armchair,
  Calculator,
  CalendarDays,
  ChevronDown,
  ClipboardCheck,
  Download,
  Heart,
  Lock,
  Mail,
  MonitorSmartphone,
  Palette,
  PenLine,
  ShieldCheck,
  Sparkles,
  Star,
  Wallet,
  type LucideIcon,
} from "lucide-react";

import heroImage from "@/assets/hero-wedding-flatlay.jpg";
import planningImage from "@/assets/couple-planning.jpg";
import mockupImage from "@/assets/toolkit-bundle-mockup.jpg";

/* ------------------------------------------------------------------ */
/* EDIT ME: your Digistore24 checkout link and price                   */
/* ------------------------------------------------------------------ */
const CHECKOUT_URL = "https://www.digistore24.com/product/YOUR-PRODUCT-ID";
const PRICE = "$27";
const REGULAR_PRICE = "$97";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "The Complete Wedding Planning Toolkit — Plan Your Dream Wedding Without the Overwhelm",
      },
      {
        name: "description",
        content:
          "7 essential tools in one toolkit: wedding budget estimator, planner, budget tracker, seating chart planner, vendor checklist, invitation wording generator and color palette generator. Instant download, 60-day money-back guarantee.",
      },
      {
        property: "og:title",
        content: "The Complete Wedding Planning Toolkit",
      },
      {
        property: "og:description",
        content:
          "Budgets, timelines, seating, vendors, invitations and colors — everything you need to plan your wedding, in one instant-download toolkit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SalesPage,
});

function CheckoutButton({
  className = "",
  label = `Get Instant Access — ${PRICE}`,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a href={CHECKOUT_URL} className={className}>
      {label}
    </a>
  );
}

function SalesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Hero />
      <PainSection />
      <SolutionSection />
      <ToolsGrid />
      <HowItWorks />
      <OfferBox />
      <Testimonials />
      <Guarantee />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Top bar                                                           */
/* ---------------------------------------------------------------- */

function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary">
            <Heart className="size-4 fill-primary-foreground text-primary-foreground" />
          </span>
          <span className="font-display text-lg font-semibold tracking-wide">
            The Wedding Planning Toolkit
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#inside" className="transition-colors hover:text-foreground">
            What's inside
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-foreground">
            How it works
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            FAQ
          </a>
        </nav>
        <CheckoutButton
          label="Get Instant Access"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
        />
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------- */
/* Hero                                                              */
/* ---------------------------------------------------------------- */

function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:pb-28 lg:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <Sparkles className="size-3.5" />
            7 essential tools — one instant download
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]">
            Plan the wedding of your dreams,{" "}
            <em className="text-primary italic">without the overwhelm.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The Complete Wedding Planning Toolkit gives you every tool a professional
            planner uses — budgeting, timelines, seating, vendors, invitations and
            colors — beautifully organized in one place, so you can enjoy getting
            engaged instead of drowning in tabs and sticky notes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CheckoutButton
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
              label={`Get Instant Access — ${PRICE}`}
            />
            <a
              href="#inside"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              See what's inside
              <ChevronDown className="size-4" />
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            One-time payment · Instant download ·{" "}
            <span className="line-through">{REGULAR_PRICE}</span> {PRICE} today
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Download className="size-4 text-primary" /> Instant access
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" /> 60-day guarantee
            </span>
            <span className="inline-flex items-center gap-2">
              <Lock className="size-4 text-primary" /> Secure checkout via Digistore24
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-rose/30 via-blush/40 to-transparent blur-2xl" />
          <img
            src={heroImage}
            alt="Wedding planning flat lay with invitations, flowers and a planner notebook"
            width={1600}
            height={1008}
            className="relative aspect-[8/5] w-full rounded-[2rem] border-8 border-card object-cover shadow-xl shadow-primary/10"
          />
          <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:flex">
            <span className="flex size-10 items-center justify-center rounded-full bg-secondary">
              <Star className="size-5 fill-primary text-primary" />
            </span>
            <div>
              <p className="font-display text-lg leading-none font-semibold">
                4.9 out of 5
              </p>
              <p className="text-xs text-muted-foreground">from couples who used it</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Pain                                                              */
/* ---------------------------------------------------------------- */

const PAINS = [
  {
    title: "The budget spiral",
    text: "You fall in love with a venue, then discover catering alone will eat half your savings — and you have no idea what everything else should cost.",
  },
  {
    title: "The 47 open tabs",
    text: "Checklists in one place, the guest list in another, deposit amounts in your notes app. Nothing talks to anything else, and things slip through the cracks.",
  },
  {
    title: "The seating & wording drama",
    text: "Who sits with whom? How do you word an invitation with divorced parents hosting? One wrong phrase and the family group chat melts down.",
  },
];

function PainSection() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Sound familiar?"
          title="Wedding planning shouldn't feel like a second job"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PAINS.map((pain) => (
            <div
              key={pain.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <h3 className="font-display text-2xl font-semibold text-primary">
                {pain.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{pain.text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-muted-foreground">
          It's not that you're disorganized — you've just never planned a wedding
          before. <span className="font-semibold text-foreground">Nobody has,</span>{" "}
          until they have to. This toolkit means you never have to wing it.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Solution                                                          */
/* ---------------------------------------------------------------- */

function SolutionSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-blush/60 to-transparent blur-2xl" />
          <img
            src={mockupImage}
            alt="The toolkit working on a laptop, tablet and phone"
            width={1600}
            height={1104}
            loading="lazy"
            className="relative w-full rounded-[2rem] border-8 border-card object-cover shadow-xl shadow-primary/10"
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Meet your command center"
            title="Every tool a pro planner uses — in one beautiful toolkit"
          />
          <ul className="mt-8 space-y-4">
            {[
              {
                icon: MonitorSmartphone,
                text: "Works on your phone, tablet and computer — no software to install, nothing to learn",
              },
              {
                icon: Download,
                text: "Instant download the moment your order is complete — start planning tonight",
              },
              {
                icon: ClipboardCheck,
                text: "Step-by-step structure: you always know exactly what to do next",
              },
              {
                icon: Heart,
                text: "Designed for real couples and real budgets — not just Pinterest perfection",
              },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Icon className="size-4.5 text-primary" />
                </span>
                <span className="leading-relaxed text-muted-foreground">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Tools grid                                                        */
/* ---------------------------------------------------------------- */

type Tool = {
  icon: LucideIcon;
  name: string;
  text?: string;
  itemsHeader?: string;
  items?: { title: string; text: string }[];
  note?: string;
};

const TOOLS: Tool[] = [
  {
    icon: Calculator,
    name: "Wedding Budget Estimator",
    text: "Most couples start planning without any idea what a wedding actually costs. The Wedding Budget Estimator gives you a realistic starting number in under a minute, and shows exactly where that money should go.",
  },
  {
    icon: CalendarDays,
    name: "Wedding Planner",
    items: [
      {
        title: "Checklist",
        text: "A ready-made to-do list organized by time (12+ months out, 6 months, 1 month, and week-of), with a progress count. Add your own tasks to any section.",
      },
      {
        title: "Guest List & RSVP Tracker",
        text: "Add guests, mark them Yes, No, or Pending, and note meal choices. Live counts show how many are invited, attending, and still pending.",
      },
      {
        title: "Day-of Itinerary",
        text: "A wedding day timeline from hair and makeup to send-off, already filled in. Edit any time or event and it sorts itself in order.",
      },
      {
        title: "Packing List",
        text: "A starter list of essentials like rings, vows, and your marriage license, with a packed-so-far count. Add whatever else you need.",
      },
      {
        title: "Gifts & Thank-Yous",
        text: "Record who gave what and tick off each thank-you note as it goes out, so nobody gets forgotten.",
      },
    ],
  },
  {
    icon: Wallet,
    name: "Wedding Budget Tracker",
    itemsHeader: "What you'll see:",
    items: [
      {
        title: "Total estimated",
        text: "everything you expect to spend",
      },
      {
        title: "Paid so far",
        text: "all deposits and payments made",
      },
      {
        title: "Balance due",
        text: "what's still owed across all vendors",
      },
      {
        title: "Remaining vs. target",
        text: "how far you are from your budget, shown in red if you go over",
      },
    ],
    note: "Works in any currency. Pick from every currency your device supports, from USD, EUR, and GBP to KES, NGN, INR, and JPY. All amounts are formatted with the right symbol for your choice.",
  },
  {
    icon: Armchair,
    name: "Wedding Seating Chart Planner",
    text: "Seating is the part of wedding planning that turns into a puzzle: who sits with whom, which table is full, and who still has no seat. The Wedding Seating Chart Planner keeps it simple. Add your guests, set up your tables, and seat everyone while the tool keeps count for you.",
  },
  {
    icon: ClipboardCheck,
    name: "Wedding Vendor Checklist",
    text: "Wedding vendors pile up fast: a photographer you emailed, a florist you only have a phone number for, a caterer who still hasn’t sent a contract. The Wedding Vendor Checklist keeps all of it in one simple list, so you always know who you’ve booked and who still needs a follow-up.",
  },
  {
    icon: PenLine,
    name: "Invitation Wording Generator",
    text: "Graceful, correct wording for every situation: hosted by both families, divorced parents, a deceased loved one, no-children weddings, casual or formal.",
  },
  {
    icon: Palette,
    name: "Wedding Color Palette Generator",
    text: "Build a cohesive color story for your day — palettes for flowers, attire, paper and decor that actually work together, with seasonal inspiration built in.",
  },
];

function ToolsGrid() {
  return (
    <section id="inside" className="petal-dots border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          eyebrow="What's inside"
          title="7 tools. One beautiful toolkit."
          sub="Everything below is included in your one-time purchase — instantly."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="group rounded-2xl border border-border bg-background p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary transition-colors group-hover:bg-primary">
                <tool.icon className="size-5.5 text-primary transition-colors group-hover:text-primary-foreground" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold">{tool.name}</h3>
              {tool.items ? (
                <div className="mt-3">
                  <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                    {tool.itemsHeader ?? "What's inside:"}
                  </p>
                  <ul className="mt-2 space-y-3">
                    {tool.items.map((item) => (
                      <li key={item.title} className="flex items-start gap-2.5">
                        <span
                          aria-hidden
                          className="mt-0.5 shrink-0 font-semibold text-primary"
                        >
                          ✓
                        </span>
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          <span className="font-semibold text-foreground">
                            {item.title}.
                          </span>{" "}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {tool.note && (
                    <p className="mt-4 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
                      {tool.note}
                    </p>
                  )}
                </div>
              ) : (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tool.text}
                </p>
              )}
            </div>
          ))}
          <div className="flex flex-col items-start justify-center rounded-2xl bg-primary p-7 text-primary-foreground shadow-lg shadow-primary/20">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/15">
              <Mail className="size-5.5" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold">
              All 7 tools, one click away
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
              Instant download after checkout. Start with the budget estimator tonight.
            </p>
            <CheckoutButton
              label={`Get the toolkit — ${PRICE}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* How it works                                                      */
/* ---------------------------------------------------------------- */

const STEPS = [
  {
    title: "Get instant access",
    text: `Check out securely through Digistore24 — one-time payment of ${PRICE}, no subscription, no upsells required.`,
  },
  {
    title: "Open it on any device",
    text: "Your download arrives by email immediately. Open it on your phone, tablet or laptop — everything syncs with your life, not against it.",
  },
  {
    title: "Plan with confidence",
    text: "Start with the budget estimator, follow the planner month by month, and walk into your wedding knowing every detail is handled.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="How it works"
            title="From 'we're engaged!' to 'I do' in three steps"
          />
          <ol className="mt-10 space-y-8">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xl font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-bl from-rose/25 to-transparent blur-2xl" />
          <img
            src={planningImage}
            alt="A happy couple planning their wedding together at home"
            width={1408}
            height={1008}
            loading="lazy"
            className="relative w-full rounded-[2rem] border-8 border-card object-cover shadow-xl shadow-primary/10"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Offer box                                                         */
/* ---------------------------------------------------------------- */

const INCLUDED = [
  { name: "Wedding Budget Estimator", value: "$27" },
  { name: "Wedding Planner (12-month timeline)", value: "$27" },
  { name: "Wedding Budget Tracker", value: "$27" },
  { name: "Wedding Seating Chart Planner", value: "$27" },
  { name: "Wedding Vendor Checklist", value: "$27" },
  { name: "Invitation Wording Generator", value: "$27" },
  { name: "Wedding Color Palette Generator", value: "$27" },
];

function OfferBox() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="The offer"
          title="Here's everything you get today"
        />
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/10">
          <div className="divide-y divide-border">
            {INCLUDED.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between px-7 py-4"
              >
                <span className="flex items-center gap-3 font-medium">
                  <span className="flex size-6 items-center justify-center rounded-full bg-secondary">
                    <Heart className="size-3 fill-primary text-primary" />
                  </span>
                  {item.name}
                </span>
                <span className="font-display text-lg text-muted-foreground">
                  {item.value} value
                </span>
              </div>
            ))}
          </div>
          <div className="hero-glow bg-secondary/30 px-7 py-8 text-center">
            <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Total value {INCLUDED.length * 27 > 0 ? `$${INCLUDED.length * 27}` : ""}
            </p>
            <p className="mt-3 font-display text-4xl sm:text-5xl">
              <span className="text-muted-foreground line-through">{REGULAR_PRICE}</span>{" "}
              <span className="text-primary">{PRICE}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              One-time payment · Yours forever, including future updates
            </p>
            <CheckoutButton
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl"
              label={`Get Instant Access — ${PRICE}`}
            />
            <p className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Lock className="size-3.5" />
              Secure checkout &amp; 60-day money-back guarantee via Digistore24
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Testimonials                                                      */
/* ---------------------------------------------------------------- */

const TESTIMONIALS = [
  {
    quote:
      "The budget estimator alone paid for this toolkit ten times over. We set a realistic number on day one and never had the money panic talk.",
    names: "Sarah & Tom",
    detail: "Married in June · 120 guests",
  },
  {
    quote:
      "I dreaded invitation wording with my divorced parents hosting. The generator had the perfect wording in two minutes — and my mom actually cried.",
    names: "Priya & Daniel",
    detail: "Married in September · 80 guests",
  },
  {
    quote:
      "The seating chart tool saved our sanity. Two feuding cousins, one round table — solved without a single argument.",
    names: "Mia & Josh",
    detail: "Married in May · 150 guests",
  },
];

function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Happy couples"
        title="Loved by couples who planned it themselves"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.names}
            className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 leading-relaxed text-muted-foreground">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-display text-lg font-semibold">{t.names}</p>
              <p className="text-xs text-muted-foreground">{t.detail}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Guarantee                                                         */
/* ---------------------------------------------------------------- */

function Guarantee() {
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6">
        <span className="flex size-16 items-center justify-center rounded-full bg-primary-foreground/15">
          <ShieldCheck className="size-8" />
        </span>
        <h2 className="mt-6 font-display text-4xl font-semibold sm:text-5xl">
          Love it, or your money back
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
          Take a full 60 days to use every tool in the toolkit. If it doesn't make
          planning your wedding easier and calmer, one email gets you a complete
          refund — no questions, no awkwardness. You can even keep the toolkit.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* FAQ                                                               */
/* ---------------------------------------------------------------- */

const FAQS = [
  {
    q: "What exactly do I get when I buy?",
    a: "All seven tools: the wedding budget estimator, the 12-month wedding planner, the budget tracker, the seating chart planner, the vendor checklist, the invitation wording generator and the color palette generator. Everything is delivered as an instant digital download — nothing ships, nothing is back-ordered.",
  },
  {
    q: "Do I need to install any software?",
    a: "No. Everything opens right on your phone, tablet or computer with nothing to install. If you can open a web page or a PDF, you can use the entire toolkit.",
  },
  {
    q: "We've already started planning. Is it too late for this?",
    a: "Not at all. Each tool works on its own, so you can jump straight to whatever stage you're at — many couples buy it mid-planning just for the seating chart and vendor checklist.",
  },
  {
    q: "How is it delivered, and how quickly?",
    a: "Immediately. As soon as your secure Digistore24 checkout is complete, your download link arrives by email — usually within a minute. Start with the budget estimator tonight.",
  },
  {
    q: "What if it's not right for us?",
    a: `You're covered by a 60-day, no-questions-asked money-back guarantee processed by Digistore24. Try every tool; if it isn't for you, you get every cent back.`,
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeading eyebrow="Questions" title="Everything couples ask us" />
      <div className="mt-12 space-y-4">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className="rounded-2xl border border-border bg-card shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-xl font-semibold">{item.q}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-primary transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="px-6 pb-6 leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Final CTA + footer                                                */
/* ---------------------------------------------------------------- */

function FinalCta() {
  return (
    <section className="hero-glow relative overflow-hidden border-t border-border">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-24">
        <Heart className="mx-auto size-10 fill-primary text-primary" />
        <h2 className="mt-6 font-display text-4xl leading-tight font-medium text-balance sm:text-5xl">
          Your wedding day will be here before you know it. Be ready for it.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Every week without a plan is a week of stress you don't need. Get the
          complete toolkit today and walk down the aisle knowing every detail was
          handled — calmly, and on budget.
        </p>
        <CheckoutButton
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl"
          label={`Get Instant Access — ${PRICE}`}
        />
        <p className="mt-4 text-sm text-muted-foreground">
          One-time payment · Instant download · 60-day money-back guarantee
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary">
              <Heart className="size-3.5 fill-primary-foreground text-primary-foreground" />
            </span>
            <span className="font-display text-lg font-semibold">
              The Wedding Planning Toolkit
            </span>
          </span>
          <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
            Secure checkout and the 60-day money-back guarantee are handled by
            Digistore24, our authorized retailer. Results and timelines described on
            this page depend on your own planning; testimonials reflect individual
            experiences. This site is not affiliated with Digistore24 GmbH.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Wedding Planning Toolkit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------- */
/* Shared heading                                                    */
/* ---------------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-medium text-balance sm:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}
