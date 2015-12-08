// YOUR CODE HERE:
var app = {
  server: 'https://api.parse.com/1/classes/chatterbox'
};
var client = {
  friends: []
};

app.init = function() {
  $('.username').on('click', function() {
    //this === element that was clicked
    app.addFriend($(this).text());
  });

};

app.send = function(message) {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: app.server,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function(data) {
      console.log('chatterbox: Message sent. Data: ', data);
    },
    error: function(data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message. Error: ', data);
    }
  });
};

app.fetch = function() {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: app.server,
    type: 'GET',
    contentType: 'application/json',
    success: function(data) {
      console.log('Fetched data', data);
    },
    error: function(data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('Fetch failed', data);
    }
  });
};

app.clearMessages = function() {
  $('#chats').empty();
};

app.addMessage = function(message) {
  $('#chats')
    .append("<div class='room'><span class='username'>" +
      message.username + "</span><span class='message'>" +
      message.message + "</span></div>");
  //addMessage({username: 'song', message: 'hi', roomname: 'lobby'})
  //<p class='roomid'><span class='username'>song</span> <span class='message'>hi</span></p>
};

app.addRoom = function(room) {
  $('#roomSelect').append('<div>' + room + '</div>');
};

app.addFriend = function(friend) {
  if (client.friends.indexOf(friend) === -1) {
    client.friends.push(friend);
  }
};

app.handleSubmit = function() {
  //build the message object
  //username
  //message -> $('#message').text()
  //roomname

  //app.send(message);
};
