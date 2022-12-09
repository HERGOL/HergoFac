import React from 'react';
import {NavBarDp} from '../../components/NavBarDp';
import { ServicesCard , ServicesIcon , ServicesH2,ServicesWrapper,CoursT1,EmdT1 , ServicesWrapper2} from '../Cards/CardsElements';
import {Link} from "react-router-dom";
import math from "../../assets/img/math.png";







const DpSt = () => {
   const Cours = [
      {
         id: 1,
        Module: "Maths",
        imgUrl: math,
        url: "https://drive.google.com/drive/folders/1iBycs4zWx6W72i1gWgfOqQQFLtHeODf9?usp=share_link" ,
      },
      {
         id: 2,
        Module: "Physique",
        imgUrl:  math,
        url: "/Dps/DpArch" ,
      },
      {
         id: 3,
        Module: "chimie",
        imgUrl:  math,
        url: "/Dps/DpArch" ,
      },
      {
         id: 4,
         Module: "informatique",
         imgUrl:  math,
         url: "/Dps/DpArch" ,
      },
   ];
 return (
  <div >
     <NavBarDp />
     <CoursT1>Cours</CoursT1>
     <ServicesWrapper>
     {
      Cours.map((Module, index) => {
          return (
     <Link to={Module.url} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <ServicesCard  key={Module.id} >
          <ServicesIcon src={Module.imgUrl}/>
          <ServicesH2>{Module.Module}</ServicesH2>
        </ServicesCard>
        </Link>
     )})
 }
</ServicesWrapper>
<EmdT1>EMD</EmdT1>
<ServicesWrapper2>
     {
      Cours.map((Module, index) => {
          return (
     <Link to={Module.url} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <ServicesCard  key={Module.id} >
          <ServicesIcon src={Module.imgUrl}/>
          <ServicesH2>{Module.Module}</ServicesH2>
        </ServicesCard>
        </Link>
     )})
 }
</ServicesWrapper2>

  </div>
  )
}

export default DpSt