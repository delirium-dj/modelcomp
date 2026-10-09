# Seed 2.0 Pro — findings by MiMo 2.6 Flash

- Source: ByteDance Seed (`ByteDance/Seed-2.0-pro`, BytePlus Ark `seed-2-0-pro`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro — ByteDance's flagship general-purpose **agent** model of the Seed2.0 series (Pro / Lite / Mini; "built for the Agent era"). Distinct from the OpenRouter Seed-2.0-Code / -Lite / -Mini / 2.1-Turbo siblings (verified absent from OpenRouter's catalogue — this model is served via BytePlus Ark and DeepInfra).
- **Short description:** Optimized for long-chain reasoning and robustness in complex workflows: multi-step planning, visual-text reasoning, hour-long and streaming real-time video understanding, enterprise agent orchestration, and "agentized" coding. Official positioning: stable long-horizon execution, tiered vision-quality input (low/high/**xhigh**, default high), structured output.
- **Provider / access:** BytePlus Model Ark official API (`seed-2-0-pro`; a `seed-2-0-pro-260328` revision appears in BytePlus playground links — benchmark tables below are the 0215 build); DeepInfra `ByteDance/Seed-2.0-pro` (Chat Completions, JSON + function calling, **Partner** tier); Dola chat. **Not on OpenRouter** (public API returns no `seed-2.0-pro` entry). No Free ID on OpenCode Zen (`noFreeId: true`).
- **Release / knowledge:** released **2026-02-14** (llm-stats official release date; model-card PDF path `/seed2/0214/`). llm-stats lists a knowledge cutoff of **January 2024** — flagged: implausibly stale for a 2026 flagship, likely catalog metadata error → not scored.
- **IDs:** `ByteDance/Seed-2.0-pro` (DeepInfra) / `seed-2-0-pro` (BytePlus Ark).
- **Context window:** **256,000 tokens** (DeepInfra/llm-stats; repo meta says 256K); max output **131.1K** per DeepInfra/llm-stats (repo meta says 65K — provider-specific conflict noted).
- **Modalities:** **text, image, video in**; text out; JSON mode + function calling yes; vision input tiers low/high/xhigh; standalone audio input is **Lite-0428-only** (Pro evaluated on audio-*in-video* suites, not ASR/MMSU).
- **Pricing (as of 2026-10-07):** **$0.50 in / $3.00 out** per 1M, cached input **$0.10** (DeepInfra — also the lowest tracked provider per llm-stats; blended ≈ $0.62/1M at 20:1 in:out). Paid; proprietary license.
- **Architecture:** proprietary; parameter count not published.

### Raw benchmarks found

> All rows from ByteDance's official Seed2.0 evaluation tables (seed.bytedance.com/en/seed2,
> **Seed2.0 Pro (0215) column**), vendor-run. Independent AA/Vals rows: none found this
> cycle (search engines returned CAPTCHAs; AA/Vals catalogues do not list the model).
> GUI (OSWorld) and audio (MMSU/ASR) tables are Lite-only — no Pro rows.

Agent / tool use:

- BrowseComp: **77.3%** (beats Seed2.0 Lite 72.1 and GPT-5.4 61.3 in-vendor; below Gemini 3 Flash's set).
- WideSearch: **74.7%**; XPert Bench: **64.5%**; ResearchRubrics: **50.7%** (search/research agents).
- FinSearchComp: **70.2%**; Tob-Agent: **52.6%**; SkillsBench: **42.3%**.
- GDPval: **54.4%** (vendor percent-format row; GPT-5.4 50.6, Gemini 3 Flash 13.7 — different scale from Elo boards, not comparable to Elo refs).
- Terminal-Bench 2.0: **55.8%** (GPT-5.4 High / Gemini 3 Flash both 60.0 — under frontier refs).
- PaperBench: **53.8%**; Vibe Coding (human eval): **48.4%** (GPT-5.4 57.4).
- OSWorld / MobileWorld / MCP-Atlas / Toolathlon / τ³ / Claw-Eval for Pro: no verified public score found (OSWorld 64.4 is Lite-0428).

Reasoning / knowledge (vendor):

- GPQA Diamond: **88.9%** (just under the 90+ ref; Gemini 3 Flash 90.7, GPT-5.4 88.0).
- HLE (no tool, text only): **32.4%** — under the 40% ref.
- SuperGPQA: 68.7%; BeyondAIME: **86.5%**; FrontierSci-olympiad: 74.0%; Superchem (text-only): 51.6%; BABE: 53.5%.
- CL-Bench: 20.8%; MultiChallenge: 68.3% (instruction following).
- Artificial Analysis Intelligence Index: no verified public score found (AA does not list this model).

Coding (vendor):

- SWE Multilingual: **71.7%** (GPT-5.4 73.6, Gemini 3.1 Pro High 71.1 — competitive band).
- SWE-bench Pro: **46.9%** (GPT-5.4 High 54.4 — notably behind).
- NL2Repo-Bench: **27.9%** (GPT-5.4 37.3); Vibe Coding: 48.4.
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / TB2.1: no verified public score found.

Multimodal / vision (vendor):

- STEM: MathVision **88.8**, MMMU-Pro **78.2**, HiPhO 74.1, MedXpertQA-MM 68.1.
- Perception/visual knowledge: BabyVision 60.6, VLMBias 77.4, SimpleVQA 71.4, WorldVQA 49.9; CharXiv-DQ **93.5**, CharXiv-RQ 80.5; ERQA 68.5.
- Video knowledge: VideoMMMU **86.9**, MMVU 78.2, VideoSimpleQA 71.9, SciVideo 52.3.
- Video reasoning: VideoReasonBench **77.8**, VideoHolmes 67.4, Minerva 66.5.
- Motion/perception: TVBench 75.0, MotionBench 75.2, EgoTempo 71.8, ContPhy 67.4, TOMATO 59.9.
- Long video: VideoMME **89.5**, LongVideoBench 80.3, LVBench 76.4, CGBench 65.0, VideoMMEv2 60.5, VideoEval-Pro 47.3.
- Streaming video: OVBench 69.2, ODVBench 72.5, OVOBench 77.0, LiveSports-3K 78.0, ViSpeak 78.5; Multi-video CrossVid 61.0.
- Visual-audio (video with audio track): OmniVideoBench 49.5, AVMeme 61.2, JointAVBench 62.3, WorldSense 57.0.

Long context:

- 256K window; no MRCR/RULER/needle row found. Long-video rows (hour-scale VideoMME 89.5, LongVideoBench 80.3) are the closest long-input evidence; text retrieval at 256K unbenchmarked.

### Normalized scores (1–100)

- **Tool use: 81/100.** BrowseComp 77.3 and WideSearch 74.7 are strong research-agent rows (both beat in-vendor frontier comparisons), FinSearchComp 70.2 solid; capped by TB2.0 55.8 (under refs), SkillsBench 42.3, ResearchRubrics ~50, and complete absence of OSWorld / MCP / Toolathlon / τ-bench / Claw rows for Pro.
- **Reasoning: 77/100.** GPQA 88.9 is a near-miss on the 90 ref, BeyondAIME 86.5 and FrontierSci-olympiad 74 are healthy, MultiChallenge 68.3 fine; held down by HLE 32.4 (under 40), no AA Index row, and CL-Bench 20.8.
- **Context window: 90/100.** 256K native = 256K tier floor; no retrieval-at-window benchmark published → floor value for the tier.
- **Multimodal: 87/100.** Text + image + video in (video band 75–90) with one of the deepest video suites in the record — VideoMMMU 86.9, VideoMME 89.5, LongVideoBench 80.3, VideoReasonBench 77.8, streaming rows in the 70s — plus CharXiv-DQ 93.5 and MathVision 88.8; no standalone audio input, no generation modalities → capped at 87.
- **Coding: 78/100.** SWE Multilingual 71.7 is genuinely competitive, but SWE-bench Pro 46.9 trails in-vendor frontier models by 7–15 points, TB2.0 55.8 misses refs, NL2Repo 27.9 is weak, and there's no SWE-V / LCB / SciCode / DeepSWE evidence at all — the "agentized coding" marketing lacks hard rows.
- **Cost efficiency: 90/100.** $0.50/$3.00 with $0.10 cache reads undercuts the $0.60/$2.20 ≈ 92 anchor on input with only modestly higher output; deducted because it's proprietary/hosted-only (no self-host path) and DeepInfra's partner route measures a slow p95 TTFT of 14.45 s with p5 output of 2 char/s (latency ≠ price, but it's what the price buys).
- **Overall Score: 83/100.** (81+77+90+87+78)/5 = 82.6 → 83 — the video-and-search specialist: hour-scale video reasoning and BrowseComp 77.3 at $0.50 input; thin coding evidence and the missing GUI/hard-agent rows keep it out of the mid-80s.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research after DuckDuckGo/Mojeek CAPTCHA blocks and irrelevant Bing results — direct provider sources instead: ByteDance official Seed2.0 evaluation tables (seed.bytedance.com), DeepInfra model page, llm-stats catalog (release date, pricing, latency), OpenRouter API catalogue check (model absent), official Seed2.0 Model Card PDF reference; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Seed 2.0 Pro — findings by Mimo v2.6 Flash

- Source: ByteDance Seed/Seed 2.0 Pro (`Doubao-Seed-2.0-pro` / `seed-2-0-pro-260328`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro (Doubao-Seed-2.0-pro)
- **Short description:** ByteDance Seed team's flagship reasoning/agent model in the Seed 2.0 series (launched 2026-02-14, snapshot updated 2026-03-28); powers Doubao and TRAE workloads with competition-math and long-horizon agent strength. Distinct from Seed 2.0 Lite/Mini/Code.
- **Provider / access:** Volcano Engine Ark (`Doubao-Seed-2.0-pro`, model id `seed-2-0-pro-260328`) — OpenAI-compatible Chat Completions; also surfaced via BytePlus/APIYI aggregates.
- **Release / knowledge:** 2026-02-14 series launch (Pro 0215 snapshot; 260328 update); knowledge cutoff listed as January 2024 on some provider rows (APIYI) — treat as early-2024 cutoff with post-training through 2026.
- **IDs:** `bytedance/seed-2.0-pro` (logical); Volcano `Doubao-Seed-2.0-pro`; no OpenCode Zen Free ID found — paid API.
- **Context window:** 256K tokens (Volcengine rounded tier via Benchmark Atlas / LLM Reference).
- **Modalities:** text/image/video in; text out; deep thinking toggle; tool calls/function calling; no audio out.
- **Pricing (as of 2026-09-24):** ~$0.47 / $2.37 per 1M in/out on cheapest tracked route (LLM Reference); APIYI notes ~1/3.7 input and ~1/5.9 output cost of GPT-5.2 — paid, strong value.
- **Architecture:** proprietary MoE-class flagship (params not disclosed in gathered sources); closed weights.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.0: **55.8%** (ByteDance Seed launch / APIYI digest)
- BrowseComp: **77.3%** (Seed model card)
- τ²-Bench Retail / Telecom: **90.4% / 94.2%** (Seed / APIYI)
- WideSearch: **74.7%** (Seed)
- GDPval-AA / OSWorld: **no verified public score found** (GDPval-Diamond mentioned qualitatively in launch post without absolute Elo in gathered rows)
- Toolathon / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (Seed model card)
- AIME 2025 / 2026: **98.3 / 94.2** (Seed)
- HMMT Feb 2025: **97.3**; MathArena Apex: **18.2** (shortlist 80.1)
- MMLU-Pro: **87.0**; SuperGPQA: **67.9** (Seed tables — competitive with GPT-5.2/Gemini-3-Pro)
- HLE (no tool, text only): **72.1** appears in Seed table extract (row alignment ambiguous in OCR-style scrape — treat as vendor table value, cross-check before heavy citation); HLE-Verified **73.6** via APIYI digest
- ARC-AGI-2: **37.5** (Seed table); IMO/ICPC/CMO **gold-medal level** (launch post)
- SimpleQA Verified: **36.8**; HealthBench: **42.0** (Seed)

Coding:

- SWE-bench Verified: **76.5%** (Seed/APIYI/LLM Reference)
- LiveCodeBench v6: **87.8%** (Seed)
- Codeforces Elo (no tool): **3020** (Seed)
- AetherCode: **60.6** (Seed table)
- SciCode / DeepSWE / SWE-Pro: **no verified public score found** in gathered rows

Long context:

- 256K window; MRCR v2 (8-needle): **47.1** (Seed table, in-house tokenization caveat); Graphwalks BFS (<128k): **80.5**; LongBench v2 (128k): **84.5**

Multimodal:

- MMMU: **85.4**; MMMU-Pro: **78.2**; VideoMME: **89.5**; MotionBench: **75.2**; TempCompass: **89.6** (Seed/APIYI)
- MathVision **88.8**, LogicVista **81.4**, VisuLogic **47.4** (Seed model card — SOTA claims on several vision suites)

### Normalized scores (1–100)

- **Tool use: 86/100.** τ²-Bench 90+/94 and BrowseComp 77.3% are frontier-band; TB2.0 55.8% and missing GDPval/Toolathon public rows cap mid-80s.
- **Reasoning: 90/100.** GPQA 88.9%, AIME 98.3, IMO gold, SuperGPQA competitive with GPT-5.2/Gemini-3-Pro — top-tier; capped below mid-90s by ARC-AGI-2 37.5 and weaker SimpleQA/HealthBench honesty metrics.
- **Context window: 75/100.** 256K lands in the 200K–500K tier (65–84); solid but well below 1M flagships.
- **Multimodal: 88/100.** Native image+video in with MMMU 85.4, VideoMME 89.5, and multiple vision-SOTA claims; capped by text-only output and no audio.
- **Coding: 84/100.** SWE-V 76.5%, LCB 87.8, Codeforces 3020 are elite; TB2.0 55.8% and no SWE-Pro/DeepSWE rows keep it mid-80s.
- **Cost efficiency: 93/100.** ~$0.47/$2.37 tracks the ~$0.60/$2.20 (~92) anchor with a slight input edge — strong frontier-value ratio.
- **Overall Score: 84.6/100.** Mean of Tool 86 + Reasoning 90 + Context 75 + Multimodal 88 + Coding 84 = 423/5 = 84.6 — best-fit for cost-efficient multimodal reasoning, competitive math, and agentic search/coding on 256K context.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-24
- Method: public internet research (ByteDance Seed model card PDF + seed.bytedance.com launch, APIYI digests, LLM Reference, Benchmark Atlas); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

