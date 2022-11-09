import React, { useState } from "react";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = useState("");

  return (
    <form>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoCommentsForm;
