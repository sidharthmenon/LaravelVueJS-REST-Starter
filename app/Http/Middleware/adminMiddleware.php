<?php

namespace App\Http\Middleware;

use Closure;

class adminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($request->user()->status == "admin")
        {
            return $next($request);
        }
        else{
            return response()->json(['message'=>'No privilage to access this section'], 403);
        }
        
    }
}
