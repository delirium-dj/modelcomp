# Solar Open 2 — findings by Fledge Alpha

- Source: Upstage (`upstage/Solar-Open2-250B`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2 (250B-A15B)
- **Short description:** Upstage's open-weight sovereign foundation model for agentic use — 250B total / 15B active, competitive with the strongest open-weight models on knowledge, math, and coding while remaining self-deployable on 2–4 H200s.
- **Provider / access:** Hugging Face weights `upstage/Solar-Open2-250B` (Upstage Solar License — Apache 2.0-based, commercial use + fine-tune/distill allowed); vLLM/Transformers serving guides; min recommended 4×H200 BF16 or 2×H200 quantized.
- **Release / knowledge:** 2026-07-22 (Upstage blog; openmodelmap says 2026-07-23).
- **IDs:** `upstage/solar-open2-250b` (open weights; no Zen ID)
- **Context window:** 1M tokens (BenchLM spec table); AA-LCR 62.7 measured.
- **Modalities:** text in; text out; reasoning; agent-oriented tool use. No vision listed.
- **Pricing (as of 2026-10-08):** open weights — free to self-host; infra cost only (BenchLM lists $0.00/$0.00).
- **Architecture:** 250.3B total / ~15B active MoE (themodelbeat, HF card).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v2.1: **43.2** (Upstage launch table)
- MCP-Atlas: **58.2** (Upstage)
- BrowseComp: **37.3** (Upstage)
- GDPval-AA v2: **31.4** (Upstage)
- APEX-Agents: **16.6**; τ³-Banking: **18.1** (Upstage)
- terminalBenchHard: **28.3%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **86.26** (Upstage; +20.1p over Solar Open 100B)
- MMLU-Pro: **86.2** (Upstage; highest among comparable open models)
- HLE (no tools): **28.8%** (BenchLM)
- AIME 2026: **95.7**; HMMT Feb 2026: **93.94** (Upstage)
- IFBench: **80.0** (Upstage)
- KMMLU-Pro: **78.4**; KBL (Korean law): **75.5** (Upstage)

Coding:

- LiveCodeBench: **92.4** (Upstage; highest among comparable models, +35.9p over Solar Open 100B)
- SWE-bench Verified (OpenHands): **69.2** (Upstage); **70.4%** (BenchLM)
- Vendor comparison: 86.8 on an unnamed agentic coding eval, 0.16 behind DeepSeek-V4-Pro (86.9, 1.6T) — treat as directional

Long context:

- AA-LCR: **62.7** (Upstage); 1M window (BenchLM).

### Normalized scores (1–100)

- **Tool use: 62/100.** MCP-Atlas 58.2 and TB v2.1 43.2 are decent for open weights; APEX-Agents 16.6 and τ³-Banking 18.1 cap it — Pro 4 is Upstage's agentic tier.
- **Reasoning: 80/100.** GPQA-D 86.26, AIME 2026 95.7, HMMT 93.94 — elite math/knowledge for 15B active; HLE 28.8 caps it.
- **Context window: 78/100.** 1M advertised window with AA-LCR 62.7 — good but not top-tier retrieval.
- **Multimodal: 15/100.** Text-only (no vision listed anywhere).
- **Coding: 80/100.** LiveCodeBench 92.4 leads comparable open models; SWE-bench Verified ~69–70% is strong, below Pro-tier coding specialists.
- **Cost efficiency: 90/100.** Open weights under a commercial-friendly license, deployable on 2 H200s quantized — near-minimal per-token cost self-hosted.
- **Overall Score: 63/100.** Mean of (62, 80, 78, 15, 80) = 63.0 → 63. Best fit: sovereign/on-prem agent deployments needing strong math, knowledge, and coding with full data control (esp. Korean/Japanese work).

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Upstage launch blogs, Hugging Face, BenchLM, openmodelmap, themodelbeat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
