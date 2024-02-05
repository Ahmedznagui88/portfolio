<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Music;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class PublicController extends Controller
{
    public function home() {
        return view('welcome');
    }

    public function expertise(){

        $musics = Music::all();

        return view ('expertise', compact('musics') );


    }

    public function about(){
        return view('about');

    }

    public function contact(){
        return view('contact');
    }

    /* Dependency-injection-php / input name,email,user message */

    public function contactSubmit(Request $request){
        $name = $request->input ('name');
        $email = $request->email;
        $user_message = $request->user_message;

        try{
            Mail::to($email)->send(new ContactMail($name, $email, $user_message));

        } catch(Exception $error){
            return redirect()->back()->with('emailError' ,'Request failed, please try again later');
            
        }

        return redirect(route('contact'))->with('emailSent', 'Your request has been successfully sent.');
    }
}
