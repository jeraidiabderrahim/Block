<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $post = Post::all();
        return response()->json($post,200);
    }

    public function store(StorePostRequest $request)
    {
        $post = Post::create($request->validated());
        return response()->json($post, 201);
    }

    public function show(Post $post)
    {
        return response()->json($post, 200);
    }

    public function update(UpdatePostRequest $request,Post $post)
    {
        $user = auth()->user();
        if(!$user->isAdmin() && $post->user_id !== $user->id){
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $post->update($request->only('title','body'));
        return response()->json($post, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(post $post)
    {
        $user = auth()->user();
        if(!$user->isAdmin() && $post->user_id !== $user->id){
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $post->delete();
        return response()->json('post deleted', 204);
    }
}
