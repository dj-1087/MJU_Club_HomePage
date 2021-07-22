import React from 'react';
import { faPen } from "@fortawesome/free-solid-svg-icons";

import Page from '../../../components/Page';
import RightTitle from '../../../components/RightTitle';
import FormCard from '../../../components/Auth/FormCard';
import CreateForm from '../../../components/Board/CreateForm';

export default function CreatePage() {
  const title="글 작성하기";
  const rightTitle = <RightTitle 
            title={title}
            menu1={"키움 이모저모"}
            menu2={"자유게시판"}
            menu3={title}
          />
  const rightInner = <FormCard icon={faPen} content={ <CreateForm/> } title={title} />

  return(
    <Page rightInner={rightInner} rightTitle={rightTitle}/>
  );
}