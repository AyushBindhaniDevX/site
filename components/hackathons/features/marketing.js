import { Button, Box, Container, Heading, Flex, Grid, Text } from 'theme-ui'
import styled from '@emotion/styled'
import usePrefersMotion from '../../../lib/use-prefers-motion'
import useHasMounted from '../../../lib/use-has-mounted'
import { formatted } from '../../../lib/members'
import Link from 'next/link'
import theme from '@hackclub/theme'

const Content = () => (
  <Container
    sx={{
      textAlign: 'center',
      zIndex: 999,
      py: 6,
      color: 'white',
      'h2,p': { textShadow: 'text' },
      textAlign: [null, 'center'],
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <Text as="p" variant="eyebrow" sx={{ color: 'white', opacity: 0.75 }}>
      hackathons.hackclub.com
    </Text>
    <Heading as="h2" variant="title">
      Spread the word about your hackathon.
    </Heading>
    <Text as="p" variant="lead" sx={{ maxWidth: 'copyPlus', mx: 'auto' }}>
      Reach hackers worldwide by listing your event on the first Google search
      result for "high school hackathons." Your event will also be emailed to a
      network of high school hackers in your area.
    </Text>
    <Link href="https://hackathons.hackclub.com" passHref>
      <Button
        as="a"
        variant="ctaLg"
        sx={{
          backgroundImage: theme => theme.util.gx('yellow', 'red')
        }}
      >
        Add your hackathon →
      </Button>
    </Link>
  </Container>
)

const Cover = () => (
  <Box
    sx={{
      position: 'absolute',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      backgroundImage: t => t.util.gx('slate', 'black'),
      opacity: 0.7,
      zIndex: 1
    }}
  />
)

const Static = ({
  img = 'https://cloud-nykwtt0z7.vercel.app/2020-07-25_a1tcva4ch6mmr6j2cfmcb4e9ync3yhar.png'
  // img="https://cloud-re5hkabx0.vercel.app/2020-07-25_hn13qhejqrzu4n1jy9yacxxgrgp3wf5u.png"
}) => (
  <Box
    as="section"
    id="slack"
    sx={{
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover'
    }}
  >
    <Cover />
    <Content />
  </Box>
)

const Marketing = () => {
  const hasMounted = useHasMounted()
  const prefersMotion = usePrefersMotion()
  if (hasMounted && prefersMotion) {
    return (
      <Box
        as="section"
        id="slack"
        sx={{ overflow: 'hidden', position: 'relative' }}
      >
        <Box
          as="video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://cloud-ateizv565-hack-club-bot.vercel.app/0screen_shot_2022-07-27_at_2.57.41_pm.png"
          duration={2000}
          sx={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            zIndex: -1,
            width: '100vw',
            objectFit: 'cover'
          }}
        >
          <source
            src="https://cloud-55tm7eveg-hack-club-bot.vercel.app/0screen_recording_2022-07-27_at_2.48.43_pm.mp4"
            type="video/mp4; codecs=hevc"
          />
        </Box>
        <Cover />
        <Content />
      </Box>
    )
  } else {
    return <Static />
  }
}

export default Marketing
