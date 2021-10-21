---
title: Hi all, my name is <em>Maria</em>!
button-title: Maria
description: Let me tell you a bit about myself
layout: default
filename: maria
order: 2
github:
  is_project_page: false
---
### Who is Maria?

{::nomarkdown}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About Me</title>
    <link rel="stylesheet" href="maria.css">
</head>
<body>
    <div id="container">
        <div id="hello">Hello!</div>
        <div id="maria_quiz" style="display: block">
            <div id="statement">Some of my favorite things are...</div>
            <div id="responses">
              <div class = "response" id="A" onClick= "showGif('A')">Fenway</div>
              <div class = "response" id="B" onClick= "showGif('B')">Pasta</div>
              <div class = "response" id="C" onClick= "showGif('C')">Limes</div>
            </div>
    </div>
    <script src="maria.js"></script>
</body>
</html>
{:/}
