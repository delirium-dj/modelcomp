# Mercury 2.5 — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5 (mercury-2.5)
- **Short description:** Inception Labs' diffusion-based reasoning model, released September 8, 2026. 260K context window. Tunable reasoning effort. Diffusion LLM architecture (not autoregressive). Proprietary. Inception API, Vercel AI Gateway, OpenRouter (`inception/mercury-2.5`). $0.04/M in, $0.15/M out (very cheap). 66K max output. Knowledge cutoff Nov 2025.
- **Provider / access:** Inception Labs API, Vercel AI Gateway, OpenRouter (`inception/mercury-2.5`), Vals AI. Proprietary, no self-host. Mercury 3 released Oct 19, 2026 (1M context, supersedes).
- **Release / knowledge:** 2026-09-08 release; knowledge cutoff Nov 2025.
- **IDs:** `inception/mercury-2.5` (OpenRouter/Inception/Vercel). Proprietary.
- **Context window:** 260,000 tokens (260K). Verified via Inception blog, Vals AI, LLM Reference, BenchLM, SerenitiesAI.
- **Modalities:** Text input; text output. **No native multimodal** (text-only per Vals AI, LLM Reference, BenchLM, SerenitiesAI). Reasoning: yes (tunable reasoning effort, high default). Tool calls: yes (function calling, JSON mode, structured output). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** OpenRouter: $0.04/M in, $0.15/M out. Vercel AI Gateway: similar. Vals AI: not published. SerenitiesAI: $0.04/$0.15 (84th/100th percentile cheap). Very cost-efficient.
- **Architecture:** Diffusion LLM (not autoregressive). 260K context. Tunable reasoning. Proprietary. Inception Labs.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **SOURCE MIX:** Vendor-reported (Inception blog launch chart) + Independent (Vals AI Terminal-Bench 2.1, BenchLM). **Partial independent verification** via Vals AI.

Agent / tool use:

- τ³-bench: **96.0%** (vendor, Inception launch chart) — Inception blog / BenchLM
- DeepSearchQA: **34.0%** (vendor) — Inception blog / BenchLM
- Terminal-Bench 2.1 (Vals AI): **34.5%** (independent) — Vals AI / BenchLM
- SWE-bench Verified / Pro / Terminal-Bench 2.0 / τ²-Bench / BFCL / MCP-Atlas / Toolathlon / PinchBench / ClawEval / AutomationBench / BrowseComp: **no scores**

Reasoning / knowledge:

- AA-LCR: **68.0%** (vendor, Inception launch chart) — Inception blog / BenchLM / Vals AI
- GPQA Diamond: **79.0%** (vendor) / **89.2%** (Mercury 3) — Inception blog / BenchLM (Kimi K2.5 comparison)
- SciCode: **38%** (vendor) — Inception blog / BenchLM
- GPQA-D: **79.0%** (vendor) — BenchLM (Kimi K2.5 comparison)
- MMLU / GPQA / AIME / HLE / MMLU-Pro / MATH / BBH / C-Eval / SuperGPQA / MMMLU: **no scores**
- LegalBench (Vals AI): **#61/151** — Vals AI

Coding:

- Terminal-Bench 2.1 (Vals AI): **34.5%** (independent) — Vals AI / BenchLM
- SciCode: **38%** (vendor) — Inception blog / BenchLM
- LiveCodeBench / HumanEval / MBPP / Codeforces / SWE-bench Verified / Pro / Terminal-Bench 2.0 / SWE-Rebench / Vibe Code Bench: **no scores**

Long context:

- Native 260K context verified
- AA-LCR: **68.0%** (vendor) — Inception blog / BenchLM
- RULER / MRCR / GraphWalks / LongBench / LOFT: **no scores**

Multimodal:

- **No native multimodal** (text-only per Vals AI, LLM Reference, BenchLM, SerenitiesAI).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** τ³-bench 96% (vendor, exceptional), DeepSearchQA 34% (vendor), Terminal-Bench 2.1 34.5% (independent Vals AI). **Strong τ³-bench but vendor-reported**; independent TB 2.1 only 34.5%. No SWE-bench/Terminal-Bench 2.0/τ²-Bench/BFCL/MCP-Atlas. Capped by TB 2.1 34.5% independent and no standard agentic benchmarks.
- **Reasoning: 55/100.** AA-LCR 68% (vendor, strong long-context reasoning), GPQA Diamond 79% (vendor), SciCode 38% (vendor). **No standard reasoning benchmarks** (GPQA, AIME, HLE, MMLU, MMLU-Pro, MATH). LegalBench #61/151 (Vals AI). Mercury 3 GPQA-D 89.2% shows progression. Capped by no standard reasoning benchmarks and vendor-only AA-LCR/GPQA.
- **Context window: 80/100.** 260K native (260K tier = 75–80). AA-LCR 68% (vendor). No RULER/MRCR/GraphWalks/LongBench/LOFT. Tier placement + AA-LCR saves score.
- **Multimodal: 15/100.** Text-only input/output. No vision/audio/video. Floor for text-only model.
- **Coding: 40/100.** Terminal-Bench 2.1 34.5% (independent Vals AI), SciCode 38% (vendor). **No standard coding benchmarks** (SWE-bench, LiveCodeBench, HumanEval, Codeforces, Terminal-Bench 2.0). Capped by TB 2.1 34.5% and missing standard coding benchmarks.
- **Cost efficiency: 95/100.** $0.04/M in, $0.15/M out (extremely cheap). 84th/100th percentile on SerenitiesAI. Proprietary but very low API pricing. No self-host. Best-in-class cost efficiency for capability tier.
- **Overall Score: 49/100.** Mean of (55+55+80+15+40)/5 = 49.0 → 49. BenchLM Overall: 33.38 (partial, 6 benchmarks). Vals AI: low public-lane score (12, #123/132). Best fit: **ultra-cheap diffusion reasoning model**; τ³-bench 96% and AA-LCR 68% vendor-claimed; independent TB 2.1 only 34.5%; text-only; $0.04/$0.15 pricing exceptional; Mercury 3 (Oct 2026) supersedes with 1M context.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Inception blog launch chart, Vals AI Terminal-Bench 2.1, BenchLM comparisons vs Kimi K2.5/Mercury 3/GPT-6 Luna/Gemini 2.5 Pro, LLM Reference, SerenitiesAI pricing, BusinessWire Mercury 3 launch); scores normalized 1–100 per model-comparison.md methodology. **Critical limitations:** Mix of vendor-reported (Inception blog τ³-bench 96%, AA-LCR 68%, GPQA-D 79%) and independent (Vals AI TB 2.1 34.5%); BenchLM only 6 benchmarks covered; no standard reasoning (GPQA/AIME/HLE/MMLU) or coding (SWE-bench/LiveCodeBench) benchmarks; Mercury 3 (Oct 2026) supersedes; proprietary diffusion architecture.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.