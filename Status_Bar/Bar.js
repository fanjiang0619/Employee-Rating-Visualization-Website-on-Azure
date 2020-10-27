var appleData = {
    labels: [
        "Overall",
        "Work-Balance",
        "Culture",
        "Career-Opportunities",
        "Benefit",
        "Senior-Mangemnet",
    ],
    datasets: [
      {
        label: "Current Employee",
        backgroundColor: "pink",
        borderColor: "red",
        borderWidth: 2,
        data: [4.063031161, 3.417669972, 4.205205382, 3.538243626, 4.132259207, 3.583746459]
      },
      {
        label: "Former Employee",
        backgroundColor: "lightblue",
        borderColor: "blue",
        borderWidth: 2,
        data: [3.831050228, 3.240269624, 3.966079583, 3.273320287, 3.968906284,3.27897369]
      }
    ]
  };

var amazonData = {
  labels: [
      "Overall",
      "Work-Balance",
      "Culture",
      "Career-Opportunities",
      "Benefit",
      "Senior-Mangemnet",
  ],
  datasets: [
    {
      label: "Current Employee",
      backgroundColor: "pink",
      borderColor: "red",
      borderWidth: 2,
      data: [3.821635068,	3.184079602,	3.746739277,	3.821635068,	3.808524943,	3.382882883]
    },
    {
      label: "Former Employee",
      backgroundColor: "lightblue",
      borderColor: "blue",
      borderWidth: 2,
      data: [3.159633537,	2.653248195,	3.089255969,	3.207245974,	3.508883953,	2.735841199]
    }
  ]
};

var facebookData = {
labels: [
    "Overall",
    "Work-Balance",
    "Culture",
    "Career-Opportunities",
    "Benefit",
    "Senior-Mangemnet",
],
datasets: [
  {
    label: "Current Employee",
    backgroundColor: "pink",
    borderColor: "red",
    borderWidth: 2,
    data: [4.672145329,	4.031141869,	4.667820069,	4.499134948,	4.607266436,	4.428200692]
  },
  {
    label: "Former Employee",
    backgroundColor: "lightblue",
    borderColor: "blue",
    borderWidth: 2,
    data: [3.886524823,	3.386524823,	3.890070922,	3.815602837,	4.432624113,	3.574468085]
  }
]
};

var googleData = {
labels: [
    "Overall",
    "Work-Balance",
    "Culture",
    "Career-Opportunities",
    "Benefit",
    "Senior-Mangemnet",
],
datasets: [
  {
    label: "Current Employee",
    backgroundColor: "pink",
    borderColor: "red",
    borderWidth: 2,
    data: [4.461924439,	4.049586777,	4.424734357,	4.097402597,	4.439492326,	3.930342385]
  },
  {
    label: "Former Employee",
    backgroundColor: "lightblue",
    borderColor: "blue",
    borderWidth: 2,
    data: [4.250902527,	3.934566787,	4.259025271,	3.928700361,	4.409296029,	3.782490975]
  }
]
};


var microsoftData = {
labels: [
    "Overall",
    "Work-Balance",
    "Culture",
    "Career-Opportunities",
    "Benefit",
    "Senior-Mangemnet",
],
datasets: [
  {
    label: "Current Employee",
    backgroundColor: "pink",
    borderColor: "red",
    borderWidth: 2,
    data: [3.981643569,	3.705932409,	3.791271578,	3.790420618,	4.020544615,	3.317043521]
  },
  {
    label: "Former Employee",
    backgroundColor: "lightblue",
    borderColor: "blue",
    borderWidth: 2,
    data: [3.664848012,	3.365354638,	3.442712393,	3.581644583,	4.033320343,	2.974473889]
  }
]
};

var netflixData = {
labels: [
    "Overall",
    "Work-Balance",
    "Culture",
    "Career-Opportunities",
    "Benefit",
    "Senior-Mangemnet",
],
datasets: [
  {
    label: "Current Employee",
    backgroundColor: "pink",
    borderColor: "red",
    borderWidth: 2,
    data: [4.008403361,	3.579831933,	4.037815126, 3.533613445,	4.533613445,	3.743697479]
  },
  {
    label: "Former Employee",
    backgroundColor: "lightblue",
    borderColor: "blue",
    borderWidth: 2,
    data: [3.019607843,	2.874509804,	3.035294118,	2.811764706,	4.003921569,	2.68627451]
  }
]
};

  document.companyData = {
    "Google": googleData,
    "Amazon": amazonData,
    "Facebook": facebookData,
    "Netflix": netflixData,
    "Apple": appleData,
    "Microsoft": microsoftData,
  }
  
  document.chartOptions = {
    responsive: true,
    legend: {
      position: "top"
    },
    title: {
      display: true,
      fontSize: 30, 
      fontColor: "black", 
      text: "Employee Review Rating from 2012 - 2018"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          steps: 10,
          stepValue: 0.5,
          max: 5
        }
      }]
    }
  }
  
  window.onload = function() {
    var ctx = document.getElementById("canvas");
    window.myBar = new Chart(ctx, {
      type: "bar",
      // data: googleData,
      options: document.chartOptions
    });
  };
  