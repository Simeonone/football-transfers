// "use strict";
//football clubs
const club1 = {
  name: "Chelsea Football Club",
  pin: 1111,
  players: [
    "Antoinio Rudiger",
    "Christian Pulisic",
    "Kai Havertz",
    "Raheem Sterling",
    "Eden Hazard",
  ],
  transferCost: [50000000, -11000000, -12000000, -15000000, 105000000],
  transferDates: [
    "2022-07-03T01:31:17.178Z",
    "2022-08-04T07:42:02.383Z",
    "2022-08-05T09:15:04.904Z",
    "2022-11-18T21:31:17.178Z",
    "2022-07-12T10:51:36.790Z",
  ],
};
const club2 = {
  name: "Manchester United Football Club",
  pin: 2222,
  players: [
    "Marcus Rashford",
    "Bruno Fernandes",
    "Jadon Sancho",
    "Cristiano Ronaldo",
    "Daniel James",
    "Raphael Varane",
    "Rio Casemiro",
  ],
  transferCost: [
    10000000, -6000000, -7000000, 15000000, 6000000, -5000000, -15000000,
  ],
  transferDates: [
    "2022-07-01T13:15:33.035Z",
    "2022-07-30T09:48:16.867Z",
    "2022-07-25T06:04:23.907Z",
    "2022-05-27T17:01:17.194Z",
    "2022-07-12T10:51:36.790Z",
    "2022-07-11T23:36:17.929Z",
    "2022-08-11T23:36:17.929Z",
  ],
  /*
  [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  */
};
const club3 = {
  name: "Liverpool Football Club",
  pin: 3333,
  players: ["Alexander Arnold", "Van Dijk", "Mohammed Salah"],
  transferCost: [5000000, -6000000, 7000000],
  transferDates: [
    "2022-07-27T17:01:17.194Z",
    "2022-07-11T23:36:17.929Z",
    "2022-08-01T10:51:36.790Z",
  ],
};

const clubs = [club1, club2, club3];

//Elements
const greetings = document.querySelector(".greetings");
const myApp = document.querySelector(".app");
const logoutTimer = document.querySelector(".logout--timer");
const countdown = document.querySelector(".timer");
const inputLoginUnameCredentials = document.querySelector(
  ".user--login--username"
);
const buyPlayerTitle = document.querySelector(".buy--player");
const inputLoginPassCredentials = document.querySelector(
  ".user--login--password"
);
const playerInitialsLabel = document.querySelector(
  ".form--label--playerInitials"
);
const mainLogo = document.querySelector(".logo");
const hideBuyPlayerAmt = document.querySelector(".form--input--amount");
const hideBuyPlayerAmttxt = document.querySelector(
  ".form--label--playerAmount"
);
// const btnBuyPlayer = document.querySelector(".form--btn--buyPlayer"); --duplicated in line 52
const sellPlayerInitials = document.querySelector(
  ".form--input--playerInitialsSell"
);
const btnSellPlayer = document.querySelector(".form--btn--SellPlayer");
const sellPlayerAmt = document.querySelector(".form--input--playerSaleAmount");
const sellToClubX = document.querySelector(
  ".form--input--playerSaletoWhichClub"
);
const loginForm = document.querySelector(".login");
const playerInitialsBuy = document.querySelector(
  ".form--input--playerInitialsBuy"
);
const playerXfrom = document.querySelector(".player--fromClub");
const dateToday = document.querySelector(".dateToday");
const sellPlayerOptns = document.querySelector(".playerSaleOptions");
const sortBtn = document.querySelector(".btn--sort");
const labelBalance = document.querySelector(".balance--value");
const sellPlayerHeader = document.querySelector(".sellPlayerHeader");
const buyPlayerOptns = document.querySelector(".player--buyOptions");
const buyPlayerX = document.querySelector(".form--btn--buyPlayer");
const playersAvailable = document.querySelector(".availablePlayers");
const innerBuyPlayerBtn = document.querySelector(".form--btn--buyPlayerInside");
// const myLogo = document.querySelector(".logo");
//code
// function displaytransferCost(transferCost, players) {
clubs.forEach(function (club) {
  club.counter = 1;
});
//THIS IS IT
function formatTransferDate(date) {
  function calcDaysPassed(date1, date2) {
    return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  }
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) {
    return `Today`;
  }
  if (daysPassed === 1) {
    return `Yesterday`;
  }
  if (daysPassed <= 7) {
    return `${daysPassed} days ago`;
  } else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(navigator.language).format(date);
  }
}

function formatCur(value) {
  const currOptions = {
    style: "currency",
    currency: "GBP",
  };
  return new Intl.NumberFormat(navigator.language, currOptions).format(value);
}

let displaytransferCost = function (_, sort = false) {
  // sort = true;
  document.querySelector(".transfers").innerHTML = "";
  // document.querySelector(".sortContent").textContent = `(by Amount)`;
  const trans = sort
    ? currentClub.transferCost.slice().sort(function (a, b) {
        return a - b;
      })
    : currentClub.transferCost;
  trans.forEach(function (value, index) {
    const type = value > 0 ? "out" : "in";
    const date = new Date(
      currentClub.transferDates[currentClub.transferCost.indexOf(value)]
      // acc.transferDates[index]
    );
    const displayDate = formatTransferDate(date);
    const formattedTransferCost = formatCur(value);
    let html = `
    <div class="transfers--row">
        <div class="transfers--name">${
          // acc.players[acc.transferCost.indexOf(value)]
          currentClub.players[currentClub.transferCost.indexOf(value)]
        }</div>
        <div class="transfer--type transfers--type--${type}">${
      index + 1
    } ${type}</div>
        <div class="transfer--date">${displayDate}</div>
        <div class="transfer--amount">${formattedTransferCost}</div>
     </div>
  `;
    document.querySelector(".transfers").insertAdjacentHTML("afterbegin", html);
  });
};
// displaytransferCost(club1.transferCost, club1.players); - one

//function below calculates the bank balance in each club's bank account
function displayBalance(clubs) {
  clubs.balance = clubs.transferCost.reduce(function (value, index) {
    return value + index;
  }, 0);
  // const formattedTransferCost = formatCur(value.balance);
  // labelBalance.textContent = `${clubs.balance.toFixed(2)} £`; //.toFixed(2)
  labelBalance.textContent = formatCur(clubs.balance);
}
// displayBalance(club3.transferCost); - two

//function below calcuates the summary going out (incomes for the club)
function displaySummary(clubs) {
  const sales = clubs.transferCost
    .filter(function (value) {
      return value > 0;
    })
    .reduce(function (acc, value) {
      return acc + value;
    }, 0);
  document.querySelector(".summary--value--in").textContent = formatCur(sales);
  // `${sales}£`;
  const purchases = clubs.transferCost
    .filter(function (value) {
      return value < 0;
    })
    .reduce(function (acc, value) {
      return acc + value;
    }, 0);
  document.querySelector(".summary--value--out").textContent = formatCur(
    Math.abs(purchases)
  );
  // `${purchases}£`;
}
// displaySummary(club3.transferCost); -three
function userNames(clubs) {
  clubs.forEach(function (club) {
    //below - creating a new property called username
    club.username = club.name
      .toLowerCase()
      .split(" ")
      .map(function (value) {
        return value[0];
      })
      .join("")
      .toUpperCase();
  });
}
userNames(clubs);

let playersArr = clubs.players;
function playersInitials(clubs) {
  clubs.forEach(function (club) {
    let arrx = [];
    club.playerInitials = [];
    club.players.forEach(function (player) {
      arrx.push(
        player
          .toLowerCase()
          .split(" ")
          .map(function (value) {
            return value[0];
          })
          .join("")
          .toUpperCase()
      );
    });
    club.playerInitials.push(arrx);
  });
}
playersInitials(clubs);
// clubs;
//Login Event Handlers
//below contains info of currently logged in club (let currentClub)
function updateUI(fclub) {
  // //display transfer cost function - from one above
  // displaytransferCost(fclub.transferCost, fclub.players);
  displaytransferCost(fclub);
  //display balance function - from two above
  displayBalance(fclub);
  //display summary function - from three above
  displaySummary(fclub);
}
function logoutEffect() {
  //repeat 0110
  myApp.style.opacity = 0;
  mainLogo.style.display = "";
  logoutTimer.style.opacity = 0;
  loginForm.style.display = "";
  document.querySelector(".loginDetails").style.display = "";
  // document.querySelector(".myTable").style.display = "";
  greetings.textContent = `Enter your login credentials to get started`;
}

function startLogoutTimer() {
  function tick() {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //call the timer every second
    countdown.textContent = `${min}:${sec}`;
    //in each call, print the remeining time to the UI
    if (time === 0) {
      clearInterval(timer);
      // //repeat 0110
      logoutEffect();
      // myApp.style.opacity = 0;
      // mainLogo.style.display = "";
      // logoutTimer.style.opacity = 0;
      // loginForm.style.display = "";
      // document.querySelector(".loginDetails").style.display = "";
      // // document.querySelector(".myTable").style.display = "";
      // greetings.textContent = `Enter your login credentials to get started`;
    }
    time--;
  }
  let time = 420;
  //set time to 5 minutes
  tick();
  const timer = setInterval(tick, 1000);
  //when time is at 0 seconds, stop timer and logout user
  return timer;
}

let currentClub, timer;

document.querySelector(".loginBtn").addEventListener("click", function (e) {
  e.preventDefault();
  currentClub = clubs.find(function (value) {
    return (
      value.username === document.querySelector(".user--login--username").value
    );
  });
  if (
    currentClub?.pin === +document.querySelector(".user--login--password").value
  ) {
    //display UI and Welcome Message
    greetings.textContent = `Welcome, ${currentClub.name}`;
    // greetings.style.textAlign = "center";
    login();
    let playersAvailableToBuy = [];
    // let playersBuyArr = []
    clubs.forEach(function (clubx, index) {
      clubx.transferCost.forEach(function (value, index) {
        if (value < 0) {
          playersAvailableToBuy.push(clubx.playerInitials[0][index]);
        }
      });
    });
    const intersection = playersAvailableToBuy.filter(function (value) {
      //below - returns players who are available to sell and are not in the currently logged in club
      return !currentClub.playerInitials[0].includes(value);
    });
    buyPlayerOptns.textContent = intersection;
    //clear login input fields
    inputLoginUnameCredentials.value = inputLoginPassCredentials.value = "";
    inputLoginPassCredentials.blur();
    if (timer) {
      clearInterval(timer);
    }
    timer = startLogoutTimer();
    updateUI(currentClub);
    //display transfer cost function - from one above
    // displaytransferCost(currentClub.transferCost, currentClub.players);
  } else {
    greetings.textContent = `Wrong credentials. Please try again`;
  }
});
function login() {
  //displays contents after logging in
  myApp.style.opacity = 100;
  mainLogo.style.display = "none";
  document.querySelector(".loginDetails").style.display = "none";
  document.querySelector(".myTable").style.display = "none";
  // document.querySelector(".transfers").style.overflow = "scroll";
  logoutTimer.style.opacity = 100;
  //generate current date and time
  //BELOW - WORKING WITH THE INTERNATIONALIZATION API
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long", //numeric or 2-digit --alternatives
    year: "numeric",
    weekday: "long",
  };
  //below we are getting locale from user's browser
  const locale = navigator.language;
  dateToday.textContent = new Intl.DateTimeFormat(locale, options).format(now);
  loginForm.style.display = "none";
  hideBuyPlayerAmt.style.display = "none";
  hideBuyPlayerAmttxt.style.display = "none";
  //below displays the content on Available players under sell players
  let arrNewSellPlayer = [];
  //below - declared var because it is needed globally, e.g. when we sell a player
  let validPlayers = [];
  const leoleo = currentClub.transferCost;
  leoleo.filter(function (value, index) {
    if (leoleo[index] < 0) {
      arrNewSellPlayer.push(value);
      validPlayers.push(currentClub.playerInitials[0][index]);
    }
    return arrNewSellPlayer;
  });
  const availableClubs = document.querySelector(".availableClubs");
  let arrNew2 = [];
  clubs.forEach(function (value) {
    if (value !== currentClub) {
      arrNew2.push(value.username);
    }
  });
  availableClubs.textContent = arrNew2;
  if (Object.keys(validPlayers).length === 0) {
    noPlayersLeft();
    // availableClubs.textContent = "You need to buy players first!!";
  } else {
    sellPlayerOptns.textContent = validPlayers;
  }
}
document.querySelector(".myTable").style.display = "none";

document.querySelector(".loginDetails").addEventListener("click", function () {
  document.querySelector(".myTable").style.display = "";
});

document.querySelector(".logoutBtn").addEventListener("click", function () {
  //repeat 0110
  logoutEffect();
  // myApp.style.opacity = 0;
  // mainLogo.style.display = "";
  // logoutTimer.style.opacity = 0;
  // loginForm.style.display = "";
  // document.querySelector(".loginDetails").style.display = "";
  // // document.querySelector(".myTable").style.display = "";
  // greetings.textContent = `Enter your login credentials to get started`;
});
btnSellPlayer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +sellPlayerAmt.value;
  const receiver = clubs.find(function (value) {
    return value.username === sellToClubX.value;
  });
  const c = sellPlayerOptns.textContent;
  let myNewArr = c.split(",");
  const activePlayerInitial11 = myNewArr.find(function (value3) {
    return value3 === sellPlayerInitials.value;
  });
  //below - transfer can happen if account is > 0 ... etc
  sellPlayerInitials.value = sellPlayerAmt.value = sellToClubX.value = "";
  if (
    amount > 0 &&
    receiver &&
    receiver?.username !== currentClub.username &&
    activePlayerInitial11 !== undefined &&
    activePlayerInitial11 !== "No players available to sell"
  ) {
    //below - the player that has been selected
    let please = currentClub.playerInitials[0].indexOf(activePlayerInitial11);
    let pleaseAgain = currentClub.players[please];
    const index = myNewArr.indexOf(activePlayerInitial11);
    if (index > -1) {
      myNewArr.splice(index, 1);
    }
    if (myNewArr.length >= 0) {
      sellPlayerOptns.textContent = myNewArr;
      let nomoIdeas = buyPlayerOptns.textContent.split(",");
      nomoIdeas.push(activePlayerInitial11);
      if (nomoIdeas[0] === `There are no more players to buy`) {
        nomoIdeas.shift();
      }
      buyPlayerOptns.textContent = nomoIdeas;
    }
    if (myNewArr.length === 0) {
      noPlayersLeft();
    }
    //Doing the transfer and updating th UI
    alert(`Success!! ${pleaseAgain} has been sold to ${receiver.name}`);
    buyPlayerTitle.textContent = `Buy Player`;
    currentClub.transferCost.push(amount);
    receiver.transferCost.push(-amount);
    receiver.counter++;
    currentClub.players.push(pleaseAgain);
    receiver.players.push(pleaseAgain);
    currentClub.transferDates.push(new Date().toISOString());
    receiver.transferDates.push(new Date().toISOString());
    receiver.playerInitials[0].push(activePlayerInitial11);
    updateUI(currentClub);
    // resetting the timer
    clearInterval(timer);
    timer = startLogoutTimer();
    //end of resetting timer
    sellPlayerHeader.textContent = "Sell Player";
  } else {
    console.log(`Transfer Invalid`);
    sellPlayerHeader.textContent =
      "Invalid Input. Please try again (INPUTS ARE CASE SENSITIVE)";
  }
});
function noPlayersLeft() {
  sellPlayerOptns.textContent = "No players available to sell";
}
buyPlayerX.addEventListener("click", function (e) {
  e.preventDefault();
  buyPlayerTitle.textContent = `Buy Player`;
  const playerInitBuy = playerInitialsBuy;
  // buyPlayerOptns
  const buyPlayerArr = buyPlayerOptns.textContent;
  let buyPlayerArrNew = buyPlayerArr.split(",");
  if (
    buyPlayerArrNew.includes(playerInitBuy.value) &&
    buyPlayerOptns.textContent !== "There are no more players to buy"
  ) {
    buyPlayerTitle.textContent = `Buy Player`;
    currentClub.playerInitials[0].push(playerInitBuy.value);
    hideBuyPlayerAmttxt.style.display = "block";
    playerInitialsLabel.style.display = "none";
    hideBuyPlayerAmt.style.display = "block";
    playerInitBuy.style.display = "none";
    clubs.forEach(function (value) {
      if (
        (value.name !== currentClub.name &&
          value.counter === currentClub.counter &&
          value.playerInitials[0].includes(playerInitBuy.value)) ||
        (value.name !== currentClub.name &&
          value.counter > currentClub.counter &&
          value.playerInitials[0].includes(playerInitBuy.value))
      ) {
        buying(value);
      }
    });
  } else {
    buyPlayerTitle.textContent = `Player selection unsuccessfull. Please try again`;
    playerInitialsBuy.value = "";
  }
});

innerBuyPlayerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const playerBuyInit = playerInitialsBuy;
  clubs.forEach(function (value) {
    if (
      value.name !== currentClub.name &&
      value.counter > currentClub.counter &&
      value.playerInitials[0].includes(playerBuyInit.value)
    ) {
      finalisePurchaseUpdateUI();
    }
    if (
      value.name !== currentClub.name &&
      value.counter === currentClub.counter &&
      value.playerInitials[0].includes(playerBuyInit.value)
    ) {
      finalisePurchaseUpdateUI();
    }
  });
});
let sorted = false;
sortBtn.addEventListener("click", function (e) {
  e.preventDefault();
  displaytransferCost(currentClub.transferCost, !sorted);
  // document.querySelector(".sortContent").textContent = `(by Date)`;
  sorted = !sorted;
  clearInterval(timer);
  timer = startLogoutTimer();
});
function buying(value) {
  const myIndex = value.playerInitials[0].indexOf(playerInitialsBuy.value);
  playersAvailable.textContent = value.players[myIndex]; //CHRISTIAN PULISIC
  playerXfrom.textContent = value.name; //FROM LIVERPOOL FOOTBALL CLUB
  buyPlayerOptns.style.display = "none";
  innerBuyPlayerBtn.style.display = "block";
  buyPlayerX.style.display = "none";
  playerXfrom.style.display = "inline";
}
function finalisePurchaseUpdateUI() {
  if (hideBuyPlayerAmt.value > 0) {
    buyPlayerTitle.textContent = `Buy Player`;
    // console.log(`we are buying FROM ${playerXfrom.textContent}`);
    const innerArr = playerXfrom.textContent;
    let innerArrNew = innerArr.split(",");
    const brandNew = playersAvailable.textContent;
    // console.log(`the array we are buying from is ${innerArrNew}`);
    clubs.forEach(function (value) {
      if (value.name === innerArrNew[0]) {
        currentClub.transferCost.push(-hideBuyPlayerAmt.value);
        value.transferCost.push(+hideBuyPlayerAmt.value);
        currentClub.players.push(brandNew);
        value.players.push(brandNew);
        currentClub.transferDates.push(new Date().toISOString());
        value.transferDates.push(new Date().toISOString());
        //BELOW WE NEED TO PUSH PLAYER INITIALS TO CURRENT CLUB
        //CRISTIAN PULISIC VALUE
        //playersAvailable.textContent
        //WE ALSO NEED TO PUSH TO THE ARR OF SELL PLAYER
        const returnIndex = currentClub.players.findIndex(function (value) {
          return value === brandNew;
        });
        currentClub.playerInitials[0].push(
          currentClub.playerInitials[0][returnIndex]
        );
        // currentClub.playerInitials[0].push(
        //   currentClub.playerInitials[0][returnIndex]
        // );
        //why are we doing the above twice? - revisit PEWDIEPIE
        value.playerInitials[0].push(
          currentClub.playerInitials[0][returnIndex]
        );
        //UPDATE UI
        alert(`Success!! ${brandNew} has been bought from ${value.name}`);
        // brandNew.textContent = `Available players:`;
        playersAvailable.textContent = `Available players:`;
        playerInitialsLabel.style.display = "inline";
        document.querySelector(".form--label--playerAmount").style.display =
          "none";
        buyPlayerOptns.style.display = "inline";
        playerXfrom.style.display = "none";
        hideBuyPlayerAmt.style.display = "none";

        playerInitialsBuy.style.display = "inline";
        // playerXfrom.style.display = "block";
        buyPlayerX.style.display = "inline";
        innerBuyPlayerBtn.style.display = "none";
        updateUI(currentClub);
        //timer - start
        clearInterval(timer);
        timer = startLogoutTimer();
        //timer - end
        let arrayAB = playerInitialsBuy.value;
        let arrABNew = arrayAB.split(",");
        let sellPlayerArr = sellPlayerOptns.textContent;
        let sellPlayerArrNew = sellPlayerArr.split(",");
        sellPlayerArrNew.push(arrABNew[0]);
        if (sellPlayerArrNew[0] === `No players available to sell`) {
          sellPlayerArrNew.shift();
        }
        sellPlayerOptns.textContent = sellPlayerArrNew;
        //END OF SELLPLAYER UPDATE

        const finalArr = document.querySelector(
          ".player--buyOptions"
        ).textContent;
        let finalArrNew = finalArr.split(",");

        let c = finalArrNew.indexOf(playerInitialsBuy.value);
        if (c > -1) {
          finalArrNew.splice(c, 1);
        }
        buyPlayerOptns.textContent = finalArrNew;
        if (finalArrNew.length === 0) {
          buyPlayerOptns.textContent = `There are no more players to buy`;
        }
        hideBuyPlayerAmt.value = playerInitialsBuy.value = "";
      }
    });
  } else {
    // buyPlayerTitle.textContent = `Amount cannot be less than or equal to 0`;
    alert(`Amount cannot be less than or equal to 0. Try again`);
    clearInterval(timer);
    timer = startLogoutTimer();
  }
  //audit end here
}
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = "";
});
