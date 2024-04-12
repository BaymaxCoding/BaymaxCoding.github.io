import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,b as s}from"./app-D3p8wuGf.js";const n={},i=s(`<h1 id="iostat" tabindex="-1"><a class="header-anchor" href="#iostat"><span>iostat</span></a></h1><p>监视系统输入输出设备和CPU的使用情况</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>iostat命令</strong> 被用于监视系统输入输出设备和CPU的使用情况。它的特点是汇报磁盘活动统计情况，同时也会汇报出CPU使用情况。同vmstat一样，iostat也有一个弱点，就是它不能对某个进程进行深入分析，仅对系统的整体情况进行分析。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>iostat<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-c：仅显示CPU使用情况；
-d：仅显示设备利用率；
-k：显示状态以千字节每秒为单位，而不使用块每秒；
-m：显示状态以兆字节每秒为单位；
-p：仅显示块设备和所有被使用的其他分区的状态；
-t：显示每个报告产生时的时间；
-V：显示版号并退出；
-x：显示扩展状态。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><ul><li>间隔时间：每次报告的间隔时间（秒）；</li><li>次数：显示报告的次数。</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>用<code>iostat -x /dev/sda1</code>来观看磁盘I/O的详细情况：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>iostat <span class="token parameter variable">-x</span> /dev/sda1 
Linux <span class="token number">2.6</span>.18-164.el5xen <span class="token punctuation">(</span>localhost.localdomain<span class="token punctuation">)</span>
<span class="token number">2010</span>年03月26日  

avg-cpu:  %user   %nice %system %iowait 
%steal   %idle  
            <span class="token number">0.11</span>    <span class="token number">0.02</span>    <span class="token number">0.18</span>    <span class="token number">0.35</span>   
<span class="token number">0.03</span>    <span class="token number">99.31</span>  

Device:         tps   Blk_read/s    Blk_wrtn/s  
Blk_read   Blk_wrtn  
sda1                <span class="token number">0.02</span>          <span class="token number">0.08</span>       
<span class="token number">0.00</span>          <span class="token number">2014</span>               <span class="token number">4</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细说明：第二行是系统信息和监测时间，第三行和第四行显示CPU使用情况（具体内容和mpstat命令相同）。这里主要关注后面I/O输出的信息，如下所示：</p><table><thead><tr><th>标示</th><th>说明</th></tr></thead><tbody><tr><td>Device</td><td>监测设备名称</td></tr><tr><td>rrqm/s</td><td>每秒需要读取需求的数量</td></tr><tr><td>wrqm/s</td><td>每秒需要写入需求的数量</td></tr><tr><td>r/s</td><td>每秒实际读取需求的数量</td></tr><tr><td>w/s</td><td>每秒实际写入需求的数量</td></tr><tr><td>rsec/s</td><td>每秒读取区段的数量</td></tr><tr><td>wsec/s</td><td>每秒写入区段的数量</td></tr><tr><td>rkB/s</td><td>每秒实际读取的大小，单位为KB</td></tr><tr><td>wkB/s</td><td>每秒实际写入的大小，单位为KB</td></tr><tr><td>avgrq-sz</td><td>需求的平均大小区段</td></tr><tr><td>avgqu-sz</td><td>需求的平均队列长度</td></tr><tr><td>await</td><td>等待I/O平均的时间（milliseconds）</td></tr><tr><td>svctm</td><td>I/O需求完成的平均时间</td></tr><tr><td>%util</td><td>设备带宽的使用率，达到100%表示饱和，达到性能瓶颈，如果是支持处理并发请求的设备则不代表性能瓶颈。</td></tr></tbody></table>`,15),d=[i];function l(r,o){return a(),e("div",null,d)}const m=t(n,[["render",l],["__file","iostat.html.vue"]]),u=JSON.parse('{"path":"/command/linux/iostat.html","title":"iostat","lang":"zh-CN","frontmatter":{"description":"iostat 监视系统输入输出设备和CPU的使用情况 补充说明 iostat命令 被用于监视系统输入输出设备和CPU的使用情况。它的特点是汇报磁盘活动统计情况，同时也会汇报出CPU使用情况。同vmstat一样，iostat也有一个弱点，就是它不能对某个进程进行深入分析，仅对系统的整体情况进行分析。 语法 选项 参数 间隔时间：每次报告的间隔时间（秒）；...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/iostat.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"iostat"}],["meta",{"property":"og:description","content":"iostat 监视系统输入输出设备和CPU的使用情况 补充说明 iostat命令 被用于监视系统输入输出设备和CPU的使用情况。它的特点是汇报磁盘活动统计情况，同时也会汇报出CPU使用情况。同vmstat一样，iostat也有一个弱点，就是它不能对某个进程进行深入分析，仅对系统的整体情况进行分析。 语法 选项 参数 间隔时间：每次报告的间隔时间（秒）；..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"iostat\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.87,"words":560},"filePathRelative":"command/linux/iostat.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
