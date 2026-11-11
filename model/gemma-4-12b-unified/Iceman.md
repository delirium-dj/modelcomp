# Gemma 4 12B Unified — findings by Iceman

- Source: Google DeepMind / Gemma 4 12B Unified
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's encoder-free 12B Gemma 4 open model that unifies text, image, and audio understanding in a single decoder-only transformer with a 256K context window, designed for efficient local and hosted multimodal use.
- **Provider / access:** Open weights on Hugging Face `google/gemma-4-12B` (Apache 2.0). Usable via Transformers/local runtimes and various hosted providers; project meta also references `opencode/gemma-4-12b-unified`.
- **Release / knowledge:** Gemma 4 technical report dated 2026 (arXiv:2607.02770); Google AI model card/docs reflect Gemma 4 release. Training data cutoff stated as January 2025 in cited docs.
- **IDs:** `google/gemma-4-12B` (Hugging Face), `google/gemma-4-12b-unified`-style project naming. No separate proprietary API-only ID required for base open-weights use.
- **Context window:** 256,000 tokens (dense medium Gemma 4 model). Project meta notes 262,144 total / 32,768 max output in local deployment context; official model card states 256K context.
- **Modalities:** Text, image, and audio input; text output (Gemma 4 12B Unified). Video can be processed as frame sequences in Gemma 4 family guidance; audio supported natively on E2B/E4B/12B models.
- **Pricing (as of 2026-11-11):** Free open weights under Apache 2.0 for self-hosting. Hosted pricing varies by provider; project meta indicates hosted ~$0.10/$0.25 per 1M input/output tokens in some deployments.
- **Architecture:** Dense 11.95B-parameter encoder-free unified multimodal model (Gemma 4 family). 48 layers, 1024-token sliding window, 262K vocabulary, hybrid attention, no separate vision/audio encoder (raw image patches and audio waveforms projected directly into embedding space).

### Raw benchmarks found

> Scores below are vendor/self-reported instruction-tuned model results from official Google DeepMind Gemma 4 model card / Hugging Face model page / Google AI docs (Gemma 4 technical report context). No independent third-party leaderboard verification was performed in this pass beyond cited official pages.

Agent / tool use:

- Tau2 (average over 3): **69.0%**.
- Function calling supported natively (capability stated), but no Tau3-Banking / GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA benchmark scores found.

Reasoning / knowledge:

- MMLU Pro: **77.2%**.
- GPQA Diamond: **78.8%**.
- AIME 2026 (no tools): **77.5%**.
- HLE (no tools): **5.2%**.
- BigBench Extra Hard: **53.0%**.
- MMMLU: **83.4%**.
- Artificial Analysis Intelligence Index / BenchLM overall / LCR / MLCR / CritPt / Omniscience Accuracy/Hallucination Rate: **no verified public score found**.

Coding:

- LiveCodeBench v6: **72.0%**.
- Codeforces ELO: **1659**.
- SWE-bench Verified / SWE-Pro / SciCode / Vibe Code Bench / DeepSWE / Terminal-Bench / Coding Index: **no verified public score found**.

Long context:

- MRCR v2 8-needle 128k (average): **43.4%**.
- 256K context window documented; RULER / GraphWalks / 256K retrieval metrics: **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 72/100.** Native function-calling support and a decent Tau2 average (69.0%) indicate usable structured tool/agent behavior for a 12B open model, but broader agentic benchmark evidence (Tau3, MCP, terminal/computer-use, GDPval) is not publicly reported.
- **Reasoning: 80/100.** Strong mid-size reasoning results (MMLU Pro 77.2%, GPQA Diamond 78.8%, AIME 2026 no-tools 77.5%, MMMLU 83.4%) are impressive for 12B, while weaker hard-reasoning performance (HLE no tools 5.2%, BigBench Extra Hard 53.0%) caps the score.
- **Context window: 76/100.** A 256K context window is substantial, but measured long-context retrieval is modest (MRCR v2 8-needle 128k average 43.4%) and no 256K retrieval benchmark is reported, limiting confidence in full-window reliability.
- **Multimodal: 78/100.** Unified text/image/audio input with solid reported multimodal results for size (MMMU Pro 69.1%, MATH-Vision 79.7%, MedXPertQA MM 48.7%, OmniDocBench edit distance 0.164, CoVoST 38.5\*, FLEURS 0.069\*) is strong for an open 12B model; output is text-only and video/audio handling is constrained by documented limits.
- **Coding: 81/100.** Good coding signals (LiveCodeBench v6 72.0%, Codeforces ELO 1659) show practical programming capability, but the absence of SWE-bench/Terminal-Bench/SciCode public results leaves agentic software-engineering depth less verified.
- **Cost efficiency: 98/100.** Apache 2.0 open weights enable free self-hosting and low-cost local deployment, with inexpensive hosted options in some environments; operational hardware/inference costs still apply, so it is not literally zero-cost in every use.
- **Overall Score: 77/100.** Mean of the five non-cost quality dimensions (Tool 72, Reasoning 80, Context 76, Multimodal 78, Coding 81) = 77.4, rounded half-up to 77; best fit as a cost-efficient open multimodal model for local/self-hosted reasoning, coding assistance, and document/image/audio understanding within moderate context-reliability limits.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-11
- Method: Fresh public web research using official Google/Hugging Face Gemma 4 model documentation fetched in this run; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [google/gemma-4-12B on Hugging Face](https://huggingface.co/google/gemma-4-12B)
  - [Gemma 4 model card (Google AI for Developers)](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [Gemma 4 Technical Report (arXiv:2607.02770)](https://arxiv.org/abs/2607.02770)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
