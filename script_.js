// script.js

// Modelo
const model = {
    counter: 0,
    increment() {
        this.counter++;
    },
    decrement() {
        this.counter--;
    },
    getCounter() {
        return this.counter;
    }
};

// Vista
const view = {
    updateCounter(value) {
        document.getElementById('counter-value').textContent = value;
    }
};

// Controlador
const controller = {
    init() {
        // Inicializar la vista con el valor inicial del contador
        view.updateCounter(model.getCounter());

        // Manejar eventos de los botones
        document.getElementById('increment-btn').addEventListener('click', () => {
            model.increment();
            view.updateCounter(model.getCounter());
        });

        document.getElementById('decrement-btn').addEventListener('click', () => {
            model.decrement();
            view.updateCounter(model.getCounter());
        });
    }
};

// Inicializar la aplicación
controller.init();
