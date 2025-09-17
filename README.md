# Meal Maven

**Meal Maven** is an engaging web application designed to help users effortlessly discover and explore a diverse range of recipes based on the ingredients they have at home. This interactive platform simplifies meal planning, making it both enjoyable and convenient.

## Features

- **Ingredient-Based Recipe Search**: Find recipes based on what you have in your pantry.  
- **Diverse Recipe Collection**: Browse through a wide variety of recipes from different cuisines.  
- **Intuitive User Interface**: Enjoy a seamless and user-friendly experience with easy navigation.  
- **Recipe Details**: View detailed recipes including ingredients, instructions, and images.  
- **Filters**: Narrow down your search results with the following filters:  
  - **Meal Type**: Filter by meal types such as breakfast, lunch, dinner, or snacks.  
  - **Max Calories**: Set a maximum calorie limit to find recipes that fit your dietary preferences.  

## Technologies Used

- **Frontend**: HTML, CSS, and JavaScript for a dynamic and responsive user interface.  
- **API Integration**: Utilizes the Edamam API for fetching up-to-date and accurate recipe information.  
- **Responsive Design**: Ensures compatibility with various devices and screen sizes for a smooth user experience.  
- **Containerization & Deployment**:  
  - **Docker**: Containerized the application for consistent environment and easy deployment.  
  - **Kubernetes**: Deployed using a Deployment with 2 pods for high availability and a LoadBalancer Service for external access.  

## Deployment Details

- **Docker Image**: `us-central1-docker.pkg.dev/meal-maven-472315/meal-maven-repo/meal-maven:latest`  
- **Kubernetes Service**: Exposes the app externally via a LoadBalancer.  
- **External Access**:  
  - Direct IP: [http://34.31.212.240](http://34.31.212.240)    
- **Domain Mapping**: You can map a custom domain (e.g., `mealmaven.com`) to the LoadBalancer IP and configure SSL using Google-managed certificates.  
- **High Availability**: Runs 2 replicas of the application for reliability and zero-downtime updates.  

## Usage

1. Enter the ingredients you have in the search bar.  
2. Enter the meal type and set a calorie limit to find recipes that fit your dietary preferences.  
3. Click the search button or press Enter to find recipes.  
4. Browse the recipe results and click on "View Recipe" to open the detailed recipe in a new tab.  
5. Access the app via the IP or domain: [http://34.31.212.240](http://34.31.212.240) or `http://34.31.212.240:8080/`.  

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.  

## Contact

Developed by [Pranav Shinde](mailto:pranavvvvshinde@gmail.com). Feel free to reach out with any questions or feedback!  
