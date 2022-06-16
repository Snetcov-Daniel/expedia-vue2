import cities from "cities.json";
import axios from "axios";

export const getContracts = () => {
    const request = axios.get("http://localhost:3000/contracts")
    return request.then(response => response.data)
}

export const getPopularPlaces = (origin) => {

   return getContracts() 
    .then((data) => {
        let places = [];
        for (let i = 0; i < data.length; i++) {
            let counter = 0;
            if(data[i].origin.name !== origin){
                continue;
            }
            for (let j = 0; j < data.length; j++) {
                if(data[i].destination.name === data[j].destination.name){
                    counter++;
                }
            }
            places.push({
                place: data[i].destination,
                popularity: counter
            })
        }
        places = places.filter((item, index, array) => 
            index === array.findIndex((obj) => 
                obj.place.name === item.place.name
        ))
        
        places.sort((first, second) => first.popularity-second.popularity );
        console.log(places)
        return places;
    }).catch((err) => {
        console.log(err);
    });
}

export const addContract = (contract) => {
    const request = axios.post("http://localhost:3000/contracts", contract)
    return request.then(response => response.data)
}

export const generateContracts = (amount) => {
    const arr = cities.slice(6780, 6880)
    for (let i = 0; i < amount; i++) {
        const contract = {
            origin: arr[Math.floor(Math.random() * 100)],
            destination: arr[Math.floor(Math.random() * 100)]
        }
        addContract(contract)
    }
}