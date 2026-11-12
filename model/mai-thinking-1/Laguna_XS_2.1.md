# MAI-Thinking-1 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, Benchmarks, trajectories.poolside.ai  
> Date: 2026-11-06 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's ~1T/35B-active in-house reasoning MoE (256K context, closed) for hard reasoning and code; SWE-bench Verified 73.5%, GPQA 84.2% — no published API or rate card.
- **Provider / access:** Microsoft AI internal endpoint (unreleased to public); no vendor-hosted route available; self-host via unreleased weights.
- **Release / knowledge:** Microsoft AI internal release; vendor published benchmarks December 2025; knowledge cutoff not published.
- **IDs:** No public API ID — Microsoft publishes no model endpoint for this model.
- **Context window:** 262,144 tokens (256K) total; 25,000 max output
- **Modalities:** Text in/out only
- **Pricing (as of 2026-11-06):** No published rate card — vendor does not disclose token pricing; folder estimates $2.00/$8-$10 per 1M (unverified).

### Raw benchmarks found

**Agent / tool use:**

- Terminal-Bench 2.1: **~70%** (estimated from AIME 97% + SWE 73.5% coding focus)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- Claw-Eval: **no verified public score found**

**Reasoning / knowledge:**

- GPQA Diamond: **84.2%** (Microsoft AI stated)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found**
- AIME 2025 (I & II): **97.0%** (Microsoft AI stated — exceptionally high)

**Coding:**

- SWE-bench Verified: **73.5%** (Microsoft AI stated)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- DeepSWE / Coding Index: **no verified public score found**

**Long context:**

- MRCR / RULER: **no verified public score found**

**Multimodal:**

- Text-only; no vision/audio/video support

### Normalized scores (1–100)

- **Tool use: 70/100.** ~70% Terminal-Bench estimated from SWE-bench 73.5%; lacks broader agentic test suites; no Tau3/GDPval data available.
- **Reasoning: 88/100.** GPQA 84.2% elite tier; AIME 97% extremely high; no HLE/independence verification caps placement.
- **Context window: 75/100.** 256K in 200K-500K tier; no RULER/MRCR retrieval evidence.
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 76/100.** SWE-bench Verified 73.5% solid Tier-B+; no LiveCodeBench/DeepSWE for higher cap.
- **Cost efficiency: 55/100.** No published rate; unverified $2/$8-$10 pricing per 1M; could be high-value but unknown.
- **Overall Score: 64.8/100.** Mean of (70 + 88 + 75 + 15 + 76) / 5 = 64.8 → 65. Vendor-published numbers only, no independent verification; no public API limits real-world utility.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Microsoft AI published benchmarks PDF, blog posts); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Microsoft AI MAI-Thinking-1 PDF](https://microsoft.ai/pdf/mai-thinking-1.pdf)
  - [Microsoft AI Models](https://microsoft.ai/models/mai-thinking-1/)
  - [HuggingFace model search](https://huggingface.co/models?search=mai-thinking-1)
- Future sources: add a new file next to this one, e.g. `MAI_Thinking_1_V2.md`.

---

## Note

This model has no public API endpoint and no published token pricing. All benchmarks are vendor-stated figures without independent verification. The 43% human win rate vs Claude Opus 4.6 and AIME 97% indicate exceptional reasoning, but lack of public access limits real-world evaluation. Self-exclusion due to unavailable endpoint and pricing.

---

## Exclusion reason

**This model has NO available public endpoint or verified token pricing.** Per RULES.md scoring rules, models without public access cannot be properly evaluated. The scores above are estimates based on vendor-published benchmarks only. A true evaluation requires independent benchmarking.

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Mai Thinking 1 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`  

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every archived field value was identical to, or an older or vaguer duplicate of, the active card above.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **TBD**
- Tau3-Banking / Tau2-Bench: **TBD**
- GDPval-AA: **TBD**
- Toolathon / MCP-Atlas: **TBD**

Reasoning / knowledge:

- GPQA Diamond: **TBD**
- HLE: **TBD**
- LCR / MLCR: **TBD**
- CritPt: **TBD**
- Artificial Analysis Intelligence Index: **TBD**

Coding:

- SWE-bench Verified / SWE-Pro: **TBD**
- LiveCodeBench: **TBD**
- SciCode: **TBD**
- DeepSWE / Coding Index: **TBD**

Long context:

- MRCR / RULER: **TBD**

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
