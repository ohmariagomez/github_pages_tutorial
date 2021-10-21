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
    <title>Quiz</title>
    <link rel="stylesheet" href="maria.css">
</head>
<body>
    <div id="container">
        <div id="hello" onClick= "beginQuiz()">Hello!</div>
        <div id="maria_quiz" style="display: none">
            <div id="goal-statement">My goal is to...</div>
            <div id="question"></div>
            <div id="choices">
                <button class="choice" id="A" onclick="checkAnswer('A')"></button>
                <button class="choice" id="B" onclick="checkAnswer('B')"></button>
            </div>
    </div>
    <script src="maria.js"></script>
</body>
</html>
{:/}
