// Arrays of recommendations
const healthTips = [
    'Stay hydrated and drink plenty of water throughout the day.',
    'Eat a balanced diet rich in fruits, vegetables, and lean proteins.',
    'Get regular exercise to improve your cardiovascular health and flexibility.',
    'Prioritize quality sleep for better physical and mental well-being.',
  ];
  
  const exercises = [
    'Take a 20-minute walk in the morning to boost your energy.',
    'Try yoga or tai chi for improved flexibility and relaxation.',
    'Engage in strength training exercises to maintain muscle mass and bone density.',
    'Join a local fitness class or community group for motivation and social interaction.',
  ];
  
  const reminders = [
    'Remember to take your medications as prescribed.',
    'Attend your scheduled doctor’s appointments for routine check-ups.',
    'Stay connected with loved ones for emotional support and companionship.',
    'Engage in hobbies or activities that bring you joy and fulfillment.',
  ];
  
  // Function to display a random health tip
  function displayHealthTip() {
    const randomTip = healthTips[Math.floor(Math.random() * healthTips.length)];
    document.getElementById('health-tip').textContent = randomTip;
  }
  
  // Function to display a random exercise recommendation
  function displayExerciseRecommendation() {
    const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
    document.getElementById('exercise-recommendation').textContent = randomExercise;
  }
  
  // Function to display a random reminder
  function displayReminder() {
    const randomReminder = reminders[Math.floor(Math.random() * reminders.length)];
    document.getElementById('reminder').textContent = randomReminder;
  }
  
  // Display initial recommendations on page load
  displayHealthTip();
  displayExerciseRecommendation();
  displayReminder();
  
  // Change recommendations every 20 seconds
  setInterval(displayHealthTip, 20000); // 20000 milliseconds = 20 seconds
  setInterval(displayExerciseRecommendation, 20000); // 20000 milliseconds = 20 seconds
  setInterval(displayReminder, 20000); // 20000 milliseconds = 20 seconds
  