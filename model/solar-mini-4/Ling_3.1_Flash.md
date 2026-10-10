# Solar Mini 4 — findings by Ling 3.1 Flash

- Source: Upstage (`solar-mini4-260922`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's cost-efficient compact agentic model — 35B total / 3B active MoE with a 512K context window, fluent Korean plus strong English and Japanese, and a new Pareto point on Intelligence Index vs active parameters (6 points above Qwen3.6 35B A3B with the same 3B active). Proprietary — weights not released.
- **Provider / access:** Upstage Console, Playground, and on-premises (`solar-mini4-260922`); Artificial Analysis provider page (Upstage is the only tracked provider).
- **Release / knowledge:** Released 2026-09-22; training data cutoff February 2026.
- **IDs:** `solar-mini4-260922` (Upstage). No OpenCode Zen Free ID found — proprietary, single provider.
- **Context window:** 512,000 tokens with up to 128,000 max output (Upstage Console); Artificial Analysis lists 1M context / 262K max output — the 512K/128K Console spec is used here.
- **Modalities:** text in; text out; reasoning mode available; tool calling, structured outputs, and chat supported.
- **Pricing (as of 2026-10-10):** $0.10 / 1M input, $0.40 / 1M output, $0.01 / 1M cache hit (Upstage); blended 7:2:1 ≈ $0.07 / 1M; $0.36 cost per Intelligence Index task due to verbosity (88K output tokens, 72K reasoning).
- **Architecture:** MoE, 35B total / 3B active per token (reported by Upstage; proprietary, size not independently verifiable); 208 tok/s at launch.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **1%** (Artificial Analysis — agentic coding is a stated weakness)
- AutomationBench-AA: **22%** (Artificial Analysis)
- GDPval-AA: **1072 ELO** (Artificial Analysis — close to Inkling xhigh)
- AA-Briefcase: **872 ELO** (Artificial Analysis)
- Terminal-Bench 2.1 / τ³-Banking / MCP-Atlas / Toolathon / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **24** (AA — vs Qwen3.6 35B A3B Reasoning 18, Nemotron 3 Ultra 23 with 55B active, Solar Pro 3 flagship 8 with 12B active)
- AA-LCR v1.1: **83%** (AA — matches MiniMax-M3 and GPT-6 Luna max; ahead of Gemini 3.8 Flash high and GPT-6 Astra max at 81%)
- SciCode: **48%** (AA — ahead of MiniMax-M3 and Inkling xhigh at 47%)
- AA-Omniscience: **-11** (accuracy 18% — among the lowest compared; abstains on ~half of questions; non-hallucination rate 64%, well ahead of Inkling xhigh 32% and GPT-6 Luna max 23%)
- GPQA / HLE / CritPt / MLCR: no verified public score found

Coding:

- SciCode: **48%** (AA — see reasoning)
- Terminal-Bench 4.0: **1%** (AA — see tool use)
- SWE-bench Verified / DeepSWE / LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR v1.1 83% is the measured long-context reasoning number (512K–1M class); no MRCR / RULER / GraphWalks value reported — no verified public score found.

### Normalized scores (1–100)

- **Tool use: 35/100.** Terminal-Bench 4.0 1% and AutomationBench-AA 22% are weak, GDPval-AA 1072 and AA-Briefcase 872 are low-mid, and no Terminal-Bench 2.1, τ³-Banking, or MCP-Atlas number exists — agentic execution is the model's stated weakness.
- **Reasoning: 58/100.** The AA Intelligence Index of 24 is mid-band for its active-parameter class and AA-LCR 83% is strong, but Omniscience accuracy of 18% is among the lowest compared (non-hallucination rate 64% is a genuine strength); no GPQA or HLE number exists.
- **Context window: 90/100.** 512K tokens (1M per AA) with up to 128K output — the 500K–1M band; AA-LCR 83% supports strong long-context reasoning.
- **Multimodal: 15/100.** Text-only model (text in, text out) — the text-only floor band.
- **Coding: 45/100.** SciCode 48% is mid-band but Terminal-Bench 4.0 1% is catastrophic, and no SWE-bench, DeepSWE, or LiveCodeBench number exists.
- **Cost efficiency: 88/100.** $0.10/$0.40 per 1M (cache $0.01) is cheap per token, but 88K output tokens per task (~$0.36/task) makes it ~5× GPT-6 Luna max's per-task cost despite similar per-token prices.
- **Overall Score: 49/100.** Mean of Tool 35, Reasoning 58, Context 90, Multimodal 15, Coding 45 = 48.6 → 49. Best-fit: cheap long-context extraction and Korean-language workloads; avoid agentic coding (TB 4.0 1%) and verify claims yourself — one day old at AA review, no independent evaluation beyond AA's own runs.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (Upstage Console docs, Artificial Analysis launch article 2026-09-30 and provider benchmarking page, orcarouter launch coverage 2026-09-23); scores are normalized 1–100 interpretations, not official vendor scores. Upstage published no benchmark table at launch — all numbers above are Artificial Analysis measurements except the specs.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
