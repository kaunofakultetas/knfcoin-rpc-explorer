FROM node:20 as builder
WORKDIR /workspace
COPY . .
RUN npm install

FROM node:20-alpine
WORKDIR /workspace
COPY --from=builder /workspace .
RUN apk --update add git
# the repo is owned by root; allow git to read it when the container runs as another user (e.g. user: 1000:1000)
RUN git config --system --add safe.directory /workspace
CMD npm start
EXPOSE 3002
