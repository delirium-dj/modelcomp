# Mercury 2 — findings by MiMo 2.6 Flash

- Source: Inception (`mercury-2`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Inception's second-generation diffusion language model (dLLM) — the "first reasoning diffusion LLM" (2026-02) that refines whole token blocks in parallel instead of decoding autoregressively; 1,009 tok/s self-reported, 128K context, tunable reasoning, positioned for real-time agents, voice-adjacent latency budgets, and high-volume pipelines.
- **Provider / access:** Inception API (OpenAI-compatible `v1/chat/completions`, id `mercury-2`); OpenRouter `inception/mercury-2`; Baseten (production since 2026-06-11); Venice, NanoGPT, Kilo, Vercel AI Gateway, AI/ML API, Puter (LLM-List lists 8 providers). No open weights (proprietary).
- **Release / knowledge:** Released 2026-02-24 (Venice, Layer3 Labs, Digital Applied) — AA metadata says 2026-02-20, ModelIndex/BenchGecko say 2026-03-04 / "Mar 2026"; Decrypt ran a launch piece 2026-06-21 ("introduced Mercury 2 on Thursday") alongside the Baseten rollout. Knowledge cutoff not published.
- **IDs:** `mercury-2` (Inception native), `inception/mercury-2` (OpenRouter et al.).
- **Context window:** 128,000 total; max output **50,000** per ModelIndex vs **5,000** per LLM-List (conflict; Inception docs table not decisively resolved). Deprecated by Artificial Analysis — superseded by Mercury 2.5 (260K) and Mercury 3 (1M); AA continues only the default 10k workload.
- **Modalities:** Text in; text out only — no image input (APIRank, Puter). Reasoning yes (effort `instant`/`low`/`medium`/`high`); tool calls yes; structured/JSON outputs yes; prompt caching yes ($0.025/M read).
- **Pricing (as of 2026-11-04):** **$0.25 in / $0.75 out / $0.025 cached per 1M** — consistent across Inception, OpenRouter, ModelIndex, BenchGecko, LLM-List, APIRank. Resellers: Venice $0.312/$0.938, AI/ML API $0.265/$0.793. AA blended $0.14 (7:2:1); GraySoft blended $0.38.
- **Architecture:** Proprietary diffusion LLM; parameter count undisclosed (Inception states no number). Denoising-step count adapts to output complexity (~8 for structured, 16–20 for reasoning, per Digital Applied). Speed hardware claim conflicts: launch post says NVIDIA **Blackwell**, Rundown says **H100**, Digital Applied says **A100**.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom: **70.8%** (Artificial Analysis, reasoning=high; BenchmarkList rank 107/332, 68th pct)
- Tau3-Banking: **9.5–9.9%** (AA vs BenchmarkList — 47th pct)
- GDPval-AA (Elo): **702** (AA; rank 167/340, 51st pct)
- Terminal-Bench Hard: **26.5%** (AA; rank 83/326, 75th pct)
- Terminal-Bench 4.0: **0–1%** (AA: 0.0% GraySoft, 1% in comparison pages)
- PinchBench (agent benchmark): vendor-reported by Inception (2026-03-24 blog) — no independent number
- BFCL / Toolathon / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **77.0%** (AA, reasoning=high — Venice cites same; Puter model card says 73.6 — conflict)
- HLE: **17.1%** (AA; rank 121/466, 74th pct)
- AIME 2025: **91.1** (Puter model card, first-party-sourced) — AA rows for AIME "not measured"
- AIME 2026: **90** (Inception announcement via Decrypt, 2026-06-21)
- IFBench: **69.8%** (AA)
- Artificial Analysis Intelligence Index: **conflicting across index versions** — 10.8 (GraySoft/LLM-List, current default config), 11–14 (AA v4.3.2 comparison pages), 21.9 (BenchmarkList, 63rd pct rank 156/418), 22 (AA v4.1.1), 13.8 "outperforming 55% of tracked models" (Puter). Reconciled: the AA composite was re-weighted repeatedly; the model is now **deprecated with Index = N/A** on AA's live page.
- AIIQ Composite IQ: **99** (rank 87/126, 31st pct)
- MMLU-Pro / MATH 500 / LiveCodeBench: AA rows "not measured"
- Omniscience / CritPt / AA-Briefcase: AA-Briefcase Elo 264–266 (comparison pages)

Coding:

- Artificial Analysis Coding Index: **31.1** (AA)
- SciCode: **37.7%** (AA)
- Terminal-Bench 2.1: **27.3%** (AA; rank 105/182, 43rd pct)
- WebDev Arena (Arena AI): **1166.26** — rank 102/105, **3rd pct**
- Chatbot Arena Elo: Overall **1343.3**, Coding **1170** (BenchGecko)
- Copilot Arena: "2nd on quality, 1st on speed" (Puter/Inception claim — vendor-sourced)
- SWE-bench Verified / Pro / LiveCodeBench Pro: no verified public score found

Long context:

- AA-LCR: **43.7%** (AA) — weak absolute number
- MRCR / RULER: no verified public score found; 128K window with no full-window retrieval measurement

Multimodal (context):

- Text-only model: MMMU / MathVista / Video-MME: no verified public score found — modality cap by design

Other:

- ObviousBench: 95.8% pass³ (rank 81/254, 68th pct)
- Speed: **1,009 tok/s** vendor (launch) vs **513 tok/s** independently measured by Artificial Analysis (via Gradually, 2026-10-28); Puter's test showed Mercury 2 ~3× slower than Mercury 2.5 on throughput but faster to first token than 2.5 in some conditions.

Conflicting-source notes (compared across sites):

1. **AA Intelligence Index** — five different values across sites (10.8 / 11 / 13.8 / 14 / 21.9 / 22) because AA re-weighted the composite (v4.1.1 → v4.3.2 → v5.0.x) and finally deprecated the model (live page shows N/A). No single "current" number exists; BenchmarkList's 21.9 is a snapshot of an older composite.
2. **Release date** — 2026-02-20 (AA/GraySoft metadata) vs 2026-02-24 (Venice/Layer3/Digital Applied, most-cited) vs 2026-03-04 (ModelIndex) vs a June 21 launch-style article (Decrypt). February 24 is the best-supported date.
3. **GPQA Diamond** — 77.0% (AA, Venice) vs 73.6% (Puter model card); AA's run is the independent one and matches GraySoft's AA mirror.
4. **Speed hardware** — Blackwell (launch post) vs H100 (Rundown) vs A100 (Digital Applied); independent AA measurement (513 tok/s) is roughly half the 1,009 tok/s claim.
5. **Status** — Inception/venue pages still sell it as active, while Artificial Analysis marks it **deprecated in favor of Mercury 2.5** and Gradually says "too few independent benchmark results" to rank it.
6. **Production evidence** — Augment Code via Baseten: 90% cost cut, 82% latency cut, compaction step 150s → 27s (Baseten case study, 2026-06-11) — real but single-vendor.

### Normalized scores (1–100)

- **Tool use: 60/100.** Tau2-Telecom 70.8% (68th pct) and Terminal-Bench Hard 26.5% (75th pct) are respectable mid-tier agentic numbers, but Tau3-Banking ~9.7% (47th pct), GDPval-AA 702 Elo (51st pct), and Terminal-Bench 4.0 at 0–1% show it is not a frontier agent; BFCL/Toolathon/Claw rows are absent.
- **Reasoning: 58/100.** GPQA 77.0% and HLE 17.1% (74th pct) are solid for a speed model, but AIIQ 99 (31st pct), AA-Briefcase ~265, and an AA Intelligence Index stuck at 10.8–14 on current composites (deprecated, N/A live) place it well below the reasoning frontier; AIME 91.1/90 is first-party.
- **Context window: 45/100.** 128K with 50K (or 5K) max output is modest for 2026, AA-LCR 43.7% is weak absolute, and no MRCR/RULER measurement exists at any window — small even against its own successor line (2.5 → 260K, 3 → 1M).
- **Multimodal: 15/100.** Text-only input and output — the template's text-only floor; no vision/audio rows anywhere.
- **Coding: 50/100.** AA Coding Index 31.1 and Terminal-Bench 2.1 27.3% (43rd pct) are middling, WebDev Arena is at the 3rd percentile (102/105), yet Terminal-Bench Hard 75th pct and the Copilot Arena speed/quality claim (vendor) keep it above the floor; SWE-bench rows are unpublished for this model.
- **Cost efficiency: 78/100.** $0.25/$0.75 with $0.025 cache reads and measured 513 tok/s independent throughput is cheap for a reasoning-class model (Augment's 90% cost cut is the proof point), but it is no longer the price leader in its own family (Mercury 2.5 promo $0.04/$0.15, Mercury 3 $0.10/$0.35) and Venice resells at a 25% markup.
- **Overall Score: 45.6/100.** Mean of the five non-cost dims (60+58+45+15+50)/5 = 45.6 — best fit: real-time agent loops, voice-adjacent latency budgets, and background compaction/search jobs where 500–1,000 tok/s at $0.25/$0.75 beats frontier quality; not a frontier reasoning, long-context, or multimodal workhorse (AA Index deprecated, LCR 43.7%, text-only).

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-11-04
- Method: public internet research (official Inception launch post + docs, OpenRouter/provider listings, cross-checked against Artificial Analysis independent runs, BenchmarkList, BenchGecko, ModelIndex, Gradually, GraySoft, and hands-on reviews); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception — Introducing Mercury 2 (official launch post)](https://inceptionlabs.ai/blog/introducing-mercury-2)
  - [Artificial Analysis — Mercury 2 intelligence, performance & price](https://artificialanalysis.ai/models/mercury-2)
  - [Artificial Analysis — Mercury 2 API provider benchmarking](https://artificialanalysis.ai/models/mercury-2/providers)
  - [BenchmarkList — Mercury 2 benchmark scores](https://benchmarklist.com/models/inception-mercury-2)
  - [BenchGecko — Mercury 2 benchmarks, pricing & performance](https://benchgecko.ai/model/mercury-2)
  - [ModelIndex — Mercury 2 pricing & specs](https://modelindex.ai/models/inception/mercury-2)
  - [Gradually — Mercury 2 specifications & sources](https://www.gradually.ai/en/ai-models/mercury-2)
  - [GraySoft — Mercury 2 benchmark mirror](https://graysoft.dev/benchmarks/inception-mercury-2.html)
  - [Venice — Mercury 2 model page](https://venice.ai/models/mercury-2)
  - [Puter Developer — Mercury 2 model card](https://developer.puter.com/ai/inception/mercury-2)
  - [LLM List — Mercury 2 pricing & benchmarks](https://llm-list.com/m/mercury-2)
  - [The Rundown AI — Mercury 2 review](https://www.therundown.ai/tools/mercury-2)
  - [Layer3 Labs — Mercury 2 architecture, latency, and workflows review](https://www.layer3labs.io/guides/mercury-2-review)
  - [Decrypt — Mercury 2 beats DiffusionGemma at its own game](https://decrypt.co/371722/inception-labs-mercury-2-ai-beats-googles-)
  - [Baseten — Mercury 2 is now available on Baseten (Augment Code case study)](https://www.baseten.co/blog/mercury-2-is-now-available-on-baseten/)
  - [APIRank — Inception Mercury API pricing](https://apirank.vip/providers/inception)
