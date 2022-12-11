import React from 'react';
import {NavBarDp} from '../../components/NavBarDp';
import { ServicesCard , ServicesIcon , ServicesH2,ServicesWrapper,CoursT1,EmdT1 , ServicesWrapper2} from '../Cards/CardsElements';
import math from "../../assets/img/mathS1.png";
import physique from "../../assets/img/physiqueS1.png";
import chimie from "../../assets/img/chimieS1.png";
import info from "../../assets/img/infoS1.png";
import { ExternalLink } from 'react-external-link';









const DpSt = () => {
   const Cours = [
      {
         id: 1,
        Module: "Maths S1",
        imgUrl: math,
        url: "https://drive.google.com/drive/folders/1iBycs4zWx6W72i1gWgfOqQQFLtHeODf9?usp=share_link" ,
      },
      {
         id: 2,
        Module: "Physique S1",
        imgUrl:  physique,
        url: "https://drive.google.com/drive/folders/1XePfkwW2fVN-s3Eb3WX7ThRMMad9-uld?usp=sharing" ,
      },
      {
         id: 3,
        Module: "chimie S1",
        imgUrl:  chimie,
        url: "https://drive.google.com/drive/folders/18MGEgqg1wEAVY4GKO0qTPh5DW7QRcmT7?usp=sharing" ,
      },
      {
         id: 4,
         Module: "informatique S1",
         imgUrl:  info,
         url: "https://drive.google.com/drive/folders/1HwdGflBrMfpqhibC1Ihq7U3aFHIVxavf?usp=sharing" ,
      },
   ];
 return (
  <>

  <div >
     <NavBarDp />
     <CoursT1>Cours</CoursT1>
     <ServicesWrapper>
     {
      Cours.map((Module, index) => {
          return (
            
         <ExternalLink  href={Module.url} style={{ color: 'inherit', textDecoration: 'inherit' }} >
        <ServicesCard  key={Module.id} >
          <ServicesIcon src={Module.imgUrl}/>
          <ServicesH2>{Module.Module}</ServicesH2>
        </ServicesCard>
        </ExternalLink>
     )})
 }
</ServicesWrapper>
<EmdT1>EMD</EmdT1>
<ServicesWrapper2>
     {
      Cours.map((Module, index) => {
          return (
            <ExternalLink  href={Module.url} style={{ color: 'inherit', textDecoration: 'inherit' }} >
        <ServicesCard  key={Module.id} >
          <ServicesIcon src={Module.imgUrl}/>
          <ServicesH2>{Module.Module}</ServicesH2>
        </ServicesCard>
        </ExternalLink>
     )})
 }
</ServicesWrapper2>

  </div>
 </>
  )
}

export default DpSt