# Why debugging is important?


Debugging is the group of activities that software developers perform to fix a bug, so being a good
 debugger is a very important part of being a good developer.

### 3 reasons to consider debugging one of your main skills:

We spend a lot of time debugging. By improving your debugging skills you are likely to change this balance
so that you can spend more time coding new features.

There are always errors in your code and you will have to debug them without introducing new errors. 


Debugging is sometimes the only way to check that some code is working fine.


### 3 consequences of being a bad debugger

Low productivity. Debugging is one of the main activities when developing software, bad debuggers 
will have to spend more time debugging and that will affect their productivity.
Not being able to fix the real bug. 

One of the challenges when fixing an error is to identify it, errors are like icebergs: their visible 
part is just 10% of the problem, which is the only part that bad debuggers are going to look into, 
leaving the other 90% alone ready to cause some titanic catastrophe.

Leaving collateral damage. Modifying code to fix an error has the risk of generating a completely new one, 
bad debuggers are likely to forget about this and will create some collateral damage every
time they try to fix a bug. For all the previous reasons, debugging has to be treated as an essential part
in the software development, and the following steps will help you to be a better debugger.

### Steps to fix a bug

The correct approach to debug is to follow a very structured procedure based on repeating the same 
steps for every bug, the reason for this is that bugs usually are symptoms of a much bigger problem going on, 
so in order for us to uncover the real nature of the error we have to make sure we do an exhaust and 
systematic revision of it.

The degree of formality when following the steps may vary depending on the bug, for critical errors is 
better to document every single step in a document, for minor errors, or bugs found while coding is just 
enough to follow them as a mental guideline to make sure we cover all the error.

#### Step 1. Identify the error.

This is an obvious step but a tricky one, sometimes a bad identification of an error can cause lots of 
wasted developing time, is usual that production errors reported by users are hard to be interpreted 
and sometimes the information we are getting from them is misleading.

A few tips to make sure you identify correctly the bug are.

See the error. This is easy if you spot the error, but not if it comes from a user, in that case 
see if you can get the user to send you a few screen captures or even use remote connection to see 
the error by yourself.

Reproduce the error. You never should say that an error has been fixed if you were not able to reproduce it.
Understand what the expected behavior should be. In complex applications could be hard to tell what should be 
the expected behavior of an error, but that knowledge is basic to be able to fix the problem, so we will 
have to talk with the product owner, check documentation… to find this information
Validate the identification. Confirm with the responsible person for (possibly a PO) 
the application that the error is actually an error and that the expected behavior is correct. 
The validation can also lead to situations where is 
not necessary or not worth it to fix the error.

####  Step 2. Find the error.

Once we have an error correctly identified, is time to go through the code to find the exact spot 
where the error is located, at this stage we are  not interested in understanding the big picture 
for the error, we are just focused on finding it. A few techniques that may help to find an error are:

##### Logging

It can be to the console. It should help you to trace the error in the code.
Debugging. Debugging in the most technical sense of the word, meaning turning on whatever the debugger you 
are using and stepping through the code. 

##### Removing code. 

I discovered this method a couple of years ago (at M&S) when we were trying to fix a very challenging bug. We had an application which a few seconds after performing an action was causing the system to crash but only on some computers and not always, but only from time to time, when debugging, everything seemed to work as expected, and when the machine was crashing it happened with many different patterns, we were completely lost, and then it occurred to us the removing code approach.

It worked more or less like this: We took out half of the code from the action causing the machine to crash, 
and we executed it hundreds of times, and the application crashed, we did the same with the other half of the code 
and the application didn’t crash, so we knew the error was on the first half, we kept splitting the code until we 
found that the error was on a third party function we were using, so we just decided to rewrite it by ourselves.

#### Step 3. Analyze the error.

This is a critical step, use a bottom-up approach from the place the error was found and analyze the code so 
you can see the big picture of the error, analyzing a bug has two main goals: to check that around that 
error there aren’t any other errors to be found (the iceberg metaphor), and to make sure what are the risks 
of entering any collateral damage in the fix.

####  Step 4. Prove your analysis

This is a straight forward step, after analyzing the original bug you may have come with a few more errors
that may appear on the application, this step it’s all about writing automated tests for these areas 
(is better to use a test framework as any from the xUnit family).

Once you have your tests, you can run them and you should see all them failing, that
proves that your analysis is right.

#### Step 5. Cover lateral damage.

At this stage you are almost ready to start coding the fix, but you have to gather (if already created) all 
the unit tests for the code which is around where you will do the changes so that you will be sure
after completing the modification that you won’t have break anything else. 
If you run this unit tests, they all should pass.

#### Step 6. Fix the error.

That’s it, finally you can fix the error!

#### Step 7. Validate the solution.

Run all the test scripts and check that they all pass.


Document the bug and the fix.

Document each step, the code changes, and the new unit tests, add also the unit tests if possible 
to your build and to your regression test routine.

### Technical considerations.

Log is the developer’s best friend when it comes to find errors in a production environment, 
make sure there is always a log in your application, that is readable, and that it is helpful 
to track down what the application is doing.
