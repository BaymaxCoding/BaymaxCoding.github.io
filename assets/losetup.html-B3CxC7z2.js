import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,b as n}from"./app-D3p8wuGf.js";const t={},o=n(`<h1 id="losetup" tabindex="-1"><a class="header-anchor" href="#losetup"><span>losetup</span></a></h1><p>设定与控制循环（loop）设备</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>losetup命令</strong> 用来设置循环设备。循环设备可把文件虚拟成块设备，籍此来模拟整个文件系统，让用户得以将其视为硬盘驱动器，光驱或软驱等设备，并挂入当作目录来使用。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>losetup <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> encryption <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-o</span> offset <span class="token punctuation">]</span> loop_device <span class="token function">file</span>
losetup <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token punctuation">]</span> loop_device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">-a</span> 显示所有循环设备的状态。
<span class="token parameter variable">-d</span> 卸除设备。
<span class="token parameter variable">-e</span> <span class="token operator">&lt;</span>加密选项<span class="token operator">&gt;</span> 启动加密编码 。
<span class="token parameter variable">-f</span> 寻找第一个未使用的循环设备。
<span class="token parameter variable">-o</span> <span class="token operator">&lt;</span>偏移量<span class="token operator">&gt;</span>设置数据偏移量，单位是字节。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><ul><li>loop_device：循环设备可以是/dev/loop0, /dev/loop1 ... /dev/loop7。</li><li>file：要与循环设备相关联的文件名，这个往往是一个磁盘镜象文件，如 *.img</li></ul><h3 id="loop设备介绍" tabindex="-1"><a class="header-anchor" href="#loop设备介绍"><span>loop设备介绍</span></a></h3><p>在类 UNIX 系统里，loop 设备是一种伪设备(pseudo-device)，或者也可以说是仿真设备。它能使我们像块设备一样访问一个文件。在使用之前，一个 loop 设备必须要和一个文件进行连接。这种结合方式给用户提供了一个替代块特殊文件的接口。因此，如果这个文件包含有一个完整的文件系统，那么这个文件就可以像一个磁盘设备一样被 mount 起来。</p><p>上面说的文件格式，我们经常见到的是 cd 或 DVD 的 ISO 光盘镜像文件或者是软盘(硬盘)的 *.img 镜像文件。通过这种 loop mount (回环mount)的方式，这些镜像文件就可以被 mount 到当前文件系统的一个目录下。</p><p>至此，顺便可以再理解一下 loop 之含义：对于第一层文件系统，它直接安装在我们计算机的物理设备之上；而对于这种被 mount 起来的镜像文件(它也包含有文件系统)，它是建立在第一层文件系统之上，这样看来，它就像是在第一层文件系统之上再绕了一圈的文件系统，所以称为 loop。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>创建空的磁盘镜像文件，这里创建一个1.44M的软盘：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>floppy.img <span class="token assign-left variable">bs</span><span class="token operator">=</span><span class="token number">512</span> <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">2880</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 losetup将磁盘镜像文件虚拟成快设备：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>losetup /dev/loop1 floppy.img
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>挂载块设备：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mount</span> /dev/loop0 /tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>经过上面的三步之后，我们就可以通过/tmp目录，像访问真实快设备一样来访问磁盘镜像文件floppy.img。</p><p>卸载loop设备：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">umount</span> /tmp
losetup <span class="token parameter variable">-d</span> /dev/loop1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,24),l=[o];function p(i,r){return a(),s("div",null,l)}const u=e(t,[["render",p],["__file","losetup.html.vue"]]),m=JSON.parse('{"path":"/command/linux/losetup.html","title":"losetup","lang":"zh-CN","frontmatter":{"description":"losetup 设定与控制循环（loop）设备 补充说明 losetup命令 用来设置循环设备。循环设备可把文件虚拟成块设备，籍此来模拟整个文件系统，让用户得以将其视为硬盘驱动器，光驱或软驱等设备，并挂入当作目录来使用。 语法 选项 参数 loop_device：循环设备可以是/dev/loop0, /dev/loop1 ... /dev/loop7。...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/losetup.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"losetup"}],["meta",{"property":"og:description","content":"losetup 设定与控制循环（loop）设备 补充说明 losetup命令 用来设置循环设备。循环设备可把文件虚拟成块设备，籍此来模拟整个文件系统，让用户得以将其视为硬盘驱动器，光驱或软驱等设备，并挂入当作目录来使用。 语法 选项 参数 loop_device：循环设备可以是/dev/loop0, /dev/loop1 ... /dev/loop7。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"losetup\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"loop设备介绍","slug":"loop设备介绍","link":"#loop设备介绍","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":2.12,"words":637},"filePathRelative":"command/linux/losetup.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,m as data};
