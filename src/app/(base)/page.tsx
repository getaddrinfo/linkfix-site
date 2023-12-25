import type { FC } from 'react';

import Service from '@/components/home/Service';
import Features from '@/components/home/Features';
import Feature from '@/components/home/Feature';

const Home: FC = () => {
  return (
    <>
      <section className='mx-auto my-20 flex max-w-3xl flex-col items-center'>
        <h1 className='mb-5 text-center text-3xl font-bold'>Links. Without the fuss.</h1>
        <p className='mx-auto mb-5 max-w-xl text-center'>
          Automatically send a link that embeds the tweet, tiktok or other post that you want to share.
        </p>

        <ul className='mx-auto flex flex-row flex-wrap justify-center space-x-3'>
          <Service
            id='tiktok'
            name='TikTok'
          />
          <Service
            id='twitter'
            name='Twitter'
          />
        </ul>
      </section>
      <section className='mx-auto max-w-3xl'>
        <Features>
          <Feature
            title='Ignore broken links'
            description='Post the working links, and ignore any that are broken or invalid.'
            supportedBy={['tiktok']}
          />
          <Feature
            title='Less clutter'
            description={`Remove embeds from the original message once we've posted working links.`}
            supportedBy={['tiktok', 'twitter']}
          />
        </Features>
      </section>
    </>
  );
};

export default Home;
