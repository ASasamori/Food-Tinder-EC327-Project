import data from './data.json';
import user from './user.json';
import React, { useState } from 'react';

function calculateMatch(liked, disliked, superliked) {
    var jap = 'japanese';
    var japScore = 0;
    var kor = 'korean';
    var korScore = 0;
    var mex = 'mexican';
    var mexScore = 0;
    var fast = 'fastfood';
    var fastScore = 0;
    var cof = 'coffee';
    var cofScore = 0;

    var misScore = 0;

    for (var i = 0; i < liked.length; i++) {
        var cusine = liked[i].categories[0].alias;

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
            case fast:
                fastScore++;
                break;
            case cof:
                cofScore++;
                break;
            default:
                misScore++;
                break;
        }
    }

    for (var i = 0; i < disliked.length; i++) {
        var cusine = liked[i].categories[0].alias;

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
            case fast:
                fastScore -= 0.5;
                break;
            case cof:
                cofScore -= 0.5;
                break;
            default:
                misScore -= 0.5;
                break;
        }
    }

    for (var i = 0; i < superliked.length; i++) {
        var cusine = liked[i].categories[0].alias;

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
            case fast:
                fastScore+=2;
                break;
            case cof:
                cofScore+=2;
                break;
            default:
                misScore+=2;
                break;
        }
    }
    

    //checks to see who wins;
    var index = 0;
    var max = 0;
    var scores = [japScore,korScore,mexScore,fastScore,cofScore,misScore];
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
            resultString = 'japanese';
            break;
        case 1:
            resultString = 'korean';
            break;
        case 2:
            resultString = 'mexican';
            break;
        case 3:
            resultString = 'fast food';
            break;
        case 4:
            resultString = 'coffee';
            break;
        default:
            resultString = 'food';
            break;
    }
  
    // return the resulting string
    return resultString;
  }