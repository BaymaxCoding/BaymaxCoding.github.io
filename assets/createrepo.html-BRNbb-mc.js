import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,e as s}from"./app-D_HUMAmc.js";const i={},l=s(`<h1 id="createrepo" tabindex="-1"><a class="header-anchor" href="#createrepo"><span>createrepo</span></a></h1><p>创建YUM仓库</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要"><span>概要</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>createrepo <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p><code>createrepo</code>是一个程序，它从一组RPM创建一个RPM元数据存储库，即YUM仓库。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">-u</span>  <span class="token parameter variable">--baseurl</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>
<span class="token comment"># 指定Base URL的地址</span>

<span class="token parameter variable">-o</span> <span class="token parameter variable">--outputdir</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>
<span class="token comment"># 指定元数据的输出位置</span>

<span class="token parameter variable">-x</span> <span class="token parameter variable">--excludes</span> <span class="token operator">&lt;</span>packages<span class="token operator">&gt;</span>
<span class="token comment"># 指定在形成元数据时需要排除的包</span>

<span class="token parameter variable">-i</span> <span class="token parameter variable">--pkglist</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>
<span class="token comment"># 指定一个文件，该文件内的包信息将被包含在即将生成的元数据中，格式为每个包信息独占一行，不含通配符、正则，以及范围表达式。</span>

<span class="token parameter variable">-n</span> <span class="token parameter variable">--includepkg</span>
<span class="token comment"># 通过命令行指定要纳入本地库中的包信息，需要提供URL或本地路径。</span>

<span class="token parameter variable">-q</span> <span class="token parameter variable">--quiet</span>
<span class="token comment"># 安静模式执行操作，不输出任何信息。</span>

<span class="token parameter variable">-g</span> <span class="token parameter variable">--groupfile</span> <span class="token operator">&lt;</span>groupfile<span class="token operator">&gt;</span>
<span class="token comment"># 指定本地软件仓库的组划分，示例：createrepo -g comps.xml /path/to/rpms</span>
<span class="token comment"># 注意：组文件需要和rpm包放置于同一路径下。</span>

<span class="token parameter variable">-v</span> <span class="token parameter variable">--verbose</span>
<span class="token comment"># 输出详细信息。</span>

<span class="token parameter variable">-c</span> <span class="token parameter variable">--cachedir</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
<span class="token comment"># 指定一个目录，用作存放软件仓库中软件包的校验和信息。</span>
<span class="token comment"># 当createrepo在未发生明显改变的相同仓库文件上持续多次运行时，指定cachedir会明显提高其性能。</span>

<span class="token parameter variable">--basedir</span>
<span class="token comment"># Basedir为repodata中目录的路径，默认为当前工作目录。</span>

<span class="token parameter variable">--update</span>
<span class="token comment"># 如果元数据已经存在，且软件仓库中只有部分软件发生了改变或增减，</span>
<span class="token comment"># 则可用update参数直接对原有元数据进行升级，效率比重新分析rpm包依赖并生成新的元数据要高很多。</span>

--skip-stat
<span class="token comment"># 跳过--update上的stat()调用，假设如果文件名相同，则文件仍然相同(仅在您相当信任或容易受骗时使用此方法)。</span>

--update-md-path
<span class="token comment"># 从这个路径使用现有的repodata来升级。</span>

<span class="token parameter variable">-C</span> <span class="token parameter variable">--checkts</span>
<span class="token comment"># 不要生成回购元数据，如果它们的时间戳比rpm更新。如果您碰巧开启了该选项，则此选项将再次大幅减少处理时间一个未修改的回购，但它(目前)与——split选项互斥。注意:当包从repo中删除时，这个命令不会注意到。使用——update来处理这个。</span>

<span class="token parameter variable">--split</span>
<span class="token comment"># 在拆分媒体模式下运行。与其传递单个目录，不如获取一组对应于媒体集中不同卷的目录。</span>

<span class="token parameter variable">-p</span> <span class="token parameter variable">--pretty</span>
<span class="token comment"># 以整洁的格式输出xml文件。</span>

<span class="token parameter variable">--version</span>
<span class="token comment"># 输出版本。</span>

<span class="token parameter variable">-h</span> <span class="token parameter variable">--help</span>
<span class="token comment"># 显示帮助菜单。</span>

<span class="token parameter variable">-d</span> <span class="token parameter variable">--database</span>
<span class="token comment"># 该选项指定使用SQLite来存储生成的元数据，默认项。</span>

--no-database
<span class="token comment"># 不要在存储库中生成sqlite数据库。</span>

<span class="token parameter variable">-S</span> --skip-symlinks
<span class="token comment"># 忽略包的符号链接</span>

<span class="token parameter variable">-s</span> <span class="token parameter variable">--checksum</span>
<span class="token comment"># 选择repmed .xml中使用的校验和类型以及元数据中的包。默认值现在是“sha256”(如果python有hashlib)。旧的默认值是“sha”，它实际上是“sha1”，但是显式使用“sha1”在旧版本(3.0.x)的yum上不起作用，您需要指定“sha”。</span>

<span class="token parameter variable">--profile</span>
<span class="token comment"># 输出基于时间的分析信息。</span>

--changelog-limit CHANGELOG_LIMIT
<span class="token comment"># 只将每个rpm中的最后N个变更日志条目导入元数据</span>

--unique-md-filenames
<span class="token comment"># 在元数据文件名中包含文件的校验和，有助于HTTP缓存(默认)</span>

--simple-md-filenames
<span class="token comment"># 不要在元数据文件名中包含文件的校验和。</span>

--retain-old-md
<span class="token comment"># 保留旧repodata的最新(按时间戳)N个副本(这样使用旧repodata .xml文件的客户端仍然可以访问它)。默认为0。</span>

<span class="token parameter variable">--distro</span>
指定发行版标签。可以多次指定。可选语法，指定cpeid<span class="token punctuation">(</span>http://cpe.mitre.org/<span class="token punctuation">)</span>——distro<span class="token operator">=</span>cpeid,distrotag

<span class="token parameter variable">--content</span>
<span class="token comment"># 指定关于存储库内容的关键字/标记。可以多次指定。</span>

<span class="token parameter variable">--repo</span>
<span class="token comment"># 指定关于存储库本身的关键字/标签。可以多次指定。</span>

<span class="token parameter variable">--revision</span>
<span class="token comment"># 存储库修订的任意字符串。</span>

<span class="token parameter variable">--deltas</span>
<span class="token comment"># 告诉createrepo生成增量数据和增量元数据</span>

<span class="token parameter variable">--oldpackagedirs</span> <span class="token environment constant">PATH</span>
<span class="token comment"># 寻找更老的PKGS来对抗的路径。可以指定多次吗</span>

--num-deltas int
<span class="token comment"># 要进行增量处理的旧版本的数量。默认为1</span>

--read-pkgs-list READ_PKGS_LIST
<span class="token comment"># 使用——update将路径输出到PKGS实际读起来很有用</span>

--max-delta-rpm-size MAX_DELTA_RPM_SIZE
<span class="token comment"># 要运行deltarpm的RPM的最大大小(以字节为单位)</span>

<span class="token parameter variable">--workers</span> WORKERS
<span class="token comment"># 为读取RPMS而生成的工作线程数</span>

--compress-type
<span class="token comment"># 指定要使用的压缩方法:compat(默认)，xz(可能不可用)，gz, bz2。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h2><p>返回状态为成功除非给出了非法选项或非法参数。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 生成带有groups文件的存储库。注意groups文件应该和rpm包在同一个目录下(即/path/to/rpms/comps.xml)。</span>
createrepo <span class="token parameter variable">-g</span> comps.xml /path/to/rpms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12),r=[l];function t(p,c){return n(),e("div",null,r)}const o=a(i,[["render",t],["__file","createrepo.html.vue"]]),v=JSON.parse('{"path":"/command/linux/createrepo.html","title":"createrepo","lang":"zh-CN","frontmatter":{"description":"createrepo 创建YUM仓库 概要 描述 createrepo是一个程序，它从一组RPM创建一个RPM元数据存储库，即YUM仓库。 选项 返回值 返回状态为成功除非给出了非法选项或非法参数。 例子","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/createrepo.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"createrepo"}],["meta",{"property":"og:description","content":"createrepo 创建YUM仓库 概要 描述 createrepo是一个程序，它从一组RPM创建一个RPM元数据存储库，即YUM仓库。 选项 返回值 返回状态为成功除非给出了非法选项或非法参数。 例子"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"createrepo\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":3.81,"words":1142},"filePathRelative":"command/linux/createrepo.md","localizedDate":"2024年4月12日","autoDesc":true}');export{o as comp,v as data};
