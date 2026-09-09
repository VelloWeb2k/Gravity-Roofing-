"use client";
import {ArrowUpRight,ArrowRight,ShieldCheck,ScanLine,Leaf,Plus,CloudLightning,Shield,Cpu} from 'lucide-react';
export default function Page(){return <main className="gravity">
<nav><b>__LOGO__</b><div><a href="#story">Story</a><a href="#services">Services</a><a href="#proof">Proof</a></div><a className="cta" href="#contact">Get started ↗</a></nav>
<section className="hero"><div><small>ROOFING / REDEFINED</small><h1>YOUR ROOF. ZERO GUESSWORK.</h1><p>A bold, direct roofing experience for homeowners who want speed, clarity and protection.</p><a className="cta" href="#contact">Request an inspection <ArrowRight/></a></div><figure><img src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=85"/><figcaption>FREE INSPECTIONS</figcaption></figure></section>
<section className="intro" id="story"><small>WHY THIS BRAND</small><h2>Fast when it matters. Precise when it counts.</h2><p>A bold, direct roofing experience for homeowners who want speed, clarity and protection.</p></section>
<section className="facts" id="proof"><b>FREE INSPECTIONS</b><b>STORM RESPONSE</b><b>RESIDENTIAL + COMMERCIAL</b></section>
<section className="services" id="services"><small>SERVICES</small><h2>Built around the real job.</h2><div>{['Roof Repair','Roof Replacement','Storm Damage','Inspections','Commercial Roofing'].map((x,i)=><a href="#contact"><span>0{i+1}</span><strong>{x}</strong><ArrowUpRight/></a>)}</div></section>
<section className="contact" id="contact"><small>START HERE</small><h2>Let’s make the next step simple.</h2><a className="cta" href="mailto:marketing@gravityroof.com">Contact the team <ArrowUpRight/></a><p>marketing@gravityroof.com · Florida</p></section><footer>Website concept · not affiliated with Gravity Roofing</footer></main>}
