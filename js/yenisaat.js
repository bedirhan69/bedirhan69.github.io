$(document).ready(function() {
    $('.countdown').final_countdown({
        start: '0000000000',
        //000000.00dk.00sn
        //000010000== 2saat 50dk
        //000100000 == 1gün 3saat
        //01000000 == 11gün 13saat 46dk
        end: '00001320000',
        now: '0000000000',
        selectors: {
            value_seconds: '.clock-seconds .val',
            canvas_seconds: 'canvas_seconds',
            value_minutes: '.clock-minutes .val',
            canvas_minutes: 'canvas_minutes',
            value_hours: '.clock-hours .val',
            canvas_hours: 'canvas_hours',
            value_days: '.clock-days .val',
            canvas_days: 'canvas_days'
        },
        seconds: {
            borderColor: '#7995D5',
            borderWidth: '5'
        },
        minutes: {
            borderColor: '#ACC742',
            borderWidth: '5'
        },
        hours: {
            borderColor: '#ECEFCB',
            borderWidth: '5'
        },
        days: {
            borderColor: '#FF9900',
            borderWidth: '5'
        }
    }, function() {
        // Finish callback
    });
});