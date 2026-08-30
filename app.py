from flask import Flask, jsonify

app = Flask(__name__)

products = [
    {
        "id": 1,
        "name": "Cloud 1",
        "price": 99.99
    },
    {
        "id": 2,
        "name": "Cloud 2",
        "price": 149.99
    },
    {
        "id": 3,
        "name": "Cloud 3",
        "price": 199.99
    },
    
]


@app.route("/showProduct", methods=["GET"])
def show_product():
    return jsonify(products)

@app.route("/health")
def health():
    return jsonify({"status": "healthy"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)