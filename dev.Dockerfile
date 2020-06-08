FROM node:14.2.0-buster-slim

# Cache nodejs extensions
ARG USERNAME=node

RUN mkdir -p /home/$USERNAME/.vscode-server/extensions \
        /home/$USERNAME/.vscode-server-insiders/extensions \
    && chown -R $USERNAME \
        /home/$USERNAME/.vscode-server \
        /home/$USERNAME/.vscode-server-insiders

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install --no-install-recommends -y \
    ca-certificates \
    curl \
    git \
    gnupg \
    openssh-server \
    sudo \
    wget \
    zsh \
    locales \
    # Cypress dependenies
    libgtk2.0-0 \
    libgtk-3-0 \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb \
    # install Chinese fonts
    # this list was copied from https://github.com/jim3ma/docker-leanote
    fonts-arphic-bkai00mp \
    fonts-arphic-bsmi00lp \
    fonts-arphic-gbsn00lp \
    fonts-arphic-gkai00mp \
    fonts-arphic-ukai \
    fonts-arphic-uming \
    ttf-wqy-zenhei \
    ttf-wqy-microhei \
    xfonts-wqy \
    fonts-liberation \
    libappindicator3-1 \
    xdg-utils \
  # clean up
    && rm -rf /var/lib/apt/lists/*

RUN sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
    dpkg-reconfigure --frontend=noninteractive locales && \
    update-locale LANG=en_US.UTF-8

ENV LANG en_US.UTF-8 

# install Chrome browser
ENV CHROME_VERSION 81.0.4044.113
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add - >> /dev/null \
  && echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | sudo tee /etc/apt/sources.list.d/google-chrome.list \
  && apt-get update \
  && apt-get install -y google-chrome-stable

# "fake" dbus address to prevent errors
# https://github.com/SeleniumHQ/docker-selenium/issues/87
ENV DBUS_SESSION_BUS_ADDRESS=/dev/null

# Add zip utility - it comes in very handy
RUN apt-get update && apt-get install -y zip

# add codecs needed for video playback in firefox
# https://github.com/cypress-io/cypress-docker-images/issues/150
RUN apt-get install mplayer -y


RUN echo "deb http://deb.debian.org/debian/ unstable main contrib non-free" >> /etc/apt/sources.list \
    && touch /etc/apt/preferences.d/99pin-unstable \
    && echo "Package: *\n\
Pin: release a=stable\n\
Pin-Priority: 900\n\n\
Package: *\n\
Pin release a=unstable\n\
Pin-Priority: 10" >> /etc/apt/preferences.d/99pin-unstable \
    && apt-get update \
    && apt-get install -y -t unstable firefox

# disable shared memory X11 affecting Cypress v4 and Chrome
# https://github.com/cypress-io/cypress-docker-images/issues/270
ENV QT_X11_NO_MITSHM=1
ENV _X11_NO_MITSHM=1
ENV _MITSHM=0

RUN echo "node:node" | chpasswd && adduser node sudo \
    && echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

USER node

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

COPY --chown=node:node .zshrc /home/node/.zshrc

RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=~/commandhistory/.zsh_history" \
    && mkdir ~/commandhistory \
    && touch ~/commandhistory/.zsh_history \
    && chown -R node ~/commandhistory \
    && echo $SNIPPET >> "/home/node/.zshrc" 

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package-lock.json package.json ./

RUN npm install --silent

COPY --chown=node:node . .

CMD ["node", "index.js"]



