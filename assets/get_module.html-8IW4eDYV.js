import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as e}from"./app-DOGW-9XX.js";const i={},l=e(`<h1 id="get-module" tabindex="-1"><a class="header-anchor" href="#get-module"><span>get_module</span></a></h1><p>获取Linux内核模块的详细信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>get_module命令</strong> 用于获取Linux内核模块的详细信息。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>get_module 模块名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>使用lsmod命令查看内核模块：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lsmod <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-5</span>
Module                  Size  Used by
ipv6                  <span class="token number">272801</span>  <span class="token number">15</span>
xfrm_nalgo             <span class="token number">13381</span>  <span class="token number">1</span> ipv6
crypto_api             <span class="token number">12609</span>  <span class="token number">1</span> xfrm_nalgo
ip_conntrack_ftp       <span class="token number">11569</span>  <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用get_module命令查看模块详细信息：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>get_module ipv6
        refcnt               <span class="token builtin class-name">:</span> <span class="token number">15</span>
        srcversion           <span class="token builtin class-name">:</span> 8CC9C024755B4483E56C0EF

Parameters:
        autoconf             <span class="token builtin class-name">:</span> <span class="token number">1</span>
        disable              <span class="token builtin class-name">:</span> <span class="token number">0</span>
        disable_ipv6         <span class="token builtin class-name">:</span> <span class="token number">0</span>
Sections:
        .altinstr_replacement <span class="token builtin class-name">:</span> 0xf8f1a3cf
        .altinstructions     <span class="token builtin class-name">:</span> 0xf8f1d03c
        .bss                 <span class="token builtin class-name">:</span> 0xf8f36000
        .data.read_mostly    <span class="token builtin class-name">:</span> 0xf8f34d20
        .data                <span class="token builtin class-name">:</span> 0xf8f2f7a0
        .exit.text           <span class="token builtin class-name">:</span> 0xf8f1a234
        .gnu.linkonce.this_module <span class="token builtin class-name">:</span> 0xf8f34e00
        .init.data           <span class="token builtin class-name">:</span> 0xf8a16a60
        .init.text           <span class="token builtin class-name">:</span> 0xf8a16000
        .module_sig          <span class="token builtin class-name">:</span> 0xf8f37960
        .rodata.str1.1       <span class="token builtin class-name">:</span> 0xf8f1ae46
        .rodata              <span class="token builtin class-name">:</span> 0xf8f1a420
        .smp_locks           <span class="token builtin class-name">:</span> 0xf8f1d150
        .strtab              <span class="token builtin class-name">:</span> 0xf8f29840
        .symtab              <span class="token builtin class-name">:</span> 0xf8f24000
        .text                <span class="token builtin class-name">:</span> 0xf8ef5000
        __kcrctab            <span class="token builtin class-name">:</span> 0xf8f1de70
        __kcrctab_gpl        <span class="token builtin class-name">:</span> 0xf8f1d9cc
        __ksymtab            <span class="token builtin class-name">:</span> 0xf8f1dd78
        __ksymtab_gpl        <span class="token builtin class-name">:</span> 0xf8f1d954
        __ksymtab_strings    <span class="token builtin class-name">:</span> 0xf8f1da44
        __param              <span class="token builtin class-name">:</span> 0xf8f1da08
        __versions           <span class="token builtin class-name">:</span> 0xf8f1df00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[l];function d(c,o){return s(),a("div",null,t)}const p=n(i,[["render",d],["__file","get_module.html.vue"]]),u=JSON.parse('{"path":"/command/linux/get_module.html","title":"get_module","lang":"zh-CN","frontmatter":{"description":"get_module 获取Linux内核模块的详细信息 补充说明 get_module命令 用于获取Linux内核模块的详细信息。 语法 实例 使用lsmod命令查看内核模块： 使用get_module命令查看模块详细信息：","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/get_module.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"get_module"}],["meta",{"property":"og:description","content":"get_module 获取Linux内核模块的详细信息 补充说明 get_module命令 用于获取Linux内核模块的详细信息。 语法 实例 使用lsmod命令查看内核模块： 使用get_module命令查看模块详细信息："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"get_module\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.5,"words":150},"filePathRelative":"command/linux/get_module.md","localizedDate":"2024年4月12日","autoDesc":true}');export{p as comp,u as data};
