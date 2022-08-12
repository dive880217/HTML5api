Object 自訂物件

1 建立 Object
    let obj = new Object()
    let obj = {}

    let obj = {
        name: 'Peter',
        age: 40,
        gender: 'male',
    }

2 如何存取?
    [example]
    let man = {
        name: 'Peter',
        age: 40,
        gender: 'male',
        favoriteColor: ['black','green','gray'],
        car: {
            make: 'BMW',
            mode: 'X5',
            year: 2021,
        },
        retired: false,
        sayHello(){},    // sayHello: function(){},
        diving(){},      // diving: function(){},
    }

    console.log(man.name); // Peter
    man.age ---> 40
    man.diving()
    man.favoriteColor[1]  ---> green
        物件的陣列表示法: man['favoriteColor'][1]
    man.car.mode ---> X5
        物件的陣列表示法: man['car']['mode']
    // for(let key in Object | Array){}
    for(let key in man){
        console.log(key);       // 印出「:」左邊的 key 值
        console.log(man[key]);  // 印出「:」右邊的 value 值
    }

    ------------------------------------------------------
    [example]
    let products = {
        10: 'Hat',
        20: 'T-shirt',
        30: 'iPhone',
        40: 'Mac Pro',
        50: 'iPad Air',
        60: 'AirPods',
    }
    console.log(products.10);   // XX
    console.log(products[10]);   // Hat


    