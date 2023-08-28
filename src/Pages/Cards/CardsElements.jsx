import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';




export const ServicesCard = styled.div`
  background: transparent; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10% ;
  height: 330px;
  width: 250px;
  padding:  30px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const ServicesIcon = styled.img`
  height: 340px;
  width: 300px;
`
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`
export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  position: relative;
  top: -30px;
`
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    position: relative;
    top:330px;
    left:-200px;
    grid-gap: 100px;
    padding: 0 30px;
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }
    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr ;
      max-width: 786px;
      grid-gap: 10px;
      left:47px;
      top:200px;
  }
`
export const CoursT1 = styled.h1`
  font-size: 3rem;
  color: #fff;
  position: absolute;
  left: 870px;
  top: 270px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    align-items: center;
    left:150px;
    top:180px;
  }  
`
export const EmdT1= styled.h1`
  font-size: 3rem;
  color: #fff;
  position: absolute;
  left: 870px;
  top: 270px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    position: relative;
    left:150px;
    top:-260px;
  }  
`
export const TdT1= styled.h1`
  font-size: 3rem;
  color: #fff;
  position: absolute;
  left: 870px;
  top: 270px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    position: relative;
    left:150px;
    top:-260px;
  }  
`
export const ServicesWrapper2 = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
position: relative;
top:330px;
left:-200px;
grid-gap: 100px;
padding: 0 30px;
@media screen and (max-width: 1000px) {
  grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 786px) {
  grid-template-columns: 1fr ;
  max-width: 786px;
  grid-gap: 10px;
  left:47px;
  top:200px;
}
`
export const ServicesWrapper3 = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
position: relative;
top:330px;
left:-200px;
grid-gap: 100px;
padding: 0 30px;
@media screen and (max-width: 1000px) {
  grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 786px) {
  grid-template-columns: 1fr ;
  max-width: 786px;
  grid-gap: 10px;
  left:47px;
  top:200px;
}
`
export const DepartementWarpper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    position: relative;
    top:300px;
    left:-200px;
    grid-gap: 100px;
    padding: 0 30px;
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }
    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr ;
      padding: 0 10px;
      left:0px;
      top:-290px;
  }
  `
  export const DepartementIcon = styled.img`
  height: 487px;
  width: 487px;
`
export const DepartementCard = styled.div`
  background: transparent; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius:10% 10% 10% 10% ;
  height: 487px;
  width: 487px;
  padding:  30px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const Btn2 = styled.nav`
left:1000px;
top:230px;
position: absolute;

  align-items: center;
  @media screen and (max-width: 768px) {
    left:210px;
    top:128px;
  }
`
export const BtnLink2 = styled(LinkR)`
  border-radius: 50px;
  position: relative;
  top: 200px;
  left: 825px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
export const Btn1 = styled.nav`
left:800px;
top:220px;
position: absolute;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    left:110px;
    top:120px;
  }
`
export const BtnLink1 = styled(LinkR)`
  border-radius: 50px;
  position: relative;
  top: 200px;
  left: 750px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  } 
  
`
export const BtnLink3 = styled(LinkR)`
  border-radius: 50px;
  position: relative;
  top: 200px;
  left: 900px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  } 
`