// Sourced directly from the original index.html / publications.html.

export const nav = [
  { label: 'Projects', href: '/projects' },
  { label: 'Publications', href: '/publications' },
]

export const about = {
  title: 'About Me',
  subtitle: 'Electrical Engineering student passionate about hardware design and embedded systems',
  paragraphs: [
    "I'm a Junior studying Electrical Engineering at Wentworth Institute of Technology. I am fascinated by all electronics, especially printed circuit boards, chip design and RF.",
    "I love designing and building hardware, whether it's creating custom PCBs, programming microcontrollers, or 3D printing enclosures. Take a look at some of the things I have been working on recently.",
  ],
  headshot: '/assets/images/headshot.jpg',
}

export const experience = [
  {
    company: 'Cisco',
    position: 'ASIC Physical Design Engineer I Co-Op',
    date: 'August 2025 – Present',
    location: 'Maynard, MA',
    focus: 'High-Speed Chip Design',
    logo: '/assets/images/company-logos/cisco.png',
    description:
      "Working with the Physical Design team and Front-End engineers to develop Cisco's high-performance optical communication products with the Acacia team. Collaborating with architecture teams to guide physical design, performing gate-level netlist synthesis, floorplanning, placement, clock tree synthesis and routing. Optimizing power, performance, and area while conducting static timing analysis, physical verification (LVS/DRC), and EMIR analysis.",
    skills: ['ASIC Design', 'Physical Design', 'Optical Communications'],
  },
  {
    company: 'Skyworks Solutions',
    position: 'Radio Frequency Design Engineer Co-Op',
    date: 'January 2025 – May 2025',
    location: 'Andover, MA',
    focus: 'RF Design & Testing',
    logo: '/assets/images/company-logos/skyworks.jpg',
    description:
      'Built RF test setups and harnesses for devices ranging from 2-7 GHz. Measured performance of WiFi7 front-end modules, amplifiers and filters to evaluate device characteristics and performance. Designed Silicon-On-Insulator low-noise amplifier from schematic to silicon layout.',
    skills: ['RF Design', 'WiFi7', 'Silicon Layout'],
  },
  {
    company: 'Applied Power Systems',
    position: 'Assembly/Test Engineer',
    date: 'Summers 2023-2024',
    location: 'Hicksville, NY',
    focus: 'Power Systems',
    logo: '/assets/images/company-logos/aps.avif',
    description:
      'Assembled mechanical components, wiring harnesses and circuit boards for inverters, converters and power systems. Tested assembled printed circuit boards using test fixtures and oscilloscope.',
    skills: ['PCB Assembly', 'Power Systems', 'Testing'],
  },
  {
    company: 'IFixScreens',
    position: 'Electronics Repair Technician',
    date: 'May 2022 – August 2022',
    location: 'Hicksville, NY',
    focus: 'Consumer Electronics',
    logo: '/assets/images/company-logos/ifs.jpg',
    description:
      'Diagnosed and repaired consumer electronics, including smartphones, tablets, laptops, and gaming consoles. Replaced damaged displays, batteries, and charging ports on various mobile devices.',
    skills: ['Electronics Repair', 'Mobile Devices', 'Hardware Repair'],
  },
]

export const social = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/josephharounian/',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/harounian',
    icon: 'github',
  },
  {
    name: 'ORCID',
    href: 'https://orcid.org/0009-0006-9668-2406',
    icon: 'orcid',
  },
]
