---
layout: /src/layouts/BlogLayout.astro
title: You Will Never Write Perfect Code
category: programming
published: 2026-02-24
---

As software developers, we constantly wonder whether the code we write is good. I mean, that is our jobs, right?
If you can't write perfectly readable, effortlessly maintainable, completely optimised code, what are you even doing?
Of course, these are completely unreasonable expectations to hold over any developer. There are a million factors 
involved with writing code: deadlines, engineering culture, existing tech debt, and so on. It is never just about
the developer and their code.

By most people's standards, I'm a fairly new developer. However, I feel like everything I learned is constantly being
challenged and rendered as outdated by newer and modern technologies and takes from web and game development.

> jQuery was the worst thing to ever be created.

> You're still using an OOP-based language in 2026?

> Client-side rendering is dead. Long live SSR.

> SSR was a mistake, what a security nightmare!

> Singletons are terrible, just inject your dependencies.

> jQuery was actually the best thing ever.

Trends come and go in software development (especially in frontend web dev). And even though there are many people who
have been coding longer than I have been alive, I feel like I've heard it all already. How can I write 'perfect' code
if the standards change every few months?

# Just Rewrite it in Rust
---

Ah yes, the age-old addage. Why even bother writing anything in any other language if Rust is already the gold standard?
I mean it's not like Rust rewrites have been responsible for [global outages that impact millions of users before](https://blog.cloudflare.com/18-november-2025-outage/#memory-preallocation).

I'm no [stranger to Rust](https://github.com/kam-zhan-yue/swirly-whirly), but I'm no expert either. It is a great language with 
great safeguards that help you write safer code. However, it is not a silver bullet.

When developers can simply call `unwrap()` instead of handling errors, call `.clone()` on everything imaginable, or 
slap a good ol' `Arc<Mutex<T>>` on any concurrency-related issue instead of asking, "how much of this really needs to be shared?",
I worry about the quality of anything 'rewritten in Rust'.

# Just Rewrite... it?
---

If you can't (or shouldn't) rewrite in Rust, maybe we should just refactor it? Yes, it's due for an uplift anyways.
I mean just look at it! Class-based React components scattered with `@ts-expect-errors` and a thousand `any` typecasts. 
There's gotta be an infinite render loop stuck between all these `componentDidUpdate` functions.

... what do you mean this is already the _**third iteration of this component**_?

That's right. Code is transient. Code that has been written will be rewritten with new standards. Code that you write now
will be deemed outdated and legacy in a few years. Code that will replace your code will be laughed at by developers in
ten year's time for being unoptimised and a representation of the pinnacle of poor practices.

Fuck it, do we just write everything in C?

I guess what I'm trying to say is ...

# Perfect Code Doesn't Exist
---

> We are human, thus we are flawed.

Perfect code doesn't exist because the people who write them, developers, are human.
A perfect developer doesn't exist. Everyone is limited by the knowledge they know, the languages and patterns they learn,
the skills and experience they acquire. No one knows everything, and we all make mistakes.

Do you remember the first time you forgot to increment the counter in a while loop?
The OOP project with several layers of inheritance and polymorphism that makes the [Habsburg family tree](https://en.wikipedia.org/wiki/Habsburg_family_tree) look somewhat comprehensible?
The webapp with thousands of npm dependencies that's just begging to be [consumed by a giant desert worm](https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem)?

Yeah, we've all been there before. And that's okay.

> We are flawed, thus we are human.

Code is beautiful because it is riddled with mistakes.
The best code is not that which emerges perfectly baked fresh out of the oven.
It is the code that we endlessly obsess over and iterate. Code that we look back on and realise we could have done better.
It is acknowledging that our code is trash so that we can move on and build better.
We don't truly learn unless we make mistakes.

I invite you to look back on the code you wrote five, or ten, years ago. What a piece of shit, ay?
But to be able to look back and acknowledge the gaps in your knowledge is a sign of self-growth.
You know better now, because you are a better developer.
And as much as you think you're an amazing developer know, I'm sure in five years time you won't think that at all.

# A Reflection
---
When I look back at code for the first game I made, a solo highschool project back in 2019, it makes me physically cringe.
For your entertainment, let's look at some code I wrote to randomly generate a map in a 4x4 grid.
The goal was to go from the bottom-up, creating a chain of rooms within that grid.
I made a naive function to plot the route in the grid, with ascending numbers in a 4x4 array, something like

```
10 9  0  0 // ends here
0  8  7  6
0  0  0  5
1  2  3  4 // starts here
```

For each room, I had to spawn a specific room type with an entrance and an exit and join them together. 
The starting room had no exit, so that needed a special room. Let's look at how I did that.

```csharp
    static string DetermineRoom(int[,] route, int row, int col, int maxRooms)
    //Purpose: Returns an appropriate string by checking what type of room it is (where the entrance and exit are)
    {
        string roomType = "";
        //Check if starting room
        if (route[row,col] == 1)
        {
            //If at left wall
            if (col == 0)
            {
                //If exit to right
                if (route[row,col + 1] == route[row,col] + 1)
                    roomType = "start_right";
                //If exit to up
                else if (route[row - 1,col] == route[row,col] + 1)
                    roomType = "start_up";
            }
            //If at right wall
            else if (col == route.GetLength(0) - 1)
            {
                //If exit to left
                if (route[row,col - 1] == route[row,col] + 1)
                    roomType = "start_left";
                //If exit to up
                else if (route[row - 1,col] == route[row,col] + 1)
                    roomType = "start_up";
            }
    // ...there are 163 lines in this function.
```
Ah yes, the brute force approach of checking. The code for checking the direction is duplicated for the start and non-start routes, by the way :).
I'm sure this won't be the cause of pain anywhere for the next 3 months of this project.

> Spoiler alert: it was.

No one will never say that is perfect code.
Of course, at the time I had no idea about graph traversal, or map generation algorithms like [wave function collapse](https://en.wikipedia.org/wiki/Wave_function_collapse).
I was a naive highschooler who wanted to make something fun with whatever knowledge he had.

However, it is because I know that it is not perfect that I can improve.
It is because I know there has to be a better way that I go and learn more things.
It is through writing imperfect code that we can continue the [Sisyphean task](https://en.wikipedia.org/wiki/Sisyphus) of achieving that which does not exist, perfect code.

Since then I've learned about procedural animation algorithms like [FABRIK](https://andreasaristidou.com/FABRIK), 
written [physically-based renderers](https://en.wikipedia.org/wiki/Physically_based_rendering) in OpenGL,
and applied frameworks like [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection) and [Entity Component System](https://en.wikipedia.org/wiki/Entity_component_system).


# A Realisation
---
And of course, the code I write today isn't perfect. Hell, I think the code I wrote just last month was pretty bad.
But the act of acknowledging that your code is not perfect means that you can still improve.
Among with the desire to learn, I believe that this is the most important trait to have as a developer, or a professional in any field.
Be self critical, be reflective. And never be complacent with how you are.

Look at the code that you've written and cringe at it.

Look at the code you are writing and find flaws in it.

Think of the code you will write and the opportunities in it.

You may never write perfect code, but eventually, you're gonna come pretty damn close.
