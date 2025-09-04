"use client"

import { useEffect } from "react"
import { MapPin, Clock, ArrowRight, Calendar, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"

const Events = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInSlide")
          }
        })
      },
      { threshold: 0.1 },
    )
    document.querySelectorAll(".animate-section").forEach((section) => {
      observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  const upcomingEvents = [
    {
      id: 1,
      title: "Management in Practice - Manchester",
      date: "4",
      month: "JUN",
      year: "2025",
      venue: "The Bridgewater Hall",
      address: "M2 3WS",
      time: "9:00AM – 6:00PM (Expected)",
      description: "Join us at the Management in Practice event in Manchester where we'll be showcasing our latest solutions for healthcare management and clinical services.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/11/management-in-practice-event.png",
      link:  "",
      color: "bg-blue-600"
    },
    {
      id: 2,
      title: "Management in Practice - Birmingham",
      date: "10",
      month: "JUN",
      year: "2025",
      venue: "National Conference Centre",
      address: "B92 0EJ",
      time: "9:00AM – 6:00PM (Expected)",
      description: "Visit us at the Birmingham Management in Practice event to learn about our innovative prescribing solutions and PCN services.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/11/management-in-practice-event.png",
      link: "",
      color: "bg-emerald-600"
    },
    {
      id: 3,
      title: "Pulse PCN Event - Birmingham",
      date: "11",
      month: "JUN",
      year: "2025",
      venue: "National Conference Centre",
      address: "B92 0EJ",
      time: "9:00AM – 6:00PM (Expected)",
      description: "Meet our team at the Pulse PCN event focused on Primary Care Networks and community pharmacy services.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/11/pulsepcn-events-1024x683.jpg",
      link: " ",
      color: "bg-purple-600"
    },
    {
      id: 4,
      title: "Management in Practice - Newcastle",
      date: "16",
      month: "SEP",
      year: "2025",
      venue: "Hilton Newcastle Gateshead",
      address: "NE8 2AR",
      time: "9:00AM – 6:00PM (Expected)",
      description: "Connect with us at the Newcastle Management in Practice event to discuss our comprehensive healthcare solutions.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/11/management-in-practice-event.png",
      link: " ",
      color: "bg-indigo-600"
    },
    {
      id: 5,
      title: "Pulse PCN Event - Newcastle",
      date: "17",
      month: "SEP",
      year: "2025",
      venue: "Hilton Newcastle Gateshead",
      address: "NE8 2AR",
      time: "9:00AM – 6:00PM (Expected)",
      description: "Discover our PCN management solutions and ARRS implementation services at this specialized primary care event.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/11/pulsepcn-events.jpg",
      link: " ",
      color: "bg-teal-600"
    },
    {
      id: 6,
      title: "Management in Practice - London",
      date: "30",
      month: "SEP",
      year: "2025",
      venue: "ILEC Conference Centre",
      address: "SW6 1UD",
      time: "9:00AM – 6:00PM (Expected)",
      description: "Join us at the premier London healthcare management event to explore our cutting-edge prescribing solutions.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/11/management-in-practice-event.png",
      link: " ",
      color: "bg-rose-600"
    },
    {
      id: 7,
      title: "Best Practice Birmingham",
      date: "8-9",
      month: "OCT",
      year: "2025",
      venue: "National Exhibition Centre (NEC)",
      address: "B40 1NT",
      time: "Day 1: 9:00AM – 5:00PM | Day 2: 9:00AM – 4:00PM",
      description: "Visit us at the UK's leading healthcare exhibition featuring the latest innovations in clinical practice and patient care.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2025/03/Best-Practice-Birmingham-Logo.jpg",
      link: " ",
      color: "bg-orange-600"
    },
    {
      id: 8,
      title: "RCGP Wales Conference",
      date: "9-10",
      month: "OCT",
      year: "2025",
      venue: "International Convention Centre",
      address: "Newport, NP18 1DE",
      time: "Day 1 & 2: 9:00AM – 5:00PM (Expected)",
      description: "Meet us at the RCGP Wales conference dedicated to advancing general practice and primary care excellence.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2025/03/rcgp-wales-event.png",
      link: " ",
      color: "bg-cyan-600"
    },
    {
      id: 9,
      title: "NHS Confederation Event",
      date: "30",
      month: "APR",
      year: "2025",
      venue: "The Eastside Rooms",
      address: "B7 4BL",
      time: "8:45AM – 4:45PM (Expected)",
      description: "Virtual Pharmacist Solutions will attend the NHS Confederation event to showcase their expertise and connect with healthcare professionals.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2025/03/NHS-confederation-event-768x432.png",
      link: " ",
      color: "bg-cyan-600"
    },
    {
      id: 10,
      title: "PCPN Event",
      date: "7-8",
      month: "MAY",
      year: "2025",
      venue: "Radisson Blu, Heathrow",
      address: "UB3 5AW",
      time: "8:00AM – 5:30PM",
      description: "Virtual Pharmacist Solutions attended the PCPN event to showcase their healthcare expertise.",
      image: "https://scontent.fskt7-1.fna.fbcdn.net/v/t39.30808-6/489474217_1080809140739623_7297315743297461276_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHWGSJcI6izUurTuEl14WR_iFMw9ceR4xeIUzD1x5HjF3UYrwbjaN7ZxQ7OHXBszVM0-gQwZkdbNt31WQLmTAKO&_nc_ohc=MkS8MLyV6lUQ7kNvwGBl5vu&_nc_oc=AdnREuR03ShhZp-PZefelt6K4Vvkmk33xBHDsSTjoCKmtWWL1p180M7tESVVQlh6FJwjmHOXXZYLi_HU8slvTXNp&_nc_zt=23&_nc_ht=scontent.fskt7-1.fna&_nc_gid=zPj8HJeZj6os40Le6t0geQ&oh=00_AfYEnJ19O7I8RrDbBkNNivDCDPA3ffTPTcT9QGfTCLJypA&oe=68BF1922",
      link: "",
      color: "bg-cyan-600"
    }
  ]

  const pastEvents2024 = [
    {
      id: 11,
      title: "Virtual Pharmacist Solutions at RCGP Annual Conference 2024",
      date: "3rd-4th",
      month: "OCT",
      year: "2024",
      venue: "ACC Liverpool, King’s Dock ",
      address: " Port of Liverpool, Kings Dock St, LL3 4FP",
      time: "9:00AM – 6:45PM ",
      description: "Join Virtual Pharmacist Solutions at the RCGP Annual Conference in Liverpool on 3–4 October 2024. Visit our stand to learn how our pharmacist- and technician-led services support primary care teams and improve patient outcomes.",
      image: "https://scontent.fskt7-1.fna.fbcdn.net/v/t39.30808-6/488258679_1077088764444994_8666404268401652606_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE-bc9N7k36G4KEKXZug-YqhJ4wmz9qw8-EnjCbP2rDz7iEfvc5DUiFLaeKiLS2vCaRXmAQhefRD13-lKIbuk5X&_nc_ohc=7j6hgB4b9GMQ7kNvwGIF_ew&_nc_oc=AdlXn8BRiQbEGjuRDxKZwO4Vt3bEbukDPG3h6CxnHgpqtWJgheWjHRi7I6AOpALQYi7C35-QhxuVn-NNxVskH640&_nc_zt=23&_nc_ht=scontent.fskt7-1.fna&_nc_gid=krQ6RQI7BUHvhyobz00wAg&oh=00_AfbIWLak9n-n0PGE-3qSOWJhSZfEX7a9_lapO-jS08K1mw&oe=68BEF69F",
      link: " ",
      color: "bg-blue-600"
    },
    {
      id: 12,
      title: "Virtual Pharmacist Solutions at Best Practice Show 2024 Best Practice Birmingham",
      date: "9th-10th",
      month: "OCT",
      year: "2024",
      venue: "NEC Birmingham",
      address: "Pendigo Way, Marston Green, Birmingham B40 1N",
      time: "Day 1: 9:00AM – 5:00PM | Day 2: 9:00AM – 4:00PM",
      description: "Virtual Pharmacist Solutions will be attending the Best Practice Show in Birmingham on 9–10 October 2024. Visit our team to explore how our innovative prescribing support services enhance efficiency and patient care in general practice.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/08/bpab2024-768x358.png",
      link: "",
      color: "bg-emerald-600"
    },
    {
      id: 13,
      title: "Management in Practice - London",
      date: "3",
      month: "SEP",
      year: "2024",
      venue: "ILEC Conference Centre",
      address: "SW6 1UD",
      time: "9:00AM – 6:00PM (Expected)",
      description: "Virtual Pharmacist Solutions attended the Management in Practice event in London to discuss healthcare management solutions.",
      image: "https://scontent.fskt7-1.fna.fbcdn.net/v/t39.30808-6/487783546_1077088447778359_3575384766345454133_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEK5pUKOvMfggYIVLionxFHkiZuYHNgZAGSJm5gc2BkAUf83yvV0-L8uMwlnik_mA5852v69cfPPDwPwA9-Bv8s&_nc_ohc=w9-CGtGjxksQ7kNvwFB41MZ&_nc_oc=AdktJZdaC4aeHNAN95aC76NDOd4wDrzNhcln_H-EaADBbNszzTVhyhQPO72ZNuj_Jbz6DoA8jFbmYARB6QdUA9AN&_nc_zt=23&_nc_ht=scontent.fskt7-1.fna&_nc_gid=-T6sIrv6RH9uYjXCorJLqg&oh=00_AfYGYheNHHU-BBMFP6o3uWLkL5ksNJJcu94f18g-jSf3cw&oe=68BF2848",
      link: " ",
      color: "bg-purple-600"
    },
    {
      id: 14,
      title: "Management in Practice - Manchester",
      date: "6",
      month: "JUN",
      year: "2024",
      venue: "The Bridgewater Hall",
      address: "M2 3WS",
      time: "9:00AM – 6:00PM (Expected)",
      description: "Virtual Pharmacist Solutions attended the Management in Practice event in Manchester to showcase their solutions.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/11/management-in-practice-event.png",
      link: " ",
      color: "bg-indigo-600"
    },
    {
      id: 15,
      title: "Management in Practice - Birmingham",
      date: "14",
      month: "MAY",
      year: "2024",
      venue: "National Conference Centre",
      address: "B92 0EJ",
      time: "9:00AM – 6:00PM (Expected)",
      description: "Virtual Pharmacist Solutions attended the Management in Practice event in Birmingham to connect with healthcare professionals.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/11/management-in-practice-event.png",
      link: " ",
      color: "bg-teal-600"
    },
      
  ]

  const pastEvents2023 = [
    {
      id: 16,
      title: "RCGP Annual Conference",
      date: "19-20",
      month: "OCT",
      year: "2023",
      venue: "SEC Centre",
      address: "Glasgow, G3 8YW",
      time: "9:00AM – 5:00PM (Expected)",
      description: "Virtual Pharmacist Solutions attended the RCGP Annual Conference to advance general practice and primary care.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/09/RCGP-event-2024.png",
      link: " ",
      color: "bg-blue-600"
    },
    {
      id: 17,
      title: "Pulse PCN Events - Birmingham & London",
      date: "Summer",
      month: "",
      year: "2023",
      venue: "Multiple Venues",
      address: "Birmingham & London",
      time: "9:00AM – 5:00PM (Expected)",
      description: "Virtual Pharmacist Solutions attended Pulse PCN events in Birmingham and London to focus on Primary Care Networks.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/11/pulsepcn-events-1024x683.jpg",
      link: " ",
      color: "bg-emerald-600"
    },
    {
      id: 18,
      title: "Management in Practice - Birmingham & Manchester",
      date: "Various",
      month: "",
      year: "2023",
      venue: "Multiple Venues",
      address: "Birmingham & Manchester",
      time: "9:00AM – 6:00PM (Expected)",
      description: "Virtual Pharmacist Solutions attended Management in Practice events in Birmingham and Manchester to showcase their solutions.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/11/management-in-practice-event.png",
      link: " ",
      color: "bg-purple-600"
    },
    {
      id: 19,
      title: "Management in Practice - London",
      date: "23",
      month: "NOV",
      year: "2023",
      venue: "ILEC Conference Centre",
      address: "SW6 1UD",
      time: "9:00AM – 6:00PM (Expected)",
      description: "Virtual Pharmacist Solutions attended the Management in Practice event in London to discuss healthcare management solutions.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/11/management-in-practice-event.png",
      link: " ",
      color: "bg-indigo-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <style>
        {`
          @keyframes fadeInSlide {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInSlide {
            animation: fadeInSlide 0.8s ease-out forwards;
          }
          .gradient-text {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}
      </style>

      
      {/* Hero Section */}
      <section className="animate-section py-24 mt-[150px] md:mt-[150px] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Events & Exhibitions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Meet us at healthcare events across the UK
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Join Us at Leading Healthcare Events
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Virtual Pharmacist Solutions regularly attend events and exhibitions throughout the UK.
              </p>
              <p className="text-lg text-blue-600 font-semibold mb-8">
                See below for all the exhibitions we have planned for the future:
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-50 px-4 py-2 rounded-full">
                  <span className="text-blue-700 font-medium">Healthcare Management</span>
                </div>
                <div className="bg-purple-50 px-4 py-2 rounded-full">
                  <span className="text-purple-700 font-medium">Primary Care Networks</span>
                </div>
                <div className="bg-teal-50 px-4 py-2 rounded-full">
                  <span className="text-teal-700 font-medium">Clinical Pharmacy</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://scontent.fskt7-1.fna.fbcdn.net/v/t39.30808-6/489346735_1080809150739622_6727035800314481543_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF3wcO-5dMoHLy_aSVxXI215UKBJ2JtiMzlQoEnYm2IzGHNi6_M1C0jW_BZEd0ZlhBGj-c2wQcg1MbMlUW2exSG&_nc_ohc=bPaNAT6_rYwQ7kNvwFPeACg&_nc_oc=AdlThlvVbwoTb5CEzXrZidqZ3j4AdUbG0qAlylB-gFRP1t1GhztXCoQgU58g0dm1CjVc06-FkuK0XmvLJHicf_Q4&_nc_zt=23&_nc_ht=scontent.fskt7-1.fna&_nc_gid=vxucArB1cXbIL3LigkGbgg&oh=00_AfZxyHluf2cqPwhtsOMlCR0GMJQ-ureoFgQayx88xV-j9A&oe=68BF188D"
                alt="Virtual Pharmacist Solutions Events"
                className="max-w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Events Section */}
      <section className="animate-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">2025 Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover where you can meet our team and learn about our innovative healthcare solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 ${event.color} text-white p-3 rounded-xl shadow-lg`}>
                    <div className="text-2xl font-bold leading-none">{event.date}</div>
                    <div className="text-sm font-medium">{event.month}</div>
                    <div className="text-xs">{event.year}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{event.venue}</div>
                        <div className="text-sm">{event.address}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Book Meeting
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Event Info
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2024 Past Events Section */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">2024 Past Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the events Virtual Pharmacist Solutions attended in 2024
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents2024.map((event, index) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 ${event.color} text-white p-3 rounded-xl shadow-lg`}>
                    <div className="text-2xl font-bold leading-none">{event.date}</div>
                    <div className="text-sm font-medium">{event.month}</div>
                    <div className="text-xs">{event.year}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{event.venue}</div>
                        <div className="text-sm">{event.address}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Contact Us
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Event Info
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2023 Past Events Section */}
      <section className="animate-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">2023 Past Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the events Virtual Pharmacist Solutions attended in 2023
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents2023.map((event, index) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 ${event.color} text-white p-3 rounded-xl shadow-lg`}>
                    <div className="text-2xl font-bold leading-none">{event.date}</div>
                    <div className="text-sm font-medium">{event.month}</div>
                    <div className="text-xs">{event.year}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{event.venue}</div>
                        <div className="text-sm">{event.address}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Contact Us
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Event Info
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="animate-section py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-500  text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-8 text-blue-200" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Us at These Events</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Book a meeting with our team at any of these upcoming events to discuss how we can support your healthcare practice with our innovative prescribing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl transform hover:scale-105"
            >
              Contact Us Today
              <ArrowRight className="w-6 h-6" />
            </Link>
            <div className="text-blue-100">
              <div className="text-lg font-semibold">Call us directly</div>
              <div className="text-2xl font-bold">0113 871 5065</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Events