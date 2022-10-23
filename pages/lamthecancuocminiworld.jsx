import React from "react";
import Head from "next/head";
import Image from "next/image";

import HeaderSeo from "../components/HeaderSeo";

function Lamthecancuoc(props) {
  return (
    <>
      <Head>
        <title>làm thẻ căn cước mini world</title>
        <HeaderSeo
          title={"làm thẻ căn cước mini world"}
          desc="Tôi  đi dạo nhóm trên facebook . 
          tôi thấy nhiều bạn facebook thích làm thẻ căn cước mini (Id card Mini World)
          world nên tôi quyết định xây dựng trang website giúp anh em 
          làm thẻ căn cước mini world dễ dàng hơn"
          image="https://res.cloudinary.com/xoanen1202/image/upload/v1666493135/lamthecancuoc_blcrml.jpg"
        />
      </Head>
      <div>
        <h1>Làm thẻ căn cước mini World</h1>
        <p>
          Tôi đi dạo nhóm trên facebook . tôi thấy nhiều bạn facebook thích làm
          thẻ căn cước mini world ,Id card Mini World , nên tôi quyết định xây
          dựng trang website giúp anh em làm thẻ căn cước mini world dễ dàng hơn
        </p>
        <h2>Làm id card cho mini world</h2>
        <p>
          Trang website này viết lên để seo chứ không phải để làm thẻ cước cước
          Mini Wrold . Nó giúp chuyển trang đến trang làm thẻ cước cước Mini
          Wrold
        </p>
        <div className="BoxImage">
          <Image
            src="/image/lamthecancuoc.jpg"
            alt="Ảnh làm thẻ căn cước"
            width="500"
            height="300"
          />
        </div>
        <ul>
          <li>Làm thẻ căn cước mini world</li>
          <li>Id card mini world</li>
          <li>mini world</li>
          <li>mini world create</li>
        </ul>
        <div>
          Tác giả : <a href="https://xoanen.surge.sh/">xoanen.surge.sh</a>
        </div>
      </div>
    </>
  );
}

export default Lamthecancuoc;
