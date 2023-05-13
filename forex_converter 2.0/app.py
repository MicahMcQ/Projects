
from flask import Flask, render_template, request
from forex_python.converter import CurrencyRates
from decimal import *
app = Flask(__name__)

data=[]
@app.route('/')
def home_page():
    return render_template('bank.html')

@app.route('/convert', methods=['POST']) 
def convert():

    c = CurrencyRates(force_decimal=True)
    from_curr = request.form.get('from_currency')
    to_curr = request.form.get('to_currency')
    amount = request.form.get('amount')
    result = c.convert(from_curr, to_curr, Decimal(amount))
    return render_template('bank.html',data=(round(result,2)))
