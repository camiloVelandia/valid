import styled from 'styled-components/native';

export const PressItem = styled.Pressable`
  background-color: #f9f9f9;
  padding: 15px;
  border: 1px solid #bbb;
  width:90%;
  margin:10px auto;
  flex-direction:row;
  align-items:center
`;
export const Image = styled.Image`
  width:45px;
  height:45px;
`;
export const InfoContainer = styled.View`
  padding-left:15px
`;
export const Name = styled.Text`
  font-weight:700;
`;
export const Artist = styled.Text`
  color:#707070
`;
export const More = styled.Text`
  color:#707070;
  font-size:9px;
  padding-top:5px;
  font-weight:300;
`;

