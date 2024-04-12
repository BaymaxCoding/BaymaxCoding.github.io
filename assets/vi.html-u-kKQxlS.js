import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,b as a}from"./app-D3p8wuGf.js";const s={},l=a(`<h1 id="vi" tabindex="-1"><a class="header-anchor" href="#vi"><span>vi</span></a></h1><p>功能强大的纯文本编辑器</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>vi命令</strong> 是UNIX操作系统和类UNIX操作系统中最通用的全屏幕纯文本编辑器。Linux中的vi编辑器叫vim，它是vi的增强版（vi Improved），与vi编辑器完全兼容，而且实现了很多增强功能。</p><p>vi编辑器支持编辑模式和命令模式，编辑模式下可以完成文本的编辑功能，命令模式下可以完成对文件的操作命令，要正确使用vi编辑器就必须熟练掌握着两种模式的切换。默认情况下，打开vi编辑器后自动进入命令模式。从编辑模式切换到命令模式使用“esc”键，从命令模式切换到编辑模式使用“A”、“a”、“O”、“o”、“I”、“i”键。</p><p>vi编辑器提供了丰富的内置命令，有些内置命令使用键盘组合键即可完成，有些内置命令则需要以冒号“：”开头输入。常用内置命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Ctrl+u：向文件首翻半屏；
Ctrl+d：向文件尾翻半屏；
Ctrl+f：向文件尾翻一屏；
Ctrl+b：向文件首翻一屏；
Esc：从编辑模式切换到命令模式；
ZZ：命令模式下保存当前文件所做的修改后退出vi；
:行号：光标跳转到指定行的行首；
:$：光标跳转到最后一行的行首；
x或X：删除一个字符，x删除光标后的，而X删除光标前的；
D：删除从当前光标到光标所在行尾的全部字符；
dd：删除光标行正行内容；
ndd：删除当前行及其后n-1行；
nyy：将当前行及其下n行的内容保存到寄存器？中，其中？为一个字母，n为一个数字；
p：粘贴文本操作，用于将缓存区的内容粘贴到当前光标所在位置的下方；
P：粘贴文本操作，用于将缓存区的内容粘贴到当前光标所在位置的上方；
/字符串：文本查找操作，用于从当前光标所在位置开始向文件尾部查找指定字符串的内容，查找的字符串会被加亮显示；
？字符串：文本查找操作，用于从当前光标所在位置开始向文件头部查找指定字符串的内容，查找的字符串会被加亮显示；
a，bs/F/T：替换文本操作，用于在第a行到第b行之间，将F字符串换成T字符串。其中，“s/”表示进行替换操作；
a：在当前字符后添加文本；
A：在行末添加文本；
i：在当前字符前插入文本；
I：在行首插入文本；
o：在当前行后面插入一空行；
O：在当前行前面插入一空行；
:wq：在命令模式下，执行存盘退出操作；
:w：在命令模式下，执行存盘操作；
:w！：在命令模式下，执行强制存盘操作；
:q：在命令模式下，执行退出vi操作；
:q！：在命令模式下，执行强制退出vi操作；
:e文件名：在命令模式下，打开并编辑指定名称的文件；
:n：在命令模式下，如果同时打开多个文件，则继续编辑下一个文件；
:f：在命令模式下，用于显示当前的文件名、光标所在行的行号以及显示比例；
:set number：在命令模式下，用于在最左端显示行号；
:set nonumber：在命令模式下，用于在最左端不显示行号；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vi<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>+<span class="token operator">&lt;</span>行号<span class="token operator">&gt;</span>：从指定行号的行开始显示文本内容；
-b：以二进制模式打开文件，用于编辑二进制文件和可执行文件；
-c<span class="token operator">&lt;</span>指令<span class="token operator">&gt;</span>：在完成对第一个文件编辑任务后，执行给出的指令；
-d：以diff模式打开文件，当多个文件编辑时，显示文件差异部分；
-l：使用lisp模式，打开“lisp”和“showmatch”；
-m：取消写文件功能，重设“write”选项；
-M：关闭修改功能；
-n：不实用缓存功能；
-o<span class="token operator">&lt;</span>文件数目<span class="token operator">&gt;</span>：指定同时打开指定数目的文件；
-R：以只读方式打开文件；
-s：安静模式，不显示指令的任何错误信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>文件列表：指定要编辑的文件列表。多个文件之间使用空格分隔开。</p><h2 id="知识扩展" tabindex="-1"><a class="header-anchor" href="#知识扩展"><span>知识扩展</span></a></h2><p>vi编辑器有三种工作方式：命令方式、输入方式和ex转义方式。通过相应的命令或操作，在这三种工作方式之间可以进行转换。</p><p><strong>命令方式</strong></p><p>在Shell提示符后输入命令vi，进入vi编辑器，并处于vi的命令方式。此时，从键盘上输入的任何字符都被作为编辑命令来解释，例如，a(append）表示附加命令，i(insert）表示插入命令，x表示删除字符命令等。如果输入的字符不是vi的合法命令，则机器发出“报警声”，光标不移动。另外，在命令方式下输入的字符（即vi命令）并不在屏幕上显示出来，例如，输入i，屏幕上并无变化，但通过执行i命令，编辑器的工作方式却发生变化：由命令方式变为输入方式。</p><p><strong>输入方式</strong></p><p>通过输入vi的插入命令（i）、附加命令（a）、打开命令（o）、替换命令（s）、修改命令(c）或取代命令（r）可以从命令方式进入输入方式。在输入方式下，从键盘上输入的所有字符都被插入到正在编辑的缓冲区中，被当做该文件的正文。进入输入方式后，输入的可见字符都在屏幕上显示出来，而编辑命令不再起作用，仅作为普通字母出现。例如，在命令方式下输入字母i，进到输入方式，然后再输入i，就在屏幕上相应光标处添加一个字母i。</p><p>由输入方式回到命令方式的办法是按下Esc键。如果已在命令方式下，那么按下Esc键就会发出“嘟嘟”声。为了确保用户想执行的vi命令是在命令方式下输入的，不妨多按几下Esc键，听到嘟声后再输入命令。</p><p><strong>ex转义方式</strong></p><p>vi和ex编辑器的功能是相同的，二者的主要区别是用户界面。在vi中，命令通常是单个字母，如a,x,r等。而在ex中，命令是以Enter；键结束的命令行。vi有一个专门的“转义”命令，可访问很多面向行的ex命令。为使用ex转义方式，可输入一个冒号（:）。作为ex命令提示符，冒号出现在状态行（通常在屏幕最下一行）。按下中断键（通常是Del键），可终止正在执行的命令。多数文件管理命令都是在ex转义方式下执行的（例如，读取文件，把编辑缓冲区的内容写到文件中等）。转义命令执行后，自动回到命令方式。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>:1,<span class="token variable">$s</span>/I/i/g 按Enter键
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>则从文件第一行至文件末尾（$）将大写I全部替换成小写i。vi编辑器的三种工作方式之间的转换如图所示。</p><p>!vi</p>`,25),d=[l];function t(r,v){return e(),n("div",null,d)}const p=i(s,[["render",t],["__file","vi.html.vue"]]),m=JSON.parse('{"path":"/command/linux/vi.html","title":"vi","lang":"zh-CN","frontmatter":{"description":"vi 功能强大的纯文本编辑器 补充说明 vi命令 是UNIX操作系统和类UNIX操作系统中最通用的全屏幕纯文本编辑器。Linux中的vi编辑器叫vim，它是vi的增强版（vi Improved），与vi编辑器完全兼容，而且实现了很多增强功能。 vi编辑器支持编辑模式和命令模式，编辑模式下可以完成文本的编辑功能，命令模式下可以完成对文件的操作命令，要正确...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/vi.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"vi"}],["meta",{"property":"og:description","content":"vi 功能强大的纯文本编辑器 补充说明 vi命令 是UNIX操作系统和类UNIX操作系统中最通用的全屏幕纯文本编辑器。Linux中的vi编辑器叫vim，它是vi的增强版（vi Improved），与vi编辑器完全兼容，而且实现了很多增强功能。 vi编辑器支持编辑模式和命令模式，编辑模式下可以完成文本的编辑功能，命令模式下可以完成对文件的操作命令，要正确..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vi\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]}]},{"level":2,"title":"知识扩展","slug":"知识扩展","link":"#知识扩展","children":[]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":6.28,"words":1883},"filePathRelative":"command/linux/vi.md","localizedDate":"2024年4月12日","autoDesc":true}');export{p as comp,m as data};
