// JavaScript Document

var character={phase:"", ARC:"", back:"", visor:"", attach:"", plates:"", flaps:"",pouchL:"",pouchH:"",shoulder:"",ankle:"",thigh:"",pauldron:"",strap:""};


//functions setting var to change

function setPhase(changling){
	
	character.phase=changling;
	console.log(character.phase);
	
	bodyBuilder();
	conflicts();
	imgConflicts();
	
}
function setPauldron(changling){
	
	character.pauldron=changling;
	console.log(character.pauldron);
	
	bodyBuilder();
	conflicts();
	imgConflicts();
	
}
function setARC(changling){
	
	character.ARC=changling;
	console.log(character.ARC);
	
	bodyBuilder();
	conflicts();
	imgConflicts();
}
function setThigh(changling){
	
	character.thigh=changling;
	console.log(character.thigh);
	
	bodyBuilder();
	conflicts();
	imgConflicts();
}
function setBack(changling){
	
	character.back=changling;
	console.log(character.back);
	
	bodyBuilder();
	conflicts();
	imgConflicts();
}
function setPouchH(changling){
	
	character.pouchH=changling;
	console.log(character.pouchH);
	
	bodyBuilder();
	conflicts();
	imgConflicts();
}
function setPouchL(changling){
	
	character.pouchL=changling;
	console.log(character.pouchL);
	
	bodyBuilder();
	conflicts();
	imgConflicts();
}
function setShoulder(changling){
	
	character.shoulder=changling;
	console.log(character.shoulder);
	
	bodyBuilder();
	conflicts();
	imgConflicts();
}
function setAnkle(changling){
	
	character.ankle=changling;
	console.log(character.ankle);
	
	bodyBuilder();
	conflicts();
	imgConflicts();
}
function setStrap(changling){
	
	character.strap=changling;
	console.log(character.strap);
	
	bodyBuilder();
	conflicts();
	imgConflicts();
}
function setPlates(changling){
	
	character.plates=changling;
	console.log(character.plates);
	
	bodyBuilder();
	conflicts();
	imgConflicts();
}
function setVisor(changling){
	
	character.visor=changling;
	console.log(character.visor);
	
	bodyBuilder();
	conflicts();
	imgConflicts();
}
function setAttach(changling){
	
	character.attach=changling;
	console.log(character.attach);
	
	bodyBuilder();
	conflicts();
	imgConflicts();
}
function setFlaps(changling){
	
	character.flaps=changling;
	console.log(character.flaps);
	
	bodyBuilder();
	conflicts();
	imgConflicts();
}


//place base images

function bodyBuilder(){
	
	if(character.phase!=""){
		document.getElementById('phase').innerHTML="<img class='img-fluid' src='base/"+character.phase+"' alt='phase'>";
	}
	
	if(character.ARC!=""){
		document.getElementById('ARC').innerHTML="<img class='img-fluid' src='assets/ARC/"+character.ARC+"' alt='ARC armour'>";
	}
	
	if(character.pauldron!=""){
		document.getElementById('pauldron').innerHTML="<img class='img-fluid' src='assets/Pauldron/"+character.pauldron+"' alt='pauldron'>";
	}
	if(character.thigh!=""){
		document.getElementById('thigh').innerHTML="<img class='img-fluid' src='assets/thigh/"+character.thigh+"' alt='thigh'>";
	}
	if(character.back!=""){
		document.getElementById('back').innerHTML="<img class='img-fluid' src='assets/back/"+character.back+"' alt='back'>";
	}
	if(character.pouchH!=""){
		document.getElementById('pouchH').innerHTML="<img class='img-fluid' src='assets/pouch/"+character.pouchH+"' alt='pouch higher'>";
	}
	if(character.pouchL!=""){
		document.getElementById('pouchL').innerHTML="<img class='img-fluid' src='assets/pouch/"+character.pouchL+"' alt='pouch lower'>";
	}
	if(character.shoulder!=""){
		document.getElementById('shoulder').innerHTML="<img class='img-fluid' src='assets/pouch/"+character.shoulder+"' alt='shoulder'>";
	}
	if(character.ankle!=""){
		document.getElementById('ankle').innerHTML="<img class='img-fluid' src='assets/pouch/"+character.ankle+"' alt='ankle'>";
	}
	if(character.strap!=""){
		document.getElementById('strap').innerHTML="<img class='img-fluid' src='assets/strap/"+character.strap+"' alt='strap'>";
	}
	if(character.plates!=""){
		document.getElementById('plates').innerHTML="<img class='img-fluid' src='assets/head/"+character.plates+"' alt='plates'>";
	}
	if(character.visor!=""){
		document.getElementById('visor').innerHTML="<img class='img-fluid' src='assets/head/"+character.visor+"' alt='visor'>";
	}
	if(character.attach!=""){
		document.getElementById('attach').innerHTML="<img class='img-fluid' src='assets/head/"+character.attach+"' alt='attach'>";
	}
	if(character.flaps!=""){
		document.getElementById('flaps').innerHTML="<img class='img-fluid' src='assets/head/"+character.flaps+"' alt='flaps'>";
	}
}

//if statement for conflicts

function conflicts(){
	
	console.log("conflict checking");
	
	//Helment Attachments conflict check
	
	if(character.phase=="phase1_ARF.png"||character.phase=="phase2_ARF.png"){
		document.getElementById('attachCF').innerHTML=
			"<img class='py-1 px-1' onClick='setAttach(\"none.png\");' src='assets/head/head_none_TN.png' alt='No Attachments seclection'><img class='py-1 px-1' src='assets/head/head_flashlight_CF.png' alt='Conflict flashlight seclection'><img class='py-1 px-1' src='assets/head/head_antenna_CF.png' alt='Conflict antenna seclection'><img class='py-1 px-1' src='assets/head/head_rangefinder_CF.png' alt='Connflict rangefinder seclection'>";
	}else if(character.phase=="phase2_air.png"){
		document.getElementById('attachCF').innerHTML=
			"<img class='py-1 px-1' onClick='setAttach(\"none.png\");' src='assets/head/head_none_TN.png' alt='No Attachments seclection'><img class='py-1 px-1' src='assets/head/head_flashlight_CF.png' alt='Conflict flashlight seclection'><img class='py-1 px-1' onClick='setAttach(\"head_antenna.png\");' src='assets/head/head_antenna_TN.png' alt='Antenna seclection'><img class='py-1 px-1' onClick='setAttach(\"head_rangefinder.png\");' src='assets/head/head_rangefinder_TN.png' alt='Rangefinder seclection'>";
	}else if(character.phase=="phase1.png"||character.phase=="phase1.5.png"||character.phase=="phase2.png"){
		document.getElementById('attachCF').innerHTML=
			"<img class='py-1 px-1' onClick='setAttach(\"none.png\");' src='assets/head/head_none_TN.png' alt='No Attachments seclection'><img class='py-1 px-1' onClick='setAttach(\"head_flashlight.png\"),setVisor(\"head_visor.png\");' src='assets/head/head_flashlight_TN.png' alt='Flashlight seclection'><img class='py-1 px-1' onClick='setAttach(\"head_antenna.png\");' src='assets/head/head_antenna_TN.png' alt='Antenna seclection'><img class='py-1 px-1' onClick='setAttach(\"head_rangefinder.png\");' src='assets/head/head_rangefinder_TN.png' alt='Rangefinder seclection'>";	
	}
	
	//Helment Plates conflict check
	
	if(character.phase=="phase1.png"){
		document.getElementById('platesCF').innerHTML=
			"<img class='py-1 px-1' onClick='setPlates(\"none.png\");' src='assets/head/head_none_TN.png' alt='No plates seclection'><img class='py-1 px-1' onClick='setPlates(\"head_plates.png\");' src='assets/head/head_plates_TN.png' alt='Plates seclection'><img class='py-1 px-1' src='assets/head/head_plates_gun_CF.png' alt='Conflict gunner Plates seclection'>";
	}else if(character.phase=="phase1.5.png"||character.phase=="phase2.png"){
		document.getElementById('platesCF').innerHTML=
			"<img class='py-1 px-1' onClick='setPlates(\"none.png\");' src='assets/head/head_none_TN.png' alt='No plates seclection'><img class='py-1 px-1' src='assets/head/head_plates_CF.png' alt='Conflict plates seclection'><img class='py-1 px-1' onClick='setPlates(\"head_plates_gun.png\");' src='assets/head/head_plates_gun_TN.png' alt='Gunner Plates seclection'>";
	}else if(character.phase=="phase1_ARF.png"||character.phase=="phase2_ARF.png"||character.phase=="phase2_air.png"){
		document.getElementById('platesCF').innerHTML=
			"<img class='py-1 px-1' onClick='setPlates(\"none.png\");' src='assets/head/head_none_TN.png' alt='No plates seclection'><img class='py-1 px-1' src='assets/head/head_plates_CF.png' alt='Conflict plates seclection'><img class='py-1 px-1' src='assets/head/head_plates_gun_CF.png' alt='Conflict gunner Plates seclection'>";
	}
	
	//Helmet Visor conflict check
	
	if(character.phase=="phase1_ARF.png"||character.phase=="phase2_ARF.png"||character.phase=="phase2_air.png"){
		document.getElementById('visorCF').innerHTML=
			"<img class='py-1 px-1' onClick='setVisor(\"none.png\");' src='assets/head/head_none_TN.png' alt='No visor seclection'><img class='py-1 px-1' src='assets/head/head_visor_CF.png' alt='Conflict visor seclection'><img class='py-1 px-1' src='assets/head/head_binoculars_D_CF.png' alt='Conflict binoculars down seclection'><img class='py-1 px-1' src='assets/head/head_binoculars_U_CF.png' alt='Conflict binoculars up seclection'>";
	}else if(character.phase=="phase1.png"||character.phase=="phase1.5.png"||character.phase=="phase2.png"){
		document.getElementById('visorCF').innerHTML=
			"<img class='py-1 px-1' onClick='setVisor(\"none.png\");' src='assets/head/head_none_TN.png' alt='No visor seclection'><img class='py-1 px-1' onClick='setVisor(\"head_visor.png\");' src='assets/head/head_visor_TN.png' alt='Visor seclection'><img class='py-1 px-1' onClick='setVisor(\"head_binoculars_D.png\");' src='assets/head/head_binoculars_D_TN.png' alt='Binoculars down seclection'><img class='py-1 px-1' onClick='setVisor(\"head_binoculars_U.png\");' src='assets/head/head_binoculars_U_TN.png' alt='Binoculars up seclection'>";
	}
	if(character.attach=="head_flashlight.png"){
		document.getElementById('visorCF').innerHTML=
			"<img class='py-1 px-1' onClick='setVisor(\"none.png\");' src='assets/head/head_none_TN.png' alt='No visor seclection'><img class='py-1 px-1' onClick='setVisor(\"head_visor.png\");' src='assets/head/head_visor_TN.png' alt='Visor seclection'><img class='py-1 px-1' src='assets/head/head_binoculars_D_CF.png' alt='Conflict binoculars down seclection'><img class='py-1 px-1' src='assets/head/head_binoculars_U_CF.png' alt='Conflict binoculars up seclection'>";
	}if(character.attach=="head_none.png"||character.attach=="head_antenna.png"||character.attach=="head_rangefinder.png"){
		document.getElementById('visorCF').innerHTML=
			"<img class='py-1 px-1' onClick='setVisor(\"none.png\");' src='assets/head/head_none_TN.png' alt='No visor seclection'><img class='py-1 px-1' onClick='setVisor(\"head_visor.png\");' src='assets/head/head_visor_TN.png' alt='Visor seclection'><img class='py-1 px-1' onClick='setVisor(\"head_binoculars_D.png\");' src='assets/head/head_binoculars_D_TN.png' alt='Binoculars down seclection'><img class='py-1 px-1' onClick='setVisor(\"head_binoculars_U.png\");' src='assets/head/head_binoculars_U_TN.png' alt='Binoculars up seclection'>";
	}
	
	//Pauldron conflict check
	//strap conflict check
	
	if(character.strap=="support_straps.png"){
		document.getElementById('pauldronCF').innerHTML=
			"<img class='py-1 px-1' onClick='setPauldron(\"none.png\");' src='assets/Pauldron/pauldron_none_TN.png' alt='No pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_P1_base.png\");' src='assets/Pauldron/pauldron_P1_base_TN.png' alt='Phase 1 pauldron seclection'><img class='py-1 px-1' src='assets/Pauldron/pauldron_P2_base_CF.png'alt=Conflict phase 2 pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_A_ARC_base.png\");' src='assets/Pauldron/pauldron_A_ARC_base_TN.png' alt='Alpha ARC pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_ARC_base.png\");' src='assets/Pauldron/pauldron_ARC_base_TN.png' alt='ARC pauldron seclection'><img class='py-1 px-1' src='assets/Pauldron/pauldron_elite_base_CF.png' alt='Conflict elite pauldron seclection'>";
	}else if(character.strap=="support_belt.png"){
		document.getElementById('pauldronCF').innerHTML=
			"<img class='py-1 px-1' onClick='setPauldron(\"none.png\");' src='assets/Pauldron/pauldron_none_TN.png' alt='No pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_P1_base.png\");' src='assets/Pauldron/pauldron_P1_base_TN.png' alt='Phase 1 pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_P2_base.png\");' src='assets/Pauldron/pauldron_P2_base_TN.png'alt='Phase 2 pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_A_ARC_base.png\");' src='assets/Pauldron/pauldron_A_ARC_base_TN.png' alt='Alpha ARC pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_ARC_base.png\");' src='assets/Pauldron/pauldron_ARC_base_TN.png' alt='ARC pauldron seclection'><img class='py-1 px-1' src='assets/Pauldron/pauldron_elite_base_CF.png' alt='Conflict elite pauldron seclection'>";
	}else if (character.strap=="suspenders.png"){
		document.getElementById('pauldronCF').innerHTML=
			"<img class='py-1 px-1' onClick='setPauldron(\"none.png\");' src='assets/Pauldron/pauldron_none_TN.png' alt='No pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_P1_base.png\");' src='assets/Pauldron/pauldron_P1_base_TN.png' alt='Phase 1 pauldron seclection'><img class='py-1 px-1' src='assets/Pauldron/pauldron_P2_base_CF.png'alt='Confluict phase 2 pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_A_ARC_base.png\");' src='assets/Pauldron/pauldron_A_ARC_base_TN.png' alt='Alpha ARC pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_ARC_base.png\");' src='assets/Pauldron/pauldron_ARC_base_TN.png' alt='ARC pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_elite_base.png\");' src='assets/Pauldron/pauldron_elite_base_TN.png' alt='Elite pauldron seclection'>";
	}
	if(character.back=="backpack.png"||character.back=="jetpack.png"){
		document.getElementById('pauldronCF').innerHTML=
			"<img class='py-1 px-1' onClick='setPauldron(\"none.png\");' src='assets/Pauldron/pauldron_none_TN.png' alt='No pauldron seclection'><img class='py-1 px-1' src='assets/Pauldron/pauldron_P1_base_CF.png' alt='Conflict phase 1 pauldron seclection'><img class='py-1 px-1' src='assets/Pauldron/pauldron_P2_base_CF.png'alt='Conflict phase 2 pauldron seclection'><img class='py-1 px-1' src='assets/Pauldron/pauldron_A_ARC_base_CF.png' alt='Conflict alpha ARC pauldron seclection'><img class='py-1 px-1' src='assets/Pauldron/pauldron_ARC_base_CF.png' alt='ConflictARC pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_elite_base.png\");' src='assets/Pauldron/pauldron_elite_base_TN.png' alt='Elite pauldron seclection'>";
	}else if(character.back!="backpack.png"||character.back!="jetpack.png"){
		document.getElementById('pauldronCF').innerHTML=
			"<img class='py-1 px-1' onClick='setPauldron(\"none.png\");' src='assets/Pauldron/pauldron_none_TN.png' alt='No pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_P1_base.png\");' src='assets/Pauldron/pauldron_P1_base_TN.png' alt='Phase 1 pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_P2_base.png\");' src='assets/Pauldron/pauldron_P2_base_TN.png'alt='Phase 2 pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_A_ARC_base.png\");' src='assets/Pauldron/pauldron_A_ARC_base_TN.png' alt='Alpha ARC pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_ARC_base.png\");' src='assets/Pauldron/pauldron_ARC_base_TN.png' alt='ARC pauldron seclection'><img class='py-1 px-1' onClick='setPauldron(\"pauldron_elite_base.png\");' src='assets/Pauldron/pauldron_elite_base_TN.png' alt='Elite pauldron seclection'>";
	}
	
	if(character.pauldron=="pauldron_P2_base.png"){
		document.getElementById('strapsCF').innerHTML=
			"<img class='py-1 px-1' onClick='setStrap(\"none.png\");' src='assets/strap/strap_none_TN.png' alt='No strap seclection'><img class='py-1 px-1' src='assets/strap/suspenders_CF.png' alt='Conflict suspenders seclection'><img class='py-1 px-1' src='assets/strap/support_straps_CF.png' alt='Conflict support Straps seclection'><img class='py-1 px-1' onClick='setStrap(\"support_belt.png\");' src='assets/strap/support_belt_TN.png' alt='Support belt seclection'>";
	}else if(character.pauldron=="pauldron_elite_base.png"){
		document.getElementById('strapsCF').innerHTML=
			"<img class='py-1 px-1' onClick='setStrap(\"none.png\");' src='assets/strap/strap_none_TN.png' alt='No strap seclection'><img class='py-1 px-1' onClick='setStrap(\"suspenders.png\");' src='assets/strap/suspenders_TN.png' alt='Suspenders seclection'><img class='py-1 px-1' src='assets/strap/support_straps_CF.png' alt='Conflict support Straps seclection'><img class='py-1 px-1' src='assets/strap/support_belt_CF.png' alt='Conflict support belt seclection'>";
	}else if(character.pauldron!="pauldron_elite_base.png"||character.pauldron!="pauldron_P2_base.png"){
		document.getElementById('strapsCF').innerHTML=
			"<img class='py-1 px-1' onClick='setStrap(\"none.png\");' src='assets/strap/strap_none_TN.png' alt='No strap seclection'><img class='py-1 px-1' onClick='setStrap(\"suspenders.png\");' src='assets/strap/suspenders_TN.png' alt='Suspenders seclection'><img class='py-1 px-1' onClick='setStrap(\"support_straps.png\");' src='assets/strap/support_straps_TN.png' alt='Support Straps seclection'><img class='py-1 px-1' onClick='setStrap(\"support_belt.png\");' src='assets/strap/support_belt_TN.png' alt='Support belt seclection'>";
	}
	
	//Back conflict check
	
	if(character.pauldron=="pauldron_A_ARC_base.png"||character.pauldron=="pauldron_ARC_base.png"||character.pauldron=="pauldron_P1_base.png"||character.pauldron=="pauldron_P2_base.png"){
		document.getElementById('backCF').innerHTML=
			"<img onClick='setBack(\"none.png\");' src='assets/back/back_none_TN.png' alt='No back seclection'><img onClick='setBack(\"backpack_scout.png\");' src='assets/back/backpack_scout_TN.png' alt='Scout backpack seclection'><img src='assets/back/backpack_CF.png' alt='Conflict backpack seclection'><img onClick='setBack(\"backpack_ARC.png\");' src='assets/back/backpack_ARC_TN.png' alt='ARC backpack seclection'><img src='assets/back/jetpack_CF.png' alt='Conflict jetpack seclection'><img onClick='setBack(\"jetpack2.png\");' src='assets/back/jetpack2_TN.png' alt='jetpack 2 seclection'>";
	}else if(character.pauldron=="none.png"||character.pauldron=="pauldron_elite_base.png"){
		document.getElementById('backCF').innerHTML=
			"<img onClick='setBack(\"none.png\");' src='assets/back/back_none_TN.png' alt='No back seclection'><img onClick='setBack(\"backpack_scout.png\");' src='assets/back/backpack_scout_TN.png' alt='Scout backpack seclection'><img onClick='setBack(\"backpack.png\");' src='assets/back/backpack_TN.png' alt='Backpack seclection'><img onClick='setBack(\"backpack_ARC.png\");' src='assets/back/backpack_ARC_TN.png' alt='ARC backpack seclection'><img onClick='setBack(\"jetpack.png\");' src='assets/back/jetpack_TN.png' alt='jetpack seclection'><img onClick='setBack(\"jetpack2.png\");' src='assets/back/jetpack2_TN.png' alt='jetpack 2 seclection'>";
	}
			
	//Helment Flaps conflict check
	
	if(character.phase=="phase1.png"){
		document.getElementById('flapsCF').innerHTML=
			"<img class='py-1 px-1' onClick='setFlaps(\"none.png\");' src='assets/head/head_none_TN.png' alt='No Flaps seclection'><img class='py-1 px-1' onClick='setFlaps(\"flaps_P1.png\");' src='assets/head/flaps_P1_TN.png' alt='Phase 1 Flaps seclection'><img class='py-1 px-1' src='assets/head/flaps_P2_CF.png' alt='Conflict phase 2 Flaps seclection'><img class='py-1 px-1' src='assets/head/flaps_ARF_CF.png' alt='ConflictARF Flaps seclection'>";
	}else if(character.phase=="phase1_ARF.png"){
		document.getElementById('flapsCF').innerHTML=
			"<img class='py-1 px-1' onClick='setFlaps(\"none.png\");' src='assets/head/head_none_TN.png' alt='No Flaps seclection'><img class='py-1 px-1' src='assets/head/flaps_P1_CF.png' alt='Conflict phase 1 Flaps seclection'><img class='py-1 px-1' src='assets/head/flaps_P2_CF.png' alt='Conflict phase 2 Flaps seclection'><img class='py-1 px-1' onClick='setFlaps(\"flaps_ARF.png\");' src='assets/head/flaps_ARF_TN.png' alt='ARF Flaps seclection'>";
	}else if(character.phase=="phase1.5.png"){
		document.getElementById('flapsCF').innerHTML=
			"<img class='py-1 px-1' onClick='setFlaps(\"none.png\");' src='assets/head/head_none_TN.png' alt='No Flaps seclection'><img class='py-1 px-1' src='assets/head/flaps_P1_CF.png' alt='Conflict phase 1 Flaps seclection'><img class='py-1 px-1' onClick='setFlaps(\"flaps_P2.png\");' src='assets/head/flaps_P2_TN.png' alt='Phase 2 Flaps seclection'><img class='py-1 px-1' src='assets/head/flaps_ARF_CF.png' alt='Conflict ARF Flaps seclection'>";
	}else if(character.phase=="phase2.png"){
		document.getElementById('flapsCF').innerHTML=
			"<img class='py-1 px-1' onClick='setFlaps(\"none.png\");' src='assets/head/head_none_TN.png' alt='No Flaps seclection'><img class='py-1 px-1' src='assets/head/flaps_P1_CF.png' alt='Conflict phase 1 Flaps seclection'><img class='py-1 px-1' onClick='setFlaps(\"flaps_P2.png\");' src='assets/head/flaps_P2_TN.png' alt='Phase 2 Flaps seclection'><img class='py-1 px-1' src='assets/head/flaps_ARF_CF.png' alt='Conflict ARF Flaps seclection'>";
	}else if(character.phase=="phase2_ARF.png"){
		document.getElementById('flapsCF').innerHTML=
			"<img class='py-1 px-1' onClick='setFlaps(\"none.png\");' src='assets/head/head_none_TN.png' alt='No Flaps seclection'><img class='py-1 px-1' src='assets/head/flaps_P1_CF.png' alt='Conflict phase 1 Flaps seclection'><img class='py-1 px-1' src='assets/head/flaps_P2_CF.png' alt='Conflict phase 2 Flaps seclection'><img class='py-1 px-1' onClick='setFlaps(\"flaps_ARF.png\");' src='assets/head/flaps_ARF_TN.png' alt='ARF Flaps seclection'>";
	}else if(character.phase=="phase2_air.png"){
		document.getElementById('flapsCF').innerHTML=
			"<img class='py-1 px-1' onClick='setFlaps(\"none.png\");' src='assets/head/head_none_TN.png' alt='No Flaps seclection'><img class='py-1 px-1' src='assets/head/flaps_P1_CF.png' alt='Conflict phase 1 Flaps seclection'><img class='py-1 px-1' src='assets/head/flaps_P2_CF.png' alt='Conflict phase 2 Flaps seclection'><img class='py-1 px-1' onClick='setFlaps(\"flaps_ARF.png\");' src='assets/head/flaps_ARF_CF.png' alt='Conflict ARF Flaps seclection'>";
	}

	
	
	
	//Thighs conflict check
	
	if(character.thigh=="kama_A_ARC.png"||character.thigh=="kama_ARC_pouch.png"){
		document.getElementById('pouchLCF').innerHTML=
			"<img class='py-1 px-1' src='assets/pouch/belt_pouches_CF.png' alt='Conflict belt pouches seclection'><img class='py-1 px-1' src='assets/pouch/belt_holsters_CF.png' alt='Conflict belt holsters seclection'><img class='py-1 px-1' onClick='setAnkle(\"ankle_pouch.png\");' src='assets/pouch/ankle_pouch_TN.png' alt='Ankle pouch seclection'>";
	}else if(character.thigh=="pouch.png"){
		document.getElementById('pouchLCF').innerHTML=
			"<img class='py-1 px-1' onClick='setPouchL(\"belt_pouches.png\");' src='assets/pouch/belt_pouches_TN.png' alt='Belt pouches seclection'><img class='py-1 px-1' src='assets/pouch/belt_holsters_CF.png' alt='Conflict belt holsters seclection'><img class='py-1 px-1' onClick='setAnkle(\"ankle_pouch.png\");' src='assets/pouch/ankle_pouch_TN.png' alt='Ankle pouch seclection'>";
	}else if(character.thigh=="kama.png"||character.thigh=="kama_ARC.png"||character.thigh=="none.png"){
		document.getElementById('pouchLCF').innerHTML=
			"<img class='py-1 px-1' onClick='setPouchL(\"belt_pouches.png\");' src='assets/pouch/belt_pouches_TN.png' alt='Belt pouches seclection'><img class='py-1 px-1' onClick='setPouchL(\"belt_holsters.png\");' src='assets/pouch/belt_holsters_TN.png' alt='belt holsters seclection'><img class='py-1 px-1' onClick='setAnkle(\"ankle_pouch.png\");' src='assets/pouch/ankle_pouch_TN.png' alt='Ankle pouch seclection'>";
	}
	
	//Accessories conflict check
	
	if(character.pauldron=="pauldron_P2_base.png"){
		document.getElementById('pouchHCF').innerHTML=
			"<img class='py-1 px-1' onClick='setPouchH(\"none.png\"),setPouchL(\"none.png\"),setShoulder(\"none.png\"),setAnkle(\"none.png\");' src='assets/pouch/pouch_none_TN.png' alt='No accessories seclection'><img class='py-1 px-1' src='assets/pouch/chest_pouches_CF.png' alt='Conflict chest pouches seclection'><img class='py-1 px-1' onClick='setPouchH(\"chest_ammo_pouches.png\");' src='assets/pouch/chest_ammo_pouches_TN.png' alt='CHest ammo pouches seclection'><img class='py-1 px-1' onClick='setPouchH(\"pauldron_pouch.png\");' src='assets/pouch/pauldron_pouch_TN.png' alt='Pauldron pouch seclection'><img class='py-1 px-1' onClick='setPouchH(\"pauldron_pouches.png\"),setPauldron(\"pauldron_P2_base.png\");' src='assets/pouch/pauldron_pouches_TN.png' alt='Pauldron pouches seclection'><img class='py-1 px-1' onClick='setShoulder(\"shoulder_ammo.png\");' src='assets/pouch/shoulder_amno_TN.png' alt='Shoulder ammo seclection'>";
	}else if(character.pauldron==""||character.pauldron=="none.png"){
		document.getElementById('pouchHCF').innerHTML=
			"<img class='py-1 px-1' onClick='setPouchH(\"none.png\"),setPouchL(\"none.png\"),setShoulder(\"none.png\"),setAnkle(\"none.png\");' src='assets/pouch/pouch_none_TN.png' alt='No accessories seclection'><img class='py-1 px-1' onClick='setPouchH(\"chest_pouches.png\");' src='assets/pouch/chest_pouches_TN.png' alt='chest pouches seclection'><img class='py-1 px-1' onClick='setPouchH(\"chest_ammo_pouches.png\");' src='assets/pouch/chest_ammo_pouches_TN.png' alt='CHest ammo pouches seclection'><img class='py-1 px-1' onClick='setPouchH(\"pauldron_pouch.png\");' src='assets/pouch/pauldron_pouch_TN.png' alt='Pauldron pouch seclection'><img class='py-1 px-1' onClick='setPouchH(\"pauldron_pouches.png\"),setPauldron(\"pauldron_P2_base.png\");' src='assets/pouch/pauldron_pouches_TN.png' alt='Pauldron pouches seclection'><img class='py-1 px-1' onClick='setShoulder(\"shoulder_ammo.png\");' src='assets/pouch/shoulder_amno_TN.png' alt='Shoulder ammo seclection'>";
	}else if(character.pauldron!="pauldron_P2_base.png"){
		document.getElementById('pouchHCF').innerHTML=
			"<img class='py-1 px-1' onClick='setPouchH(\"none.png\"),setPouchL(\"none.png\"),setShoulder(\"none.png\"),setAnkle(\"none.png\");' src='assets/pouch/pouch_none_TN.png' alt='No accessories seclection'><img class='py-1 px-1' onClick='setPouchH(\"chest_pouches.png\");' src='assets/pouch/chest_pouches_TN.png' alt='chest pouches seclection'><img class='py-1 px-1' onClick='setPouchH(\"chest_ammo_pouches.png\");' src='assets/pouch/chest_ammo_pouches_TN.png' alt='CHest ammo pouches seclection'><img class='py-1 px-1' onClick='setPouchH(\"pauldron_pouch.png\");' src='assets/pouch/pauldron_pouch_TN.png' alt='Pauldron pouch seclection'><img class='py-1 px-1' src='assets/pouch/pauldron_pouches_CF.png' alt='Pauldron pouches seclection'><img class='py-1 px-1' onClick='setShoulder(\"shoulder_ammo.png\");' src='assets/pouch/shoulder_amno_TN.png' alt='Shoulder ammo seclection'>";
	}
	
}
	
//if statements for builder conflicts

function imgConflicts(){
	
	console.log("imgConflict checking");
	
	//Helment Attachment image conflictes
	
	console.log("attach "+character.attach)
	
	if(character.phase=="phase1_ARF.png"||character.phase=="phase2_ARF.png"){
		if(character.attach=="none.png"||character.attach==""){
			character.attach="none.png";
			bodyBuilder();
		}else if(character.attach!="none.png"||character.attach!=""){
			character.attach="none.png";
			bodyBuilder();
		}
	}
	
	if(character.phase=="phase2_air.png"){
		if(character.attach=="head_flashlight.png"){
			character.attach="none.png";
			bodyBuilder();
		}
	}
	
	console.log("attach "+character.attach)
	
	//Helment Plates image conflicts
	
	console.log("plates "+character.plates)
	
	if(character.phase=="phase1.png"){
		if(character.plates=="none.png"||character.plates==""){
			character.plates="none.png";
			bodyBuilder();
		}else if(character.plates!="head_plates.png"){
			character.plates="head_plates.png";
			bodyBuilder();
		}
	}
	
	if(character.phase=="phase1_ARF.png"||character.phase=="phase2_ARF.png"||character.phase=="phase2_air.png"){
		if(character.plates=="none.png"||character.plates==""){
			character.plates="none.png";
			bodyBuilder();
		}else if(character.plates!="none.png"||character.plates!=""){
			character.plates="none.png";
			bodyBuilder();
		}
	}
	
	if(character.phase=="phase2.png"||character.phase=="phase1.5.png"){
		if(character.plates=="none.png"||character.plates==""){
			character.plates="none.png";
			bodyBuilder();
		}else if(character.plates!="head_plates_gun.png"){
			character.plates="head_plates_gun.png";
			bodyBuilder();
		}
	}
	
	console.log("plates "+character.plates)
	
	//Helment Visor image conflicts
	
	console.log("visor "+character.visor)
	
	if(character.phase=="phase1_ARF.png"||character.phase=="phase2_ARF.png"||character.phase=="phase2_air.png"){
		if(character.visor=="none.png"||character.visor==""){
			character.visor="none.png";
			bodyBuilder();
		}else if(character.visor!="none.png"||character.visor!=""){
			character.visor="none.png";
			bodyBuilder();
		}
	}
	
	
	//Helment Flaps image conflicts
	console.log("flaps "+character.flaps)
	
	if(character.phase=="phase1.png"){
		if(character.flaps=="none.png"||character.flaps==""){
			character.flaps="none.png";
			bodyBuilder();
		}else if(character.flaps!="flaps_P1.png"){
			character.flaps="flaps_P1.png";
			bodyBuilder();
		}
	}
	
		
	if(character.phase=="phase2.png"){
		if(character.flaps=="none.png"||character.flaps==""){
			character.flaps="none.png";
			bodyBuilder();
		}else if(character.flaps!="flaps_P2.png"){
			character.flaps="flaps_P2.png";
			bodyBuilder();
		}
	}
	
	
	if(character.phase=="phase1.5.png"){
		if(character.flaps=="none.png"||character.flaps==""){
			character.flaps="none.png";
			bodyBuilder();
		}else if(character.flaps!="flaps_P2.png"){
			character.flaps="flaps_P2.png";
			bodyBuilder();
		}
	}
	
			
	if(character.phase=="phase1_ARF.png"||character.phase=="phase2_ARF.png"){
		if(character.flaps=="none.png"||character.flaps==""){
			character.flaps="none.png";
			bodyBuilder();
		}else if(character.flaps!="flaps_ARF.png"){
			character.flaps="flaps_ARF.png";
			bodyBuilder();
		}
	}
	
	
	if(character.phase=="phase2_air.png"){
		character.flaps="none.png";
		bodyBuilder();
	}
	console.log("flaps "+character.flaps)
	
	//Accessories image concflict
	
	console.log("pauldron "+character.pauldron)
	
	
	
	console.log("pouch higher "+character.pouchH)
	
	
	
	
	
}












