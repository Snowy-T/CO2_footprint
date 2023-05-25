from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    # Retrieve user input from the form
    transportation = request.form['transportation']
    energy = request.form['energy']
    consumption = request.form['consumption']

    # Conversion factors for carbon footprint calculation (example values)
    transportation_factor = 0.2  # CO2 emissions per km traveled
    energy_factor = 0.5  # CO2 emissions per kWh consumed
    consumption_factor = 0.1  # CO2 emissions per unit of consumption

    # Calculate carbon footprint based on user input
    transportation_emissions = float(transportation) * transportation_factor
    energy_emissions = float(energy) * energy_factor
    consumption_emissions = float(consumption) * consumption_factor

    total_emissions = transportation_emissions + energy_emissions + consumption_emissions

    # Generate example suggestions
    suggestions = [
        "Verwende öffentliche Verkehrsmittel oder Fahrrad statt Auto zu fahren.",
        "Nutze energieeffiziente Geräte und schalte sie bei Nichtgebrauch aus.",
        "Reduziere den Fleischkonsum und wähle regionale, saisonale Produkte.",
        "Pflanze Bäume oder unterstütze Aufforstungsprojekte."
    ]

    # Render the result template with the calculated carbon footprint and suggestions
    return render_template('result.html', carbon_footprint=total_emissions, suggestions=suggestions)

if __name__ == '__main__':
    app.run()
