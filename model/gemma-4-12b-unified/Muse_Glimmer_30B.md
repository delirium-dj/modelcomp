# Gemma 4 12B Unified — findings by Muse Glimmer 30B

- Source: Google DeepMind / gemma-4-12b-unified
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind open-weight dense multimodal model with encoder-free unified architecture for text, image, audio and video understanding. First mid-sized Gemma with native audio input and laptop-ready deployment. Released June 2026 under Apache 2.0.
- **Provider / access:** Open weights. Hugging Face `google/gemma-4-12B-it`. Available via Transformers, LM Studio, Ollama, Google AI Edge Gallery/Eloquent, LiteRT-LM. No official paid Chat Completions API; open-source local inference.
- **Release / knowledge:** 2026-06-03 blog announcement; technical report arXiv 2607.02770. Training data cutoff January 2025.
- **IDs:** `google/gemma-4-12B-it` [pre-trained `google/gemma-4-12B`]
- **Context window:** 256K tokens total. Verified by Hugging Face model card and developer guide.
- **Modalities:** Input text, image, audio, video; Output text. Reasoning yes with thinking mode, tool/function calling yes, JSON mode supported.
- **Pricing (as of 2026-10-25):** Open weights Apache 2.0, free to download and run locally. No vendor API pricing; self-hosting cost depends on hardware.
- **Architecture:** 11.95B total parameters dense decoder-only transformer, encoder-free multimodal, 48 layers, 1024-token sliding window + global layers, 262K vocab. Unified vision/audio projection, no separate encoders. Apache 2.0 open weights.

### Raw benchmarks found

> Sources: Google DeepMind blog 2026-06-03, Developers Blog Developer Guide 2026-06-03, Hugging Face google/gemma-4-12B-it model card with benchmark table, arXiv 2607.02770 Gemma 4 Technical Report. Conflicting reporting limited to audio metrics excl. Chinese.

Agent / tool use:

- Tau2 average over 3: **69.0%** (Hugging Face model card, instruction-tuned)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found — Tau2 average reported above
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (Hugging Face model card)
- HLE no tools: **5.2%** (Hugging Face model card)
- MMLU Pro: **77.2%** (Hugging Face model card)
- AIME 2026 no tools: **77.5%** (Hugging Face model card)
- BigBench Extra Hard: **53.0%** (Hugging Face model card)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- LiveCodeBench v6: **72.0%** (Hugging Face model card)
- Codeforces ELO: **1659** (Hugging Face model card)
- SWE-bench Verified / SWE-Pro: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR v2 8 needle 128k average: **43.4%** (Hugging Face model card)
- RULER / GraphWalks: no verified public score found

Vision / multimodal raw:

- MMMLU: **83.4%**
- MMMU Pro: **69.1%**
- OmniDocBench 1.5 average edit distance lower is better: **0.164**
- MATH-Vision: **79.7%**
- MedXPertQA MM: **48.7%**

Audio raw:

- CoVoST: **38.5%*** excl. Chinese
- FLEURS WER lower is better: **0.069*** excl. Chinese

### Normalized scores (1–100)

- **Tool use: 70/100.** Tau2 average 69.0% with native function calling. Capped by absence of public Terminal-Bench / Claw-Eval scores.
- **Reasoning: 80/100.** GPQA Diamond 78.8%, MMLU Pro 77.2%, AIME 2026 77.5%. Strong STEM reasoning for 12B class, limited by HLE no-tools 5.2%.
- **Context window: 90/100.** Verified 256K tokens with hybrid sliding/global attention. No long-context retrieval score above 50% caps top tier.
- **Multimodal: 85/100.** Native image/audio/video input with encoder-free unified architecture, MMMLU 83.4% and MATH-Vision 79.7%. Audio ASR/translation still emerging.
- **Coding: 72/100.** LiveCodeBench v6 72.0% and Codeforces ELO 1659. No public SWE-bench/LiveCodeBench v6 independent replication limits score.
- **Cost efficiency: 95/100.** Apache 2.0 open weights, runs on 16GB VRAM laptop. Free to self-host; efficiency high for performance tier.
- **Overall Score: 79/100.** Mean of five quality dims (70+80+90+85+72)/5 = 79.4 → 79. Best-fit: capable open multimodal reasoner with strong context and cost efficiency, limited by tool-use benchmark coverage.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `Muse_Glimmer_30B.md`, using the same headings.

---
