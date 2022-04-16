/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: 
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.

- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.


Sample Input 0
07:05:45PM

Sample Output 0
19:05:45
*/


const timeConversion = time => {
    let timeArr = time.split(':');
    
    let format = timeArr[timeArr.length-1].slice(2);

    switch(format) {
        case 'PM':
            timeArr[timeArr.length-1] = timeArr[timeArr.length-1].substr(0,2);
            if(timeArr[0] === '01') timeArr[0] = '13';
            if(timeArr[0] === '02') timeArr[0] = '14';
            if(timeArr[0] === '03') timeArr[0] = '15';
            if(timeArr[0] === '04') timeArr[0] = '16';
            if(timeArr[0] === '05') timeArr[0] = '17';
            if(timeArr[0] === '06') timeArr[0] = '18';
            if(timeArr[0] === '07') timeArr[0] = '19';
            if(timeArr[0] === '08') timeArr[0] = '20';
            if(timeArr[0] === '09') timeArr[0] = '21';
            if(timeArr[0] === '10') timeArr[0] = '22';
            if(timeArr[0] === '11') timeArr[0] = '23';
            if(timeArr[0] === '12' && timeArr[1] === '00' && timeArr[timeArr.length-1] === '00') timeArr[0] = '24';
            break;
        
        case 'AM':
            timeArr[timeArr.length-1] = timeArr[timeArr.length-1].substr(0,2);
            if(timeArr[0] === '12' && 
                timeArr[1] === '00' && 
                timeArr[2] === '00') {
                timeArr[0] = '00';
            }
            if(timeArr[0] === '12' && 
                timeArr[1] !== '00' && 
                timeArr[2] !== '00') {
                timeArr[0] = '00';
            }
            if(timeArr[0] === '12' && 
                timeArr[2] !== '00') {
                timeArr[0] = '00';
            }
            break;
    }

    console.log(timeArr.join(':'));
    // console.log(timeArr[2]);
}


const timePm2 = '07:05:45PM';
//RESULT : 19:05:45

const timeAm2 = '12:00:00AM';
//RESULT : '00:01:00';

const timeAm3 = '12:00:39AM';
//RESULT : '00:05:39'

const timePm = '12:01:01PM';
//RESULT : '12:01:00'

timeConversion(timeAm3);