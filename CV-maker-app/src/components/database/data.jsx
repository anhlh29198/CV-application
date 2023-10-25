import { v4 as uuidv4 } from 'uuid';

export const personalInputData = [
  { title: 'First Name', value: 'John', type: 'text', id: 0 },
  { title: 'Last Name', value: 'Doe', type: 'text', id: 1 },
  { title: 'Email', value: 'john@example.com', type: 'email', id: 2 },
  { title: 'Phone', value: '12345678', type: 'tel', id: 3 },
  { title: 'Address', value: 'Castle in the sky', type: 'text', id: 4 },
];

export const descriptionData = [
  { title: 'Description', value: '', type: '', id: 0 },
];

export const educationData = [
  { title: 'Degree', value: 'Bachelor', type: 'text', id: 0 },
  {
    title: 'School',
    value: 'University of thoughts and prayers',
    type: 'text',
    id: 1,
  },
  { title: 'Start Date', value: '2020-09', type: 'month', id: 2 },
  { title: 'End Date', value: '2023-05', type: 'month', id: 3 },
];

export const workexpData = [
  { title: 'Job Title', value: 'Professional lover', type: 'text', id: 0 },
  { title: 'City/Town', value: 'Dream City', type: 'text', id: 1 },
  { title: 'Employer', value: 'Boss?', type: 'text', id: 2 },
  { title: 'Start Date', value: '2022-10', type: 'month', id: 3 },
  { title: 'End Date', value: '2023-04', type: 'month', id: 4 },
  { title: 'Description', value: '', type: '', id: 5 },
];

export const skillsData = [
  { title: 'Skill', value: 'Fucking around', type: 'text', id: 0 },
  { title: 'Level', value: 'beginner', type: '', id: 1 },
];

export const shits = [
  { id: uuidv4(), title: 'first', value: 'shit' },
  { id: uuidv4(), title: 'second', value: 'balls' },
];

export const shit = [
  {
    id: uuidv4(),
    data: [
      { id: uuidv4(), title: 'first', value: 'shit' },
      { id: uuidv4(), title: 'second', value: 'balls' },
    ],
  },
  {
    id: uuidv4(),
    data: [
      { id: uuidv4(), title: 'first', value: 'shit' },
      { id: uuidv4(), title: 'second', value: 'balls' },
    ],
  },
];
