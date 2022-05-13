
////////////////////////////task1////////////////////////

function swap(a, b) {

    let { k: val3 } = a
    let { k: val4 } = b


     a = { k: val4 }
     b = { k: val3 }
    //  console.log(a.k,b.k)
}


let x = { k: '1' }
let y = { k: '2' }

let { k: val } = x
let { k: val2 } = y

// console.log(x.k, y.k)

swap(x, y)



////////////////////////////task2////////////////////////

function max_min(...r) {

//     console.log("max is " + Math.max(...r) + " min is " +  Math.min(...r))

}

let f = [20, 5 , 8 , 30 , 1]

max_min(...f)


/////////////////////////////////////////// task3 ///////////////////////////////////////

let Std = {

    Std_name: "ahmed",
    fac_name: "engineering",
    fac_grad: "95%"
}


// console.log(`studentname ${Std.Std_name} fac_name ${Std.fac_name} fac_grad ${Std.fac_grad} `)


///////////////////////////////////////// task4///////////////////////////////////////////////


let count = ['egypt', 'qatar', 'sa', 'egypt'];

let a = new Set(count)


function print(...rest) {

    for (let i of rest) {
        //    console.log(i)
    }
}

print([...a])


// Set.prototype.diff = function (s2) {
//     let x = new Set()
//     for (let i of s2) {
//         if (!this.has(i))
//             x.add(i)

//     }
//     return x
// }


Set.prototype.union = function (s2) {

    let y = [...s2, ...this]
    return y
}


let b = new Set(['algeria', 'sa', 'maracish', 'yamen'])

a.diff(b)
console.log(a.diff(b))

a.union(b)
// console.log(a.union(b))


/////////////////////////////////////////////////task5/////////////////////////////////////////////


let map = new Map();

map.set("ayah", {
    Grades: [{ Coursename: "JavaScript", Grade: "Excellent" },
    { Coursename: "Jquery", Grade: "Good" },
    { Coursename: "React", Grade: "V.Good" },
    { Coursename: "ESNext", Grade: "Good" },
    { Coursename: "NodeJS", Grade: "V.Good" }]
})

map.set("mohamed", {
    Grades: [{ Coursename: "JavaScript", Grade: "Excellent" },
    { Coursename: "Jquery", Grade: "Good" },
    { Coursename: "React", Grade: "V.Good" },
    { Coursename: "ESNext", Grade: "Good" },
    { Coursename: "NodeJS", Grade: "V.Good" }]
})


map.set("aaa", {
    Grades: [{ Coursename: "JavaScript", Grade: "Excellent" },
    { Coursename: "Jquery", Grade: "Good" },
    { Coursename: "React", Grade: "V.Good" },
    { Coursename: "ESNext", Grade: "Good" },
    { Coursename: "NodeJS", Grade: "V.Good" }]
})


for (let [k1, val1] of map) {

    // console.log(`${k1} `)

    for (let k2 in val1) {

        for (k3 = 0; k3 < val1[k2].length; k3++) {
            // console.log(val1[k2][k3].Coursename + " : " + val1[k2][k3].Grade) ;
        }

    }

}


let bt = document.getElementById("bt")

function fun() {

    // if(Option.value == 'ayah')
    // console.log(map.get('ayah'))

    // else if(Option.value == 'mohamed')
    // console.log(map.get('mohamed'))

    // else if(Option.value == 'aaa')
    // console.log(map.get('aaa'))


    // console.log("hi")


}


