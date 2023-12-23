### Healthy Living Web Application for Sunita Sharma

#### Overview:
The provided code implements a basic web application designed to assist Sunita Sharma, a senior individual aged 65+, in maintaining a healthier lifestyle. The application dynamically displays random health tips, exercise recommendations, and daily reminders, automatically updating the content every 20 seconds. The project utilizes HTML, CSS, and JavaScript to create a user-friendly interface that offers guidance on various aspects of health and well-being.

#### Components:

1. **HTML (index.html)**:
   - Defines the structure of the web page, including sections for displaying health tips, exercise recommendations, and reminders.
   - Incorporates placeholders and IDs (`health-tip`, `exercise-recommendation`, `reminder`) to dynamically update the content using JavaScript.

2. **CSS (styles.css)**:
   - Provides styling rules to enhance the visual presentation of the web application.
   - Defines styles for containers (`tip-container`, `exercise-container`, `reminder-container`) and buttons, ensuring consistent layout and design across different sections.

3. **JavaScript (script.js)**:
   - Implements functions (`displayHealthTip()`, `displayExerciseRecommendation()`, `displayReminder()`) to generate random recommendations from predefined arrays.
   - Uses the `Math.random()` method to select random elements from arrays containing health tips, exercises, and reminders.
   - Utilizes the `setInterval()` method to refresh the displayed content every 10 seconds, ensuring that Sunita receives updated recommendations automatically.

#### Functionality:

- **Health Tips**: The `displayHealthTip()` function selects a random health tip from an array (`healthTips`) and updates the content of the `health-tip` element in the HTML document.

- **Exercise Recommendations**: The `displayExerciseRecommendation()` function chooses a random exercise recommendation from an array (`exercises`) and modifies the text within the `exercise-recommendation` element on the web page.

- **Daily Reminders**: The `displayReminder()` function picks a random reminder from an array (`reminders`) and updates the content of the `reminder` element, providing Sunita with essential daily guidance and encouragement.

- **Dynamic Updates**: The `setInterval()` method is utilized to call the recommendation functions every 10 seconds, refreshing the displayed tips, exercises, and reminders automatically without requiring user interaction.

#### Conclusion:

The Healthy Living Web Application code offers a straightforward yet effective solution for providing Sunita Sharma with continuous guidance on maintaining a healthier lifestyle. By leveraging JavaScript's capabilities to dynamically update content and the `setInterval()` method to automate the refreshment of recommendations, the application ensures that Sunita receives diverse and timely advice on nutrition, exercise, and daily routines, contributing to her overall well-being and quality of life.

SCREEN SHOT OF MY PROJECT:
![image](https://github.com/soham1522/Kartin-Project/assets/118202100/6f06af5f-cc32-4018-83e0-b21dabb9a17d)

