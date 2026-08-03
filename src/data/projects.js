// Every field here is sourced directly from the original static site
// (project pages + projects.html tiles). Nothing invented — only
// reorganized into data so the UI can render it consistently.

const img = (path) => `/assets/images/${path}`

export const projects = [
  {
    slug: 'lna',
    title: 'Silicon Low Noise Amplifier',
    year: 2025,
    tags: ['Silicon', 'RF', 'Cadence'],
    blurb:
      'Designed a 2 GHz low-noise amplifier optimized for minimal noise figure and low-power using SOI technology.',
    subtitle:
      '2 GHz low-noise amplifier designed using SOI technology for minimal noise figure and low-power operation',
    thumbnail: img('lna/lna_img.png'),
    hero: [img('lna/lna_img.png')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'Designed a 2 GHz low-noise amplifier optimized for minimal noise figure and low-power using SOI technology. The project involved comprehensive circuit simulation and electromagnetic performance analysis using Cadence tools. Developed a complete integrated circuit layout that integrates both passive and active components on silicon substrate.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Frequency', value: '2 GHz' },
          { label: 'Technology', value: 'Silicon-On-Insulator (SOI)' },
          { label: 'Design Tools', value: 'Cadence Virtuoso' },
          { label: 'Simulation', value: 'Circuit and electromagnetic analysis' },
          { label: 'Layout', value: 'Full IC layout with passive and active components' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: [
          'Optimized for minimal noise figure',
          'Low-power operation design',
          'Complete integrated circuit layout',
          'Electromagnetic simulation and analysis',
          'Silicon-on-insulator technology implementation',
        ],
      },
    ],
  },
  {
    slug: 'radioflight',
    title: 'PicoSat RF Communications Board',
    year: 2025,
    tags: ['PCB', 'RF', 'Soldering'],
    blurb:
      'Radio frequency communications board for the Wentworth PocketQube Satellite. Uses impedance tuned PCB and traces.',
    subtitle: 'Radio frequency communications system for Wentworth PocketQube Satellite',
    thumbnail: img('picosat/img_4447.jpeg'),
    hero: [
      img('picosat/img_4447.jpeg'),
      img('picosat/img_4448.jpeg'),
      img('picosat/radioflight.png'),
      img('picosat/radioflight_back.png'),
      img('picosat/img_5398.jpeg'),
    ],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'Designed and developed a radio frequency communications board for the Wentworth Institute of Technology PocketQube satellite project. The board features impedance-tuned PCB traces and antenna design for optimal RF performance in space applications.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Frequency', value: 'UHF/VHF bands' },
          { label: 'Design', value: 'Impedance-tuned PCB' },
          { label: 'Application', value: 'PocketQube satellite' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: [
          'Impedance-tuned traces',
          'Space-grade components',
          'Custom antenna design',
          'RF optimization',
          'Satellite communications',
        ],
      },
    ],
  },
  {
    slug: 'm2-airtag',
    title: 'Airtag Battery Backup',
    year: 2025,
    tags: ['PCB', 'Soldering'],
    blurb:
      'Device to power Apple Airtag from laptop, providing battery backup. Designed PCB to keep a low form-factor to allow for instalation behind laptop rear panel.',
    subtitle: 'Device that powers Apple Airtag from laptop while providing battery backup.',
    thumbnail: img('m2-airtag/img_4056.jpeg'),
    hero: [img('m2-airtag/m2front.png'), img('m2-airtag/m2back.png')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          "This device's purpose is to power the connected Apple Airtag using the laptop's internal battery and connects to a CR2032 coin cell battery when depleted. Designed custom PCB to keep a low form-factor and small footprint to allow for instalation behind laptop rear panel.",
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Main IC', value: 'TPS3620-33DGKR' },
          { label: 'Operating Voltage', value: '3.3V' },
          { label: 'Backup Battery', value: 'CR2032' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: ['0.8mm PCB thickness', '2-Layer PCB'],
      },
      {
        type: 'narrative',
        heading: 'PCB Assembly',
        blocks: [
          { image: img('m2-airtag/img_4050.jpeg') },
          { text: 'Applied solder paste to SMD components on rear side of PCB.' },
          { image: img('m2-airtag/img_4051.jpeg') },
          {
            text: "Created raised blob of solder on negative battery pad. This allows for a better connection between the battery's negative terminal and the pad on the PCB.",
          },
          { image: img('m2-airtag/img_4052.jpeg') },
          { text: 'Reflow soldered SMD components by placing board on hot-plate.' },
          { image: img('m2-airtag/img_4053.jpeg') },
          { image: img('m2-airtag/img_4054.jpeg') },
          { text: 'Used soldering iron to solder THT battery holder.' },
          { image: img('m2-airtag/img_3345.jpeg') },
          { image: img('m2-airtag/img_4056.jpeg') },
          {
            text: 'Soldered modified Apple Airtag to the output of the device. Assembly complete and ready to be installed in the laptop.',
          },
        ],
      },
      {
        type: 'narrative',
        heading: 'Installation',
        blocks: [
          { image: img('m2-airtag/img_4415.jpeg') },
          { image: img('m2-airtag/img_4417.jpeg') },
          { image: img('m2-airtag/img_4418.jpeg') },
          { image: img('m2-airtag/img_4419.jpeg') },
          { image: img('m2-airtag/img_4421.jpeg') },
          { image: img('m2-airtag/img_4424.jpeg') },
          { image: img('m2-airtag/img_4423.jpeg') },
          {
            text: "Applied piece of kapton tape to prevent the inside of the laptops back cover (GND) and the top of the battery holder (VBAT+) from shorting.",
          },
        ],
      },
    ],
  },
  {
    slug: 'bike-horn',
    title: 'Bike Horn',
    year: 2025,
    tags: ['CAD', 'Soldering', '3D Print'],
    blurb:
      'This bike horn uses a 555 timer to create a siren like alarm. Internal battery charges through USB-C port embedded into horn enclosure.',
    subtitle: 'Loud bike horn.',
    thumbnail: img('bike-horn/img_3272.jpg'),
    hero: [
      img('bike-horn/img_3272.jpg'),
      img('bike-horn/img_3260.jpg'),
      img('bike-horn/img_3262.jpg'),
      img('bike-horn/img_3264.jpg'),
      img('bike-horn/img_3265.jpg'),
    ],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'This bike horn uses a 555 timer to create a siren like alarm. Internal battery charges through USB-C port embedded into horn enclosure.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'IC', value: '555 Timer' },
          { label: 'Battery Capacity', value: '250 mAh' },
          { label: 'LiPo Charger', value: 'TP4056' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: ['Boost convertor', 'USB-C', 'Charging status LEDs'],
      },
      {
        type: 'model',
        heading: '3D Model',
        src: 'https://gmail1014762.autodesk360.com/shares/public/SH286ddQT78850c0d8a478922820d627582c?mode=embed',
      },
    ],
  },
  {
    slug: 'calculator',
    title: 'Calculator',
    year: 2024,
    tags: ['PCB', 'Arduino', 'C++'],
    blurb:
      'Classic calculator with mechanical switches and 7-segment display. Designed custom printed circuit board with micro-controller and passive components.',
    subtitle: 'A modern take on a classic calculator with mechanical switches and 7-segment display',
    thumbnail: img('calculator/calculator.png'),
    hero: [img('calculator/calculator.png')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'This is a modern take on a classic calculator, featuring mechanical switches and a 7-segment display. I designed and fabricated a custom printed circuit board that integrates an embedded micro-controller along with various passive components. The firmware was coded in C++.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Microcontroller', value: 'Arduino Pro-Mini' },
          { label: 'Input', value: '17 mechanical switches' },
          { label: 'Display', value: '7-segment display' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: [
          '17 mechanical switches',
          '7-segment display',
          'Custom PCB design',
          'C++ firmware',
          'Embedded microcontroller',
        ],
      },
      {
        type: 'model',
        heading: '3D Model',
        src: 'https://gmail1014762.autodesk360.com/shares/public/SH512d4QTec90decfa6e5da11c3b76f816?mode=embed&ui=min&toolbar=0&nav=0&view=0',
      },
    ],
  },
  {
    slug: 'matrix',
    title: 'RGB LED Matrix',
    year: 2024,
    tags: ['PCB', 'ESP', 'CAD'],
    blurb:
      '10x10 matrix using WS2812B LEDs. Created custom printed circuit board for ESP32 micro-controller and power electronics. Complete with 3d printed enclosure.',
    subtitle: '10x10 LED matrix with custom PCB design and ESP32 control',
    thumbnail: img('matrix/matrix.jpg'),
    hero: [img('matrix/matrix.jpg'), img('matrix/matrix-pcb.png')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'This project features a 10x10 LED matrix using WS2812B LEDs. I designed and fabricated a custom printed circuit board specifically for an ESP32 micro-controller, which serves as the brain of the project, handling the control and communication with the LEDs. Additionally, the PCB includes power electronics to ensure stable and efficient power delivery to the LED matrix. To complete the project, I designed and 3D printed a custom enclosure, providing a sleek and protective housing for the electronics.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Microcontroller', value: 'ESP32' },
          { label: 'LEDs', value: '100 WS2812B LEDs' },
          { label: 'Connectivity', value: 'WiFi controllable' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: [
          '100 LEDs',
          'WiFi controllable',
          'Custom PCB design',
          '3D printed enclosure',
          'Power electronics',
        ],
      },
      {
        type: 'model',
        heading: '3D Model',
        src: 'https://gmail1014762.autodesk360.com/shares/public/SH286ddQT78850c0d8a41f498549f7b37145?mode=embed',
      },
    ],
  },
  {
    slug: 'antennatuning',
    title: 'PicoSat Antenna Board',
    year: 2024,
    tags: ['PCB', 'RF', 'Soldering'],
    blurb:
      'Printed circuit board used to test different variables for a dipole antenna used on a cube sattelite. Uses impedance tuned PCB and traces.',
    subtitle: 'Prototype circuit board for testing and tuning tape measure dipole antenna performance',
    thumbnail: img('picosat/img_1634.jpeg'),
    hero: [
      img('picosat/img_1634.jpeg'),
      img('picosat/antenna2.png'),
      img('picosat/antenna1.png'),
      img('picosat/img_1636.jpeg'),
      img('picosat/img_1640-alt.jpeg'),
    ],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'I created an antenna prototype circuit board to test and tune the performance of a tape measure dipole antenna. This board has 4 different antenna pad layouts to determine which setup works best for our satellite. I varied the area of the pad as well as the distance between the pads, which changes the characteristics of the antenna. A "T" network of a resistor, capacitor and inductor was used to tune the impedance of our circuit to 50 ohms, which is the impedance of our radio communications circuit. Also included is a balun that creates a balanced, differential signal for the antenna. Lastly, is a UFL connector to connect a vector network analyzer, to test the antenna\'s performance.',
          'This circuit board is featured in my research paper "The Design and Development of a Low SWaP Communications System for a 1P Cube Satellite".',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Antenna Type', value: 'Tape measure dipole' },
          { label: 'Impedance', value: '50 ohms tuned' },
          { label: 'Layouts', value: '4 different pad configurations' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: [
          '4 different antenna pad layouts',
          'T-network impedance matching',
          'Balun for balanced signals',
          'UFL connector for testing',
          'Vector network analyzer compatible',
        ],
      },
    ],
  },
  {
    slug: 'aux-relay',
    title: 'Auxiliary Gate Relay',
    year: 2024,
    tags: ['Arduino', 'C++', 'CAD'],
    blurb:
      'Device created used to trigger relay at specific time intervals. Microcontroller takes in +24V external signal input. DIP switches used to configure timing delay.',
    subtitle: 'Custom relay system for gate automation and control',
    thumbnail: img('auxiliary-gate-relay/1.jpg'),
    hero: [img('auxiliary-gate-relay/1.jpg')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'Designed and built a custom auxiliary relay system for gate automation. The system provides reliable switching and control capabilities for automated gate operations, featuring robust electronics and custom PCB design for industrial applications.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Relay Type', value: 'Solid state' },
          { label: 'Voltage', value: '12V/24V' },
          { label: 'Enclosure', value: 'Weatherproof' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: ['Reliable switching', 'Weatherproof design', 'Custom PCB', 'Industrial grade', 'Easy installation'],
      },
      {
        type: 'model',
        heading: '3D Model',
        src: 'https://gmail1014762.autodesk360.com/shares/public/SH512d4QTec90decfa6e5da11c3b76f816?mode=embed&ui=min&toolbar=0&nav=0&view=0',
      },
    ],
  },
  {
    slug: 'doorbell',
    title: 'Wireless Doorbell',
    year: 2024,
    tags: ['Arduino', 'Soldering', 'CAD'],
    blurb:
      'Wireless doorbell speaker and button that communicate over 2.4 GHz. Chime audio stored on micro-SD, and changeable with on-board button.',
    subtitle: 'Custom wireless doorbell system with RF communication',
    thumbnail: img('doorbell/wireless-doorbell-enclosure.png'),
    hero: [img('doorbell/wireless-doorbell-enclosure.png')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'Designed and built a custom wireless doorbell system using RF communication. The project includes a transmitter button unit and a receiver with speaker. Features custom PCB design, RF modules, and 3D printed enclosures for both components.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Communication', value: 'RF wireless' },
          { label: 'Range', value: '100+ meters' },
          { label: 'Enclosure', value: '3D printed' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: [
          'Wireless RF communication',
          'Long range operation',
          'Custom PCB design',
          '3D printed enclosures',
          'Battery powered',
        ],
      },
      {
        type: 'model',
        heading: '3D Model',
        src: 'https://gmail1014762.autodesk360.com/shares/public/SH512d4QTec90decfa6e5da11c3b76f816?mode=embed&ui=min&toolbar=0&nav=0&view=0',
      },
    ],
  },
  {
    slug: 'watchwinder',
    title: 'Automatic Watch Winder',
    year: 2023,
    tags: ['Arduino', 'C++', 'CAD'],
    blurb:
      'Created to keep automatic watches running when they are not being worn. Uses stepper motor and arduino to accurately turn watch with full control.',
    subtitle: 'Automated watch winding system with custom motor control',
    thumbnail: img('watchwinder/winder.png'),
    hero: [img('watchwinder/winder.png')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'Built an automated watch winder system that keeps automatic watches running when not worn. The device features precise motor control, customizable winding patterns, and a sleek enclosure design. Perfect for maintaining the power reserve of automatic timepieces.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Motor', value: 'Stepper motor' },
          { label: 'Control', value: 'Arduino' },
          { label: 'Enclosure', value: '3D printed' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: [
          'Automated winding',
          'Customizable patterns',
          'Precise motor control',
          '3D printed enclosure',
          'Power management',
        ],
      },
      {
        type: 'model',
        heading: '3D Model',
        src: 'https://gmail1014762.autodesk360.com/shares/public/SH512d4QTec90decfa6e5da11c3b76f816?mode=embed&ui=min&toolbar=0&nav=0&view=0',
      },
    ],
  },
  {
    slug: 'retropie',
    title: 'RetroPie Game Console',
    year: 2023,
    tags: ['RasPi', 'Soldering', 'CAD'],
    blurb:
      'Retro gaming system built using a Raspberry Pi 3B+ single-board computer and RetroPie firmware. Complete with 3D printed and laser cut enclosure.',
    subtitle: 'Portable retro gaming system with Raspberry Pi and custom enclosure',
    thumbnail: img('retropie/console.jpg'),
    hero: [img('retropie/console.jpg')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'Built a portable retro gaming console using Raspberry Pi and RetroPie software. The system can emulate classic games from various platforms including NES, SNES, Game Boy, and more. Features a custom 3D printed enclosure with integrated controls and display.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Platform', value: 'Raspberry Pi' },
          { label: 'Software', value: 'RetroPie' },
          { label: 'Enclosure', value: '3D printed' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: [
          'Multiple console emulation',
          'Portable design',
          'Custom controls',
          '3D printed case',
          'Retro gaming library',
        ],
      },
      {
        type: 'model',
        heading: '3D Model',
        src: 'https://gmail1014762.autodesk360.com/shares/public/SH286ddQT78850c0d8a47e58a5be14e412a3?mode=embed',
      },
    ],
  },
  {
    slug: 'sound-bar',
    title: 'Monitor Sound Bar',
    year: 2023,
    tags: ['CAD', 'Soldering', '3D Print'],
    blurb:
      'Stereo speaker system created to sit on top of any computer monitor. Connects to PC over a single USB-A connection for power and audio input.',
    subtitle: 'Custom audio system with amplifier and speaker design',
    thumbnail: img('sound-bar/soundbar.png'),
    hero: [img('sound-bar/soundbar.png')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'Designed and built a custom sound bar system featuring high-quality audio components and amplifier circuitry. The project includes custom speaker enclosure design, power amplification, and audio signal processing for enhanced sound quality.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Amplifier', value: 'Class D' },
          { label: 'Speakers', value: 'Custom drivers' },
          { label: 'Enclosure', value: 'Custom design' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: [
          'High-quality audio',
          'Custom amplifier',
          'Speaker enclosure design',
          'Audio signal processing',
          'Enhanced bass response',
        ],
      },
      {
        type: 'model',
        heading: '3D Model',
        src: 'https://gmail1014762.autodesk360.com/shares/public/SH286ddQT78850c0d8a40a6a246fe8c7cf23?mode=embed',
      },
    ],
  },
  {
    slug: 'cue-extension',
    title: 'Billiards Cue Extension',
    year: 2023,
    tags: ['CAD', '3D Print'],
    blurb:
      "Billiards cue extension designed for JFlowers cues. Equipped with an adjustable weight bolt system to fine tune the cue's weight balance when attached.",
    subtitle: 'Custom billiards cue extension for improved reach and performance',
    thumbnail: img('cue-extension/extension.png'),
    hero: [img('cue-extension/extension.png'), img('cue-extension/extension1.png')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'Designed and manufactured a custom cue extension for billiards to improve reach and shot accuracy. The extension features precision engineering, custom threading, and ergonomic design for optimal performance during gameplay.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Material', value: 'Aluminum' },
          { label: 'Length', value: 'Custom fit' },
          { label: 'Threading', value: 'Precision cut' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: [
          'Custom length',
          'Precision threading',
          'Ergonomic design',
          'Lightweight construction',
          'Professional finish',
        ],
      },
      {
        type: 'model',
        heading: '3D Model',
        src: 'https://gmail1014762.autodesk360.com/shares/public/SH286ddQT78850c0d8a4e0942b48d87a9541?mode=embed',
      },
    ],
  },
  {
    slug: 'joedeck',
    title: 'JoeDeck',
    year: 2022,
    tags: ['Arduino', 'C++', 'CAD'],
    blurb:
      'Small computer peripheral device that allows users to assign macros, or pre-programmed sequences of keystrokes that can be executed with a single button press.',
    subtitle: 'A customizable macro keyboard with volume control and OLED display',
    thumbnail: img('joedeck/img_0434.jpg'),
    hero: [img('joedeck/img_0434.jpg')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          "The JoeDeck is a small computer peripheral device that allows users to assign macros, or pre-programmed sequences of keystrokes that can be executed with a single button press. These macros can be used for a variety of purposes, such as in-game shortcuts or automating repetitive tasks. In addition to this, it gives you the ability to adjust the volume levels of your programs and output/input devices, so you can mix/balance them to your heart's content. It's commonly used by gamers and programmers as a way to improve their productivity and efficiency.",
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Microcontroller', value: 'Arduino Pro-Micro and Arduino Nano' },
          { label: 'Connectivity', value: 'USB-C port' },
          { label: 'Display', value: 'OLED screen' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: ['Full QMK compatibility', '12 fully reprogrammable keys', '2 rotary encoders', 'OLED screen', 'USB-C port'],
      },
      {
        type: 'model',
        heading: '3D Model',
        src: 'https://gmail1014762.autodesk360.com/shares/public/SH512d4QTec90decfa6e5da11c3b6b76f816?mode=embed',
      },
    ],
  },
  {
    slug: 'curtains',
    title: 'Motorized Curtains',
    year: 2022,
    tags: ['ESP', 'CAD', 'C++'],
    blurb:
      'System designed to open and close curtains. Motor and pulley used to tug on curtain ropes. ESP8266 microcontroller controls system over WIFI.',
    subtitle: 'Smart home automation system for automated curtain control',
    thumbnail: img('curtains/curtains-cad.png'),
    hero: [img('curtains/curtains-cad.png')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'Designed and built an automated curtain system for smart home automation. The system uses stepper motors, Arduino control, and custom mechanical components to provide smooth curtain operation. Features remote control capability and programmable schedules.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Motor', value: 'Stepper motor' },
          { label: 'Control', value: 'Arduino' },
          { label: 'Mechanical', value: 'Custom design' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: [
          'Automated operation',
          'Remote control',
          'Programmable schedules',
          'Custom mechanical design',
          'Stepper motor control',
        ],
      },
      {
        type: 'model',
        heading: '3D Model',
        src: 'https://gmail1014762.autodesk360.com/shares/public/SH286ddQT78850c0d8a429daf26e374aaf7d?mode=embed',
      },
    ],
  },
  {
    slug: 'nas',
    title: 'Network Attached Storage',
    year: 2022,
    tags: ['RasPi', 'Soldering', 'CAD'],
    blurb: 'Network attached storage system created with Raspberry Pi 3B+. Complete with 3D printed rack-style enclosure and active airflow.',
    subtitle: 'Home server with FreeNAS for file storage and media streaming',
    thumbnail: img('nas/img_0390.jpg'),
    hero: [img('nas/img_0390.jpg')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'Created network attached storage system using FreeNAS to store files and run media servers. The system provides centralized storage for the home network with redundancy and easy access from multiple devices.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Platform', value: 'Raspberry Pi 3B+' },
          { label: 'Operating System', value: 'FreeNAS' },
          { label: 'Enclosure', value: '3D printed rack-style' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: [
          'File storage and sharing',
          'Media server capabilities',
          '3D printed enclosure',
          'Active airflow design',
          'Network accessible',
        ],
      },
    ],
  },
  {
    slug: 'macropad-3x3',
    title: '3x3 Macropad',
    year: 2021,
    tags: ['Arduino', 'C', 'Soldering'],
    blurb:
      'Compact keyboard device that can be programmed to perform specific functions, macros, or shortcuts. 3D printed enclosure and hand wired switch matrix.',
    subtitle: 'Custom mechanical keyboard with programmable macros and RGB lighting',
    thumbnail: img('macropad/img_20220221_222244.jpg'),
    hero: [img('macropad/img_20220221_222302_bokeh.jpg')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'A custom mechanical keyboard designed for productivity and gaming. Features programmable macros, RGB lighting, and a compact 3x3 form factor. The project includes custom PCB design, 3D printed case, and QMK firmware for complete customization.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Microcontroller', value: 'Arduino Pro Micro' },
          { label: 'Switches', value: 'Mechanical Cherry MX' },
          { label: 'Firmware', value: 'QMK' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: ['Programmable macros', 'RGB lighting', 'Custom PCB design', '3D printed case', 'QMK firmware'],
      },
      {
        type: 'gallery',
        heading: 'Gallery',
        images: [
          img('macropad/img_20220221_190046.jpg'),
          img('macropad/img_20220221_222240.jpg'),
          img('macropad/img_20220221_222244.jpg'),
          img('macropad/img_20220221_222302_bokeh.jpg'),
        ],
      },
    ],
  },
  {
    slug: 'macropad-4x4',
    title: '4x4 Macropad',
    year: 2021,
    tags: ['Arduino', 'C', 'Soldering'],
    blurb:
      'Compact keyboard device that can be programmed to perform specific functions, macros, or shortcuts. 3D printed enclosure and hand wired switch matrix.',
    subtitle: 'Custom mechanical keyboard with programmable macros and RGB lighting',
    thumbnail: img('macropad/img_20211004_154252.jpg'),
    hero: [img('macropad/img_20211004_154252.jpg')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'A custom mechanical keyboard designed for productivity and gaming. Features programmable macros, RGB lighting, and a compact 4x4 form factor. The project includes custom PCB design, 3D printed case, and QMK firmware for complete customization.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Microcontroller', value: 'Arduino Pro Micro' },
          { label: 'Switches', value: 'Mechanical Cherry MX' },
          { label: 'Firmware', value: 'QMK' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: ['Programmable macros', 'RGB lighting', 'Custom PCB design', '3D printed case', 'QMK firmware'],
      },
      {
        type: 'gallery',
        heading: 'Gallery',
        images: [
          img('macropad/img_20211004_154252.jpg'),
          img('macropad/img_20211004_154305.jpg'),
          img('macropad/img_20211004_161318.jpg'),
          img('macropad/img_20211004_161322.jpg'),
          img('macropad/img_20211004_165811.jpg'),
          img('macropad/img_20211004_165821.jpg'),
          img('macropad/img_20211004_222014.jpg'),
        ],
      },
    ],
  },
  {
    slug: 'redox',
    title: 'Redox Keyboard',
    year: 2021,
    tags: ['Arduino', 'C', 'Soldering'],
    blurb:
      'Retro gaming system built using a Raspberry Pi 3B+ single-board computer and RetroPie firmware. Complete with 3D printed and laser cut enclosure.',
    subtitle: 'Split mechanical keyboard with ergonomic design and QMK firmware',
    thumbnail: img('redox/img_20211207_161329.jpg'),
    hero: [img('redox/img_20211207_161329.jpg')],
    sections: [
      {
        type: 'text',
        heading: 'About',
        paragraphs: [
          'Built a Redox split mechanical keyboard featuring an ergonomic design that promotes better typing posture. The keyboard uses Cherry MX switches and runs QMK firmware for complete customization. The split design allows for natural hand positioning and reduced strain during extended typing sessions.',
        ],
      },
      {
        type: 'specs',
        heading: 'Technical Specifications',
        items: [
          { label: 'Layout', value: 'Split ergonomic' },
          { label: 'Switches', value: 'Cherry MX' },
          { label: 'Firmware', value: 'QMK' },
        ],
      },
      {
        type: 'features',
        heading: 'Features',
        items: ['Split ergonomic design', 'Mechanical switches', 'QMK firmware', 'Custom keymaps', 'Improved typing posture'],
      },
    ],
  },
]

export const allTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort()

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug)
