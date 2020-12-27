export const addClip = ({ clip }) => {
  return {
    type: "ADD_CLIP",
    // キーとバリューが同じなので省略化
    clip,
  };
};

export const deleteClip = ({ clip }) => {
  return {
    type: "DELETE_CLIP",
    // キーとバリューが同じなので省略化
    clip,
  };
};
