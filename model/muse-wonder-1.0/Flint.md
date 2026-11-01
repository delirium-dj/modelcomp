# Muse Wonder — findings by Flint

- Source: Meta Platforms, Inc. / Muse Wonder
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder / Muse Wonder Full
- **Short description:** Meta Superintelligence Labs' frontier agentic models — Muse Wonder and the stronger Muse Wonder Full — built for personal and professional AI agents (long-horizon coding, memory/focus, expert-domain knowledge work). Muse Wonder Full: top coding leaderboard performance (DeepSWE, SWE-Marathon) in independent third-party runs.
- **Provider / access:** Meta Model API (`meta/muse-wonder`), Muse Code (Wonder Full for subscribers); OpenRouter (`muse-wonder`); Vercel AI Gateway; developer hosts.
- **Release / knowledge:** Released 2026-10-12 (Meta Model API / Muse Code); Muse Wonder Full subscriber-only. Knowledge cutoff not verified in sources found.
- **IDs:** `meta/muse-wonder`; Wonder Full subscription tier of the same family.
- **Context window:** 1,048,576 tokens (1M) per Meta model card / dev hub; max output 128K (dev hub / earlier Muse Spark tiering).
- **Modalities:** Input text, image, video, audio; output text (model card); reasoning always on with six effort levels (minimal–max); tool calling; structured outputs.
- **Pricing (as of 2026-10-12):** Muse Wonder API $4.00/$20.00 per 1M input/output, cache hit $0.20; Muse Wonder Full $50/month (Muse Code subscribers; Power Usage / new Maximum Usage plans).

- **Architecture:** Proprietary (Wonder / Wonder Full); MoE (Wonder Open sibling is 816B total / 42B active MoE, multimodal, 1M, open weights — distinct release).

### Raw benchmarks found

Official (Meta — research.meta.ai model card, dev hub, FB news, Meta research blog Oct 12, 2026):

- Artificial Analysis Intelligence Index v4.3: Muse Wonder Full (max) **56**, Muse Wonder (max) **52** — material gains over Muse Spark 1.3 (max) **48**; Opus 5.5 leads at 58. Wonder Full tied with Claude Sonnet 5.5 (56) at top of open-weight... (AA: two points behind Opus 5.5, identical with Sonnet 5.5).
- Coding Agents Index: Wonder Full **68** (tie Claude Code + Sonnet 5.5, ahead Opus 5.5 66); Muse Wonder **63**; Muse Spark 1.3 was 54.
- DeepSWE v1.1: Wonder Full **79.0%** (DataCurves third-party; Opus 5.5 74.2, GPT-6 Astra 74.1).
- SWE-Marathon: Wonder Full **57.5%** (Opus 5.5 46.3, GPT-6 Astra 42.5).
- Harvey LAB-AA: Wonder Full results; MemoryBench 85.5.
- Gains: Terminal-Bench 4.0 33% → 57% (Wonder Full); GDPval-AA v2.1 1681 → 1857 Elo; AA-Briefcase 1729 Elo; AutomationBench-AA 71%; SciCode 63.

Independent (Artificial Analysis, Plotly, RankLLMs, systemcard.io, deeplearning.ai, LMArena, benchgap):

- AA Intelligence Index v4.3: Wonder Full 56 / Wonder 52 (max); gains on all ten index evals; largest agentic gains (TB 33%→57%, GDPval 1681→1857).
- Cost per Intelligence Index task: Muse Wonder **$4.52** (Wonder Full not API-priced, subscription).
- AA-Omniscience: Wonder Full 30 / Wonder 25 (8th/10th); Muse Spark 1.3 48→? hallucination context.
- RankLLMs: Muse Wonder composite **60.8**; DeepSWE 78.8%, GPQA Diamond 92.4%, MATH-500 89.0, OSWorld 72.6, BrowseComp 89.5, GDPVal 1890 Elo, Terminal-Bench 2.1 52.0.
- Benchgap: AA Intelligence Index 43.3 for Muse Wonder (different measurement set/version).
- LMArena: Muse Wonder Elo **1507** (3rd, Oct 28, 2026) — behind Gemini 4 Argon 1520, Opus 5.5 1509.

Cross-source comparison & conflicts:

- Meta claims SOTA on personal/professional agents; AA independent index shows Wonder Full 56 (2nd behind Opus 5.5) and Muse Wonder 52 — both material gains over Spark 1.3 (48).
- Wonder vs Wonder Full are distinct: Full = SOTA coding (DeepSWE 79 > every other model evaluated), Wonder = broader agentic tier.
- AA Index versions differ (v4.3 at launch vs v5 later for other models); Muse Wonder figures from Oct 12 launch window.

### Normalized scores (1–100)

- **Tool use: 70/100.** DeepSWE 79.0%, Terminal-Bench 4.0 57%, GDPval-AA 1857 Elo, Coding Agents Index 68 (Full) — frontier agentic tool use.
- **Reasoning: 80/100.** AA Intelligence Index Wonder Full 56 / Muse Wonder 52; GPQA Diamond 92.4–94.6; HLE ~52.9 — frontier-adjacent.
- **Context window: 100/100.** Documented 1M context (top tier).
- **Multimodal: 90/100.** Text, image, video, audio input; text output.
- **Coding: 78/100.** DeepSWE 79.0% (independent top), SWE-Marathon 57.5%, Terminal-Bench 4.0 57% — frontier coding.
- **Cost efficiency: 65/100.** Muse Wonder $4.00/$20.00 per MTok; Wonder Full $50/mo (no API price → cannot compute task cost).

- **Overall Score: 84/100.** Mean of the five quality dims (Tool 70 + Reasoning 80 + Context 100 + Multimodal 90 + Coding 78) / 5 = 83.6 → 84; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/muse-wonder)** — 2026-11-01
- Method: public web research prioritizing official model card/docs (Meta research.meta.ai Muse Wonder model card + dev hub, Meta research blog, FB news) plus independent benchmarks/reviews (Artificial Analysis, RankLLMs, benchgap, LMArena, systemcard.io) — three independent web searches.
- Reference URLs:
  - [Muse Wonder Model Card](https://research.meta.ai/static/muse-wonder-model-card)
  - [Muse Wonder: A Frontier Model For Personal & Professional AI Agents](https://research.meta.ai/blog/muse-wonder)
  - [Introducing Muse Wonder and Muse Wonder Full: Frontier Models for Agents](https://about.fb.com/news/2026/10/introducing-muse-wonder-models/)
  - [Artificial Analysis: Muse Wonder & Wonder Full](https://artificialanalysis.ai/articles/muse-wonder)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
