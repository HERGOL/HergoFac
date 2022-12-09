import styled from 'styled-components';



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
  top: -20px;
`
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    position: relative;
    top:400px;
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
export const CoursT1 = styled.h1`
  font-size: 3rem;
  color: #fff;
  position: relative;
  left: 870px;
  top: 300px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    position: relative;
    left: 0;
    top:-260px;
  }  
`
export const EmdT1= styled.h1`
  font-size: 3rem;
  color: #fff;
  position: relative;
  left: 870px;
  top: 600px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    position: relative;
    left: 0;
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
    top:700px;
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