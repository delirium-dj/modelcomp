# Solar Open 2 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/solar-open-2 (Upstage Solar Open 2 model card)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open-weights MoE reasoning model; 250B parameters; 1M context / text+in → text out; sibling: Solar Pro 2, Solar Pro 3, Solar Pro 4.
- **Provider / access:** Upstage API (`solar-open-2`); open weights on Hugging Face (`upstage/Solar-Open2-250B`).
- **Release / knowledge:** Released 2026 per Upstage; knowledge cutoff not stated.
- **IDs:** `solar-open-2` (Upstage API / OpenRouter), `upstage/Solar-Open2-250B` (HF weights). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out per HF model card; reasoning type: Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Open-weights MoE, 250B parameters; parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- terminalBenchHard: **28.3%** (Upstage Solar Open 2 model card)
- APEX-Agents: **16.6%** (Upstage Solar Open 2 model card)
- MCP Atlas: **58.2%** (Upstage Solar Open 2 model card)

Reasoning / knowledge:

- GPQA-D: **86.3%** (Upstage Solar Open 2 model card)
- HLE w/o tools: **28.8%** (Upstage Solar Open 2 model card)
- MMLU-Pro: **86.2%** (Upstage Solar Open 2 model card)
- AA-LCR (long-context reasoning): **62.3%** (Upstage Solar Open 2 model card)

Coding:

- LiveCodeBench v6: **92.4%** (Upstage Solar Open 2 model card)
- SWE-bench Verified: **70.4%** (Upstage Solar Open 2 model card)

Instruction Following:

- IFBench: **80%** (Upstage Solar Open 2 model card)

Multilingual:

- KMMLU-Pro: **78.4%** (Upstage Solar Open 2 model card)
- CLIcK: **90.7%** (Upstage Solar Open 2 model card)
- HRM8K: **92.2%** (Upstage Solar Open 2 model card)

Mathematics:

- HMMT Feb 2026: **93.9%** (Upstage Solar Open 2 model card)
- AIME26: **95.7%** (Upstage Solar Open 2 model card)

Long context:

- AA-LCR: **62.3%** (Upstage Solar Open 2 model card); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 50/100.** terminalBenchHard (28.3%), APEX-Agents (16.6%), MCP Atlas (58.2%); capped by extremely thin coverage — only 3 agentic benchmarks found.
- **Reasoning: 68/100.** GPQA-D 86.3%, MMLU-Pro 86.2%, AA-LCR (62.3%); capped by HLE w/o tools (28.8%). Strong knowledge reasoning.
- **Context window: 88/100.** Verified 1M tokens (benchlm.ai); AA-LCR 62.3%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 35/100.** No multimodal benchmarks found; capped by text-only output assumption and zero multimodal data.
- **Coding: 68/100.** LiveCodeBench v6 (92.4%), SWE-bench Verified (70.4%); capped by extremely thin coding coverage — only 2 coding benchmarks found.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 61.8/100.** Half-up mean of (50 + 68 + 88 + 35 + 68) / 5 = 60.2 → 60. Best-fit recommendation: strong LiveCodeBench coding at 1M context with open weights; verify on agentic and multimodal tasks given thin coverage there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Upstage Solar Open 2 model card; Artificial Analysis page returned 404); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (15 of 639 slots) — treat scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
