import Link from "next/link"
import { ArrowRight, Award, BarChart3, Compass, Factory, Globe2, Handshake, Rocket, Shield, Sparkles, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  const milestones = [
    { year: "2013", title: "Founded", detail: "Started as a specialist EPC partner focused on industrial rooftops." },
    { year: "2018", title: "Utility-Scale", detail: "Delivered first multi-MW ground mount with SCADA monitoring." },
    { year: "2022", title: "EV-Ready", detail: "Expanded to EV charging EPC with load management platforms." },
    { year: "2024", title: "Pan-India O&M", detail: "Built 24/7 command center and predictive maintenance playbooks." },
  ]

  const leadership = [
    {
      name: "Project Controls",
      title: "PMO & Quality",
      image: "/engineers-installing-solar-panels-on-commercial-bu.jpg",
      value: "99.2% uptime SLAs",
    },
    {
      name: "Design & Grid",
      title: "Design Office",
      image: "/modern-solar-farm-with-rows-of-panels-blue-sky-ren.jpg",
      value: "Bankable drawings & studies",
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/70 text-foreground">
          <div className="absolute inset-0">
            <Image
              src="/large-industrial-rooftop-solar-panel-installation.jpg"
              alt="Industrial rooftop solar array"
              fill
              className="object-cover opacity-25"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-secondary/50" />
          <div className="container relative mx-auto px-4 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-primary">
                  Solar + Storage + EV EPC
                </span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
                  Building bankable solar assets with disciplined engineering.
                </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Vinsolex Energy designs, builds, and operates utility-scale and C&I plants with transparent governance, tier-1 components, and O&M that keeps assets performing for decades.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/projects">
                      View our track record <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10">
                    <Link href="/contact">Book a discovery call</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  {[
                    { label: "MW Deployed", value: "120+" },
                    { label: "Sites", value: "60+" },
                    { label: "States", value: "9" },
                    { label: "Avg. PR", value: "79%" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl border border-border/70 bg-card/70 px-4 py-3 shadow-sm backdrop-blur">
                      <p className="text-2xl font-bold text-primary">{item.value}</p>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl border border-border/60 bg-card/70 p-4 shadow-2xl backdrop-blur">
                  <div className="overflow-hidden rounded-2xl border border-border/50">
                    <Image
                      src="/modern-solar-panel-company-logo-with-sun-icon.jpg"
                      alt="Solar operations center"
                      width={900}
                      height={720}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {leadership.map((item) => (
                      <div key={item.name} className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/60 p-3 shadow-sm">
                        <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-border/60">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.title}</p>
                          <p className="text-xs text-primary font-semibold">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">Who we are</p>
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Engineers obsessed with uptime and safety</h2>
                <p className="text-muted-foreground leading-relaxed">
                  From feasibility and grid studies to construction and long-term O&M, we deliver bankable solar and EV-ready assets that meet utility-grade standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Shield className="h-5 w-5 text-primary" />, title: "HSE first", desc: "Certified crews, SOPs, and audits on every site." },
                    { icon: <BarChart3 className="h-5 w-5 text-primary" />, title: "Performance-driven", desc: "String-level design and PR dashboards with SLAs." },
                    { icon: <Factory className="h-5 w-5 text-primary" />, title: "Tier-1 supply", desc: "Bankable modules, inverters, and BOS for long life." },
                    { icon: <Handshake className="h-5 w-5 text-primary" />, title: "Transparent PMO", desc: "Progress reporting, risk logs, and clear handover." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-xl border border-border/70 bg-card/60 p-4 shadow-sm">
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
                    src="/ground-mounted-solar-farm-field-installation.jpg"
                    alt="Solar energy infrastructure"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">Vision, Mission, Strategy</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Purpose-built for reliable energy</h2>
              <div className="h-1 w-28 bg-primary mx-auto rounded" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Compass className="h-10 w-10 text-primary" />,
                  title: "Vision",
                  body: "Power India's transition with assets that perform safely for decades and deliver predictable yield.",
                },
                {
                  icon: <Rocket className="h-10 w-10 text-accent" />,
                  title: "Mission",
                  body: "Engineer, procure, build, and maintain solar + EV systems with rigor, transparency, and measurable uptime.",
                },
                {
                  icon: <Globe2 className="h-10 w-10 text-primary" />,
                  title: "Strategy",
                  body: "Standardize BoS, digitize QA, and leverage tier-1 partnerships to keep costs lean and performance high.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-lg backdrop-blur">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
              <div className="space-y-4">
                <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">Milestones</p>
                <h2 className="text-3xl md:text-4xl font-bold text-balance">A decade of disciplined delivery</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We have grown with our clients—expanding from industrial rooftops to utility-scale farms, storage, and EV infrastructure—while keeping the same rigor in safety, quality, and reporting.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {milestones.map((m) => (
                    <div key={m.year} className="rounded-xl border border-border/70 bg-card/60 p-4 shadow-sm">
                      <p className="text-primary font-semibold">{m.year}</p>
                      <p className="text-lg font-bold">{m.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{m.detail}</p>
                    </div>
                  ))}
              </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "/residential-home-rooftop-solar-panels-installation.jpg",
                  "/commercial-building-with-large-solar-panel-array.jpg",
                  "/modern-ev-charging-station-with-electric-cars.jpg",
                  "/ground-mounted-solar-farm-field-installation.jpg",
                ].map((img) => (
                  <div key={img} className="relative h-48 w-full overflow-hidden rounded-2xl border border-border/60 bg-card/60 shadow-md">
                    <Image src={img} alt="Project imagery" fill className="object-cover" />
              </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Let’s engineer your next solar plant</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
              We bring design rigor, bankable components, and accountable O&M to every site. Tell us about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Talk to our EPC team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/projects">See delivered projects</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
              {[
                { icon: <Sparkles className="h-5 w-5" />, title: "Tier-1 partners" },
                { icon: <Award className="h-5 w-5" />, title: "QA playbooks" },
                { icon: <Users className="h-5 w-5" />, title: "Certified teams" },
                { icon: <Shield className="h-5 w-5" />, title: "HSE first" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-2 text-sm">
                  <span className="rounded-md bg-primary-foreground/10 p-2 text-primary-foreground">{item.icon}</span>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
