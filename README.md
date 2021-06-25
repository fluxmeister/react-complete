# react-complete

* React Complete Guide *  

# 01 # Getting Started #  
External assets links :
Vanilla-JavaScript-vs-React-Example-Code-  
https://github.com/academind/react-complete-guide-code/tree/01-getting-started/code/react-vs-vanilla-js-example  
  
React-vs-Angular-vs-Vue-Comparison-Deep-Dive-  
https://academind.com/tutorials/angular-vs-react-vs-vue-my-thoughts/  
  
Jump-ahead-to-the-React.js-Summary-  
https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25601582  
  
# 02 # JavaScript Refresher #  
<h2><strong>Next-Gen JavaScript - Summary</strong></h2>  
- a brief introduction into some core next-gen JavaScript features -  
<body><p>In this module, Iprovided a brief introduction into some core next-gen JavaScript features, of course focusing on the ones you'll see the most in this course. Here's a quick summary!</p>

<h4><strong>let &amp;const</strong></h4>



















































































<p>Read more about <code>let</code>:<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let" rel="nofollow">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let</a></p>



















































































<p>Read more about <code>const</code>:<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const" rel="nofollow">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const</a></p>



















































































<p><code>let</code> and <code>const</code> basically replace <code>var</code>. You use <code>let</code> instead of <code>var</code> and <code>const</code> instead of <code>var</code> if you plan on never re-assigning this "variable"(effectively turning it into a constant therefore).</p>

































































<h4><strong>ES6 Arrow Functions</strong></h4>

































































<p>Read more:<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" rel="nofollow">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions</a></p>

































































<p>Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the <code>this</code> keyword (see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_this" rel="nofollow">here</a>).</p>































































<p>Arrow function syntax may look strange but it's actually simple.</p>































































<pre class="prettyprint linenums">function callMe(name) { 
    console.log(name);
}</pre>



























































































































<p>which you could also write as:</p>





























































<pre class="prettyprint linenums">const callMe = function(name) { 
    console.log(name);
}</pre>



























































































































<p>becomes:</p>





























































<pre class="prettyprint linenums">const callMe = (name) =&gt; { 
    console.log(name);
}</pre>



























































































































<p><strong>Important:</strong></p>





























































<p>When having <strong>no arguments</strong>, you have to use empty parentheses in the function declaration:</p>





























































<pre class="prettyprint linenums">const callMe = () =&gt; { 
    console.log('Max!');
}</pre>



























































































































<p>When having<strong> exactly one argument</strong>, you may omit the parentheses:</p>





























































<pre class="prettyprint linenums">const callMe = name =&gt; { 
    console.log(name);
}</pre>



























































































































<p>When <strong>just returning a value</strong>, you can use the following shortcut:</p>





























































<pre class="prettyprint linenums">const returnMe = name =&gt; name</pre>



























































































































<p>That's equal to:</p>





























































<pre class="prettyprint linenums">const returnMe = name =&gt; { 
    return name;
}</pre>



























































































































<h4><strong>Exports &amp;Imports</strong></h4>



























































<p>In React projects (and actually in all modern JavaScript projects), you split your code across multiple JavaScript files - so-called modules. You do this, to keep each file/ module focused and manageable.</p>



























































<p>To still access functionality in another file, you need <code>export</code> (to make it available) and <code>import</code> (to get access)statements.</p>



























































<p>You got two different types of exports:<strong>default</strong> (unnamed)and <strong>named</strong> exports:</p>



























































<p><strong>default</strong> =&gt;<code>export default ...;</code></p>



























































<p><strong>named</strong> =&gt;<code>export const someData = ...;</code></p>



















































<p>You can import <strong>default exports</strong> like this:</p>



















































<p><code>import someNameOfYourChoice from './path/to/file.js';</code></p>



















































<p>Surprisingly,<code>someNameOfYourChoice</code> is totally up to you.</p>



















































<p><strong>Named exports</strong> have to be imported by their name:</p>



















































<p><code>import { someData } from './path/to/file.js';</code></p>













































<p>A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in one and the same file.</p>













































<p>When importing <strong>named exports</strong>, you can also import all named exports at once with the following syntax:</p>













































<p><code>import * as upToYou from './path/to/file.js';</code></p>













































<p><code>upToYou</code> is - well - up to you and simply bundles all exported variables/functions in one JavaScript object. For example, if you <code>export const someData = ...</code> (<code>/path/to/file.js</code>)you can access it on <code>upToYou</code> like this:<code>upToYou.someData</code>.</p>































<h4><strong>Classes</strong></h4>































<p>Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them.</p>































<p>Like this:</p>































<pre class="prettyprint linenums">class Person {
    constructor () {
        this.name = 'Max';
    }
}

const person = new Person();
console.log(person.name); // prints 'Max'</pre>



























































<p>In the above example, not only the class but also a property of that class (=&gt;<code>name</code>)is defined. Thesyntax you see there, is the "old"syntax for defining properties. In modern JavaScript projects (as the one used in this course), you can use the following, more convenient way of defining class properties:</p>





























<pre class="prettyprint linenums">class Person {
    name = 'Max';
}

const person = new Person();
console.log(person.name); // prints 'Max'</pre>























































<p>You can also define methods. Either like this:</p>



























<pre class="prettyprint linenums">class Person {
    name = 'Max';
    printMyName () {
        console.log(this.name); // this is required to refer to the class!
    }
}

const person = new Person();
person.printMyName();</pre>























































<p>Or like this:</p>



























<pre class="prettyprint linenums">class Person {
    name = 'Max';
    printMyName = () =&gt; {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();</pre>























































<p>The second approach has the same advantage as all arrow functions have:The <code>this</code> keyword doesn't change its reference.</p>

























<p>You can also use <strong>inheritance</strong> when using classes:<br></p>

























<pre class="prettyprint linenums">class Human {
    species = 'human';
}

class Person extends Human {
    name = 'Max';
    printMyName = () =&gt; {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
console.log(person.species); // prints 'human'</pre>



















































<h4><strong>Spread &amp;Rest Operator</strong></h4>























<p>The spread and rest operators actually use the same syntax:<code>...</code></p>























<p>Yes, that is the operator - just three dots. It's usage determines whether you're using it as the spread or rest operator.</p>























<p><strong>Using the Spread Operator:</strong></p>























<p>The spread operator allows you to pull elements out of an array (=&gt;split the array into a list of its elements) or pull the properties out of an object. Here are two examples:</p>





















<pre class="prettyprint linenums">const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];</pre>







































<p>Here's the spread operator used on an object:</p>



















<pre class="prettyprint linenums">const oldObject = {
    name: 'Max'
};
const newObject = {
    ...oldObject,
    age: 28
};</pre>



































<p><code>newObject</code> would then be</p>

















<pre class="prettyprint linenums">{
    name: 'Max',
    age: 28
}</pre>



























<p>The spread operator is extremely useful for cloning arrays and objects.Since both are <a href="https://youtu.be/9ooYYRLdg_g" rel="nofollow">reference types (and not primitives)</a>, copying them safely (i.e. preventing future mutation of the copied original)can be tricky. With the spread operator you have an easy way of creating a (shallow!) clone of the object or array.</p>













<h4><strong>Destructuring</strong></h4>













<p>Destructuring allows you to easily access the values of arrays or objects and assign them to variables.</p>













<p>Here's an example for an array:</p>













<pre class="prettyprint linenums">const array = [1, 2, 3];
const [a, b] = array;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]</pre>























<p>And here for an object:</p>











<pre class="prettyprint linenums">const myObj = {
    name: 'Max',
    age: 28
}
const {name} = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}</pre>























<p>Destructuring is very useful when working with function arguments. Consider this example:</p>









<pre class="prettyprint linenums">const printName = (personObj) =&gt; {
    console.log(personObj.name);
}
printName({name: 'Max', age: 28}); // prints 'Max'</pre>















<p>Here, we only want to print the name in the function but we pass a complete person object to the function. Of course this is no issue but it forces us to call personObj.name inside of our function. We can condense this code with destructuring:</p>







<pre class="prettyprint linenums">const printName = ({name}) =&gt; {
    console.log(name);
}
printName({name: 'Max', age: 28}); // prints 'Max')</pre>















<p>We get the same result as above but we save some code. By destructuring, we simply pull out the <code>name</code> property and store it in a variable/ argument named <code>name</code> which we then can use in the function body.</p></body>
  
<h2><strong> JS Array Functions</strong></h2>  
  Not really next-gen JavaScript, but also important:&nbsp;JavaScript array functions like <code>map()</code>&nbsp;, <code>filter()</code>&nbsp;, <code>reduce() </code>&nbsp;etc.</p>

<p>You'll see me use them quite a bit since a lot of React concepts rely on working with arrays (in immutable ways).</p>





















<p>The following page gives a good overview over the various methods you can use on the array prototype - feel free to click through them and refresh your knowledge as required:&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" rel="nofollow">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array</a></p>





















<p>Particularly important are:</p>





















<ul><li><code>map()</code>&nbsp;&nbsp;=&gt;&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" rel="nofollow">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map</a></li><li><code>find()</code>&nbsp;&nbsp;=&gt;&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" rel="nofollow">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find</a></li><li><code>findIndex()</code>&nbsp;&nbsp;=&gt;&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" rel="nofollow">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex</a></li><li><code>filter()</code>&nbsp;&nbsp;=&gt;&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" rel="nofollow">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter</a></li><li><code>reduce()</code>&nbsp;&nbsp;=&gt;&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b" rel="nofollow">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b</a></li><li><code>concat()</code>&nbsp;&nbsp;=&gt;&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b" rel="nofollow">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b</a></li><li><code>slice()</code>&nbsp;&nbsp;=&gt;&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" rel="nofollow">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice</a></li><li><code>splice()</code>&nbsp;&nbsp;=&gt;&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" rel="nofollow">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice</a>  
  
