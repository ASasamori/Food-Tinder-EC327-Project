import data from './data.json';
import user from './user.json';
import React, { useState } from 'react';

function calculateMatch(liked, disliked, superliked) {
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

    var misScore = 0;

    var types = [jap,kor,mex,cof,breakfast,des,bar,amer,ita,chin];

    for (var i = 0; i < liked.length; i++) {
        var cusine = liked[i].categories[0].title;
        if (!types.includes(cusine)){
            cusine = liked[i].categories[1].title;
        }
        if (!types.includes(cusine)){
            cusine = liked[i].categories[2].title;
        }

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
                misScore++;
                break;
        }
    }

    for (var i = 0; i < disliked.length; i++) {
        var cusine = disliked[i].categories[0].alias;
        if (!types.includes(cusine)){
            cusine = disliked[i].categories[1].title;
        }
        if (!types.includes(cusine)){
            cusine = disliked[i].categories[2].title;
        }

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
                misScore -= 0.5;
                break;
        }
    }

    for (var i = 0; i < superliked.length; i++) {
        var cusine = superliked[i].categories[0].alias;
        if (!types.includes(cusine)){
            cusine = superliked[i].categories[1].title;
        }
        if (!types.includes(cusine)){
            cusine = superliked[i].categories[2].title;
        }

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
                misScore+=2;
                break;
        }
    }
    

    //checks to see who wins;
    var index = 0;
    var max = 0;
    var scores = [japScore,korScore,mexScore,cofScore,breakfastScore,desScore,barScore,amerScore,itaScore,chinScore,misScore];
    for (var i = 0; i < scores.length; i++){
        var temp = score[i];
        if (temp > max){
            man = temp;
            index = i;
        }
    }
    
    var resultString;
    switch (index){
        case 0:
            resultString = 'Japanese';
            break;
        case 1:
            resultString = 'Korean';
            break;
        case 2:
            resultString = 'Mexican';
            break;
        case 3:
            resultString = 'Coffee & Tea';
            break;
        case 4:
            resultString = 'Breakfast & Brunch';
            break;
        case 5:
            resultString = 'Desserts';
            break;
        case 6:
            resultString = 'Cocktail Bars';
            break;
        case 7:
            resultString = 'American (New)';
            break;
        case 8:
            resultString = 'Italian';
            break;
        case 9:
            resultString = 'Chinese';
            break;
        default:
            resultString = 'food';
            break;
    }
  
    // return the resulting string
    return resultString;
  }