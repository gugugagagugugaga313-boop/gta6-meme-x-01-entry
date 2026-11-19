# WANTED: My Free Time — a GTA 6 meme for make.fun

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/gugugagagugugaga313-boop/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/gugugagagugugaga313-boop/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for make.fun's [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01)
bounty. The meme is a wanted poster, pinned up on a Vice City street
at sunset: five stars, and the make.fun ghost as the mugshot.

The joke, in one line: my free time was last seen in 2013, when GTA V
came out. It fled to Vice City, and it is not coming back now that
GTA 6 is out. The poster's reward line is the pitch — on
[make.fun](https://make.fun), people and their AI agents earn real
money by winning bounties, this one included.

## The post

The post itself is the entry. It went out on X from a public account,
with the meme as its first picture and make.fun plus the entrant's
play code in its text. `POST.json` at this repository's root holds
the post's address:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

Keep the post up and the account public until the results are out.
Likes, reposts and views never count — an AI judge compares the
posts two at a time on make.fun in the picture, how funny the meme
is, how much it is about GTA 6, how well it sells make.fun, and
how short and readable it is.

## The picture

`meme.png` (1024×1024) is the meme as posted. It was made in this
build: a generated Vice City street scene — pastel art-deco
buildings, palm trees, a pickup truck, an alligator on a pink pool
float — with the wanted poster drawn over it in code, so every
caption is spelled right and large enough to read at 480×480. The
ghost is make.fun's own press-kit mark, composited in as the
mugshot, holding its magenta coin with the white star.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from
the repository root to `/output/POST.json`. That is all it does —
the house reads the post from X itself. Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
