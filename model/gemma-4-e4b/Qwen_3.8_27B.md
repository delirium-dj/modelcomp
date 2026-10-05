# Gemma 4 E4B — findings by Qwen 3.8 27B

- Source: Google DeepMind (`google/gemma-4-E4B`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google DeepMind's ~4B-parameter edge model from the Gemma 4 family (April 2026) — the mid-size on-device member between E2B and the 12B unified model, with native audio and a materially stronger agentic profile after the July 2026 tool-calling refresh.
- **Provider / access:** Hugging Face `google/gemma-4-E4B` (open weights, Apache 2.0); Google AI Studio; Ollama; on-device runtimes. No OpenCode Zen listing found this pass.
- **Release / knowledge:** Released 2026-04-02; training data ends January 2025 (technical report). A 2026-07-15 refresh updated tool-calling behaviour, chat template and vision defaults without a version bump — pre/post-July benchmark runs are not strictly comparable (the refresh moved E4B from effectively zero to a working score on TB2 agent benchmarks).
- **IDs:** `google/gemma-4-E4B` (Hugging Face); no verified hosted API ID or Free ID on OpenCode Zen this pass.
- **Context window:** 128K nominal (edge models nominally support 128K per the technical-report long-context discussion; no verified 256K figure for E4B this pass).
- **Modalities:** text, image, audio in; text out; 140+ languages; tool calls (working post-2026-07-15 refresh). No verified public video-input support.
- **Pricing (as of 2026-10-05):** open weights — free to self-host (Apache 2.0); no paid per-token tier verified this pass.
- **Architecture:** ~4B parameters ("E4B" edge size, 305M-param shared audio encoder); open weights, Apache 2.0.

### Raw benchmarks found

> Primary source: Gemma 4 Technical Report (arXiv:2607.02770) tables as compiled by gemmai4.com (independent community reference, last updated August 2026; self-reported vendor numbers, thinking mode enabled unless noted); official model card at ai.google.dev/gemma/docs/core/model_card_4. Long-context rows measured without thinking mode.

Agent / tool use:

- Terminal-Bench 2.1: no verified public E4B number found this pass — the 2026-07-15 refresh moved E4B "from effectively zero on TB2 agent benchmarks to a working score" (gemmai4.com weakness section; exact post-refresh value not published there)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- AIME 2026: **42.5** (no tools; post-cutoff)
- MMLU Pro: **69.4**
- GPQA Diamond: **58.6%**
- BBH (micro avg): **33.1**
- IFEval / IFBench: **96.7 / 44.0**
- HLE: not measured for E4B (—)

Coding:

- LiveCodeBench v6: **52.0**
- SciCode: **24.0**
- Codeforces Elo: **940**
- SWE-bench / SWE-Rebench: no verified public score found

Long context:

- RULER @32K: **95.2**; RULER @128K: **86.6** (no thinking)
- LOFT retrieval Recall@k @128K: **58.5**
- GraphWalks F1 (<128K): **50.9**
- MTOB eng→kgv @128K: **37.8**

Multimodal:

- MMMU Pro: **52.6** (51.4 at low-res 280 tokens)
- MATH-Vision: **59.5**
- InfographicVQA: **70.0**
- MedXpertQA MM: **28.7**
- OmniDocBench 1.5: **0.181** (lower is better; document understanding)
- FLEURS transcription WER: **0.075** (lower is better); CoVoST speech-translation BLEU: **38.2** (audio; improves 10% translation / 12% transcription vs Gemma 3n E4B)

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified TB2.1/Tau3 number this pass, but the July 2026 refresh is documented to have moved E4B from effectively zero to a working TB2 agent score — better than the family's pre-refresh agentic record and better than E2B, still unmeasured for exact values.
- **Reasoning: 50/100.** MMLU Pro 69.4 reaches the mid band; AIME 42.5 and GPQA Diamond 58.6 sit below it.
- **Context window: 55/100.** 128K nominal (100K–200K band, 50–64) with RULER 86.6 at 128K, LOFT 58.5 and GraphWalks 50.9 — retrieval holds up, multi-hop degrades.
- **Multimodal: 78/100.** Image + audio + document input with text-only output reaches the top coverage tier for a model this size; measured vision is modest (MMMU Pro 52.6, MATH-Vision 59.5).
- **Coding: 42/100.** LiveCodeBench v6 52.0, SciCode 24.0 and Codeforces 940 are below the mid band.
- **Cost efficiency: 100/100.** Open weights under Apache 2.0 — free to self-host on-device; no paid per-token tier verified this pass.
- **Overall Score: 53/100.** (40 + 50 + 55 + 78 + 42) / 5 = 53.0 → 53; best-fit as a free on-device generalist with voice/document input where E2B is too weak and 12B too heavy.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b:free)** — 2026-10-05
- Method: public internet research (Gemma 4 Technical Report tables via gemmai4.com, official Google model card; retrieved 2026-10-05); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
