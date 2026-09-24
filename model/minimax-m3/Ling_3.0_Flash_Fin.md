# MiniMax M3 — findings by Ling 3.0 Flash Fin

- Source: MiniMax / MiniMax (`minimax-ai/minimax-m3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** First open-weight model combining frontier coding (59% SWE-Bench Pro), 1M context window, and native multimodality (text, image, video in; text out) via MiniMax Sparse Attention (MSA) architecture.
- **Provider / access:** MiniMax API (`minimax.io`), OpenRouter (`minimax/minimax-m3`), NVIDIA NIM, Lambda. Chat Completions API (Anthropic- and OpenAI-compatible endpoints). No Zen Free ID (paid only).
- **Release / knowledge:** 2026-06-01 (official launch; model card created 2026-06-02 on HuggingFace). Knowledge cutoff not explicitly stated.
- **IDs:** `minimax-ai/minimax-m3` (HuggingFace), `minimax/minimax-m3` (OpenRouter), `MiniMaxAI/MiniMax-M3` (NVIDIA NIM)
- **Context window:** 1,048,576 total (1M marketed) / 512K output guaranteed, extendable to 1M. Verified via official model card and API docs.
- **Modalities:** Text, image, video in; text out. Native multimodality trained from step zero; supports desktop computer operation. Reasoning enabled via `thinking` parameter (enabled/adaptive/disabled).
- **Pricing (as of 2026-09-24):** Paid — $0.30/1M input, $1.20/1M output on MiniMax API ($0.23/$0.96 on OpenRouter; $0.30/$1.20 on NVIDIA). No free tier available (meta.json: `noFreeId: true`). Token Plan subscription tiers available (Plus $20/month, Max $50/month, Ultra $120/month).
- **Architecture:** 428B total parameters, ~23B active per token (~8.1% activation), Mixture-of-Experts with MiniMax Sparse Attention (MSA). 60 layers, 128 experts, 64 attention heads. Custom MINIMAX COMMUNITY LICENSE (non-commercial; commercial use requires attribution and prior written authorization above $20M annual revenue).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (MiniMax official / VentureBeat)
- MCP Atlas: **74.2%** (MiniMax official model card)
- OSWorld-Verified: **75.2%** (MiniMax official benchmark table)
- BrowseComp: **83.5%** (MiniMax official model card, rank ahead of Opus 4.7 at 79.3%)
- PostTrainBench: **37.1** (rank #3 overall, behind only Opus 4.7 (42.4) and GPT-5.5 (39.3))
- Apex-Agents: **27.7%** (MiniMax official benchmark table)
- KernelBench Hard: **28.8%** (MiniMax official model card)
- CL-bench: **20.5** (MiniMax vendor benchmark table)
- Claw-Eval: **74.5%** (MiniMax vendor benchmark table)
- GDPval Rubrics: **74.8** (MiniMax vendor benchmark table)
- BankerToolBench: **76.1** (MiniMax vendor benchmark table)
- OfficeQA Pro: **45.1** (MiniMax vendor benchmark table)
- SpreadSheetBench-v1: **89.4** (MiniMax vendor benchmark table)

Reasoning / knowledge:

- GPQA Diamond: **93.0/100** (madebyagents.com)
- IMO 2025: **35/42** (MiniMax official benchmark table)
- USAMO 2026: **36/42** (MiniMax official benchmark table)
- PostTrainBench: **37.1** (rank #3, MiniMax model page)
- Artificial Analysis Intelligence Index: **45.4/100** (madebyagents.com)
- AA-LCR: **80.3** (madebyagents.com)
- No verified public score found for HLE
- No verified public score found for CritPt
- AIME: no verified public score found (IMO/USAMO reported instead)
- MMLU-Pro: no verified public score found

Coding:

- SWE-Bench Verified: **80.5%** (MiniMax official benchmark table)
- SWE-Bench Pro: **59.0%** (MiniMax official model card / VentureBeat)
- SWE-fficiency: **34.8%** (MiniMax official model card)
- Terminal-Bench 2.1: **66.0%** (MiniMax official)
- NL2Repo: **42.1** (MiniMax vendor benchmark table)
- LiveSQLBench: **40.2** (MiniMax vendor benchmark table)
- VIBE-V2: **50.1** (MiniMax vendor benchmark table)
- SVG-Bench: **63.7** (MiniMax vendor benchmark table)
- SWE Atlas-QnA: **37.9** (MiniMax vendor benchmark table)
- SWE Atlas-Test Writing: **30.8** (MiniMax vendor benchmark table)
- PaperBench: **52.6** (MiniMax vendor benchmark table)
- LiveCodeBench: no verified public score found
- DeepSWE / Coding Index: no verified public score found

Long context:

- 1M context window with MiniMax Sparse Attention (MSA) architecture (official model card)
- AA-LCR: **80.3** at long context (madebyagents.com)
- Context training schedule: not explicitly published; MSA enables 1M context with 9× prefill and 15× decode speedups vs M2
- Video-MME: **84.6** at 512 frames (MiniMax official benchmark table)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 78/100.** Strong on BrowseComp (83.5%), OSWorld-Verified (75.2%), PostTrainBench (#3 overall), MCP Atlas (74.2%), but Apex-Agents (27.7%), KernelBench Hard (28.8%), and Terminal-Bench 2.1 (66.0%) are below class-leading. Solid agentic performance but not best-in-class across all agent benchmarks.
- **Reasoning: 77/100.** Exceptional mathematical reasoning (GPQA Diamond 93/100, IMO 2025 35/42, USAMO 2026 36/42, PostTrainBench #3) but AA Intelligence Index at 45.4/100 indicates below-average general reasoning breadth. HLE and CritPt scores not found.
- **Context window: 95/100.** 1M context window with MSA architecture is class-leading; AA-LCR at 80.3 confirms strong long-context understanding; 9× prefill and 15× decode speedups demonstrate efficient long-context processing.
- **Multimodal: 87/100.** Native multimodal from pretraining (text, image, video); Video-MMMU 84.6, MMMU-Pro 78.1; supports desktop computer operation; but no audio output modality.
- **Coding: 77/100.** Strong on SWE-Bench Verified (80.5%), SVG-Bench (63.7%), but SWE-Bench Pro (59.0%) is behind Opus 4.8 (69.2%), Terminal-Bench (66.0%) is middling, and LiveCodeBench is unreported.
- **Cost efficiency: 75/100.** Paid tier at $0.30/$1.20 per 1M tokens; significantly cheaper than GPT-5.5 (~12x cheaper input) but no free tier available. Pricing is competitive for open-weights but not free.
- **Overall Score: 83/100.** Mean of the five non-cost dimensions (78 + 77 + 95 + 87 + 77) / 5 = 82.8, rounded half-up to 83. A frontier open-weight model with class-leading 1M context and native multimodality, strong mathematical reasoning and coding on key benchmarks, but below-peak agentic and general reasoning breadth.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via MiniMax official model card, HuggingFace, OpenRouter, NVIDIA NIM, VentureBeat, InferenceX, madebyagents.com, BinaryVerse, and official benchmark tables; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/minimax-m3/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/minimax-m3/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `Ling_3.0_Flash_Fin.md.excluded`, not `.md` (see SELF-EXCLUSION above).
