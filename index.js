let card = document.getElementById("cin");

let arr = ["/hq720 (1).webp","/hq720 (2).webp","/hq720.webp","/hq720 (3).webp",];
let arrTitle = ["WSJ The Economics Of","اخطر من النووي | الدحيح","كيف تبرمج عقلك الباطن - شرح كامل لكتاب قوة عقلك الباطن","الحاسة السادسة"];
let arrTitle2 = ["/unnamed.jpg" , "/ch1.jpg","/channels4_profile.jpg","/ch1.jpg"];
let arrTitle3 = ["Wall Street Journal" , "الدحيح","Dupamicaffeine","الدحيح"];
let arrTitle4 = ["2.1M" , "3.3M","7.3M","3.7M"];
let arrTitle5 = ["1 years" , "6 month","2 years","4 years"];
// let arrTitle2 =  
for(let i = 0; i <= arr.length - 1; i++) {
    card.innerHTML += `
    <div class="card" id="card">
                <img class="imgs" src="${arr[i]}" alt="">
                <div class="texts">
                    <img src=${arrTitle2[i]} alt="">
                    <h2>${arrTitle[i]}</h2>
                
                </div>
                    <p>${arrTitle3[i]}</p>
                    <p>${arrTitle4[i]} views ${arrTitle5[i]}  ago</p>
            </div>
    ` 
}
