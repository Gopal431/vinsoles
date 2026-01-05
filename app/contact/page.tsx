"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock3, Building2, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/70 text-foreground">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-secondary/40" />
            <img
              src="/modern-ev-charging-station-with-electric-cars.jpg"
              alt="Contact background"
              className="h-full w-full object-cover opacity-20"
            />
          </div>
          <div className="container relative mx-auto px-4 py-20 md:py-24">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">Contact</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">Let's plan your next solar or EV project</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Share your site details and objectives. We'll respond with a quick feasibility view, timelines, and how we can guarantee uptime.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-primary-foreground/90">
                <span className="rounded-full bg-primary/15 px-3 py-2">Utility & C&I EPC</span>
                <span className="rounded-full bg-primary/15 px-3 py-2">Storage-ready systems</span>
                <span className="rounded-full bg-primary/15 px-3 py-2">EV charging hubs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="space-y-4">
                <Card className="border-border/70 bg-card/70 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Harikansh Garhi, Uttar Pradesh</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Harikansh Garhi, Uttar Pradesh
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
                          <Building2 className="h-4 w-4" /> Serving pan-India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/70 bg-card/70 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <p className="text-sm text-muted-foreground">+91 8126609605</p>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
                          <Clock3 className="h-3.5 w-3.5" /> Mon-Sat: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/70 bg-card/70 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-sm text-muted-foreground break-all">Info@vinsolex.com</p>
                        <p className="text-xs text-muted-foreground mt-1">We respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="rounded-xl border border-border/70 bg-card/70 p-4 shadow-sm space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span>HSE-first execution on every site</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>Tier-1 components and bankable design</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-border/70 bg-card/70 shadow-lg">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-6">Share your project</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 8126609605"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="e.g., 1 MW ground mount in Telangana"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Project details *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Share site location, load profile, timeline, and targets..."
                          rows={6}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full md:w-auto">
                        Send message <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <Card className="border-border/70 bg-card/70 shadow-sm">
              <CardContent className="p-0">
                <div className="aspect-[16/9] md:aspect-[21/9] bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3563.823344719547!2d80.971806!3d26.71809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQzJzA1LjEiTiA4MMKwNTgnMTguNSJF!5e0!3m2!1sen!2sin!4v1767442898867!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
