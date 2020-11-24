import React, { memo } from 'react';

export const Note = memo(function (props: { text: string }) {
  return <li>{props.text}</li>;
});
