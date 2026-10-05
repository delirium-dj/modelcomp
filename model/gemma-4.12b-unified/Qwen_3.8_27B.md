# Gemma 4 12B (Unified) — findings by Qwen 3.8 27B

- Source: Google DeepMind (`google/gemma-4-12B`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B (Unified)
- **Short description:** Google DeepMind's 12B open-weight "unified" dense model of the Gemma 4 family (released 2026-04-02 in five sizes: E2B, E4B, 12B, 26B A4B MoE, 31B dense). Runs on ~16GB consumer hardware, adds native audio support to the Gemma line, and nearly matches the 26B A4B on several benchmarks.
- **Provider / access:** Hugging Face `google/gemma-4-12B` (open weights, Apache 2.0); Google AI Studio; Ollama. No OpenCode Zen listing found this pass.
- **Release / knowledge:** Released 2026-04-02; training data ends January 2025 (technical report). A 2026-07-15 refresh updated tool-calling behaviour, chat template and vision defaults without a version bump — pre/post-July benchmark runs are not strictly comparable.
- **IDs:** `google/gemma-4-12B` (Hugging Face); no verified hosted API ID or Free ID on OpenCode Zen this pass.
- **Context window:** up to 256K tokens (official model card, ai.google.dev/gemma/docs/core/model_card_4, verified 2026-10-05).
- **Modalities:** text, image, audio, document/PDF in; text out; thinking mode; tool calls; 140+ languages. No verified public video-input support found.
- **Pricing (as of 2026-10-05):** open weights — free to self-host (Apache 2.0); no paid per-token tier verified this pass.
- **Architecture:** 12B dense ("unified"); shared audio encoder with the edge models (305M-param encoder, shrunk 78% vs Gemma 3n); open weights, Apache 2.0.

### Raw benchmarks found

> Primary source: Gemma 4 Technical Report (arXiv:2607.02770) tables as compiled by gemmai4.com (independent community reference, last updated August 2026; self-reported vendor numbers, thinking mode enabled unless noted); official model card at ai.google.dev/gemma/docs/core/model_card_4; ThenNewStack launch coverage (native audio support). Long-context rows measured without thinking mode.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for the 12B (family-level note: independent aggregate testing ranks the 31B near the bottom of agentic composites, #129/134 at 25.5/100; the 2026-07-15 refresh improved tool calling, e.g. 31B +10.1% on Tau2 Telecom)
- Tau3-Banking / Tau2-Bench: no verified public score found for the 12B
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (technical report via gemmai4.com, thinking on)
- AIME 2026: **77.5** (no tools; post-cutoff, contamination-resistant)
- MMLU Pro: **77.2**
- HLE: **5.2** (12B); family: 31B 19.5 / 26B A4B 8.7 / 31B with search 26.5
- BBH (micro avg): **53.0**
- IFEval / IFBench: **97.2 / 74.0**

Coding:

- LiveCodeBench v6: **72.0**
- SciCode: **38.0**
- Codeforces Elo: **1659**
- SWE-Rebench (real-repo patching): no verified public score found for the 12B (31B measured at 41.6% by independent testing)

Long context:

- RULER @32K: **96.4**; RULER @128K: **91.2** (no thinking)
- LOFT retrieval Recall@k @128K: **66.4**
- GraphWalks F1 (<128K): **71.0**
- MTOB eng→kgv: **45.1 @128K / 41.9 @256K**

Multimodal (1120 vision tokens unless noted):

- MMMU Pro: **69.1** (67.7 at low-res 280 tokens)
- MATH-Vision: **79.7**
- InfographicVQA: **88.4**
- MedXpertQA MM: **48.7**
- OmniDocBench 1.5: **0.164** (lower is better; document understanding)
- FLEURS transcription WER: **0.063** (lower is better); CoVoST speech-translation BLEU: **42.3** (audio)

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified TB2.1/Tau3/GDPval number for the 12B; the family's agentic composites are independently rated near the bottom of the tested field (31B #129/134), with only the July 2026 refresh improving tool calling. Unmeasured 12B agentic capability scores at the low end of the mid band.
- **Reasoning: 70/100.** GPQA Diamond 78.8, AIME 2026 77.5 and MMLU Pro 77.2 are solidly above the mid band, but HLE 5.2 is far from frontier and shows the model's ceiling on hardest-difficulty problems.
- **Context window: 75/100.** 256K native (200K–500K band, 65–84) with verified RULER 91.2 at 128K and usable 256K MTOB (41.9); no verified ≥98% retrieval at 512K+ to reach the top band.
- **Multimodal: 90/100.** Image + audio + document input with text-only output places it in the top coverage tier; measured vision is strong but not frontier (MMMU Pro 69.1, MedXpertQA 48.7) and no video input verified.
- **Coding: 68/100.** LiveCodeBench v6 72.0 with SciCode 38.0 sits in the 65–75 mid band; no verified 12B SWE-Rebench number (31B at 41.6% independent).
- **Cost efficiency: 100/100.** Open weights under Apache 2.0 — free to self-host; no paid per-token tier verified this pass.
- **Overall Score: 70/100.** (45 + 70 + 75 + 90 + 68) / 5 = 69.6 → 70; best-fit as a free local multimodal (audio + document) workhorse on ~16GB hardware, not an agentic driver.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b:free)** — 2026-10-05
- Method: public internet research (Gemma 4 Technical Report tables via gemmai4.com, official Google model card, ThenNewStack launch coverage; retrieved 2026-10-05); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
