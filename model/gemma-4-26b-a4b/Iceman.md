# Gemma 4 26B A4B — findings by Iceman

- Source: Google DeepMind / Gemma 4 26B A4B
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's Gemma 4 sparse Mixture-of-Experts open model (25.2B total / 3.8B active parameters) optimized for fast, high-throughput multimodal reasoning, coding, and agentic workflows with a 256K context window.
- **Provider / access:** Open weights on Hugging Face `google/gemma-4-26B-A4B` (Apache 2.0). Usable via Transformers/local runtimes and hosted providers; project meta also references `opencode/gemma-4-26b-a4b`.
- **Release / knowledge:** Gemma 4 family release/technical report (arXiv:2607.02770). Training data cutoff stated as January 2025 in cited Gemma 4 docs.
- **IDs:** `google/gemma-4-26B-A4B` (Hugging Face), project naming `gemma-4-26b-a4b`. No separate proprietary API-only ID required for base open-weights use.
- **Context window:** 256,000 tokens (Gemma 4 medium MoE model). Project meta notes 262,144 total / 32,768 max output in local deployment context; official model card states 256K context.
- **Modalities:** Text and image input; text output (per Gemma 4 model card for 26B A4B). Video can be processed as frame sequences in family guidance; no native audio encoder listed for this variant.
- **Pricing (as of 2026-11-11):** Free open weights under Apache 2.0 for self-hosting. Hosted pricing varies by provider; project meta indicates hosted ~$0.12/$0.30 per 1M input/output tokens in some deployments.
- **Architecture:** Sparse Mixture-of-Experts model, 25.2B total parameters with 3.8B active per token, 30 layers, 1024-token sliding window, 262K vocabulary, 8 active experts out of 128 total plus 1 shared expert, ~550M vision encoder parameters.

### Raw benchmarks found

> Scores below are vendor/self-reported instruction-tuned model results from official Google DeepMind Gemma 4 model card / Hugging Face model page (Gemma 4 technical report context). No independent third-party leaderboard verification was performed in this pass beyond cited official pages.

Agent / tool use:

- Tau2 (average over 3): **68.2%**.
- Function calling supported natively (capability stated), but no Tau3-Banking / GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA benchmark scores found.

Reasoning / knowledge:

- MMLU Pro: **82.6%**.
- GPQA Diamond: **82.3%**.
- AIME 2026 (no tools): **88.3%**.
- HLE (no tools): **8.7%**; HLE with search: **17.2%**.
- BigBench Extra Hard: **64.8%**.
- MMMLU: **86.3%**.
- Artificial Analysis Intelligence Index / BenchLM overall / LCR / MLCR / CritPt / Omniscience Accuracy/Hallucination Rate: **no verified public score found**.

Coding:

- LiveCodeBench v6: **77.1%**.
- Codeforces ELO: **1718**.
- SWE-bench Verified / SWE-Pro / SciCode / Vibe Code Bench / DeepSWE / Terminal-Bench / Coding Index: **no verified public score found**.

Long context:

- MRCR v2 8-needle 128k (average): **44.1%**.
- 256K context window documented; RULER / GraphWalks / 256K retrieval metrics: **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 73/100.** Native function-calling support and solid Tau2 performance (68.2%) indicate usable agent/tool behavior for an open MoE model, but broader agentic benchmark coverage (Tau3, MCP, terminal/computer-use, GDPval) is not publicly reported.
- **Reasoning: 84/100.** Strong reasoning/math/science results (MMLU Pro 82.6%, GPQA Diamond 82.3%, AIME 2026 no-tools 88.3%, MMMLU 86.3%) are high for a 3.8B-active model, but difficult exam performance remains limited (HLE 8.7% no tools / 17.2% with search, BigBench Extra Hard 64.8%).
- **Context window: 77/100.** A 256K context window is substantial for long documents and codebases, but measured long-context retrieval is moderate (MRCR v2 8-needle 128k average 44.1%) and no 256K retrieval benchmark is reported.
- **Multimodal: 74/100.** Strong vision understanding for size (MMMU Pro 73.8%, MATH-Vision 82.4%, MedXPertQA MM 58.1%, OmniDocBench edit distance 0.149) with image/video-frame support, but no native audio modality and text-only output limit multimodal breadth versus unified omnimodal models.
- **Coding: 84/100.** Good coding capability (LiveCodeBench v6 77.1%, Codeforces ELO 1718) suggests strong practical programming performance for an efficient MoE model, though public SWE-bench/Terminal-Bench/SciCode evidence is not reported in cited sources.
- **Cost efficiency: 98/100.** Apache 2.0 open weights allow free self-hosting and efficient inference via sparse activation (3.8B active), with low-cost hosted options possible; real deployment still incurs compute costs.
- **Overall Score: 78/100.** Mean of the five non-cost quality dimensions (Tool 73, Reasoning 84, Context 77, Multimodal 74, Coding 84) = 78.4, rounded half-up to 78; best fit as an efficient open multimodal MoE model for fast reasoning, coding, and image-aware tasks where throughput and local/self-hosted deployment matter.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-11
- Method: Fresh public web research using official Google/Hugging Face Gemma 4 model documentation fetched in this run; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [google/gemma-4-26B-A4B on Hugging Face](https://huggingface.co/google/gemma-4-26B-A4B)
  - [Gemma 4 model card (Google AI for Developers)](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [Gemma 4 Technical Report (arXiv:2607.02770)](https://arxiv.org/abs/2607.02770)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
