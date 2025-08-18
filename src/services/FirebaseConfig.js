import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB8DEiVftUUfWLq23l0bgVkaMmxT9oihnQ",
  authDomain: "my-portfolio-c43f4.firebaseapp.com",
  databaseURL: "https://my-portfolio-c43f4-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-c43f4",
  storageBucket: "my-portfolio-c43f4.firebasestorage.app",
  messagingSenderId: "604123115974",
  appId: "1:604123115974:web:c567af67386e459971c2c7"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);