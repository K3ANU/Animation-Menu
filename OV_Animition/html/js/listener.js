$(document).ready(function(){
    // Hide/show ui function.
    function display(bool) {
        if (bool) {
            $("#overlay").show();
        } else {
            $("#overlay").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {

        // open breathalyzer if message is open.
        var item = event.data;
        if (item.type === "open") {
            if (item.status == true) {
                display(true)
                var popuprev_sound = new Audio('popupreverse.mp3');
	            popuprev_sound.volume = 0.2;
	            popuprev_sound.play();
            } else {
                display(false)
                var popup_sound = new Audio('popup.mp3');
			    popup_sound.volume = 0.2;
			    popup_sound.play();
            }
        }
    });

    // nui call back for when each image is pressed.
    $("#DefaultAim").click(function () {
        $.post('https://OV_Animition/1', JSON.stringify({}));
        return
    })
    $("#GangsterAim").click(function () {
        $.post('https://OV_Animition/2', JSON.stringify({}));
        return
    })
    $("#HillBillyAim").click(function () {
        $.post('https://OV_Animition/3', JSON.stringify({}));
        return
    })

    // second row
    $("#DefaultHolster").click(function () {
        $.post('https://OV_Animition/4', JSON.stringify({}));
        return
    })
    $("#BackHolster").click(function () {
        $.post('https://OV_Animition/5', JSON.stringify({}));
        return
    })
    $("#CopHolster").click(function () {
        $.post('https://OV_Animition/6', JSON.stringify({}));
        return
    })

    // third row
    $("#FrontHolster").click(function () {
        $.post('https://OV_Animition/7', JSON.stringify({}));
        return
    })
    $("#FrontAgressiveHolster").click(function () {
        $.post('https://OV_Animition/8', JSON.stringify({}));
        return
    })
    $("#LegHolster").click(function () {
        $.post('https://OV_Animition/9', JSON.stringify({}));
        return
    })


    // Close ui when ESC is pressed
    document.onkeyup = function(data) {
        if (data.which == 27) {
            $.post('https://OV_Animition/close', JSON.stringify({}));
            return
        }
    };
});