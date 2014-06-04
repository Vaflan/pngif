pngif
=====

It's jQuery Plugin, Frame animation for PNG sprites.

Alternative for APNG, animates images.

The advantage is that it is obtained as a normal image in <img> tag

For example, you can download repository and check out example.html


Example code
=====

	$(".pngif").pngif({'frames': 8});


=====

Where can i get free sprites?
 - http://preloaders.net/

Screen: http://i.imgur.com/IWpRszb.png


Описание
=====
Как то было желания дополнить jQuery своим плагином, но каким недоумевал. 
После как то были трудности с прозрачностью альфа GIF тенями, которые не работали вообще, и возникла поискать альтернативу. Тут то я наткнулся на APNG, но узнав после, он не поддерживается браузерами. 
Ну и возник вопрос, почему бы не сотворить плагин, который просто будет переключать спрайт png и делать как бы GIF. 

Спустя время, плагин оживился, и можно пользоваться, вот ссылка на репозиторий: 
https://github.com/Vaflan/pngif 

Немного о возможностях: 
- достаточно взять jQuery элемент и применить .pngif() указав количество кадров в спрайте изображения 
- есть возможность указать позицию кадров начиная с top или left 
- можно указать период переключения в миллисекундах (по дефолту 100мс) 
- можно указать в какую сторону пролистать спрайты (right, down, top, left) 
- так же можно указать определённый размер вырезаемого спрайта, в случае если на спрайте есть лишние элементы как у fancybox preload 

Проект будет ещё развиваться и пополняться, если есть комментарии по обработки - пишите, посмотрим ) 