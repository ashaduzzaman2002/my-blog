import React from "react";
import Card from "../components/cards/Card";

const MyPost = () => {
  return (
    <div className="container mb-5">
      <form className="mt-5">
        <h3>Add new post</h3>
        <div class="mb-3 ">
          <label for="title" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            placeholder="Enter title"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Content
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="content"
          ></textarea>
        </div>

        <div class="mb-3">
          <button type="button" class="btn btn-primary">
            Post
          </button>
        </div>
      </form>

      <div className="mt-5">
        <h3>My posts</h3>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default MyPost;
