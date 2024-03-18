import { counseling, mood, ressources, specialists, stress, support, tips } from '../Images/services/images';

export const services = [
    {
      service: 'Counseling and Therapy',
      description: 'Individual counseling, couples therapy, family counseling, and group therapy sessions.',
      image:  counseling,
    },
    {
      service: 'Stress Reduction Programs',
      description: 'Guided meditation sessions, stress management workshops, and mindfulness training for a healthier mind.',
      image: stress
    },
    {
      service: 'Psychoeducation Resources',
      description: 'Articles on various mental health topics, educational videos, and informative podcasts or webinars.',
      image: ressources
    },
    {
      service: '24/7 Crisis Support',
      description: 'Emergency helpline or chat support, providing immediate crisis intervention services.',
      image: support
    },
    {
      service: 'Mental Health Workplace',
      description: 'Employee assistance programs (EAPs), stress management for businesses, and mental health awareness training for employees.',
      image: tips
    },
    {
      service: 'Mood and Mental State Tracking',
      description: 'Track and analyze your mood and mental state over time to identify patterns and areas for improvement.',
      image: mood
    },
    {
      service: 'Specialist Consultations',
      description: 'Access to mental health specialists who can provide personalized guidance and support.',
      image: specialists
    },
  ];
  