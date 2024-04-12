import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as c,c as o,a as s,b as n,d as l,e as a}from"./app-D_HUMAmc.js";const i={},u=a(`<h1 id="javascript-进阶-第1天" tabindex="-1"><a class="header-anchor" href="#javascript-进阶-第1天"><span>JavaScript 进阶 - 第1天</span></a></h1><blockquote><p>学习作用域、变量提升、闭包等语言特征，加深对 JavaScript 的理解，掌握变量赋值、函数声明的简洁语法，降低代码的冗余度。</p></blockquote><ul><li>理解作用域对程序执行的影响</li><li>能够分析程序执行的作用域范围</li><li>理解闭包本质，利用闭包创建隔离作用域</li><li>了解什么变量提升及函数提升</li><li>掌握箭头函数、解析剩余参数等简洁语法</li></ul><h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域"><span>作用域</span></a></h2><blockquote><p>了解作用域对程序执行的影响及作用域链的查找机制，使用闭包函数创建隔离作用域避免全局变量污染。</p></blockquote><p>作用域（scope）规定了变量能够被访问的“范围”，离开了这个“范围”变量便不能被访问，作用域分为全局作用域和局部作用域。</p><h3 id="局部作用域" tabindex="-1"><a class="header-anchor" href="#局部作用域"><span>局部作用域</span></a></h3><p>局部作用域分为函数作用域和块作用域。</p><h4 id="函数作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域"><span>函数作用域</span></a></h4><p>在函数内部声明的变量只能在函数内部被访问，外部无法直接访问。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 声明 counter 函数</span>
  <span class="token keyword">function</span> <span class="token function">counter</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 函数内部声明的变量</span>
    <span class="token keyword">const</span> s <span class="token operator">=</span> x <span class="token operator">+</span> y
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">// 18</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 设用 counter 函数</span>
  <span class="token function">counter</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
  <span class="token comment">// 访问变量 s</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token comment">// 报错</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>函数内部声明的变量，在函数外部无法被访问</li><li>函数的参数也是函数内部的局部变量</li><li>不同函数内部声明的变量无法互相访问</li><li>函数执行完毕后，函数内部的变量实际被清空了</li></ol><h4 id="块作用域" tabindex="-1"><a class="header-anchor" href="#块作用域"><span>块作用域</span></a></h4><p>在 JavaScript 中使用 <code>{}</code> 包裹的代码称为代码块，代码块内部声明的变量外部将【有可能】无法被访问。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token punctuation">{</span>
    <span class="token comment">// age 只能在该代码块中被访问</span>
    <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正常</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 超出了 age 的作用域</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token comment">// 报错</span>
  
  <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// str 只能在该代码块中被访问</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;hello world!&#39;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正常</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 超出了 age 的作用域</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
  
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> t <span class="token operator">&lt;=</span> <span class="token number">6</span><span class="token punctuation">;</span> t<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// t 只能在该代码块中被访问</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正常</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 超出了 t 的作用域</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JavaScript 中除了变量外还有常量，常量与变量本质的区别是【常量必须要有值且不允许被重新赋值】，常量值为对象时其属性和方法允许重新赋值。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 必须要有值</span>
  <span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token string">&#39;1.0.0&#39;</span><span class="token punctuation">;</span>

  <span class="token comment">// 不能重新赋值</span>
  <span class="token comment">// version = &#39;1.0.1&#39;;</span>

  <span class="token comment">// 常量值为对象类型</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;小明&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 不能重新赋值</span>
  user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 属性和方法允许被修改</span>
  user<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;小小明&#39;</span><span class="token punctuation">;</span>
  user<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li><code>let</code> 声明的变量会产生块作用域，<code>var</code> 不会产生块作用域</li><li><code>const</code> 声明的常量也会产生块作用域</li><li>不同代码块之间的变量无法互相访问</li><li>推荐使用 <code>let</code> 或 <code>const</code></li></ol><p>注：开发中 <code>let</code> 和 <code>const</code> 经常不加区分的使用，如果担心某个值会不小被修改时，则只能使用 <code>const</code> 声明成常量。</p><h3 id="全局作用域" tabindex="-1"><a class="header-anchor" href="#全局作用域"><span>全局作用域</span></a></h3><p><code>&lt;script&gt;</code> 标签和 <code>.js</code> 文件的【最外层】就是所谓的全局作用域，在此声明的变量在函数内部也可以被访问。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 此处是全局</span>
  
  <span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 此处为局部</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 此处为全局</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局作用域中声明的变量，任何其它作用域都可以被访问，如下代码所示：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 全局变量 name</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;小明&#39;</span>
  
  	<span class="token comment">// 函数作用域中访问全局</span>
    <span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 此处为局部</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你好&#39;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 全局变量 flag 和 x</span>
    <span class="token keyword">const</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">10</span>
  
  	<span class="token comment">// 块作用域中访问全局</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">5</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span> <span class="token comment">// x 是全局的</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>为 <code>window</code> 对象动态添加的属性默认也是全局的，不推荐！</li><li>函数中未使用任何关键字声明的变量为全局变量，不推荐！！！</li><li>尽可能少的声明全局变量，防止全局变量被污染</li></ol><p>JavaScript 中的作用域是程序被执行时的底层机制，了解这一机制有助于规范代码书写习惯，避免因作用域导致的语法错误。</p><h3 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链"><span>作用域链</span></a></h3><p>在解释什么是作用域链前先来看一段代码：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 全局作用域</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span>
  <span class="token comment">// 局部作用域</span>
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> c
    <span class="token comment">// 局部作用域</span>
    <span class="token keyword">function</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token string">&#39;yo&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数内部允许创建新的函数，<code>f</code> 函数内部创建的新函数 <code>g</code>，会产生新的函数作用域，由此可知作用域产生了嵌套的关系。</p><p>如下图所示，父子关系的作用域关联在一起形成了链状的结构，作用域链的名字也由此而来。</p><p>作用域链本质上是底层的变量查找机制，在函数被执行时，会优先查找当前函数作用域中查找变量，如果当前作用域查找不到则会依次逐级查找父级作用域直到全局作用域，如下代码所示：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 全局作用域</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token comment">// 局部作用域</span>
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> c
    <span class="token comment">// let a = 10;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 1 或 10</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token comment">// 报错</span>
    
    <span class="token comment">// 局部作用域</span>
    <span class="token keyword">function</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token string">&#39;yo&#39;</span>
      <span class="token comment">// let b = 20;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 2 或 20</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 调用 g 函数</span>
    <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 报错</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token comment">// 报错</span>
  
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>嵌套关系的作用域串联起来形成了作用域链</li><li>相同作用域链中按着从小到大的规则查找变量</li><li>子作用域能够访问父作用域，父级作用域无法访问子级作用域</li></ol><h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包"><span>闭包</span></a></h3><p>闭包是一种比较特殊和函数，使用闭包能够访问函数作用域中的变量。从代码形式上看闭包是一个做为返回值的函数，如下代码所示：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 1. 闭包 : 内层函数 + 外层函数变量</span>
    <span class="token comment">// function outer() {</span>
    <span class="token comment">//   const a = 1</span>
    <span class="token comment">//   function f() {</span>
    <span class="token comment">//     console.log(a)</span>
    <span class="token comment">//   }</span>
    <span class="token comment">//   f()</span>
    <span class="token comment">// }</span>
    <span class="token comment">// outer()</span>

    <span class="token comment">// 2. 闭包的应用： 实现数据的私有。统计函数的调用次数</span>
    <span class="token comment">// let count = 1</span>
    <span class="token comment">// function fn() {</span>
    <span class="token comment">//   count++</span>
    <span class="token comment">//   console.log(\`函数被调用\${count}次\`)</span>
    <span class="token comment">// }</span>

    <span class="token comment">// 3. 闭包的写法  统计函数的调用次数</span>
    <span class="token keyword">function</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span>
      <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count<span class="token operator">++</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">函数被调用</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">次</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> fn
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// const re = function fn() {</span>
    <span class="token comment">//   count++</span>
    <span class="token comment">//   console.log(\`函数被调用\${count}次\`)</span>
    <span class="token comment">// }</span>
    <span class="token function">re</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">re</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// const fn = function() { }  函数表达式</span>
    <span class="token comment">// 4. 闭包存在的问题： 可能会造成内存泄漏</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><p>1.怎么理解闭包？</p><ul><li>闭包 = 内层函数 + 外层函数的变量</li></ul><p>2.闭包的作用？</p><ul><li>封闭数据，实现数据私有，外部也可以访问函数内部的变量</li><li>闭包很有用，因为它允许将函数与其所操作的某些数据（环境）关联起来</li></ul><p>3.闭包可能引起的问题？</p><ul><li>内存泄漏</li></ul><h3 id="变量提升" tabindex="-1"><a class="header-anchor" href="#变量提升"><span>变量提升</span></a></h3><p>变量提升是 JavaScript 中比较“奇怪”的现象，它允许在变量声明之前即被访问，</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 访问变量 str</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str <span class="token operator">+</span> <span class="token string">&#39;world!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 声明变量 str</span>
  <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;hello &#39;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>变量在未声明即被访问时会报语法错误</li><li>变量在声明之前即被访问，变量的值为 <code>undefined</code></li><li><code>let</code> 声明的变量不存在变量提升，推荐使用 <code>let</code></li><li>变量提升出现在相同作用域当中</li><li>实际开发中推荐先声明再访问变量</li></ol>`,53),d=s("code",null,"let",-1),r={href:"https://segmentfault.com/a/1190000013915935",target:"_blank",rel:"noopener noreferrer"},k=a(`<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><blockquote><p>知道函数参数默认值、动态参数、剩余参数的使用细节，提升函数应用的灵活度，知道箭头函数的语法及与普通函数的差异。</p></blockquote><h3 id="函数提升" tabindex="-1"><a class="header-anchor" href="#函数提升"><span>函数提升</span></a></h3><p>函数提升与变量提升比较类似，是指函数在声明之前即可被调用。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 调用函数</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 声明函数</span>
  <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;声明之前即被调用...&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 不存在提升现象</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 错误</span>
  <span class="token keyword">var</span> <span class="token function-variable function">bar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;函数表达式不存在提升现象...&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>函数提升能够使函数的声明调用更灵活</li><li>函数表达式不存在提升的现象</li><li>函数提升出现在相同作用域当中</li></ol><h3 id="函数参数" tabindex="-1"><a class="header-anchor" href="#函数参数"><span>函数参数</span></a></h3><p>函数参数的使用细节，能够提升函数应用的灵活度。</p><h4 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值"><span>默认值</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 设置参数默认值</span>
  <span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;p&gt;大家好，我叫</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">，我今年</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">岁了。&lt;/p&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 调用函数</span>
  <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token string">&#39;小红&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token string">&#39;小刚&#39;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>声明函数时为形参赋值即为参数的默认值</li><li>如果参数未自定义默认值时，参数的默认值为 <code>undefined</code></li><li>调用函数时没有传入对应实参时，参数的默认值被当做实参传入</li></ol><h4 id="动态参数" tabindex="-1"><a class="header-anchor" href="#动态参数"><span>动态参数</span></a></h4><p><code>arguments</code> 是函数内部内置的伪数组变量，它包含了调用函数时传入的所有实参。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 求生函数，计算所有参数的和</span>
  <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(arguments)</span>
    <span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      s <span class="token operator">+=</span> arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 调用求和函数</span>
  <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token comment">// 两个参数</span>
  <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// 两个参数</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li><code>arguments</code> 是一个伪数组</li><li><code>arguments</code> 的作用是动态获取函数的实参</li></ol><h4 id="剩余参数" tabindex="-1"><a class="header-anchor" href="#剩余参数"><span>剩余参数</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token parameter">baseURL<span class="token punctuation">,</span> <span class="token operator">...</span>other</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>baseURL<span class="token punctuation">)</span> <span class="token comment">// 得到 &#39;http://baidu.com&#39;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span>  <span class="token comment">// other  得到 [&#39;get&#39;, &#39;json&#39;]</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 调用函数</span>
  <span class="token function">config</span><span class="token punctuation">(</span><span class="token string">&#39;http://baidu.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li><code>...</code> 是语法符号，置于最末函数形参之前，用于获取多余的实参</li><li>借助 <code>...</code> 获取的剩余实参，是个真数组</li></ol><h3 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数"><span>箭头函数</span></a></h3><p>箭头函数是一种声明函数的简洁语法，它与普通函数并无本质的区别，差异性更多体现在语法格式上。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// const fn = function () {</span>
    <span class="token comment">//   console.log(123)</span>
    <span class="token comment">// }</span>
    <span class="token comment">// 1. 箭头函数 基本语法</span>
    <span class="token comment">// const fn = () =&gt; {</span>
    <span class="token comment">//   console.log(123)</span>
    <span class="token comment">// }</span>
    <span class="token comment">// fn()</span>
    <span class="token comment">// const fn = (x) =&gt; {</span>
    <span class="token comment">//   console.log(x)</span>
    <span class="token comment">// }</span>
    <span class="token comment">// fn(1)</span>
    <span class="token comment">// 2. 只有一个形参的时候，可以省略小括号</span>
    <span class="token comment">// const fn = x =&gt; {</span>
    <span class="token comment">//   console.log(x)</span>
    <span class="token comment">// }</span>
    <span class="token comment">// fn(1)</span>
    <span class="token comment">// // 3. 只有一行代码的时候，我们可以省略大括号</span>
    <span class="token comment">// const fn = x =&gt; console.log(x)</span>
    <span class="token comment">// fn(1)</span>
    <span class="token comment">// 4. 只有一行代码的时候，可以省略return</span>
    <span class="token comment">// const fn = x =&gt; x + x</span>
    <span class="token comment">// console.log(fn(1))</span>
    <span class="token comment">// 5. 箭头函数可以直接返回一个对象</span>
    <span class="token comment">// const fn = (uname) =&gt; ({ uname: uname })</span>
    <span class="token comment">// console.log(fn(&#39;刘德华&#39;))</span>

  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>箭头函数属于表达式函数，因此不存在函数提升</li><li>箭头函数只有一个参数时可以省略圆括号 <code>()</code></li><li>箭头函数函数体只有一行代码时可以省略花括号 <code>{}</code>，并自动做为返回值被返回</li></ol><h4 id="箭头函数参数" tabindex="-1"><a class="header-anchor" href="#箭头函数参数"><span>箭头函数参数</span></a></h4><p>箭头函数中没有 <code>arguments</code>，只能使用 <code>...</code> 动态获取实参</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 1. 利用箭头函数来求和</span>
    <span class="token keyword">const</span> <span class="token function-variable function">getSum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> sum
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">// 9</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="箭头函数-this" tabindex="-1"><a class="header-anchor" href="#箭头函数-this"><span>箭头函数 this</span></a></h4><p>箭头函数不会创建自己的this,它只会从自己的作用域链的上一层沿用this。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 以前this的指向：  谁调用的这个函数，this 就指向谁</span>
    <span class="token comment">// console.log(this)  // window</span>
    <span class="token comment">// // 普通函数</span>
    <span class="token comment">// function fn() {</span>
    <span class="token comment">//   console.log(this)  // window</span>
    <span class="token comment">// }</span>
    <span class="token comment">// window.fn()</span>
    <span class="token comment">// // 对象方法里面的this</span>
    <span class="token comment">// const obj = {</span>
    <span class="token comment">//   name: &#39;andy&#39;,</span>
    <span class="token comment">//   sayHi: function () {</span>
    <span class="token comment">//     console.log(this)  // obj</span>
    <span class="token comment">//   }</span>
    <span class="token comment">// }</span>
    <span class="token comment">// obj.sayHi()</span>

    <span class="token comment">// 2. 箭头函数的this  是上一层作用域的this 指向</span>
    <span class="token comment">// const fn = () =&gt; {</span>
    <span class="token comment">//   console.log(this)  // window</span>
    <span class="token comment">// }</span>
    <span class="token comment">// fn()</span>
    <span class="token comment">// 对象方法箭头函数 this</span>
    <span class="token comment">// const obj = {</span>
    <span class="token comment">//   uname: &#39;pink老师&#39;,</span>
    <span class="token comment">//   sayHi: () =&gt; {</span>
    <span class="token comment">//     console.log(this)  // this 指向谁？ window</span>
    <span class="token comment">//   }</span>
    <span class="token comment">// }</span>
    <span class="token comment">// obj.sayHi()</span>

    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">&#39;pink老师&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">sayHi</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>  <span class="token comment">// obj</span>
        <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">10</span>
        <span class="token keyword">const</span> <span class="token function-variable function">count</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>  <span class="token comment">// obj </span>
        <span class="token punctuation">}</span>
        <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    obj<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值"><span>解构赋值</span></a></h2><blockquote><p>知道解构的语法及分类，使用解构简洁语法快速为变量赋值。</p></blockquote><p>解构赋值是一种快速为变量赋值的简洁语法，本质上仍然是为变量赋值，分为数组解构、对象解构两大类型。</p><h3 id="数组解构" tabindex="-1"><a class="header-anchor" href="#数组解构"><span>数组解构</span></a></h3><p>数组解构是将数组的单元值快速批量赋值给一系列变量的简洁语法，如下代码所示：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 普通的数组</span>
  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
  <span class="token comment">// 批量声明变量 a b c </span>
  <span class="token comment">// 同时将数组单元值 1 2 3 依次赋值给变量 a b c</span>
  <span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> arr
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>赋值运算符 <code>=</code> 左侧的 <code>[]</code> 用于批量声明变量，右侧数组的单元值将被赋值给左侧的变量</li><li>变量的顺序对应数组单元值的位置依次进行赋值操作</li><li>变量的数量大于单元值数量时，多余的变量将被赋值为 <code>undefined</code></li><li>变量的数量小于单元值数量时，可以通过 <code>...</code> 获取剩余单元值，但只能置于最末位</li><li>允许初始化变量的默认值，且只有单元值为 <code>undefined</code> 时默认值才会生效</li></ol><p>注：支持多维解构赋值，比较复杂后续有应用需求时再进一步分析</p><h3 id="对象解构" tabindex="-1"><a class="header-anchor" href="#对象解构"><span>对象解构</span></a></h3><p>对象解构是将对象属性和方法快速批量赋值给一系列变量的简洁语法，如下代码所示：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 普通对象</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;小明&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// 批量声明变量 name age</span>
  <span class="token comment">// 同时将数组单元值 小明  18 依次赋值给变量 name  age</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> age<span class="token punctuation">}</span> <span class="token operator">=</span> user

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// 小明</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token comment">// 18</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>赋值运算符 <code>=</code> 左侧的 <code>{}</code> 用于批量声明变量，右侧对象的属性值将被赋值给左侧的变量</li><li>对象属性的值将被赋值给与属性名相同的变量</li><li>对象中找不到与变量名一致的属性时变量值为 <code>undefined</code></li><li>允许初始化变量的默认值，属性不存在或单元值为 <code>undefined</code> 时默认值才会生效</li></ol><p>注：支持多维解构赋值</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 1. 这是后台传递过来的数据</span>
    <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;获取新闻列表成功&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5G商用自己，三大运用商收入下降&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">58</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;国际媒体头条速览&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">56</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;乌克兰和俄罗斯持续冲突&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">1669</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 需求1： 请将以上msg对象  采用对象解构的方式 只选出  data 方面后面使用渲染页面</span>
    <span class="token comment">// const { data } = msg</span>
    <span class="token comment">// console.log(data)</span>
    <span class="token comment">// 需求2： 上面msg是后台传递过来的数据，我们需要把data选出当做参数传递给 函数</span>
    <span class="token comment">// const { data } = msg</span>
    <span class="token comment">// msg 虽然很多属性，但是我们利用解构只要 data值</span>
    <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// const { data } = arr</span>
      <span class="token comment">// 我们只要 data 数据</span>
      <span class="token comment">// 内部处理</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>

    <span class="token comment">// 需求3， 为了防止msg里面的data名字混淆，要求渲染函数里面的数据名改为 myData</span>
    <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> myData <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 要求将 获取过来的 data数据 更名为 myData</span>
      <span class="token comment">// 内部处理</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myData<span class="token punctuation">)</span>

    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>

  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="综合案例" tabindex="-1"><a class="header-anchor" href="#综合案例"><span>综合案例</span></a></h2><h3 id="foreach遍历数组" tabindex="-1"><a class="header-anchor" href="#foreach遍历数组"><span>forEach遍历数组</span></a></h3><p>forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数</p><blockquote><p>注意：</p><p>1.forEach 主要是遍历数组</p><p>2.参数当前数组元素是必须要写的， 索引号可选。</p></blockquote><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// forEach 就是遍历  加强版的for循环  适合于遍历数组对象</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pink&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>  <span class="token comment">// 数组元素 red  green pink</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token comment">// 索引号</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// console.log(result)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filter筛选数组" tabindex="-1"><a class="header-anchor" href="#filter筛选数组"><span>filter筛选数组</span></a></h3><p>filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素</p><p>主要使用场景： 筛选数组符合条件的元素，并返回筛选之后元素的新数组</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span>
    <span class="token comment">// const newArr = arr.filter(function (item, index) {</span>
    <span class="token comment">//   // console.log(item)</span>
    <span class="token comment">//   // console.log(index)</span>
    <span class="token comment">//   return item &gt;= 20</span>
    <span class="token comment">// })</span>
    <span class="token comment">// 返回的符合条件的新数组</span>

    <span class="token keyword">const</span> newArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item <span class="token operator">&gt;=</span> <span class="token number">20</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58);function m(v,b){const t=p("ExternalLinkIcon");return c(),o("div",null,[u,s("p",null,[n("注：关于变量提升的原理分析会涉及较为复杂的词法分析等知识，而开发中使用 "),d,n(" 可以轻松规避变量的提升，因此在此不做过多的探讨，有兴趣可"),s("a",r,[n("查阅资料"),l(t)]),n("。")]),k])}const f=e(i,[["render",m],["__file","adv-01.html.vue"]]),y=JSON.parse('{"path":"/posts/web/javascript/advance/adv-01.html","title":"Javascript进阶（一）作用域、函数、解构","lang":"zh-CN","frontmatter":{"title":"Javascript进阶（一）作用域、函数、解构","date":"2024-03-28T00:00:00.000Z","category":["前端"],"tag":["JavaScript"],"description":"JavaScript 进阶 - 第1天 学习作用域、变量提升、闭包等语言特征，加深对 JavaScript 的理解，掌握变量赋值、函数声明的简洁语法，降低代码的冗余度。 理解作用域对程序执行的影响 能够分析程序执行的作用域范围 理解闭包本质，利用闭包创建隔离作用域 了解什么变量提升及函数提升 掌握箭头函数、解析剩余参数等简洁语法 作用域 了解作用域对程...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/posts/web/javascript/advance/adv-01.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"Javascript进阶（一）作用域、函数、解构"}],["meta",{"property":"og:description","content":"JavaScript 进阶 - 第1天 学习作用域、变量提升、闭包等语言特征，加深对 JavaScript 的理解，掌握变量赋值、函数声明的简洁语法，降低代码的冗余度。 理解作用域对程序执行的影响 能够分析程序执行的作用域范围 理解闭包本质，利用闭包创建隔离作用域 了解什么变量提升及函数提升 掌握箭头函数、解析剩余参数等简洁语法 作用域 了解作用域对程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T12:11:02.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2024-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-12T12:11:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Javascript进阶（一）作用域、函数、解构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-12T12:11:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"作用域","slug":"作用域","link":"#作用域","children":[{"level":3,"title":"局部作用域","slug":"局部作用域","link":"#局部作用域","children":[]},{"level":3,"title":"全局作用域","slug":"全局作用域","link":"#全局作用域","children":[]},{"level":3,"title":"作用域链","slug":"作用域链","link":"#作用域链","children":[]},{"level":3,"title":"闭包","slug":"闭包","link":"#闭包","children":[]},{"level":3,"title":"变量提升","slug":"变量提升","link":"#变量提升","children":[]}]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[{"level":3,"title":"函数提升","slug":"函数提升","link":"#函数提升","children":[]},{"level":3,"title":"函数参数","slug":"函数参数","link":"#函数参数","children":[]},{"level":3,"title":"箭头函数","slug":"箭头函数","link":"#箭头函数","children":[]}]},{"level":2,"title":"解构赋值","slug":"解构赋值","link":"#解构赋值","children":[{"level":3,"title":"数组解构","slug":"数组解构","link":"#数组解构","children":[]},{"level":3,"title":"对象解构","slug":"对象解构","link":"#对象解构","children":[]}]},{"level":2,"title":"综合案例","slug":"综合案例","link":"#综合案例","children":[{"level":3,"title":"forEach遍历数组","slug":"foreach遍历数组","link":"#foreach遍历数组","children":[]},{"level":3,"title":"filter筛选数组","slug":"filter筛选数组","link":"#filter筛选数组","children":[]}]}],"git":{"createdTime":1712923862000,"updatedTime":1712923862000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":13.79,"words":4136},"filePathRelative":"posts/web/javascript/advance/adv-01.md","localizedDate":"2024年3月28日","autoDesc":true}');export{f as comp,y as data};
