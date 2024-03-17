function businessNameGenerator() {

    let firstName;
    let middleName;
    let lastName;
    function adjective() {
        let num = Math.floor(Math.random() * 3) + 1;
        if (num == 1) {
            firstName = "Crazy";


        }
        else if (num == 2) {
            firstName = "Amazing";
        }
        else {
            firstName = "Fire"
        }

    }
    function shopName() {
        let num = Math.floor(Math.random() * 3) + 1;
        if (num == 1) {
            middleName = "Engine";


        }
        else if (num == 2) {
            middleName = "Food";
        }
        else {
            middleName = "Garments"
        }

    }
    function anotherName() {
        let num = Math.floor(Math.random() * 3) + 1;
        if (num == 1) {
            lastName = "Bros";


        }
        else if (num == 2) {
            lastName = "Hub";
        }
        else {
            lastName = "Limited"
        }

    }
    adjective();
    shopName();
    anotherName();

    console.log(firstName, middleName, lastName);
}
businessNameGenerator()