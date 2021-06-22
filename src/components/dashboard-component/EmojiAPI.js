import PropTypes from 'prop-types';

import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

EmojiAPI.propTypes = {
  updateIcon: PropTypes.func
};

export default function EmojiAPI({ updateIcon }) {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    console.log(emojiObject.emoji);
    setChosenEmoji(emojiObject);
    updateIcon(emojiObject.emoji);
  };

  return (
    // <div>
    //   {chosenEmoji ? (
    //     <span>You chose: {chosenEmoji.emoji}</span>
    //   ) : (
    //     <span>No emoji Chosen</span>
    //   )}
    //   <Picker onEmojiClick={onEmojiClick} />
    // </div>
    <Picker onEmojiClick={onEmojiClick} />
  );
}
