import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as t}from"./app-D3p8wuGf.js";const o={},s=t(`<h1 id="nohup" tabindex="-1"><a class="header-anchor" href="#nohup"><span>nohup</span></a></h1><p>将程序以忽略挂起信号的方式运行起来</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>nohup命令</strong> 可以将程序以忽略挂起信号的方式运行起来，被运行的程序的输出信息将不会显示到终端。</p><p>无论是否将 nohup 命令的输出重定向到终端，输出都将附加到当前目录的 nohup.out 文件中。如果当前目录的 nohup.out 文件不可写，输出重定向到<code>$HOME/nohup.out</code>文件中。如果没有文件能创建或打开以用于追加，那么 command 参数指定的命令不可调用。如果标准错误是一个终端，那么把指定的命令写给标准错误的所有输出作为标准输出重定向到相同的文件描述符。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><p>nohup(选项)(参数)</p><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>--help：在线帮助；
--version：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>程序及选项：要运行的程序及选项。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>使用nohup命令提交作业，如果使用nohup命令提交作业，那么在缺省情况下该作业的所有输出都被重定向到一个名为nohup.out的文件中，除非另外指定了输出文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">nohup</span> <span class="token builtin class-name">command</span> <span class="token operator">&gt;</span> myout.file <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上面的例子中，输出被重定向到myout.file文件中。</p><p>该指令表示不做挂断操作，后台下载</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">nohup</span> <span class="token function">wget</span> site.com/file.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面命令，会在同一个目录下生成一个名称为 <code>nohup.out</code> 的文件，其中包含了正在运行的程序的输出内容</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">nohup</span> <span class="token function">ping</span> <span class="token parameter variable">-c</span> <span class="token number">10</span> baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),i=[s];function p(l,r){return a(),n("div",null,i)}const h=e(o,[["render",p],["__file","nohup.html.vue"]]),u=JSON.parse('{"path":"/command/linux/nohup.html","title":"nohup","lang":"zh-CN","frontmatter":{"description":"nohup 将程序以忽略挂起信号的方式运行起来 补充说明 nohup命令 可以将程序以忽略挂起信号的方式运行起来，被运行的程序的输出信息将不会显示到终端。 无论是否将 nohup 命令的输出重定向到终端，输出都将附加到当前目录的 nohup.out 文件中。如果当前目录的 nohup.out 文件不可写，输出重定向到$HOME/nohup.out文件中...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/nohup.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"nohup"}],["meta",{"property":"og:description","content":"nohup 将程序以忽略挂起信号的方式运行起来 补充说明 nohup命令 可以将程序以忽略挂起信号的方式运行起来，被运行的程序的输出信息将不会显示到终端。 无论是否将 nohup 命令的输出重定向到终端，输出都将附加到当前目录的 nohup.out 文件中。如果当前目录的 nohup.out 文件不可写，输出重定向到$HOME/nohup.out文件中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nohup\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.3,"words":389},"filePathRelative":"command/linux/nohup.md","localizedDate":"2024年4月12日","autoDesc":true}');export{h as comp,u as data};