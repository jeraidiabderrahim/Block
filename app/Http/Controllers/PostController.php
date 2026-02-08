<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $post = Post::all();
        return new PostResource($post);
    }

    public function store(StorePostRequest $request)
    {
        $post = Post::create($request->validated());
        return new PostResource($post);
    }

    public function show(Post $post)
    {
        return new PostResource(Post::find($post));
    }

    public function update(UpdatePostRequest $request,Post $post)
    {
        $user = auth()->user();
        if(!$user->isAdmin() && $post->user_id !== $user->id){
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $post->update($request->only('title','body'));
        return new PostResource($post);
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
