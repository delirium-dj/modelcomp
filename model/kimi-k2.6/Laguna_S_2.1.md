# Kimi K2.6 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Kimi K2.6 (Moonshot AI)
- Short description: Moonshot AI's open-weights, native multimodal agentic MoE model. Released April 2026 as a successor to Kimi K2.5, positioned for long-horizon coding, coding-driven design, and swarm-based orchestration across text, image, and video inputs.
- Provider / access: Hugging Face `moonshotai/Kimi-K2.6` (open weights, Modified MIT license, commercial-use-allowed with restrictions); also Kimi API (`https://platform.moonshot.ai`) with OpenAI-compatible Chat Completions API; ID `kimi-k2.6`. Available via 13 API providers (Nebius fastest at 250.4 t/s, CoreWeave cheapest at $0.58/1M blended).
- Release: April 20, 2026 (per AA). Knowledge cutoff: not published.
- IDs: `moonshotai/Kimi-K2.6` (HF), `kimi-k2.6` (AA/BenchLM style).
- Context window: **256K / 262,144** tokens (AA confirms 256k; HF card confirms "Context Length: 256K"; providers list 262k).
- Modalities: **Text, image, and video input; text output** (AA confirms; HF card shows `image-text-to-text` pipeline, MoonViT vision encoder 400M params). Reasoning yes; tool/function calls yes (all 13 providers support); JSON mode yes (all 13 providers support).
- Pricing (as of 2026-10-01): Kimi first-party API **$0.95 in / $4.00 out per 1M tokens** (AA); 83% cache discount. Provider-blended ranges from $0.51–$1.91 input (CoreWeave cheapest). Paid-tier.
- Architecture: **Mixture-of-Experts (MoE), 1T total / 32B active**, 384 experts (8 selected per token + 1 shared), 61 layers (1 dense + 60 MoE), 64 attention heads, MLA attention, 160K vocab, SwiGLU, MoonViT vision encoder (400M params), Modified MIT license.

### Raw benchmarks found

> Verified public numbers from BenchLM (`https://benchlm.ai/models/kimi-k2-6`) and Artificial Analysis (`https://artificialanalysis.ai/models/kimi-k2-6`), plus Hugging Face model card evaluation results. Kimi K2.6 is noted as deprecated by AA (only default 10k workload continued; K2.5 sibling results retained for comparison).

Agent / tool use:

- BrowseComp: **83.2%** (Kimi K2.6 HF eval table; GPT-5.4 xhigh 82.7, Claude Opus 4.6 max 83.7)
- BrowseComp (Agent Swarm): **86.3%** (Kimi K2.6 HF eval; no comparison rows)
- DeepSearchQA (f1-score): **92.5%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 78.6, Claude 80.6)
- DeepSearchQA (accuracy): **83.0%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 63.7, Claude 80.6)
- DeepSearchQA (WideSearch item-f1): **80.8%** (Kimi K2.6 HF eval; no comparison)
- Toolathlon: **50.0%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 54.6, Claude 47.2)
- Claw Eval (pass^3): **62.3%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 60.3, Claude 70.4)
- Claw Eval (pass@3): **80.9%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 78.4, Claude 82.4)
- OSWorld-Verified: **73.1%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 75.0, Claude 72.7)
- AA Intelligence Index: **27** (AA — #21/117 among open-weights models; "4 out of 4 units for Intelligence")
- Terminal-Bench 2.0 (Terminus-2): **66.7%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 65.4*, Claude 65.4)
- SciCode: **52.2%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 56.6, Claude 51.9)
- AA-LCR: **33.9%** (BenchLM)
- AA Terminal-Bench 4.0: **56.1%** (BenchLM)
- GDPval-AA: **53.8%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (Hugging Face eval results; GPT-5.4 xhigh 92.8, Claude 91.3)
- HLE-Full: **34.7%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 39.8, Claude 40.0)
- HLE-Full (w/ tools): **54.0%** (Kimi K2.6 HF eval; no comparison)
- AIME 2026: **96.4%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 99.2, Claude 96.7)
- HMMT 2026 (Feb): **92.7%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 97.7, Claude 96.2)
- IMO-AnswerBench: **86.0%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 91.4, Claude 75.3)
- AA-HLE: **52.9%** (BenchLM)
- AA OMniscience Accuracy: **62.1%** (BenchLM)
- AA Omniscience Hallucination Rate: **41.5** (BenchLM index; 54.3% rate)
- CritPt: **31.7%** (BenchLM)
- MLCR-AA: **33.9%** (BenchLM)

Coding:

- SWE-bench Verified: **80.2%** (Hugging Face eval results; GPT-5.4 xhigh not published, Claude 80.8)
- SWE-bench Multilingual: **76.7%** (Kimi K2.6 HF eval; GPT-5.4 xhigh not published, Claude 77.8)
- SWE-bench Pro: **58.6%** (Hugging Face eval results; GPT-5.4 xhigh 57.7, Claude 53.4)
- LiveCodeBench (v6): **89.6%** (Kimi K2.6 HF eval; GPT-5.4 xhigh not published, Claude 88.8)
- SciCode: **52.2%** (also listed above; coding)
- AA-SciCode: **54.2%** (BenchLM)
- DeepSWE: **no verified public score found** for this exact ID

Long context:

- **no MRCR / RULER / GraphWalks** retrieval figure published on HF card or AA page

Multimodal:

- MMMU-Pro: **79.4%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 81.2, Claude 73.9)
- MMMU-Pro (w/ python): **80.1%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 82.1, Claude 77.3)
- CharXiv (RQ): **80.4%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 82.8*, Claude 69.1)
- CharXiv (RQ, w/ python): **86.7%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 90.0*, Claude 84.7)
- MathVision: **87.4%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 92.0*, Claude 71.2)
- MathVision (w/ python): **93.2%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 96.1*, Claude 84.6)
- BabyVision: **39.8%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 49.7, Claude 14.8)
- BabyVision (w/ python): **68.5%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 80.2*, Claude 38.4)
- V* (w/ python): **96.9%** (Kimi K2.6 HF eval; GPT-5.4 xhigh 98.4*, Claude 86.4)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Benchmarks verified from BenchLM, Hugging Face eval results, and AA as of 2026-10-01.

- **Tool use: 83/100.** Strong agentic cluster: OSWorld-Verified 73.1%, AA AutomationBench 64.9%, AA Intelligence Index 27 (#21/117 open-weights), DeepSearchQA 92.5% f1 / 83.0% acc, BrowseComp 83.2%, Claw Eval 80.9% pass@3; capped by ExploitGym 35.1%, GDP.pdf 31.0%, AA Terminal-Bench 4.0 56.1%, no GDPval-AA normalized row on this page.
- **Reasoning: 89/100.** Excellent frontier reasoning: GPQA Diamond 90.5%, AIME 2026 96.4%, HMMT 2026 92.7%, IMO-AnswerBench 86.0%, AA-HLE 52.9%, AA Omniscience Accuracy 62.1%; capped by HLE-Full 34.7%, CritPt 31.7%, MLCR-AA 33.9% (long-context reasoning weak).
- **Context window: 80/100.** AA-verified **256K** tokens (262,144; 1 dense + 60 MoE layers, MLA). Above 128K tier, below 1M frontier; no retrieval-curve (MRCR/RULER) figure published → moderate cap.
- **Multimodal: 82/100.** Verified text + image + video input, text output (AA confirms; HF card shows MoonViT vision encoder) + strong visual reasoning: MMMU-Pro 79.4% (80.1% w/ python), CharXiv 80.4% (86.7% w/ python), MathVision 87.4% (93.2% w/ python), V* 96.9%; capped by BabyVision 39.8% (no-python) and lack of broader vision-suite breadth beyond HF-eval reported numbers.
- **Coding: 88/100.** Outstanding coding cluster: SWE-bench Verified 80.2%, LiveCodeBench v6 89.6%, SWE-bench Multilingual 76.7%, SWE-bench Pro 58.6%, AA-SciCode 54.2%, Terminal-Bench 2.0 66.7%; capped by DeepSWE not published for this exact ID and SWE-Pro not published.
- **Cost efficiency: 73/100.** Kimi API $0.95 in / $4.00 out (paid-tier, expensive on AA's scale) but 83% cache discount + provider-blended as low as $0.51 input (CoreWeave); no Free ID on Zen. Elite value when using cheapest providers; poor via first-party API.
- **Overall Score: 84/100.** (83 + 89 + 80 + 82 + 88) / 5 = 422 / 5 = 84.4 → 84. **Best-fit:** Open-weights multimodal agentic-coding model with elite coding (SWE-Verified 80.2%, LiveCodeBench 89.6%) and reasoning (GPQA 90.5%, AIME 96.4%) clusters; cap: weak long-context reasoning (MLCR 33.9%) and no MRCR/RULER retrieval figure. Note: AA marks model as deprecated (K2.6 superseded by K3); scores reflect verified historical performance.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public-internet research (BenchLM `https://benchlm.ai/models/kimi-k2-6` and AA `https://artificialanalysis.ai/models/kimi-k2-6` for Intelligence Index, agentic/coding/reasoning/multimodal/long-context benchmarks; Hugging Face model card `moonshotai/Kimi-K2.6` for architecture/license/modality/context and HF-hosted evaluation results table). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research; architecture confirmed independently from the HF config (Total Parameters 1T, Activated 32B, 384 Experts, 8 selected + 1 shared, 256K context).
- Future sources: add a new file next to this one, e.g. `Kimi_K2_6.md`, using the same headings.
