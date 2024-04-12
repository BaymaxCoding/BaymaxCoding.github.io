import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,b as e}from"./app-DOGW-9XX.js";const t={},l=e(`<h1 id="hdparm" tabindex="-1"><a class="header-anchor" href="#hdparm"><span>hdparm</span></a></h1><p>显示与设定硬盘的参数</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>hdparm命令</strong> 提供了一个命令行的接口用于读取和设置IDE或SCSI硬盘参数。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hdparm<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-a<span class="token operator">&lt;</span>快取分区<span class="token operator">&gt;</span>：设定读取文件时，预先存入块区的分区数，若不加上<span class="token operator">&lt;</span>快取分区<span class="token operator">&gt;</span>选项，则显示目前的设定；
-A<span class="token operator">&lt;</span><span class="token number">0</span>或<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>：启动或关闭读取文件时的快取功能；
-c<span class="token operator">&lt;</span>I/O模式<span class="token operator">&gt;</span>：设定IDE32位I/O模式；
-C：检测IDE硬盘的电源管理模式；
-d<span class="token operator">&lt;</span><span class="token number">0</span>或<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>：设定磁盘的DMA模式；
-f：将内存缓冲区的数据写入硬盘，并清除缓冲区；
-g：显示硬盘的磁轨，磁头，磁区等参数；
-h：显示帮助；
-i：显示硬盘的硬件规格信息，这些信息是在开机时由硬盘本身所提供；
-I：直接读取硬盘所提供的硬件规格信息；
-k<span class="token operator">&lt;</span><span class="token number">0</span>或<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>：重设硬盘时，保留-dmu参数的设定；
-K<span class="token operator">&lt;</span><span class="token number">0</span>或<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>：重设硬盘时，保留-APSWXZ参数的设定；
-m<span class="token operator">&lt;</span>磁区数<span class="token operator">&gt;</span>：设定硬盘多重分区存取的分区数；
-n<span class="token operator">&lt;</span><span class="token number">0</span>或<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>：忽略硬盘写入时所发生的错误；
-p<span class="token operator">&lt;</span>PIO模式<span class="token operator">&gt;</span>：设定硬盘的PIO模式；
-P<span class="token operator">&lt;</span>磁区数<span class="token operator">&gt;</span>：设定硬盘内部快取的分区数；
-q:在执行后续的参数时，不在屏幕上显示任何信息；
-r<span class="token operator">&lt;</span><span class="token number">0</span>或<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>:设定硬盘的读写模式；
-S<span class="token operator">&lt;</span>时间<span class="token operator">&gt;</span>:设定硬盘进入省电模式前的等待时间；
-t<span class="token punctuation">;</span>评估硬盘的读取效率；
-T：平谷硬盘快取的读取效率；
-u<span class="token operator">&lt;</span><span class="token number">0</span>或<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>：在硬盘存取时，允许其他中断要求同时执行；
-v：显示硬盘的相关设定；
-w<span class="token operator">&lt;</span><span class="token number">0</span>或<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>：设定硬盘的写入快取；
-X<span class="token operator">&lt;</span>传输模式<span class="token operator">&gt;</span>：设定硬盘的传输模式；
-y：使IDE硬盘进入省电模式；
-Y：使IDE硬盘进入睡眠模式；
-Z：关闭某些Seagate硬盘的自动省电功能。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>设备文件：指定id驱动对应的设备文件名。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>显示硬盘的相关设置：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hdparm /dev/sda
/dev/sda:
IO_support <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">(</span>default <span class="token number">16</span>-bit<span class="token punctuation">)</span>
<span class="token builtin class-name">readonly</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">(</span>off<span class="token punctuation">)</span>
readahead <span class="token operator">=</span> <span class="token number">256</span> <span class="token punctuation">(</span>on<span class="token punctuation">)</span>
geometry <span class="token operator">=</span> <span class="token number">19457</span>［柱面数］/255［磁头数］/63［扇区数］, sectors <span class="token operator">=</span> <span class="token number">312581808</span>［总扇区数］, start <span class="token operator">=</span> <span class="token number">0</span>［起始扇区数］

\`\`<span class="token variable"><span class="token variable">\`</span>shell

显示硬盘的柱面、磁头、扇区数：

<span class="token variable">\`</span></span>\`\`shell
hdparm <span class="token parameter variable">-g</span> /dev/sda
/dev/sda:
geometry <span class="token operator">=</span> <span class="token number">19457</span>［柱面数］/255［磁头数］/63［扇区数］, sectors <span class="token operator">=</span> <span class="token number">312581808</span>［总扇区数］, start <span class="token operator">=</span> <span class="token number">0</span>［起始扇区数］
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试硬盘的读取速度：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hdparm <span class="token parameter variable">-T</span> /dev/sda
/dev/sda:
 Timing cached reads:   <span class="token number">4684</span> MB <span class="token keyword">in</span>  <span class="token number">2.00</span> seconds <span class="token operator">=</span> <span class="token number">2342.92</span> MB/sec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试硬盘缓存的读取速度：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hdparm <span class="token parameter variable">-T</span> /dev/xvda
/dev/xvda:
Timing cached reads: <span class="token number">11154</span> MB <span class="token keyword">in</span> <span class="token number">1.98</span> seconds <span class="token operator">=</span> <span class="token number">5633.44</span> MB/sec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检测硬盘的电源管理模式：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hdparm <span class="token parameter variable">-C</span> /dev/sda
/dev/sda:
drive state is: standby <span class="token punctuation">[</span>省电模式<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询并设置硬盘多重扇区存取的扇区数，以增进硬盘的存取效率：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hdparm <span class="token parameter variable">-m</span> /dev/sda
hdparm <span class="token parameter variable">-m</span>    <span class="token comment">#参数值为整数值如8 /dev/sda</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>附：硬盘坏道修复方法</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>检查：smartctl <span class="token parameter variable">-l</span> selftest /dev/sda
卸载：umount /dev/sda*
修复：badblocks /dev/sda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),p=[l];function i(r,d){return s(),n("div",null,p)}const m=a(t,[["render",i],["__file","hdparm.html.vue"]]),v=JSON.parse('{"path":"/command/linux/hdparm.html","title":"hdparm","lang":"zh-CN","frontmatter":{"description":"hdparm 显示与设定硬盘的参数 补充说明 hdparm命令 提供了一个命令行的接口用于读取和设置IDE或SCSI硬盘参数。 语法 选项 参数 设备文件：指定id驱动对应的设备文件名。 实例 显示硬盘的相关设置： 测试硬盘的读取速度： 测试硬盘缓存的读取速度： 检测硬盘的电源管理模式： 查询并设置硬盘多重扇区存取的扇区数，以增进硬盘的存取效率： 附：...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/hdparm.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"hdparm"}],["meta",{"property":"og:description","content":"hdparm 显示与设定硬盘的参数 补充说明 hdparm命令 提供了一个命令行的接口用于读取和设置IDE或SCSI硬盘参数。 语法 选项 参数 设备文件：指定id驱动对应的设备文件名。 实例 显示硬盘的相关设置： 测试硬盘的读取速度： 测试硬盘缓存的读取速度： 检测硬盘的电源管理模式： 查询并设置硬盘多重扇区存取的扇区数，以增进硬盘的存取效率： 附：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"hdparm\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":2.53,"words":759},"filePathRelative":"command/linux/hdparm.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,v as data};
