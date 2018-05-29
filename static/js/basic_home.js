$(function() {
  $(".typed").typed({
    strings: [
      "stat rish.human<br/>" + 
      "><span class='caret'>$</span> general: 22/04/1995, Indian. 1.78m.<br/> ^1" +
      "><span class='caret'>$</span> work: android, python, graphics, computer vision.<br/> ^100" +
      "><span class='caret'>$</span> hobbies: football, solo travel, blogging<br/> ^300" +
      "><span class='caret'>$</span> alias: crearo <br/>" +
      "><span class='caret'>$</span> highlight: <a href='https://play.google.com/store/apps/details?id=rish.crearo.lifehacks'>app with >500K installs</a> <br/>" +
      "><span class='caret'>$</span> job: <a href='www.tonboimaging.com'>Tonbo Imaging</a><br/> ^100" +
      "><span class='caret'>$</span> <a href='/timeline'>timeline</a> <a href='www.github.com/crearo'>github</a> <a href='http://in.linkedin.com/in/bhardwajrish/''>linkedin</a><br/>"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 1,
    startDelay: 200,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: $('.message form').show()
  });
  $('.message form').hide()
});