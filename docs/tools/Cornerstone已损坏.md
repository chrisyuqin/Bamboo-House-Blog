# Cornerstone已损坏
提示：Cornerstone已损坏,无法打开。 您应该将它移到废纸篓。
>1. 打开终端，一般在：启动台-其他-终端，或者直接用搜索
>
<code>sudo spctl --master-disable</code>，按回车键
> 
>2. 输入密码，按回车键

> 
>3. 继续输入
>
<code>sudo xattr -r -d com.apple.quarantine /Applications/Cornerstone.app/</code>，按回车键
>
>4. 关闭终端，再重新打开试试吧！
