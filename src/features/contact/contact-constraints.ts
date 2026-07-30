export const contactFieldLimits = {
  name: {
    min: 2,
    max: 100
  },
  email: {
    max: 254
  },
  subject: {
    min: 2,
    max: 150
  },
  message: {
    min: 10,
    max: 1500
  }
} as const;
