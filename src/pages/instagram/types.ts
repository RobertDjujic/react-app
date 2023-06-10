export type ModalProps = {
  handlePost: () => void;
  modal: boolean;
  setModal: (value: boolean) => void;
};

export type PostType = {
  description: string;
  hashtags: string[];
  id: string;
  img_url: string;
};

export type PostProps = {
  posts: PostType[];
};
