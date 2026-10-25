# Gemma 4 26B A4B — findings by Muse Glimmer 30B

- Source: Google DeepMind / gemma-4-26B-A4B
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind open-weights Mixture-of-Experts multimodal model with 25.2B total / 3.8B active parameters, text+image in / text out, native reasoning mode and function calling. Instruction-tuned variant `google/gemma-4-26B-A4B-it` is the common deployment.
- **Provider / access:** Hugging Face `google/gemma-4-26B-A4B` / `google/gemma-4-26B-A4B-it`; Apache 2.0 open weights. No official Chat Completions API from Google; inference via self-host or third-party routes.
- **Release / knowledge:** 2026-07-02 arXiv technical report; knowledge cutoff Jan 2025 per Hugging Face model card.
- **IDs:** `google/gemma-4-26B-A4B` pre-trained; `google/gemma-4-26B-A4B-it` instruction tuned
- **Context window:** 256K tokens total. Verified by Hugging Face model card and Technical Report.
- **Modalities:** Input text, image; Output text. Reasoning yes, tool calls yes, JSON mode supported. No native audio for 26B A4B.
- **Pricing (as of 2026-10-25):** Open weights free to self-host. Third-party hosted ~$0.09/$0.30 per 1M in/out on OpenRouter; ~$0.13/$0.40 per 1M on Bedrock/Novita/HF Inference. No official free tier.
- **Architecture:** 25.2B total parameters, 3.8B active, MoE with 8 active / 128 total experts +1 shared, 30 layers, 1024 token sliding window, vision encoder ~550M. Apache 2.0 open weights.

### Raw benchmarks found

> Sources: Hugging Face model card `google/gemma-4-26B-A4B` and `google/gemma-4-26B-A4B-it` benchmark tables; arXiv Gemma 4 Technical Report 2607.02770.

Agent / tool use:

- Tau2 average over 3: **68.2%** (Hugging Face benchmark table, instruction tuned)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: Tau2 68.2% proxy; no Tau3 public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.3%** (Hugging Face benchmark table)
- HLE: **8.7%** no tools; **17.2%** with search (Hugging Face benchmark table)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- MMLU Pro: **82.6%** (Hugging Face)
- AIME 2026 no tools: **88.3%** (Hugging Face)
- BigBench Extra Hard: **64.8%** (Hugging Face)
- MMMLU: **86.3%** (Hugging Face)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench v6: **77.1%** (Hugging Face)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: Codeforces ELO **1718** (Hugging Face)

Long context:

- MRCR v2 8 needle 128k average: **44.1%** (Hugging Face benchmark table)
- No RULER / GraphWalks public score found

Vision:

- MMMU Pro: **73.8%** (Hugging Face)
- OmniDocBench 1.5 average edit distance: **0.149**, lower is better (Hugging Face)
- MATH-Vision: **82.4%** (Hugging Face)
- MedXPertQA MM: **58.1%** (Hugging Face)

### Normalized scores (1–100)

- **Tool use: 65/100.** Tau2 average 68.2% gives mid-tier agentic signal; capped by absence of Terminal-Bench 2.1, Tau3-Banking, GDPval-AA and Claw-Eval public scores.
- **Reasoning: 75/100.** GPQA Diamond 82.3% and AIME 2026 88.3% are strong; HLE no tools 8.7% is low and no CritPt/LCR public numbers cap the score.
- **Context window: 75/100.** 256K tokens verified; tier maps to 200K-500K range. MRCR v2 44.1% at 128K shows limited long-context retrieval.
- **Multimodal: 65/100.** Text+image in, text out with 550M vision encoder; MMMU Pro 73.8% and MATH-Vision 82.4% support vision competence, but no audio/video and limited independent multimodal suite coverage caps score.
- **Coding: 75/100.** LiveCodeBench v6 77.1% and Codeforces ELO 1718 indicate solid code generation; capped by no verified SWE-bench Verified / DeepSWE / SciCode scores.
- **Cost efficiency: 97/100.** Open weights free to self-host; third-party hosted ~$0.09/$0.30 per 1M is among the cheapest commercial routes, with a $0 free route available via some providers.
- **Overall Score: 71/100.** Mean of five quality dims (65+75+75+65+75)/5 = 71. Best-fit: efficient open MoE for text-image reasoning and coding with cheap inference, but benchmark coverage is uneven vs frontier closed models.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
