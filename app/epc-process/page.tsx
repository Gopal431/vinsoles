import Link from "next/link"
import { ArrowRight, CheckCircle2, ClipboardCheck, HardHat, Layers, PlugZap, Ruler, Settings, ShoppingCart, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function EPCProcessPage() {
  const steps = [
    {
      id: "01",
      title: "Needs & feasibility",
      icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
      desc: "Load profile analysis, site survey, shading and structural checks, and ROI modeling.",
      bullets: ["Site feasibility & soil/roof checks", "Energy + tariff analysis", "Financial & ROI modeling"],
      image: "/agricultural-solar-water-pump-system-field.jpg",
    },
    {
      id: "02",
      title: "Engineering & permits",
      icon: <Ruler className="h-6 w-6 text-primary" />,
      desc: "Civil, mechanical, and electrical design with grid compliance and safety built-in.",
      bullets: ["PVsyst and string design", "Structural & earthing layouts", "Grid studies and drawings"],
      image: "/modern-solar-farm-with-rows-of-panels-blue-sky-ren.jpg",
    },
    {
      id: "03",
      title: "Procurement & QA",
      icon: <ShoppingCart className="h-6 w-6 text-primary" />,
      desc: "Tier-1 modules, inverters, and BOS with factory QA, logistics, and tracked deliveries.",
      bullets: ["Tier-1 vendor selection", "QA/QC at factory and site", "Just-in-time logistics"],
      image: "/premium-solar-technology-company-logo-abstract.jpg",
    },
    {
      id: "04",
      title: "Construction & HSE",
      icon: <HardHat className="h-6 w-6 text-primary" />,
      desc: "Foundation, mounting, cabling, and commissioning with strict HSE protocols.",
      bullets: ["HSE toolbox talks & LOTO", "Civil + mounting + DC/AC works", "SCADA, strings, and terminations"],
      image: "/solar-installation-workers.jpg",
    },
    {
      id: "05",
      title: "Testing & commissioning",
      icon: <Shield className="h-6 w-6 text-primary" />,
      desc: "IV curves, insulation tests, PR benchmarks, and utility approvals before handover.",
      bullets: ["IV/IR tests & thermography", "PR validation & FAT/SAT", "Utility inspections & approvals"],
      image: "/modern-solar-farm.jpg",
    },
    {
      id: "06",
      title: "O&M & performance",
      icon: <Settings className="h-6 w-6 text-primary" />,
      desc: "24/7 monitoring, preventive maintenance, and SLAs that guarantee uptime.",
      bullets: ["24/7 monitoring & alerts", "Preventive & corrective maintenance", "Spares, PR reports, SLAs"],
      image: "/engineers-installing-solar-panels-on-commercial-bu.jpg",
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/70 text-foreground">
          <div className="absolute inset-0">
            <Image src="/large-solar-farm-installation.jpg" alt="EPC process hero" fill className="object-cover opacity-20" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-secondary/40" />
          <div className="container relative mx-auto px-4 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-primary">
                EPC, QA/QC, and O&M
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
                A predictable EPC playbook for solar, storage, and EV-ready sites.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                From feasibility to commissioning and lifecycle O&M, every step is governed by checklists, QA gates, and transparent reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start a project review <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10">
                  <Link href="/projects">See delivered plants</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">EPC methodology</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Six governed phases, one accountable team</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Each phase has defined inputs, outputs, and QA artifacts—keeping projects on-time, on-budget, and on-spec.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {steps.map((step) => (
                <div key={step.id} className="rounded-2xl border border-border/70 bg-card/70 p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">{step.id}</div>
                    <div className="flex items-center gap-2 text-primary">{step.icon}<span className="font-semibold text-foreground">{step.title}</span></div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.desc}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 relative h-40 w-full overflow-hidden rounded-xl border border-border/60 bg-background/60">
                    <Image src={step.image} alt={step.title} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-center">
              <div className="space-y-4">
                <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">Governance & QA</p>
                <h3 className="text-3xl md:text-4xl font-bold text-balance">Controls that keep projects predictable</h3>
                <p className="text-muted-foreground leading-relaxed">
                  PMO templates, digital checklists, and milestone gates ensure quality, safety, and transparency from NTP to PAC.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: <Layers className="h-5 w-5 text-primary" />, title: "Stage gates", desc: "Design freeze, FAT/SAT, PR baseline before COD." },
                    { icon: <PlugZap className="h-5 w-5 text-primary" />, title: "Grid compliance", desc: "Utility coordination, protections, and approvals." },
                    { icon: <Settings className="h-5 w-5 text-primary" />, title: "Digital QA", desc: "Photo checklists, punch lists, and daily reports." },
                    { icon: <Shield className="h-5 w-5 text-primary" />, title: "HSE-first", desc: "Toolbox talks, LOTO, PPE audits on every site." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-xl border border-border/70 bg-card/70 p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <h4 className="font-semibold">{item.title}</h4>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border/60 bg-card/60 shadow-xl">
                  <Image
                    src="/solar-panels-on-modern-building-rooftop-against-bl.jpg"
                    alt="Project governance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to start with a feasibility call?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
              We will review your site, loads, and timelines, then propose an engineered path to COD with defined SLAs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Book a feasibility call <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/projects">See our process in action</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
