// Sourced directly from the original publications.html.

export const publications = [
  {
    year: 2025,
    status: 'In Review',
    kind: 'Journal',
    venue: 'Aerospace Engineering',
    title: 'Nonlinear Dynamic Analysis of a PCB Based Small Satellite Frame',
    authors: 'K. Leger, T. Marnell, J. Harounian',
    abstract:
      'PocketQube Satellites are increasing in popularity as researchers from academia, industry, and The Department of Defense start to utilize their low launch costs to host payloads or enable satellite constellations. Students in academia are increasingly exposed to space technology as small satellites become more accessible and cost efficient to launch. The Wentworth PocketQube implements a multifunctional structural frame, intended to reduce the size of the satellite "bus", allowing more space for payload technology. This frame is responsible for solar harvesting, electrical power systems (EPS), attitude control and determination system (ACDS) actuators (PCB embedded magnetorquers), RGB light and temperature sensing, and of course, structural support. This study serves to assist a flight ready decision via vibrational finite element analysis (FEA). Natural frequency, random vibration, and shock vibration analyses are run. All analyses follow NASA GEVS or the SpaceX Falcon 9 user guide, ensuring flight readiness. Both linear and nonlinear material properties and conditions are modeled in this study and derived from detailed printed circuit board (PCB) material testing. The frame architecture passed the random vibration and shock analyses with a failure criterion of RMS von Mises stress. By mechanically testing PCBs to characterize nonlinear material properties and by implementing failure criterion that have resistance to FEA faulty outputs, this study returns accurate and reliable results. Similar study procedures can be applied to a breadth of small satellites.',
    action: null,
  },
  {
    year: 2025,
    status: null,
    kind: 'Conference',
    venue: '2025 MIT Undergraduate Research Technology Conference',
    doi: '10.1109/URTC68753.2025.11533027',
    title: 'The Design of a Race-to-Sleep State Based On-Board Computer for a 1P Cube Satellite',
    authors: 'J. Harounian, T. Crowell, T. Marnell, J. Hiller',
    abstract:
      'This paper describes the design and implementation of an on-board computer (OBC) for a small scale earth observation satellite. Small scale satellites such as the Wentworth PocketQube satellite provide cost-effective and efficient opportunities to gather low-Earth data. However, these satellites require reliable, power-efficient, and real-time computing management of its essential functions, such as communication, attitude control, power distribution, data storage, and task scheduling. Low-cost small scale satellites using commercial off-the-shelf (COTS) components often lack customization and consume excessive power. This paper shows the steps taken to implement a state-based operation, based on a race-to-sleep design. This design includes deployment and detumble using embedded magnetorquers, data acquisition, data transmission, emergency protocols, and de-orbit mode, all returning to an inactive sleep mode, controlled via a real-time operating system (RTOS). This paper serves as a detailed guide for emerging satellite developers on a custom, state based, OBC architecture.',
    action: { label: 'View Paper', href: 'https://ieeexplore.ieee.org/document/11533027' },
  },
  {
    year: 2024,
    status: null,
    kind: 'Conference',
    venue: '2024 MIT Undergraduate Research Technology Conference',
    doi: '10.1109/URTC65039.2024.10937628',
    title: 'The Design and Development of a Low SWaP Communications System for a 1P Cube Satellite',
    authors: 'J. Harounian, P. Blanchard, T. Marnell and S. Basnet',
    abstract:
      'The increased use of small satellites in commercial, defense, and research industries reinforces the need for efficient and reliable communication subsystems. Compact, space rated, communication subsystems present their own unique design challenges. This paper presents the design and implementation of a lower power, low form factor communication subsystem for a IP pico-satellite, developed by a team of undergraduate students from Wentworth Institute of Technology. This effort aims to contribute to the growing field of small satellite communications by providing a robust and efficient solution.',
    action: { label: 'View Paper', href: 'https://ieeexplore.ieee.org/document/10937628' },
    secondaryAction: {
      label: 'Download PDF',
      href: '/assets/documents/the-design-and-development-of-a-low-swap-communications-system-for-a-1p-cube-satellite.pdf',
    },
  },
]
