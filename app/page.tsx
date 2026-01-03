import Link from "next/link"
import { ArrowRight, Zap, Shield, TrendingUp, Award, Rocket, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/70 text-foreground">
          <div className="absolute inset-0">
            <Image
              src="/large-solar-farm-installation.jpg"
              alt="Utility scale solar plant"
              fill
              priority
              className="object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/60 to-secondary/40" />
          <div className="container mx-auto px-4 py-24 md:py-32 relative">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm font-medium text-primary">
                  <Zap className="h-4 w-4" />
                  Solar + Storage + EV Charging EPC
                </span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
                  Bankable solar plants engineered for performance and uptime.
              </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                  Vinsolex Energy builds utility-scale farms, C&I rooftop systems, and EV-ready infrastructure with
                  disciplined engineering, transparent project control, and reliable O&M.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                      Book a site assessment <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                    className="border-primary/40 text-foreground hover:bg-primary/10"
                >
                    <Link href="/projects">See delivered plants</Link>
                </Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                  {[
                    { label: "MW Deployed", value: "120+" },
                    { label: "Avg. Uptime", value: "99.2%" },
                    { label: "States Served", value: "9" },
                    { label: "Years Experience", value: "12" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-border/70 bg-card/70 px-4 py-3 shadow-sm backdrop-blur"
                    >
                      <p className="text-2xl font-bold text-primary">{item.value}</p>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl border border-border/60 bg-card/60 p-3 shadow-2xl backdrop-blur">
                  <div className="overflow-hidden rounded-2xl border border-border/40">
                    <Image
                      src="/modern-solar-farm.jpg"
                      alt="Solar plant overview"
                      width={900}
                      height={680}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-[0.2em]">Technology Partners</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Bankable components only</h2>
              <div className="h-1 w-32 bg-primary mx-auto rounded" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-10">
              {[
                "/modern-solar-panel-company-logo-with-sun-icon.jpg",
                "/professional-solar-energy-brand-logo-with-leaf.jpg",
                "/premium-solar-technology-company-logo-abstract.jpg",
                "/innovative-solar-power-logo-with-lightning-bolt.jpg",
                "/renewable-energy-company-logo-circular-design.jpg",
                "/green-energy-brand-logo-with-rays.jpg",
                "/solar-inverter-brand-logo-modern-tech.jpg",
                "/ev-charging-solutions-company-logo-electric.jpg",
              ].map((logo) => (
                <div
                  key={logo}
                  className="flex items-center justify-center rounded-xl border border-border/70 bg-card/70 p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/60"
                >
                  <img src={logo} alt="Partner brand" className="h-16 w-auto" />
              </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              Tier-1 modules, premium inverters, and EV chargers selected for performance, bankability, and long-term warranties.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-[0.2em]">Why Vinsolex</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Purpose-built for utility grade solar</h2>
              <div className="h-1 w-32 bg-primary mx-auto rounded" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Eye className="h-10 w-10 text-primary" />,
                  title: "Vision",
                  body: "Power India's energy transition with dependable, high-yield solar assets built for decades of performance.",
                },
                {
                  icon: <Rocket className="h-10 w-10 text-accent" />,
                  title: "Mission",
                  body: "Deliver predictable output through disciplined design, data-driven construction, and vigilant O&M.",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-primary" />,
                  title: "Strategy",
                  body: "Standardize BoS, prioritize tier-1 supply chain, and keep transparent project governance across every site.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-lg backdrop-blur transition-all hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-[0.2em]">Capabilities</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Core EPC & O&M services</h2>
              <div className="h-1 w-32 bg-primary mx-auto rounded" />
              <p className="text-muted-foreground mt-4 text-pretty">
                Turnkey delivery from feasibility to long-term O&M, tuned for C&I rooftops and utility-scale plants.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Utility-Scale & Ground Mounted",
                  desc: "End-to-end delivery with grid studies, civil works, SCADA, and performance guarantees.",
                  tag: "50kWp - 50MWp",
                  image: "/ground-mounted-solar-farm-field-installation.jpg",
                },
                {
                  title: "C&I Rooftop & Hybrid",
                  desc: "Rooftop, carport, and hybrid battery systems optimized for demand profiles and safety.",
                  tag: "Industrial & Commercial",
                  image: "/commercial-building-with-large-solar-panel-array.jpg",
                },
                {
                  title: "EV Charging & O&M",
                  desc: "AC/DC chargers, load management, and multi-year O&M with predictive maintenance playbooks.",
                  tag: "Pan-India support",
                  image: "/ev-charging-station-installation-parking-lot.jpg",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-2xl border border-border/70 bg-card/70 shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  </div>
                  <div className="space-y-3 px-5 pb-6 pt-4">
                    <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                      {item.tag}
                  </span>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    <Button variant="ghost" className="px-0 text-primary hover:text-primary">
                      Explore this service <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
              </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Why partners pick Vinsolex</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed text-pretty">
                  Reliable execution, transparent reporting, and rigor in safety so every plant stays on-spec and online.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Bankable engineering</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Grid integration studies, shadow analysis, string design, and BoS selection for maximum yield.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Quality & safety first</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        QA checklists for every milestone, certified teams, and HSE protocols across all sites.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Transparent performance</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Live dashboards, PR tracking, and O&M SLAs with guaranteed response times.
                      </p>
                    </div>
                  </div>
                </div>
                <Button asChild className="mt-8" size="lg">
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted shadow-xl">
                  <Image
                    src="/engineers-installing-solar-panels-on-commercial-bu.jpg"
                    alt="Solar installation team working"
                    width={900}
                    height={650}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to go solar?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
              Join the renewable energy revolution. Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
