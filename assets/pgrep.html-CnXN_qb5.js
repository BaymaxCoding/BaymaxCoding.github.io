import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,b as e}from"./app-D3p8wuGf.js";const t={},p=e(`<h1 id="pgrep" tabindex="-1"><a class="header-anchor" href="#pgrep"><span>pgrep</span></a></h1><p>根据用户给出的信息在当前运行进程中查找并列出符合条件的进程ID（PID）</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>pgrep命令</strong> 以名称为依据从运行进程队列中查找进程，并显示查找到的进程id。每一个进程ID以一个十进制数表示，通过一个分割字符串和下一个ID分开，默认的分割字符串是一个新行。对于每个属性选项，用户可以在命令行上指定一个以逗号分割的可能值的集合。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pgrep<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-d, <span class="token parameter variable">--delimiter</span> <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>：指定输出的分隔符。
-l, --list-name：列出进程ID和进程名称。
-a, --list-full：列出进程ID和完整的命令行。
-v, --inverse：反向匹配，即只显示不匹配的进程。
-w, --lightweight：列出所有TID（轻量级线程）。
-c, --count：显示匹配的进程数量。
-f, --full：使用完整的进程名称进行匹配。
-g, <span class="token parameter variable">--pgroup</span> <span class="token operator">&lt;</span>PGID,<span class="token punctuation">..</span>.<span class="token operator">&gt;</span>：匹配指定的进程组ID。
-G, <span class="token parameter variable">--group</span> <span class="token operator">&lt;</span>GID,<span class="token punctuation">..</span>.<span class="token operator">&gt;</span>：匹配真实组ID。
-i, --ignore-case：忽略大小写进行匹配。
-n, --newest：选择最近启动的进程。
-o, --oldest：选择最早启动的进程。
-O, <span class="token parameter variable">--older</span> <span class="token operator">&lt;</span>seconds<span class="token operator">&gt;</span>：选择启动时间早于指定秒数的进程。
-P, <span class="token parameter variable">--parent</span> <span class="token operator">&lt;</span><span class="token environment constant">PPID</span>,<span class="token punctuation">..</span>.<span class="token operator">&gt;</span>：只匹配给定父进程的子进程。
-s, <span class="token parameter variable">--session</span> <span class="token operator">&lt;</span>SID,<span class="token punctuation">..</span>.<span class="token operator">&gt;</span>：匹配会话ID。
-t, <span class="token parameter variable">--terminal</span> <span class="token operator">&lt;</span>tty,<span class="token punctuation">..</span>.<span class="token operator">&gt;</span>：根据控制终端进行匹配。
-u, <span class="token parameter variable">--euid</span> <span class="token operator">&lt;</span>ID,<span class="token punctuation">..</span>.<span class="token operator">&gt;</span>：根据有效用户ID进行匹配。
-U, <span class="token parameter variable">--uid</span> <span class="token operator">&lt;</span>ID,<span class="token punctuation">..</span>.<span class="token operator">&gt;</span>：根据真实用户ID进行匹配。
-x, --exact：精确匹配进程名称。
-F, <span class="token parameter variable">--pidfile</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>：从文件中读取PID。
-L, --logpidfile：如果PID文件没有锁定，则失败。
-r, <span class="token parameter variable">--runstates</span> <span class="token operator">&lt;</span>state<span class="token operator">&gt;</span>：匹配运行状态（D, S, Z等）。
<span class="token parameter variable">--ns</span> <span class="token operator">&lt;</span>PID<span class="token operator">&gt;</span>：匹配与指定PID相同命名空间的进程。
<span class="token parameter variable">--nslist</span> <span class="token operator">&lt;</span>ns,<span class="token punctuation">..</span>.<span class="token operator">&gt;</span>：列出将在 <span class="token parameter variable">--ns</span> 选项中考虑的命名空间。可用的命名空间包括：ipc、mnt、net、pid、user、uts。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>进程名称：指定要查找的进程名称，同时也支持类似grep指令中的匹配模式。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pgrep <span class="token parameter variable">-lo</span> httpd
<span class="token number">4557</span> httpd
 <span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pgrep -ln httpd</span>
<span class="token number">4566</span> httpd

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pgrep -l httpd</span>
<span class="token number">4557</span> httpd
<span class="token number">4560</span> httpd
<span class="token number">4561</span> httpd
<span class="token number">4562</span> httpd
<span class="token number">4563</span> httpd
<span class="token number">4564</span> httpd
<span class="token number">4565</span> httpd
<span class="token number">4566</span> httpd

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pgrep httpd 4557</span>
<span class="token number">4560</span>
<span class="token number">4561</span>
<span class="token number">4562</span>
<span class="token number">4563</span>
<span class="token number">4564</span>
<span class="token number">4565</span>
<span class="token number">4566</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pgrep -x httpd</span>
<span class="token number">4557</span>
<span class="token number">4560</span>
<span class="token number">4561</span>
<span class="token number">4562</span>
<span class="token number">4563</span>
<span class="token number">4564</span>
<span class="token number">4565</span>
<span class="token number">4566</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[p];function i(r,o){return a(),s("div",null,l)}const u=n(t,[["render",i],["__file","pgrep.html.vue"]]),m=JSON.parse('{"path":"/command/linux/pgrep.html","title":"pgrep","lang":"zh-CN","frontmatter":{"description":"pgrep 根据用户给出的信息在当前运行进程中查找并列出符合条件的进程ID（PID） 补充说明 pgrep命令 以名称为依据从运行进程队列中查找进程，并显示查找到的进程id。每一个进程ID以一个十进制数表示，通过一个分割字符串和下一个ID分开，默认的分割字符串是一个新行。对于每个属性选项，用户可以在命令行上指定一个以逗号分割的可能值的集合。 语法 选项...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/pgrep.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"pgrep"}],["meta",{"property":"og:description","content":"pgrep 根据用户给出的信息在当前运行进程中查找并列出符合条件的进程ID（PID） 补充说明 pgrep命令 以名称为依据从运行进程队列中查找进程，并显示查找到的进程id。每一个进程ID以一个十进制数表示，通过一个分割字符串和下一个ID分开，默认的分割字符串是一个新行。对于每个属性选项，用户可以在命令行上指定一个以逗号分割的可能值的集合。 语法 选项..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pgrep\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.93,"words":578},"filePathRelative":"command/linux/pgrep.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,m as data};
