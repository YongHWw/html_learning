jquery-ui

https://jqueryui.com/





```html
$(function(){

            $('.box').draggable({

                // 限制轴向只能延x轴拖动
                axis: 'x',
                // 限制移动范围为父级
                containment:'parent',

                opacity:0.6,

                drag:function(ev, ui){
                    // console.log(ui);
                    // document.title = ui.position.left
                    $('#showNum').val(parseInt(100*(ui.position.left/600)))
                }

            });

        })

```

