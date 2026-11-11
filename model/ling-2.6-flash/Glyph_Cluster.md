# Ling 2.6 Flash — findings by Glyph Cluster

- Source: InclusionAI (`inclusionAI/Ling-2.6-flash`, `inclusionai/ling-2.6-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** InclusionAI's efficient instruct Mixture-of-Experts model (104B total / 7.4B active) optimized for fast agentic execution, token efficiency, and tool-use workflows, using a hybrid MLA + Lightning Linear attention architecture.
- **Provider / access:** Open weights on Hugging Face (`inclusionAI/Ling-2.6-flash`, MIT license). Supported by SGLang and vLLM per model card; repo meta references hosted routes (e.g. ZenMux/Requesty) and notes a previously free Zen slot now deprecated.
- **Release / knowledge:** Model card/repo materials indicate 2026 release context (technical report arXiv:2606.15079); knowledge cutoff not explicitly stated on fetched HF page.
- **IDs:** `inclusionAI/Ling-2.6-flash` (HF), `inclusionai/ling-2.6-flash` (repo/meta).
- **Context window:** 131,072 native context with 262,144 via YaRN scaling (per repo meta and HF deployment examples showing rope scaling to 262K).
- **Modalities:** Text in; text out.
- **Pricing (as of 2026-11-11):** Open weights (MIT, self-host $0). Repo meta reports hosted pricing around $0.10/$0.30 per 1M in/out on some providers and notes a deprecated free Zen slot; pricing varies by provider.
- **Architecture:** Sparse MoE instruct model, 104B total / 7.4B active parameters, hybrid 1:7 MLA + Lightning Linear attention, `bailing_hybrid` implementation, optimized for throughput and token efficiency (per HF model card).

### Raw benchmarks found

> Sources: Hugging Face model card/eval results and repo metadata. Some agent benchmark claims are qualitative on the card; numeric values below are those explicitly shown in fetched eval results or repo metadata.

Agent / tool use:

- SWE-bench Verified: **61.2%** (HF eval results).
- TAU2-bench (tau2): **76.4%** (reported in repo meta; HF card states strong TAU2-bench performance but numeric value not extracted from card text/images in this run).
- BFCL-V4 / Claw-Eval / PinchBench: **competitive/SOTA-level performance claimed** on HF card (exact numeric scores not extracted from fetched text/images).
- Terminal-Bench 2.1: **no verified public score found**.
- GDPval-AA: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- AIME 2026 (MathArena): **73.85** (HF eval results).
- HMMT Feb 2026 (MathArena): **49.29** (HF eval results).
- GPQA Diamond: **no verified public score found**.
- HLE: **no verified public score found**.
- LCR / MLCR: **no verified public score found**.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index: **10** (reported in repo meta).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (repo meta notes a 96.7% hallucination rate figure from AA context; not independently extracted as a standardized benchmark row here).

Coding:

- SWE-bench Verified: **61.2%** (HF eval results).
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **no verified public score found**.

Long context:

- MRCR: **75.9%** (reported in repo meta, at 256K context).
- 131K native / 262K YaRN context supported; specific RULER/GraphWalks scores: **no verified public score found**.

### Normalized scores (1–100)

> Scores are normalized interpretations from available evidence. Repo meta highlights a high hallucination-rate concern (96.7% reported) and low AA Intelligence Index (10), which materially affect reliability scoring. Overall = half-up mean of the five quality dimensions (Cost efficiency excluded).

- **Tool use: 74/100.** Verified/reported agentic strengths (SWE-bench Verified 61.2%, tau2 76.4% per meta, strong BFCL/agent claims) indicate good tool-use and multi-step execution for production agent workflows; capped by limited standardized benchmark transparency in fetched sources and reliability concerns.
- **Reasoning: 55/100.** Solid contest-math signals (AIME 2026 73.85, HMMT Feb 2026 49.29) but very low reported general intelligence/reliability indicators (AA Intelligence Index 10, high hallucination rate per meta) suggest uneven reasoning and knowledge reliability outside optimized domains.
- **Context window: 80/100.** Effective long-context support (128K native, 256K via YaRN) with strong reported MRCR (75.9% at 256K per meta) supports practical long-context use; capped by limited broader long-context benchmark verification.
- **Multimodal: 15/100.** Text-only input and output per verified specs.
- **Coding: 72/100.** Verified SWE-bench Verified score (61.2%) indicates capable software engineering performance for an efficient model, but broader coding benchmark coverage is limited.
- **Cost efficiency: 90/100.** MIT open weights and low active parameter count (7.4B) enable efficient self-hosting; hosted pricing reported as low, though not free. Not included in Overall.
- **Overall Score: 59/100.** Mean of the five non-cost dimensions (Tool 74, Reasoning 55, Context 80, Multimodal 15, Coding 72) = 296/5 = 59.2, rounded to 59 (half-up). Best fit: high-throughput text-only agentic and coding workflows where speed/token efficiency matter, with caution for hallucination-prone or unattended high-stakes tasks.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-11
- Method: Public-source synthesis from fetched Hugging Face model card/eval results and repo metadata; web search unavailable in-session (HTTP 402). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — inclusionAI/Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash)
  - [Ling 2.6 technical report (arXiv:2606.15079)](https://arxiv.org/abs/2606.15079)
  - [Repo metadata — model/ling-2.6-flash/meta.json](../../model/ling-2.6-flash/meta.json)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
