# Gemma 4 26B A4B — findings by Muse Glimmer 30B

- Source: Google DeepMind / gemma-4-26b-a4b
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind open-weights MoE multimodal model with native reasoning and function-calling. 25.2B total / 3.8B active parameters, instruction-tuned variant gemma-4-26B-A4B-it. Multimodal text+image in, text out.
- **Provider / access:** Open weights; Hugging Face `google/gemma-4-26B-A4B-it`. Available via API providers; Chat Completions compatible. Reasoning variant noted by Artificial Analysis.
- **Release / knowledge:** 2026-04-02 release per Artificial Analysis FAQ; training data cutoff January 2025 per Hugging Face model card.
- **IDs:** `google/gemma-4-26B-A4B-it` (base `google/gemma-4-26B-A4B`)
- **Context window:** 256K tokens total. Verified by Hugging Face model card and Google DeepMind docs; Artificial Analysis lists 256k, FAQ mentions 260k – using official 256K.
- **Modalities:** Input text, image; Output text. Reasoning yes, native function-calling/tool use yes, JSON mode supported via chat template. No audio on 26B A4B; video input not listed for this size.
- **Pricing (as of 2026-10-25):** Provider median per Artificial Analysis: $0.10 / 1M input, $0.34 / 1M output, 50% cache discount. Pricing varies by provider; open-weights self-host free.
- **Architecture:** Mixture-of-Experts, 25.2B total parameters, 3.8B active per token. Apache 2.0 license. Vision encoder ~550M, hybrid sliding window 1024 + global attention.

### Raw benchmarks found

> Sources: Google DeepMind Gemma 4 model page 2026-04-02, Hugging Face google/gemma-4-26B-A4B-it model card technical report arXiv:2607.02770, Artificial Analysis Gemma 4 26B A4B model page. Conflicting context reporting 256k vs 260k noted above.

Agent / tool use:

- Tau2-bench average over 3: **68.2%** — Google DeepMind
- Tau2-bench Retail: **85.5%** — Google DeepMind performance table
- Terminal-Bench 2.1: no verified public score found for this exact ID
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond no tools: **82.3%** — Google DeepMind / Hugging Face model card
- HLE no tools: **8.7%** — Google DeepMind
- HLE with search: **17.2%** — Google DeepMind
- MMLU Pro no tools: **82.6%** — Google DeepMind / Hugging Face
- AIME 2026 no tools: **88.3%** — Google DeepMind
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **17** estimated — Artificial Analysis
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- LiveCodeBench v6: **77.1%** — Google DeepMind / Hugging Face
- Codeforces ELO: **1718** — Google DeepMind
- SWE-bench Verified / SWE-Pro: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR v2 8 needle 128k average: **44.1%** — Hugging Face model card benchmark table

### Normalized scores (1–100)

- **Tool use: 70/100.** Tau2 average 68.2% with Retail 85.5% shows solid agentic tool use; lack of Terminal-Bench 2.1 / Claw-Eval public numbers caps score.
- **Reasoning: 75/100.** GPQA Diamond 82.3%, AIME 2026 88.3%, MMLU Pro 82.6% are strong; HLE no tools 8.7% and no CritPt public score limit ceiling.
- **Context window: 75/100.** 256K verified context places model in 200K–500K tier. No public RULER/GraphWalks score at full window.
- **Multimodal: 65/100.** Text + image input, text output, variable aspect ratio image support; no audio/video on 26B A4B and limited public multimodal benchmark numbers.
- **Coding: 78/100.** LiveCodeBench v6 77.1% and Codeforces ELO 1718 indicate competent competitive coding; no SWE-bench Verified / SciCode public scores.
- **Cost efficiency: 92/100.** Median provider pricing $0.10 / 1M in / $0.34 / 1M out is moderately priced for open-weights MoE; open weights allows self-host free.
- **Overall Score: 73/100.** Mean of five quality dims (70+75+75+65+78)/5 = 72.6 → 73. Best-fit: capable open multimodal MoE reasoner/coder with large context and good provider pricing, limited by sparse independent agentic/coding benchmarks.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `Gemma_4_26B_A4B_Reasoning.md`, using the same headings.

---
