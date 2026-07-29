module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start -- -p 3001",
      startServerReadyPattern: "Ready",
      url: [
        "http://localhost:3001/en",
        "http://localhost:3001/en/about",
        "http://localhost:3001/en/projects",
        "http://localhost:3001/en/contact",
        "http://localhost:3001/en/not-found-test"
      ],
      numberOfRuns: 1,
      settings: {
        onlyCategories: [
          "accessibility",
          "best-practices",
          "seo"
        ]
      }
    },
    assert: {
      assertions: {
        "categories:accessibility": [
          "error",
          { minScore: 1 }
        ],
        "categories:best-practices": [
          "warn",
          { minScore: 0.9 }
        ],
        "categories:seo": [
          "warn",
          { minScore: 0.9 }
        ]
      }
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci/reports"
    }
  }
};
