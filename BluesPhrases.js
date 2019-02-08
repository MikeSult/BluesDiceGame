//
//  Blues Dice
//
// Like the Mozart Dice Game yet with blues phrases.
// The phrasing will have a pickup in most cases.
// Therefore the phrase won't start on the barline
//  Each phrase starts on '3' of 4/4 (possibly with a rest).

var blues1_1_mel = ['A4','C5','A4','C5','A4','C4','A3'];
var blues1_1_dur = ['4nr','4n','4n','4n','4n','4n','4n+8n','8n'];

var blues1_2_mel = ['F#4','A4','B4','C5','B4','A4','F#4','A4'];
var blues1_2_dur = ['8nr','8n','8n','8n','8n','8n','8n','8n','4n','4nr','2nr'];

var blues1_3_mel = ['A4','C5','D5','Eb5','D5','C5','A4','G4','A4'];
var blues1_3_dur = ['8nr','8n','8n','8n','8n','8n','8n','8n+4n','8n','8n','2nr'];

var blues1_4_mel = ['C#4','E4','F#4','G4','F#4','E4','C#4','E4','F#4','A4','A4'];
var blues1_4_dur = ['8nr','8n','8n','8n','8n','8n','8n','8n','4n','8n','8n','8nr','8n','4nr'];

var blues1_5_mel = ['C4','C#4','E4','A4','A4','C4','C#4','E4','A4','A4',];
var blues1_5_dur = ['8nr','8n','8n','8n','8n','8n','8nr','8n','8n','8n','8n','8n','2nr'];
//var blues1_5_mel = ['C#4','E4','F#4','A4','A4','A4','A4','A4','A4','G4','E4','A4'];
//var blues1_5_dur = ['8nr','8n','8n','8n','8t','8t','8t','8t','8t','8t','4n','8n','8n','2nr'];

var blues1_6_mel = ['F#4','E4'];
var blues1_6_dur = ['2nr','4nr','8n','8n+2n','2nr'];
//var blues1_6_mel = ['C#4','E4','F#4','A4','G4','E4','Eb4','E4','A4'];
//var blues1_6_dur = ['8nr','8n','8n','8n','8nr','4n','8n','8n','8n','8n','8n+2n'];

var blues1_7_mel = ['F#4','E4','F#4','C4','C#4','E4','A4','G4','E4','C5','A4'];
var blues1_7_dur = ['8nr','8n','8n','8n','8n','8n','8n','8n','8n','8n','8n','8n','2nr'];

var blues1_8_mel = ['E4'];
var blues1_8_dur = ['2nr','4n','2nr+4nr','2nr'];
//var blues1_8_mel = ['E4','G4','A4','C5','A4','G4','E4','Eb4','D4','C4','A4'];
//var blues1_8_dur = ['8nr','8n','8n','8n','8n','8n','8n','8n','8n','8n','8n','4n','8nr','4nr'];

var blues1_9_mel = ['Eb4','E4','A4','G4','E4','Eb4','D4','C4','A3','C4','A4'];
var blues1_9_dur = ['4nr','8nr','8n','8n','8n','8n','8n','8n','8n','8n','8n','4n','4n'];

var blues1_10_mel = ['A5','G5','E5','D5','C5','A4'];
var blues1_10_dur = ['2nr','8n','8n','8n','8n','8n','8n+4n','2nr'];

//var blues1_11_mel = ['A4','C5','A4','G4','A4'];
//var blues1_11_dur = ['2nr','4nr','4n','4n','4n','4n+8n','8n'];
var blues1_11_mel = ['C#4','E4','F#4','A4','A4','A4'];
var blues1_11_dur = ['8n','8n','8n','8n','8nr','8n','8nr','8n','2nr','2nr'];

var blues1_12_mel = ['G4','A4','G4','A4'];
var blues1_12_dur = ['4nr','8n','8nr','2n+4n','8n','8nr','2n'];

//-----------------------------------
//-----------------------------------

var twoBarNoteChoice = {
    2: blues1_1_mel,
    3: blues1_2_mel,
    4: blues1_3_mel,
    5: blues1_4_mel,
    6: blues1_5_mel,
    7: blues1_6_mel,
    8: blues1_7_mel,
    9: blues1_8_mel,
    10: blues1_9_mel,
    11: blues1_10_mel,
    12: blues1_11_mel,
    13: blues1_12_mel
};

var twoBarDursChoice = {
    2: blues1_1_dur,
    3: blues1_2_dur,
    4: blues1_3_dur,
    5: blues1_4_dur,
    6: blues1_5_dur,
    7: blues1_6_dur,
    8: blues1_7_dur,
    9: blues1_8_dur,
    10: blues1_9_dur,
    11: blues1_10_dur,
    12: blues1_11_dur,
    13: blues1_12_dur
};


// Bassline for the game

// NEW approach
var octaveUp = 'u';
var octaveDown = ','
// walking basslines
var DomWalkPattern2bars_v1 = '1 3 5 6 8 6 5 3';
var DomWalkPattern2bars_v2 = '1 3 5 6 b7 6 5 3';
var DomWalkPattern2bars_v3 = '8 b7 6 b6 5 4 b3 3';
var DomWalkPattern2bars_v4 = '1 8 b7 5 1 5 4 3';
var DomWalkPattern2bars_v5 = '1 3 4 #4 5 4 b3 2';

var DomWalkPattern1bar_v1 = '1 8 b7 5';
var DomWalkPattern1bar_v2 = '1 2 b3 3';
var DomWalkPattern1bar_v3 = '1 3 4 5';
var DomWalkPattern1bar_v4 = '1 3 5 6';

var BluesTurnaround_v1 = '1 b7 6 b6 5 4 b3 2';
var BluesTurnaround_v2 = '1 b7 6 b6 5 b3 2 b2';
var BluesTurnaround_v3 = '1 3 4 #4 5 6 b7 7';
var BluesTurnaround_v5 = '1 b7 6 b3 2 b6 5 b2';
// preceeding comma i.e. ',8' means an octave lower
var BluesTurnaround_v5 = '1 #5 6 #1 2 #4 5 '+octaveDown+'8'; 

// chord voicings
var Dom9_v1 = '1 3 b7 9 12';
var Dom9_v2 = '1 3 b7 9';
var Dom9_v3 = '3 b7 9 12';
var Dom9_v4 = 'b7 10 12 15';

var Dom13_v1 = '1 b7 10 13';
var Dom13_v2 = 'b7 10 13 15';
var Dom13_v3 = '3 b7 9 13';
var Dom13_v4 = 'b7 10 13';
// preceeding u i.e. 'u9' means an octave higher
var Dom13_v4 = 'b7 10 13 '+octaveUp+'9';

//-------------------------------------------------

//walking basslines 2 bars
var Dom7_2bar_v1 = ['A2','C#3','E3','F#3','A3','F#3','E3','C#3'];
var Dom7_2bar_v2 = ['A2','C#3','E3','F#3','G3','F#3','E3','C#3'];
var Dom7_2bar_v3 = ['A3','G3','F#3','E3','A2','B2','C3','C#3'];
var Dom7_2bar_v4 = ['A2','A3','G3','E3','A2','E3','D3','C#3'];
var Dom7_2bar_v5 = ['A2','C#3','D3','D#3','E3','D3','C3','B2'];

var Dom7_2bar_v1String = "A2,C#3,E3,F#3,A3,F#3,E3,C#3";
var Dom7_2bar_v2String = "A2,C#3,E3,F#3,G3,F#3,E3,C#3";
var Dom7_2bar_v3String = "A3,G3,F#3,E3,A2,B2,C3,C#3";
var Dom7_2bar_v4String = "A2,A3,G3,E3,A3,E3,D3,C#3";
var Dom7_2bar_v5String = "A2,C#3,D3,D#3,E3,D3,C3,B2";

// 1 bar
var Dom7_1bar_v1 = ['A2','A3','G3','E3']
var Dom7_1bar_v2 = ['A2','B2','C3','C#3'];
var Dom7_1bar_v3 = ['A2','C#3','D3','E3'];
var Dom7_1bar_v4 = ['A2','C#3','E3','C#3'];

var Dom7_1bar_v1String = 'A2,A3,G3,E3';
var Dom7_1bar_v2String = 'A2,B2,C3,C#3';
var Dom7_1bar_v3String = 'A2,C#3,D3,E3';
var Dom7_1bar_v4String = 'A2,C#3,E3,C#3';

// turnarounds
var turnaround_v1 = ['A3','G3','F#3','F3','E3','D3','C3','B2'];
var turnaround_v2 = ['A3','G3','F#3','F3','E3','C2','B2','Bb2'];
var turnaround_v3 = ['A3','C#3','D3','D#3','E3','F#3','G3','G#3'];

var turnaround_v1String = "A3,G3,F#3,F3,E3,D3,C3,B2";
var turnaround_v2String = "A3,G3,F#3,F3,E3,C2,B2,Bb2";
var turnaround_v3String = "A3,C#3,D3,D#3,E3,F#3,G3,G#3";

var bar9 = TransposeSequence(Dom7_1bar_v3, 7);
var bar10 = TransposeSequence(Dom7_1bar_v3, 5);

// blues bassline
var bar1_2 = Dom7_2bar_v1.slice()
var bar3_4 = Dom7_2bar_v2.slice();
var bar5_6 = TransposeSequence(Dom7_2bar_v2, 5);
var bar7_8 = Dom7_2bar_v3.slice();
var bar9_10 = [bar9, bar10]
var bar11_12 = turnaround_v1.slice();

// comping for the game
var tritoneCompNotes  = [['G4','C#5'],['G4','C#5'],['F#4','C5'],['E4','G4'],['D4','F#4'],['C#4','E4'],['C4','F#4'],['B3','F4'],['C4','F#4'],['C#4','G4'],['A3','E4'],['C#4','G4'],['D4','G#4'],['C4','F#4'],['C#4','G4'],['G4','C#4'],['G#4','D4'],
['G4','C#5'],['G4','C#5'],['F#4','C5'],['E4','G4'],['D4','F#4'],['C#4','E4'],['C4','F#4'],['B3','F4'],['C4','F#4'],['C#4','G4'],['A3','E4'],['C#4','G4'],['D4','G#4'],['C4','F#4'],['C#4','G4'],['G4','C#4'],['G#4','D4'],['A2','A3','G4','C#5'],['Bb2','Bb3','Ab4','C5'],['A2','A3','G4','B4']];

var tritoneCompDurs = ['4n','2nr','8n','8n+4n','4nr+2nr','4n','4nr','4n','4nr','4n','4nr','2nr','4n','2nr','8n','8n+4n','4nr+2nr','4n','4nr','4n','4nr','4n','4nr','2nr','4n','4nr+2nr','4n','4nr+2nr','2n','4nr','8n','8n+4n','4nr+2nr',
'12*1mr','4n','2nr','8n','8n+4n','4nr+2nr','4n','4nr','4n','4nr','4n','4nr','2nr','4n','2nr','8n','8n+4n','4nr+2nr','4n','4nr','4n','4nr','4n','4nr','2nr','4n','4nr+2nr','4n','4nr+2nr','2n','4nr','8n','8n+4n','4nr+2nr','12*1mr','2n+8n','8nr','8n','1n'];

var myBluesComp = Rhythm.mergeDurationVelocityAndPitch(tritoneCompDurs,tritoneCompNotes);

//-------------------------------
function stopIt(){
	Tone.Transport.stop();
	Tone.Transport.cancel(0);
}

function updateTempo()  {
	var tempo = document.myForm.tempo.value;
	Tone.Transport.bpm.value = tempo  
}

function updateMelodyVolume()  {
	synth.volume.value = document.myForm.synth_volume.value;
}
function updateBassVolume()  {
	bass_synth.volume.value = document.myForm.bass_volume.value;
}
function updateCompVolume()  {
	comp_synth.volume.value = document.myForm.comp_volume.value;
}

function updateMute()  {
	var muteSoundBoolean = document.myForm.muteSound.checked;

//	myPart.mute = muteSoundBoolean ? true: false;
}


function rollDice() {
  diceMin = Math.ceil(2);
  diceMax = Math.floor(12);
  return Math.floor(Math.random() * (diceMax - diceMin + 1)) + diceMin; //The maximum is inclusive and the minimum is inclusive 
};

var bluesNotes = [];
var bluesDurs = [];

var myBlues = Rhythm.mergeDurationVelocityAndPitch(bluesDurs,bluesNotes);

var choices = [];
var numOfPhrases = 24;

var testNum = 2;

function createBasslineLilyCode() {
    var bassNotes = flatten([bar1_2, bar3_4, bar5_6, bar7_8, bar9_10, bar11_12]);
    var bass2barDurs = ['4n','4n','4n','4n','4n','4n','4n','4n'];
    var bassDurs = [bass2barDurs,bass2barDurs,bass2barDurs,bass2barDurs,bass2barDurs,bass2barDurs];
    bassDurs = flatten(bassDurs);
    var myJSON = createBluesBasslineDiceJSON( bassNotes, bassDurs);
//    var myJSON = createMelodyJSON(measures);
    lpAdapter.setScoreParameters(myJSON);
    var myLilyFile = lpAdapter.createLilyPondFile();
    return myLilyFile;
}



function createDemoMeasures() {
    var numOfDemoPhrases = 11
    var rollData = '<table border="1"><tr>';
    for(let i=0; i<numOfDemoPhrases; i++) {
        choices[i] = testNum++;
        if(i === 0 ) {
            rollData += '</tr><tr><td colspan="6">11 - two bar riffs</td></tr><tr>';
        }
        rollData += '<td cellpadding="3">';
        rollData += ' bars '+(i*2+1)+'-'+(i*2+2)+' = riff '+ (choices[i]-1);
        rollData += '</td>';
        if( (i % 6) === 5 ) {
            rollData += '</tr><tr><td colspan="6">.</td></tr><tr>';
        }
        testNum = (testNum > 12)? 2: testNum;
    }
    rollData += '</tr></table>';
    var measures = [];
    
    var notesForLilyPond = [];
    var dursForLilyPond = [];
    var bluesPhrase = null;
    var bluesDurs = [];
    for(let i=0; i<numOfDemoPhrases; i++) {
        for(let j=0; j<i; j++) {
            bluesDurs.push('1nr');
            bluesDurs.push('1nr');
        }
        // create a version suitable for lpAdapter module
        notesForLilyPond.push(twoBarNoteChoice[choices[i]]);
        dursForLilyPond.push(twoBarDursChoice[choices[i]]);

        bluesDurs.push(twoBarDursChoice[choices[i]]);
        bluesDurs = flatten(bluesDurs);
		bluesPhrase = Rhythm.mergeDurationVelocityAndPitch(bluesDurs, twoBarNoteChoice[choices[i]]);
		measures.push(bluesPhrase);
        bluesDurs = [];
    }
    document.getElementById("compositionData").innerHTML = rollData;
    measures = flatten(measures);

    // make lilypond file
    notesForLilyPond  = flatten(notesForLilyPond);
    dursForLilyPond = flatten(dursForLilyPond);
    var myJSON = createBluesDiceJSON( notesForLilyPond, dursForLilyPond);
//    var myJSON = createMelodyJSON(measures);
    lpAdapter.setScoreParameters(myJSON);
    var myLilyFile = lpAdapter.createLilyPondFile();
    document.getElementById("lilyPondCode").value = myLilyFile;

    return measures;
}



function createCompositionMeasures() {
//    var choices = [];
    var rollData = '<table border="1"><tr>';
    for(let i=0; i<numOfPhrases; i++) {
//        choices[i] = testNum;
        choices[i] = rollDice();
        if((i % 6) === 0 ) {
            rollData += '</tr><tr><td colspan="6">CHORUS #'+ Math.floor((i/6)+1) +'</td></tr><tr>';
        }
        rollData += '<td cellpadding="3">';
        rollData += ' bars '+(i*2+1)+'-'+(i*2+2)+' = riff '+(choices[i]-1);
        rollData += '</td>';
        if( (i % 6) === 5 ) {
            rollData += '</tr><tr><td colspan="6">.</td></tr><tr>';
        }
    }
    rollData += '</tr></table>';
    var measures = [];
    var notesForLilyPond = [];
    var dursForLilyPond = [];
    var bluesPhrase = null;
    var bluesDurs = [];
    for(let i=0; i<numOfPhrases; i++) {
        for(let j=0; j<i; j++) {
            bluesDurs.push('1nr');
            bluesDurs.push('1nr');
        }
        // create a version suitable for lpAdapter module
        notesForLilyPond.push(twoBarNoteChoice[choices[i]]);
        dursForLilyPond.push(twoBarDursChoice[choices[i]]);

        bluesDurs.push(twoBarDursChoice[choices[i]]);
        bluesDurs = flatten(bluesDurs);
//        console.log('bluesDurs='+bluesDurs);
//		bluesPhrase = Rhythm.mergeDurationVelocityAndPitch(twoBarDursChoice[choices[i]], twoBarNoteChoice[choices[i]])

		bluesPhrase = Rhythm.mergeDurationVelocityAndPitch(bluesDurs, twoBarNoteChoice[choices[i]])
		measures.push(bluesPhrase);
        bluesDurs = [];
    }

    document.getElementById("compositionData").innerHTML = '<h2>Rolling the Dice...</h2>';
	setTimeout(function(){
        document.getElementById("compositionData").innerHTML = rollData;
	}, 2000);

    measures = flatten(measures);
    
    // lilyPond
    notesForLilyPond = flatten(notesForLilyPond);
    dursForLilyPond = flatten(dursForLilyPond);
//    console.log('notesForLilyPond='+notesForLilyPond);
//    console.log('dursForLilyPond='+dursForLilyPond);
    
    // make lilypond file
    var myJSON = createBluesDiceJSON( notesForLilyPond, dursForLilyPond);
//    var myJSON = createMelodyJSON(measures);
    lpAdapter.setScoreParameters(myJSON);
    var myLilyFile = lpAdapter.createLilyPondFile();
    document.getElementById("lilyPondCode").value = myLilyFile;
    var myBassLilyFile = createBasslineLilyCode();
    document.getElementById("lilyPondBassCode").value = myBassLilyFile;    


/*
	setTimeout(function(){
        var myLilyFile = lpAdapter.createLilyPondFile();
        document.getElementById("lilyPondCode").value = myLilyFile;
	}, 2000);
*/

//    document.getElementById("lilyPond").innerHTML = myLilyFile;

    return measures;
}

var blues = null;
var bassline = null;;
var comping = null;


var synth = null;
var bass_synth = null;
var comp_synth = null;
function playComposition(melody) {
    if(blues) {
        blues.dispose();
        blues = null;
    }
    if(bassline) {
        bassline.dispose();
        bassline = null;
    }
    if(comping) {
        comping.dispose();
        comping = null;
    }
    if(bass_synth) {
        bass_synth.dispose();
        bass_synth = null;
    }
    if(comp_synth) {
        comp_synth.dispose();
        comp_synth = null;
    }
    if(synth) {
        synth.dispose();
        synth = null;
    }
    Tone.Transport.stop();    
    Tone.Transport.timeSignature = 4;

    bass_synth = new Tone.Synth().toMaster();
    bassline = new Tone.Sequence(function(time, note){
	  bass_synth.triggerAttackRelease(note, '4n', time);
	 }, [bar1_2, bar3_4, bar5_6, bar7_8, bar9_10, bar11_12]).start('1m');
    bassline.playbackRate = 0.125;
//    console.log('Math.floor(numOfPhrases/6)='+Math.floor(numOfPhrases/6))
    numOfPhrases = 24;
//    numOfPhrases = 1;
    bassline.loop = Math.floor(numOfPhrases/6);
    bass_synth.volume.value = -5;

    comp_synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
	comping = new Tone.Part(function(time, value){
		comp_synth.triggerAttackRelease(value.note, value.duration, time, value.velocity)
	}, myBluesComp ).start('1m');
    comp_synth.volume.value = -10;

    synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
	blues = new Tone.Part(function(time, value){
		synth.triggerAttackRelease(value.note, value.duration, time, value.velocity)
	}, melody ).start('2n');
    
    var diceRoll = rollDice();
    var randomTempo = 30 + (20 * diceRoll);
    console.log('diceRoll='+diceRoll+' randomTempo='+randomTempo);
    Tone.Transport.bpm.value = randomTempo;
    document.myForm.tempo.value = randomTempo;
    
	Tone.Transport.start("+0.1");
}


function createBluesBasslineDiceJSON(notes, durations, config) {
/*-----------------
    var timeSig = (config.timeSig == undefined)? "4/4": config.timeSig;
    var title = (config.title == undefined)? "Title": config.title;
    var keySig = (config.keySig == undefined)?  "c \\major": config.keySig;
    var clef = (config.clef == undefined)? "treble": config.clef;
    var pickup = (config.pickup == undefined)? "": config.pickup;
    var tempo = (config.tempo == undefined)? ' \"moderato\" 4 = 90': config.tempo;

    var jsonConfig = {
	    "jsonType": "melody",
		"keySig":keySig,
		"clef":clef,
		"timeSig":timeSig,
		"title":title,
		"notes":notes,
		"durations":durations,
		"pickup":pickup,
		"tempo":tempo
//-------------------------------*/
    var timeNow = new Date(Date.now());
    var timeStamp = timeNow.toDateString();
//    var diceInfo = makeDiceStaff();
    var bluesChordSymbols = '\\chords { a1:7 s1 s1 s1 d:7 s1 a:7 s1 e:7 d:7 a:7 e:7  }';
    var bluesBarlines = [[12,'\\bar \"||\"']];
    
    var jsonConfig = {
	    "jsonType": "bluesDiceGame",
//	    "jsonType": "melody",
		"keySig": "a \\major",
		"clef": "bass",
		"timeSig": "4/4",
		"title": "Blues",
		"name": "Blues on "+timeStamp,
		"notes":notes,
		"durations":durations,
		"diceStaff": 'myDice = { }',
		"barlines": bluesBarlines,
		"chords": bluesChordSymbols,
		"pickup": "",
		"pickupLength": "",
		"tempo": ' \"moderato\" 4 = 90'
	};
	return jsonConfig
}




//function createMelodyJSON(melody) {
function createBluesDiceJSON(notes, durations, config) {
/*-----------------
    var timeSig = (config.timeSig == undefined)? "4/4": config.timeSig;
    var title = (config.title == undefined)? "Title": config.title;
    var keySig = (config.keySig == undefined)?  "c \\major": config.keySig;
    var clef = (config.clef == undefined)? "treble": config.clef;
    var pickup = (config.pickup == undefined)? "": config.pickup;
    var tempo = (config.tempo == undefined)? ' \"moderato\" 4 = 90': config.tempo;

    var jsonConfig = {
	    "jsonType": "melody",
		"keySig":keySig,
		"clef":clef,
		"timeSig":timeSig,
		"title":title,
		"notes":notes,
		"durations":durations,
		"pickup":pickup,
		"tempo":tempo
//-------------------------------*/
    var timeNow = new Date(Date.now());
    var timeStamp = timeNow.toDateString();
    var diceInfo = makeDiceStaff();
    var bluesChordSymbols = '\\chords { s2 a1:7 s1 s1 s1 d:7 s1 a:7 s1 e:7 d:7 a:7 e:7  a1:7 s1 s1 s1 d:7 s1 a:7 s1 e:7 d:7 a:7 e:7 \
                            a1:7 s1 s1 s1 d:7 s1 a:7 s1 e:7 d:7 a:7 e:7a1:7 s1 s1 s1 d:7 s1 a:7 s1 e:7 d:7 a:7 e:7 }';
    var bluesBarlines = [[12,'\\bar \"||\"'],[24,'\\bar \"||\"'],[36,'\\bar \"||\"'],[48,'\\bar \"||\"']];
    
    var jsonConfig = {
	    "jsonType": "bluesDiceGame",
//	    "jsonType": "melody",
		"keySig": "a \\major",
		"clef": "treble",
		"timeSig": "4/4",
		"title": "Blues",
		"name": "Blues on "+timeStamp,
		"notes":notes,
		"durations":durations,
		"diceStaff": diceInfo,
		"barlines": bluesBarlines,
		"chords": bluesChordSymbols,
		"pickup": "",
		"pickupLength": "2n",
		"tempo": ' \"moderato\" 4 = 90'
	};
	return jsonConfig
}



function flatten(arr) {
    return arr.reduce(function(a,b) {
        return a.concat(Array.isArray(b) ? flatten(b) : b);
    }, []);
}
function playDemo(melody) {
    if(blues) {
        blues.dispose();
        blues = null;
    }
    if(bassline) {
        bassline.dispose();
        bassline = null;
    }
    if(comping) {
        comping.dispose();
        comping = null;
    }
    if(bass_synth) {
        bass_synth.dispose();
        bass_synth = null;
    }
    if(comp_synth) {
        comp_synth.dispose();
        comp_synth = null;
    }
    if(synth) {
        synth.dispose();
        synth = null;
    }
    Tone.Transport.stop();    
    Tone.Transport.timeSignature = 4;

/*------------------------------------------------
    bass_synth = new Tone.Synth().toMaster();
    bassline = new Tone.Sequence(function(time, note){
	  bass_synth.triggerAttackRelease(note, '4n', time);
	 }, [bar1_2, bar3_4, bar5_6, bar7_8, bar9_10, bar11_12]).start('1m');
    bassline.playbackRate = 0.125;
    bassline.loop = numOfPhrases/6;
    bass_synth.volume.value = -5;

    comp_synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
	comping = new Tone.Part(function(time, value){
		comp_synth.triggerAttackRelease(value.note, value.duration, time, value.velocity)
	}, myBluesComp ).start('1m');
    comp_synth.volume.value = -10;
//------------------------------------------*/

    synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
	blues = new Tone.Part(function(time, value){
		synth.triggerAttackRelease(value.note, value.duration, time, value.velocity)
	}, melody ).start('2n');
    
	Tone.Transport.start("+0.1");

}


function demoTwoBarPhrases() {
	var tune = createDemoMeasures();
	var myBlues = flatten(tune);
	playDemo(myBlues);

}

function makeDiceStaff() {
    var lilyCode = 'myDice = { s2 ';
    for(var i=0; i<choices.length; i++) {
        lilyCode += 's1^"dice = '+choices[i]+'" s1 ';
    }
    lilyCode += '}';
    return lilyCode;
}


function PlayNewTune() {
	var tune = createCompositionMeasures();
	var myBlues = flatten(tune);
	playComposition(myBlues);
}

function repeatTune() {
    if(!choices)
        return PlayNewTune();
        
	var tune = recreateCompositionMeasures(choices);
	var mytune = flatten(tune);
//	console.log('mytune.length='+mytune.length+'\mytune[0]='+mytune[0]);
	playComposition(mytune);
}

function recreateCompositionMeasures(myChoices) {
    var rollData = '<table border="1"><tr>';
    for(let i=0; i<numOfPhrases; i++) {
        if((i % 6) === 0 ) {
            rollData += '</tr><tr><td colspan="6">CHORUS #'+ Math.floor((i/6)+1) +'</td></tr><tr>';
        }
        rollData += '<td cellpadding="3">';
        rollData += ' bars '+(i*2+1)+'-'+(i*2+2)+' = riff '+(myChoices[i]-1);
        rollData += '</td>';
        if( (i % 6) === 5 ) {
            rollData += '</tr><tr><td colspan="6">.</td></tr><tr>';
        }
    }
    rollData += '</tr></table>';
    var measures = [];
    var notesForLilyPond = [];
    var dursForLilyPond = [];
    var bluesPhrase = null;
    var bluesDurs = [];
    for(let i=0; i<numOfPhrases; i++) {
        for(let j=0; j<i; j++) {
            bluesDurs.push('1nr');
            bluesDurs.push('1nr');
        }
        // create a version suitable for lpAdapter module
        notesForLilyPond.push(twoBarNoteChoice[myChoices[i]]);
        dursForLilyPond.push(twoBarDursChoice[myChoices[i]]);

        bluesDurs.push(twoBarDursChoice[myChoices[i]]);
        bluesDurs = flatten(bluesDurs);
//        console.log('bluesDurs='+bluesDurs);
//		bluesPhrase = Rhythm.mergeDurationVelocityAndPitch(twoBarDursChoice[myChoices[i]], twoBarNoteChoice[myChoices[i]])

		bluesPhrase = Rhythm.mergeDurationVelocityAndPitch(bluesDurs, twoBarNoteChoice[myChoices[i]])
		measures.push(bluesPhrase);
        bluesDurs = [];
    }

    document.getElementById("compositionData").innerHTML = '<h2>Rolling the Dice...</h2>';
	setTimeout(function(){
        document.getElementById("compositionData").innerHTML = rollData;
	}, 2000);

    measures = flatten(measures);
    
    // lilyPond
    notesForLilyPond = flatten(notesForLilyPond);
    dursForLilyPond = flatten(dursForLilyPond);
//    console.log('notesForLilyPond='+notesForLilyPond);
//    console.log('dursForLilyPond='+dursForLilyPond);
    
    // make lilypond file
    var myJSON = createBluesDiceJSON( notesForLilyPond, dursForLilyPond);
//    var myJSON = createMelodyJSON(measures);
    lpAdapter.setScoreParameters(myJSON);

	setTimeout(function(){
        var myLilyFile = lpAdapter.createLilyPondFile();
        document.getElementById("lilyPondCode").value = myLilyFile;
	}, 2000);

//    document.getElementById("lilyPond").innerHTML = myLilyFile;

    return measures;

/*-----------------------------------------------
    var rollData = '<table border="1"><tr>';
    for(let i=0; i<numOfPhrases; i++) {
        if((i % 6) === 0 ) {
            rollData += '</tr><tr><td colspan="2">CHORUS #'+ Math.floor((i/6)+1) +'</td></tr><tr>';
        }
        rollData += '<td cellpadding="3">';
        rollData += ' measures '+(i*2+1)+'-'+(i*2+2)+' = variation '+myChoices[i];
        rollData += '</td>';
        if( (i % 2) === 1 ) {
            rollData += '</tr><tr><td colspan="2">.</td></tr><tr>';
        }
    }
    rollData += '</tr></table>';
    var measures = [];

    for(let i=0; i<numOfPhrases; i++) {
		bluesPhrase = Rhythm.mergeDurationVelocityAndPitch(twoBarDursChoice[myChoices[i]], twoBarNoteChoice[myChoices[i]])
		measures.push(bluesPhrase);
    }
    measures = flatten(measures);
    document.getElementById("compositionData").innerHTML = rollData;
    return measures;
//----------------------------------------------*/

}

//-------------------------------


function PlayTheBlues() {
    var synth = new Tone.Synth().toMaster();
    bassline = new Tone.Sequence(function(time, note){
	  synth.triggerAttackRelease(note, '32n', time);
	 }, [bar1_2, bar3_4, bar5_6, bar7_8, bar9_10, bar11_12]).start('2n');

	setTimeout(function(){
	   console.log('remove(1) 1 -----------------------------------------');
	   bassline.remove(1);
	   bassline.add(1, Dom7_2bar_v4.slice());
	console.log('bassline.length='+bassline.length);
	}, 24000);


    var tempo = document.myForm.tempo.value;
    Tone.Transport.bpm.value = (tempo/8.0)   
//    Tone.Transport.setLoopPoints(0, "2m");
//    Tone.Transport.loop = true;
    Tone.Transport.start();

}