import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,b as e}from"./app-D3p8wuGf.js";const t={},p=e(`<h1 id="find" tabindex="-1"><a class="header-anchor" href="#find"><span>find</span></a></h1><p>在指定目录下查找文件</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>find命令</strong> 用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数，则find命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>find<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-amin<span class="token operator">&lt;</span>分钟<span class="token operator">&gt;</span>：查找在指定时间曾被存取过的文件或目录，单位以分钟计算；
-anewer<span class="token operator">&lt;</span>参考文件或目录<span class="token operator">&gt;</span>：查找其存取时间较指定文件或目录的存取时间更接近现在的文件或目录；
-atime<span class="token operator">&lt;</span><span class="token number">24</span>小时数<span class="token operator">&gt;</span>：查找在指定时间曾被存取过的文件或目录，单位以24小时计算；
-cmin<span class="token operator">&lt;</span>分钟<span class="token operator">&gt;</span>：查找在指定时间之时被更改过的文件或目录；
-cnewer<span class="token operator">&lt;</span>参考文件或目录<span class="token operator">&gt;</span>查找其更改时间较指定文件或目录的更改时间更接近现在的文件或目录；
-ctime<span class="token operator">&lt;</span><span class="token number">24</span>小时数<span class="token operator">&gt;</span>：查找在指定时间之时被更改的文件或目录，单位以24小时计算；
-daystart：从本日开始计算时间；
-depth：从指定目录下最深层的子目录开始查找；
-empty：寻找文件大小为0 Byte的文件，或目录下没有任何子目录或文件的空目录；
-exec<span class="token operator">&lt;</span>执行指令<span class="token operator">&gt;</span>：假设find指令的回传值为True，就执行该指令；
-false：将find指令的回传值皆设为False；
-fls<span class="token operator">&lt;</span>列表文件<span class="token operator">&gt;</span>：此参数的效果和指定“-ls”参数类似，但会把结果保存为指定的列表文件；
-follow：排除符号连接；
-fprint<span class="token operator">&lt;</span>列表文件<span class="token operator">&gt;</span>：此参数的效果和指定“-print”参数类似，但会把结果保存成指定的列表文件；
-fprint<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>列表文件<span class="token operator">&gt;</span>：此参数的效果和指定“-print0”参数类似，但会把结果保存成指定的列表文件；
-fprintf<span class="token operator">&lt;</span>列表文件<span class="token operator">&gt;</span><span class="token operator">&lt;</span>输出格式<span class="token operator">&gt;</span>：此参数的效果和指定“-printf”参数类似，但会把结果保存成指定的列表文件；
-fstype<span class="token operator">&lt;</span>文件系统类型<span class="token operator">&gt;</span>：只寻找该文件系统类型下的文件或目录；
-gid<span class="token operator">&lt;</span>群组识别码<span class="token operator">&gt;</span>：查找符合指定之群组识别码的文件或目录；
-group<span class="token operator">&lt;</span>群组名称<span class="token operator">&gt;</span>：查找符合指定之群组名称的文件或目录；
-help或--help：在线帮助；
-ilname<span class="token operator">&lt;</span>范本样式<span class="token operator">&gt;</span>：此参数的效果和指定“-lname”参数类似，但忽略字符大小写的差别；
-iname<span class="token operator">&lt;</span>范本样式<span class="token operator">&gt;</span>：此参数的效果和指定“-name”参数类似，但忽略字符大小写的差别；
-inum<span class="token operator">&lt;</span>inode编号<span class="token operator">&gt;</span>：查找符合指定的inode编号的文件或目录；
-ipath<span class="token operator">&lt;</span>范本样式<span class="token operator">&gt;</span>：此参数的效果和指定“-path”参数类似，但忽略字符大小写的差别；
-iregex<span class="token operator">&lt;</span>范本样式<span class="token operator">&gt;</span>：此参数的效果和指定“-regexe”参数类似，但忽略字符大小写的差别；
-links<span class="token operator">&lt;</span>连接数目<span class="token operator">&gt;</span>：查找符合指定的硬连接数目的文件或目录；
-lname<span class="token operator">&lt;</span>范本样式<span class="token operator">&gt;</span>：指定字符串作为寻找符号连接的范本样式；
-ls：假设find指令的回传值为True，就将文件或目录名称列出到标准输出；
-maxdepth<span class="token operator">&lt;</span>目录层级<span class="token operator">&gt;</span>：设置最大目录层级；
-mindepth<span class="token operator">&lt;</span>目录层级<span class="token operator">&gt;</span>：设置最小目录层级；
-mmin<span class="token operator">&lt;</span>分钟<span class="token operator">&gt;</span>：查找在指定时间曾被更改过的文件或目录，单位以分钟计算；
-mount：此参数的效果和指定“-xdev”相同；
-mtime<span class="token operator">&lt;</span><span class="token number">24</span>小时数<span class="token operator">&gt;</span>：查找在指定时间曾被更改过的文件或目录，单位以24小时计算；
-name<span class="token operator">&lt;</span>范本样式<span class="token operator">&gt;</span>：指定字符串作为寻找文件或目录的范本样式；
-newer<span class="token operator">&lt;</span>参考文件或目录<span class="token operator">&gt;</span>：查找其更改时间较指定文件或目录的更改时间更接近现在的文件或目录；
-nogroup：找出不属于本地主机群组识别码的文件或目录；
-noleaf：不去考虑目录至少需拥有两个硬连接存在；
-nouser：找出不属于本地主机用户识别码的文件或目录；
-ok<span class="token operator">&lt;</span>执行指令<span class="token operator">&gt;</span>：此参数的效果和指定“-exec”类似，但在执行指令之前会先询问用户，若回答“y”或“Y”，则放弃执行命令；
-path<span class="token operator">&lt;</span>范本样式<span class="token operator">&gt;</span>：指定字符串作为寻找目录的范本样式；
-perm<span class="token operator">&lt;</span>权限数值<span class="token operator">&gt;</span>：查找符合指定的权限数值的文件或目录；
-print：假设find指令的回传值为True，就将文件或目录名称列出到标准输出。格式为每列一个名称，每个名称前皆有“./”字符串；
-print0：假设find指令的回传值为True，就将文件或目录名称列出到标准输出。格式为全部的名称皆在同一行；
-printf<span class="token operator">&lt;</span>输出格式<span class="token operator">&gt;</span>：假设find指令的回传值为True，就将文件或目录名称列出到标准输出。格式可以自行指定；
-prune：不寻找字符串作为寻找文件或目录的范本样式<span class="token punctuation">;</span>
-regex<span class="token operator">&lt;</span>范本样式<span class="token operator">&gt;</span>：指定字符串作为寻找文件或目录的范本样式；
-size<span class="token operator">&lt;</span>文件大小<span class="token operator">&gt;</span>：查找符合指定的文件大小的文件；
-true：将find指令的回传值皆设为True；
-type<span class="token operator">&lt;</span>文件类型<span class="token operator">&gt;</span>：只寻找符合指定的文件类型的文件；
-uid<span class="token operator">&lt;</span>用户识别码<span class="token operator">&gt;</span>：查找符合指定的用户识别码的文件或目录；
-used<span class="token operator">&lt;</span>日数<span class="token operator">&gt;</span>：查找文件或目录被更改之后在指定时间曾被存取过的文件或目录，单位以日计算；
-user<span class="token operator">&lt;</span>拥有者名称<span class="token operator">&gt;</span>：查找符和指定的拥有者名称的文件或目录；
-version或——version：显示版本信息；
-xdev：将范围局限在先行的文件系统中；
-xtype<span class="token operator">&lt;</span>文件类型<span class="token operator">&gt;</span>：此参数的效果和指定“-type”参数类似，差别在于它针对符号连接检查。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>起始目录：查找文件的起始目录。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 当前目录搜索所有文件，文件内容 包含 “140.206.111.111” 的内容</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*&quot;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">grep</span> <span class="token string">&quot;140.206.111.111&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="根据文件或者正则表达式进行匹配" tabindex="-1"><a class="header-anchor" href="#根据文件或者正则表达式进行匹配"><span>根据文件或者正则表达式进行匹配</span></a></h4><p>列出当前目录及子目录下所有文件和文件夹</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<code>/home</code>目录下查找以.txt结尾的文件名</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> /home <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同上，但忽略大小写</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> /home <span class="token parameter variable">-iname</span> <span class="token string">&quot;*.txt&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当前目录及子目录下查找所有以.txt和.pdf结尾的文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token punctuation">\\</span><span class="token punctuation">(</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.pdf&quot;</span> <span class="token punctuation">\\</span><span class="token punctuation">)</span>

或

<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.pdf&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配文件路径或者文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> /usr/ <span class="token parameter variable">-path</span> <span class="token string">&quot;*local*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>基于正则表达式匹配文件路径</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-regex</span> <span class="token string">&quot;.*\\(\\.txt\\|\\.pdf\\)$&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同上，但忽略大小写</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-iregex</span> <span class="token string">&quot;.*\\(\\.txt\\|\\.pdf\\)$&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="否定参数" tabindex="-1"><a class="header-anchor" href="#否定参数"><span>否定参数</span></a></h4><p>找出/home下不是以.txt结尾的文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> /home <span class="token operator">!</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="根据文件类型进行搜索" tabindex="-1"><a class="header-anchor" href="#根据文件类型进行搜索"><span>根据文件类型进行搜索</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> 类型参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>类型参数列表：</p><ul><li><strong>f</strong> 普通文件</li><li><strong>l</strong> 符号连接</li><li><strong>d</strong> 目录</li><li><strong>c</strong> 字符设备</li><li><strong>b</strong> 块设备</li><li><strong>s</strong> 套接字</li><li><strong>p</strong> Fifo</li></ul><h4 id="基于目录深度搜索" tabindex="-1"><a class="header-anchor" href="#基于目录深度搜索"><span>基于目录深度搜索</span></a></h4><p>向下最大深度限制为3</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-maxdepth</span> <span class="token number">3</span> <span class="token parameter variable">-type</span> f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>搜索出深度距离当前目录至少2个子目录的所有文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-mindepth</span> <span class="token number">2</span> <span class="token parameter variable">-type</span> f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="根据文件时间戳进行搜索" tabindex="-1"><a class="header-anchor" href="#根据文件时间戳进行搜索"><span>根据文件时间戳进行搜索</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f 时间戳
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>UNIX/Linux文件系统每个文件都有三种时间戳：</p><ul><li><strong>访问时间</strong> （-atime/天，-amin/分钟）：用户最近一次访问时间。</li><li><strong>修改时间</strong> （-mtime/天，-mmin/分钟）：文件最后一次修改时间。</li><li><strong>变化时间</strong> （-ctime/天，-cmin/分钟）：文件数据元（例如权限等）最后一次修改时间。</li></ul><p>搜索最近七天内被访问过的所有文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-atime</span> <span class="token parameter variable">-7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>搜索恰好在七天前被访问过的所有文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-atime</span> <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>搜索超过七天内被访问过的所有文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-atime</span> +7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>搜索访问时间超过10分钟的所有文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-amin</span> +10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找出比file.log修改时间更长的所有文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-newer</span> file.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="根据文件大小进行匹配" tabindex="-1"><a class="header-anchor" href="#根据文件大小进行匹配"><span>根据文件大小进行匹配</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-size</span> 文件大小单元
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>文件大小单元：</p><ul><li><strong>b</strong> —— 块（512字节）</li><li><strong>c</strong> —— 字节</li><li><strong>w</strong> —— 字（2字节）</li><li><strong>k</strong> —— 千字节</li><li><strong>M</strong> —— 兆字节</li><li><strong>G</strong> —— 吉字节</li></ul><p>搜索大于10KB的文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-size</span> +10k
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>搜索小于10KB的文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-size</span> <span class="token parameter variable">-10k</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>搜索等于10KB的文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-size</span> 10k
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除匹配文件" tabindex="-1"><a class="header-anchor" href="#删除匹配文件"><span>删除匹配文件</span></a></h4><p>删除当前目录下所有.txt文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span> <span class="token parameter variable">-delete</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="根据文件权限-所有权进行匹配" tabindex="-1"><a class="header-anchor" href="#根据文件权限-所有权进行匹配"><span>根据文件权限/所有权进行匹配</span></a></h4><p>当前目录下搜索出权限为777的文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-perm</span> <span class="token number">777</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找出当前目录下权限不是644的php文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.php&quot;</span> <span class="token operator">!</span> <span class="token parameter variable">-perm</span> <span class="token number">644</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找出当前目录用户tom拥有的所有文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-user</span> tom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找出当前目录用户组sunk拥有的所有文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-group</span> sunk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="借助-exec选项与其他命令结合使用" tabindex="-1"><a class="header-anchor" href="#借助-exec选项与其他命令结合使用"><span>借助<code>-exec</code>选项与其他命令结合使用</span></a></h4><p>找出当前目录下所有root的文件，并把所有权更改为用户tom</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> .-type f <span class="token parameter variable">-user</span> root <span class="token parameter variable">-exec</span> <span class="token function">chown</span> tom <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上例中， <strong>{}</strong> 用于与 <strong>-exec</strong> 选项结合使用来匹配所有文件，然后会被替换为相应的文件名。</p><p>找出自己家目录下所有的.txt文件并删除</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token environment constant">$HOME</span>/. <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span> <span class="token parameter variable">-ok</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上例中， <strong>-ok</strong> 和 <strong>-exec</strong> 行为一样，不过它会给出提示，是否执行相应的操作。</p><p>查找当前目录下所有.txt文件并把他们拼接起来写入到all.txt文件中</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span> <span class="token parameter variable">-exec</span> <span class="token function">cat</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span><span class="token operator">&gt;</span> /all.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将30天前的.log文件移动到old目录中</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-mtime</span> +30 <span class="token parameter variable">-name</span> <span class="token string">&quot;*.log&quot;</span> <span class="token parameter variable">-exec</span> <span class="token function">cp</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> old <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找出当前目录下所有.txt文件并以“File:文件名”的形式打印出来</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span> <span class="token parameter variable">-exec</span> <span class="token builtin class-name">printf</span> <span class="token string">&quot;File: %s<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为单行命令中-exec参数中无法使用多个命令，以下方法可以实现在-exec之后接受多条命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">-exec</span> ./text.sh <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="搜索但跳过指定的目录" tabindex="-1"><a class="header-anchor" href="#搜索但跳过指定的目录"><span>搜索但跳过指定的目录</span></a></h4><p>查找当前目录或者子目录下所有.txt文件，但是跳过子目录sk</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-path</span> <span class="token string">&quot;./sk&quot;</span> <span class="token parameter variable">-prune</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span> <span class="token parameter variable">-print</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>⚠️ ./sk 不能写成 ./sk/ ，否则没有作用。</p></blockquote><p>忽略两个目录</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token punctuation">\\</span><span class="token punctuation">(</span> <span class="token parameter variable">-path</span> ./sk <span class="token parameter variable">-o</span>  <span class="token parameter variable">-path</span> ./st <span class="token punctuation">\\</span><span class="token punctuation">)</span> <span class="token parameter variable">-prune</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span> <span class="token parameter variable">-print</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>⚠️ 如果写相对路径必须加上<code>./</code></p></blockquote><h4 id="find其他技巧收集" tabindex="-1"><a class="header-anchor" href="#find其他技巧收集"><span>find其他技巧收集</span></a></h4><p>要列出所有长度为零的文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-empty</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="其它实例" tabindex="-1"><a class="header-anchor" href="#其它实例"><span>其它实例</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> ~ <span class="token parameter variable">-name</span> <span class="token string">&#39;*jpg&#39;</span> <span class="token comment"># 主目录中找到所有的 jpg 文件。 -name 参数允许你将结果限制为与给定模式匹配的文件。</span>
<span class="token function">find</span> ~ <span class="token parameter variable">-iname</span> <span class="token string">&#39;*jpg&#39;</span> <span class="token comment"># -iname 就像 -name，但是不区分大小写</span>
<span class="token function">find</span> ~ <span class="token punctuation">(</span> <span class="token parameter variable">-iname</span> <span class="token string">&#39;jpeg&#39;</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-iname</span> <span class="token string">&#39;jpg&#39;</span> <span class="token punctuation">)</span> <span class="token comment"># 一些图片可能是 .jpeg 扩展名。幸运的是，我们可以将模式用“或”（表示为 -o）来组合。</span>
<span class="token function">find</span> ~ <span class="token punctuation">\\</span><span class="token punctuation">(</span> <span class="token parameter variable">-iname</span> <span class="token string">&#39;*jpeg&#39;</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-iname</span> <span class="token string">&#39;*jpg&#39;</span> <span class="token punctuation">\\</span><span class="token punctuation">)</span> <span class="token parameter variable">-type</span> f <span class="token comment"># 如果你有一些以 jpg 结尾的目录呢？ （为什么你要命名一个 bucketofjpg 而不是 pictures 的目录就超出了本文的范围。）我们使用 -type 参数修改我们的命令来查找文件。</span>
<span class="token function">find</span> ~ <span class="token punctuation">\\</span><span class="token punctuation">(</span> <span class="token parameter variable">-iname</span> <span class="token string">&#39;*jpeg&#39;</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-iname</span> <span class="token string">&#39;*jpg&#39;</span> <span class="token punctuation">\\</span><span class="token punctuation">)</span> <span class="token parameter variable">-type</span> d <span class="token comment"># 也许你想找到那些命名奇怪的目录，以便稍后重命名它们</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最近拍了很多照片，所以让我们把它缩小到上周更改的文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> ~ <span class="token punctuation">\\</span><span class="token punctuation">(</span> <span class="token parameter variable">-iname</span> <span class="token string">&#39;*jpeg&#39;</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-iname</span> <span class="token string">&#39;*jpg&#39;</span> <span class="token punctuation">\\</span><span class="token punctuation">)</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-mtime</span> <span class="token parameter variable">-7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以根据文件状态更改时间 （ctime）、修改时间 （mtime） 或访问时间 （atime） 来执行时间过滤。 这些是在几天内，所以如果你想要更细粒度的控制，你可以表示为在几分钟内（分别是 cmin、mmin 和 amin）。 除非你确切地知道你想要的时间，否则你可能会在 + （大于）或 - （小于）的后面加上数字。</p><p>但也许你不关心你的照片。也许你的磁盘空间不够用，所以你想在 log 目录下找到所有巨大的（让我们定义为“大于 1GB”）文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> /var/log <span class="token parameter variable">-size</span> +1G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者，也许你想在 /data 中找到 bcotton 拥有的所有文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> /data <span class="token parameter variable">-owner</span> bcotton
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你还可以根据权限查找文件。也许你想在你的主目录中找到对所有人可读的文件，以确保你不会过度分享。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> ~ <span class="token parameter variable">-perm</span> <span class="token parameter variable">-o</span><span class="token operator">=</span>r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除 mac 下自动生成的文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&#39;__MACOSX&#39;</span> <span class="token parameter variable">-depth</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>统计代码行数</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.java&quot;</span><span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">cat</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> ^$<span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span> <span class="token comment"># 代码行数统计, 排除空行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,115),i=[p];function l(r,o){return s(),n("div",null,i)}const u=a(t,[["render",l],["__file","find.html.vue"]]),m=JSON.parse('{"path":"/command/linux/find.html","title":"find","lang":"zh-CN","frontmatter":{"description":"find 在指定目录下查找文件 补充说明 find命令 用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数，则find命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。 语法 选项 参数 起始目录：查找文件的起始目录。 实例 根据文件或者正则表达式进行匹配 列出当前目录...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/find.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"find"}],["meta",{"property":"og:description","content":"find 在指定目录下查找文件 补充说明 find命令 用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数，则find命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。 语法 选项 参数 起始目录：查找文件的起始目录。 实例 根据文件或者正则表达式进行匹配 列出当前目录..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"find\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":10.63,"words":3189},"filePathRelative":"command/linux/find.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,m as data};
