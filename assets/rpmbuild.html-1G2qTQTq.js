import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,e as i}from"./app-D_HUMAmc.js";const r={},n=i(`<h1 id="rpmbuild" tabindex="-1"><a class="header-anchor" href="#rpmbuild"><span>rpmbuild</span></a></h1><p>创建RPM的二进制软件包和源码软件包</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>rpmbuild命令</strong> 被用于创建rpm的二进制软件包和源码软件包。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>rpmbuild<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>--initdb：初始化RPM数据库；
--rebuilddb：从已安装的包头文件，方向重建RPM数据库；
-ba：创建二进制和源代码包；
-bb：创建二进制代码包；
-bs：创建源代码包。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>rpmbuild <span class="token parameter variable">-ba</span> <span class="token string">&#39;spec文件路径&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>build完后，可以在<code>/usr/src/redhat/RPMS/</code>下找到二进制rpm包，rpm包按照其对应的cpu体系结构分类，通常在<code>/usr/src/redhat/RPMS/i386</code>目录下。<code>/usr/src/redhat/SRPMS/</code>下找到源码rpm包，此时由于是源代码，所以无须按体系结构分类。</p>`,11),s=[n];function d(l,c){return a(),t("div",null,s)}const m=e(r,[["render",d],["__file","rpmbuild.html.vue"]]),u=JSON.parse('{"path":"/command/linux/rpmbuild.html","title":"rpmbuild","lang":"zh-CN","frontmatter":{"description":"rpmbuild 创建RPM的二进制软件包和源码软件包 补充说明 rpmbuild命令 被用于创建rpm的二进制软件包和源码软件包。 语法 选项 实例 build完后，可以在/usr/src/redhat/RPMS/下找到二进制rpm包，rpm包按照其对应的cpu体系结构分类，通常在/usr/src/redhat/RPMS/i386目录下。/usr/s...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/rpmbuild.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"rpmbuild"}],["meta",{"property":"og:description","content":"rpmbuild 创建RPM的二进制软件包和源码软件包 补充说明 rpmbuild命令 被用于创建rpm的二进制软件包和源码软件包。 语法 选项 实例 build完后，可以在/usr/src/redhat/RPMS/下找到二进制rpm包，rpm包按照其对应的cpu体系结构分类，通常在/usr/src/redhat/RPMS/i386目录下。/usr/s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"rpmbuild\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.6,"words":179},"filePathRelative":"command/linux/rpmbuild.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};