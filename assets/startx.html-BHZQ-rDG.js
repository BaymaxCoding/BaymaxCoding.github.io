import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,b as e}from"./app-D3p8wuGf.js";const t={},i=e(`<h1 id="startx" tabindex="-1"><a class="header-anchor" href="#startx"><span>startx</span></a></h1><p>用来启动X Window</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>startx命令</strong> 用来启动X Window，实际上启动X Window的程序为xinit。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>startx<span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><ul><li>客户端及选项：X客户端及选项；</li><li>服务器及选项：X服务器及选项。</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>要在工作站上或 X 终端上启动 X 会话，请输入：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>startx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要在工作站上强制启动 X 会话，请输入：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>startx <span class="token parameter variable">-w</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要为 X 终端启动 X 会话，并注销用户的 telnet 会话，请输入：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>startx<span class="token punctuation">;</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span> $
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要使用 .xinitrc 脚本启动 X 会话，请输入：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>startx <span class="token parameter variable">-x</span> .xinitrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要使用 mwm 窗口管理器启动 X 会话，请输入：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>startx <span class="token parameter variable">-m</span> mwm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是，如果找到启动脚本文件，则忽略<code>-w</code>选项。在启动脚本中，启动窗口管理器、装入X资源以及产生X客户机是用户的责任。以下是.xsession脚本的一个示例。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/csh</span>
 <span class="token punctuation">(</span>mwm <span class="token operator">&amp;</span><span class="token punctuation">)</span>
 xrdb <span class="token parameter variable">-load</span> .Xdefaults
 <span class="token punctuation">(</span>xclock <span class="token parameter variable">-g</span> 75x75+0+0 <span class="token operator">&amp;</span><span class="token punctuation">)</span>
 <span class="token punctuation">(</span>xbiff <span class="token parameter variable">-g</span> 75x75+101-0 <span class="token operator">&amp;</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;/dev/lft*&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">tty</span><span class="token variable">\`</span></span>&quot;</span><span class="token punctuation">)</span> <span class="token keyword">then</span>
  aixterm <span class="token parameter variable">-g</span> 80x24+0+0 +ut <span class="token parameter variable">-C</span> <span class="token parameter variable">-T</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">hostname</span><span class="token variable">\`</span></span>
 <span class="token keyword">else</span>
  aixterm <span class="token parameter variable">-g</span> 80x24+0+0 +ut <span class="token parameter variable">-T</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">hostname</span><span class="token variable">\`</span></span>
 endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于工作站，startup脚本中的最后一行应该是前台aixterm命令，该命令带有<code>-C</code>选项表示控制台信息。对于X终端，startup脚本中的最后一行应该是不带有<code>-C</code>选项的前台aixterm命令。另外，由于某些X终端在关闭时不终止telnet会话，所以用户必须在使用热键切换至X会话前退出当前的telnet会话。</p><p><code>/usr/lib/X11/xdm/Xsession</code>文件中的xdm命令也可以使用startx命令。这为xdm命令提供了startx命令的功能。</p><p>以下是启动X会话一贯使用的文件名。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token environment constant">$HOME</span>/.xerrors 其中，startx 用来重定向错误消息。在缺省情况下，startx 将错误重定向至用户主目录中的 .xerrors 文件中。
<span class="token environment constant">$HOME</span>/.Xinit,  
<span class="token environment constant">$HOME</span>/.xinit,  
<span class="token environment constant">$HOME</span>/.Xinitrc,  
<span class="token environment constant">$HOME</span>/.xinitrc,  
<span class="token environment constant">$HOME</span>/.xsession 作为包含 shell 命令的“启动文件”来启动窗口管理器、装入 X 资源并产生 X 客户机。
<span class="token environment constant">$HOME</span>/.Xdefaults,  
<span class="token environment constant">$HOME</span>/.xresources 作为装入的 X 资源文件来设置 X 客户机的用户首选项。
<span class="token environment constant">$HOME</span>/.mwmrc mwm 配置文件。
<span class="token environment constant">$HOME</span>/.twmrc twm 配置文件。
<span class="token environment constant">$HOME</span>/.awmrc awm 配置文件。
<span class="token environment constant">$HOME</span>/.uwmrc uwm 配置文件。
/dev/lft* 终端或 tty、工作站初始 login shell 的界面。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),l=[i];function r(o,c){return n(),s("div",null,l)}const m=a(t,[["render",r],["__file","startx.html.vue"]]),u=JSON.parse('{"path":"/command/linux/startx.html","title":"startx","lang":"zh-CN","frontmatter":{"description":"startx 用来启动X Window 补充说明 startx命令 用来启动X Window，实际上启动X Window的程序为xinit。 语法 参数 客户端及选项：X客户端及选项； 服务器及选项：X服务器及选项。 实例 要在工作站上或 X 终端上启动 X 会话，请输入： 要在工作站上强制启动 X 会话，请输入： 要为 X 终端启动 X 会话，并注销...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/startx.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"startx"}],["meta",{"property":"og:description","content":"startx 用来启动X Window 补充说明 startx命令 用来启动X Window，实际上启动X Window的程序为xinit。 语法 参数 客户端及选项：X客户端及选项； 服务器及选项：X服务器及选项。 实例 要在工作站上或 X 终端上启动 X 会话，请输入： 要在工作站上强制启动 X 会话，请输入： 要为 X 终端启动 X 会话，并注销..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"startx\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.9,"words":570},"filePathRelative":"command/linux/startx.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
