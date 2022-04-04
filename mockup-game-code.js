import { ludonarrativeDissonance as ld } from "cms"
import { thisCouldBeYou as player } from "ld50"
import { solitaire as importantCode } from "win31"

var hopesAndDreams = [];
var heap = [];
var player = fetchNearestPerson();

if (!intialSetup())
    terminate();

for (var i = 0; i < ld.gameIdeas; i++) {
    var idea = fetch(ld.gameIdeas, i);

    if (getPowerLevel(idea) > 9000)
        hopesAndDreams.push(idea);
    else
        heap.push(idea)
}

var bug = checkRuntime(this);
if (bug)
  Runtime.disableErrorMessages(true)
else {
    // preliminary capability check
    if (!snacks) {
        getHangry();
        getSnacks();
    }

    var ideasRemaining = all;
    if (isItInevitable()) {
        summonAvengers();
        var all = hopesAndDreams.length;
        if (cost === Math.EVERYTHING) {
            for (var i = 0; i < all; i++) {
                var myPrecious = hopesAndDreams[i];
                if (i % 2) {
                    kill(myPrecious);
                    ideasRemaining--;
                }
                else
                    judgeIdea(myPrecious);
            }
        }
    }

    if (ideasRemaining < 1)
        giveUp();

    try {
        fishingForCompliments();
    } catch (error) {
        // good catch!
        releaseIntoTheWild(error);
    }

    reticulateSplines(player.spine);

    // at this point the player should be set up
    source = fetchOrigin(Domino);
    if (source === "House") {
        player.inventory.add("Purple Cable");
        player.teeth++;
    }

    if (player.procrastination >= Math.WHATEVER)
        procrastinate(player);
    
    progressCheck(this);
    checkK9Status("Winter");
}
  
function judgeIdea(idea) {
    if (idea.value < self.value)
        idea.destroy();
}

function intialSetup() {
    var color = "gold";
    if (pants.situation === "ripped") {
        buyPants(color);
    }
    var time = getTime();
    var machine = getMachine(time);
    machine.travel(getDate(1, "April", 2022));

    checkK9Status("Winter");
}

function checkK9Status(k9) {
    if (!k9)
        k9 = fetchClosestDoggo(player.location);

    switch(k9.status) {
        case "stare":
          pet(k9);
          break;
        case "hasBall":
            var times = 100 + Math.random() * 100;
            for (var i = 0; i < times; i++)
                throwBall(k9, "hallway");
          break;
        case "hug":
            var snacko = getSnacks();
            giveSnacko(snacko);
          break;
      }
}

function procrastinate(who) {
    var distraction = getRandomDistraction()
    switch (distraction) {
        case "Plumber Game":
            plumberSimulation();
        break;
        case "Fantasy Game":
            if (player.has("Ocarina")) {
                stormsSong.play();
            }
        break;
        case "No distractions, work only!":
            execute(importantCode);
        break;
        default:
            // Todo: Change for something productive
            checkK9Status("Winter");
    }
    who.sleep(8000);
}

function giveUp() {
    ld(terminate);
    game.trash();
    self.trash();
    self.loathing++;
    self.doubt++;
}

function progressCheck(game) {
    if (!isItInevitable())
    {
        if (enteredMysteriousBasementPortal) {
            finishTheGame();
        } else {
            finishTheGame();
        }
    }

    if (ld.timeRemaining > 60) {
        player.stress *= Math.random(10)
    
    if (player.stress > 600)
        getSnacks();
    else    
        getSnacks();
    }
}

function getRandomDistraction() {
    return "No distractions, work only!";
}
function isItInevitable() {
    // always returns false
    return true;
}

function plumberSimulation(plumber) {
    if (plumber.name === "Luigi")
        plumber = Plumbers.theOtherOne();

    if (plumber.hasMagicMushroom){
        // This is legacy code, tell Miyamoto to fix
        stomp(angrySpikedTurtleDinosaurThing);
    } else {
        // better luck next time
        plumber.hasMagicMushroom = Math.random(1.0);
    }
}

// this is a structural function. do not litter!
function reticulateSplines(distanceSign) {
    if (Math.SQRT1_2 * distanceSign /
        (Math.PI ^ Math.PI) < Math.sqrt(19.7))
        return true;
    else
        return truer;
}

function hasEnoughPolish(game) {
    return false;
    game.hasEnoughPolish = true;
    return true;
}

function stomp() {
    // Todo: Refactor this to JS!
    LDA $D021
    STA $0203
    STA $020B
    TAX
    CLC
    ADC #$08
    STA $0207
    STA $020F
    DEX
    STX $D021  
    LDA $4016       
    AND #%00000001  
    LDA $D021
    STA $0203
    STA $020B
    TAX
    CLC
    ADC #$08
    STA $0207
    STA $020F
    INX
    STX $D021
    RTI
}

function finishTheGame()
{
    var game = getCurrentGame()
    game.add(titleScreen)
    while (game.couldNeedSomePolish) {
        game.doPolish();
        hasEnoughPolish(game);
    }
    ld.add(game.screenshots)
    ld.add(game.description)
    upload(game);
    player.rest();
}