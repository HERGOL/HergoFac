import React from 'react';
import {NavBarDp} from '../../components/NavBarDp';
import { ServicesCard , ServicesIcon , ServicesH2,ServicesWrapper,CoursT1,EmdT1 , ServicesWrapper2} from '../Cards/CardsElements';
import math from "../../assets/img/mathS1.png";
import physique from "../../assets/img/physiqueS1.png";
import chimie from "../../assets/img/chimieS1.png";
import info from "../../assets/img/infoS1.png";
import infoEMD from "../../assets/img/infoEMD.png";
import mathEMD from "../../assets/img/mathEMD.png";
import chimieEMD from "../../assets/img/chimieEMD.png";
import physiqueEMD from "../../assets/img/physiqueEMD.png";


import { ExternalLink } from 'react-external-link';









const DpSt = () => {
   const Cours = [
      {
         id: 1,
        Module: "Maths S1",
        S: 1 ,
        imgUrl: math,
        url: "https://drive.google.com/drive/folders/1iBycs4zWx6W72i1gWgfOqQQFLtHeODf9?usp=share_link" ,
      },
      {
         id: 2,
        Module: "Physique S1",
        S: 1 ,
        imgUrl:  physique,
        url: "https://drive.google.com/drive/folders/1XePfkwW2fVN-s3Eb3WX7ThRMMad9-uld?usp=sharing" ,
      },
      {
         id: 3,
        Module: "chimie S1",
        S: 1 ,
        imgUrl:  chimie,
        url: "https://drive.google.com/drive/folders/18MGEgqg1wEAVY4GKO0qTPh5DW7QRcmT7?usp=sharing" ,
      },
      {
         id: 4,
         Module: "informatique S1",
         S: 1 ,
         imgUrl:  info,
         url: "https://drive.google.com/drive/folders/1HwdGflBrMfpqhibC1Ihq7U3aFHIVxavf?usp=sharing" ,
      },
      {
        id: 5,
       Module: "Maths S2",
       S: 2 ,
       imgUrl: math,
       url: "https://drive.google.com/drive/folders/1iBycs4zWx6W72i1gWgfOqQQFLtHeODf9?usp=share_link" ,
     },
     {
        id: 6,
       Module: "Physique S2",
       S: 2 ,
       imgUrl:  physique,
       url: "https://drive.google.com/drive/folders/1XePfkwW2fVN-s3Eb3WX7ThRMMad9-uld?usp=sharing" ,
     },
     {
        id: 7,
       Module: "chimie S2",
       S: 2 ,
       imgUrl:  chimie,
       url: "https://drive.google.com/drive/folders/18MGEgqg1wEAVY4GKO0qTPh5DW7QRcmT7?usp=sharing" ,
     },
     {
        id: 8,
        Module: "informatique S2",
        S: 2 ,
        imgUrl:  info,
        url: "https://drive.google.com/drive/folders/1HwdGflBrMfpqhibC1Ihq7U3aFHIVxavf?usp=sharing" ,
     },
   ];


   const EMD = [
    {
      id: 1,
     Module: "Maths",
     imgUrl: mathEMD,
     url: "https://drive.google.com/drive/folders/1iBycs4zWx6W72i1gWgfOqQQFLtHeODf9?usp=share_link" ,
   },
   {
      id: 2,
     Module: "Physique",
     imgUrl:  physiqueEMD,
     url: "https://drive.google.com/drive/folders/1XePfkwW2fVN-s3Eb3WX7ThRMMad9-uld?usp=sharing" ,
   },
   {
      id: 3,
     Module: "chimie",
     imgUrl:  chimieEMD,
     url: "https://drive.google.com/drive/folders/18MGEgqg1wEAVY4GKO0qTPh5DW7QRcmT7?usp=sharing" ,
   },
   {
      id: 4,
      Module: "informatique",
      imgUrl:  infoEMD,
      url: "https://drive.google.com/drive/folders/1HwdGflBrMfpqhibC1Ihq7U3aFHIVxavf?usp=sharing" ,
   },
   ];
   const Semestre = [...new Set(Cours.map((Module) => Module.S))];
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
      EMD.map((Module, index) => {
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
<EmdT1>TD</EmdT1>
<ServicesWrapper2>
     {
      EMD.map((Module, index) => {
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