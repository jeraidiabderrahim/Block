<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Comment = Comment::all();
        return response()->json($Comment,200);
    }

    public function store(StoreCommentRequest $request)
    {
        $comment=Comment::create($request->validated());
        return response()->json($comment, 201);
    }
    public function show($comment)
    {
        return response()->json($comment,200);
    }
    public function update(UpdateCommentRequest $request,Comment $comment)
    {
        $comment->update($request->only('body','user_id','post_id'));
        return response()->json($comment, 200);
    }
    public function destroy(Comment $comment)
    {
        $comment->delete();
        return response()->json(null, 204);
    }
}
