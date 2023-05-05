import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import userComments from '@/data/userComments'
import LinkImageWithCaption from '@/components/LinkImageWithCaption'
import linksImageCaption from '@/data/linksImageCaption'
import BoxesImageCaptionText from '@/components/BoxesImageCaptionText'
import threeBoxes from '@/data/threeBoxes'
import TitleRowImagesWrap from '@/components/TitleRowImagesWrap'
import titleAndImages from '@/data/titleAndImages'
import CommentsUserCommentDate from '@/components/CommentsUserCommentDate'
import HeaderImageRightTextAndButtonLeft from '@/components/HeaderImageRightTextAndButtonLeft'
import indexHeader from '@/data/indexHeader'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <Layout page={"Main Page"} >
     <HeaderImageRightTextAndButtonLeft headerItems={indexHeader} />
     <main className='text-primary-light'>
      <LinkImageWithCaption links={linksImageCaption} />
      <BoxesImageCaptionText boxes={threeBoxes} />
      <TitleRowImagesWrap titleImages={titleAndImages}/>
      <CommentsUserCommentDate userComments={userComments} />
     </main>
    </Layout>
  )
}
