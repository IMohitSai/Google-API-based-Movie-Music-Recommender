from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()  # Load environment variables

app = Flask(__name__)
CORS(app)  # Simpler CORS configuration

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Create the model
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 65536,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash-latest",  # Updated model name
    generation_config=generation_config,
    system_instruction="Your system instructions here..."
)

chat_session = model.start_chat(history=[])

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message', '')
    
    try:
        response = chat_session.send_message(user_input)
        return jsonify({
            'response': response.text,
            'success': True
        })
    except Exception as e:
        return jsonify({
            'response': f'Error: {str(e)}',
            'success': False
        }), 500

if __name__ == '__main__':
    app.run(debug=True)  # Start Flask server