---
layout: ../../layouts/MarkdownPostLayout/index.astro
title: "Vibe Coding and Epicycles"
pubDate: 2026-09-01
description: "How LLM-based development crashes after launch"
author: "Scott Griffith"

tags: ["AI", "LLM", "Engineering culture"]
---

## Pre-Launch Checks

This is an essay about the most common failure mode of LLM tooling in software engineering that I'm currently seeing. But, I find that it's useful to state clearly where I'm coming from. So hi, I'm Scott. I'm a Senior Software Engineer who has a bit of a unique background in that I'm not a Computer Science or Math Major. I do come from a technical background but it's Theatrical Lighting Technology. I started at an in-person coding bootcamp on February 24th, 2020 and March 13th, 2020 was the day NYC shut down and we went fully remote. At that point, going back to working in theater was no longer an option, so I ran with it.

I kept my head down during the pandemic, and focused on learning as much as I could. I found a penchant for front-end engineering since I have a bit of an eye for design and have grown to understand complex technical systems. Seriously, if you want a crash course in how to build complex and well-structured systems, become a theatrical tech and haul miles of cable. Stand on top of a ladder after carrying equipment up that ladder and hang it in the correct spot. Work around the pipe nobody noted on the plot. Software is malleable, hardware isn't, and coming home sore from work made me appreciate Master Electricians who had a good plan.

As an engineer, I've been fortunate to be continuously employed since August 2020, surviving layoffs and acquisitions, changing work cultures, much higher interest rates, and a tech industry that's chased every fad trying to recapture the \>10x growth of the post-iPhone gold-rush.

Which brings me to Language Learning Model (LLM) coding tools, also known as AI. Which I use most days a week in a professional capacity and pretty much not at all outside work. If it matters to you, I did not use LLMs in writing this. Just pure millennial college student essay skills.

This is the point at which I will either lose you and am labeled as a "vibe-coder wannabe" or you'll take me seriously as an "actual engineer who gets it." Maybe something else. AI/LLM discourse is red-hot for a variety of reasons. And I don't think either category will fully claim me after this, but hey, having an opinion is a surefire way to be at least partially if not completely wrong.

I get both sides of this, truly I do. I understand that these tools are not neutral. That there are ethical concerns with stealing from authors, actors, artists, and filmmakers only to then displace those folks. For all of the talk about Universal Basic Income among folks in Silicon Valley, I certainly have not seen a concerted effort to make that happen that passes the test of "are you actually trying or just offloading this problem on someone else?"

I also think LLM tool usage for coding **can** be ethical, assuming clean energy usage, being trained on open-source code, and with fairly compensated labelers. None of these are givens, but they are actually possible for coding tools compared with tools that produce art. Software, somewhat uniquely, has a huge training set that engineers freely put on the internet and allowed people to use and remix. There are different attitudes about fair-use with code than with most art, partially because Software Engineers have been compensated well enough not to be super precious about it. For an author, a widely pirated book can be the difference between a comfortable life as an author and waiting tables to earn a living while still writing on the side. On the flip side, most of the software I've written is for companies in the insurance industry. It's probably not the sole way I wish to be remembered when I die. If someone were to use and extend it, I'm pretty ok with that, assuming I continue to have a reasonable standard of living.

I am not going to pretend that I've fully wrestled with all of this as there is so much to sift through. I'm good friends with both "Never-use-AI" and "Always-use-AI" developers. I've seen how AI "slop" has devastated artists. As someone who's thought a lot about lighting design, three dimensional space, and aesthetics, AI art grates on me for many hard-to-articulate ways that center around the uncanny valley, impossible geometries, and an incomplete understanding of how lighting works. I'm also fully aware it could devastate Software Engineers in much the same way and create, instead of a Golden Age, a kind of Golden Pyrite Age instead.

But I also live in a society brimming with contradictions and am trying to do the best I can within it. This means I may not measure up to your yardstick of what's the right thing to do here is. It may also mean I'm over-concerned by someone else's litmus.

Anyway, this isn't about the morality of these tools, which, again, I absolutely do think we should weigh. This is about how these tools fail or succeed in a software engineering context. And to do that I want to take a slight detour and talk about the history of astronomy and cosmology.

## Liftoff

When I was a kid, I wanted to be an astronaut. I wanted to be the first person on Mars. As I got older, I realized that actually, I'm prone to motion sickness and don't have the right temperament to enjoy a multi-month mission to a planet without a breathable atmosphere, much less a particularly bumpy car ride. And when Columbia disintegrated on re-entry, the potential downsides were made even more abundantly clear.

That doesn't mean I don't love space. Kerbal Space Program introduced me to a tactile understanding of orbital mechanics and I have done pretty much everything in the vanilla version of the game over the course of roughly 1000 hours. Tylo and Eve? Been there and back, crewed. I adore movies or books in the vein of The Martian, Interstellar, or Apollo 13, which may explain why I structured this essay this way.

To me, astronautics, astronomy, and cosmology are united in the act of trying to understand the universe, taking on some of the gnarliest engineering challenges that we know about, all while trying to do more than any one of us alone can do. It's also a vivid example of how the Scientific Method has allowed us to better understand the universe and our place in it.

## Initial Climb

This brings me to epicycles, summarized to the best of my ability and greatly sanitized of much turmoil, anguish, churn, religion, and politics. Also, it is oversimplified and Eurocentric, as an added bonus.

> _Essentially, all models are wrong, but some are useful._ \- George Box

Many learned and intelligent folks used to believe the Earth was the center of the Solar System. This made a bit of sense. We could see these celestial bodies we didn't fully understand that the Greeks called planets or "wanderers." Where the background field of stars seemed to move with relative uniformity, planets did not and moved within it. We reasoned about this a bit, and hypothesized, wrongly, that we were the center of the Universe, the Sun and Moon and Planets moved around us, and beyond that hung the field of stars at some unknown distance and in some unknown composition.

As we started to measure the courses of the planets with more precision, it became abundantly clear, even in the Greek and Roman Empires, that fixed orbits around Earth could not fully explain the movements and timings of the planets, assuming that planets moved at a fixed speed. So astronomers started adding cycles on cycles, or epicycles. The idea was "this celestial body doesn't just orbit us; it orbits a point that orbits us." And without an understanding of gravity, that wasn't out of the realm of possibility.

At a certain point, the astronomers realized the fundamental assumption that Earth was the center of the Solar System must be wrong, glossing past how many different geocentric models there were and how strenuous and potentially heretical the debate was. By this point, some models had epicycles on epicycles on epicycles. Moving to a Heliocentric model of the Solar System and a Newtonian understanding of gravity did something incredibly powerful. The orbits of planets could now be more correctly described as simple circles at first and eventually elliptical.

Epicycles vanished. The regularity of planets was well understood. The Newtonian and Heliocentric model was much more correct, predictable, and elegant.

## Orbital Insertion

Like I said previously, I entered the software industry at a weird time. The Pandemic happened but software was going to be ok; we could work remotely and more people were using the internet than ever before. The software industry could grow while other industries struggled. Many software companies reached all time high valuations at this time and wanted to continue to grow. They needed entry-level engineers, some of whom would go on to become senior engineers and higher.

At this time, the software industry hired so many folks like me. We didn't have all of the experience yet, but I was lucky to be around some incredible mentors who thought deeply and carefully about how they built things. By 2022, many of these companies would see plummeting valuations and that golden opportunity to get in the front door for folks like me would vanish, but from August 2020 to August 2024, I poured myself into learning Software Engineering and went from a Junior UI Developer to a Senior Software Engineer. In hindsight, I realize just how absurdly lucky and privileged I was.

This is also pre-LLM tools. I had 4 years in which I learned through controlled and repeated failures, frequently bounded by those great mentors who took the time to teach me. And so, I learned to write RFCs, reason with others in meetings, break down and prototype work, code better, write tests, and learn how to learn. Mentors sat with me when I failed and helped me understand what had gone wrong. There were systems in place to train me up, and most failure happened well before something went out to a customer. I tried to learn as much as I could and it served me well.

If I had to pick the single most important thing I learned, it was how Conceptual, Logical, and Physical models worked in an engineering setting and how to derive a spec from it. The basic and oversimplified premise of this way of thinking is if you can reason about how the system works at the

1. **Conceptual Level** (this is a system for users to fill out industry-standard forms), you can move to the
2. **Logical Level** (A single User, of many, accesses a single Form Template from multiple Form Templates. That Form Template is used to seed a single Form Session), and then move to the
3. **Physical Level** (the Postgres database table that complies with this model and stores form sessions must be able to reference a single foreign key for each form template. That foreign key is a string representation of that template's unique ID, stored as a row on the form\_session table)

This certainly is not magical\! In fact, it's very boring and pretty obvious. Anytime someone goes "you're a Software Engineer, you must be smart\!" I die a little on the inside. But, also, a lot of engineers don't really do this, or at least not to this rigor. They gloss past an explainable version of the model they're building from. They don't know the bounds of that model. Sometimes, that's fine\! Product wants you to change the color of a button. To do that work, I generally do not have to know the entire HTML \<button\> element spec in that instant to do that work. But other times, you deal with enough complexity that taking the time to do this exercise is deeply useful.

When you undertake this exercise or exercises like it, you can create agreement and a spec, either explicitly or subconsciously. The Product Team can agree with the direction or point out flaws. Other engineers can reason about the bounds and offer advice and pointers. And that gives you a stable base to build from.

The best engineers I know understand the structure of what they're building. The worst engineers I know choose not to, consciously or subconsciously.

## Stable Orbit

For a long time, this was roughly how you created Senior Engineers. You teach people to care and think and model before or while they build. A more-senior engineer could read a more-junior engineer's code and see how they thought. They could see if that junior engineer understood the underlying model that the code was following or approximating. And since code generation was largely limited by typing speed and experience, it was easier to understand changes.

Sometimes those engineers introduced complications or technical debt. Sometimes it was justified: "Our model simply has never dealt with this before and currently can't handle it." Sometimes it wasn't: "Actually, it does, and you can find an example of it over here, I can see how that wasn't obvious though."

And to be clear, not all technical debt is bad. Sometimes, we intentionally take on technical debt because we need to test a hypothesis. Sometimes, the CFO says "if we don't ship this product, we're in trouble." My point is, technical debt can be a reasonable decision so long as it is an intentional decision.

Additionally, sometimes we shift the model. A good engineer knows when to follow the existing model, when to modify the existing model, and when to migrate to a newer model.

## Stirring the Tanks

LLMs are not intelligent or rational in the way humans are intelligent or rational. This is not to say that LLMs are inherently useless. Plenty of software tooling is not "intelligent," but it is useful.

LLMs pattern-match over large datasets and pick the most likely and cohesive match. When they write code, they are bound by inertia, the current patterns in the codebase, and LLM guardrails and prompts. They write the code that works, typically in an additive way. Frequently this means they add complication or technical debt. And if you have a reasonable underlying model, that can be ok.

But there's two common and fundamental assumptions that I see surface time and time again when trying to understand code:

1. That the model underlying the code is right or even just reasonably useful.
2. That there's even a model there\!

Pre-LLMs, this was generally pretty obvious. If a Junior Engineer added an epicycle-like structure or an entirely new model, that was a signal that a Senior Engineer could generally pick up on.

LLMs change the equation. At first, it's just adding one epicycle. Generally, this is fine. One epicycle probably won't ruin all of the other orbits. Besides, we're all responsible here, right? Right?

## Houston, we have a problem

When these tools fail, it's largely because no one has taken the time to understand the underlying model. Codex spit out all of this code\! So much code\! And it has comments and tests\! It looks so good and the tests pass. Surely, there must be a good model underlying all of this, right?\! How could there not be?

I have personally found that when you care about how code is structured, it's easy to assume other people care just as much how code is structured. I find that talented and caring individuals tend to assume everyone around them is as talented and caring as they are. And it can come as a rude awakening when someone doesn't just have a different idea of what the model is or should be, but doesn't care at all.

We, as engineers, frequently disagree about what the model should be. Which is good\! Disagreement, even passionate disagreement, is not a failing. Especially when it's between a more junior and more senior engineer. It's a great learning opportunity for both. Fresh sets of eyes see new possibilities, older sets of eyes see previous failure models. You are never so senior that the why should be "because I told you so." What makes a model good is that it's possible to understand how it works and why it exists, which is not an implicit quality.

LLMs can approximate an understanding of a model, if you guide it to a spec or you prompt it "well enough." But even then, epicycle-like cruft is cumulative. Once one epicycle exists, the next one becomes easier to rationalize. Once ten epicycles exist, the existence of epicycles is a pattern, if not the pattern.

The inertial weight of all of the epicycles grows, and the LLM tooling reads that as context, unable to do anything but continue.

In the hands of engineers who do not care beyond "Claude, fix this data flow," LLMs create things that provisionally work, but over time become near-impossible to extend. The model can't change because there's no model there or the model is being ignored. It's just layer upon layer of epicycles all the way down.

At that point the code's functionality ruptures spectacularly and no amount of additive code can make it correct. The rate at which you can ship changes goes from "look at this five thousand line PR I generated in a morning" to "why do we have five thousand lines here that don't serve us and how can we clean this up?"

## The Lunar Excursion Model as Lifeboat

At this point, we, as an industry, are in the section of Apollo 13 where we've piled into the Lunar Lander in an attempt to make it home alive. We're frustratingly surrounded by tools that have worked twice before during Apollo 11 and Apollo 12, but they're not fully adequate for this new failure mode.

To me, LLM Tooling has made what I think of as coding best practices more essential, not less. Human error and blame isn't a useful way to think about coding or industry safety. Nor is it a pathway out of AI slop and Vibe Coding.

We are never going to be able to fire enough of the "dumb" or "lazy" or "misguided" engineers to create safe systems. And creating a blameful culture is a really good way to make it so no-one admits when they screw up. The people who survive these cultures make plenty of mistakes, they just cover them up and politic better or, in the pathological case, find ways to shift blame.

As LLMs make it easy to increase our output, these qualities make an engineer more, not less valuable:

- The ability to understand a problem without immediately jumping to the implementation
- The ability to write a spec, divide work into tickets, and structure work into reviewable and understandable chunks
- The ability to write and reason about code, even if an LLM is writing the code.

These cultural best practices particularly grow in value:

- A Blameless and Generative culture
- Design documents with healthy debate and engagement
- Product briefs that clearly state the goals of the product
- Read access to those documents, or even better, commenting enabled for everyone that touches this system
- Pairing and mentorship
- Teaching systems design, not just hiring for it.

These LLM practices can help make a workplace more intentional in its AI usage

- LLM specific context that is automatically triggered in particular directories and file types that state conventions
- LLM skills that have deliberate, precise criteria for success.
- Hooks that trigger specific instructions based on specific criteria

Additionally important are automated systems that leverage CI/CD and automated testing.

Our front-end pipeline does not publish the front-ends unless:

- Dependencies are deduped
- Build is successful
- Strict Typescript type-checking passes with no any allowed outside of exceptional circumstances
- oxlint passes with as many rules as I can throw at it
- oxfmt passes
- all vitest tests pass
- An automated Greptile review is triggered
- PRs are approved by a reviewer with write access
- PRs are merged into a trunk branch

Additionally, we use observability tools with traces so that when, not if, something goes wrong, we can investigate quickly. And our pipeline pings Slack when there's a failure.

I'm under no illusion that this is a silver bullet and foolproof. It's the swiss cheese model at best. I've still shipped bugs with these guardrails and guardrails like them. I know I'll ship them again. But at least I can respond quickly and precisely when it does happen. At least when bugs happen, it's generally for a novel, complex ,or subtle reason as opposed to a facepalmingly obvious reason.

But one person on a team that cares cannot compensate for a team that does not. Guardrails cannot make up for deliberate lack of care. We need to be sober and clear-eyed about what we're building, all of us. LLMs have made us faster, but without the care to compensate, we're creating bigger problems than ever before.

Additionally, I don't think LLM usage can or should replace any of these things. And I think the crux of what I'm seeing with LLMs is that they aren't so capable that the need for a pipeline of new talent goes away. If this is true at these introductory prices now, I think it will be even more true when LLM tools become much more expensive, just like every subscription has.

## Atmospheric re-entry

The core business problem with all of these guardrails is they aren't instantly profitable and the promise of LLMs is you can give engineers these tools and they **absolutely will become more productive today, today, today** (and if they don't they're using it wrong). And, to be clear, that's not entirely false. Some engineers, given AI tooling, move much more quickly. But, to me, the hype has exceeded the benefits to the point that these tools are not popular or well-regarded outside of Software Engineering contexts, and we risk failing to learn how to use these tools.

Ironically, the closest thing to a killer use-case for LLM tooling that I've seen is gaining an understanding of an existing codebase. I frequently use Claude Code to figure out the chain from point A to point Z. And I've found this ability for an LLM to survey even more valuable when multiple people have vibe-coded without much care for sustainable patterns. LLMs are really good at pattern matching and can look in a lot of places at once. I may not be able to reason about all of it, but I can at least audit it. From that audit, I can design what I think the system should be and see what the compensating epicycles are.

I'm not entirely unconvinced that this isn't a slot-machine-like dopamine-inducing flow. It feels good to correct and iterate. The LLM being a little bit dumb is kind of a feature, at least as far as my ego is concerned. I also think this is part of what makes LLMs particularly appealing to folks in positions of power. When your job is telling people what to do and correcting and clarifying, LLMs offer an easy extension of those behaviors.

## Splashdown

This is a lot of words. Hopefully by the time I've posted this, about a third of them will be removed. I don't blog regularly, though maybe I should.

I want to reiterate that I'm just one person. This resonated with me and maybe it will resonate with you. If it doesn't, I hope you can articulate to yourself why it doesn't without asking ChatGPT. I hope you can explain and refine my model, or present compelling data to the contrary, or create your own model. I hope you can reason and not just repeat.

I truly believe that the biggest differentiator in productively using any tool or technology is trying our hardest to reason about them, no matter how complex.

I haven't made it this far by stinking my head in the sand or refusing to engage with these thorny problems. And if we consistently treat this as "someone else's problem," then I don't see us making it home in one piece. And on the flip side, if we find better ways of working **with** LLMs or better ways **than** LLMs, then we may learn to build even better, more precise, increasingly wondrous things.
