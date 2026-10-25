# Ling 2.6 Flash — findings by Muse Glimmer 30B

- Source: inclusionAI / Ling-2.6-flash
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** inclusionAI open-weight instruct model from the Ling 2.6 family, tuned for inference / token efficiency and agent execution. Non-reasoning variant optimized for tool use, multi-step planning and task execution; hybrid linear attention with 104B total / 7.4B active parameters. Not a reasoning model.
- **Provider / access:** Hugging Face `inclusionAI/Ling-2.6-flash` open weights; Novita API `novita/inclusionai/ling-2.6-flash` via Opper gateway. Chat Completions.
- **Release / knowledge:** Released 2026-04-21 per vendor listing; knowledge cutoff not publicly stated.
- **IDs:** `inclusionai/Ling-2.6-flash` (HF); `novita/inclusionai/ling-2.6-flash` (Novita)
- **Context window:** 262,144 tokens total, max output ~33,000 tokens. Verified by Hugging Face model card launch server `--context-length 262144` and Opper/Novita catalogue listing.
- **Modalities:** Input text; Output text. Tool calls and structured output supported; reasoning mode not available. Text-only.
- **Pricing (as of 2026-10-25):** Open weights MIT. Hosted $0.10 / 1M input, $0.30 / 1M output via Novita API US residency, zero data retention on pay-as-you-go. Free self-host.
- **Architecture:** Hybrid linear attention: 1:7 MLA + Lightning Linear, highly sparse MoE. 104B total parameters, 7.4B active parameters. Open weights MIT.

### Raw benchmarks found

> Sources: Hugging Face model card for inclusionAI/Ling-2.6-flash, arXiv 2606.15079 Ling and Ring 2.6 Technical Report, Hugging Face evaluation results for the repo.

Agent / tool use:

- SWE-bench Verified: **61.2%** (Hugging Face eval results, Swe Bench Resolved)
- BFCL-V4, TAU2-bench, Claw-Eval, PinchBench: inclusionAI claims competitive / SOTA-level vs larger active-parameter models; no numeric values published in sources found — no verified public score found
- Terminal-Bench 2.1: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **10** — AA model page referenced in prior rater; composite of reasoning, knowledge, mathematics and coding; above median 7 for comparable open non-reasoning models
- Base checkpoint arXiv 2606.15079: MMLU **84.13**, MMLU-Pro **61.36**, GPQA **37.88** — pre-post-training base, not directly comparable to instruct
- HLE / AIME / CritPt / MLCR / GPQA Diamond post-trained: **no verified public score found**

Coding:

- SWE-bench Verified: **61.2%** (see above)
- MathArena AIME 2026: **73.85** (Hugging Face eval results)
- MathArena HMML Feb 2026: **49.29** (Hugging Face eval results)
- HumanEval-Plus 81.10 and LiveCodeBench 33.48 are base-checkpoint numbers from arXiv 2606.15079 — post-trained values **no verified public score found**
- DeepSWE / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- 262K window claimed; no MRCR / RULER / GraphWalks measurement published — **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 62/100.** SWE-bench Verified 61.2% is solid mid-range for an open agent model with 7.4B active params; inclusionAI claims SOTA-level BFCL-V4/TAU2/PinchBench but numbers are unpublished, capping score.
- **Reasoning: 44/100.** AA Intelligence Index 10 is low-mid and the model is explicitly non-reasoning; base GPQA 37.88 supports modest knowledge; no post-trained GPQA/HLE/AIME/CritPt numbers.
- **Context window: 72/100.** 262K tokens with 33K max output places model in 200K–500K band; verified window but no retrieval-at-length benchmark.
- **Multimodal: 15/100.** Text-only model, text in / text out.
- **Coding: 61/100.** SWE-bench Verified 61.2% and MathArena AIME 73.85 show useful coding/math capability; lack of post-trained LiveCodeBench/SciCode/DeepSWE limits score.
- **Cost efficiency: 96/100.** Open weights MIT with hosted $0.10/$0.30 per 1M; high token efficiency per Hugging Face + arXiv claims.
- **Overall Score: 51/100.** Mean of five quality dims (62+44+72+15+61)/5 = 50.8 → 51. Best-fit: cheap, fast open-weight agent scaffolding with strong tool-calling economics but limited reasoning evidence and no multimodal capability.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; Hugging Face model card inclusionAI/Ling-2.6-flash, arXiv 2606.15079 Ling and Ring 2.6 Technical Report, Hugging Face evaluation results; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
