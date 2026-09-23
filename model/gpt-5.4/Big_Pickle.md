# GPT-5.4 — findings by Big Pickle

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's March 2026 frontier model unifying the GPT and Codex lines into one system — world-class reasoning and coding with 1M+ context, vision/file input and strong tool/computer use. Proprietary; mini/nano variants ship alongside.
- **Provider / access:** OpenAI API (`gpt-5.4`), also on OpenRouter/AWS Bedrock/Vercel AI Gateway and OpenCode Zen (`opencode/gpt-5.4`). Chat Completions-compatible.
- **Release / knowledge:** Released 2026-03-05 (mini/nano 2026-03-17); knowledge cutoff 2025-08.
- **IDs:** `gpt-5.4` / `opencode/gpt-5.4` (paid on Zen; no Free ID known).
- **Context window:** 1.05M total (922K input / 128K output per DFO; 1M on llm-stats, 400K for mini/nano). Verified via OpenAI API docs + provider listings.
- **Modalities:** Text + image/vision input, file handling, tool use, function calling and computer-use (CUA/OSWorld); text output. Thinking/reasoning modes (reasoning_effort low→xhigh).
- **Pricing (as of 2026-09-23):** $2.50 in / $15.00 out per 1M (cached input $0.25); long-context tier $5/$22.50 above 272K. Mini ~$0.75/$4.50, nano $0.20/$1.25. Zen "standard pricing", exact rate not verified.
- **Architecture:** Proprietary (decoder-only, no params disclosed); not open-weight.

### Raw benchmarks found

Agent / tool use (OpenAI official, xhigh):

- Terminal-Bench 2.0: **75.1%** (vs Claude Opus 4.6 65.4%; GPT-5.4 mini 60.0%)
- MCP Atlas: **67.2%**; Toolathlon: **54.6%**; τ2-bench (telecom): **98.9%**
- OSWorld-Verified: **75.0%** (vs human expert 72.4%); CyberGym: **79.0%** (BenchLM)
- GDPval-AA: no verified public score found for GPT-5.4 itself (nano: 1035)
- Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.0%** (OpenAI official)
- HLE w/ tools: **52.1%**; HLE w/o tools: **39.8%** (vs Gemini-3.1-Pro High 44.4)
- FrontierMath v2 (Tiers 1-3): **47.6%**; Tier 4: **27.1%** (BenchLM)
- BenchLM public estimate: **72.89/100, rank #20**; DFO intelligence #28/743, score 79.4
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Pro (Public): **57.7%** (top of Scale standardized public set at 59.1% xHigh per llm-stats/morph)
- SWE-bench Verified: **~80%** (press/guide summaries; OpenAI did not headline it for 5.4)
- Terminal-Bench 2.0 (agentic coding): **75.1%**; LiveCodeBench: no verified public score found

Long context:

- OpenAI MRCR v2 8-needle 64K–128K: **86.0%**; 128K–256K: **79.3%**; Graphwalks BFS 0–128K: **93.1%**; Graphwalks parents: **89.8%** (official)

Multimodal:

- Vision input solid (mini/nano marketed explicitly for image/computer-use); no verified audio/video benchmarks found; output is text-only.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.0 75.1%, OSWorld-Verified 75%, τ2 98.9%, MCP Atlas 67.2% and Toolathlon 54.6% paint a well-rounded, strong-but-not-max agent; no TB2.1/Tau3 numbers cap it below the 90-100 frontier band.
- **Reasoning: 90/100.** GPQA 93.0% and HLE-with-tools 52.1% sit at frontier refs (40%+ HLE → 90+); HLE without tools 39.8% confirms the ceiling.
- **Context window: 92/100.** 1M+ documented window with strong MRCR/Graphwalks retrieval at 128K–256K; below the ≥98%-at-512K threshold that would earn 100.
- **Multimodal: 72/100.** Image/vision + file input and computer-use raise it above text-only and the plain +image band; no audio input or non-text output.
- **Coding: 84/100.** SWE-bench Pro 57.7% (top of that hard set) and ~80% Verified, plus 75.1% Terminal-Bench; comfortably into the 80s but not the DeepSWE-74%+/90-100 tier for which it has no published score.
- **Cost efficiency: 65/100.** $2.50/$15.00 is premium flagship pricing (close to the $3/$15 → 60 reference); mini/nano offer budget exits but this entry is the flagships.
- **Overall Score: 85/100.** (85 + 90 + 92 + 72 + 84) / 5 = 84.6 → 85. Best-fit: general frontier workhorse for reasoning-heavy, long-context and multimodal-flavored production; steer bulk/token-heavy traffic to mini to control spend.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (OpenAI release pages, BenchLM, llm-stats, DFO, provider docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).