import s from 'styled-components';

export const AppContainer = s.div`
  padding: 3% 20%;
  font-family: Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  color: rgba(0,0,0,0.8);
`;

export const Title = s.h1`
  margin: 0 0 1.45rem;
  text-align: center;
`;

export const NewPostTitle = s.h2`
  margin: 0 0 1.45rem;
`;

export const CommentNameInput = s.input`
  display: block;
  width: 100%;
  line-height: 1.5;
  color: rgb(0, 0, 0);
  box-sizing: border-box;
  box-shadow: rgba(255, 255, 255, 0) 0px 0px 0px 0px;
  margin-bottom: 1rem !important;
  font-size: 1rem !important;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-image: initial;
  background: padding-box rgb(255, 255, 255);
  transition: all 200ms ease 0s;
  border-radius: 3px !important;
  padding: 0.5rem 0.75rem !important;
`;

export const CommentTextArea = s.textarea`
  display: block;
  width: 100%;
  line-height: 1.5;
  color: rgb(0, 0, 0);
  box-sizing: border-box;
  box-shadow: rgba(255, 255, 255, 0) 0px 0px 0px 0px;
  margin-bottom: 1rem !important;
  font-size: 1rem !important;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-image: initial;
  background: padding-box rgb(255, 255, 255);
  transition: all 200ms ease 0s;
  border-radius: 3px !important;
  padding: 0.5rem 0.75rem !important;
  font: inherit;
`;

export const SubmitButton = s.button`
  font-weight: 500;
  border: 0px solid rgb(15, 86, 217);
  border-radius: 3px;
  padding: 0.5rem 1rem;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  transition: all 200ms ease 0s;
  margin-bottom: 0px;
  font-size: inherit;
  background: rgb(13, 95, 248);
  color: rgb(255, 255, 255);
`;

export const DisabledSubmitButton = s.button`
  font-weight: 500;
  border: 0px solid rgb(15, 86, 217);
  border-radius: 3px;
  padding: 0.5rem 1rem;
  display: inline-block;
  text-decoration: none;
  cursor: no-drop;
  transition: all 200ms ease 0s;
  margin-bottom: 0px;
  font-size: inherit;
  background: rgb(13, 95, 248);
  color: rgb(255, 255, 255);
  opacity: 0.5;
`;

export const NewPostCard = s.form`
  background: rgb(255, 255, 255);
  padding: 1rem;
  transition: all 200ms ease 0s;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 18px;
`;

export const CommentCard = s.div`
  background: rgb(255, 255, 255);
  padding: 1rem;
  transition: all 200ms ease 0s;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 8px;
`;

export const CommentName = s.p`
  color: rgb(13, 95, 248);
  font-size: 80%;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

export const CommentText = s.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding: 0;
  margin: 0;
  color: rgba(0,0,0,.8);
  font-weight: 400;
`;

export const VoterArrow = s.div`
  user-select: none;
  cursor: pointer;
  margin: 0
`;

export const VoterNumber = s.p`
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: rgba(0,0,0,.8);
  display: inline-block;
  user-select: none;
  font-size: 80%;
  margin-bottom: 0px;
  line-height: 1;
  font-weight: bold;
  padding: 0;
  margin: 0 1.4rem 0 1.4rem;
`;

export const VoterContainer = s.div`
  display: flex;
  flex-direction: column;
  width: 24px;
  -webkit-box-align: center;
  align-items: center;
  float: right;
`;

export const ReplyButton = s.h4`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  opacity: 0.8;
  font-size: 80%;
  cursor: pointer;
  margin-top: 0.7rem;
  user-select: none;
`;

export const ReplyList = s.div`
  padding-left: 0.8rem;
  margin-top: 0.4rem;
  border-left: 2px solid rgba(0, 0, 0, 0.1);  
`;
