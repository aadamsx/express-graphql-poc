const rigs = [
  {
    "rigId": 1,
    "fleetId": 1,
    "title": "Deepwater Thalassa",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 2,
    "fleetId": 1,
    "title": "Deepwater Asgard",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 3,
    "fleetId": 1,
    "title": "Deepwater Conqueror",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 4,
    "fleetId": 1,
    "title": "Deepwater Invictus",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 5,
    "fleetId": 1,
    "title": "Deepwater Nautilus",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 6,
    "fleetId": 1,
    "title": "Development Dirller III",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 7,
    "fleetId": 1,
    "title": "Dhirubhai Deepwater KG1",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 8,
    "fleetId": 1,
    "title": "Discover Clear Leader",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 9,
    "fleetId": 1,
    "title": "GSF Development Driller I",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 10,
    "fleetId": 2,
    "title": "GSF Development Driller II",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 11,
    "fleetId": 2,
    "title": "Henry Goodrich",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 12,
    "fleetId": 2,
    "title": "Petrobars 10000",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 13,
    "fleetId": 2,
    "title": "Transocean 706",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 14,
    "fleetId": 2,
    "title": "Transocean Spitsbergen",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 15,
    "fleetId": 2,
    "title": "Transocean Leader",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 16,
    "fleetId": 2,
    "title": "Songa Delta",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 17,
    "fleetId": 3,
    "title": "GSF Development Driller I",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 18,
    "fleetId": 3,
    "title": "GSF Development Driller II",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 19,
    "fleetId": 4,
    "title": "GSF Development Driller I",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 20,
    "fleetId": 4,
    "title": "GSF Development Driller II",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 21,
    "fleetId": 5,
    "title": "GSF Development Driller I",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 22,
    "fleetId": 5,
    "title": "GSF Development Driller II",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 23,
    "fleetId": 6,
    "title": "GSF Development Driller I",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 24,
    "fleetId": 6,
    "title": "GSF Development Driller II",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 25,
    "fleetId": 7,
    "title": "GSF Development Driller I",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  },
  {
    "rigId": 26,
    "fleetId": 7,
    "title": "GSF Development Driller II",
    "operator": "Shell",
    "manager": "John Doe",
    "status": "Drilling",
    "kpis": [
      {
        "area": "DRILLING",
        "indicator": 2,
        "status": "WARN"
      },
      {
        "area": "BOP",
        "indicator": 3,
        "status": "BAD"
      },
      {
        "area": "DP",
        "indicator": 1,
        "status": "GOOD"
      },
      {
        "area": "POWER",
        "indicator": 1,
        "status": "GOOD"
      }
    ]
  }
]

module.exports = rigs;