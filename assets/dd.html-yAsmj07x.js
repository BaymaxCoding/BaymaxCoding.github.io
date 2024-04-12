import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as e}from"./app-D3p8wuGf.js";const t={},o=e(`<h1 id="dd" tabindex="-1"><a class="header-anchor" href="#dd"><span>dd</span></a></h1><p>复制文件并对原文件的内容进行转换和格式化处理</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>dd命令</strong> 用于复制文件并对原文件的内容进行转换和格式化处理。dd命令功能很强大的，对于一些比较底层的问题，使用dd命令往往可以得到出人意料的效果。用的比较多的还是用dd来备份裸设备。但是不推荐，如果需要备份oracle裸设备，可以使用rman备份，或使用第三方软件备份，使用dd的话，管理起来不太方便。</p><p>建议在有需要的时候使用dd 对物理磁盘操作，如果是文件系统的话还是使用tar backup cpio等其他命令更加方便。另外，使用dd对磁盘操作时，最好使用块设备文件。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dd<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">bs</span><span class="token operator">=</span><span class="token operator">&lt;</span>字节数<span class="token operator">&gt;</span>：将ibs（输入）与obs（输出）设成指定的字节数；
<span class="token assign-left variable">cbs</span><span class="token operator">=</span><span class="token operator">&lt;</span>字节数<span class="token operator">&gt;</span>：转换时，每次只转换指定的字节数；
<span class="token assign-left variable">conv</span><span class="token operator">=</span><span class="token operator">&lt;</span>关键字<span class="token operator">&gt;</span>：指定文件转换的方式；
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token operator">&lt;</span>区块数<span class="token operator">&gt;</span>：仅读取指定的区块数；
<span class="token assign-left variable">ibs</span><span class="token operator">=</span><span class="token operator">&lt;</span>字节数<span class="token operator">&gt;</span>：每次读取的字节数；
<span class="token assign-left variable">obs</span><span class="token operator">=</span><span class="token operator">&lt;</span>字节数<span class="token operator">&gt;</span>：每次输出的字节数；
<span class="token assign-left variable">if</span><span class="token operator">=</span><span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>：输入文件；
<span class="token assign-left variable">of</span><span class="token operator">=</span><span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>：输出到文件；
<span class="token assign-left variable">seek</span><span class="token operator">=</span><span class="token operator">&lt;</span>区块数<span class="token operator">&gt;</span>：一开始输出时，跳过指定的区块数；
<span class="token assign-left variable">skip</span><span class="token operator">=</span><span class="token operator">&lt;</span>区块数<span class="token operator">&gt;</span>：一开始读取时，跳过指定的区块数；
--help：帮助；
--version：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># dd if=/dev/zero of=sun.txt bs=1M count=1</span>
<span class="token number">1</span>+0 records <span class="token keyword">in</span>
<span class="token number">1</span>+0 records out
<span class="token number">1048576</span> bytes <span class="token punctuation">(</span><span class="token number">1.0</span> MB<span class="token punctuation">)</span> copied, <span class="token number">0.006107</span> seconds, <span class="token number">172</span> MB/s

<span class="token punctuation">[</span>root@localhost text<span class="token punctuation">]</span><span class="token comment"># du -sh sun.txt </span>
<span class="token number">1</span>.1M    sun.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该命令创建了一个1M大小的文件sun.txt，其中参数解释：</p><ul><li><strong>if</strong> 代表输入文件。如果不指定if，默认就会从stdin中读取输入。</li><li><strong>of</strong> 代表输出文件。如果不指定of，默认就会将stdout作为默认输出。</li><li><strong>bs</strong> 代表字节为单位的块大小。</li><li><strong>count</strong> 代表被复制的块数。</li><li><strong>/dev/zero</strong> 是一个字符设备，会不断返回0值字节（\\0）。</li></ul><p>块大小可以使用的计量单位表</p><table><thead><tr><th>单元大小</th><th>代码</th></tr></thead><tbody><tr><td>字节（1B）</td><td>c</td></tr><tr><td>字节（2B）</td><td>w</td></tr><tr><td>块（512B）</td><td>b</td></tr><tr><td>千字节（1024B）</td><td>k</td></tr><tr><td>兆字节（1024KB）</td><td>M</td></tr><tr><td>吉字节（1024MB）</td><td>G</td></tr></tbody></table><p>以上命令可以看出dd命令来测试内存操作速度：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1048576</span> bytes <span class="token punctuation">(</span><span class="token number">1.0</span> MB<span class="token punctuation">)</span> copied, <span class="token number">0.006107</span> seconds, <span class="token number">172</span> MB/s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>生成随机字符串</strong></p><p>我们甚至可以使用 /dev/urandom 设备配合 dd 命令 来获取随机字符串。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># dd if=/dev/urandom bs=1 count=15|base64 -w 0</span>
<span class="token number">15</span>+0 records <span class="token keyword">in</span>
<span class="token number">15</span>+0 records out
<span class="token number">15</span> bytes <span class="token punctuation">(</span><span class="token number">15</span> B<span class="token punctuation">)</span> copied, <span class="token number">0.000111993</span> s, <span class="token number">134</span> kB/s
wFRAnlkXeBXmWs1MyGEs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试磁盘写入速度</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># dd if=/dev/zero of=/tmp/testfile bs=1G count=1 oflag=direct</span>
<span class="token number">1</span>+0 records <span class="token keyword">in</span>
<span class="token number">1</span>+0 records out
<span class="token number">1073741824</span> bytes <span class="token punctuation">(</span><span class="token number">1.1</span> GB<span class="token punctuation">)</span> copied, <span class="token number">7.10845</span> s, <span class="token number">151</span> MB/s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试磁盘读取速度</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># dd if=/tmp/testfile of=/dev/null bs=1G count=1 iflag=direct</span>
<span class="token number">1</span>+0 records <span class="token keyword">in</span>
<span class="token number">1</span>+0 records out
<span class="token number">1073741824</span> bytes <span class="token punctuation">(</span><span class="token number">1.1</span> GB<span class="token punctuation">)</span> copied, <span class="token number">6.53009</span> s, <span class="token number">164</span> MB/s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),l=[o];function p(d,i){return n(),a("div",null,l)}const u=s(t,[["render",p],["__file","dd.html.vue"]]),m=JSON.parse('{"path":"/command/linux/dd.html","title":"dd","lang":"zh-CN","frontmatter":{"description":"dd 复制文件并对原文件的内容进行转换和格式化处理 补充说明 dd命令 用于复制文件并对原文件的内容进行转换和格式化处理。dd命令功能很强大的，对于一些比较底层的问题，使用dd命令往往可以得到出人意料的效果。用的比较多的还是用dd来备份裸设备。但是不推荐，如果需要备份oracle裸设备，可以使用rman备份，或使用第三方软件备份，使用dd的话，管理起来...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/dd.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"dd"}],["meta",{"property":"og:description","content":"dd 复制文件并对原文件的内容进行转换和格式化处理 补充说明 dd命令 用于复制文件并对原文件的内容进行转换和格式化处理。dd命令功能很强大的，对于一些比较底层的问题，使用dd命令往往可以得到出人意料的效果。用的比较多的还是用dd来备份裸设备。但是不推荐，如果需要备份oracle裸设备，可以使用rman备份，或使用第三方软件备份，使用dd的话，管理起来..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"dd\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":2.45,"words":734},"filePathRelative":"command/linux/dd.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,m as data};
