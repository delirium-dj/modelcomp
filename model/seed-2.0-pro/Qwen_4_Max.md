# Seed 2.0 Pro — findings by Qwen 4 Max

- Source: ByteDance Seed (`seed-2.0-pro`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro (Seed2.0 Pro, 0215 snapshot)
- **Short description:** Flagship of ByteDance's Seed2.0 general-purpose agent family (Pro / Lite / Mini + a dedicated Code model), focused on long-chain reasoning and robustness in complex real-world workflows; powers Doubao and TRAE. Distinct from Lite (0428 = first omni audio+video model), Mini, Code, and Seed2.1 Pro.
- **Provider / access:** Volcano Engine Ark (China) and BytePlus Ark (international), console Id `seed-2-0-pro`; BytePlus playground uses `seed-2-0-pro-260328` (suggests a Mar 28 refresh — labelled, unverified); DeepInfra (tracked by LLM Stats); APIYI partner (Mini live first, Pro/Lite "coming soon" as of Feb 2026). OpenAI-compatible Chat Completions via Ark.
- **Release / knowledge:** Series launched 2026-02-14; Pro snapshot 0215 = Feb 15 2026. Knowledge cutoff January 2024 per LLM Stats (tracker claim, not vendor-confirmed).
- **IDs:** `seed-2-0-pro` (Ark), `seed-2-0-pro-260328` (BytePlus playground); no Free tier found.
- **Context window:** 256K input / 131.1K max output (LLM Stats, DeepInfra endpoint). Vendor claims industry-best long-document results (DUDE, MMLongBench, MMLongBench-Doc) but the numbers sit in blog images — not extractable, treated as unquantified.
- **Modalities:** Text + image + video in, text out; thinking/reasoning model; tool calls and search-agent workflows. Visual-audio benchmark rows exist (JointAVBench etc.) but native omni (audio input) is a Lite-0428-only claim; the homepage Audio Understanding table has no Pro column.
- **Pricing (as of 2026-11-13):** DeepInfra $0.50 in / $3.00 out per 1M, cached input $0.10 (80% off) — LLM Stats. Vendor claims token pricing "lowered by approximately an order of magnitude" vs leading LLMs; APIYI puts Pro at ~1/3.7 of GPT-5.2 pricing. No AA $/task measurement (untracked).
- **Architecture:** Proprietary; parameter count not disclosed. Official model card PDF is linked from the homepage (not fetched this pass); GitHub `ByteDance-Seed/Seed2.0` exists.

### Raw benchmarks found

Vendor-reported — official Seed2.0 homepage evaluation tables, Pro (0215) column (peers: Lite 0428 / Lite 0215 / GPT-5.4 Mini-or-High / Gemini 3 Flash-or-3.1 Pro High; vendor harness, not independently verified):

Agent / tool use:

- BrowseComp: **77.3%** (vs Lite0215 72.1, GPT-5.4 Mini 61.3, Gemini 3 Flash 41.5)
- WideSearch: **74.7%**; XPert Bench: **64.5%**; FinSearchComp: **70.2%**; Tob-Agent: **52.6%**
- GDPval: **54.4%** (vs GPT-5.4 Mini 50.6, Gemini 3 Flash 13.7); SkillsBench: **42.3%**; ResearchRubrics: **50.7%**
- Terminal Bench 2.0: **55.8%** (vs GPT-5.4 Mini / Gemini 3 Flash 60.0)
- OSWorld / MobileWorld / MCP / τ-bench: no Pro rows — the homepage GUI table covers Lite0428 only (OSWorld-V 64.4); not attributed to Pro.

Reasoning / knowledge:

- GPQA Diamond: **88.9%**; SuperGPQA: **68.7%** (vendor claims > GPT-5.2; below Gemini 3 Flash 72.7 in their table); HLE (no tool, text only): **32.4%**
- BeyondAIME: **86.5%**; FrontierSci-olympiad: **74.0%**; Superchem (text-only): **51.6%**; BABE: **53.5%**
- AIME 2025: **98.3**, AIME 2026: **94.2**, HMMT Feb: **97.3**, MMLU-Pro: **87.0** (APIYI, sourced from official model card + third-party)
- Vendor claims ICPC/IMO/CMO gold-medal results and Erdős-level math exploration (qualitative); science "on par with Gemini 3 Pro / GPT-5.2".
- APIYI lists "HLE-Verified 73.6" — conflicts with homepage HLE 32.4; different dataset/protocol, unverified; labelled, never averaged.
- Artificial Analysis / BenchLM: both 404 for this slug — no independent intelligence index, speed, or $/task found.

Coding:

- SWE-bench Verified: **76.5%**; LiveCodeBench v6: **87.8**; Codeforces rating: **3020** (APIYI / model card)
- SWE Multilingual: **71.7%**; SWE-Bench Pro: **46.9%** (below GPT-5.4 Mini 54.4); NL2Repo-Bench: **27.9%**; PaperBench: **53.8%**
- Vibe Coding human eval: **48.4%** (below GPT-5.4 Mini 57.4 / Gemini 3 Flash 56.9)

Multimodal (vendor homepage, Pro 0215 column):

- VideoMME: **89.5**; VideoMMMU: **86.9**; MMVU: **78.2**; VideoReasonBench: **77.8**; EgoTempo: **71.8** (vendor claims superhuman); LongVideoBench: **80.3**; streaming ODVBench: **72.5**, LiveSports-3K: **78.0**
- MathVision: **88.8**; MMMU-Pro: **78.2**; MMMU: **85.4** (APIYI); CharXiv-DQ: **93.5** / RQ: **80.5**; BabyVision: **60.6** (claimed SOTA); TempCompass: **89.6** (APIYI)
- MedXpertQA-MM: **68.1** (weak vs peers 76.9–80.2); ERQA: **68.5**; visual-audio JointAVBench: **62.3** (no native-audio claim for Pro)

Long context:

- No LCR / MRCR / RULER retrieval scores found; 256K window verified via LLM Stats; long-doc SOTA claims unquantified (numbers in blog images).

Independent / human-preference:

- LMSYS Chatbot Arena (Pro Preview, as of 2026-02-16): **#6 Text overall, #3 Vision** (official blog; APIYI says #3–4 Vision).
- LLM Stats (DeepInfra): TTFT p95 11.77s, output p5 11 chars/s; 256K / 131.1K context confirmed.

### Normalized scores (1–100)

- **Tool use: 80/100.** BrowseComp 77.3, WideSearch 74.7, FinSearchComp 70.2, XPert 64.5, GDPval 54.4%, TB2.0 55.8 show a strong search/agent stack; capped by SkillsBench 42.3, ResearchRubrics 50.7 and missing OSWorld/MCP/τ-bench Pro evidence.
- **Reasoning: 84/100.** AIME25 98.3 / AIME26 94.2 / HMMT 97.3, BeyondAIME 86.5, GPQA 88.9, Codeforces 3020 and competition-gold claims are frontier-grade; capped by HLE 32.4 and SuperGPQA 68.7 below the top tier, and no independent index to confirm.
- **Context window: 73/100.** 256K maps to the ~72–74 tier; generous 131.1K output helps, but no retrieval evals and the long-doc SOTA claims are unquantified, so no uplift above the tier base.
- **Multimodal: 83/100.** VideoMME 89.5, MathVision 88.8, CharXiv-DQ 93.5, BabyVision 60.6, VideoReasonBench 77.8 and strong streaming-video rows justify the image+video 81–83 band; capped by no native audio (Lite-only), MMMU-Pro 78.2 mid-tier and MedXpertQA-MM 68.1.
- **Coding: 79/100.** SWE-V 76.5, LCB v6 87.8, Codeforces 3020, SWE-Multi 71.7 are solid; capped by SWE-Pro 46.9, NL2Repo 27.9 and Vibe Coding human-eval 48.4 trailing GPT-5.4 Mini / Gemini 3 Flash.
- **Cost efficiency: 88/100.** $0.50/$3.00 with 80%-off cached input ($0.10) plus the vendor order-of-magnitude pricing claim is strong value for a flagship; capped by mid-tier list price vs budget models and no measured $/task.
- **Overall Score: 79.8/100.** (80+84+73+83+79)/5 = 79.8. Best fit: high-value research/decision tasks and professional video analysis where reasoning and multimodal depth matter more than 1M context or top-tier agentic coding.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (official launch blog + Seed2.0 homepage evaluation tables read in full, LLM Stats endpoint data, APIYI model-card comparison); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: Pro 0215 snapshot vs BytePlus playground `seed-2-0-pro-260328` refresh; series launch Feb 14 vs snapshot Feb 15; APIYI "HLE-Verified 73.6" vs homepage HLE 32.4 (different protocol, unverified); GUI and Audio Understanding tables are Lite-only — no Pro rows attributed; LMSYS #3 (blog) vs #3–4 (APIYI) Vision; knowledge cutoff Jan 2024 is a tracker claim. Artificial Analysis and BenchLM both returned 404 for this slug — no independent tracker verification; blog benchmark numbers are images, only homepage text tables extracted.
- Reference URLs:
  - [Seed 2.0 Official Launch — ByteDance Seed](https://seed.bytedance.com/blog/seed-2-0-official-launch)
  - [Seed2.0 homepage + evaluation tables — ByteDance Seed](https://seed.bytedance.com/en/seed2)
  - [Seed 2.0 Pro — LLM Stats](https://llm-stats.com/models/seed-2.0-pro)
  - [Seed 2.0 Pro vs Lite vs Mini — APIYI](https://help.apiyi.com/en/seed-2-0-pro-lite-mini-model-comparison-en.html)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Official model card PDF (linked from the homepage) and github.com/ByteDance-Seed/Seed2.0 were not fetched this pass — good verification targets.