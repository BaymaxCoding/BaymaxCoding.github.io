import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,b as n}from"./app-D3p8wuGf.js";const t={},i=n(`<h1 id="stty" tabindex="-1"><a class="header-anchor" href="#stty"><span>stty</span></a></h1><p>修改终端命令行的相关设置</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>stty命令</strong> 修改终端命令行的相关设置。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>stty<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-a：以容易阅读的方式打印当前的所有配置；
-g：以stty可读方式打印当前的所有配置。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>终端设置：指定终端命令行的设置选项。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p><strong>在命令行下，禁止输出大写的方法：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>stty iuclc     <span class="token comment">#开启</span>
stty <span class="token parameter variable">-iuclc</span>    <span class="token comment">#恢复</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在命令行下禁止输出小写：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>stty olcuc    <span class="token comment">#开启</span>
stty <span class="token parameter variable">-olcuc</span>   <span class="token comment">#恢复</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>打印出终端的行数和列数：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>stty size
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>改变Ctrl+D的方法:</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>stty eof <span class="token string">&quot;string&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>系统默认是Ctrl+D来表示文件的结束，而通过这种方法，可以改变！</p><p><strong>屏蔽显示：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>stty <span class="token parameter variable">-echo</span>   <span class="token comment">#禁止回显</span>
stty <span class="token builtin class-name">echo</span>    <span class="token comment">#打开回显</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>测试方法:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>stty -echo<span class="token punctuation">;</span><span class="token builtin class-name">read</span><span class="token punctuation">;</span>stty <span class="token builtin class-name">echo</span><span class="token punctuation">;</span><span class="token builtin class-name">read</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>忽略回车符：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>stty igncr     <span class="token comment">#开启</span>
stty <span class="token parameter variable">-igncr</span>    <span class="token comment">#恢复</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定时输入：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function-name function">timeout_read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token assign-left variable">timeout</span><span class="token operator">=</span><span class="token variable">$1</span>
    <span class="token assign-left variable">old_stty_settings</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>stty <span class="token parameter variable">-g</span><span class="token variable">\`</span></span>　　<span class="token comment">#save current settings</span>
    stty <span class="token parameter variable">-icanon</span> min <span class="token number">0</span> <span class="token function">time</span> <span class="token number">100</span>　　<span class="token comment">#set 10seconds,not 100seconds</span>
    <span class="token builtin class-name">eval</span> <span class="token builtin class-name">read</span> varname　　          <span class="token comment">#=read $varname</span>
    stty <span class="token string">&quot;<span class="token variable">$old_stty_settings</span>&quot;</span>　　  <span class="token comment">#recover settings</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更简单的方法就是利用read命令的<code>-t</code>选项：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-t</span> <span class="token number">10</span> varname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30),l=[i];function c(r,d){return s(),e("div",null,l)}const m=a(t,[["render",c],["__file","stty.html.vue"]]),u=JSON.parse('{"path":"/command/linux/stty.html","title":"stty","lang":"zh-CN","frontmatter":{"description":"stty 修改终端命令行的相关设置 补充说明 stty命令 修改终端命令行的相关设置。 语法 选项 参数 终端设置：指定终端命令行的设置选项。 实例 在命令行下，禁止输出大写的方法： 在命令行下禁止输出小写： 打印出终端的行数和列数： 改变Ctrl+D的方法: 系统默认是Ctrl+D来表示文件的结束，而通过这种方法，可以改变！ 屏蔽显示： 测试方法: ...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/stty.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"stty"}],["meta",{"property":"og:description","content":"stty 修改终端命令行的相关设置 补充说明 stty命令 修改终端命令行的相关设置。 语法 选项 参数 终端设置：指定终端命令行的设置选项。 实例 在命令行下，禁止输出大写的方法： 在命令行下禁止输出小写： 打印出终端的行数和列数： 改变Ctrl+D的方法: 系统默认是Ctrl+D来表示文件的结束，而通过这种方法，可以改变！ 屏蔽显示： 测试方法: ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"stty\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.96,"words":288},"filePathRelative":"command/linux/stty.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};