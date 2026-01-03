import Link from "next/link"
import {
  ArrowRight,
  Battery,
  Building2,
  Car,
  ChartSpline,
  Droplet,
  Home,
  MapPinned,
  Monitor,
  Mountain,
  PlugZap,
  Settings,
  ShieldCheck,
  Sparkles,
  Sun,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function ServicesPage() {
  const serviceCards = [
    {
      title: "Utility-scale & ground mount",
      tag: "50kWp - 50MWp",
      desc: "Grid studies, civil & structural, SCADA, and reliable BoP for bankable utility assets.",
      image: "/ground-mounted-solar-farm-field-installation.jpg",
    },
    {
      title: "C&I rooftop & carports",
      tag: "Industrial & Commercial",
      desc: "Rooftops and carports engineered for safety, clearances, and optimal generation profiles.",
      image: "/commercial-building-with-large-solar-panel-array.jpg",
    },
    {
      title: "Hybrid & storage",
      tag: "Storage-ready",
      desc: "BESS-integrated systems with controls for peak shaving, backup, and tariff optimization.",
      image: "/modern-solar-farm.jpg",
    },
    {
      title: "EV charging EPC",
      tag: "AC/DC | Hubs",
      desc: "AC/DC chargers, load management, and payments for fleets, campuses, and retail.",
      image: "/ev-charging-station-installation-parking-lot.jpg",
    },
  ]

  const evFeatures = [
    "Load balancing & demand control",
    "Fast DC up to 150 kW",
    "OCPP + payments integration",
    "Smart scheduling & analytics",
  ]

  const omItems = [
    { icon: <Monitor className="h-5 w-5 text-primary" />, title: "24/7 monitoring", desc: "String-level data, alerts, and PR tracking with dashboards." },
    { icon: <Wrench className="h-5 w-5 text-primary" />, title: "Preventive maintenance", desc: "Scheduled cleaning, torque checks, thermography, IV curves." },
    { icon: <ShieldCheck className="h-5 w-5 text-primary" />, title: "Safety & compliance", desc: "HSE playbooks, LOTO, and statutory inspections." },
    { icon: <Settings className="h-5 w-5 text-primary" />, title: "Corrective & spares", desc: "Spares planning, inverter service, rapid response teams." },
  ]

  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/70 text-foreground">
          <div className="absolute inset-0">
            <Image
              src="/large-solar-farm-installation.jpg"
              alt="Solar services hero"
              fill
              className="object-cover opacity-25"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/70 to-secondary/50" />
          <div className="container relative mx-auto px-4 py-20 md:py-28">
            <div className="max-w-4xl space-y-6 text-center mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-primary">
                Solar EPC • Storage • EV Charging • O&M
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
                End-to-end solar EPC with utility-grade rigor and O&M built in.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Design, procurement, construction, and lifecycle maintenance for rooftops, ground mounts, hybrids, and EV-ready sites across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Plan your project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10">
                  <Link href="/projects">See our builds</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">What we deliver</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Core EPC capabilities</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Turnkey solar and EV solutions with bankable engineering, vetted supply chains, and transparent project control.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {serviceCards.map((card) => (
                <Card key={card.title} className="overflow-hidden border-border/70 bg-card/70 shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  </div>
                  <CardContent className="space-y-3 px-5 pb-6 pt-4">
                    <span className="inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                      {card.tag}
                    </span>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                    <Button variant="ghost" className="px-0 text-primary hover:text-primary">
                      Talk to us <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div className="space-y-4">
                <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">Solar & storage</p>
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Rooftop, ground mount, and hybrid systems</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Feasibility, design, procurement, construction, and commissioning—delivered with grid-compliant drawings, BoQ discipline, and PR targets.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Sun className="h-5 w-5 text-primary" />, title: "Rooftops & carports", desc: "Safe clearances, fire & structural compliance." },
                    { icon: <Mountain className="h-5 w-5 text-primary" />, title: "Ground mounts", desc: "Tracker-ready layouts and geotech-driven civil works." },
                    { icon: <Battery className="h-5 w-5 text-primary" />, title: "Hybrid & storage", desc: "BESS sizing for peak shaving and backup." },
                    { icon: <ChartSpline className="h-5 w-5 text-primary" />, title: "Performance first", desc: "String design, shading analysis, and PR dashboards." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-xl border border-border/70 bg-card/70 p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <h3 className="font-semibold">{item.title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border/60 bg-card/60 shadow-xl">
                  <Image
                    src="/residential-home-rooftop-solar-panels-installation.jpg"
                    alt="Solar EPC project"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
              <div className="space-y-4">
                <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">EV charging EPC</p>
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Smart, scalable EV charging for fleets and campuses</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AC and DC charging infrastructure with intelligent load management, payments, and remote operations—ready for residential, commercial, and fleet deployments.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {evFeatures.map((f) => (
                    <div key={f} className="flex items-start gap-2 rounded-lg border border-border/60 bg-card/60 p-3">
                      <PlugZap className="mt-0.5 h-4 w-4 text-primary" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{f}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "/ev-charging-solutions-company-logo-electric.jpg",
                  "/modern-ev-charging-station-with-electric-cars.jpg",
                  "/ev-charging-station-installation-parking-lot.jpg",
                  "/solar-inverter-brand-logo-modern-tech.jpg",
                ].map((img) => (
                  <div key={img} className="relative h-44 w-full overflow-hidden rounded-2xl border border-border/60 bg-card/60 shadow-md">
                    <Image src={img} alt="EV infrastructure" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">O&M services</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Lifecycle care for maximum uptime</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Dedicated operations teams, predictive maintenance, and rapid response playbooks to keep every plant performing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {omItems.map((item) => (
                <Card key={item.title} className="border-border/70 bg-card/70 shadow-sm">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">{item.icon}</div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to build your next solar or EV project?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
              Let’s design, construct, and maintain a high-performing asset together. Tell us about your site and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Start with a consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/projects">Explore delivered plants</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              {["Tier-1 modules & inverters", "SCADA + dashboards", "HSE-first crews", "Pan-India O&M"].map((pill) => (
                <span key={pill} className="rounded-full border border-primary-foreground/40 px-4 py-2">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
