'use strict';

// describe('javascript', function() {
  // beforeEach(function(){
  //   turn = 0;
  // });

  // describe( "#attachListeners", function() {
  //   it("should attach event listeners which call your turn function when someone clicks on a square", function() {
  //     setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>');
  //     attachListeners();
  //     var selector = '[data-x="0"][data-y="0"]';
  //     spyOn(window, "doTurn");
  //     $(selector).click();
  //     expect(window.doTurn).toHaveBeenCalled();
  //   });     
  // });

  // describe( "#doTurn", function() {
  //   var myEvent;
  //   beforeEach(function(){
  //     myEvent = $('[data-x="0"][data-y="0"]').click();
  //   });

  //   it("should increment turn and call on `checkWinner()`, `updateState()`", function() {
  //     setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table><div id="message"></div><button id="lastGame">Show Me Last Games Results!</button><div id="lastGameBox"></div></body>');
  //     attachListeners();
  //     spyOn(window, "checkWinner");
  //     spyOn(window, "updateState");
  //     doTurn(myEvent);
  //     expect(turn).toEqual(1);
  //     expect(window.updateState).toHaveBeenCalled;
  //     expect(window.checkWinner).toHaveBeenCalled;
  //   });     
  // });

  // describe( "#player", function() {
  //   it("should return the mark of the current player when player is X", function() {
  //     expect(player()).toEqual("X");
  //   });     
  //   it("should return the mark of the current player when player is O", function() {
  //     turn = 1;
  //     expect(player()).toEqual("O");
  //   });
  // });

  // describe( "#updateState", function() {
  //   it("adds the return value of `player()` to the clicked `td` on the board", function() {
  //     setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>');
  //     attachListeners();
  //     var selector = '[data-x="0"][data-y="0"]';
  //     $(selector).click();
  //     expect($(selector).html()).toEqual("X");
  //   }); 

  //   it("calls on `player()`", function() {
  //     setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>');
  //     attachListeners();
  //     spyOn(window, "player");
  //     var selector = '[data-x="1"][data-y="0"]';
  //     $(selector).click();
  //     expect(window.player).toHaveBeenCalled();
  //   });     
  // });

  // describe( "#message", function() {
  //   it("adds the string it's passed to the div with an id of message", function() {
  //     setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table><div id="message"></div></body>');
  //     attachListeners();
  //     var string = "Player X Won!";
  //     message(string);
  //     expect($("#message").html()).toEqual(string);
  //   });     
  // });

  // describe( "#checkWinner", function() {
  //   it("returns false if there is no winning combo on the board", function() {
  //     setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>');
  //     attachListeners()
  //     spyOn(window, "updateState");
  //     var selector = '[data-x="0"][data-y="0"]'
  //     $(selector).click()
  //     var selector = '[data-x="0"][data-y="1"]'
  //     $(selector).click()
  //     expect(checkWinner()).toEqual(false)   
  //   });     

  //   it("calls on 'message' and passes it the string 'Player X Won!' when player X wins vertically", function() {
  //     setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>');
  //     attachListeners();
  //     spyOn(window, "message");
  //     $('[data-x="0"][data-y="0"]').click();
  //     $('[data-x="1"][data-y="0"]').click();
  //     $('[data-x="0"][data-y="1"]').click();
  //     $('[data-x="2"][data-y="0"]').click();
  //     $('[data-x="0"][data-y="2"]').click();
  //     // _X_|_O_|_O_
  //     // _X_|___|___
  //     //  X |   |   
  //     expect(window.message).toHaveBeenCalledWith("Player X Won!");
  //   });

  //   it("calls on 'message' and passes it the string 'Player X Won!' when player X wins diagonally", function() {
  //     setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>');
  //     attachListeners();
  //     spyOn(window, "message");
  //     $('[data-x="0"][data-y="0"]').click();
  //     $('[data-x="1"][data-y="0"]').click();
  //     $('[data-x="1"][data-y="1"]').click();
  //     $('[data-x="2"][data-y="0"]').click();
  //     $('[data-x="2"][data-y="2"]').click();
  //     // _X_|_O_|_O_
  //     // ___|_X_|___
  //     //    |   | X 
  //     expect(window.message).toHaveBeenCalledWith("Player X Won!"); 
  //   });
  // });

  // describe("when there is a tie", function() {
  //   it("calls on 'message' and passes it the string 'Tie game' when there is a tie", function() {
  //     setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table><div id="message"></div><button id="lastGame">Show Me Last Games Results!</button><div id="lastGameBox"></div></body>');
  //     attachListeners();
  //     spyOn(window, "message");
  //     $('[data-x="0"][data-y="0"]').click();
  //     $('[data-x="1"][data-y="1"]').click();
  //     $('[data-x="1"][data-y="2"]').click();
  //     $('[data-x="0"][data-y="1"]').click();
  //     $('[data-x="2"][data-y="1"]').click();
  //     $('[data-x="2"][data-y="2"]').click();
  //     $('[data-x="0"][data-y="2"]').click();
  //     $('[data-x="1"][data-y="0"]').click();
  //     $('[data-x="2"][data-y="0"]').click();
  //     // _X_|_O_|_X_
  //     // _O_|_O_|_X_
  //     //  X | X | O
  //     expect(window.message).toHaveBeenCalledWith("Tie game");
  //   });
  // });

  // describe("resetting the board", function() {

  //   it("resets the board and sets turn to zero when there is a winner", function() {
  //     setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table><div id="message"></div><button id="lastGame">Show Me Last Games Results!</button><div id="lastGameBox"></div></body>');
  //     attachListeners();
  //     $('[data-x="1"][data-y="2"]').click();
  //     $('[data-x="0"][data-y="0"]').click();
  //     $('[data-x="1"][data-y="0"]').click();
  //     $('[data-x="1"][data-y="1"]').click();
  //     $('[data-x="2"][data-y="0"]').click();
  //     $('[data-x="2"][data-y="2"]').click();
  //     // _O_|_X_|_X_
  //     // ___|_O_|___
  //     //    | X | O 
  //     expect($("#message").html()).toEqual("Player O Won!");
  //     // ___|___|___
  //     // ___|___|___
  //     //    |   |   
  //     expect(turn).toEqual(0);
  //     $("td").each(function() {
  //       expect($(this).html()).toEqual("")
  //     }); 
  //   });

  //   it("resets the board and sets turn to zero when there is a tie", function() {
  //     setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table><div id="message"></div><button id="lastGame">Show Me Last Games Results!</button><div id="lastGameBox"></div></body>');
  //     attachListeners();
  //     $('[data-x="0"][data-y="0"]').click();
  //     $('[data-x="1"][data-y="1"]').click();
  //     $('[data-x="1"][data-y="2"]').click();
  //     $('[data-x="0"][data-y="1"]').click();
  //     $('[data-x="2"][data-y="1"]').click();
  //     $('[data-x="2"][data-y="2"]').click();
  //     $('[data-x="0"][data-y="2"]').click();
  //     $('[data-x="1"][data-y="0"]').click();
  //     $('[data-x="2"][data-y="0"]').click();
  //     // _X_|_O_|_X_
  //     // _O_|_O_|_X_
  //     //  X | X | O 
  //     expect($("#message").html()).toEqual("Tie game");
  //     // ___|___|___
  //     // ___|___|___
  //     //    |   |   
  //     expect(turn).toEqual(0);
  //     $("td").each(function() {
  //       expect($(this).html()).toEqual("")
  //     });  
  //   });

  //   it("allows client to play multiple game", function() {
  //     setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table><div id="message"></div><button id="lastGame">Show Me Last Games Results!</button><div id="lastGameBox"></div></body>');
  //     attachListeners();
  //     $('[data-x="0"][data-y="0"]').click();
  //     $('[data-x="1"][data-y="1"]').click();
  //     $('[data-x="1"][data-y="2"]').click();
  //     $('[data-x="0"][data-y="1"]').click();
  //     $('[data-x="2"][data-y="1"]').click();
  //     $('[data-x="2"][data-y="2"]').click();
  //     $('[data-x="0"][data-y="2"]').click();
  //     $('[data-x="1"][data-y="0"]').click();
  //     $('[data-x="2"][data-y="0"]').click();
  //     // _X_|_O_|_X_
  //     // _O_|_O_|_X_
  //     //  X | X | O 
  //     expect($("#message").html()).toEqual("Tie game");
  //     // ___|___|___
  //     // ___|___|___
  //     //    |   |   
  //     expect(turn).toEqual(0);
  //     $("td").each(function() {
  //       expect($(this).html()).toEqual("")
  //     });
  //     $('[data-x="1"][data-y="2"]').click();
  //     $('[data-x="0"][data-y="0"]').click();
  //     $('[data-x="1"][data-y="0"]').click();
  //     $('[data-x="1"][data-y="1"]').click();
  //     $('[data-x="2"][data-y="0"]').click();
  //     $('[data-x="2"][data-y="2"]').click();
  //     // _O_|_X_|_X_
  //     // ___|_O_|___
  //     //    | X | O 
  //     expect($("#message").html()).toEqual("Player O Won!");
  //     // ___|___|___
  //     // ___|___|___
  //     //    |   |   
  //     expect(turn).toEqual(0);
  //     $("td").each(function() {
  //       expect($(this).html()).toEqual("")
  //     });
  //   });
  // });

  // describe( "#getMarks", function() {
  //   it("should grab all the marks on the board and put them in an array", function() {
  //     setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0">X</td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1">O</td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>');

  //     expect(getMarks()).toEqual(["X","","","O","","","","",""]);
  //   });     
  // });
 


describe('#getAllGames', function() {
  it("retrieve all the saved games and show them in the games div", function() {
    setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0">X</td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1">O</td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table><div id="games"></div><div id="message"></div><button id="save">Save Game</button><button id="previous">Show Previous Games</button></body>');
    jasmine.Ajax.withMock(function() {
      // spyOn(window, "getAllGames")
      // expect(window.getAllGames).not.toHaveBeenCalled();
      getAllGames();
      // var data = {
      //   game: {
      //     id:1,
      //     state: ["X","","","","","","","",""]
      //   }
      // }
      var data = {
        games: [{
          id:1,
          state: ["X","","","","","","","",""]
        }]
      }
      var response = {
        "status": 200, 
        "contentType": 'application/json',
        "responseText" : JSON.stringify(data)
      }
      jasmine.Ajax.requests.mostRecent().respondWith(response);
      expect($("#games").children().length).toEqual(1)
      // expect(window.getAllGames).toHaveBeenCalled();
      // expect(currentGame).toEqual(1)
    });
  });
  it("should update the currentGame and call getAllGames", function() {
    jasmine.Ajax.withMock(function() {
      // click a couple squares, click save
      // it should sent a POST
      // click save again and it should send a patch!
      // don't call the save method, click the buttons using jasmine jquery
      var request = jasmine.Ajax.requests.mostRecent();
      expect(request.url).toBe('/games');
      expect(request.method).toBe('POST');
    });
  });     
});
