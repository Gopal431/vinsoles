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
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
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
                      src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=900&q=80"
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
                "Trina Solar",
                "Canadian Solar",
                "Huawei",
                "SMA Solar",
                "First Solar",
                "ABB",
                "Schneider Electric",
                "Delta Electronics",
              ].map((logo) => (
                <div
                  key={logo}
                  className="flex items-center justify-center rounded-xl border border-border/70 bg-card/70 p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/60"
                >
                  <div className="text-lg font-semibold text-muted-foreground">{logo}</div>
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
                  image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
                },
                {
                  title: "C&I Rooftop & Hybrid",
                  desc: "Rooftop, carport, and hybrid battery systems optimized for demand profiles and safety.",
                  tag: "Industrial & Commercial",
                  image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80",
                },
                {
                  title: "EV Charging & O&M",
                  desc: "AC/DC chargers, load management, and multi-year O&M with predictive maintenance playbooks.",
                  tag: "Pan-India support",
                  image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
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
                    src="https://images.unsplash.com/photo-1581094794329-c8112d38e282?w=900&q=80"
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

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-[0.2em]">Our Projects</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Delivered Excellence</h2>
              <div className="h-1 w-32 bg-primary mx-auto rounded" />
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-pretty">
                Real projects, real impact. See our completed installations across India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
                  title: "50 MW Solar Farm - Rajasthan",
                  desc: "Large-scale utility project with 150,000+ panels",
                  capacity: "50 MW"
                },
                {
                  image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
                  title: "Commercial Rooftop - Mumbai",
                  desc: "Industrial facility with hybrid storage system",
                  capacity: "2.5 MW"
                },
                {
                  image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80",
                  title: "Solar + EV Charging Hub",
                  desc: "Integrated renewable energy parking solution",
                  capacity: "1 MW + 20 Chargers"
                },
                {
                  image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
                  title: "Ground Mounted - Gujarat",
                  desc: "Agricultural land solar installation",
                  capacity: "10 MW"
                },
                {
                  image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
                  title: "Industrial Complex - Pune",
                  desc: "Multi-building rooftop deployment",
                  capacity: "3.2 MW"
                },
                {
                  image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
                  title: "Utility Scale - Karnataka",
                  desc: "Grid-connected solar power plant",
                  capacity: "25 MW"
                }
              ].map((project, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 shadow-lg transition-all hover:-translate-y-2">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                        {project.capacity}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden bg-card shadow-2xl border border-border/70">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Mj8Kze7a22M"
                    title="Solar Installation Process"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div>
                <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-[0.2em]">Watch Our Process</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  From Design to Commissioning
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  See how we execute solar projects from initial site assessment through final grid connection. Our systematic approach ensures quality at every stage.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Site Assessment & Design</h4>
                      <p className="text-sm text-muted-foreground">Detailed feasibility studies and engineering</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Procurement & Logistics</h4>
                      <p className="text-sm text-muted-foreground">Tier-1 components with warranty management</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Installation & Testing</h4>
                      <p className="text-sm text-muted-foreground">Quality checks and performance validation</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Commissioning & O&M</h4>
                      <p className="text-sm text-muted-foreground">Grid connection and ongoing maintenance</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-[0.2em]">Technology & Innovation</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Advanced Solar Solutions</h2>
              <div className="h-1 w-32 bg-primary mx-auto rounded" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-border/70">
                <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
                  alt="Solar panel arrays"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-2">Bifacial Solar Modules</h3>
                  <p className="text-muted-foreground">Up to 30% more energy generation with dual-sided panels</p>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-border/70">
                <Image
                  src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&q=80"
                  alt="Solar installation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-2">Smart Monitoring Systems</h3>
                  <p className="text-muted-foreground">Real-time analytics and predictive maintenance</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-72 rounded-xl overflow-hidden shadow-xl border border-border/70 group">
                <Image
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80"
                  alt="Battery storage"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1">Battery Storage</h3>
                  <p className="text-sm text-muted-foreground">Grid stability solutions</p>
                </div>
              </div>
              <div className="relative h-72 rounded-xl overflow-hidden shadow-xl border border-border/70 group">
                <Image
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
                  alt="Solar tracking"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1">Solar Trackers</h3>
                  <p className="text-sm text-muted-foreground">Maximize energy capture</p>
                </div>
              </div>
              <div className="relative h-72 rounded-xl overflow-hidden shadow-xl border border-border/70 group">
                <Image
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80"
                  alt="Grid integration"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1">Grid Integration</h3>
                  <p className="text-sm text-muted-foreground">Seamless connectivity</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="aspect-video rounded-2xl overflow-hidden bg-card shadow-2xl border border-border/70">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ZnZ2XdqGZUU"
                    title="Solar Energy Future"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-[0.2em]">Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  Building India's Clean Energy Future
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Every megawatt we install brings India closer to energy independence and carbon neutrality.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg">500K+ Tons</p>
                      <p className="text-sm text-muted-foreground">CO₂ Offset Annually</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg">250M+ kWh</p>
                      <p className="text-sm text-muted-foreground">Clean Energy Generated</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">🏘️</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg">50,000+ Homes</p>
                      <p className="text-sm text-muted-foreground">Powered by Our Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-[0.2em]">Leadership</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Meet Our Founders</h2>
              <div className="h-1 w-32 bg-primary mx-auto rounded" />
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-pretty">
                Visionary leaders driving India's renewable energy transformation with expertise, integrity, and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 shadow-xl transition-all hover:-translate-y-2">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src="./Himanshu_Pachauri.jpeg"
                    alt="Himanshu Pachauri - CEO"
                    fill
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <div className="relative p-8 -mt-20">
                  <div className="inline-block rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold text-accent mb-3">
                    Chief Technology Officer
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Himanshu Pachauri</h3>
                  <p className="text-accent text-sm font-medium mb-4">CTO & Co-Founder</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    With over 15 years in renewable energy sector, Rajesh has led the development of 500+ MW solar projects across India. His expertise in project finance and strategic partnerships has positioned Vinsolex as a trusted EPC partner.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4 text-accent" />
                      <span>B.Tech (Electrical), IIT Delhi</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4 text-accent" />
                      <span>MBA, ISB Hyderabad</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 shadow-xl transition-all hover:-translate-y-2">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src="/Suriya_bhan.png"
                    alt="CTO"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <div className="relative p-8 -mt-20">
                  <div className="inline-block rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold text-primary mb-3">
                    Chief Executive Officer
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Suriya Bhan</h3>
                  <p className="text-primary text-sm font-medium mb-4">CEO & Co-Founder</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Suriya  brings 12+ years of engineering excellence in solar PV design and grid integration. She has pioneered advanced SCADA systems and predictive O&M solutions that ensure 99%+ uptime across all Vinsolex installations.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4 text-primary" />
                      <span>M.Tech (Power Systems), IIT Bombay</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4 text-primary" />
                      <span>Certified Energy Manager (CEM)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="max-w-3xl mx-auto rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Together, our founders have built Vinsolex on the pillars of technical excellence, financial discipline, and unwavering commitment to sustainability. We believe in empowering India with clean, reliable energy infrastructure that creates lasting value for all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section> */}

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
