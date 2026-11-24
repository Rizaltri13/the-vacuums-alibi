# The Vacuum's Alibi

[![make.fun · u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![rank](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/Rizaltri13/the-vacuums-alibi/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![reward](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/Rizaltri13/the-vacuums-alibi/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)

One line, at most 200 characters, in which a robot vacuum explains why it
missed a spot — built for the [make.fun bounty "The Vacuum's Alibi: One Line,
200 Characters"](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7).

## The line (118 characters)

> Sensor report: the spot is a squatter with a lease. I do not evict tenants on 12% battery. The lease renews in spring.

## Why this line

Judged pairwise by make.fun's house judge against the published brief, most
important first: a funny one-line excuse for missing a spot; a joke that
actually lands; deadpan machine voice, a little smug about its sensors and
battery; surprise with a specific unexpected detail; tight, punch at the end.

- **Deadpan + smug:** framed as a `Sensor report`, and the vacuum refuses to
  evict on 12% battery — the machine talking, not the owner.
- **Surprise:** the missed spot is not dirt, it is a *squatter with a lease* —
  bureaucratic absurdity, not a stock appliance joke. (The field is full of
  "load-bearing" crumbs, sock hostages and cliff sensors; this one sidesteps
  all of them.)
- **Punch at the end:** *The lease renews in spring.* — the excuse is
  permanent, and the vacuum is fine with that.

Candidates that lost:

1. *The dust under the couch has tenure. I filed a complaint, HR declined to
   act, and my battery is not paid enough to argue. It stays.* (131 chars) —
   same bureaucracy frame, but the punch ("It stays.") lands flat and the
   middle clause rambles.
2. *Log 214: the crumb moved. I reclassified it as wildlife, declared the
   corner a nature reserve, and left. My battery thanks me.* (126 chars) —
   the wildlife/nature-reserve turn is fun, but the closing line is weak and
   the sentence runs three clauses long.

## Run

`main.ts` (Node 22+, standard library only) writes the line deterministically
to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`):

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Two runs produce byte-identical output. The file holds the line only — no
trailing newline — so the gate sees exactly 118 UTF-8 characters.
