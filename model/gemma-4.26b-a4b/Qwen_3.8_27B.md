# Gemma 4 26B A4B — findings by Qwen 3.8 27B

- Source: Google DeepMind (`google/gemma-4-26B-A4B`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's 26B-parameter Mixture-of-Experts Gemma 4 model (4B activated) — the open-MoE member of the April 2026 Gemma 4 family; runs on ~18GB RAM and was rated on LMArena (rank 61 as of 2026-06-19, Elo 1438) near models roughly ten times its size.
- **Provider / access:** Hugging Face `google/gemma-4-26B-A4B` (open weights, Apache 2.0); Google AI Studio; Ollama. No OpenCode Zen listing found this pass.
- **Release / knowledge:** Released 2026-04-02; training data ends January 2025 (technical report). A 2026-07-15 refresh updated tool-calling behaviour, chat template and vision defaults without a version bump — pre/post-July benchmark runs are not strictly comparable.
- **IDs:** `google/gemma-4-26B-A4B` (Hugging Face); no verified hosted API ID or Free ID on OpenCode Zen this pass.
- **Context window:** up to 256K tokens (official model card, ai.google.dev/gemma/docs/core/model_card_4, verified 2026-10-05).
- **Modalities:** text, image, document/PDF in; text out; thinking mode; tool calls; 140+ languages. No audio input verified for this size (the technical-report audio table covers 12B/E4B/E2B only); no verified public video-input support.
- **Pricing (as of 2026-10-05):** open weights — free to self-host (Apache 2.0); no paid per-token tier verified this pass.
- **Architecture:** 26B total / 4B activated MoE; open weights, Apache 2.0.

### Raw benchmarks found

> Primary source: Gemma 4 Technical Report (arXiv:2607.02770) tables as compiled by gemmai4.com (independent community reference, last updated August 2026; self-reported vendor numbers, thinking mode enabled unless noted); LMArena Elo via the same compilation (June 19, 2026 cutoff); official model card at ai.google.dev/gemma/docs/core/model_card_4. Long-context rows measured without thinking mode.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for the 26B A4B (family-level note: independent aggregate testing ranks the 31B near the bottom of agentic composites, #129/134 at 25.5/100; the 2026-07-15 refresh improved tool calling)
- Tau3-Banking / Tau2-Bench: no verified public score found for the 26B A4B
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.3%** (technical report via gemmai4.com, thinking on)
- AIME 2026: **88.3** (no tools; post-cutoff, contamination-resistant)
- MMLU Pro: **82.6**
- HLE: **8.7** (31B reference 19.5; frontier closed models far above)
- BBH (micro avg): **64.8**
- IFEval / IFBench: **98.5 / 72.0**

Coding:

- LiveCodeBench v6: **77.1**
- SciCode: **40.0**
- Codeforces Elo: **1718**
- SWE-Rebench (real-repo patching): no verified public score found for the 26B A4B (31B measured at 41.6% by independent testing)

Long context:

- RULER @32K: **97.3**; RULER @128K: **89.8** (no thinking)
- LOFT retrieval Recall@k @128K: **66.3**
- GraphWalks F1 (<128K): **72.6**
- MTOB eng→kgv: **50.0 @128K / 48.9 @256K**

Multimodal (1120 vision tokens unless noted):

- MMMU Pro: **73.8** (73.2 at low-res 280 tokens)
- MATH-Vision: **82.4**
- InfographicVQA: **89.3**
- MedXpertQA MM: **58.1**
- OmniDocBench 1.5: **0.149** (lower is better; document understanding)

Human preference:

- LMArena Elo: **1438 ± 8, rank 61** ("Open MoE" category, June 19, 2026 cutoff); at launch (April 2026) on par with Kimi-K2.5 and Qwen-3.5-397B per the technical report.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified TB2.1/Tau3/GDPval number for the 26B A4B; the family's agentic composites are independently rated near the bottom of the tested field (31B #129/134), with only the July 2026 refresh improving tool calling. Unmeasured 26B agentic capability scores in the low-mid band.
- **Reasoning: 75/100.** GPQA Diamond 82.3 and AIME 2026 88.3 are upper-mid-band strong (MMLU Pro 82.6), but HLE 8.7 caps it well below the frontier reasoning tier.
- **Context window: 75/100.** 256K native (200K–500K band, 65–84) with verified RULER 89.8 at 128K and stable 256K MTOB (48.9); no verified ≥98% retrieval at 512K+ to reach the top band.
- **Multimodal: 80/100.** Image + document/PDF input with text-only output and no verified audio/video for this size; strong measured vision (MMMU Pro 73.8, InfographicVQA 89.3, MATH-Vision 82.4).
- **Coding: 74/100.** LiveCodeBench v6 77.1 with SciCode 40.0 and Codeforces 1718 lands in the 65–75 mid band; no verified 26B SWE-Rebench number (31B at 41.6% independent).
- **Cost efficiency: 100/100.** Open weights under Apache 2.0 — free to self-host (~18GB RAM); no paid per-token tier verified this pass.
- **Overall Score: 71/100.** (50 + 75 + 75 + 80 + 74) / 5 = 70.8 → 71; best-fit as a free local open-MoE generalist and math/coding workhorse on ~18GB hardware.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b:free)** — 2026-10-05
- Method: public internet research (Gemma 4 Technical Report tables via gemmai4.com, LMArena data via the same compilation, official Google model card; retrieved 2026-10-05); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
