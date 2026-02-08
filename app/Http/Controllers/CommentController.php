<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Http\Resources\CommentResource;
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
        return new CommentResource($Comment);
    }

    public function store(StoreCommentRequest $request)
    {
        $comment=Comment::create($request->validated());
        return new CommentResource($comment);
    }
    public function show($comment)
    {
        return new CommentResource(Comment::find($comment));
    }
    public function update(UpdateCommentRequest $request,Comment $comment)
    {
        $comment->update($request->only('body','user_id','post_id'));
        return new CommentResource($comment);
    }
    public function destroy(Comment $comment)
    {
        $comment->delete();
        return response()->json('comment deleted', 204);
    }
}
