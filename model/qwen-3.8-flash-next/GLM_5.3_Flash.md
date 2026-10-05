# Qwen3.8-Flash-Next — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`qwen3.8-flash-next`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next (API-sold sibling is branded Qwen3.8 Flash)
- **Short description:** Alibaba/Qwen's open-weight experimental preview of the upcoming Qwen4 architecture — a 125B-parameter MoE with only ~6B active parameters, sold cheaply via API under the Qwen3.8 Flash name. Top use cases: high-throughput agentic coding and reasoning at minimal cost, plus self-hosting.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-Flash-Next` (open weights, FP8 build ~173 GiB VRAM); API access via Alibaba/Qwen endpoints as Qwen3.8 Flash; listed on Artificial Analysis, llm-stats, Ollama. Chat Completions-style API.
- **Release / knowledge:** Released 2026-08-26 (Hugging Face + qwen.ai blog); knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (weights); API ID under the Qwen3.8 Flash branding. A dedicated OpenCode Zen Free ID was not verified in the listings reviewed.
- **Context window:** Sources conflict — llm-stats lists 1M tokens; architecture write-ups (Hugging Face-derived) describe 256K native context with hybrid attention (QSA) and Gated Residual. Verified how: cross-referenced directory listings vs architecture descriptions; unresolved discrepancy, so scored conservatively.
- **Modalities:** multimodal input (vision + text) with reasoning support; text output. Tool calls supported (SWE-bench/Terminal-Bench harness runs). JSON mode not documented.
- **Pricing (as of 2026-10-05):** API (as Qwen3.8 Flash): $0.15 per 1M input / $0.016 per 1M cached input / $0.47 per 1M output. Open weights = free self-hosting.
- **Architecture:** 125B total parameters, ~6B active (sparse MoE) + a novel 51B n-gram embedding table (not experts) for cheap parameter scaling + a 4B multi-token prediction layer; hybrid attention (QSA, Gated DeltaNet + Qwen attention) and Gated Residual; open weights (license per HF repo, not individually verified).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (llm-stats listing); a hosting-comparison site lists **84.3%** — likely different harness/version, unresolved conflict
- IFBench: **81.3** (qwen.ai blog via aggregators)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7** (open-weights eval; 92.6 for the hosted/API version — qwen.ai blog via aggregators)
- HLE: **35.9** (open weights; 43.6 hosted version)
- Artificial Analysis Intelligence Index: indexed (artificialanalysis.ai/models/qwen3-8-flash-next) — entry exists, composite value not confirmed here
- LCR / MLCR / CritPt: no verified public score found

Coding:

- SWE-bench Verified: **72.6%** (vendor harness reporting; Qwen reports the best score across two harnesses, strongest on mini-SWE-agent)
- SWE-bench Pro: **62.5** (ahead of Claude Opus 4.6 Max's 53.4 per DataCamp comparison)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval benchmark (MRCR / RULER / GraphWalks) reported; window itself is disputed (1M vs 256K)

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 at 62.9% (independent listing) plus SWE-bench Pro 62.5 beating Claude Opus 4.6 Max and IFBench 81.3 show capable tool use; capped by the 62.9-vs-84.3 harness conflict and absent Tau2/GDPval/Toolathon data.
- **Reasoning: 87/100.** GPQA Diamond 91.7 (92.6 hosted) with HLE 35.9–43.6 is strong for the class; capped slightly for the open-weights-vs-hosted scoring gap and no independent index confirmation.
- **Context window: 80/100.** Either 1M (top tier) or 256K (solid tier) depending on source — scored mid-high for the uncertainty; no retrieval benchmark breaks the tie.
- **Multimodal: 62/100.** Native vision + text input confirmed across listings, but no measured vision benchmark (MMMU/CharXiv) surfaced for this exact model.
- **Coding: 82/100.** SWE-bench Verified 72.6% and SWE-bench Pro 62.5 are genuinely strong agentic-coding results for a 6B-active model; capped by missing LiveCodeBench/SciCode.
- **Cost efficiency: 96/100.** $0.15/$0.47 per 1M with $0.016 cached input plus free open weights is near-floor pricing for this capability level; not 100 because per-task agentic cost at scale isn't documented.
- **Overall Score: 77.8/100.** Mean of the five quality dims (78 + 87 + 80 + 62 + 82) / 5. Best fit: cost-sensitive agentic coding and reasoning pipelines, or self-hosters wanting the Qwen4 preview architecture.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (qwen.ai blog via aggregators, Hugging Face, llm-stats, Artificial Analysis, DataCamp, chels.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
