
from flask import Flask


app = Flask(__name__)

@app.route('/')
def home_page():
    html = """
</head>
<body>
<h1>Currency Converter</h1>
    <hr>
    <h3>Choose currency to transfer from:</h3>
    <select name="from_curr" id="from_curr">
        <option value="">--Please choose an option--</option>
        <option value="USD">US dollar</option>
        <option value="EUR">European Euro</option>
        <option value="JPY">Japanese yen</option>
        <option value="GBP">Pound sterling</option>
        <option value="AUD">Australian dollar</option>
        <option value="CAD">Canadian dollar</option>
        <option value="CHF">Swiss franc</option>
        <option value="CNY">Chinese Yuan Renminbi</option>
        <option value="SEK">Swedish krona</option>
        <option value="MXN">Mexican peso</option>
        <option value="NZD">New Zealand dollar</option>
        <option value="SGD">Singapore dollar</option>
        <option value="HKD">Hong Kong dollar</option>
        <option value="NOK">Norwegian krone</option>
        <option value="KRW">South Korean won</option>
        <option value="TRY">Turkish lira</option>
        <option value="INR">Indian rupee</option>
        <option value="RUB">Russian ruble</option>
        <option value="BRL">Brazilian real</option>
        <option value="ZAR">South African rand</option>
        <option value="DKK">Danish krone</option>
        <option value="PLN">Polish zloty</option>
        <option value="TWD">New Taiwan dollar</option>
        <option value="THB">Thai baht</option>
        <option value="MYR">Malaysian ringgit</option>
    </select>
        <br>
    <h3>And tranfer to:</h3>
    <select name="to_curr" id="to_curr">
        <option value="">--Please choose an option--</option>
        <option value="USD">US dollar</option>
        <option value="EUR">European Euro</option>
        <option value="JPY">Japanese yen</option>
        <option value="GBP">Pound sterling</option>
        <option value="AUD">Australian dollar</option>
        <option value="CAD">Canadian dollar</option>
        <option value="CHF">Swiss franc</option>
        <option value="CNY">Chinese Yuan Renminbi</option>
        <option value="SEK">Swedish krona</option>
        <option value="MXN">Mexican peso</option>
        <option value="NZD">New Zealand dollar</option>
        <option value="SGD">Singapore dollar</option>
        <option value="HKD">Hong Kong dollar</option>
        <option value="NOK">Norwegian krone</option>
        <option value="KRW">South Korean won</option>
        <option value="TRY">Turkish lira</option>
        <option value="INR">Indian rupee</option>
        <option value="RUB">Russian ruble</option>
        <option value="BRL">Brazilian real</option>
        <option value="ZAR">South African rand</option>
        <option value="DKK">Danish krone</option>
        <option value="PLN">Polish zloty</option>
        <option value="TWD">New Taiwan dollar</option>
        <option value="THB">Thai baht</option>
        <option value="MYR">Malaysian ringgit</option>
    </select>
    <br>
    <br>
        <button type="sumit">Convert</button>
    <hr>

</body>
</html>
"""
    return html

@app.route('/converted-form', methods=['get', 'post'])
def from_curr():

    currency = CurrencyRates()
    from_curr = request.form.get('from_curr').upper()
    to_curr = request.form.get('to_curr').upper()
    result = currency.convert(from_curr, to_curr, amount)

    html = """
</head>  
<body>
<h1>Currency Converter</h1>
    <hr>
    <h3>Choose currency to transfer from:</h3>
    <select name="from_curr" id="from_curr">
        <option value="">--Please choose an option--</option>
        <option value="USD">US dollar</option>
        <option value="EUR">European Euro</option>
        <option value="JPY">Japanese yen</option>
        <option value="GBP">Pound sterling</option>
        <option value="AUD">Australian dollar</option>
        <option value="CAD">Canadian dollar</option>
        <option value="CHF">Swiss franc</option>
        <option value="CNY">Chinese Yuan Renminbi</option>
        <option value="SEK">Swedish krona</option>
        <option value="MXN">Mexican peso</option>
        <option value="NZD">New Zealand dollar</option>
        <option value="SGD">Singapore dollar</option>
        <option value="HKD">Hong Kong dollar</option>
        <option value="NOK">Norwegian krone</option>
        <option value="KRW">South Korean won</option>
        <option value="TRY">Turkish lira</option>
        <option value="INR">Indian rupee</option>
        <option value="RUB">Russian ruble</option>
        <option value="BRL">Brazilian real</option>
        <option value="ZAR">South African rand</option>
        <option value="DKK">Danish krone</option>
        <option value="PLN">Polish zloty</option>
        <option value="TWD">New Taiwan dollar</option>
        <option value="THB">Thai baht</option>
        <option value="MYR">Malaysian ringgit</option>
    </select>
        <br>
    <h3>And tranfer to:</h3>
    <select name="to_curr" id="to_curr">
        <option value="">--Please choose an option--</option>
        <option value="USD">US dollar</option>
        <option value="EUR">European Euro</option>
        <option value="JPY">Japanese yen</option>
        <option value="GBP">Pound sterling</option>
        <option value="AUD">Australian dollar</option>
        <option value="CAD">Canadian dollar</option>
        <option value="CHF">Swiss franc</option>
        <option value="CNY">Chinese Yuan Renminbi</option>
        <option value="SEK">Swedish krona</option>
        <option value="MXN">Mexican peso</option>
        <option value="NZD">New Zealand dollar</option>
        <option value="SGD">Singapore dollar</option>
        <option value="HKD">Hong Kong dollar</option>
        <option value="NOK">Norwegian krone</option>
        <option value="KRW">South Korean won</option>
        <option value="TRY">Turkish lira</option>
        <option value="INR">Indian rupee</option>
        <option value="RUB">Russian ruble</option>
        <option value="BRL">Brazilian real</option>
        <option value="ZAR">South African rand</option>
        <option value="DKK">Danish krone</option>
        <option value="PLN">Polish zloty</option>
        <option value="TWD">New Taiwan dollar</option>
        <option value="THB">Thai baht</option>
        <option value="MYR">Malaysian ringgit</option>
    </select>
    <br>
    <br>
        <button type="sumit">Convert</button>
    <hr>
</body>
</html>
"""
    return (html + result)