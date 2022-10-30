import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <body className="h-screen bg-gray-800 px-16 pb-16 pt-32">
      <Head>
        <title>Jerry Guerrero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Holding the content, set the flex row */}
      <div className="flex flex-row gap-12">
        {/* Left side of the page, the profile */}
        <div className="w-1/3 h-max py-8 bg-gray-900 rounded-3xl shadow-2xl text-white p-4">
          {/* The name */}
          <h1 className="text-4xl font-bold text-center">Jerry Guerrero</h1>
          {/* The title */}
          <h2 className="text-2xl text-center text-gray-400">
            Application Manager
          </h2>
        </div>
        {/* Right side of the page, the content */}
        <div className="h-full w-2/3 bg-gray-900 rounded-3xl shadow-2xl text-gray-700 p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
          pharetra elementum. In aliquet enim in orci tempus tempus. In orci
          quam, pellentesque quis blandit eget, fermentum ut magna. Aenean
          mollis metus tincidunt magna ultricies accumsan. In hac habitasse
          platea dictumst. Proin molestie diam tincidunt nisi placerat euismod.
          Mauris erat eros, blandit quis dignissim ut, luctus posuere lacus.
          Fusce ex augue, placerat non laoreet vel, aliquam non sapien. Maecenas
          eget sollicitudin nisl, eget eleifend tellus. Aliquam commodo magna
          odio, non lacinia dolor vulputate eget. Phasellus posuere blandit
          lectus, ut condimentum quam egestas quis. Ut congue, odio a consequat
          placerat, libero enim posuere nibh, lobortis fermentum turpis diam nec
          nibh. Curabitur et pretium nisi. Proin efficitur dui ullamcorper
          sapien imperdiet ornare. Aliquam erat volutpat. Donec laoreet
          tincidunt imperdiet. Donec vitae ullamcorper lacus. Fusce fermentum
          gravida vestibulum. Praesent congue quam a odio sagittis, feugiat
          efficitur dui porttitor. Integer eu urna id lectus faucibus aliquet
          sed vel urna. Nam convallis, nunc sit amet consequat finibus, velit
          velit imperdiet nulla, eget imperdiet ante purus eget orci. Integer
          ante ante, sodales quis vehicula eget, interdum sed lectus. Praesent
          non enim quis elit ornare hendrerit id a mauris. Etiam semper nunc a
          nisi condimentum, non auctor urna pellentesque. Etiam commodo lacus a
          purus ultrices, ac sollicitudin ligula hendrerit. Phasellus augue
          felis, viverra nec neque sit amet, eleifend consequat justo. Morbi
          pretium sed turpis quis dapibus. Donec at sem quis massa vulputate
          aliquam vitae a nisi. Curabitur arcu tellus, placerat at dignissim ac,
          venenatis in velit. Nullam magna odio, blandit at augue facilisis,
          aliquam porttitor diam. Nunc fringilla lacus quis imperdiet bibendum.
          Maecenas vel interdum orci. Proin fringilla urna ut tellus bibendum
          volutpat. Sed eget quam tortor. Vestibulum iaculis, urna eget lacinia
          facilisis, justo augue bibendum sem, ac ultricies ex est in nulla.
          Nulla non odio dictum, molestie magna eu, posuere urna. Ut porttitor
          neque non nunc luctus, a aliquet orci dignissim. Etiam venenatis lacus
          a magna ullamcorper, et pretium dolor malesuada. Pellentesque
          tincidunt quam sed orci gravida mattis. Quisque auctor eros vel enim
          facilisis ultrices. Nam vehicula, eros in sagittis egestas, ligula
          nisi vulputate leo, ultrices tempus justo metus a ipsum. Proin sodales
          consectetur lorem, quis pulvinar nisi imperdiet vel. Curabitur
          fringilla varius ante in commodo. Fusce consequat, libero ut semper
          ultricies, mi felis mattis leo, nec condimentum turpis justo eu felis.
          Phasellus vulputate sagittis tincidunt. Pellentesque tellus lacus,
          faucibus quis nibh quis, porta blandit arcu. In sit amet elit nec dui
          sollicitudin auctor. Ut sagittis libero nisl, ac fermentum diam
          ultrices sed. Fusce finibus ex risus. Aliquam at elit quis elit
          ultrices congue.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam semper pharetra elementum. In aliquet enim in orci tempus
          tempus. In orci quam, pellentesque quis blandit eget, fermentum ut
          magna. Aenean mollis metus tincidunt magna ultricies accumsan. In hac
          habitasse platea dictumst. Proin molestie diam tincidunt nisi placerat
          euismod. Mauris erat eros, blandit quis dignissim ut, luctus posuere
          lacus. Fusce ex augue, placerat non laoreet vel, aliquam non sapien.
          Maecenas eget sollicitudin nisl, eget eleifend tellus. Aliquam commodo
          magna odio, non lacinia dolor vulputate eget. Phasellus posuere
          blandit lectus, ut condimentum quam egestas quis. Ut congue, odio a
          consequat placerat, libero enim posuere nibh, lobortis fermentum
          turpis diam nec nibh. Curabitur et pretium nisi. Proin efficitur dui
          ullamcorper sapien imperdiet ornare. Aliquam erat volutpat. Donec
          laoreet tincidunt imperdiet. Donec vitae ullamcorper lacus. Fusce
          fermentum gravida vestibulum. Praesent congue quam a odio sagittis,
          feugiat efficitur dui porttitor. Integer eu urna id lectus faucibus
          aliquet sed vel urna. Nam convallis, nunc sit amet consequat finibus,
          velit velit imperdiet nulla, eget imperdiet ante purus eget orci.
          Integer ante ante, sodales quis vehicula eget, interdum sed lectus.
          Praesent non enim quis elit ornare hendrerit id a mauris. Etiam semper
          nunc a nisi condimentum, non auctor urna pellentesque. Etiam commodo
          lacus a purus ultrices, ac sollicitudin ligula hendrerit. Phasellus
          augue felis, viverra nec neque sit amet, eleifend consequat justo.
          Morbi pretium sed turpis quis dapibus. Donec at sem quis massa
          vulputate aliquam vitae a nisi. Curabitur arcu tellus, placerat at
          dignissim ac, venenatis in velit. Nullam magna odio, blandit at augue
          facilisis, aliquam porttitor diam. Nunc fringilla lacus quis imperdiet
          bibendum. Maecenas vel interdum orci. Proin fringilla urna ut tellus
          bibendum volutpat. Sed eget quam tortor. Vestibulum iaculis, urna eget
          lacinia facilisis, justo augue bibendum sem, ac ultricies ex est in
          nulla. Nulla non odio dictum, molestie magna eu, posuere urna. Ut
          porttitor neque non nunc luctus, a aliquet orci dignissim. Etiam
          venenatis lacus a magna ullamcorper, et pretium dolor malesuada.
          Pellentesque tincidunt quam sed orci gravida mattis. Quisque auctor
          eros vel enim facilisis ultrices. Nam vehicula, eros in sagittis
          egestas, ligula nisi vulputate leo, ultrices tempus justo metus a
          ipsum. Proin sodales consectetur lorem, quis pulvinar nisi imperdiet
          vel. Curabitur fringilla varius ante in commodo. Fusce consequat,
          libero ut semper ultricies, mi felis mattis leo, nec condimentum
          turpis justo eu felis. Phasellus vulputate sagittis tincidunt.
          Pellentesque tellus lacus, faucibus quis nibh quis, porta blandit
          arcu. In sit amet elit nec dui sollicitudin auctor. Ut sagittis libero
          nisl, ac fermentum diam ultrices sed. Fusce finibus ex risus. Aliquam
          at elit quis elit ultrices congue.
        </div>
      </div>
    </body>
  );
};

export default Home;
