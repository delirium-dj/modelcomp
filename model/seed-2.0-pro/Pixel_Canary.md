# ByteDance Seed 2.0 Pro — findings by Pixel Canary

- Source: ByteDance / Volcengine (`deepinfra/ByteDance/Seed-2.0-pro`, vendor `doubao-seed-2-0-pro-260215`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro (a.k.a. Doubao Seed 2.0 Pro, build `260215`) — flagship general model of the Seed 2.0 series; **no OpenCode Zen Free ID** (`noFreeId: true` in this folder's `meta.json`)
- **Short description:** ByteDance's February 2026 frontier multimodal reasoning model, launched through Volcano Engine as the "flagship" of Seed 2.0 for complex reasoning and long-horizon agent workflows: 256K window, text/image/video input, switchable deep thinking plus tool use, and headline pricing ($0.47 / $2.37 per 1M) that ByteDance positioned as 3–6× cheaper than comparable frontier models.
- **Provider / access:** Volcengine (first party), DeepInfra (`ByteDance/Seed-2.0-pro`), empiriolabs, nano-gpt (`doubao-seed-2-0-pro-260215`), llmgateway (`seed-2-0-pro-260328` rebuild) and Kilo-style routers; OpenAI-compatible API with function calling and structured/JSON output. Weights are **not** released, so no self-hosting path.
- **Release / knowledge:** **2026-02-14** public launch (models.dev `release_date` on every hosted entry; llmreference and Benchmark Atlas agree); a `260328` rebuild exists on llmgateway. Knowledge cutoff not published by ByteDance — no verified public figure.
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro`, `empiriolabs/seed-2-0-pro`, `nano-gpt/doubao-seed-2-0-pro-260215`, `llmgateway-providers/bytedance/seed-2-0-pro-260328`, `bytedance-doubao-seed-2-0-pro`.
- **Context window:** **256,000 input / 128,000 max output** (DeepInfra and empiriolabs limits; nano-gpt 256K/128K; the `260328` rebuild lists 262,144 / 131,072). Volcengine documents capacity only as a rounded "256k" tier. This folder's `meta.json` says "256K / 65K out", which understates the output cap by half relative to every hosted entry.
- **Modalities:** Text, image and video in; text out. Reasoning: switchable deep-thinking mode. Tool calling / JSON mode: yes. No audio input and no generation of any kind.
- **Pricing (as of 2026-09-29):** Volcengine **$0.47 / 1M input, $2.37 / 1M output**; DeepInfra $0.50 / $3.00 with **$0.10 cache reads**; empiriolabs $0.63 / $3.79; nano-gpt Doubao route $0.782 / $3.876 with $0.391 cache reads. The successor Seed 2.1 Pro (2026-06-23) costs more: $1.00 / $5.00.
- **Architecture:** Proprietary MoE; ByteDance publishes neither parameter count nor weights. BenchLM carries **no profile for Seed 2.0 Pro at all** — its Seed entries are Seed 1.6, Seed-2.0-Lite, Seed-2.0-Mini, Seed 2.1 Pro and Seed 2.1 Turbo — so this entry has no independent 512-model composite rank to quote.

### Raw benchmarks found

Vendor-published rows (ByteDance launch materials, observed 2026-04-27 → 2026-06-07 through llmreference) plus third-party harness rows (Benchmark Atlas, 138 sources):

Knowledge / reasoning:

- GPQA Diamond: **88.9%**; MMLU-Pro: **87.0%**; AIME 2025: **98.3%**
- LLM Debate Benchmark: **1489**; PACT Negotiation bilateral rating **1491** (avg profit/round 16.9, CMS 45.0); Buyout Game Bradley–Terry **1405**
- Thematic Generalization V2: **77.0**; composite capability index **149.3**
- Behaviour probes: LLM Sycophancy Rate **14.1%** (stripped 17.1%, insufficient-answer rate 31.1%); Position-Bias Order Flip Rate **28.0%** (first-shown pick rate 48.1%, decisive coverage 83.4%); LLM Creative Story Writing −1.5 (win probability 0.3)

Coding:

- SWE-bench Verified: **76.5%** — rank **#36 of 81** on the tracker's field
- LiveCodeBench v6: **87.8%** — rank **#9 of 56**
- Terminal-Bench / DeepSWE / SWE-bench Pro / CursorBench: no published score for this ID

Agent / tool use:

- τ²-Bench Retail: **90.4%** — the strongest published agentic row for this ID
- Terminal-Bench (any version), MCP Atlas, GDPval-AA, OSWorld, CyberGym, AutomationBench: **no published score**
- Extended NYT Connections: **42.1%** (newest-100 set 42.0%); LisanBench difficulty-weighted **457**, path length 1753

Multimodal:

- MMMU: **85.4%**; MATH-Vision: **88.8%**; BabyVision: **60.6%**
- Video input is accepted by the API but **no video benchmark row** is published for this ID; there is no audio surface at all

Long context:

- MRCRv2 / RULER / AA-LCR / GraphWalks: **no verified public score found** — the 256K window has no published retrieval-depth measurement

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-Bench Retail **90.4%** is a top-tier structured-tool result and the negotiation/debate rows (PACT 1491, Debate 1489) show real multi-turn agency; capped hard because nothing else exists — no Terminal-Bench, MCP Atlas, GDPval-AA or OSWorld row — so long-horizon autonomy is asserted by ByteDance but never independently measured for this ID.
- **Reasoning: 80/100.** GPQA Diamond 88.9%, MMLU-Pro 87.0%, AIME 2025 98.3% and MATH-Vision 88.8% are frontier-level and mutually consistent; the behavioural probes are the cap — a 28.0% position-bias order-flip rate and 14.1% sycophancy rate with 31.1% insufficient answers mean responses move with presentation, not only with difficulty.
- **Context window: 58/100.** 256K in / 128K out gives a generous output ceiling, but it is a quarter of the 1M tier now standard at this price (Qwen3.7 Plus, MiMo-V2.6-Pro, DeepSeek V4.1-Flash all serve 1M) and **no MRCR / RULER / AA-LCR measurement is published**, so depth is unproven.
- **Multimodal: 72/100.** Text+image+video input with MMMU 85.4% and MATH-Vision 88.8% is strong grounded reasoning, and video input is rare at this price; capped for no audio, text-only output, a mediocre BabyVision 60.6%, and zero published video-understanding scores despite the modality being exposed.
- **Coding: 74/100.** LiveCodeBench v6 87.8% (#9/56) sits near DeepSeek V4 Pro's 93.5% and well above Claude Sonnet 4.5's 71.0%, but SWE-bench Verified 76.5% is only #36/81 — algorithmically strong, middling at real agentic repo repair.
- **Cost efficiency: 84/100.** $0.47 / $2.37 on Volcengine ($0.50 / $3.00 with $0.10 cache reads on DeepInfra) is 3–6× below comparable frontier tiers and roughly a tenth of the Claude Opus 5.5 tier; capped because there is no free ID of any kind, no open weights to self-host, and the direct Doubao route costs ~65% more than the Volcengine list price.
- **Overall Score: 71.2/100.** (72 + 80 + 58 + 72 + 74) / 5 = 71.2 — best fit as a low-cost multimodal reasoner for image/video-grounded analysis and structured tool tasks; the missing independent agentic, long-context and safety measurement makes it a poor choice as an unsupervised agent backbone.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (llmreference record for `bytedance-doubao-seed-2-0-pro` citing ByteDance launch materials, Benchmark Atlas profile for `doubao-seed-2-0-pro-260215`, models.dev limits/pricing across DeepInfra / empiriolabs / nano-gpt / llmgateway). **BenchLM has no profile for this ID**, so no composite rank is quoted; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
