/* Santiago Peñuela Arcila - 14/08/2015 */

/* Evento "default" de la plantilla donde se va a implementar esta actividad. Inicializa la actividad*/
$('body').on('EDGE_Recurso_promiseCreated', function(evt)
{
    if(typeof inicializarTimer == 'function'){
        inicializarTimer(evt.sym);
    }
    ed_send_data(evt.sym);
});

function ed_send_data(sym) 
{
    $.getJSON('config.json', function(json_content) {

        var stage = $(sym.getComposition().getStage().ele);
        stage.prop('ed_json_property_object', json_content);
        stage.prop('ed_user_attempts', json_content.attempts);
        stage.prop('usa_timer', typeof inicializarTimer == 'function');

        for (var i = 1; i <= json_content.cant_combo_cartas; i++) {
            sym.$("carta_" + i + "_A").prop('ed_linked_to', 'carta_' + i + '_B');
            sym.$("carta_" + i + "_B").prop('ed_linked_to', 'carta_' + i + '_A');
        }

        /*Una vez termine de leer y llenar los datos del JSON en la plantilla, se envía la solicitud de revisión de
         la plantilla */
        //
        parent.$(parent.document).trigger({
            type: 'EDGE_Plantilla_creationComplete',
            sym: sym,
            identify: stage.prop('ed_identify')
        });
    });
}

$('body').on("EDGE_Plantilla_creationComplete", function(evt) {

    /*$('body').trigger({
        type: "EDGE_Recurso_sendPreviousData",
        block: false,
        previous_data: ["carta_2_B", "carta_2_A"],
        attempts: 2,
        sym: evt.sym,
        identify: {}
    });*/
});

$('body').on('EDGE_Recurso_sendPreviousData EDGE_Recurso_postSubmitApplied',function(evt)
{
    var stage = $(evt.sym.getComposition().getStage().ele);

    if(typeof(evt.previous_data) != "undefined")
    {
        for (var i = evt.previous_data.length - 1; i >= 0; i--)
        {
            evt.sym.getSymbol(""+evt.previous_data[i]+"").playReverse("a");
            nonClickableCards.push(evt.previous_data[i]);            
        };
    }

    if(evt.block)
    {
        //Debe bloquear la actividad
        stage.prop('ed_blocked',true);
        clickOnHold.canYouClick = false;
        if (stage.prop("usa_timer")) {
            stopTimer(evt.sym);
        }
    }else{
        if (stage.prop("usa_timer")) {
            if (evt.timer.reset_timer) {
                resetTimer(evt.sym);
            }
        }
    }
    
    if(typeof(evt.attempts) != "undefined")
    {
        stage.prop('ed_user_attempts',evt.attempts);
    }

});

function block_every_text(sym)
{
    var json_content = $(sym.getComposition().getStage().ele).prop('ed_json_property_object');
    for (var i = json_content.palabras_a_escribir.length - 1; i >= 0; i--)
    {
        sym.$('text_'+(i+1)).find('input[type="text"]').prop('readonly','readonly');
        sym.$('text_'+(i+1)).find('input[type="text"]').attr('readonly','readonly');
    }
}

/* --- Variables a utilizar:
    clickOnHold: Un objeto correspondiente al simbolo que se dio click por primera vez y contiene dentro de si,
    atributos que ayudan a la funcionalidad de la actividad.
    -> .nameOfCard: es el nombre de la primera carta que se le dio click.
    -> .canYouClick: (?) booleano que evita que el usuario pueda dar click en otros simbolos (cartas) mientras está
    la animación de las cartas que se están mostrando.

    nonClickableCards: arreglo que contiene las cartas ya descubiertas por el usuario. Sirve también para validar que
    el usuario no pueda darle click y "ocultarla involuntariamente".

    timeRunning: variable que contiene el temporizador de animación entre cartas equivocadas, es decir, si el usuario
    "descubre" dos cartas que no son iguales, se deben mostrar y tras un segundo, "ocultarlas" nuevamente. Debido a las
    limitantes de Edge con el uso de eventos ("reversePlay"), se optó por usar setInterval y clearInterval.
*/
var clickOnHold = {}; //Si es el mismo simbolo, no permita hacer click.
clickOnHold.nameOfCard = '';
clickOnHold.canYouClick = true;
var nonClickableCards = [];
var timeRunning;

function carta_clickeada(sym, nombreCarta)
{
    var stage = $(sym.getComposition().getStage().ele);

    if(nombreCarta == clickOnHold.nameOfCard || clickOnHold.canYouClick == false)
    {
        console.log("You can not click me");
        return;
    }

    for (var i = nonClickableCards.length - 1; i >= 0; i--)
    {
        if(nonClickableCards[i] == nombreCarta)
        {
            console.log("No se puede clickear esta carta, pues forma parte de las que ya están completas");
            return;
        }
    };

    if(clickOnHold.nameOfCard == '')
    {   
        console.log("this is the new clickOnHold");
        clickOnHold.nameOfCard = nombreCarta;
        sym.getSymbol(""+nombreCarta+"").playReverse("a");
        console.log(clickOnHold.nameOfCard);
    }
    else
    {
        sym.getSymbol(""+nombreCarta+"").playReverse("a"); 
        console.info("And their properties");
        console.log(sym.$(""+nombreCarta+"").prop('ed_linked_to')+" ______________ "+clickOnHold.nameOfCard);
        if(sym.$(""+nombreCarta+"").prop('ed_linked_to') == clickOnHold.nameOfCard)
        {            
            console.log("¡Está bien!... Y toca dejar las cartas de forma que no se puedan clickear");
            nonClickableCards.push(nombreCarta, clickOnHold.nameOfCard);
            clickOnHold.nameOfCard = '';
        }
        else
        {
            clickOnHold.canYouClick = false;
            console.log("Está mal y hay que re-ordenar las cartas");            
            is_wrong_then(sym, nombreCarta);
        }
    }
}

function is_wrong_then(sym,nombreCarta)
{    
    timeRunning = setInterval(function()
    {
        sym.getSymbol(""+clickOnHold.nameOfCard+"").playReverse("a");
        sym.getSymbol(""+nombreCarta+"").playReverse("a");
        clickOnHold.nameOfCard = '';
        stop_it_now();        
    }, 1100);
}

function stop_it_now()
{
    clearInterval(timeRunning);
    clickOnHold.canYouClick = true;
}

function EDGE_Recurso_Submit(sym)
{    
    $('body').trigger({
        type: 'EDGE_Recurso_Submit',
        sym: sym
    });
}

$('body').on('EDGE_Recurso_Submit', function(evt)
{
    do_submit(evt.sym);
});

function do_submit(sym)
{
    var stage = $(sym.getComposition().getStage().ele);
    var json_content = stage.prop("ed_json_property_object");
    var retorno_datos = {};
    retorno_datos.attempts_to = stage.prop('ed_user_attempts');
    retorno_datos.user_answer = nonClickableCards;
    retorno_datos.user_answer_score = Math.round(nonClickableCards.length / 2);
    console.log(retorno_datos.user_answer);

    if (stage.prop('ed_blocked'))
    {
        return;
    }

    if(retorno_datos.user_answer_score >= json_content.cant_combo_cartas)
    {
        retorno_datos.final_stage = "correct";
    }
    else
    {
        retorno_datos.final_stage = "incorrect";   
    }

    var ed_obj_evt = 
    {
        type: "EDGE_Plantilla_submitApplied",
        interactionType: "fill-in",
        json: json_content,
        answer: retorno_datos.user_answer_score,
        user_answer: retorno_datos.user_answer,
        results: retorno_datos.final_stage,
        attempts: retorno_datos.attempts_to,
        attempts_limit: json_content.attempts,
        sym: sym,
        identify: stage.prop("ed_identify")
    };
    parent.$(parent.document).trigger(ed_obj_evt);
    return retorno_datos;
}

function do_submit_timeout(sym)
{
    var stage = $(sym.getComposition().getStage().ele);
    var json_content = stage.prop("ed_json_property_object");
    var retorno_datos = {};
    retorno_datos.attempts_to = stage.prop('ed_user_attempts');
    retorno_datos.user_answer = nonClickableCards;
    retorno_datos.user_answer_score = Math.round(nonClickableCards.length / 2);

    if (stage.prop('ed_blocked'))
    {
        return;
    }

    var ed_obj_evt = 
    {
        type: "EDGE_Plantilla_submitApplied",
        interactionType: "fill-in",
        json: json_content,
        answer: retorno_datos.user_answer_score,
        user_answer: retorno_datos.user_answer,
        results: "incorrect",
        attempts: retorno_datos.attempts_to,
        attempts_limit: json_content.attempts,
        sym: sym,
        identify: stage.prop("ed_identify")
    };
    
    var stage = $(sym.getComposition().getStage().ele);

    var timer = {};
    var timerObj = buscar_sym(sym, stage.prop("timer"), true);
    timer.remaining_time = 0;
    timer.time_out = true;
    timer.current_state = timerObj.prop("alertState");
    
    ed_obj_evt.timer = timer;
    
    parent.$(parent.document).trigger(ed_obj_evt);
    return retorno_datos;
}

function buscar_sym(sym, arrSymSearch, boolJQUERY) {
    var temp = sym;
    $.each(arrSymSearch, function (index, value) {
        //EDGE_Plantilla.debug ? console.log(temp, index, value, arrSymSearch) : false;

        if (!isEmpty(boolJQUERY) && index === arrSymSearch.length - 1) {
            temp = temp.$(value);
        } else {
            temp = temp.getSymbol(value);
        }

    });
    //EDGE_Plantilla.debug ? console.log(temp, arrSymSearch, boolJQUERY) : false;
    return temp;
}

$("body").on("TimeOut", function (data) {
    do_submit_timeout(data.sym);
});