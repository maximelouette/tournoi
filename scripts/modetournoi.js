$( function() {
	var images = {};
	images["chaman"] = new Image();
	images["chaman"].src = 'classes/shaman.png';
	images["mage"] = new Image();
	images["mage"].src = 'classes/mage.png';
	images["voleur"] = new Image();
	images["voleur"].src = 'classes/rogue.png';
	images["guerrier"] = new Image();
	images["guerrier"].src = 'classes/warrior.png';
	images["demoniste"] = new Image();
	images["demoniste"].src = 'classes/warlock.png';
	images["pretre"] = new Image();
	images["pretre"].src = 'classes/priest.png';
	images["chasseur"] = new Image();
	images["chasseur"].src = 'classes/hunter.png';
	images["druide"] = new Image();
	images["druide"].src = 'classes/druid.png';
	images["paladin"] = new Image();
	images["paladin"].src = 'classes/paladin.png';
	images["demonhunter"] = new Image();
	images["demonhunter"].src = 'classes/demonhunter.png';
	images["deathknight"] = new Image();
	images["deathknight"].src = 'classes/deathknight.png';

	images["Ban"] = new Image();
	images["Ban"].src = 'status/ban.png';
	images["Win"] = new Image();
	images["Win"].src = 'status/win.png';
	images["Failed"] = new Image();
	images["Failed"].src = 'status/fail.png';
    DefaultSize='60px'
  
	images["scene-1"] = new Image();
	images["scene-1"].src = 'scenes/scene-1.png';
	images["scene-2"] = new Image();
	images["scene-2"].src = 'scenes/scene-2.png';
	images["scene-3"] = new Image();
	images["scene-3"].src = 'scenes/scene-3.png';
  
  
  topPlayer= {
		chaman : {
			played : false,
			ban : false,
			win : false,
			loose :false
			},
		mage : {
			played : false,
			ban : false,
			win : false,
			loose :false
			}
	}
    
	$( "#draggable-top" ).draggable();
	$( "#draggable-command").draggable();
	$( "#draggable-bot" ).draggable();
	
	function showImage(maindiv, baseimage, classPlayed)
	{
			$(maindiv + " " + baseimage).attr("src", images[classPlayed].src);
			$(maindiv + " " + baseimage)[0].style.width = DefaultSize;
			$(maindiv + " " + baseimage)[0].style.height = DefaultSize;
			$(maindiv)[0].style.width=DefaultSize;
	}
	function hideImage(maindiv, baseimage, classPlayed)
	{
			$(maindiv + " " + baseimage).attr("src", images[classPlayed].src);
			$(maindiv + " " + baseimage)[0].style.width = '0px';
			$(maindiv + " " + baseimage)[0].style.height = '0px';
			$(maindiv)[0].style.width='0px';
	}
	
	function showStatusImage(maindiv, baseimage, classPlayed)
	{
			$(maindiv + " " + baseimage).attr("src", images[classPlayed].src);
			$(maindiv + " " + baseimage)[0].style.width = DefaultSize;
			$(maindiv + " " + baseimage)[0].style.height = DefaultSize;
	}
	function hideStatusImage(maindiv, baseimage, classPlayed)
	{
			$(maindiv + " " + baseimage).attr("src", images[classPlayed].src);
			$(maindiv + " " + baseimage)[0].style.width = '0px';
			$(maindiv + " " + baseimage)[0].style.height = '0px';
	}
	
	function showHideClass(checkbox,maindiv, baseimage, classPlayed, player)
	{
		if ($(checkbox).is(':checked'))
		{
			showImage(maindiv, baseimage, classPlayed);
			$("#radio-status-" + classPlayed + "-" +player).show()

		}
		else
		{
			hideImage(maindiv, baseimage, classPlayed);
			$("#radio-status-" + classPlayed + "-" + player).hide()

		}
	}
	function showHideClassStatus(checkbox,maindiv, baseimage, classPlayed)
	{
		if ($(checkbox).is(':checked'))
		{
			showStatusImage(maindiv, baseimage, classPlayed);
		}
		else
		{
			hideStatusImage(maindiv, baseimage, classPlayed);
		}
	}
	
	function declareClass(classeHS, player)
	{
		$("#checkbox-played-"+classeHS+"-"+player).on("change", function(event){
			showHideClass("#checkbox-played-" + classeHS + "-" + player, "#draggable-" + player + " #image-" + classeHS + "-" + player,"#image-" + classeHS + "-" + player + "-class",classeHS, player)
			$("#checkbox-played-" + classeHS + "-" + player).show()
		});
		$("#radio-status-" + classeHS + "-" + player).hide()
		$("#checkbox-vide-" + classeHS + "-" + player).prop('checked',true);
		$("#checkbox-vide-"+classeHS+"-"+player).on("change", function(event){
			hideStatusImage("#draggable-" + player + " #image-" + classeHS + "-" + player,"#image-" + classeHS + "-" + player + "-status",classeHS)
			hideStatusImage("#draggable-" + player + " #image-" + classeHS + "-" + player,"#image-" + classeHS + "-" + player + "-status",classeHS)
			hideStatusImage("#draggable-" + player + " #image-" + classeHS + "-" + player,"#image-" + classeHS + "-" + player + "-status",classeHS)
		});
		$("#checkbox-ban-"+classeHS+"-"+player).on("change", function(event){
			showHideClassStatus("#checkbox-ban-" + classeHS + "-" + player,"#draggable-" + player + " #image-" + classeHS + "-" + player,"#image-" + classeHS + "-" + player + "-status","Ban")
		});
		$("#checkbox-win-"+classeHS+"-"+player).on("change", function(event){
			showHideClassStatus("#checkbox-win-" + classeHS + "-" + player,"#draggable-" + player + " #image-" + classeHS + "-" + player,"#image-" + classeHS + "-" + player + "-status","Win")
		});
		$("#checkbox-loose-"+classeHS+"-"+player).on("change", function(event){
			showHideClassStatus("#checkbox-loose-" + classeHS + "-" + player,"#draggable-" + player + " #image-" + classeHS + "-" + player,"#image-" + classeHS + "-" + player + "-status","Failed")
		});
	}
	

	declareClass("chaman","top")
	declareClass("mage","top")
	declareClass("voleur","top")
	declareClass("guerrier","top")
	declareClass("demoniste","top")
	declareClass("pretre","top")
	declareClass("chasseur","top")
	declareClass("druide","top")
	declareClass("paladin","top")
	declareClass("demonhunter","top")
	declareClass("deathknight","top")

	declareClass("chaman","bot")
	declareClass("mage","bot")
	declareClass("voleur","bot")
	declareClass("guerrier","bot")
	declareClass("demoniste","bot")
	declareClass("pretre","bot")
	declareClass("chasseur","bot")
	declareClass("druide","bot")
	declareClass("paladin","bot")
	declareClass("demonhunter","bot")
	declareClass("deathknight","bot")
	//---------------------------------------------------------------------------------------------------------
	//  configuration de la scene
	//---------------------------------------------------------------------------------------------------------
	function changeBackground(bElement, bUrl) {
	return bElement.style.backgroundImage = "url("+bUrl+")";
	}

	$("#scene-1").on("change", function(event){
			console.log(this);
			changeBackground(document.body, "scenes/scene-1.png");
        });
	$("#scene-2").on("change", function(event){
			console.log(this);
			changeBackground(document.body, "scenes/scene-2.png");
	});
	$("#scene-3").on("change", function(event){
			console.log(this);
			changeBackground(document.body, "scenes/scene-3.png");
	});
	//---------------------------------------------------------------------------------------------------------
	// Clean de toutes les classes
	//---------------------------------------------------------------------------------------------------------
	function reinit(player)
	{
		classesHS=["chaman","mage","voleur","guerrier","demoniste","pretre","chasseur","druide","paladin","demonhunter"]
		for (var i in classesHS) 
		{
		$("#checkbox-played-" + classesHS[i] + "-" + player).prop('checked',false);
		$("#checkbox-vide-" + classesHS[i] + "-" + player).prop('checked',true);
		$("#checkbox-ban-" + classesHS[i] + "-" + player).prop('checked',false);
		$("#checkbox-win-" + classesHS[i] + "-" + player).prop('checked',false);
		$("#checkbox-loose-" + classesHS[i] + "-" + player).prop('checked',false);
		showHideClass("#checkbox-played-" + classesHS[i] + "-" + player, "#draggable-" + player + " #image-" + classesHS[i] + "-" + player,"#image-" + classesHS[i] + "-" + player + "-class",classesHS[i],player)
		showHideClassStatus("#checkbox-ban-" + classesHS[i] + "-" + player,"#draggable-" + player + " #image-" + classesHS[i] + "-" + player,"#image-" + classesHS[i] + "-" + player + "-status","Ban")
		showHideClassStatus("#checkbox-win-" + classesHS[i] + "-" + player,"#draggable-" + player + " #image-" + classesHS[i] + "-" + player,"#image-" + classesHS[i] + "-" + player + "-status","Win")
		showHideClassStatus("#checkbox-loose-" + classesHS[i] + "-" + player,"#draggable-" + player + " #image-" + classesHS[i] + "-" + player,"#image-" + classesHS[i] + "-" + player + "-status","Failed")
		}
	}
	
	// clear all
	
	$("#clean-top").button()
        .click(function(){
			console.log("clean-top");
            reinit("top");
        });
	
	$("#clean-bot").button()
        .click(function(){
			console.log("clean-bot");
            reinit("bot");
        });
	
	
	
	// blocage / autorisation de déplacement du panel de controle
	$("#checkbox-fix-command-panel").on("change", function(event){
		if ($("#checkbox-fix-command-panel").is(':checked'))
		{
			$("#draggable-command").draggable({disabled: true})
		}
		else
		{
			$("#draggable-command").draggable({disabled: false})
		}
	});
	
	
	
	
});