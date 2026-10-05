# Gemma 4 E2B — findings by Qwen 3.8 27B

- Source: Google DeepMind (`google/gemma-4-E2B`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google DeepMind's ~2B-parameter edge model from the Gemma 4 family (April 2026), designed for phones/low-memory devices — runs in under a gigabyte of RAM with native audio support; the smallest member of the E2B/E4B/12B/26B A4B/31B lineup.
- **Provider / access:** Hugging Face `google/gemma-4-E2B` (open weights, Apache 2.0); Google AI Studio; Ollama; on-device runtimes. No OpenCode Zen listing found this pass.
- **Release / knowledge:** Released 2026-04-02; training data ends January 2025 (technical report). A 2026-07-15 refresh updated tool-calling behaviour, chat template and vision defaults without a version bump — pre/post-July benchmark runs are not strictly comparable.
- **IDs:** `google/gemma-4-E2B` (Hugging Face); no verified hosted API ID or Free ID on OpenCode Zen this pass.
- **Context window:** 128K nominal (edge models nominally support 128K per the technical-report long-context discussion; the family headline is "up to 256K" on ai.google.dev for larger sizes — no verified 256K figure for E2B this pass).
- **Modalities:** text, image, audio in; text out; 140+ languages; tool calls (improved in the 2026-07-15 refresh; the E4B sibling moved from effectively zero to a working TB2 agent score, E2B not separately measured this pass). No verified public video-input support.
- **Pricing (as of 2026-10-05):** open weights — free to self-host (Apache 2.0); no paid per-token tier verified this pass.
- **Architecture:** ~2B parameters ("E2B" edge size, 305M-param shared audio encoder); open weights, Apache 2.0.

### Raw benchmarks found

> Primary source: Gemma 4 Technical Report (arXiv:2607.02770) tables as compiled by gemmai4.com (independent community reference, last updated August 2026; self-reported vendor numbers, thinking mode enabled unless noted); official model card at ai.google.dev/gemma/docs/core/model_card_4. Long-context rows measured without thinking mode.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for the E2B (sibling E4B went from effectively zero to a working TB2 agent score after the 2026-07-15 refresh; family agentic composites independently rated near the bottom of the tested field)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- AIME 2026: **37.5** (no tools; post-cutoff)
- MMLU Pro: **60.0**
- GPQA Diamond: **43.4%**
- BBH (micro avg): **21.9**
- IFEval / IFBench: **94.6 / 38.0**
- HLE: not measured for E2B (—)

Coding:

- LiveCodeBench v6: **44.0**
- SciCode: **21.0**
- Codeforces Elo: **633**
- SWE-bench / SWE-Rebench: no verified public score found

Long context:

- RULER @32K: **83.0**; RULER @128K: **70.4** (no thinking)
- LOFT retrieval Recall@k @128K: **50.5**
- GraphWalks F1 (<128K): **4.1** (effectively a failure — multi-hop reasoning across long context unreliable)
- MTOB eng→kgv @128K: **15.4**

Multimodal:

- MMMU Pro: **44.2** (43.2 at low-res 280 tokens)
- MATH-Vision: **52.4**
- InfographicVQA: **63.9**
- MedXpertQA MM: **23.5**
- OmniDocBench 1.5: **0.290** (lower is better; document understanding)
- FLEURS transcription WER: **0.090** (lower is better); CoVoST speech-translation BLEU: **35.4** (audio; improves 12% translation / 17% transcription vs Gemma 3n E2B)

### Normalized scores (1–100)

- **Tool use: 35/100.** No verified TB2.1/Tau3 number for the E2B; the sibling E4B only reached a working TB2 agent score after the July 2026 refresh, and the family's agentic composites are independently rated at the bottom of the tested field.
- **Reasoning: 45/100.** AIME 2026 37.5 and GPQA Diamond 43.4 are below the mid band; MMLU Pro 60.0 is the one solid number, and the model still beats Gemma 3 27B on AIME (37.5 vs 20.8).
- **Context window: 50/100.** 128K nominal (100K–200K band, 50–64) with RULER 70.4 at 128K and LOFT 50.5 — real for retrieval, but GraphWalks 4.1 and MTOB 15.4 show multi-hop/256K-class reasoning fails.
- **Multimodal: 80/100.** Image + audio + document input with text-only output reaches the top coverage tier for a model this size, but measured vision is the weakest in the family (MMMU Pro 44.2, MATH-Vision 52.4).
- **Coding: 35/100.** LiveCodeBench v6 44.0, SciCode 21.0 and Codeforces 633 are well below the mid band.
- **Cost efficiency: 100/100.** Open weights under Apache 2.0 — free to self-host, runs in under 1GB RAM on phones; no paid per-token tier verified this pass.
- **Overall Score: 49/100.** (35 + 45 + 50 + 80 + 35) / 5 = 49.0 → 49; best-fit as a free on-device short-task model (voice + document snippets) where any local fallback beats cloud latency.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b:free)** — 2026-10-05
- Method: public internet research (Gemma 4 Technical Report tables via gemmai4.com, official Google model card; retrieved 2026-10-05); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
