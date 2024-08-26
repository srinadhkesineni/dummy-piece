import sys
import joblib
import pandas as pd

# Load the model and label encoder
model = joblib.load('model.pkl')
label_encoder = joblib.load('label_encoder.pkl')

# Read command line arguments
interests = sys.argv[1]
strengths = sys.argv[2]

# Prepare the input data
new_student = pd.DataFrame({
    'Interests': [interests],
    'Strengths': [strengths]
})

# Predict the career path
predicted_career_path_encoded = model.predict(new_student)
predicted_career_path = label_encoder.inverse_transform(predicted_career_path_encoded)

print(predicted_career_path[0])
