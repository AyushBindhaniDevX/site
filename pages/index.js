import {
  Box,
  Button,
  Card,
  Grid,
  Heading,
  Flex,
  Badge,
  Link,
  Text
} from 'theme-ui'
import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Nav from '../components/nav'
import BGImg from '../components/background-image'
import ForceTheme from '../components/force-theme'
import Footer from '../components/footer'
import Stage from '../components/stage'
import Carousel from '../components/index/carousel'
import Outernet from '../components/index/cards/outernet'
import Sprig from '../components/index/cards/sprig'
import Sinerider from '../components/index/cards/sinerider'
import SprigConsole from '../components/index/cards/sprig-console'
import Clubs from '../components/index/cards/clubs'
import Workshops from '../components/index/cards/workshops'
import Bank from '../components/index/cards/bank'
import Hackathons from '../components/index/cards/hackathons'
import OuternetImgFile from '../public/home/outernet-110.jpg'
import Announcement from '../components/announcement'
import Konami from 'react-konami-code'
import JSConfetti from 'js-confetti'
import Secret from '../components/secret'
import MailingList from '../components/index/cards/mailing-list'
import Slack from '../components/index/cards/slack'
import Icon from '../components/icon'
import GitHub from '../components/index/github'
import Photo from '../components/photo'
import Comma from '../components/comma'
import Haxidraw from '../components/index/cards/haxidraw'

/** @jsxImportSource theme-ui */

function Page({
  hackathonsData,
  bankData,
  slackData,
  gitHubData,
  gitHubDataLength,
  consoleCount,
  stars,
  // githubData2,
  dataPieces,
  game,
  gameTitle,
  events,
  carouselCards
}) {
  let [gameImage, setGameImage] = useState('')
  let [gameImage1, setGameImage1] = useState('')
  let [reveal, setReveal] = useState(false)
  const [hover, setHover] = useState(true)
  let [github, setGithub] = useState(0)
  let [slackKey, setSlackKey] = useState(0)
  let [key, setKey] = useState(0)

  let jsConfetti = useRef()

  useEffect(() => {
    jsConfetti.current = new JSConfetti()

    window.kc = `In the days of old, when gaming was young \nA mysterious code was found among \nA sequence of buttons, pressed in a row \nIt unlocked something special, we all know \n\nUp, up, down, down, left, right, left, right \nB, A, Start, we all have heard it's plight \nIn the 8-bit days, it was all the rage \nAnd it still lives on, with time, it will never age \n\nKonami Code, it's a legend of days gone by \nIt's a reminder of the classics we still try \nNo matter the game, no matter the system \nThe code will live on, and still be with them \n\nSo the next time you play, take a moment to pause \nAnd remember the code, and the Konami cause \nIt's a part of gaming's history, and a part of our lives \nLet's keep it alive, and let the Konami Code thrive!\n`
    window.paper = `Welcome, intrepid hacker! We'd love to have you in our community. Get your invite at hack.af/slack. Under "Why do you want to join the Hack Club Slack?" add a 🦄 and we'll ship you some exclusive stickers! `
  }, [])

  const easterEgg = () => {
    alert('Hey, you typed the Konami Code!')

    jsConfetti.current.addConfetti({
      confettiColors: [
        // Hack Club colours!
        '#ec3750',
        '#ff8c37',
        '#f1c40f',
        '#33d6a6',
        '#5bc0de',
        '#338eda',
        '#a633d6'
      ]
    })
  }

  useEffect(() => {
    if (reveal && !hover) {
      setTimeout(() => {
        setReveal(false)
      }, 2000)
    }
  }, [reveal, hover])

  const [count, setCount] = useState(0)

  let images = [
    { alt: 'Map of Hack Clubs around the world', src: '/home/map.png' },
    {
      alt: 'Hack Clubbers at SpaceX HQ in LA',
      src: '/home/zephyr-spacex.jpeg'
    },
    {
      alt: 'MA Hacks, Hack Clubber organized hackathon',
      src: '/hackathons/mahacks.jpeg'
    },
    { alt: 'AMA with Sal Khan', src: '/home/ama.png' },
    { alt: 'Hack Clubbers at Flagship, 2019', src: '/home/flagship_4.jpg' }
  ]

  // janky right now and does not show last image

  useEffect(() => {
    console.log(
      `White sheets of paper\nWaiting to be printed on\nA blank console waits`
    )
    if (count === images.length - 1) {
      setCount(0)
    }
  }, [count, images.length])

  return (
    <>
      <Meta
        as={Head}
        title="Kalinga International"
      />

      <ForceTheme theme="light" />
      <Nav />
      <Box
        as="main"
        sx={{
          overflowX: 'hidden',
          position: 'relative'
        }}
      >
        <Secret
          reveal={reveal}
          onMouseEnter={() => {
            setHover(true)
          }}
          onMouseOut={() => {
            setHover(false)
          }}
        />


        <Box
          as="header"
          sx={{
            bg: 'dark',
            pt: [5, 6],
            pb: [2, 3],
            textAlign: 'left',
            position: 'relative',
            overflowX: 'hidden'
          }}
        >
          <BGImg
            src="https://gtmun.gatech.edu/wp-content/uploads/2022/10/IMG_1294-1-scaled-e1668277593494.jpg"
            alt=""
            priority
            gradient="linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.45))"
          />

          <Box
            sx={{
              width: '90vw',
              maxWidth: [null, 'layout'],
              position: 'relative',
              mx: 'auto',
              py: [4, 4, 4],
              textShadow: 'text'
            }}
          >
            <Text
              variant="eyebrow"
              sx={{
                color: 'sunken',
                pb: 2,
                position: 'relative',
                display: 'block'
              }}
              as="h4"
            >
              Welcome to Kalinga International
            </Text>
            <Heading>
              <Text
                as="h1"
                variant="title"
                sx={{
                  color: 'white',
                  mb: [3, 4],
                  zIndex: 1,
                  textAlign: 'left',
                  fontSize: ['42px', '52px', '64px'],
                  lineHeight: 1.2,
                  width: '100%'
                }}
              >
                We are <Comma>{slackData.total_members_count}</Comma>{' '}
                <Text
                  sx={{
                    color: 'transparent',
                    ml: 2,
                    mr: 3,
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Text
                    
                    sx={{
                      // lineHeight: 0.875,
                      px: 2,
                      backgroundColor: 'red',
                      position: 'absolute',
                      borderRadius: 10,
                      transform: 'rotate(-3deg) translateY(-5px)',
                      color: 'white',
                      whiteSpace: 'nowrap',
                      textDecoration: 'none',
                      '&:hover': {
                        cursor: 'pointer'
                      }
                    }}
                    aria-hidden="true"
                  >
                    teens
                  </Text>
                  teens
                </Text>
                <br sx={{ display: ['inline', 'none', 'none'] }} /> from around
                the world
              </Text>
              
            </Heading>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: ['flex-start', 'flex-start', 'flex-end'],
              marginRight: 2,
              mt: [4, 3, 1]
            }}
          >
         
          </Box>
        </Box>
        <Box as="section" sx={{ py: [4, 5, '82px'], color: 'black' }}>
          <Box
            sx={{
              position: 'relative',
              width: '90vw',
              maxWidth: 'layout',
              margin: 'auto'
            }}
          >
            <Text
              variant="title"
              as="h1"
              sx={{ fontSize: ['36px', '48px', '56px'] }}
            >
              We are a global community of young minds from around the world, united by a shared passion for debate, critical thinking, and effective communication. At Kalinga International Debate Club (KIDC), we believe in harnessing the power of discourse and argumentation to make a positive impact on the world. Whether you're just starting your journey in debate or you're an experienced debater, KIDC is the place where you can discover the art of persuasion, learn, and grow together.


            </Text>
            <Text
              variant="subtitle"
              as="p"
              sx={{
                fontSize: ['18px', '20px', '22px'],
                pb: [3, 3, 4],
                maxWidth: '62ch'
              }}
            >
              Every day, thousands of Hack&nbsp;Clubbers gather online and
              in-person to make things with code. Whether you’re a beginner
              programmer or have years of experience, there’s a place for you at
              Hack&nbsp;Club. Read about our{' '}
              <Link href="/philosophy" target="_blank" rel="noopener">
                hacker ethic
              </Link>
              .
            </Text>
            <Grid columns={[1, 1, 1, '2.5fr 3fr']} gap={[0, 3, 4]} pt={[3, 4]}>
              <Box
                sx={{
                  position: 'relative',
                  height: ['300px', '300px', '300px', '100%'],
                  py: [3, 3, 3, 0]
                }}
                onClick={() => {
                  setCount(count + 1)
                }}
              >
                
                  <Box
                    sx={{
                      position: 'relative',
                      height: ['300px', '300px', '100%'],
                      figure: {
                        position: 'absolute',
                        transform:
                          count % 2 === 0 ? 'rotate(3deg)' : 'rotate(-3deg)',
                        height: '85%',
                        width: ['80%', '80%', '70%', '100%'],
                        marginLeft: ['10%', '10%', '15%', '0']
                      },
                      zIndex: 3,
                      '&:hover': {
                        cursor: 'pointer'
                      }
                    }}
                  >
                    <Photo
                      src={images[count].src}
                      alt={images[count].alt}
                      width={3000}
                      height={2550}
                      showAlt
                    />
                  </Box>
                </Box>
              </Box>
              <Grid
                columns="1fr"
                sx={{
                  gridColumnGap: 3,
                  span: {
                    width: 36,
                    height: 36,
                    borderRadius: 24,
                    display: 'inline-block',
                    fontSize: 2,
                    lineHeight: '30px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    border: '3px solid currentColor'
                  },
                  p: { my: 0, fontSize: ['18px', '20px', '22px'] },
                  strong: { display: 'block', fontSize: ['22px', 2, 3] }
                }}
                as="ul"
              >
                <Grid
                  columns="auto 1fr"
                  sx={{
                    transitionDuration: '0.52s',
                    py: 2,
                    px: 2,
                    color: 'inherit',
                    position: 'relative',
                    textDecoration: 'none',
                    borderRadius: 'extra'
                  }}
                  as="li"
                >
                  <Text as="span" color="red" aria-hidden="true">
                    1
                  </Text>
                  <Text as="p" variant="subtitle">
                    <strong sx={{ mb: 1 }}>
                      Connect with Other Teenage Debaters
                    </strong>
                    Need help with your debating skills or looking for feedback on your arguments? Our global Slack community, similar to Discord, is active 24/7, filled with hundreds of talented individuals who are eager to connect and engage in robust debates.
                  </Text>
                </Grid>
                <Grid
                  columns="auto 1fr"
                  sx={{
                    transitionDuration: '0.52s',
                    py: 2,
                    px: 2,
                    color: 'inherit',
                    position: 'relative',
                    textDecoration: 'none',
                    borderRadius: 'extra'
                  }}
                  as="li"
                >
                  <Text as="span" color="orange" aria-hidden="true">
                    2
                  </Text>
                  <Text
                    as="p"
                    variant="subtitle"
                    sx={{
                      mt: 0
                    }}
                  >
                    <strong sx={{ mb: 1 }}>
Promote Open Source Debate Resources                   </strong>We take pride in creating and sharing open source debate resources. Join us in contributing to projects that enhance the world of debating, from argument templates to research databases.
                  </Text>
                </Grid>
                <Grid
                  columns="auto 1fr"
                  sx={{
                    transitionDuration: '0.52s',
                    py: 2,
                    px: 2,
                    color: 'inherit',
                    position: 'relative',
                    textDecoration: 'none',
                    borderRadius: 'extra'
                  }}
                  as="li"
                >
                  <Text as="span" color="yellow" aria-hidden="true">
                    3
                  </Text>
                  <Text as="p" variant="subtitle">
                    <strong sx={{ mb: 1 }}>Gather In Real Life (IRL) with Other Debaters</strong>While our online community is vibrant, we also value in-person connections. KIDC has over 400+ local chapters called "Debate Clubs" and hosts debate competitions and public speaking events worldwide. These events are where you can meet fellow debaters in your community and engage in spirited debates on various topics.
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Carousel cards={carouselCards} />
        <Box
          as="section"
          sx={{
            background: 'snow',
            backgroundImage: `url('https://icons.hackclub.com/api/icons/0xF4F7FB/glyph:rep.svg')`,
            backgroundSize: '40px 40px',
            backgroundRepeat: 'repeat',
            backgroundPosition: '10% 10%'
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '90vw',
              maxWidth: 'layout',
              margin: 'auto'
            }}
            py={[4, 4, 5]}
          >
            <Box>
              <Text variant="title" sx={{ fontSize: ['36px', 4, 5] }}>
                Connect with{' '}
                <Text
                  as="span"
                  sx={{
                    borderRadius: 'default',
                    px: 2,
                    mx: 0,
                    whiteSpace: 'nowrap',
                    color: 'white',
                    bg: 'red'
                  }}
                >
                  builders
                </Text>{' '}
                from around the world
              </Text>
              <Text
                variant="subtitle"
                as="p"
                sx={{ fontSize: ['18px', '20px', '22px'], pb: [3, 0, 0] }}
              >
                We gather both online and in-person to share our love of code
                and make things together!
              </Text>
            </Box>
            <Outernet />
            <Slack slackKey={slackKey} data={slackData} events={events} />
          </Box>
        </Box>
        <Box>
          <Box py={[4, 5, '82px']}>
            <Box
              sx={{
                width: '90vw',
                maxWidth: 'layout',
                margin: 'auto',
                position: 'relative'
              }}
            >
              <Flex
                sx={{
                  flexDirection: ['column', 'column', 'column', 'row'],
                  justifyContent: gitHubData ? 'center' : 'flex-start',
                  alignItems: [
                    'flex-start',
                    'flex-start',
                    'flex-start',
                    'center'
                  ],
                  gap: '10px'
                }}
              >
                <Box sx={{ mb: [3, 0, 0] }}>
                  <Text
                    variant="title"
                    as="h2"
                    sx={{
                      fontSize: ['36px', '48px', '56px'],
                      maxWidth: '20ch'
                    }}
                  >
                    We build{' '}
                    <Text
                      as="span"
                      sx={{
                        borderRadius: 'default',
                        mx: 0,
                        whiteSpace: 'nowrap',
                        color: 'orange'
                      }}
                    >
                      open source
                    </Text>{' '}
                    games and tools together
                  </Text>
                  <Text
                    variant="subtitle"
                    as="p"
                    sx={{
                      fontSize: ['18px', '20px', '22px'],
                      pb: [3, 0, 0],
                      maxWidth: '60ch'
                    }}
                  >
                    In collaboration with engineers on the Hack&nbsp;Club team,
                    Hack Clubbers build learning tools for each other. Get
                    involved with these projects by building something with our
                    tools or contribute to the tools themselves.
                  </Text>
                </Box>
                {gitHubData && (
                  <Flex
                    sx={{
                      flexDirection: ['row', null, null, 'column'],
                      gap: [1, 2, 2],
                      alignItems: ['center', 'center', 'center', 'flex-start'],
                      flexWrap: 'wrap',
                      width: ['100%', null, null, 'fit-content'],

                      '& > a:nth-child(n+4)': {
                        display: ['none', null, null, 'flex']
                      }
                    }}
                  >
                    <Text
                      sx={{
                        fontSize: ['11px', '11px', '14px'],
                        textAlign: 'left',
                        lineHeight: '90%',
                        fontStyle: 'italic',
                        width: 'fit-content'
                      }}
                    >
                      Live from GitHub
                    </Text>
                    {gitHubData
                      .filter(data => !data.user.endsWith('[bot]'))
                      .slice(0, 4)
                      .map((data, key) => {
                        return (
                          <GitHub
                            type={data.type}
                            img={data.userImage}
                            user={data.user}
                            time={data.time}
                            message={data.message}
                            key={key}
                          />
                        )
                      })}
                  </Flex>
                )}
              </Flex>
              <Sprig
                delay={100}
                stars={stars.sprig.stargazerCount}
                game={game}
                gameImage={gameImage}
                gameImage1={gameImage1}
              />
              <Haxidraw />
              <Sinerider delay={200} stars={stars.sinerider.stargazerCount} />
              <Box as="section" id="sprig">
                <SprigConsole
                  delay={300}
                  stars={stars.sprigHardware.stargazerCount}
                  consoleCount={consoleCount}
                />
              </Box>
              <Workshops delay={400} stars={stars.hackclub.stargazerCount} />
            </Box>
          </Box>
          <Box
            sx={{
              position: 'relative',
              background: 'snow',
              backgroundImage: `url('https://icons.hackclub.com/api/icons/0xF4F7FB/glyph:rep.svg')`,
              backgroundSize: '40px 40px',
              backgroundRepeat: 'repeat',
              backgroundPosition: '10% 10%'
              // '&:hover': {
              //   backgroundImage: `url('https://icons.hackclub.com/api/icons/0x000000/glyph:rep.svg')`
              // }
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0
              }}
            >
              {}
            </Box>
            <Box
              py={[4, 5, '82px']}
              sx={{
                width: '90vw',
                maxWidth: 'layout',
                margin: 'auto',
                position: 'relative'
              }}
            >
              <Box>
                <Text
                  variant="title"
                  as="h2"
                  sx={{
                    fontSize: ['36px', '48px', '72px'],
                    width: '18ch',
                    textAlign: 'center',
                    margin: 'auto'
                  }}
                >
                  Find your{' '}
                  <Text
                    as="span"
                    sx={{
                      borderRadius: 'default',
                      mx: 0,
                      whiteSpace: 'nowrap',
                      color: 'orange'
                    }}
                  >
                    IRL community.
                  </Text>
                </Text>
                <Text
                  variant="subtitle"
                  as="p"
                  sx={{
                    fontSize: ['18px', '24px', '32px'],
                    margin: 'auto',
                    pt: 2,
                    textAlign: 'center'
                  }}
                >
                  Thousands of Hack Clubbers organize and participate in
                  hackathons and after school coding clubs.
                </Text>
              </Box>
              <Clubs />
              <Hackathons
                delay={400}
                data={hackathonsData}
                stars={stars.hackathons.stargazerCount}
              />
              {/* <Events events={events} /> */}
              <Bank data={bankData} />
            </Box>
          </Box>
        </Box>
        <Box py={[4, 5, '82px']}>
          <Box
            sx={{
              width: '90vw',
              maxWidth: 'layout',
              margin: 'auto'
            }}
          >
            <Box>
              <Text
                as="p"
                variant="eyebrow"
                sx={{ fontSize: ['22px', 2, 3], textAlign: 'center' }}
              >
                We've got a lot going on - Let’s recap
              </Text>
              <Text
                variant="title"
                as="h2"
                sx={{
                  fontSize: ['36px', '48px', '72px'],
                  width: '16ch',
                  textAlign: 'center',
                  margin: 'auto'
                }}
              >
                Find your second home at{' '}
                <Text
                  as="span"
                  sx={{
                    borderRadius: 'default',
                    ml: 0,
                    whiteSpace: ['wrap', 'nowrap'],
                    background: theme => theme.util.gx('red', 'orange'),
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent'
                  }}
                >
                  Hack&nbsp;Club
                </Text>
              </Text>
            </Box>
            <Grid
              pt={[3, 4]}
              pb={[4, 5]}
              gap={3}
              columns={[1, 2, 3]}
              sx={{
                textAlign: 'left',
                '> a, > div': {
                  borderRadius: 'extra',
                  boxShadow: 'elevated',
                  p: [3, null, 4]
                },
                span: {
                  boxShadow:
                    '-2px -2px 6px rgba(255,255,255,0.125), inset 2px 2px 6px rgba(0,0,0,0.1), 2px 2px 8px rgba(0,0,0,0.0625)'
                },
                svg: { fill: 'currentColor' }
              }}
            >
              <Card
                as="a"
                href="/slack"
                target="_blank"
                rel="noopener"
                variant="interactive"
                sx={{
                  background:
                    'linear-gradient(32deg, rgba(51, 142, 218, 0.9) 0%, rgba(51, 214, 166, 0.9) 100%)',
                  color: 'white',
                  svg: { color: 'rgb(51, 142, 218)' },
                  position: 'relative',
                  '.icon': {
                    transition:
                      'transform 0.25s ease-in-out, opacity 0.25s ease-in-out'
                  },
                  ':hover,:focus': {
                    '.icon': {
                      transform: 'translateX(28px) translateY(-28px)',
                      opacity: 0
                    }
                  }
                }}
              >
                <Icon
                  glyph="external"
                  size={32}
                  className="icon"
                  sx={{
                    position: 'absolute',
                    top: 2,
                    right: 2,
                    opacity: 0.3,
                    fontSize: ['18px', '20px', '22px'],
                    zIndex: 3,
                    color: 'white !important'
                  }}
                />
                <Stage
                  icon="slack"
                  color="white"
                  name="Join Our Slack"
                  desc="Connect with other technical teenagers on Slack and hack on things together."
                  sx={{
                    p: {
                      fontSize: ['18px', '20px', '22px']
                    },
                    h3: {
                      fontSize: ['22px', 2, 3]
                    }
                  }}
                />
              </Card>
              <Card
                sx={{
                  background:
                    'linear-gradient(-32deg, #6f31b7 14%, #fb558e 82%)',
                  color: 'white',
                  svg: { color: '#fb558e' },
                  textDecoration: 'none',
                  position: 'relative',
                  '.icon': {
                    transition:
                      'transform 0.25s ease-in-out, opacity 0.25s ease-in-out'
                  },
                  ':hover,:focus': {
                    '.icon': {
                      transform: 'translateX(28px) translateY(-28px)',
                      opacity: 0
                    }
                  }
                }}
                as="a"
                href="https://github.com/hackclub"
                variant="interactive"
                target="_blank"
                rel="noopener"
              >
                <Icon
                  glyph="external"
                  size={32}
                  className="icon"
                  sx={{
                    position: 'absolute',
                    top: 2,
                    right: 2,
                    opacity: 0.3,
                    fontSize: [1, '16px', '20px'],
                    zIndex: 3,
                    color: 'white !important'
                  }}
                />
                <Stage
                  icon="github"
                  color="white"
                  name="Explore Our Open Source Tools"
                  desc="We’re currently building a game engine, daily streak system, graphing game, and more!"
                  sx={{
                    p: {
                      fontSize: [1, '16px', '20px']
                    },
                    h3: {
                      fontSize: ['22px', 2, 3]
                    }
                  }}
                />
              </Card>
              <Card
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(255, 140, 55, 0.9) 0%, rgba(236, 55, 80, 0.9) 100%)',
                  color: 'white',
                  svg: { color: 'rgb(236, 55, 80)' },
                  textDecoration: 'none',
                  position: 'relative',
                  '.icon': {
                    transition:
                      'transform 0.25s ease-in-out, opacity 0.43s ease-in-out'
                  },
                  ':hover,:focus': {
                    '.icon': {
                      transform: 'translateX(28px) translateY(-28px)',
                      opacity: 0
                    }
                  }
                }}
                as="a"
                href="/clubs"
                variant="interactive"
                target="_blank"
                rel="noopener"
              >
                <Icon
                  glyph="external"
                  size={32}
                  className="icon"
                  sx={{
                    position: 'absolute',
                    top: 2,
                    right: 2,
                    opacity: 0.3,
                    fontSize: ['18px', '20px', '22px'],
                    zIndex: 3,
                    color: 'white !important'
                  }}
                />
                <Stage
                  icon="clubs"
                  color="white"
                  name="Start A Club"
                  desc="Build an in-person community of high school hackers, and we’re here to help."
                  sx={{
                    p: {
                      fontSize: ['18px', '20px', '22px']
                    },
                    h3: {
                      fontSize: ['22px', 2, 3]
                    }
                  }}
                />
              </Card>
            </Grid>
          </Box>
        </Box>
      </Box>
      <MailingList />
      <Footer
        dark
        sx={{
          backgroundColor: 'dark',
          position: 'relative',
          overflow: 'hidden',
          textShadow: '0 1px 2px rgba(0,0,0,0.375)',
          'h2,span,p,a': { color: 'white !important' },
          '> div img': { objectPosition: ['left', 'center'] },
          svg: {
            fill: 'white',
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.25))'
          }
        }}
      >
        <style>
          {`a{
          color: #338eda
        }`}
        </style>
      </Footer>
    </>
  )
}
const withCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export async function getStaticProps() {
  const carouselCards = require('../lib/carousel.json')

  // HCB: get total raised
  let bankData = []
  let initialBankData = await fetch('https://bank.hackclub.com/stats').then(r =>
    r.json()
  )
  let raised = initialBankData.raised / 100

  bankData.push(
    `💰 ${raised.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })} raised`
  )

  // Slack: get total raised
  const { Slack: Slacky } = require('./api/slack')
  let slackData = await Slacky()

  // GitHub: get latest github activity (currently this is erroring and
  // preventing the site from deploying

  const { fetchGitHub } = require('./api/github')
  let gitHubData = await fetchGitHub()

  //   let gitHubData = null

  // GitHub: get latest GitHub stars
  const { fetchStars } = require('./api/stars')
  let stars = await fetchStars()

  // Sprig: get newest games
  const { getGames } = require('./api/games')
  let game = await getGames()

  let gameTitle = []

  gameTitle = game.map(r => r.title)

  // Sprig: get console count
  const { getConsoles } = require('./api/sprig-console')
  const consoleCount = await getConsoles()

  // Hackathons: get latest hackathons
  const hackathonsData = await fetch(
    'https://hackathons.hackclub.com/api/events/upcoming'
  ).then(res => res.json())

  let events = await fetch(
    'https://events.hackclub.com/api/events/upcoming/'
  ).then(res => res.json())

  return {
    props: {
      game,
      gameTitle,
      gitHubData,
      consoleCount,
      hackathonsData,
      bankData,
      slackData,
      stars,
      events,
      carouselCards
    },
    revalidate: 60
  }
}

export default Page
