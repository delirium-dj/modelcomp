# Grok 4.5 — findings by Step 5 Preview

- Source: xAI / Grok 4.5 (`opencode/grok-4.5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI/SpaceXAI's July 2026 coding-and-agents flagship, jointly trained with Cursor — ~4x more token-efficient than Opus 4.8 on SWE-bench Pro at an unchanged $2/$6, trading Grok 4.3's 1M window and video input for a sharper 500K coding focus; superseded by Grok 4.6 in August 2026.
- **Provider / access:** xAI/SpaceXAI API (`grok-4.5`), OpenRouter (`x-ai/grok-4.5`), OpenCode Zen, Cursor (all plans at launch), Grok Build, Vercel, Cloudflare, GitHub Copilot; Chat Completions API, reasoning on at high effort by default.
- **Release / knowledge:** released 2026-07-08; superseded 2026-08-12 by Grok 4.6; knowledge cutoff not disclosed; ~1.5T parameters (Musk-reported, unconfirmed).
- **IDs:** `xai/grok-4.5`, `x-ai/grok-4.5` (OpenRouter), `opencode/grok-4.5` (Zen).
- **Context window:** 500,000 total; up to 450,000 max output (folder meta); pricing rises above 200K input.
- **Modalities:** text and image in; text out; reasoning (high default, not disableable); tool/function calling. Native video input from Grok 4.3 was dropped.
- **Pricing (as of 2026-10-21):** $2.00/$6.00 per 1M (cached $0.50) under 200K input, higher tier above; Artificial Analysis measured ~$1.04 per Intelligence-Index task.
- **Architecture:** proprietary; ~1.5T parameters claimed by Musk, not confirmed in xAI documentation.

### Raw benchmarks found

SpaceXAI launch table (vendor, 2026-07-08) + Artificial Analysis / Vals AI figures via BenchLM:

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (xAI; ref: Fable 5 84.3%, Opus 4.8 78.9%); **67.8%** on Vals AI (independent harness)
- Terminal-Bench 3.0: **15.7%** (Terminal-Bench leaderboard via BenchLM) — weak on the new harness
- GDPval-AA: **1,430 Elo / 44.2%** normalized (Artificial Analysis via BenchLM)
- AA Agentic Index: **42.1%** (Artificial Analysis via BenchLM)
- CursorBench 3.2: **66.7%** (Cursor evals via BenchLM)
- Tau3-Banking / Tau2-Bench / Claw-Eval / MCP-Atlas / Toolathlon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (Artificial Analysis); **92.9%** (Vals AI)
- AA-HLE: **42.7%** (Artificial Analysis via BenchLM) — frontier band (40%+)
- AA Intelligence Index: **38.8%** re-based v4.3 (BenchLM; ~54 and rank 4–5 at launch on the old scale, rank 38th of 200 after the 2026-09-07 re-base)
- MMLU-Pro (Vals): **89.2%** (Vals AI via BenchLM)
- AA-LCR (long-context reasoning): **79.3%** (Artificial Analysis via BenchLM)
- CritPt: **15.4%** (Artificial Analysis via BenchLM) — weak
- ARC-AGI-1: **85.67%** / ARC-AGI-2: **52.6%** (ARC Prize semi-private via BenchLM)
- FrontierMath v2: **57.2%** Tiers 1–3 / **24.4%** Tier 4 (Epoch AI via BenchLM)
- AA-Omniscience: Accuracy **51.6%**, Hallucination Rate **54.1%** (Artificial Analysis via BenchLM)

Coding:

- SWE-bench Verified (Vals): **86.6%** (Vals AI via BenchLM — matches the folder's launch claim)
- LiveCodeBench (Vals): **87.4%** (Vals AI via BenchLM)
- DeepSWE 1.0: **62.0%** (xAI; ref: Opus 4.8 55.75%, Fable 5 66.1%)
- DeepSWE 1.1: **53%** (xAI; ref: Opus 4.8 59%, Fable 5 70%)
- SWE-bench Pro: **64.7%** (xAI vendor harness; ref: Opus 4.8 69.2%, Fable 5 80.4%)
- Terminal-Bench 2.1: **83.3%** (listed above)
- SWE Multilingual: **78%** (Cursor launch post via BenchLM)
- AA-SciCode: **55.0%** (Artificial Analysis via BenchLM — frontier ref 55%+)
- VulcanBench v3: **89.9%** (VulcanBench via BenchLM)
- AA Coding Index: **72.5%** (Artificial Analysis via BenchLM — frontier ref 70%+)
- Vibe Code Bench / DeepSWE on AA: no verified public score found

Long context:

- AA-LCR **79.3%** long-context reasoning (Artificial Analysis, via BenchLM); 500K native window; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Multimodal extras (traceability): AA-MMMU-Pro 80.4%; Design Arena Website 1281 Elo (OpenRouter).

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 83.3% (vendor) with GDPval 1,430 Elo above the mid reference and a 42.1% AA Agentic Index; capped by Vals' 67.8% on the same TB2.1, Terminal-Bench 3.0 at 15.7%, CursorBench 66.7% mid-band and no Tau3/Claw-Eval/MCP-Atlas numbers.
- **Reasoning: 88/100.** GPQA Diamond 93.1% and HLE 42.7% are frontier-band, MMLU-Pro 89.2% and ARC-AGI-2 52.6% are strong, and the AA Intelligence Index was rank 4–5 (~54) at launch; capped by the re-based v4.3 read (38.8), CritPt 15.4%, LCR 79.3% and a 54.1% hallucination rate.
- **Context window: 90/100.** 500K total with 450K max output lands in the 500K–1M tier (85–94); LCR 79.3% is competent but no ≥98% retrieval-at-512K evidence exists, and the >200K price tiering is a practical caveat.
- **Multimodal: 68/100.** Text + image input with text out (image-in tier 60–70); AA-MMMU-Pro 80.4% is solid image reasoning, but video input was dropped versus Grok 4.3 and there is no non-text output.
- **Coding: 86/100.** SWE-bench Verified 86.6% (Vals), LiveCodeBench 87.4%, AA-SciCode 55.0%, VulcanBench 89.9% and AA Coding Index 72.5% all clear or approach the frontier reference bands; capped by DeepSWE 1.1 53%, SWE-bench Pro 64.7% (vendor) and CursorBench 66.7%.
- **Cost efficiency: 84/100.** $2/$6 (cached $0.50, higher tier above 200K) matches the ~$1.25/$4.25 ≈ 88 band slightly on the expensive side, but measured token efficiency — 15,954 vs 67,020 output tokens per SWE-bench Pro task against Opus 4.8, ~$1.04 per AA index task — pulls effective per-task cost well below that band.
- **Overall Score: 83/100.** Mean of (82 + 88 + 90 + 68 + 86) / 5 = 82.8 → 83. Best fit: high-volume agentic coding where token efficiency dominates the bill — the best intelligence-per-dollar coding lane of July 2026, even though Fable 5 leads on peak capability.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (The AI Rankings launch record with SpaceXAI figures, Artificial Analysis/Vals AI/ARC/Epoch AI figures via BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
