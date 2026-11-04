# Mercury 2 — findings by Beam

- Source: Inception Labs (`mercury-2`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Inception Labs' February/March 2026 reasoning diffusion LLM (dLLM) — the first reasoning model built on block-parallel refinement instead of autoregressive decoding. 128K context, tunable reasoning depth, native tool use, schema-aligned JSON, ~1,009 tok/s on NVIDIA Blackwell; positioned as the latency/cost option in the Mercury family. Text-only, proprietary, superseded by Mercury 2.5 and Mercury 3.
- **Provider / access:** Inception API Platform (`mercury-2`, OpenAI-compatible Chat Completions at `https://api.inceptionlabs.ai/v1`); also OpenRouter (`inception/mercury-2`), Vercel AI Gateway. No open weights; no OpenCode Zen Free ID. OpenRouter marks the route as going away 2026-11-08 (Vercel 2026-11-15).
- **Release / knowledge:** Released 2026-03-04 (OpenRouter/Vercel); official blog announced the model in February 2026. Knowledge cutoff not disclosed. TIME "Best Inventions of 2026" (Oct 15, 2026).
- **IDs:** `inception/mercury-2` (Inception, OpenRouter, Vercel). No free Zen ID.
- **Context window:** 128,000 total tokens. Vercel AI Gateway lists 128K max output; the official blog advertises 128K context without a separate published output cap (scaffolded meta lists 50K out).
- **Modalities:** Text in / text out only (OpenRouter and Vercel list text; no verified image input despite scaffolded meta claiming "vision in"). Reasoning yes (tunable diffusion refinement steps). Tool calls yes (parallel). Structured outputs/JSON mode yes. No web-search grounding, no embeddings, no fine-tuning, no seed.
- **Pricing (as of 2026-11-04):** $0.25 / $0.75 per 1M in/out; cached input $0.025 (90% off). No free tier. Data usage: training on by default unless opted out in API Platform settings.
- **Architecture:** Proprietary diffusion LLM (draft-then-refine across token blocks; tunable refinement steps). No parameter count, MoE split, or technical report published. Vendor-reported 1,009 tok/s on NVIDIA Blackwell GPUs.

### Raw benchmarks found

Independent Artificial Analysis numbers (QAI/OpenRouter/BenchmarkList) are the primary source; vendor table is absent for Mercury 2. AA Intelligence Index 21.43 sits at the 55th percentile — mid-pack, consistent with the individual rows below.

Agent / tool use:

- GDPval-AA v2.1 (Elo): **494** (QAI/Artificial Analysis; rank 103/144) — BenchmarkList lists a different "GDPval-AA" figure of 702 (48th pct, 185/358), likely a v2/v2.1 mismatch
- Tau2-Bench Telecom: **70.8%** (AA; rank 71/160)
- Tau3-Banking: **9.5%** (AA; rank 75/103) — BenchmarkList lists 9.9%
- PinchBench: **78.0%** (BenchmarkList; rank 53/76, 31st percentile)
- AA-Briefcase: **266** (BenchmarkList; rank 124/160, 23rd percentile)
- Terminal-Bench 2.1: **27.3%** (AA; rank 119/196)
- Terminal-Bench Hard: **26.5%** (AA; rank 52/157)
- Terminal-Bench 4.0: **0.0%** (OpenRouter/AA)
- Agentic Index (AA): **9.6** (BenchmarkList)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **77.0%** (AA; rank 162/478, 66th percentile)
- Humanity's Last Exam (text-only): **17.1%** (AA; joint 109/221)
- IFBench: **69.8%** (AA; rank 42/158)
- CritPt: **0.8%**
- Artificial Analysis Intelligence Index: **21.43** (rank 147/324, 55th percentile)
- AIIQ Composite IQ: **93** (rank 149/168, 11th percentile)
- Omniscience accuracy / non-hallucination: **21.2% / 8.8%** (AA)
- ObviousBench (answer pass³): **95.8%** (BenchmarkList; rank 97/275, 65th percentile)
- HLE / LCR individual rows: see above; AA-LCR 43.7% (below)

Coding:

- SciCode (with background): **37.7%** (AA) — BenchmarkList lists 38.7%
- Terminal-Bench 2.1: **27.3%**
- Terminal-Bench Hard: **26.5%**
- ALE-Bench: **785.58** (BenchmarkList; rank 36/83, 57th percentile)
- WebDev Arena: **1166.26** Elo (BenchmarkList; rank 102/105, 3rd percentile)
- Coding Index (AA): **31.11**
- SWE-bench Verified / SWE-Pro / LiveCodeBench: no verified public score found

Long context:

- AA-LCR v1.1: **43.7%** (AA; rank 132/211 or 227/423 depending on leaderboard cut)
- RULER / GraphWalks: no published numbers; no full 128K retrieval curve

Multimodal / design:

- Design Arena Elo: **1042** (BenchmarkList; rank 302/343, 12th percentile) — generated code/design outputs, not multimodal input
- Input modality: text only (no verified image/audio/video input)

Speed:

- 1,009 tok/s on NVIDIA Blackwell (official blog); OpenRouter live throughput not published for Mercury 2
### Normalized scores (1–100)

- **Tool use: 58/100.** Tau2-Bench Telecom 70.8% and PinchBench 78.0% are genuinely good, but Tau3-Banking 9.5%, Terminal-Bench 2.1 27.3%, Terminal-Bench 4.0 0.0%, GDPval 494 Elo, and an Agentic Index of only 9.6 show unreliable terminal/office-agent execution; the diffusion speed helps latency but not correctness.
- **Reasoning: 62/100.** GPQA Diamond 77.0% and IFBench 69.8% are respectable, and ObviousBench 95.8% is a strength; but HLE 17.1%, CritPt 0.8%, Omniscience accuracy 21.2% with 8.8% non-hallucination, and an AIIQ of 93 (11th percentile) cap it below the mid-tier reasoning class.
- **Context window: 62/100.** 128K total with AA-LCR 43.7% (46th percentile) proves usable but not strong long-context retrieval; no published full-length retrieval curve, and the 128K max-output claim is unverified by an independent run.
- **Multimodal: 15/100.** Text-only in practice (OpenRouter/Vercel list text only); Design Arena Elo reflects generated code/design, not multimodal input.
- **Coding: 55/100.** SciCode 37.7% and ALE-Bench 785.58 are decent, but Terminal-Bench 2.1 27.3%, Terminal-Bench Hard 26.5%, WebDev Arena 1166 (3rd percentile), and Coding Index 31.11 show weak repository/terminal coding; no SWE-bench Verified row exists.
- **Cost efficiency: 88/100.** $0.25/$0.75 per 1M with $0.025 cached input is cheap for a reasoning model, but it is pricier per correct answer than Mercury 3's launch pricing and the route is being retired (Nov 2026).
- **Overall Score: 50/100.** Half-up mean of the five quality dims (58 + 62 + 62 + 15 + 55) / 5 = 50.4 → 50. Best fit: high-throughput text loops, autocomplete, extraction, and RAG where 1,000+ tok/s at $0.25/$0.75 matters; avoid for terminal agents, long-context retrieval, and maximum quality-per-dollar coding.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-11-04
- Method: public internet research (Inception official blog, OpenRouter listing and telemetry, Vercel AI Gateway model page, QAI price/benchmark aggregator, BenchmarkList, Business Wire/TIME coverage); scores are normalized 1–100 interpretations, not official vendor scores. Mercury 2 has no vendor benchmark table; all rows above are independent (Artificial Analysis / BenchmarkList) and two GDPval/Tau3 figures disagree slightly between aggregators, flagged inline.
- Reference URLs:
  - [Inception: Introducing Mercury 2 (official blog)](https://www.inceptionlabs.ai/blog/introducing-mercury-2)
  - [OpenRouter: inception/mercury-2 (pricing, benchmarks, retirement date)](https://openrouter.ai/inception/mercury-2)
  - [Vercel AI Gateway: Mercury 2 API, pricing, throughput](https://vercel.com/ai-gateway/models/mercury-2)
  - [QAI: Mercury 2 price and benchmark scores](https://qai.io/models/inception/mercury-2)
  - [BenchmarkList: Mercury 2 benchmark scores and evals](https://benchmarklist.com/models/inception-mercury-2/)
  - [Business Wire: Mercury 2 TIME Best Inventions 2026](https://www.businesswire.com/news/home/20261015005588/en/Inception%27s-Mercury-2-Named-to-TIME%27s-Best-Inventions-of-2026)
  - [Inception: Models & pricing](https://www.inceptionlabs.ai/models)
  - [The Decoder: Inception Mercury 2 coverage](https://the-decoder.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

