# North Mini Code — findings by Glyph Cluster

- Source: Cohere Labs (`CohereLabs/North-Mini-Code-1.0`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere Labs' open-weight 30B-total / 3B-active sparse Mixture-of-Experts model optimized for code generation, agentic software engineering, and terminal tasks, with interleaved thinking and tool-use support.
- **Provider / access:** Open weights on Hugging Face (`CohereLabs/North-Mini-Code-1.0`, Apache 2.0). Usable via Transformers, vLLM, SGLang, and coding-agent environments (e.g. OpenCode); repo meta references free hosted routes (including OpenRouter/Cohere API rows).
- **Release / knowledge:** Announced in Cohere Labs/HF blog materials (Jun 2026 per repo meta context); knowledge cutoff not explicitly stated on fetched primary pages.
- **IDs:** `CohereLabs/North-Mini-Code-1.0` (HF), `north_mini_code` (repo folder; aliases include `north-mini-code`, `opencode/north-mini-code` per meta).
- **Context window:** 256,000 tokens total with 64,000 max output (per HF model card and repo meta).
- **Modalities:** Text in; text out. Supports tool calling and interleaved reasoning/thinking for agentic coding workflows.
- **Pricing (as of 2026-11-11):** Free open weights (Apache 2.0, self-host $0). Repo meta reports free hosted routes ($0/$0); pricing/availability may vary by provider.
- **Architecture:** Decoder-only Transformer sparse MoE, 30B total / 3B active, 128 experts with 8 activated per token, interleaved sliding-window/global attention, 256K context (per HF model card). Post-trained with cascaded SFT and RLVR focused on agentic coding.

### Raw benchmarks found

> Sources: Hugging Face model card evaluation results and repo metadata. Note: repo meta cites SWE-bench Verified 61.0% pass@1, while HF eval results displayed on the fetched page show 67.6% resolved; reported values below follow the fetched HF eval results and are labeled accordingly.

Agent / tool use:

- Terminal-Bench 2.0: **36.0%** (HF eval results shown on fetched page; repo meta also states 36.0%).
- SWE-bench Verified (agentic coding): **67.6%** (HF eval results: "Swe Bench Resolved").
- SWE-bench Pro (Public Dataset): **40.2%** (HF eval results).
- tau2-bench: **37.4%** (reported in repo meta; not independently extracted as a separate benchmark table on fetched HF page).
- AutomationBench: **1.5%** (reported in repo meta; not independently extracted on fetched HF page).
- GDPval-AA / Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- HLE: **11.1%** (reported in repo meta; not independently extracted on fetched HF page).
- GPQA Diamond: **no verified public score found**.
- LCR / MLCR: **no verified public score found**.
- CritPt: **no verified public score found**.
- Artificial Analysis Coding Index: **33.4** (reported in repo meta; AA page not fetched in this run).
- Artificial Analysis Intelligence Index / Omniscience: **no verified public score found**.

Coding:

- SWE-bench Verified: **67.6%** (HF eval results).
- SWE-bench Pro (Public Dataset): **40.2%** (HF eval results).
- Terminal-Bench 2.0: **36.0%** (HF eval results).
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **no verified public score found** beyond AA Coding Index value noted in meta.

Long context:

- 256,000-token context window with 64,000 max output (HF/meta); specific MRCR/RULER/GraphWalks long-context retrieval benchmark scores: **no verified public score found**.

### Normalized scores (1–100)

> Scores are normalized interpretations from available coding/agentic evidence and specs, acknowledging some metrics are from repo metadata where HF page extraction was limited. Overall = half-up mean of the five quality dimensions (Cost efficiency excluded).

- **Tool use: 66/100.** Purpose-built for agentic coding and tool use with solid SWE-bench Verified/Pro and Terminal-Bench results, but weaker reported agentic/planning metrics (tau2 37.4%, AutomationBench 1.5% per meta) cap broader tool-use reliability.
- **Reasoning: 58/100.** Reasoning appears adequate for code-focused tasks, but general/advanced reasoning evidence is limited and repo meta reports low HLE (11.1%); not positioned as a strong general reasoning model.
- **Context window: 78/100.** 256K total context and 64K output are strong for codebase/repository workflows; capped below 1M-tier models and by lack of verified long-context retrieval benchmark scores.
- **Multimodal: 15/100.** Text-only input and output per verified specs.
- **Coding: 81/100.** Strong coding-agent performance for a 3B-active open-weight model (SWE-bench Verified 67.6%, SWE-bench Pro 40.2%, Terminal-Bench 2.0 36.0% on fetched HF results) supports high practical coding value; capped by moderate terminal/pro results and limited general coding benchmark coverage.
- **Cost efficiency: 100/100.** Apache 2.0 open weights plus reported free hosted routes ($0/$0) make it maximally cost-efficient. Not included in Overall.
- **Overall Score: 60/100.** Mean of the five non-cost dimensions (Tool 66, Reasoning 58, Context 78, Multimodal 15, Coding 81) = 298/5 = 59.6, rounded to 60 (half-up). Best fit: free/open-weight agentic coding and terminal-assisted software engineering where cost efficiency and SWE-bench performance matter more than general reasoning or multimodal capability.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-11
- Method: Public-source synthesis from fetched Hugging Face model card/eval results and repo metadata; web search unavailable in-session (HTTP 402). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)
  - [Cohere Labs blog — Introducing North Mini Code](https://huggingface.co/blog/CohereLabs/introducing-north-mini-code)
  - [OpenRouter — cohere/north-mini-code (referenced in meta)](https://openrouter.ai/cohere/north-mini-code)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
