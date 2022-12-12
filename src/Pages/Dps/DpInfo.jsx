import React from 'react';
import {NavBarDp} from '../../components/NavBarDp';
import { ServicesCard , ServicesIcon , ServicesH2,ServicesWrapper,CoursT1,EmdT1 , ServicesWrapper2} from '../Cards/CardsElements';
import Analyse from "../../assets/img/Analyse.png";
import physique from "../../assets/img/physiqueS1.png";
import Algebre from "../../assets/img/chimieS1.png";
import SMachine from "../../assets/img/SMachine.png";
import SMachineEMD from "../../assets/img/SMachineEMD.png";
import AlgebreEMD from "../../assets/img/AlgebreEMD.png";
import AnalyseEMD from "../../assets/img/AnalyseEMD.png";
import ASDEMD from "../../assets/img/ASDEMD.png";
import ASD from "../../assets/img/ASD.png";
import physiqueEMD from "../../assets/img/physiqueEMD.png";
import TseeEMD from "../../assets/img/TseeEMD.png";
import Tsee from "../../assets/img/Tsee.png";


import { ExternalLink } from 'react-external-link';









const DpInfo = () => {
   const Cours = [
      {
         id: 1,
        Module: "Analyse S1",
        imgUrl: Analyse,
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
        Module: "Algébre S1",
        imgUrl:  Algebre,
        url: "https://drive.google.com/drive/folders/18MGEgqg1wEAVY4GKO0qTPh5DW7QRcmT7?usp=sharing" ,
      },
      {
         id: 4,
         Module: "Algorithmes et Structure Des Donnés S1",
         imgUrl:  ASD,
         url: "https://drive.google.com/drive/folders/1HwdGflBrMfpqhibC1Ihq7U3aFHIVxavf?usp=sharing" ,
      },
      {
         id: 5,
         Module: "Structure Machine S1",
         imgUrl:  SMachine,
         url: "https://drive.google.com/drive/folders/1HwdGflBrMfpqhibC1Ihq7U3aFHIVxavf?usp=sharing" ,
      },
      {
         id: 6,
         Module: "TSEE/Anglais S1",
         imgUrl: Tsee,
         url: "https://drive.google.com/drive/folders/1HwdGflBrMfpqhibC1Ihq7U3aFHIVxavf?usp=sharing" ,
      },
   ];


   const EMD = [
    {
      id: 1,
     Module: "Analyse",
     imgUrl: AnalyseEMD,
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
     Module: "Algébre",
     imgUrl:  AlgebreEMD,
     url: "https://drive.google.com/drive/folders/18MGEgqg1wEAVY4GKO0qTPh5DW7QRcmT7?usp=sharing" ,
   },
   {
      id: 4,
      Module: "Algorithmes et Structure Des Donnés",
      imgUrl:  ASDEMD,
      url: "https://drive.google.com/drive/folders/1HwdGflBrMfpqhibC1Ihq7U3aFHIVxavf?usp=sharing" ,
   },
   {
      id: 5,
      Module: "Structure Machine",
      imgUrl:  SMachineEMD,
      url: "https://drive.google.com/drive/folders/1HwdGflBrMfpqhibC1Ihq7U3aFHIVxavf?usp=sharing" ,
   },
   {
      id: 6,
      Module: "TSEE/Anglais",
      imgUrl:  TseeEMD,
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

export default DpInfo