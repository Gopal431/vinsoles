import Link from "next/link"
import { ArrowRight, Calendar, Leaf, MapPin, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

const projects = [
  {
    title: "721 kW Industrial Rooftop",
    location: "Toopran, Medak, Telangana",
    capacity: "721 kW",
    year: "2024",
    segment: "Industrial",
    status: "Completed",
    image: "/large-industrial-rooftop-solar-panel-installation.jpg",
    featured: true,
    impact: "High-efficiency rooftop with SCADA and PR tracking",
  },
  {
    title: "500 kW Commercial Campus",
    location: "Hyderabad, Telangana",
    capacity: "500 kW",
    year: "2024",
    segment: "Commercial",
    status: "Completed",
    image: "/commercial-building-solar-panel-rooftop-installati.jpg",
    impact: "Reduced grid draw with safety-first rooftop execution",
  },
  {
    title: "1 MW Ground Mount",
    location: "Warangal, Telangana",
    capacity: "1 MW",
    year: "2025",
    segment: "Utility Scale",
    status: "In Progress",
    image: "/ground-mounted-solar-farm-field-installation.jpg",
    impact: "Tracker-ready layout with robust civil & SCADA",
  },
  {
    title: "50 kW EV Charging Hub",
    location: "Secunderabad, Telangana",
    capacity: "50 kW (8 chargers)",
    year: "2024",
    segment: "EV Infrastructure",
    status: "Completed",
    image: "/ev-charging-station-installation-parking-lot.jpg",
    impact: "AC/DC mix with load management and payments",
  },
  {
    title: "10 kW Residential Hybrid",
    location: "Jubilee Hills, Hyderabad",
    capacity: "10 kW + Storage",
    year: "2024",
    segment: "Residential",
    status: "Completed",
    image: "/residential-home-rooftop-solar-panels-installation.jpg",
    impact: "Battery-backed system for backup and peak shaving",
  },
  {
    title: "15 HP Solar Water Pump",
    location: "Nalgonda, Telangana",
    capacity: "15 HP",
    year: "2023",
    segment: "Agricultural",
    status: "Completed",
    image: "/agricultural-solar-water-pump-system-field.jpg",
    impact: "Off-grid irrigation with diesel replacement",
  },
]

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/70 text-foreground">
          <div className="absolute inset-0">
            <Image src="/modern-solar-farm.jpg" alt="Projects hero" fill className="object-cover opacity-20" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-secondary/40" />
          <div className="container relative mx-auto px-4 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">Our work</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
                Proven solar and EV assets delivered across India.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Rooftops, ground mounts, hybrids, and EV-ready sites built with bankable engineering, transparent PMO, and measurable performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Discuss your site <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10">
                  <Link href="/services">See how we build</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {[
                  { label: "MW Deployed", value: "120+" },
                  { label: "Sites", value: "60+" },
                  { label: "States", value: "9" },
                  { label: "Avg. Uptime", value: "99.2%" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border/70 bg-card/70 px-4 py-3 shadow-sm backdrop-blur">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.title} className="overflow-hidden border-border/70 bg-card/70 shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative aspect-video">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                    {project.featured && <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>}
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {project.segment}
                      </Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 flex-shrink-0" />
                        <span>{project.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.impact}</p>
                    <Button variant="ghost" className="px-0 text-primary hover:text-primary" asChild>
                      <Link href="/contact">View details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Impact in numbers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                Performance, reliability, and environmental impact across the fleet we manage.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { value: "120+", label: "MW deployed", color: "text-primary" },
                { value: "3,500+", label: "Tonnes CO₂ offset / yr", color: "text-accent" },
                { value: "99.2%", label: "Avg. uptime", color: "text-secondary" },
                { value: "15+", label: "Major clients", color: "text-primary" },
              ].map((stat) => (
                <Card key={stat.label} className="border-border/70 bg-card/70 shadow-sm">
                  <CardContent className="pt-6 text-center">
                    <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bring your site to life with Vinsolex</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
              Share your site details and goals. We will return with a feasibility review, PR targets, and a build plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Start a project brief <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/services">Explore our services</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              {["Utility-scale EPC", "C&I rooftops", "EV-ready sites", "Lifecycle O&M"].map((pill) => (
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
