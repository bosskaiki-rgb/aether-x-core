// ===============================
// STANDARDIZED PRODUCT LIST
// ===============================

const products = [

    // =========================
    // AIR COOLERS
    // =========================
    {
      key: "air510",
      type: "air",
      name: "Aether Therm X510",
      price: "$249 NZD",
      image: "images/PCPARTS/cooler1.png",
      desc: "Entry air cooler",
      specs: ["4 Heatpipes", "120mm Fan", "~150W Cooling"]
    },
    {
      key: "air520",
      type: "air",
      name: "Aether Therm X520",
      price: "$39 NZD",
      image: "images/PCPARTS/cooler8.png",
      desc: "Improved airflow cooling",
      specs: ["5 Heatpipes", "120mm Fan", "~170W Cooling"]
    },
    {
      key: "air530",
      type: "air",
      name: "Aether Therm X530",
      price: "$69 NZD",
      image: "images/PCPARTS/cooler9.png",
      desc: "High airflow air cooler",
      specs: ["Dual Fan", "6 Heatpipes", "~220W Cooling"]
    },
    {
      key: "air550",
      type: "air",
      name: "Aether Therm X550",
      price: "$89 NZD",
      image: "images/PCPARTS/cooler10.png",
      desc: "Dual tower cooler",
      specs: ["Dual Tower", "7 Heatpipes", "~260W Cooling"]
    },
    {
      key: "air580",
      type: "air",
      name: "Aether Therm X580",
      price: "$129 NZD",
      image: "images/PCPARTS/cooler11.png",
      desc: "Extreme air cooling",
      specs: ["Triple Tower", "9 Heatpipes", "~320W Cooling"]
    },
  
    // =========================
    // AIO COOLERS
    // =========================
    {
      key: "aio540",
      type: "aio",
      name: "Aether Therm X540",
      price: "$89 NZD",
      image: "images/PCPARTS/cooler6.png",
      desc: "120mm liquid cooler",
      specs: ["120mm Radiator", "1 Fan", "~180W Cooling"]
    },
    {
      key: "aio560",
      type: "aio",
      name: "Aether Therm X560",
      price: "$129 NZD",
      image: "images/PCPARTS/cooler3.png",
      desc: "240mm liquid cooler",
      specs: ["240mm Radiator", "2 Fans", "~300W Cooling"]
    },
    {
      key: "aio590",
      type: "aio",
      name: "Aether Therm X590",
      price: "$199 NZD",
      image: "images/PCPARTS/cooler4.png",
      desc: "360mm performance AIO",
      specs: ["360mm Radiator", "3 Fans", "~400W Cooling"]
    },
    {
      key: "aio600",
      type: "aio",
      name: "Aether Therm X600",
      price: "$249 NZD",
      image: "images/PCPARTS/cooler7.png",
      desc: "Advanced 360mm AIO",
      specs: ["High-density radiator", "3 Fans", "~450W Cooling"]
    },
    {
      key: "aio620",
      type: "aio",
      name: "Aether Therm X620",
      price: "$349 NZD",
      image: "images/PCPARTS/cooler5.png",
      desc: "Flagship 420mm AIO",
      specs: ["420mm Radiator", "3x 140mm Fans", "600W+ Cooling"]
    },
  
    // =========================
    // GPUs
    // =========================
    {
      key: "gpu3100",
      type: "gpu",
      name: "Aether X 3100",
      price: "$249 NZD",
      image: "images/PCPARTS/gpu1.png",
      desc: "Entry-level 1080p GPU",
      specs: ["8GB GDDR6", "128-bit bus"]
    },
    {
      key: "gpu3200",
      type: "gpu",
      name: "Aether X 3200",
      price: "$399 NZD",
      image: "images/PCPARTS/gpu2.png",
      desc: "Balanced 1080p / 1440p GPU",
      specs: ["12GB GDDR6X", "192-bit bus"]
    },
    {
      key: "gpu3300",
      type: "gpu",
      name: "Aether X 3300",
      price: "$599 NZD",
      image: "images/PCPARTS/gpu3.png",
      desc: "High-performance 1440p GPU",
      specs: ["16GB GDDR6X", "256-bit"]
    },
    {
      key: "gpu3400",
      type: "gpu",
      name: "Aether X 3400",
      price: "$999 NZD",
      image: "images/PCPARTS/gpu4.png",
      desc: "4K gaming GPU",
      specs: ["20GB GDDR7", "1TB/s bandwidth"]
    },
    {
      key: "gpu3500",
      type: "gpu",
      name: "Aether X 3500",
      price: "$1799 NZD",
      image: "images/PCPARTS/gpu5.png",
      desc: "Flagship 8K GPU",
      specs: ["32GB GDDR7", "2TB/s bandwidth"]
    },
  
    // =========================
    // CPUs
    // =========================
    {
      key: "cpu5100",
      type: "cpu",
      name: "Aether Core C5100",
      price: "$499 NZD",
      image: "images/PCPARTS/cpu1.png",
      desc: "Entry gaming CPU",
      specs: ["8C / 16T", "5.0GHz boost"]
    },
    {
      key: "cpu5300",
      type: "cpu",
      name: "Aether Core C5300",
      price: "$699 NZD",
      image: "images/PCPARTS/cpu2.png",
      desc: "Mid-range CPU",
      specs: ["12C / 24T", "5.5GHz boost"]
    },
    {
      key: "cpu5600",
      type: "cpu",
      name: "Aether Core C5600",
      price: "$899 NZD",
      image: "images/PCPARTS/cpu3.png",
      desc: "High-end gaming CPU",
      specs: ["16C / 32T", "6.0GHz boost"]
    },
    {
      key: "cpu5900",
      type: "cpu",
      name: "Aether Core C5900",
      price: "$1099 NZD",
      image: "images/PCPARTS/cpu4.png",
      desc: "Extreme CPU",
      specs: ["20C / 40T", "6.0GHz boost"]
    },
    {
      key: "cpu6200",
      type: "cpu",
      name: "Aether Core C6200",
      price: "$1299 NZD",
      image: "images/PCPARTS/cpu5.png",
      desc: "Flagship CPU",
      specs: ["24C / 48T", "6.2GHz boost"]
    },
  
    // =========================
    // RAM
    // =========================
    {
      key: "ram510",
      type: "ram",
      name: "Aether X510 16GB",
      price: "$69 NZD",
      image: "images/PCPARTS/ram1.png",
      desc: "Entry DDR5",
      specs: ["16GB", "5600 MT/s"]
    },
    {
      key: "ram530",
      type: "ram",
      name: "Aether X530 32GB",
      price: "$139 NZD",
      image: "images/PCPARTS/ram2.png",
      desc: "Balanced DDR5",
      specs: ["32GB", "6400 MT/s"]
    },
    {
      key: "ram560",
      type: "ram",
      name: "Aether X560 32GB",
      price: "$199 NZD",
      image: "images/PCPARTS/ram3.png",
      desc: "High-speed RAM",
      specs: ["7200 MT/s"]
    },
    {
      key: "ram590",
      type: "ram",
      name: "Aether X590 64GB",
      price: "$349 NZD",
      image: "images/PCPARTS/ram4.png",
      desc: "Heavy multitasking",
      specs: ["64GB", "8000 MT/s"]
    },
    {
      key: "ram600",
      type: "ram",
      name: "Aether X600 128GB",
      price: "$899 NZD",
      image: "images/PCPARTS/ram5.png",
      desc: "Extreme DDR6 kit",
      specs: ["128GB", "DDR6"]
    },
  
    // =========================
    // MOBO
    // =========================
    {
      key: "mobo510",
      type: "mobo",
      name: "AMX-B510",
      price: "$129 NZD",
      image: "images/PCPARTS/mobo1.png",
      desc: "Entry motherboard",
      specs: ["DDR5", "PCIe 5.0"]
    },
    {
      key: "mobo530",
      type: "mobo",
      name: "AMX-M530",
      price: "$199 NZD",
      image: "images/PCPARTS/mobo2.png",
      desc: "Mid-tier board",
      specs: ["128GB RAM support", "PCIe 5.0"]
    },
    {
      key: "mobo560",
      type: "mobo",
      name: "AMX-H560",
      price: "$299 NZD",
      image: "images/PCPARTS/mobo3.png",
      desc: "High-end board",
      specs: ["192GB RAM"]
    },
    {
      key: "mobo590",
      type: "mobo",
      name: "AMX-X590",
      price: "$449 NZD",
      image: "images/PCPARTS/mobo4.png",
      desc: "Extreme board",
      specs: ["Dual GPU support"]
    },
    {
      key: "mobo620",
      type: "mobo",
      name: "AMX-Z620",
      price: "$799 NZD",
      image: "images/PCPARTS/mobo5.png",
      desc: "Flagship board",
      specs: ["DDR6", "Extreme VRM"]
    },
  
    // =========================
    // M.2 SSD
    // =========================
    {
      key: "m2510",
      type: "m2",
      name: "NVX 510 500GB",
      price: "$59 NZD",
      image: "images/PCPARTS/m2_1.png",
      desc: "Entry SSD",
      specs: ["500GB", "5,000 MB/s"]
    },
    {
      key: "m2530",
      type: "m2",
      name: "NVX 530 1TB",
      price: "$109 NZD",
      image: "images/PCPARTS/m2_2.png",
      desc: "Balanced SSD",
      specs: ["1TB", "7,200 MB/s"]
    },
    {
      key: "m2560",
      type: "m2",
      name: "NVX 560 1TB",
      price: "$199 NZD",
      image: "images/PCPARTS/m2_3.png",
      desc: "High-speed SSD",
      specs: ["12,000 MB/s"]
    },
    {
      key: "m2590",
      type: "m2",
      name: "NVX 590 2TB",
      price: "$299 NZD",
      image: "images/PCPARTS/m2_4.png",
      desc: "High capacity SSD",
      specs: ["2TB"]
    },
    {
      key: "m2620",
      type: "m2",
      name: "NVX 620 4TB",
      price: "$799 NZD",
      image: "images/PCPARTS/m2_5.png",
      desc: "Flagship SSD",
      specs: ["30,000 MB/s"]
    },

    // =========================
    // CONSOLES
    // =========================
    {
      key: "con224",
      type: "con",
      name: "HyperGrid S",
      price: "$399 NZD",
      image: "images/Consoles/Console4.png",
      desc: "Entry-end Console",
      specs: ["Compact heatsink", "low-profile fan",]
    },

    {
      key: "con225",
      type: "con",
      name: "Zenith Prime",
      price: "$449 NZD",
      image: "images/Consoles/Console3.png",
      desc: "Mid-end Console",
      specs: ["Passive idle cooling", "energy efficient",]
    },

    {
      key: "con226",
      type: "con",
      name: "Phantom Vortex",
      price: "$799 NZD",
      image: "images/Consoles/Console1.png",
      desc: "High-end Console",
      specs: ["AI upscaling", "real-time ray tracing",]
    },
    
    {
      key: "con227",
      type: "con",
      name: "TitanCore X9",
      price: "$1,199 NZD",
      image: "images/Consoles/Console2.png",
      desc: "Ultra High-Level Console",
      specs: ["liquid loop assist", "Smart fan curve",]
    },

     // =========================
  // CONSOLES
  // =========================

    {
      key: "ctrl557",
      type: "ctrl",
      name: "NovaPulse X7",
      price: "$119 NZD",
      image: "images/Controllers/Controller4.png",
      desc: "Low-Level Controller",
      specs: ["1200Hz Polling Rate", "Adaptive Magnetic Triggers", "2.4GHz HyperLink Dongle",]
    },
    {
      key: "ctrl558",
      type: "ctrl",
      name: "PhantomCore VX",
      price: "$139 NZD",
      image: "images/Controllers/Controller2.png",
      desc: "Mid-Level Controller",
      specs: ["Graphene cooling layer", "Anti-sweat nano texture", "Silent tactile buttons",]
    },
    {
      key: "ctrl559",
      type: "ctrl",
      name: "TitanGrid S Elite",
      price: "$189 NZD",
      image: "images/Controllers/Controller3.png",
      desc: "High-Level Controller",
      specs: ["Hall Effect triggers", "QuantumLink Wireless", "Adjustable controller weight",]
    },
    {
       key: "ctrl560",
       type: "ctrl",
       name: "Vortex Edge X",
       price: "$249 NZD",
       image: "images/Controllers/Controller1.png",
       desc: "Ultra-High-Level Controller",
       specs: ["Esports-grade optical triggers", "0.8ms TurboSync wireless", "50-hour battery",]
    },

    // =========================
    // AIR COOLERS
    // =========================
    {
      key: "PC1",
      type: "low",
      name: "Aether X Core: Sentry",
      price: "$856 NZD",
      image: "Images/PreBuilds/PC1.png",
      desc: "Entry Gaming",
      specs: ["DDR4 16GB RAM", "500GB SSD", "Water Cooling"]
    },
    {
        key: "PC2",
        type: "low",
        name: "Aether X Core: Vortex",
        price: "$982 NZD",
        image: "Images/PreBuilds/PC2.png",
        desc: "Entry Gaming",
        specs: ["DDR4 16GB RAM", "500GB SSD", "Water Cooling"]
      },
      {
        key: "PC3",
        type: "low",
        name: "Aether X Core: Chimera",
        price: "$1,030 NZD",
        image: "Images/PreBuilds/PC3.png",
        desc: "Entry Gaming",
        specs: ["DDR4 16GB RAM", "500GB SSD", "Water Cooling"]
      },
      {
        key: "PC4",
        type: "mid",
        name: "Aether X Core: Olympus",
        price: "$1,560 NZD",
        image: "Images/PreBuilds/PC4.png",
        desc: "Intermediate Gaming",
        specs: ["DDR5 32GB RAM", "500GB SSD", "Water Cooling"]
      },
      {
        key: "PC5",
        type: "mid",
        name: "Aether X Core: Valhalla",
        price: "$2,960 NZD",
        image: "Images/PreBuilds/PC5.png",
        desc: "Intermediate Gaming",
        specs: ["DDR5 32GB RAM", "1TB SSD", "Water Cooling"]
      },
      {
        key: "PC6",
        type: "mid",
        name: "Aether X Core: Excalibur",
        price: "$3,490 NZD",
        image: "Images/PreBuilds/PC6.png",
        desc: "Intermediate Gaming",
        specs: ["DDR5 32GB RAM", "1TB SSD", "Water Cooling"]
      },
      {
        key: "PC7",
        type: "high",
        name: "Aether X Core: Leviathan",
        price: "$3,989 NZD",
        image: "Images/PreBuilds/PC7.png",
        desc: "Master Gaming",
        specs: ["DDR5 64GB RAM", "1TB SSD", "Water Cooling"]
      },
      {
        key: "PC8",
        type: "high",
        name: "Aether X Core: Atlas",
        price: "$4,020 NZD",
        image: "Images/PreBuilds/PC8.png",
        desc: "Master Gaming",
        specs: ["DDR5 64GB RAM", "1TB SSD", "Water Cooling"]
      },
      {
        key: "PC9",
        type: "high",
        name: "Aether X Core: Valkyrie",
        price: "$4,599 NZD",
        image: "Images/PreBuilds/PC9.png",
        desc: "Master Gaming",
        specs: ["DDR5 64GB RAM", "2TB SSD", "Water Cooling"]
      },
      {
        key: "PC10",
        type: "x",
        name: "Aether X Core: Phoenix",
        price: "$8,962 NZD",
        image: "Images/PreBuilds/PC10.png",
        desc: "eXtreme Gaming",
        specs: ["DDR6 128GB RAM", "4TB SSD", "Water Cooling"]
      },    
  ];
  const productDatabase = {
  
  /* =========================
     GPU (REFINED SCALING)
  ========================= */
  
  gpu3100: {
    category: "gpu",
    name: "Aether X 3100 Founders Edition",
    price: "$249 NZD",
    img: "images/PCPARTS/gpu1.png",
    desc: "Entry-level 1080p gaming GPU",
    features: ["8GB GDDR6", "128-bit", "RT Support"],
    specs: {
      VRAM: "8GB GDDR6",
      Bus: "128-bit",
      Boost: "2150 MHz",
      TDP: "135W"
    },
    performance: {
      type: "gpu",
      labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
      tiers: {
        "1080p": [110, 75, 40, 95, 170],
        "1440p": [85, 60, 32, 70, 140],
        "4k":    [55, 35, 20, 45, 90],
        "8k":    [30, 18, 10, 25, 55]
      }
    }
  },
  
  gpu3200: {
    category: "gpu",
    name: "Aether X 3200",
    price: "$399 NZD",
    img: "images/PCPARTS/gpu2.png",
    desc: "Balanced 1080p / 1440p GPU",
    features: ["12GB GDDR6X", "192-bit"],
    specs: {
      VRAM: "12GB GDDR6X",
      Bus: "192-bit",
      Boost: "2350 MHz",
      TDP: "190W"
    },
    performance: {
      type: "gpu",
      labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
      data: [170, 120, 70, 145, 260]
    }
  },
  
  gpu3300: {
    category: "gpu",
    name: "Aether X 3300",
    price: "$599 NZD",
    img: "images/PCPARTS/gpu3.png",
    desc: "High-performance 1440p GPU",
    features: ["16GB GDDR6X", "256-bit"],
    specs: {
      VRAM: "16GB GDDR6X",
      Bus: "256-bit",
      Boost: "2450 MHz",
      TDP: "275W"
    },
    performance: {
      type: "gpu",
      labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
      data: [230, 170, 110, 210, 360]
    }
  },
  
  gpu3400: {
    category: "gpu",
    name: "Aether X 3400",
    price: "$999 NZD",
    img: "images/PCPARTS/gpu4.png",
    desc: "4K gaming GPU",
    features: ["20GB GDDR7", "320-bit"],
    specs: {
      VRAM: "20GB GDDR7",
      Bus: "320-bit",
      Boost: "2550 MHz",
      TDP: "360W"
    },
    performance: {
      type: "gpu",
      labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
      data: [320, 250, 180, 280, 450]
    }
  },
  
  gpu3500: {
    category: "gpu",
    name: "Aether X 3500",
    price: "$1799 NZD",
    img: "images/PCPARTS/gpu5.png",
    desc: "Flagship 8K GPU",
    features: ["32GB GDDR7", "512-bit"],
    specs: {
      VRAM: "32GB GDDR7",
      Bus: "512-bit",
      Boost: "2650 MHz",
      TDP: "500W+"
    },
    performance: {
      type: "gpu",
      labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
      data: [420, 340, 270, 360, 550]
    }
  },
  
  /* =========================
     CPU
  ========================= */
  
  cpu5100: {
    category: "cpu",
    name: "Aether Core C5100",
    price: "$499 NZD",
    img: "images/PCPARTS/cpu1.png",
    desc: "Entry gaming CPU",
    features: ["8C/16T", "5.0GHz"],
    specs: { cores: "8 / 16", boost: "5.0GHz" },
    performance: {
      type: "cpu",
      labels: ["Single", "Multi", "Gaming", "Render", "Stream"],
      data: [72, 66, 76, 62, 70]
    }
  },
  
  cpu5300: {
    category: "cpu",
    name: "Aether Core C5300",
    price: "$699 NZD",
    img: "images/PCPARTS/cpu2.png",
    desc: "Mid-range CPU",
    features: ["12C/24T", "5.5GHz"],
    specs: { cores: "12 / 24", boost: "5.5GHz" },
    performance: {
      type: "cpu",
      labels: ["Single", "Multi", "Gaming", "Render", "Stream"],
      data: [82, 79, 86, 77, 81]
    }
  },
  
  cpu5600: {
    category: "cpu",
    name: "Aether Core C5600",
    price: "$899 NZD",
    img: "images/PCPARTS/cpu3.png",
    desc: "High-end CPU",
    features: ["16C/32T", "6.0GHz"],
    specs: { cores: "16 / 32", boost: "6.0GHz" },
    performance: {
      type: "cpu",
      labels: ["Single", "Multi", "Gaming", "Render", "Stream"],
      data: [90, 88, 92, 86, 88]
    }
  },
  
  cpu5900: {
    category: "cpu",
    name: "Aether Core C5900",
    price: "$1099 NZD",
    img: "images/PCPARTS/cpu4.png",
    desc: "Extreme CPU",
    features: ["20C/40T", "6.0GHz"],
    specs: { cores: "20 / 40", boost: "6.0GHz" },
    performance: {
      type: "cpu",
      labels: ["Single", "Multi", "Gaming", "Render", "Stream"],
      data: [94, 93, 96, 91, 92]
    }
  },
  
  cpu6200: {
    category: "cpu",
    name: "Aether Core C6200",
    price: "$1299 NZD",
    img: "images/PCPARTS/cpu5.png",
    desc: "Flagship CPU",
    features: ["24C/48T", "6.2GHz"],
    specs: { cores: "24 / 48", boost: "6.2GHz" },
    performance: {
      type: "cpu",
      labels: ["Single", "Multi", "Gaming", "Render", "Stream"],
      data: [98, 99, 99, 96, 97]
    }
  },
  
  /* =========================
     RAM
  ========================= */
  
  ram510: {
    category: "ram",
    name: "Aether X510 16GB",
    price: "$69 NZD",
    img: "images/PCPARTS/ram1.png",
    desc: "Entry DDR5",
    features: ["16GB", "5600 MT/s"],
    specs: { speed: "5600 MT/s", capacity: "16GB" },
    performance: {
      type: "ram",
      labels: ["Bandwidth", "Latency", "Gaming", "Multitask", "Stability"],
      data: [72, 76, 74, 79, 81]
    }
  },
  
  ram530: {
    category: "ram",
    name: "Aether X530 32GB",
    price: "$139 NZD",
    img: "images/PCPARTS/ram2.png",
    desc: "Balanced DDR5",
    features: ["32GB", "6400 MT/s"],
    specs: { speed: "6400 MT/s", capacity: "32GB" },
    performance: {
      type: "ram",
      labels: ["Bandwidth", "Latency", "Gaming", "Multitask", "Stability"],
      data: [83, 81, 86, 89, 91]
    }
  },
  
  ram560: {
    category: "ram",
    name: "Aether X560 32GB",
    price: "$199 NZD",
    img: "images/PCPARTS/ram3.png",
    desc: "High-speed RAM",
    features: ["32GB", "7200 MT/s"],
    specs: { speed: "7200 MT/s", capacity: "32GB" },
    performance: {
      type: "ram",
      labels: ["Bandwidth", "Latency", "Gaming", "Multitask", "Stability"],
      data: [89, 85, 91, 93, 94]
    }
  },
  
  ram590: {
    category: "ram",
    name: "Aether X590 64GB",
    price: "$349 NZD",
    img: "images/PCPARTS/ram4.png",
    desc: "Heavy multitasking",
    features: ["64GB", "8000 MT/s"],
    specs: { speed: "8000 MT/s", capacity: "64GB" },
    performance: {
      type: "ram",
      labels: ["Bandwidth", "Latency", "Gaming", "Multitask", "Stability"],
      data: [93, 90, 95, 97, 98]
    }
  },
  
  ram600: {
    category: "ram",
    name: "Aether X600 128GB",
    price: "$899 NZD",
    img: "images/PCPARTS/ram5.png",
    desc: "Extreme DDR6",
    features: ["128GB", "DDR6"],
    specs: { speed: "DDR6", capacity: "128GB" },
    performance: {
      type: "ram",
      labels: ["Bandwidth", "Latency", "Gaming", "Multitask", "Stability"],
      data: [99, 96, 99, 99, 99]
    }
  },
  
  /* =========================
     SSD
  ========================= */
  
  m2510: {
    category: "ssd",
    name: "NVX 510 500GB",
    price: "$59 NZD",
    img: "images/PCPARTS/m2_1.png",
    desc: "Entry SSD",
    features: ["5,000 MB/s"],
    specs: { read: "5000 MB/s", write: "4000 MB/s" },
    performance: { type: "ssd", labels: ["Boot", "Load", "Transfer", "IOPS", "Cache"], data: [72, 74, 76, 70, 75] }
  },
  
  m2530: {
    category: "ssd",
    name: "NVX 530 1TB",
    price: "$109 NZD",
    img: "images/PCPARTS/m2_2.png",
    desc: "Balanced SSD",
    features: ["7,200 MB/s"],
    specs: { read: "7200 MB/s", write: "6000 MB/s" },
    performance: { type: "ssd", labels: ["Boot", "Load", "Transfer", "IOPS", "Cache"], data: [82, 84, 86, 80, 85] }
  },
  
  m2560: {
    category: "ssd",
    name: "NVX 560 1TB",
    price: "$199 NZD",
    img: "images/PCPARTS/m2_3.png",
    desc: "High-speed SSD",
    features: ["12,000 MB/s"],
    specs: { read: "12000 MB/s", write: "10000 MB/s" },
    performance: { type: "ssd", labels: ["Boot", "Load", "Transfer", "IOPS", "Cache"], data: [88, 90, 92, 86, 91] }
  },
  
  m2590: {
    category: "ssd",
    name: "NVX 590 2TB",
    price: "$299 NZD",
    img: "images/PCPARTS/m2_4.png",
    desc: "High capacity SSD",
    features: ["18,000 MB/s"],
    specs: { read: "18000 MB/s", write: "15000 MB/s" },
    performance: { type: "ssd", labels: ["Boot", "Load", "Transfer", "IOPS", "Cache"], data: [92, 94, 95, 90, 93] }
  },
  
  m2620: {
    category: "ssd",
    name: "NVX 620 4TB",
    price: "$799 NZD",
    img: "images/PCPARTS/m2_5.png",
    desc: "Flagship SSD",
    features: ["30,000 MB/s"],
    specs: { read: "30000 MB/s", write: "26000 MB/s" },
    performance: { type: "ssd", labels: ["Boot", "Load", "Transfer", "IOPS", "Cache"], data: [96, 98, 97, 95, 99] }
  },
  
  /* =========================
     MOBO (FIXED)
  ========================= */
  
  mobo510: {
    category: "mobo",
    name: "AMX-B510",
    price: "$129 NZD",
    img: "images/PCPARTS/mobo1.png",
    desc: "Entry motherboard",
    features: ["DDR5", "PCIe 5.0"],
    specs: { chipset: "B510", ram: "DDR5", pcie: "Gen5" },
    performance: {
      type: "mobo",
      labels: ["Stability", "VRM", "Upgrade", "IO", "Durability"],
      data: [75, 70, 72, 74, 78]
    }
  },
  
  mobo530: {
    category: "mobo",
    name: "AMX-M530",
    price: "$199 NZD",
    img: "images/PCPARTS/mobo2.png",
    desc: "Mid-tier board",
    features: ["DDR5", "PCIe 5.0"],
    specs: { chipset: "M530", ram: "DDR5", pcie: "Gen5" },
    performance: {
      type: "mobo",
      labels: ["Stability", "VRM", "Upgrade", "IO", "Durability"],
      data: [82, 78, 80, 83, 85]
    }
  },
  
  mobo560: {
    category: "mobo",
    name: "AMX-H560",
    price: "$299 NZD",
    img: "images/PCPARTS/mobo3.png",
    desc: "High-end board",
    features: ["DDR5", "PCIe 5.0"],
    specs: { chipset: "H560", ram: "DDR5", pcie: "Gen5" },
    performance: {
      type: "mobo",
      labels: ["Stability", "VRM", "Upgrade", "IO", "Durability"],
      data: [88, 86, 87, 89, 90]
    }
  },
  
  mobo590: {
    category: "mobo",
    name: "AMX-X590",
    price: "$449 NZD",
    img: "images/PCPARTS/mobo4.png",
    desc: "Extreme board",
    features: ["DDR5", "Dual GPU"],
    specs: { chipset: "X590", ram: "DDR5", pcie: "Gen5 x2" },
    performance: {
      type: "mobo",
      labels: ["Stability", "VRM", "Upgrade", "IO", "Durability"],
      data: [93, 92, 95, 94, 95]
    }
  },
  
  mobo620: {
    category: "mobo",
    name: "AMX-Z620",
    price: "$799 NZD",
    img: "images/PCPARTS/mobo5.png",
    desc: "Flagship board",
    features: ["DDR6 Ready", "Extreme VRM"],
    specs: { chipset: "Z620", ram: "DDR6", pcie: "Gen6" },
    performance: {
      type: "mobo",
      labels: ["Stability", "VRM", "Upgrade", "IO", "Durability"],
      data: [98, 97, 99, 98, 99]
    }
  },
  
  /* =========================
     COOLERS (FIXED CLEAN SPLIT)
  ========================= */
  
  air510: {
    category: "cooler",
    name: "Aether Therm X510",
    price: "$39 NZD",
    img: "images/PCPARTS/cooler1.png",
    desc: "Entry air cooling",
    features: ["5 Heatpipes", "120mm Fan"],
    specs: { type: "Air", heatpipes: 5, tdp: "170W" },
    performance: { type: "cooling", labels: ["Heat Dissipation", "Noise", "Efficiency", "Durability", "Airflow"], data: [75, 80, 78, 82, 77] }
  },
  
  air520: {
    category: "cooler",
    name: "Aether Therm X510",
    price: "$39 NZD",
    img: "images/PCPARTS/cooler1.png",
    desc: "Entry air cooling solution",
    features: ["5 Heatpipes", "120mm Fan"],
    specs: { type: "Air", heatpipes: 5, tdp: "170W" },
    performance: {
      type: "cooling",
      labels: ["Heat Dissipation", "Noise", "Efficiency", "Durability", "Airflow"],
      data: [74, 81, 77, 82, 76]
    }
  },
  
  air530: {
    category: "cooler",
    name: "Aether Therm X530",
    price: "$69 NZD",
    img: "images/PCPARTS/cooler9.png",
    desc: "High airflow cooler",
    features: ["6 Heatpipes", "Dual Fan"],
    specs: { type: "Air", heatpipes: 6, tdp: "220W" },
    performance: { type: "cooling", labels: ["Heat Dissipation", "Noise", "Efficiency", "Durability", "Airflow"], data: [82, 78, 85, 86, 84] }
  },
  
  air550: {
    category: "cooler",
    name: "Aether Therm X550",
    price: "$89 NZD",
    img: "images/PCPARTS/cooler10.png",
    desc: "Dual tower cooling",
    features: ["7 Heatpipes", "Dual Tower"],
    specs: { type: "Air", heatpipes: 7, tdp: "260W" },
    performance: { type: "cooling", labels: ["Heat Dissipation", "Noise", "Efficiency", "Durability", "Airflow"], data: [88, 82, 88, 90, 87] }
  },
  
  air580: {
    category: "cooler",
    name: "Aether Therm X580",
    price: "$129 NZD",
    img: "images/PCPARTS/cooler11.png",
    desc: "Extreme air cooling",
    features: ["9 Heatpipes", "Triple Tower"],
    specs: { type: "Air", heatpipes: 9, tdp: "320W" },
    performance: { type: "cooling", labels: ["Heat Dissipation", "Noise", "Efficiency", "Durability", "Airflow"], data: [92, 85, 93, 94, 91] }
  },
  
  aio540: {
    category: "cooler",
    name: "Aether Therm AIO 540",
    price: "$89 NZD",
    img: "images/PCPARTS/cooler6.png",
    desc: "120mm liquid cooler",
    features: ["120mm Radiator", "1 Fan"],
    specs: { type: "AIO", radiator: "120mm", tdp: "180W" },
    performance: { type: "cooling", labels: ["Heat Dissipation", "Noise", "Efficiency", "Durability", "Pump Quality"], data: [80, 85, 82, 88, 83] }
  },
  
  aio560: {
    category: "cooler",
    name: "Aether Therm AIO 560",
    price: "$129 NZD",
    img: "images/PCPARTS/cooler3.png",
    desc: "240mm liquid cooler",
    features: ["240mm Radiator", "2 Fans"],
    specs: { type: "AIO", radiator: "240mm", tdp: "300W" },
    performance: { type: "cooling", labels: ["Heat Dissipation", "Noise", "Efficiency", "Durability", "Pump Quality"], data: [88, 86, 89, 90, 88] }
  },
  
  aio590: {
    category: "cooler",
    name: "Aether Therm AIO 590",
    price: "$199 NZD",
    img: "images/PCPARTS/cooler4.png",
    desc: "360mm performance AIO",
    features: ["360mm Radiator", "3 Fans"],
    specs: { type: "AIO", radiator: "360mm", tdp: "400W" },
    performance: { type: "cooling", labels: ["Heat Dissipation", "Noise", "Efficiency", "Durability", "Pump Quality"], data: [93, 88, 94, 95, 92] }
  },
  
  aio600: {
    category: "cooler",
    name: "Aether Therm AIO 620",
    price: "$349 NZD",
    img: "images/PCPARTS/cooler5.png",
    desc: "Flagship 420mm liquid cooling system",
    features: ["420mm Radiator", "3x 140mm Fans", "RGB Pump Block"],
    specs: {
      type: "AIO",
      radiator: "420mm",
      fans: "3x 140mm",
      tdp: "600W+"
    },
    performance: {
      type: "cooling",
      labels: ["Heat Dissipation", "Noise", "Efficiency", "Durability", "Pump Quality"],
      data: [96, 89, 97, 96, 98]
    }
  },
  
  aio620: {
    category: "cooler",
    name: "Aether Therm AIO 620",
    price: "$349 NZD",
    img: "images/PCPARTS/cooler5.png",
    desc: "Flagship 420mm AIO",
    features: ["420mm Radiator", "3x 140mm Fans"],
    specs: { type: "AIO", radiator: "420mm", tdp: "600W+" },
    performance: { type: "cooling", labels: ["Heat Dissipation", "Noise", "Efficiency", "Durability", "Pump Quality"], data: [97, 90, 98, 97, 96]

      }
    },

    /* =========================
   CONSOLES (Details)
  ========================= */

    con224: {
    category: "con",
    name: "HyperGrid S",
    price: "$399 NZD",
    img: "images/Consoles/Console4.png",
    desc: "Entry-end Console",
    features: ["Instant play streaming", "128-bit",],
    specs: {
      CPU: "GridLink Custom",
      GPU: "GridLink Integrated GPU",
      Storage: "512GB + cloud expansion",
      Ram: "12GB"
    },
    performance: {
      type: "con",
      labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
      tiers: {
        "1080p": [110, 75, 40, 95, 170],
        "1440p": [85, 60, 32, 70, 140],
        "4k":    [55, 35, 20, 45, 90],
        "8k":    [30, 18, 10, 25, 55]
      }
    }
  },
  
  con225: { 
    category: "con", 
    name: "Zenith Prime", 
    price: "$449 NZD", 
    img: "images/Consoles/Console3.png", 
    desc: "Mid-end Console", 
    features: ["Silent cooling", "Energy efficient",], 
    specs: { 
      CPU: "Zenith Core 12", 
      GPU: "Prime GPU", 
      Storage: "1TB", 
      RAM: "16GB" }, 
      performance: { 
        type: "con", 
        labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"], 
        tiers: { 
          "1080p": [110, 75, 40, 95, 170], 
          "1440p": [85, 60, 32, 70, 140], 
          "4k": [55, 35, 20, 45, 90], 
          "8k": [30, 18, 10, 25, 55]
         
        } 
      } 
    },
  
    con226: { 
      category: "con", 
      name: "Phantom Vortex", 
      price: "$799 NZD", 
      img: "images/Consoles/Console1.png", 
      desc: "High-end Console", 
      features: ["AI Frame Generation", "Adaptive Performance Scaling",], 
      specs: { 
        CPU: "Vortex ZenChip", 
        GPU: "Phantom RTX Core", 
        Storage: "1TB SSD", 
        RAM: "24GB" }, 
        performance: { 
          type: "con", 
          labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"], 
          tiers: { 
            "1080p": [110, 75, 40, 95, 170], 
            "1440p": [85, 60, 32, 70, 140], 
            "4k": [55, 35, 20, 45, 90], 
            "8k": [30, 18, 10, 25, 55]
           
          } 
        } 
      },
  
      con227: { 
        category: "con", 
        name: "TitanCore X9", 
        price: "$1,199 NZD", 
        img: "images/Consoles/Console2.png", 
        desc: "High-end Console", 
        features: ["Silent cooling", "Energy efficient",], 
        specs: { 
          CPU: "16-core Titan CPU", 
          GPU: "60 TFLOP GPU", 
          Storage: "1TB SSD", 
          RAM: "2TB NVMe Gen5" }, 
          performance: { 
            type: "con", 
            labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"], 
            tiers: { 
              "1080p": [110, 75, 40, 95, 170], 
              "1440p": [85, 60, 32, 70, 140], 
              "4k": [55, 35, 20, 45, 90], 
              "8k": [30, 18, 10, 25, 55]
             
            } 
          } 
        },
  
        /* =========================
           CONTROLLERS (Details)
        ========================= */
  
        ctrl557: {
          category: "ctrl",
          name: "NovaPulse X7",
          price: "$119 NZD",
          img: "images/Controllers/Controller4.png",
          desc: "Low-Level Controller",
          features: ["Drift-proof stick technology", "Motion gyro aiming",],
          specs: {
            ControllerCPU: "6-Core ARM Cortex-X2 @ 2.8GHz",
            InputCoProcessor: "Reflex Neural Engine Gen 2",
            GraphicsProcessor: "PulseRender GX Lit",
            MainProcessor: "NX-4 QuantumCore"
          },
          performance: {
            type: "ctrl",
            labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
            tiers: {
              "1080p": [110, 75, 40, 95, 170],
              "1440p": [85, 60, 32, 70, 140],
              "4k":    [55, 35, 20, 45, 90],
              "8k":    [30, 18, 10, 25, 55]
            }
          }
        },
  
        ctrl558: {
          category: "ctrl",
          name: "PhantomCore VX",
          price: "$119 NZD",
          img: "images/Controllers/Controller2.png",
          desc: "Mid-Level Controller",
          features: ["Drift-proof stick technology", "Motion gyro aiming",],
          specs: {
            ControllerCPU: "12-Core Hybrid Architecture",
            InputCoProcessor: "PhantomVision",
            GraphicsProcessor: "DSP Engine",
            MainProcessor: "ShadowCore Z1"
          },
          performance: {
            type: "ctrl",
            labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
            tiers: {
              "1080p": [110, 75, 40, 95, 170],
              "1440p": [85, 60, 32, 70, 140],
              "4k":    [55, 35, 20, 45, 90],
              "8k":    [30, 18, 10, 25, 55]
            }
          }
        },
  
        ctrl559: {
          category: "ctrl",
          name: "TitanGrid S Elite",
          price: "$189 NZD",
          img: "images/Controllers/Controller3.png",
          desc: "High-Level Controller",
          features: ["Drift-proof stick technology", "Motion gyro aiming",],
          specs: {
            ControllerCPU: "12-Core Hybrid Architecture",
            InputCoProcessor: "10-Core Precision @ 4.1GHz",
            GraphicsProcessor: "GridForce XT Integrated",
            MainProcessor: "TitanForge X Ultra"
          },
          performance: {
            type: "ctrl",
            labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
            tiers: {
              "1080p": [110, 75, 40, 95, 170],
              "1440p": [85, 60, 32, 70, 140],
              "4k":    [55, 35, 20, 45, 90],
              "8k":    [30, 18, 10, 25, 55]
            }
          }
        },
  
        ctrl560: {
          category: "ctrl",
          name: "Vortex Edge X",
          price: "$249 NZD",
          img: "images/Controllers/Controller1.png",
          desc: "High-Level Controller",
          features: ["Drift-proof stick technology", "Motion gyro aiming",],
          specs: {
            ControllerCPU: "20-Core Hybrid @ 5.8GHz",
            InputCoProcessor: "HyperPredict Reflex Engine",
            GraphicsProcessor: "VX Titan",
            MainProcessor: "Vortex Infinity X Processor"
          },
          performance: {
            type: "ctrl",
            labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
            tiers: {
              "1080p": [110, 75, 40, 95, 170],
              "1440p": [85, 60, 32, 70, 140],
              "4k":    [55, 35, 20, 45, 90],
              "8k":    [30, 18, 10, 25, 55]
            }
          }
        },

        PC1: {
          category: "low",
          name: "Aether X Core: Sentry",
          price: "$856 NZD",
          img: "Images/PreBuilds/PC1.png",
          desc: "Entry-level 1080p gaming PC",
          features: ["16GB DDR4", "500GB SSD", "Water Cooling"],
          specs: {
            RAM: "16GB DDR4",
            Storage: "500GB SSD",
            Cooling: "Water Cooling",
          },
          performance: {
            type: "PreBuild",
            labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
            tiers: {
              "1080p": [110, 75, 40, 95, 170],
              "1440p": [85, 60, 32, 70, 140],
              "4k":    [55, 35, 20, 45, 90],
              "8k":    [30, 18, 10, 25, 55]
            }
          }
        },
        PC2: {
          category: "low",
          name: "Aether X Core: Vortex",
          price: "$982 NZD",
          img: "Images/PreBuilds/PC2.png",
          desc: "Entry-level 1080p gaming PC",
          features: ["16GB DDR4", "500GB SSD", "Water Cooling"],
          specs: {
            RAM: "16GB DDR4",
            Storage: "500GB SSD",
            Cooling: "Water Cooling",
          },
          performance: {
            type: "PreBuild",
            labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
            tiers: {
              "1080p": [110, 75, 40, 95, 170],
              "1440p": [85, 60, 32, 70, 140],
              "4k":    [55, 35, 20, 45, 90],
              "8k":    [30, 18, 10, 25, 55]
            }
          }
        },
        PC3: {
          category: "low",
          name: "Aether X Core: Chimera",
          price: "$1,030 NZD",
          img: "Images/PreBuilds/PC3.png",
          desc: "Entry-level 1080p gaming PC",
          features: ["16GB DDR4", "500GB SSD", "Water Cooling"],
          specs: {
            RAM: "16GB DDR4",
            Storage: "500GB SSD",
            Cooling: "Water Cooling",
          },
          performance: {
            type: "PreBuild",
            labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
            tiers: {
              "1080p": [110, 75, 40, 95, 170],
              "1440p": [85, 60, 32, 70, 140],
              "4k":    [55, 35, 20, 45, 90],
              "8k":    [30, 18, 10, 25, 55]
            }
          }
        },
        PC4: {
          category: "mid",
          name: "Aether X Core: Olympus",
          price: "$1,560 NZD",
          img: "Images/PreBuilds/PC4.png",
          desc: "Intermediate-level 4K gaming PC",
          features: ["32GB DDR5", "1TB SSD", "Water Cooling"],
          specs: {
            RAM: "32GB DDR5",
            Storage: "1TB SSD",
            Cooling: "Water Cooling",
          },
          performance: {
            type: "PreBuild",
            labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
            tiers: {
              "1080p": [110, 75, 40, 95, 170],
              "1440p": [85, 60, 32, 70, 140],
              "4k":    [55, 35, 20, 45, 90],
              "8k":    [30, 18, 10, 25, 55]
            }
          }
        },
        PC5: {
          category: "mid",
          name: "Aether X Core: Valhalla",
          price: "$2,960 NZD",
          img: "Images/PreBuilds/PC5.png",
          desc: "Intermediate-level 4K gaming PC",
          features: ["32GB DDR5", "1TB SSD", "Water Cooling"],
          specs: {
            RAM: "32GB DDR5",
            Storage: "1TB SSD",
            Cooling: "Water Cooling",
          },
          performance: {
            type: "PreBuild",
            labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
            tiers: {
              "1080p": [110, 75, 40, 95, 170],
              "1440p": [85, 60, 32, 70, 140],
              "4k":    [55, 35, 20, 45, 90],
              "8k":    [30, 18, 10, 25, 55]
            }
          }
        },
        PC6: {
          category: "mid",
          name: "Aether X Core: Excalibur",
          price: "$3,490 NZD",
          img: "Images/PreBuilds/PC6.png",
          desc: "Intermediate-level 4K gaming PC",
          features: ["32GB DDR5", "1TB SSD", "Water Cooling"],
          specs: {
            RAM: "32GB DDR5",
            Storage: "1TB SSD",
            Cooling: "Water Cooling",
          },
          performance: {
            type: "PreBuild",
            labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
            tiers: {
              "1080p": [110, 75, 40, 95, 170],
              "1440p": [85, 60, 32, 70, 140],
              "4k":    [55, 35, 20, 45, 90],
              "8k":    [30, 18, 10, 25, 55]
            }
          }
        },
        PC7: {
          category: "high",
          name: "Aether X Core: Leviathan",
          price: "$3,989 NZD",
          img: "Images/PreBuilds/PC7.png",
          desc: "Master-level 8K gaming PC",
          features: ["64GB DDR5", "1TB SSD", "Water Cooling"],
          specs: {
            RAM: "64GB DDR5",
            Storage: "1TB SSD",
            Cooling: "Water Cooling",
          },
          performance: {
            type: "PreBuild",
            labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
            tiers: {
              "1080p": [110, 75, 40, 95, 170],
              "1440p": [85, 60, 32, 70, 140],
              "4k":    [55, 35, 20, 45, 90],
              "8k":    [30, 18, 10, 25, 55]
            }
          }
        },
        PC8: {
          category: "mid",
          name: "Aether X Core: Atlas",
          price: "$4,020 NZD",
          img: "Images/PreBuilds/PC8.png",
          desc: "Master-level 8K gaming PC",
          features: ["64GB DDR5", "1TB SSD", "Water Cooling"],
          specs: {
            RAM: "64GB DDR5",
            Storage: "1TB SSD",
            Cooling: "Water Cooling",
          },
          performance: {
            type: "PreBuild",
            labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
            tiers: {
              "1080p": [110, 75, 40, 95, 170],
              "1440p": [85, 60, 32, 70, 140],
              "4k":    [55, 35, 20, 45, 90],
              "8k":    [30, 18, 10, 25, 55]
            }
          }
        },
        PC9: {
          category: "high",
          name: "Aether X Core: Valkyrie",
          price: "$4,599 NZD",
          img: "Images/PreBuilds/PC9.png",
          desc: "Master-level 8K gaming PC",
          features: ["64GB DDR5", "2TB SSD", "Water Cooling"],
          specs: {
            RAM: "64GB DDR5",
            Storage: "2TB SSD",
            Cooling: "Water Cooling",
          },
          performance: {
            type: "PreBuild",
            labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
            tiers: {
              "1080p": [110, 75, 40, 95, 170],
              "1440p": [85, 60, 32, 70, 140],
              "4k":    [55, 35, 20, 45, 90],
              "8k":    [30, 18, 10, 25, 55]
            }
          }
        },
        PC10: {
          category: "x",
          name: "Aether X Core: Phoenix",
          price: "$8,962 NZD",
          img: "Images/PreBuilds/PC10.png",
          desc: "eXtreme-level 16K gaming PC",
          features: ["128GB DDR5", "4TB SSD", "Water Cooling"],
          specs: {
            RAM: "128GB DDR5",
            Storage: "4TB SSD",
            Cooling: "Water Cooling",
          },
          performance: {
            type: "PreBuild",
            labels: ["Fortnite", "Warzone", "Cyberpunk", "GTA V", "Valorant"],
            tiers: {
              "1080p": [1100, 750, 400, 950, 1700],
              "1440p": [850, 600, 320, 700, 1400],
              "4k":    [550, 350, 200, 450, 900],
              "8k":    [300, 180, 100, 250, 550]
            }
          }
        },
  };
