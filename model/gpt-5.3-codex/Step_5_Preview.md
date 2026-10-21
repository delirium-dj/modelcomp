# GPT-5.3 Codex — findings by Step 5 Preview

- Source: OpenAI / GPT-5.3-Codex (`opencode/gpt-5.3-codex`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's February 2026 agentic coding model merging GPT-5.2-Codex's software-engineering strength with GPT-5.2's broader reasoning — SOTA SWE-bench Pro at release, 400K/128K context, ~25% faster and more token-efficient than the prior Codex generation; superseded by GPT-5.4 (2026-03-05) and GPT-5.5, now deprecated for new work.
- **Provider / access:** OpenAI API (`gpt-5.3-codex`), OpenRouter (`openai/gpt-5.3-codex`), OpenCode Zen (`opencode/gpt-5.3-codex`); Responses API for long-running file/command/GitHub agentic work.
- **Release / knowledge:** released February 2026 (OpenAI announcement dated 2026-02-05; OpenRouter listing 2026-02-24 — The AI Rankings cites 24 Feb); knowledge cutoff not published.
- **IDs:** `openai/gpt-5.3-codex` (OpenRouter), `opencode/gpt-5.3-codex` (Zen).
- **Context window:** 400,000 total; 128,000 max output (llm-stats, The AI Rankings).
- **Modalities:** text in/out per folder meta (Artificial Analysis measured MMMU-Pro 78.5%, indicating image input is present in its harness — treat the image modality as uncertain); reasoning with configurable effort; tool/function calling.
- **Pricing (as of 2026-10-21):** $1.75/$14.00 per 1M in/out, $0.175 cached input (folder meta, llm-stats).
- **Architecture:** proprietary; parameter count not published.

### Raw benchmarks found

GPT-5.3-Codex system card (cdn.openai.com) + Artificial Analysis / Vals AI figures via BenchLM:

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (OpenAI system card)
- OSWorld-Verified: **64.7%** (OpenAI system card)
- τ²-bench: **86%** (Artificial Analysis via BenchLM) — strong tool calling
- JobBench: **33.7%** (JobBench paper via BenchLM) — weak
- Gert Labs: **57.5%** (Gert Labs via BenchLM)
- Terminal-Bench 2.1 / 3.0 / 4.0 / Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.5%** (Artificial Analysis via BenchLM)
- AA-HLE: **42.5%** (Artificial Analysis via BenchLM) — frontier band (40%+)
- Artificial Analysis Intelligence Index: **32.5%** (Artificial Analysis via BenchLM — mid band)
- AA-LCR (long-context reasoning): **83.3%** (Artificial Analysis via BenchLM)
- CritPt: **16.9%** (Artificial Analysis via BenchLM) — weak
- AA-Omniscience: Accuracy **52.9%**, Hallucination Rate **89.2%** (Artificial Analysis via BenchLM) — the hallucination rate is an extreme outlier
- AA-IFBench: **75.4%** (Artificial Analysis via BenchLM)

Coding:

- SWE-bench Verified: **85.0%** (OpenAI system card); **78.0%** (Vals AI via BenchLM)
- SWE-bench Pro: **56.8%** (OpenAI system card — SOTA claim at the February 2026 release)
- SWE-Rebench: **58.2%** (SWE-Rebench leaderboard via BenchLM)
- Terminal-Bench 2.0: **77.3%** (listed above)
- LiveCodeBench (Vals): **87.3%** (Vals AI via BenchLM)
- Vibe Code Bench: **61.77%** (Vals AI via BenchLM)
- DeepSWE / SciCode / AA Coding Index: no verified public score found

Long context:

- AA-LCR **83.3%** long-context reasoning (Artificial Analysis, via BenchLM); 400K native window with 128K output; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Multimodal extras (traceability): AA-MMMU-Pro 78.5% (Artificial Analysis via BenchLM); Design Arena Website 1164 Elo (OpenRouter).

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.0 77.3%, OSWorld-Verified 64.7% and τ²-bench 86% show genuine multi-tool agentic execution at launch-SOTA level; capped by JobBench 33.7%, Gert Labs 57.5% and zero published Terminal-Bench 2.1/4.0, Tau3 or GDPval numbers on any harness.
- **Reasoning: 88/100.** GPQA Diamond 91.5% and HLE 42.5% are frontier-band, LCR 83.3% is strong long-context reasoning, and the general-model lineage (GPT-5.2 reasoning merge) backs breadth; capped by the AA Intelligence Index 32.5 (mid band), CritPt 16.9% and an alarming 89.2% Omniscience hallucination rate.
- **Context window: 82/100.** 400,000 total with 128,000 max output lands in the 200K–500K tier (65–84, near its top); LCR 83.3% is above mid but no ≥98% retrieval-at-512K evidence exists.
- **Multimodal: 68/100.** Text in/out per catalog, but Artificial Analysis measured MMMU-Pro 78.5%, so image input is treated as present (image-in tier 60–70); no video/audio input and no non-text output published for this ID.
- **Coding: 90/100.** SWE-bench Verified 85.0% (system card), LiveCodeBench 87.3% and Terminal-Bench 2.0 77.3% are frontier-adjacent and it held the SWE-bench Pro SOTA title (56.8%) at release; capped by Vals' 78.0% on the same SWE-bench Verified, SWE-Rebench 58.2% and no SciCode/DeepSWE numbers.
- **Cost efficiency: 78/100.** $1.75/$14.00 with $0.175 cached sits between the ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 reference bands, closer to the former on input but at the $14 output price of the expensive band; ~25% token efficiency versus the prior Codex generation recovers some value.
- **Overall Score: 83/100.** Mean of (85 + 88 + 82 + 68 + 90) / 5 = 82.6 → 83. Best fit: legacy long-running agentic coding workflows that already pin this ID — newer GPT-5.4/5.5 supersede it for everything else.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (OpenAI system-card figures + Artificial Analysis/Vals AI/SWE-Rebench figures via BenchLM, The AI Rankings launch record); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
