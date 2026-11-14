# MiMo-V2.5-Free — findings by Hy3

**Source:** Web research (SMZDM, Baidu Baijiahao, CSDN, Zhihu) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
MiMo-V2.5-Free is Xiaomi's free/limited-time tier of the MiMo-V2.5 model series (flagship MiMo-V2.5-Pro is a 1T-parameter MoE with 1M-token context), released 2026-04-23. The "Free" option integrates with OpenCode and brings the 1M-context capability into the terminal for local AI coding. The series emphasizes agentic programming and token efficiency — claimed 40–60% fewer tokens than Claude Opus / Gemini Pro for the same coding task. MiMo Code + MiMo-V2.5-Pro reportedly beat Claude Code + Claude Sonnet 4.6 on three offline benchmarks, with a >65% win rate on long tasks beyond 200 steps.

## Model card
- **Vendor:** Xiaomi (小米)
- **Release:** 2026-04-23 (series); Free tier later
- **Family:** MiMo-V2.5 (Pro = 1T MoE, 1M context)
- **Modalities:** Text (coding-focused)
- **Integration:** OpenCode; 1M context in terminal
- **Tier:** Free / limited-time

## Raw benchmarks

### Agent
- MiMo Code agent (OpenCode-based) with long-horizon execution; >65% win rate past 200 steps vs Claude Code.

### Reasoning
- Reasoning tuned for code correctness; token-efficient.

### Coding
- MiMo Code + MiMo-V2.5-Pro beat Claude Code + Sonnet 4.6 on 3 offline benchmarks; 40–60% fewer tokens per task.

### Long context
- **Context window:** 1,000,000 tokens (Pro tier; Free inherits the long-context capability).

## Normalized scores
- **Tool use: 84/100.** MiMo Code agent with long-horizon execution.
- **Reasoning: 80/100.** Code-correctness reasoning; no isolated general headline.
- **Context window: 94/100.** 1M-token context in terminal.
- **Multimodal: 72/100.** Coding-focused; text-centric.
- **Coding: 84/100.** Beats Claude Code on long tasks; token-efficient.
- **Cost efficiency: 95/100.** Free tier + 40–60% token savings — exceptional value.
- **Overall Score: 82.8/100.** Mean of the five quality dims (84+80+94+72+84 = 414 / 5 = 82.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://post.m.smzdm.com/p/am9gqrdk/
  - https://baijiahao.baidu.com/s?id=1863910813092016327&wfr=spider&for=pc
  - https://blog.csdn.net/weixin_35756690/article/details/170590443
  - https://blog.csdn.net/qq1137623160/article/details/161474201
  - https://zhuanlan.zhihu.com/p/2048685476811485846
