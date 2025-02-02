Music & Movie Chatbot
This is a Python-based chatbot that provides movie and music recommendations, focusing on expert-level knowledge across all genres. It uses the Google Gemini API for generative AI and offers accurate, insightful, and engaging recommendations.

Features
Expert recommendations: Movies and music suggestions across genres.
Accurate and engaging responses: Based on expert reviews, ratings, and audience consensus.
Highly rated suggestions: Focus on critically acclaimed content, but also offers "badly reviewed" content when requested.
Fun and interactive: The chatbot has a lively and engaging personality, injecting humor and interesting trivia.
Table of Contents
Requirements
Setting Up the Project
Create Virtual Environment
Install Dependencies
Getting Your Google API Key
Add the API Key to the .env file
Running the Chatbot
Troubleshooting
Requirements
Python 3.7 or higher
Google API Key for Gemini API
python-dotenv library (for loading API keys from .env file)
Setting Up the Project
Create Virtual Environment
To start, create a virtual environment to keep the project dependencies isolated.

Open your terminal (PowerShell, Command Prompt, or any terminal of your choice).

Navigate to the project folder.

Run the following command to create a virtual environment:


python -m venv .venv
Activate the virtual environment:

Windows (PowerShell):

.\.venv\Scripts\Activate.ps1
Windows (Command Prompt):

.\.venv\Scripts\activate.bat

source .venv/bin/activate
Install Dependencies
Once your virtual environment is active, install the required libraries:


pip install -r requirements.txt
Alternatively, install the necessary libraries manually:


pip install google-generativeai python-dotenv
Getting Your Google API Key
To use the Google Gemini API, you'll need to create a project on Google Cloud and obtain an API key.

Go to the Google Cloud Console.
Create a new project.
Navigate to APIs & Services > Credentials.
Under API Keys, click Create credentials and select API Key.
Copy the generated API key.
Add the API Key to the .env File
In the root folder of your project (where your chat.py is), create a file named .env.

Add your API key to the .env file like so:


GEMINI_API_KEY=your_actual_api_key_here
Make sure to replace your_actual_api_key_here with the API key you got from Google.

Running the Chatbot
Make sure your virtual environment is activated.

Run the Python chatbot script:


python chat.py
Start chatting with the bot! It will ask you for movie/music recommendations, and you can also specify genres, moods, or types of suggestions.

Troubleshooting
Error: "No API_KEY or ADC found."

This means the API key is not being correctly loaded from your .env file. Double-check that your .env file is in the same folder as the script and that the key is formatted correctly.
Ensure you have the python-dotenv package installed and that you're loading it using load_dotenv() in your script.
Virtual Environment Issues

If your virtual environment isn't activating correctly, ensure you're using the correct commands for your operating system (see the "Create Virtual Environment" section).
Example Interaction
🎬 User: "Give me a good sci-fi movie."
🤖 Bot: "You can’t go wrong with Blade Runner 2049—stunning visuals, deep storytelling, and a Hans Zimmer score that hits like a spaceship launch. Or if you want something mind-bending, Interstellar will make you question time itself. Want something lesser-known?"


