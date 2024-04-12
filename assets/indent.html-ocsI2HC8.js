import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,b as a}from"./app-D3p8wuGf.js";const i={},t=a(`<h1 id="indent" tabindex="-1"><a class="header-anchor" href="#indent"><span>indent</span></a></h1><p>格式化C语言的源文件</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>indent命令</strong> 可辨识C的原始代码文件，并加以格式化，以方便程序员阅读、修改等操作。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>indent<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>源文件<span class="token punctuation">)</span>
或
indent（选项<span class="token punctuation">)</span><span class="token punctuation">(</span>源文件<span class="token punctuation">)</span><span class="token punctuation">(</span>-o 目标文件<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-bad：在声明区加上空白行；
-bap：添加空白行；
-bbb：在注释后面添加空白行；
-bc：在声明段中，如果出现逗号就换行；
-bl：if（或是else、for等）与后面执行区段的“<span class="token punctuation">{</span>”不同行，且“<span class="token punctuation">}</span>”自成一行-bli<span class="token operator">&lt;</span>缩排格数<span class="token operator">&gt;</span>设置<span class="token punctuation">{</span><span class="token punctuation">}</span>缩排的格数；
-br：if（或是else、for等）与后面执行区段的“<span class="token punctuation">{</span>”同行，且“<span class="token punctuation">}</span>”自成一行；
-bs：在sizeof之后空一格；
-c<span class="token operator">&lt;</span>栏数<span class="token operator">&gt;</span>：将注释置于程序右侧指定的栏位；
-cd<span class="token operator">&lt;</span>栏数<span class="token operator">&gt;</span>：将注释置于声明右侧指定的栏位；
-cdb：注释符号自成一行；
-ce：将else置于“<span class="token punctuation">}</span>”（if执行区段的结尾）之后；
-ci：<span class="token operator">&lt;</span>缩排格数<span class="token operator">&gt;</span>：叙述过长而换行时，指定换行后缩排的格数；
-cli<span class="token operator">&lt;</span>缩排格数<span class="token operator">&gt;</span>：使用case时，switch缩排的格数；
-cp<span class="token operator">&lt;</span>栏数<span class="token operator">&gt;</span>：将注释置于else与elseif叙述右侧指定的栏位；
-cs：在case之后空一格；
-d<span class="token operator">&lt;</span>缩排格数<span class="token operator">&gt;</span>：针对不是放在程序码右侧的注释，设置其缩排格数；
-di<span class="token operator">&lt;</span>栏数<span class="token operator">&gt;</span>：将声明区段的变量置于指定的栏位；
-fc1：针对放在每行最前端的注释，设置其格式；
-fca：设置所有注释的格式；
-gnu：使用指定的GNU格式，该参数为默认值；
-i<span class="token operator">&lt;</span>格数<span class="token operator">&gt;</span>：设置缩排的格数；
-ip<span class="token operator">&lt;</span>格数<span class="token operator">&gt;</span>：设置参数的缩排格数；
-kr：指定使用Kernighan<span class="token operator">&amp;</span>Ritchie的格式；
-lp：叙述过长而换行，且叙述中包含了括号时，将括号中的每行起始栏位内容垂直对其排列；
-nbad：在声明区段后不要加上空白行；
-nbap：在程序后面不添加空白行；
-nbbb：在注释段后面不添加空白行；
-nbc：在声明段中，即使出现逗号，也不换行；
-ncdb：注释符号不自成一行；
-nce：不将else置于“<span class="token punctuation">}</span>”后面；
-ncs：不在case后面空一格；
-nfc1：不要格式化放在每行最前端的注释；
-nfca：不用格式化任何的注释；
-nip：参数不要缩排；
-nlp：叙述过长而换行，且叙述中包含了括号时，不用将括号中的每行起始栏位垂直对其排列；
-npcs：在调用函数名之后，不要添加空格；
-npro：不要读取indent的配置文件“.indent.pro”；
-npsl：程序类型与程序名称放在同一行；
-nsc：注释左侧不要添加星号；
-nsob：不用处理多余的空白行；
-nss：若for或while区段仅有一行时，在分号前不加空格；
-nv：不显示详细的信息；
-orig：使用berkeley格式；
-pcs：在调用函数名与“<span class="token punctuation">{</span>”之间添加空格；
-psl：程序类型置于程序名称的前一行；
-sc：在每行注释左侧添加星号；
-sob：删除多余的空白行；
-ss：若for或swile区段仅有一行时，在分号前加上空格；
-st：将结果显示在标准输出设备上；
-T：数据类型名称缩排；
-ts<span class="token operator">&lt;</span>格数<span class="token operator">&gt;</span>：设置tab的长度；
-v：显示详细的执行过程；
--version：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>使用indent命令将C语言源文件&quot;test.c&quot;中所有的sizeof后面添加一个空格，输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>indent <span class="token parameter variable">-bs</span> /home/rootlocal/桌面/test.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行上面的命令后，用户可以打开指定的源文件查看在sizeof后面是否都添加了一个空格。由于该命令的参数非常多，所以用户可以根据实际需要选择适合的参数进行使用即可。</p>`,12),l=[t];function d(c,o){return e(),s("div",null,l)}const v=n(i,[["render",d],["__file","indent.html.vue"]]),u=JSON.parse('{"path":"/command/linux/indent.html","title":"indent","lang":"zh-CN","frontmatter":{"description":"indent 格式化C语言的源文件 补充说明 indent命令 可辨识C的原始代码文件，并加以格式化，以方便程序员阅读、修改等操作。 语法 选项 实例 使用indent命令将C语言源文件\\"test.c\\"中所有的sizeof后面添加一个空格，输入如下命令： 执行上面的命令后，用户可以打开指定的源文件查看在sizeof后面是否都添加了一个空格。由于该命令的...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/indent.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"indent"}],["meta",{"property":"og:description","content":"indent 格式化C语言的源文件 补充说明 indent命令 可辨识C的原始代码文件，并加以格式化，以方便程序员阅读、修改等操作。 语法 选项 实例 使用indent命令将C语言源文件\\"test.c\\"中所有的sizeof后面添加一个空格，输入如下命令： 执行上面的命令后，用户可以打开指定的源文件查看在sizeof后面是否都添加了一个空格。由于该命令的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"indent\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":3.15,"words":944},"filePathRelative":"command/linux/indent.md","localizedDate":"2024年4月12日","autoDesc":true}');export{v as comp,u as data};
