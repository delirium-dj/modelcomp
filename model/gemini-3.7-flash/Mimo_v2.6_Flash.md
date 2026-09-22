# Gemini 3.7 Flash — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`google/gemini-3.7-flash`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's 2026-08-13 "most intelligent workhorse" Flash — three weeks after 3.6 Flash; large coding jumps (DeepSWE 49→65.3, FrontierCode Main 43.6 top-of-comparison-set) at introductory **$0.75/$3.75** (half of 3.6 list); free AI Studio/Zen tier; **price doubles 2027-01-01 to $1.50/$7.50**.
- **Provider / access:** Google AI Studio / Gemini API `gemini-3.7-flash`; Vertex AI; OpenCode Zen free tier (standard rate limits, meta); OpenRouter `google/gemini-3.7-flash` (+batch/flex).
- **Release / knowledge:** **2026-08-13** (Google blog + DeepMind model card). Knowledge cutoff not published in extracts.
- **IDs:** `google/gemini-3.7-flash`.
- **Context window:** **1,048,576** in / **~65.5K** out (AI Atlas OpenRouter rows "out 65.5K"; techjournal 64K output). AA sometimes lists 1,000,000 — conflict noted.
- **Modalities:** **text, image, audio, PDF in; text out** (meta — no native video in declared here; LVBench long-video row present in Google table suggests video understanding via API path — score image/audio/PDF band).
- **Pricing (as of 2026-09-22):** Intro **$0.75 in / $3.75 out per 1M** through **2026-12-31**; **2027-01-01: $1.50 / $7.50**. Batch/flex **$0.375 / $1.88** (halved); cache read $0.075; priority $1.35/$6.75. Free AI Studio + Zen free tier (meta).
- **Architecture:** proprietary Flash-tier (undisclosed params); thinking/reasoning budget typical of Gemini 3.x Flash line.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Google DeepMind model card (2026-08-13 comparison table) primary vendor; AA independent rows; BenchLM/Vals composites; eesel caveat: AA has **no** independent SWE-Verified/AIME/LiveCodeBench/MMLU-Pro for 3.7 Flash.

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google/AA independent high-effort — same number on AA scale; Vals Terminus-2 **77.5%**; AA also shows TB2.1 variants 79.78/78.28 by config)
- Terminal-Bench 3.0: **14.9%** (Google; vs Terra 20.8 — hard open-ended agents still weak)
- Terminal-Bench 4.0: **13.6%** (AA independent high — low)
- GDPval-AA v2: **1525 Elo** (Google/eesel/BenchLM — behind Sonnet 5 1598, Terra 1578, Muse 1.2 1628)
- AutomationBench: **30.4%** (Google private; vs 3.6 17.0)
- OSWorld-2.0: **47.9%** (Google; vs Terra 50.2)
- Harvey LAB-AA: **90.7%** (Google/BenchLM)
- Agents' Last Exam: **26.3%** (BenchLM — mid)
- MCP Atlas / Toolathlon / Tau3: no verified public score found for 3.7 Flash in this pass
- AA Agentic Index: **36.4** (BenchLM)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56** high effort (Google/eesel/emergent — +4 vs 3.6's 52; Sonnet 5 55, Terra 57, Muse 1.2 57)
- HLE-Verified: **53.6%** (Google — leads comparison set incl. Terra 51.1)
- CharXiv Reasoning (no tools): **84.5%** (Google — slight **loss** vs 3.6 85.2); with tools 88.7 (3.6 89.4)
- GDP.pdf (expert PDF): **34.0%** (Google — leads set)
- GPQA Diamond / MMLU-Pro / AIME: no verified public score found (AA gap per eesel)

Coding:

- DeepSWE v1.1: **65.3%** (Google/AA table; vs 3.6 48.6/49.0, Sonnet 5 53.8, Muse 54.9; **Terra 69.6 ahead**)
- FrontierCode 1.1 Main: **43.6%** (Google — **top of comparison set** vs Sonnet 5 42.7, Terra 41.3)
- Code Arena (WebDev Elo): **1588** (Google — leads set)
- AA Coding Index: **76.1** (BenchLM); AA-SciCode **57.2**; FrontierSWE v2 **20.3** (BenchLM — weak harder SWE)
- LiveCodeBench (Vals): **88.7**; SWE-bench (Vals): **80.8** (Vals platform — harness-specific)
- SWE-bench Verified / SWE-Pro official: no verified public score found (AA gap)

Long context:

- **1M / ~65K out**; **GDM-MRCR v2 @128k: 97.0%** (Google — **leads comparison set** incl. Terra 93.5, 3.6 91.8)

Multimodal:

- **text/image/audio/PDF in** (meta) + Google table LVBench **85.4%** long-video (vs Sonnet 5 68.5) — strong multimodal; CharXiv chart reasoning 84.5; GDP.pdf 34.0 → upper multimodal band

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 **85.8** (AA/Google) solid; AutomationBench 30.4 and OSWorld 47.9 mid-high; **TB3.0 14.9 / TB4.0 13.6** low on hardest terminal variants; GDPval 1525 trails Terra/Muse/Sonnet — strong Flash-tier tools, not Sol/Opus-5 class.
- **Reasoning: 88/100.** AA Intelligence Index **56** (high) is excellent for Flash tier (beats Sonnet 5 55, nearly Terra 57); HLE-Verified **53.6 leads set**; missing GPQA/MMLU/AIME independent rows + CharXiv slight regression → high but not fully instrumented.
- **Context window: 97/100.** Full **1M** with **MRCR 97.0% @128k** (best in Google's comparison) — top-tier long-context quality, not just sticker.
- **Multimodal: 90/100.** Text+image+audio+PDF in (meta) + LVBench 85.4 + GDP.pdf 34.0 + CharXiv 84.5 — upper multimodal band (video via LVBench path strengthens it).
- **Coding: 86/100.** DeepSWE **65.3** (+17 vs 3.6), FrontierCode Main **43.6 (set leader)**, Code Arena 1588, Coding Index 76.1 — best-in-class Flash coding; **Terra still wins DeepSWE 69.6 and TB**; FrontierSWE v2 20.3 is a soft spot; no official SWE-V row.
- **Cost efficiency: 96/100.** **$0.75/$3.75 intro + free AI Studio/Zen tier + batch $0.375/$1.88** is elite intelligence-per-dollar (AA 56 at ¼ Terra input); not 100 because **intro expires 2026-12-31 (doubles 2027-01-01)** — plan at $1.50/$7.50 for long-term unit economics (still cheaper than Sonnet 5/Terra list).
- **Overall Score: 89/100.** Mean of five quality dims (86+88+97+90+86)/5 = 89.4 → **89**. Matches peer `average.md` Overall **89.5**. Best-fit: free/cheap multimodal workhorse for coding agents, long-context PDF/video analysis, and web dev — take **GPT-5.6 Terra** when long-horizon terminal/SWE-Pro must maximize; lock intro pricing before 2027-01-01 or budget the doubled rate.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (deepmind.google/models/model-cards/gemini-3-7-flash, blog.google Gemini 3.7 Flash intro, emergent.sh benchmark digest, eesel.ai review with full Google 21-row table + caveats, AI Atlas pricing/AA rows, BenchLM composite, techjournal launch note); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
