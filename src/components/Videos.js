import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {
  const videosArr =[
    'https://joy.videvo.net/videvo_files/video/premium/video0236/large_watermarked/NO%20MR_STOCK%20FOOTAGE%20NO%20MR%20(985)_preview.mp4',
    "https://media.istockphoto.com/id/1359684137/video/aerial-view-of-mountain-hills-covered-with-dense-green-lush-woods-on-bright-summer-day.mp4?s=mp4-640x640-is&k=20&c=8_aVq6srAOvmYrRZzREBworUlQyPdI6fxJkP-xax7Cg=",
   
   'https://player.vimeo.com/progressive_redirect/playback/697585545/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=b2df8cbec2a3c50ab06aab66ec38bebb18d64f83da96ea7ccda17c9c26637425',
  
  'https://player.vimeo.com/external/145131537.sd.mp4?s=b1074b082ccfd63f16aab362a9650fbea93fc16f&profile_id=112',
  "https://player.vimeo.com/progressive_redirect/playback/176277723/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=3ade5b83182d40172e9f74b96aad0234f724bed30520a8be24e96ea6b46e2229",
  "https://player.vimeo.com/external/291585321.hd.mp4?s=49d2dc0d56d5c49f38af956d4f338d1c8f27cc6b&profile_id=174",
"https://player.vimeo.com/external/155244112.sd.mp4?s=d336b7e38280b9a787c198b737b4c0f596e65809&profile_id=112",
"https://player.vimeo.com/external/152081339.sd.mp4?s=f38bc568b96cacd27ac4165b6a64eb8fa5d98160&profile_id=112",
"https://player.vimeo.com/external/407595474.sd.mp4?s=8a9ad9ea95d9c5f7099e861281650808f1a63c56&profile_id=164",
"https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882",
"https://player.vimeo.com/progressive_redirect/playback/573496156/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=17b4f263d58813ca6c38534c2a94a3f5890e8bc99049f5e8dd306c5c83cc52f9",
"https://player.vimeo.com/progressive_redirect/playback/266806346/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=ba6b5f76203ff7f0db4cb8805846b3bbe4769efea5e16a8f57fb2a36ddb81348",
"https://player.vimeo.com/progressive_redirect/playback/320725678/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=bde0f80383b8163dd6d6b259f17ce20ae276ae8d64c59b72896cbafded46f8b0",
"https://player.vimeo.com/external/476396206.sd.mp4?s=f1ddea0aae1637e865fc7fe8472ecc48eedfaefe&profile_id=164",
"https://player.vimeo.com/external/649311088.hd.mp4?s=c0a4fbd18d2add44dd8e4d2a2eb0aa6c1ae891c2&profile_id=174&oauth_token_id=1027659655"

   
    
  ];

  const [videoSrc,setVideoSrc] = useState(videosArr[0])

  return (
   <Stack direction={['column','row']} h={'100vh'}>
      
      <VStack w={'full'} >
        <video 
        style={{width:'100%'}}
        controls 
        controlsList='nodownload'
        src={videoSrc}>

        </video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'} >
            <Heading>Sample Video 1</Heading>
            <Text>
                This is a sample video for testing and demo.This is called description.
            </Text>
        </VStack>

      </VStack>

      <VStack 
       w={['full','xl']}
       alignItems={'stretch'}
       p='8'
       spacing={'8'}
       overflowY={'auto'}
       >
       {videosArr.map((item,index) => (
            <Button variant={'ghost'} colorScheme={'purple'} onClick={()=>setVideoSrc(item)}>Lecture {index+1}</Button>
        ))
       };
       </VStack>
   </Stack>
  )
}

export default Videos
