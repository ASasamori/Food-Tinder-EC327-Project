import { notification } from "antd";

export function calculateMatch(liked, disliked, superliked) {
    var jap = 'Japanese';
    var japScore = 0;
    var kor = 'Korean';
    var korScore = 0;
    var mex = 'Mexican';
    var mexScore = 0;
    var cof = 'Coffee & Tea';
    var cofScore = 0;
    var breakfast = 'Breakfast & Brunch';
    var breakfastScore = 0;
    var des = 'Desserts';
    var desScore = 0;
    var bar = 'Cocktail Bars';
    var barScore = 0;
    var amer = 'American (New)';
    var amerScore = 0;
    var ita = 'Italian';
    var itaScore = 0;
    var chin = 'Chinese';
    var chinScore = 0;

    var types = [jap,kor,mex,cof,breakfast,des,bar,amer,ita,chin];
    var cusine;
    for (var i = 0; i < liked.length; i++) {
        for(var j=0; j<liked[i].categories.length; j++) {
            cusine = liked[i].categories[j].title;

            switch (cusine){
                case jap:
                    japScore++;
                    break;
                case kor:
                    korScore++;
                    break;
                case mex:
                    mexScore++;
                    break;
                case cof:
                    cofScore++;
                    break;
                case breakfast:
                    breakfastScore++;
                    break;
                case des:
                    desScore++;
                    break;
                case bar:
                    barScore++;
                    break;
                case amer:
                    amerScore++;
                    break;
                case ita:
                    itaScore++;
                    break;
                case chin:
                    chinScore++;
                    break;
                default:
                    break;
            }
        }
    }

    for (var i = 0; i < disliked.length; i++) {
        for(var j=0; j<disliked[i].categories.length; j++) {
            cusine = disliked[i].categories[j].title;

            switch (cusine){
                case jap:
                    japScore -= 0.5;
                    break;
                case kor:
                    korScore -= 0.5;
                    break;
                case mex:
                    mexScore -= 0.5;
                    break;
                case cof:
                    cofScore -= 0.5;
                    break;
                case breakfast:
                    breakfastScore -= 0.5;
                    break;
                case des:
                    desScore -= 0.5;
                    break;
                case bar:
                    barScore -= 0.5;
                    break;
                case amer:
                    amerScore -= 0.5;
                    break;
                case ita:
                    itaScore -= 0.5;
                    break;
                case chin:
                    chinScore -= 0.5;
                    break;
                default:
                    break;
            }
        }
    }

    for (var i = 0; i < superliked.length; i++) {
        for(var j=0; j<superliked[i].categories.length; j++) {
            cusine = superliked[i].categories[j].title;

            switch (cusine){
                case jap:
                    japScore+=2;
                    break;
                case kor:
                    korScore+=2;
                    break;
                case mex:
                    mexScore+=2;
                    break;
                case cof:
                    cofScore+=2;
                    break;
                case breakfast:
                    breakfastScore+=2;
                    break;
                case des:
                    desScore+=2;
                    break;
                case bar:
                    barScore+=2;
                    break;
                case amer:
                    amerScore+=2;
                    break;
                case ita:
                    itaScore+=2;
                    break;
                case chin:
                    chinScore+=2;
                    break;
                default:
                    break;
            }
        }
    }
    

    //checks to see who wins;
    var index1, index2, index3;
    let first, second, third;
    var scores = [japScore,korScore,mexScore,cofScore,breakfastScore,desScore,barScore,amerScore,itaScore,chinScore];
    third = first = second = Number.MIN_VALUE;
    for(let i = 0; i < scores.length; i++)
    {
         
        // If current element is
        // greater than first
        if (scores[i] > first)
        {
            third = second;
            second = first;
            first = scores[i];
            index1 = i;
        }
 
        // If arr[i] is in between first
        // and second then update second
        else if (scores[i] > second)
        {
            third = second;
            second = scores[i];
            index2 = i;
        }
 
        else if (scores[i] > third)
            third = scores[i];
            index3 = i;
    }
    
    var resultString = [];
    switch (index1){
        case 0:
            resultString.push('Japanese');
            break;
        case 1:
            resultString.push('Korean');
            break;
        case 2:
            resultString.push('Mexican');
            break;
        case 3:
            resultString.push('Coffee & Tea');
            break;
        case 4:
            resultString.push('Breakfast & Brunch');
            break;
        case 5:
            resultString.push('Desserts');
            break;
        case 6:
            resultString.push('Cocktail Bars');
            break;
        case 7:
            resultString.push('American (New)');
            break;
        case 8:
            resultString.push('Italian');
            break;
        case 9:
            resultString.push('Chinese');
            break;
        default:
            break;
    }
    
    switch (index2){
        case 0:
            resultString.push('Japanese');
            break;
        case 1:
            resultString.push('Korean');
            break;
        case 2:
            resultString.push('Mexican');
            break;
        case 3:
            resultString.push('Coffee & Tea');
            break;
        case 4:
            resultString.push('Breakfast & Brunch');
            break;
        case 5:
            resultString.push('Desserts');
            break;
        case 6:
            resultString.push('Cocktail Bars');
            break;
        case 7:
            resultString.push('American (New)');
            break;
        case 8:
            resultString.push('Italian');
            break;
        case 9:
            resultString.push('Chinese');
            break;
        default:
            break;
    }

    switch (index3){
        case 0:
            resultString.push('Japanese');
            break;
        case 1:
            resultString.push('Korean');
            break;
        case 2:
            resultString.push('Mexican');
            break;
        case 3:
            resultString.push('Coffee & Tea');
            break;
        case 4:
            resultString.push('Breakfast & Brunch');
            break;
        case 5:
            resultString.push('Desserts');
            break;
        case 6:
            resultString.push('Cocktail Bars');
            break;
        case 7:
            resultString.push('American (New)');
            break;
        case 8:
            resultString.push('Italian');
            break;
        case 9:
            resultString.push('Chinese');
            break;
        default:
            break;
    }

    const likedRestaurants = liked.concat(superliked);
    let favRest;
    let count = 0;
    let max = 0;
    for(let i=0; i<likedRestaurants.length; i++) {
        for(let j=0; j<likedRestaurants[i].categories.length; j++) {
            if(resultString.includes(likedRestaurants[i].categories[j].title)) {
                count++;
            }
        }
        if(count > max) {
            max = count;
            favRest = likedRestaurants[0];
        }
        count = 0;
    }
    // return the resulting string
    return favRest;
  }