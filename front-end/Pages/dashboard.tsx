import React, { FunctionComponent } from 'react'
import baseClasses from './layout.module.scss'

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import effecthovermodulescss from 'dist/css/effecthover.module.scss'

const Dashboard: FunctionComponent = (props: any) => {
  const {
    history: navigation,
    match: { params },
  } = props
  const classes = baseClasses
  const [lang, setlang] = React.useState<any>('en')
  const theme = effecthovermodulescss

  React.useEffect(() => {
    if (typeof langStrings !== 'undefined') {
      setlang(langStrings[localStorage.getItem('aptugolang') || 'en'])
    }
  }, [])

  // Theme selection

  return (
    <React.Fragment>
      <div className={theme.pages}>
        <Container className={theme.container}>
          <div title="Title" className={theme.title}>
            Profile Card Hover Effect
          </div>

          <div title="Cards" className={theme.cards}>
            <div title="CardCero" className={theme.cardCero}>
              <div title="Border" className={theme.border}>
                <Typography variant="h2">Al Pacino</Typography>

                <div title="SocialIcons" className={theme.icons}>
                  <a target="_blank" href="https://www.instagram.com/al_pacino_40/">
                    <IconButton color="inherit" className={theme.fa}>
                      <InstagramIcon
                        sx={{
                          fontSize: '24px',
                        }}
                      />
                    </IconButton>
                  </a>

                  <a target="_blank" href="https://twitter.com/bestofpacino">
                    <IconButton color="inherit" className={theme.fa}>
                      <TwitterIcon
                        sx={{
                          fontSize: '24px',
                        }}
                      />
                    </IconButton>
                  </a>

                  <a target="_blank" href="https://www.facebook.com/Alpacino1491">
                    <IconButton color="inherit" className={theme.fa}>
                      <FacebookIcon
                        sx={{
                          fontSize: '24px',
                        }}
                      />
                    </IconButton>
                  </a>
                </div>
              </div>
            </div>

            <div title="Carduno" className={theme.cardUno}>
              <div title="Border" className={theme.border}>
                <Typography variant="h2">Ben Stiller</Typography>

                <div title="SocialIcons" className={theme.icons}>
                  <a target="_blank" href="https://www.instagram.com/benstiller/">
                    <IconButton color="inherit" className={theme.fa}>
                      <InstagramIcon
                        sx={{
                          fontSize: '24px',
                        }}
                      />
                    </IconButton>
                  </a>

                  <a target="_blank" href="https://twitter.com/BenStiller">
                    <IconButton color="inherit" className={theme.fa}>
                      <TwitterIcon
                        sx={{
                          fontSize: '24px',
                        }}
                      />
                    </IconButton>
                  </a>

                  <a target="_blank" href="https://www.facebook.com/BenStiller">
                    <IconButton color="inherit" className={theme.fa}>
                      <FacebookIcon
                        sx={{
                          fontSize: '24px',
                        }}
                      />
                    </IconButton>
                  </a>
                </div>
              </div>
            </div>

            <div title="CardDos" className={theme.cardDos}>
              <div title="Border" className={theme.border}>
                <Typography variant="h2">Patrick Stewart</Typography>

                <div title="SocialIcons" className={theme.icons}>
                  <a target="_blank" href="https://www.instagram.com/sirpatstew/">
                    <IconButton color="inherit" className={theme.fa}>
                      <InstagramIcon
                        sx={{
                          fontSize: '24px',
                        }}
                      />
                    </IconButton>
                  </a>

                  <a target="_blank" href="https://twitter.com/SirPatStew">
                    <IconButton color="inherit" className={theme.fa}>
                      <TwitterIcon
                        sx={{
                          fontSize: '24px',
                        }}
                      />
                    </IconButton>
                  </a>

                  <a target="_blank" href="https://www.facebook.com/patrickstewart">
                    <IconButton color="inherit" className={theme.fa}>
                      <FacebookIcon
                        sx={{
                          fontSize: '24px',
                        }}
                      />
                    </IconButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div title="Footer Inf" className={theme.footer_copyright}>
        © 2023, Creado por Carina Bosio con Aptugo
      </div>
    </React.Fragment>
  )
}

export default Dashboard
