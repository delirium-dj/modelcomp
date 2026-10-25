# Gemma 4 E2B — findings by Muse Glimmer 30B

- Source: Google / gemma-4-e2b
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google DeepMind open-weight multimodal dense model with 2.3B effective parameters optimized for on-device text, image and audio understanding with configurable reasoning. Instruction-tuned variant gemma-4-E2B-it is the primary evaluated release.
- **Provider / access:** Open weights Apache 2.0; Hugging Face `google/gemma-4-E2B` / `google/gemma-4-E2B-it`. Self-hosted inference, no vendor API. Chat Completions-style usage via Transformers.
- **Release / knowledge:** 2026-07-02 arXiv technical report; Hugging Face release 2026-07-15. Training data cutoff January 2025.
- **IDs:** `google/gemma-4-E2B` base, `google/gemma-4-E2B-it` instruction tuned
- **Context window:** 128K tokens total. Verified by model card overview table and technical report.
- **Modalities:** Input text, image, audio; Output text. Reasoning yes, native function calling yes, JSON mode supported via chat template.
- **Pricing (as of 2026-10-25):** Open weights free to run locally. No commercial API pricing. Cost efficiency scored as $0.
- **Architecture:** 2.3B effective parameters, 5.1B with embeddings, 35 layers, dense, sliding window 512 tokens, Per-Layer Embeddings. Apache 2.0 open weights. Vision encoder ~150M, audio encoder ~300M.

### Raw benchmarks found

> Sources: Hugging Face model card `google/gemma-4-E2B` and `google/gemma-4-E2B-it`, Gemma 4 Technical Report arXiv:2607.02770, Hugging Face evaluation results for `gemma-4-E2B-it`.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: Tau2 average over 3 **24.5%** — Hugging Face model card benchmark table
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **43.4%** — Hugging Face model card table; Hugging Face evaluation results confirm 43.4
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for this exact ID
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: **44.0%** v6 — Hugging Face model card table
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: Codeforces ELO **633** — Hugging Face model card table

Long context:

- MRCR v2 8 needle 128k average **19.1%** — Hugging Face model card table

Multimodal / vision / audio proxies:

- MMLU Pro: **60.0%** — Hugging Face model card table
- AIME 2026 no tools: **37.5%** — Hugging Face model card table
- MMMLU: **67.4%** — Hugging Face model card table
- MMMU Pro: **44.2%** — Hugging Face model card table
- OmniDocBench 1.5 avg edit distance **0.290** lower is better — Hugging Face model card table
- MATH-Vision: **52.4%** — Hugging Face model card table
- MedXPertQA MM: **23.5%** — Hugging Face model card table
- CoVoST: **33.47** — Hugging Face model card table
- FLEURS: **0.09** lower is better — Hugging Face model card table

### Normalized scores (1–100)

- **Tool use: 35/100.** Tau2 average 24.5% with no Terminal-Bench, GDPval-AA or Claw-Eval numbers. No independent agentic tool-use reports found. Capped by absence of verified tool benchmarks.
- **Reasoning: 45/100.** GPQA Diamond 43.4%, AIME 2026 no tools 37.5%, BigBench Extra Hard 21.9%. Modest reasoning for a 2.3B effective model, no HLE/LCR/CritPt public scores. Capped by low GPQA and lack of long-reasoning metrics.
- **Context window: 55/100.** 128K tokens verified. Tier 100K–200K maps to 50–64 per methodology. No public RULER/GraphWalks or MRCR retrieval score above 20% at 128K.
- **Multimodal: 80/100.** Text, image and audio input with text output, native function calling and reasoning mode. No public MMMU Pro score exceeds 44.2% and audio metrics are modest; audio support lifts score vs text-only.
- **Coding: 45/100.** LiveCodeBench v6 44.0% and Codeforces ELO 633. No SWE-bench Verified, DeepSWE or SciCode numbers. Mid-low coding for size class.
- **Cost efficiency: 100/100.** Open weights Apache 2.0, self-hosted $0 inference cost.
- **Overall Score: 52/100.** Mean of five quality dims (35+45+55+80+45)/5 = 52.0. Best-fit: small open multimodal reasoner for on-device prototyping and audio/image demos; not a production agentic/coding workhorse.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
