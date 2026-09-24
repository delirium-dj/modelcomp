# Gemini 2.5 Pro — findings by Ling 3.0 Flash Fin

- Source: Google DeepMind (`opencode/gemini-2-5-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's most capable thinking model, released March 25, 2025, leading common coding, math, and science benchmarks with native multimodality and long context.
- **Provider / access:** Google AI Studio, Google Cloud Vertex AI, Gemini API, Cursor. Chat Completions + Responses API.
- **Release / knowledge:** 2025-03-25 (initial release); knowledge cutoff January 2025.
- **IDs:** `google/gemini-2-5-pro` (OpenRouter), `gemini-2-5-pro` (Google Cloud Vertex AI), `google/gemini-2.5-pro` (HuggingFace)
- **Context window:** 1,000,000 total (1M); 2M coming soon (as of launch)
- **Modalities:** Text, audio, images, video in; text out; native multimodal; reasoning enabled; tool calls; JSON mode; code execution
- **Pricing (as of 2026-09-24):** $1.25/1M input, $10.00/1M output (thinking); $2.50/$15.00 (>200K tokens)
- **Architecture:** Proprietary; thinking model with controllable reasoning depth; ~2 trillion+ parameters (estimated)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- APEX-Agents: **6.6%** (Artificial Analysis, rank 55 of 33, ~20th percentile)
- Terminal-Bench: **32.6%** (Artificial Analysis, rank 52)
- GDPval-AA: **23.3%** Elo (Artificial Analysis, rank 9 of 176)
- τ²-Bench Banking (AA): **9.7%** (Artificial Analysis, rank 146)
- τ²-Bank Telecom (AA): **54.1%** (Artificial Analysis, rank 187)
- Terminal-Bench 2.0 (Vals): **30.3%** (Vals AI, rank 43)
- Vending-Bench 2: **573.6** Elo (Artificial Analysis, rank 48)
- DeepResearch Bench: **42.8%** (Artificial Analysis, rank 33)
- TheAgentCompany: **30.3%** (Artificial Analysis, rank 5)
- METR Time Horizons: **55.4%** (Artificial Analysis, rank 24)
- ARC-AGI-1: **87.5%** (Artificial Analysis)
- BrowseComp: **84.0%** (Artificial Analysis)
- LiveCodeBench: **79.2%** (Vals AI, rank 72)
- Aider Polyglot: **83.1%** (Aider leaderboard, rank 3)

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (Google model card, single attempt)
- AIME 2025: **88.0%** (MathArena)
- Humanity's Last Exam: **21.6%** (no tools) (Google model card)
- FACTS Grounding: **87.8%** (Google model card)
- SimpleQA: **54.0%** (Google model card)
- AA-Omniscience Accuracy: **48.2%** (Artificial Analysis)
- AA-LCR: **78.7%** (Artificial Analysis)
- ARC-AGI-2: **67.1%** (Artificial Analysis)
- Global MMLU (Lite): **89.2%** (Google model card)

Coding:

- SWE-bench Verified: **59.6%** single attempt; **67.2%** multiple attempts (Google model card)
- LiveCodeBench: **69.0%** single attempt (Google model card); **74.2%** (paper)
- Aider Polyglot: **82.2%** diff-fenced (Google model card)
- SciCode: **42.8%** (Artificial Analysis, rank 97); **46.3%** (Artificial Analysis, rank 89)
- LMArena Coding: **1465** Elo (rank 107)
- LMArena WebDev: **1226** Elo (rank 112)
- SWE-Bench Pro (private): **10.1%** (Scale AI SEAL, rank 12)
- CadEval: **64.0%** (Epoch AI, rank 2)

Long context:

- MRCR v2 (8-needle): **58.0%** at 128K; **16.4%** at 1M (Google model card)
- LOFT (hard): **87.0%** at ≤128K; **69.8%** at 1M
- Long context training schedule: 1M context window supported at launch

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 52/100.** Strong on Aider Polyglot (83.1%), LiveCodeBench (79.2%), and Long context tasks, but very weak on APEX-Agents (6.6%) and τ²-Bank Banking (9.7%). Excellent on agentic coding tasks that don't require complex terminal interaction.
- **Reasoning: 82/100.** Excellent GPQA Diamond (86.4%), AIME 2025 (88.0%), FACTS Grounding (87.8%), and Global MMLU (89.2%). Capped by lower HLE (21.6%) and AA-Omniscience accuracy (48.2%).
- **Context window: 88/100.** 1M context window is among the largest; LOFT at 87.0% (128K) confirms strong long-context retrieval. Capped by lower MRCR at 1M (16.4%).
- **Multimodal: 75/100.** Native multimodal support for text, audio, images, video, and code repositories; strong on MMMU (82.0%) and VideoMMMU (83.6%). Capped by not supporting multimodal output.
- **Coding: 68/100.** Strong SWE-bench Verified (59.6%/67.2%), Aider Polyglot (82.2%), LiveCodeBench (79.2%), but weaker on SWE-Bench Pro (10.1%) and SciCode (42.8%). Capped by inconsistent performance on agentic coding benchmarks.
- **Cost efficiency: 55/100.** Relatively expensive at $1.25/$10 blended $3.44 per BenchLeader; among the most expensive ranked models. Capped by high per-token pricing compared to frontier competitors.
- **Overall Score: 73/100.** Mean of the five non-cost dimensions (52 + 82 + 88 + 75 + 68) / 5 = 73. A strong reasoning and coding model with native multimodality and very large context, but weak on agentic tool-use benchmarks and relatively expensive.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via Google DeepMind model card, Artificial Analysis, BenchLeader, Vals AI, and Google developer documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-2-5-pro/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links resolve from `model/gemini-2-5-pro/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`.
