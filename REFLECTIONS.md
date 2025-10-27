1. Share one aspect of building this project you found challenging and how you overcame it.

I was having trouble using `prompt-sync`,the documentation was hard to understand and there are some features that come auto-enabled with it that I didn't want to use. It took a bit of googling but I realized that adding a second pair of `()` when importing it disabled all the extra features. On this same note, I was getting an error while using `^C` to exit the program, and I found out I have to add `{signint: true}` to make it work.

2. Share one technical concept that you gained a deeper understanding of through building this project. Explain that concept in simple terms and explain how it is used in your project.

Using arrays of objects to store data with similar properties while being able to access an index number. Using an array of objects to store the quiz questions was very helpful, it made easy to iterate through the question 1 by 1, while still being able to access all of their properties.
