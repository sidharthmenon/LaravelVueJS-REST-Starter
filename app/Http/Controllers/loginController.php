<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class loginController extends Controller
{
    //
    
    public function login(){

    	if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){
            $user = Auth::user();
            $success['token'] =  $user->createToken('MyApp')->accessToken;
            return response()->json(['success' => $success], 200);
        }
        else{
            return response()->json(['message'=>'Unable to login! Username or password is incorrect.'], 401);
        }

    }
}
