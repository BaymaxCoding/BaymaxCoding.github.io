import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as e}from"./app-D3p8wuGf.js";const p={},l=e(`<h1 id="pmap" tabindex="-1"><a class="header-anchor" href="#pmap"><span>pmap</span></a></h1><p>报告进程的内存映射关系</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>pmap命令</strong> 用于报告进程的内存映射关系，是Linux调试及运维一个很好的工具。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pmap<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-x：显示扩展格式；
-d：显示设备格式；
-q：不显示头尾行；
-V：显示指定版本。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>进程号：指定需要显示内存映射关系的进程号，可以是多个进程号。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pidof nginx
<span class="token number">13312</span> <span class="token number">5371</span>

pmap <span class="token parameter variable">-x</span> <span class="token number">5371</span>
<span class="token number">5371</span>:   nginx: worker process                
Address           Kbytes     RSS   Dirty Mode   Mapping
0000000000400000     <span class="token number">564</span>     <span class="token number">344</span>       <span class="token number">0</span> r-x--  nginx
000000000068c000      <span class="token number">68</span>      <span class="token number">68</span>      <span class="token number">60</span> rw---  nginx
000000000069d000      <span class="token number">56</span>      <span class="token number">12</span>      <span class="token number">12</span> rw---    <span class="token punctuation">[</span> anon <span class="token punctuation">]</span>
000000000a0c8000    <span class="token number">1812</span>    <span class="token number">1684</span>    <span class="token number">1684</span> rw---    <span class="token punctuation">[</span> anon <span class="token punctuation">]</span>
0000003ac0a00000     <span class="token number">112</span>      <span class="token number">40</span>       <span class="token number">0</span> r-x--  ld-2.5.so
0000003ac0c1c000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> r----  ld-2.5.so
0000003ac0c1d000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> rw---  ld-2.5.so
0000003ac0e00000    <span class="token number">1340</span>     <span class="token number">284</span>       <span class="token number">0</span> r-x--  libc-2.5.so
0000003ac0f4f000    <span class="token number">2044</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libc-2.5.so
0000003ac114e000      <span class="token number">16</span>      <span class="token number">16</span>       <span class="token number">8</span> r----  libc-2.5.so
0000003ac1152000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> rw---  libc-2.5.so
0000003ac1153000      <span class="token number">20</span>      <span class="token number">20</span>      <span class="token number">20</span> rw---    <span class="token punctuation">[</span> anon <span class="token punctuation">]</span>
0000003ac1200000       <span class="token number">8</span>       <span class="token number">4</span>       <span class="token number">0</span> r-x--  libdl-2.5.so
0000003ac1202000    <span class="token number">2048</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libdl-2.5.so
0000003ac1402000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> r----  libdl-2.5.so
0000003ac1403000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> rw---  libdl-2.5.so
0000003ac1600000      <span class="token number">84</span>       <span class="token number">0</span>       <span class="token number">0</span> r-x--  libselinux.so.1
0000003ac1615000    <span class="token number">2048</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libselinux.so.1
0000003ac1815000       <span class="token number">8</span>       <span class="token number">8</span>       <span class="token number">8</span> rw---  libselinux.so.1
0000003ac1817000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> rw---    <span class="token punctuation">[</span> anon <span class="token punctuation">]</span>
0000003ac1a00000     <span class="token number">236</span>       <span class="token number">0</span>       <span class="token number">0</span> r-x--  libsepol.so.1
0000003ac1a3b000    <span class="token number">2048</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libsepol.so.1
0000003ac1c3b000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> rw---  libsepol.so.1
0000003ac1c3c000      <span class="token number">40</span>       <span class="token number">0</span>       <span class="token number">0</span> rw---    <span class="token punctuation">[</span> anon <span class="token punctuation">]</span>
0000003ac1e00000      <span class="token number">88</span>      <span class="token number">44</span>       <span class="token number">0</span> r-x--  libpthread-2.5.so
0000003ac1e16000    <span class="token number">2048</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libpthread-2.5.so
0000003ac2016000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> r----  libpthread-2.5.so
0000003ac2017000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> rw---  libpthread-2.5.so
0000003ac2018000      <span class="token number">16</span>       <span class="token number">4</span>       <span class="token number">4</span> rw---    <span class="token punctuation">[</span> anon <span class="token punctuation">]</span>
0000003ac2600000      <span class="token number">80</span>      <span class="token number">52</span>       <span class="token number">0</span> r-x--  libz.so.1.2.3
0000003ac2614000    <span class="token number">2044</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libz.so.1.2.3
0000003ac2813000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> rw---  libz.so.1.2.3
0000003ac2a00000      <span class="token number">36</span>       <span class="token number">4</span>       <span class="token number">0</span> r-x--  libcrypt-2.5.so
0000003ac2a09000    <span class="token number">2044</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libcrypt-2.5.so
0000003ac2c08000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> r----  libcrypt-2.5.so
0000003ac2c09000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> rw---  libcrypt-2.5.so
0000003ac2c0a000     <span class="token number">184</span>       <span class="token number">0</span>       <span class="token number">0</span> rw---    <span class="token punctuation">[</span> anon <span class="token punctuation">]</span>
0000003ac3600000       <span class="token number">8</span>       <span class="token number">0</span>       <span class="token number">0</span> r-x--  libkeyutils-1.2.so
0000003ac3602000    <span class="token number">2044</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libkeyutils-1.2.so
0000003ac3801000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> rw---  libkeyutils-1.2.so
0000003ac3a00000      <span class="token number">68</span>       <span class="token number">0</span>       <span class="token number">0</span> r-x--  libresolv-2.5.so
0000003ac3a11000    <span class="token number">2048</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libresolv-2.5.so
0000003ac3c11000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> r----  libresolv-2.5.so
0000003ac3c12000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> rw---  libresolv-2.5.so
0000003ac3c13000       <span class="token number">8</span>       <span class="token number">0</span>       <span class="token number">0</span> rw---    <span class="token punctuation">[</span> anon <span class="token punctuation">]</span>
0000003ac3e00000       <span class="token number">8</span>       <span class="token number">0</span>       <span class="token number">0</span> r-x--  libcom_err.so.2.1
0000003ac3e02000    <span class="token number">2044</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libcom_err.so.2.1
0000003ac4001000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> rw---  libcom_err.so.2.1
0000003ac4200000    <span class="token number">1204</span>       <span class="token number">8</span>       <span class="token number">0</span> r-x--  libcrypto.so.0.9.8e
0000003ac432d000    <span class="token number">2044</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libcrypto.so.0.9.8e
0000003ac452c000     <span class="token number">132</span>      <span class="token number">88</span>      <span class="token number">12</span> rw---  libcrypto.so.0.9.8e
0000003ac454d000      <span class="token number">16</span>      <span class="token number">12</span>      <span class="token number">12</span> rw---    <span class="token punctuation">[</span> anon <span class="token punctuation">]</span>
0000003ac4600000     <span class="token number">176</span>       <span class="token number">0</span>       <span class="token number">0</span> r-x--  libgssapi_krb5.so.2.2
0000003ac462c000    <span class="token number">2048</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libgssapi_krb5.so.2.2
0000003ac482c000       <span class="token number">8</span>       <span class="token number">8</span>       <span class="token number">8</span> rw---  libgssapi_krb5.so.2.2
0000003ac4a00000     <span class="token number">144</span>       <span class="token number">0</span>       <span class="token number">0</span> r-x--  libk5crypto.so.3.1
0000003ac4a24000    <span class="token number">2044</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libk5crypto.so.3.1
0000003ac4c23000       <span class="token number">8</span>       <span class="token number">8</span>       <span class="token number">8</span> rw---  libk5crypto.so.3.1
0000003ac4e00000      <span class="token number">32</span>       <span class="token number">0</span>       <span class="token number">0</span> r-x--  libkrb5support.so.0.1
0000003ac4e08000    <span class="token number">2044</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libkrb5support.so.0.1
0000003ac5007000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> rw---  libkrb5support.so.0.1
0000003ac5200000     <span class="token number">580</span>       <span class="token number">0</span>       <span class="token number">0</span> r-x--  libkrb5.so.3.3
0000003ac5291000    <span class="token number">2048</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libkrb5.so.3.3
0000003ac5491000      <span class="token number">16</span>      <span class="token number">16</span>      <span class="token number">12</span> rw---  libkrb5.so.3.3
0000003ac5a00000     <span class="token number">288</span>       <span class="token number">4</span>       <span class="token number">0</span> r-x--  libssl.so.0.9.8e
0000003ac5a48000    <span class="token number">2048</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libssl.so.0.9.8e
0000003ac5c48000      <span class="token number">24</span>      <span class="token number">16</span>      <span class="token number">12</span> rw---  libssl.so.0.9.8e
00002b5751808000       <span class="token number">8</span>       <span class="token number">8</span>       <span class="token number">8</span> rw---    <span class="token punctuation">[</span> anon <span class="token punctuation">]</span>
00002b5751810000     <span class="token number">108</span>      <span class="token number">36</span>       <span class="token number">0</span> r-x--  libpcre.so.1.2.0
00002b575182b000    <span class="token number">2044</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libpcre.so.1.2.0
00002b5751a2a000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> rw---  libpcre.so.1.2.0
00002b5751a2b000      <span class="token number">28</span>      <span class="token number">28</span>      <span class="token number">28</span> rw---    <span class="token punctuation">[</span> anon <span class="token punctuation">]</span>
00002b5751a32000      <span class="token number">40</span>      <span class="token number">20</span>       <span class="token number">0</span> r-x--  libnss_files-2.5.so
00002b5751a3c000    <span class="token number">2044</span>       <span class="token number">0</span>       <span class="token number">0</span> -----  libnss_files-2.5.so
00002b5751c3b000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> r----  libnss_files-2.5.so
00002b5751c3c000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> rw---  libnss_files-2.5.so
00002b5751c3d000       <span class="token number">4</span>       <span class="token number">4</span>       <span class="token number">4</span> rw-s-  zero <span class="token punctuation">(</span>deleted<span class="token punctuation">)</span>
00002b5751c3e000   <span class="token number">20012</span>   <span class="token number">20000</span>   <span class="token number">20000</span> rw---    <span class="token punctuation">[</span> anon <span class="token punctuation">]</span>
00007fffbf2ce000      <span class="token number">84</span>      <span class="token number">20</span>      <span class="token number">20</span> rw---    <span class="token punctuation">[</span> stack <span class="token punctuation">]</span>
00007fffbf35e000      <span class="token number">12</span>       <span class="token number">0</span>       <span class="token number">0</span> r-x--    <span class="token punctuation">[</span> anon <span class="token punctuation">]</span>
ffffffffff600000    <span class="token number">8192</span>       <span class="token number">0</span>       <span class="token number">0</span> -----    <span class="token punctuation">[</span> anon <span class="token punctuation">]</span>
----------------  ------  ------  ------
total kB           <span class="token number">72880</span>   <span class="token number">22940</span>   <span class="token number">22000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[l];function r(t,o){return s(),a("div",null,c)}const b=n(p,[["render",r],["__file","pmap.html.vue"]]),m=JSON.parse('{"path":"/command/linux/pmap.html","title":"pmap","lang":"zh-CN","frontmatter":{"description":"pmap 报告进程的内存映射关系 补充说明 pmap命令 用于报告进程的内存映射关系，是Linux调试及运维一个很好的工具。 语法 选项 参数 进程号：指定需要显示内存映射关系的进程号，可以是多个进程号。 实例","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/pmap.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"pmap"}],["meta",{"property":"og:description","content":"pmap 报告进程的内存映射关系 补充说明 pmap命令 用于报告进程的内存映射关系，是Linux调试及运维一个很好的工具。 语法 选项 参数 进程号：指定需要显示内存映射关系的进程号，可以是多个进程号。 实例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pmap\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":2.2,"words":659},"filePathRelative":"command/linux/pmap.md","localizedDate":"2024年4月12日","autoDesc":true}');export{b as comp,m as data};
