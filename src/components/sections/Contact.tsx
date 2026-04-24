"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { ArrowUpRight, Spinner } from "@phosphor-icons/react";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    if (!form.current) return;

    emailjs.sendForm(serviceId, templateId, form.current, { publicKey }).then(
      () => {
        setIsSubmitting(false);
        setSubmitStatus("success");
        form.current?.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setIsSubmitting(false);
        setSubmitStatus("error");
      }
    );
  };

  return (
    <section id="contact" className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:gap-20">
        <AnimatedSection className="flex flex-col gap-8 md:items-center md:text-center">
          <AnimatedItem>
            <EyebrowBadge>COMMUNICATIONS LINK // ACTIVE</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[20ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl mx-auto">
              Get In <span className="text-accent">Touch.</span>
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[50ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg mx-auto">
              Looking to collaborate on a high-impact project or discuss digital transformation? Let&apos;s build the future together.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col gap-8">
            <AnimatedItem>
              <h3 className="font-sans text-2xl font-medium text-foreground mb-6">Contact Information</h3>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1 border-l border-white/10 pl-6 relative before:absolute before:left-[-4px] before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-accent">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Email</span>
                  <a href="mailto:gyash6328@gmail.com" className="font-sans text-lg text-foreground hover:text-accent transition-colors">gyash6328@gmail.com</a>
                </div>
                <div className="flex flex-col gap-1 border-l border-white/10 pl-6 relative before:absolute before:left-[-4px] before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-accent">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Phone</span>
                  <a href="tel:+919520102418" className="font-sans text-lg text-foreground hover:text-accent transition-colors">+91 9520102418</a>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem className="mt-4">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/yash-gupta-4178062a8/" },
                  { label: "GitHub", href: "https://github.com/student-yashguptya" },
                  { label: "Instagram", href: "https://www.instagram.com/yash.gupta6/?next=%2F&hl=en" }
                ].map(social => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08] hover:border-accent/50 hover:text-accent">
                    {social.label}
                  </a>
                ))}
              </div>
            </AnimatedItem>
          </div>

          <AnimatedItem className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-10">
            <h3 className="font-sans text-2xl font-medium text-foreground mb-8">Send a Message</h3>
            
            <form ref={form} className="flex flex-col gap-6" onSubmit={sendEmail}>
              {submitStatus === "success" && (
                <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-green-400 text-sm font-sans flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  Message sent successfully! I will get back to you soon.
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-red-400 text-sm font-sans flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  Failed to send message. Please try again or email me directly.
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label htmlFor="user_name" className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Your Name</label>
                <input type="text" id="user_name" name="user_name" placeholder="Enter your name" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-sans text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all placeholder:text-zinc-600" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="user_email" className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Your Email</label>
                <input type="email" id="user_email" name="user_email" placeholder="Enter your email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-sans text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all placeholder:text-zinc-600" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Your Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Enter your message" className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-sans text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all placeholder:text-zinc-600" required />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all hover:bg-accent/90 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Transmitting...
                    <Spinner size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Transmit Message
                    <ArrowUpRight size={14} weight="bold" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </form>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
