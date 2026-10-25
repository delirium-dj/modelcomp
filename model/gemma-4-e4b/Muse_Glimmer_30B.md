# Gemma 4 E4B — findings by Muse Glimmer 30B

- Source: Google DeepMind / gemma-4-e4b
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google DeepMind open multimodal edge model with 4.5B effective parameters, designed for mobile/IoT deployment with text, image and audio understanding and configurable reasoning. Part of the Gemma 4 family announced April 2026.
- **Provider / access:** Open weights. Hugging Face `google/gemma-4-4b-it`, Ollama `gemma4:e4b`, LM Studio, Kaggle. Self-hosted; no first-party commercial API.
- **Release / knowledge:** 2026-04 (Gemma 4 family). Knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemma-4-4b-it` `ollama/gemma4:e4b`
- **Context window:** 128K tokens total. Verified by Ollama model index and DeepMind Gemma 4 documentation.
- **Modalities:** Input text, image, audio; Output text. Reasoning configurable via `<|think|>` token, native function calling support, system role support.
- **Pricing (as of 2026-10-25):** Open weights, free self-host. No official API pricing.
- **Architecture:** 4.5B effective parameters (8B with embeddings), 42 layers, sliding window 512 tokens, vocab 262K. Vision encoder ~150M, audio encoder ~300M. Open Gemma license.

### Raw benchmarks found

> Sources: Google DeepMind Gemma 4 model page 2026-04, Ollama gemma4 library page 2026-09, Hugging Face collection metadata. Conflicting τ2/τ2-bench numbers are reported from both sources.

Agent / tool use:

- τ2-bench Agentic tool use Retail: **57.5%** (DeepMind, Gemma 4 E4B IT Thinking)
- Tau2 average over 3: **42.2%** (Ollama benchmark table for Gemma 4 E4B)
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **58.6%** (DeepMind; Ollama confirms 58.6%)
- MMLU Pro / MMMLU Multilingual Q&A: **69.4%** (DeepMind; Ollama 69.4% MMLU Pro, 76.6% MMMLU)
- AIME 2026 Mathematics no tools: **42.5%** (DeepMind; Ollama 42.5%)
- MATH-Vision: **59.5%** (Ollama)
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- LiveCodeBench v6 Competitive coding: **52.0%** (DeepMind; Ollama 52.0%)
- Codeforces ELO: **940** (Ollama)
- BigBench Extra Hard: **33.1%** (Ollama)
- SWE-bench Verified / SWE-Pro: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- MRCR v2 8 needle 128k average: **25.4%** (Ollama)
- Long-context retrieval: 128K context window reported, no RULER/GraphWalks public score found

### Normalized scores (1–100)

- **Tool use: 50/100.** τ2-bench Retail 57.5% vs Tau2 average 42.2% shows moderate agentic tool use for an edge model; no Terminal-Bench or GDPval public numbers cap the score.
- **Reasoning: 60/100.** GPQA Diamond 58.6%, AIME 2026 42.5%, MMMLU 76.6%. Solid multilingual knowledge with modest math reasoning; lacks HLE/CritPt public scores.
- **Context window: 55/100.** 128K tokens verified for E4B. Tier 100K–200K maps to 50–64; MRCR 25.4% at 128K indicates limited long-context retrieval.
- **Multimodal: 75/100.** Text, image and audio input with text output; vision ~150M encoder, audio ~300M encoder. No video-in reported; limited public multimodal benchmark coverage caps score below frontier models.
- **Coding: 55/100.** LiveCodeBench v6 52.0% and Codeforces ELO 940 show functional coding for size class; no SWE-bench or SciCode public numbers.
- **Cost efficiency: 100/100.** Open weights, free self-host on edge devices.
- **Overall Score: 59/100.** Mean of five quality dims (50+60+55+75+55)/5 = 59. Best-fit: capable edge multimodal reasoner with modest tool/coding strength and 128K context; ideal for on-device assistants, not frontier coding/agentic work.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.
