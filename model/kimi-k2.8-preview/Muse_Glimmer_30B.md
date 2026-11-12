# Kimi K2.8 Preview — findings by Muse Glimmer 30B

- Source: Moonshot AI / kimi-k2.8-preview
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI coding/agentic model rolled out in Kimi Code on 2026-09-11. Model ID `kimi-for-coding` with up to 1M context and adjustable thinking effort, positioned between Kimi K3 and Kimi K2.7 Code.
- **Provider / access:** Moonshot AI Kimi Code via official clients and third-party tools. API ID `kimi-for-coding`. Chat Completions / Responses API via Kimi Code endpoints.
- **Release / knowledge:** 2026-09-11; knowledge cutoff not disclosed.
- **IDs:** `moonshot/kimi-k2-8-preview` / Kimi Code ID `kimi-for-coding`
- **Context window:** up to 1,048,576 tokens total input, verified in Kimi Code Model Configuration.
- **Modalities:** Input text, image, video; Output text. Reasoning yes with low/high/max effort; tool calls via Kimi Code agent.
- **Pricing (as of 2026-11-06):** Membership-based in Kimi Code; no separate public per-token price published for `kimi-for-coding` on Moonshot platform pricing pages.
- **Architecture:** Proprietary. Parameters undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SWE-Residual DeepSWE Residual Start success: **13.0%** (arXiv:2610.25899, SWE-Residual, 2026-10-19, Kimi-K2.8-Preview as evaluated agent)
- SWE-Residual DeepSWE Clean Start reference: **57.8%** (same source, matched tasks)
- SWE-Residual Terminal-Bench Residual Start success: **20.6%** (arXiv:2610.25899, SWE-Residual)
- SWE-Residual Terminal-Bench Clean Start reference: **42.9%** (same source)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M token window reported in Kimi Code docs; no public MRCR / RULER score found.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in model-comparison.md. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 55/100.** SWE-Residual Terminal-Bench Residual Start 20.6% and DeepSWE Residual Start 13.0% show usable agent tooling but substantial starting-state fragility; capped by lack of independent Terminal-Bench 2.1 and SWE-bench verified scores.
- **Reasoning: 60/100.** Vendor claims performance close to K3 with adjustable low/high/max thinking and 1M context; no independent GPQA/HLE numbers, so score stays mid-range pending verification.
- **Context window: 90/100.** Official Kimi Code docs list up to 1,048,576 tokens for `kimi-for-coding`; capped below 95 due to no public long-context retrieval benchmark.
- **Multimodal: 55/100.** Kimi Code model config lists image and video input, text output; no independent multimodal benchmark scores found, so score reflects modality coverage only.
- **Coding: 55/100.** SWE-Residual DeepSWE Clean Start 57.8% indicates moderate coding capability; Residual Start 13.0% shows degradation under starting-state conditions. Capped by absence of SWE-bench Verified / LiveCodeBench numbers.
- **Cost efficiency: 50/100.** Membership access with no published per-token price for this ID; cannot score higher without transparent pricing.
- **Overall Score: 63/100.** Mean of Tool 55, Reasoning 60, Context 90, Multimodal 55, Coding 55 = 63. Best-fit recommendation: suitable for Kimi Code coding workflows where 1M context and adjustable thinking are needed, pending independent benchmark verification.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi Code Model Configuration](https://www.kimi.com/code/docs/en/kimi-code/models.html)
  - [Kimi Code What's New K2.8 Preview Sep 11 2026](https://www.kimi.com/code/docs/en/kimi-code/whats-new.html)
  - [Kimi K2.8 Preview LLM Stats](https://llm-stats.com/models/kimi-k2.8)
  - [SWE-Residual arXiv 2610.25899 Kimi-K2.8-Preview evaluation](https://arxiv.org/html/2610.25899)
  - [Moonshot Platform models](https://platform.kimi.ai/docs/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `Muse_Glimmer_30B.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Muse_Glimmer_30B.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Kimi K2.8 Preview — findings by Muse Glimmer 30B

- Source: Moonshot AI / kimi-k2.8-preview
- Archived date: 2026-11-04 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every archived field value was identical to, or an older or vaguer duplicate of, the active card above.

## Raw benchmarks found

SELF-EXCLUSION: No verified independent public benchmark numbers for the exact `kimi-k2.8-preview` / `kimi-for-coding` model ID were found in the course of deep web research. Vendor materials state “performance close to K3 with more efficient thinking than K2.7 Code” and list 1M context, multimodal input, and adjustable thinking effort. Aggregators such as LLM Stats, ZenMux, and Opencode show no published GPQA, SWE-bench, Terminal-Bench, or LiveCodeBench scores tied to the K2.8 Preview ID. Comparisons to K3 or K2.7 Code are cited as vendor claims without independent verification.

Agent / tool use:
- Terminal-Bench 2.1: no verified public score found
- Tau3-Bench Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found

Long context:
- 1M token window reported; no public MRCR / RULER score found.

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---

---
