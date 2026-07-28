function solve() {
    const input = document.querySelector('#inputs textarea');
    const bestRestaurantOutput = document.querySelector('#bestRestaurant p');
    const workersOutput = document.querySelector('#workers p');

    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const restaurantsInput = JSON.parse(input.value);

        const restaurants = {};

        for (const line of restaurantsInput) {
            const [restaurantName, workersInfo] = line.split(' - ');

            if (!restaurants[restaurantName]) {
                restaurants[restaurantName] = {
                    workers: []
                };
            }

            const workers = workersInfo.split(', ');

            for (const worker of workers) {
                const [name, salary] = worker.split(' ');
                restaurants[restaurantName].workers.push({
                    name,
                    salary: Number(salary)
                });
            }

            const salaries = restaurants[restaurantName].workers.map(w => w.salary);

            restaurants[restaurantName].avgSalary =
                salaries.reduce((a, b) => a + b, 0) / salaries.length;

            restaurants[restaurantName].bestSalary =
                Math.max(...salaries);
        }

        let bestRestaurant = null;

        for (const restaurant of Object.values(restaurants)) {
            if (
                !bestRestaurant ||
                restaurant.avgSalary > bestRestaurant.avgSalary
            ) {
                bestRestaurant = restaurant;
            }
        }

        const bestRestaurantName = Object.keys(restaurants).find(
            key => restaurants[key] === bestRestaurant
        );

        bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

        bestRestaurantOutput.textContent =
            `Name: ${bestRestaurantName} ` +
            `Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} ` +
            `Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

        workersOutput.textContent = bestRestaurant.workers
            .map(w => `Name: ${w.name} With Salary: ${w.salary}`)
            .join(' ');
    }
}