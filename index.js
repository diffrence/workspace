(function(){
    $("#share-to").on({
        'mouseover':function(){
            var Vobject = document.getElementsByTagName('object')[0];   
            var embedBox =document.getElementById('embedBox');    
            var input1 = embedBox.getElementsByTagName('input')[0];
            var input2 = embedBox.getElementsByTagName('input')[1];
            var ckScript = document.createElement("script");
            ckScript.src="./dist/ckplayer.js";                    

            if(Vobject){
                var Vembed = Vobject;                           
            }else{
                var Vembed  = document.getElementsByTagName('embed')[0];                
            }                 
                var cP = Vembed.cloneNode(true); 
                var isExist = cP.getElementsByTagName('embed')[0];
                if(isExist){
                    isExist.setAttribute("width",480);
                    isExist.setAttribute("height",400);
                }         
                cP.setAttribute("width",480);
                cP.setAttribute("height",400);
                input1.value =ckScript.outerHTML+ cP.outerHTML;
                input2.value = window.hm3u8+"?"+window.hmypic;
                $(this).children('#tocontrol').show();            
                 
        },'mouseout':function(){             
            $(this).children('#tocontrol').hide();  
        }}
    );
    function copyInput(parent,target){
        $(parent).on('click' , target ,function(){
           var iparent = parent.substring(1);
           var OcodeOne = document.getElementById(iparent);
           var eint = OcodeOne.getElementsByTagName('input')[0];
           var $Parent = $(parent);
           var $share_tips = $Parent.children(".share_tips");
           eint.focus()
           eint.select();
           var isSupport = document.execCommand('Copy');
           function setTimeToDo(){
                setTimeout(function(){
                            $share_tips.hide()
                        },1000);
            };  
           try{
                if(isSupport){
                    //document.execCommand("Copy");
                    $share_tips.show();
                    setTimeToDo();
                } else{                    
                    $share_tips.css({"background-image":"none","background-color":"#000"});
                    $share_tips.html('全选然后Ctrl+C复制');
                    $share_tips.show();
                    setTimeToDo();
                }
            } catch(err){
                //fail info
            }
           
           
        })
    }
    new copyInput ("#codeone" , ".btn_copy");
    new copyInput ("#codetwo" , ".btn_copy");
})()