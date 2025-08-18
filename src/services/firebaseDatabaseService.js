import { ref, get } from 'firebase/database';
import { database } from './FirebaseConfig';

export const fetchExperience = async () => {
  try {
    const experienceRef = ref(database, 'portfolio/experience');
    const snapshot = await get(experienceRef);
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  } catch (error) {
    console.error('Error fetching experience:', error);
    throw error;
  }
};

export const fetchServices = async () => {
  try {
    const servicesRef = ref(database, 'portfolio/services');
    const snapshot = await get(servicesRef);
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

export const fetchProjects = async () => {
  try {
    const projectsRef = ref(database, 'portfolio/projects');
    const snapshot = await get(projectsRef);
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};