from forex_python.converter import CurrencyRates

currency = CurrencyRates()

from_curr = input("From Currency: ").upper()
to_curr = input("TO Currency: ").upper()
amount = int(input("Enter the Amount: "))

result = currency.convert(from_curr, to_curr, amount)

print(
    f"{amount} {from_curr} is {(round(result, 3))} {to_curr}"
)