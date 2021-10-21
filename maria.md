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
        <div id="hello" onClick= "beginQuiz()">Hello!</div>
        <div id="maria_quiz" style="display: none">
            <div id="statement">Some of my favorite things are...</div>
            <div id="choices">
                <button class="choice" id="A" onclick="checkAnswer('A')"></button>
                <button class="choice" id="B" onclick="checkAnswer('B')"></button>
            </div>
    </div>
    <script src="maria.js"></script>
</body>
</html>
{:/}
