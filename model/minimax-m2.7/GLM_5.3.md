# MiniMax M2.7 — findings by GLM 5.3

- Source: MiniMax (`minimax-m2.7`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's open-weights value agent model (M2 generation, between M2.5 and M3): strong real-world software engineering and office-productivity delivery at low cost. Top use case: budget agentic coding in third-party harnesses (Claude Code, OpenCode, Cline, Cursor, Codex CLI).
- **Provider / access:** OpenCode Zen `opencode/minimax-m2.7` (OpenAI-compatible Chat Completions); MiniMax platform API (`MiniMax-M2.7` + faster `M2.7-highspeed`, automatic caching); open weights (BenchLM lists Open Weight).
- **Release / knowledge:** 2026 (superseded by MiniMax M3 on the vendor's catalog); exact release date not re-verified. Knowledge cutoff not stated publicly.
- **IDs:** `opencode/minimax-m2.7` (no Free ID on Zen; paid tier).
- **Context window:** 200K (BenchLM model page).
- **Modalities:** text in / text out (text-only; no image rows on BenchLM); reasoning configuration minimal (BenchLM lists Non-Reasoning); tool calls yes (broad harness support, MM-ClawBench); JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** $0.30 in / $1.20 out per 1M, cached read $0.06 (OpenCode Zen pricing table; MiniMax Token Plan unchanged on M3 upgrade).
- **Architecture:** open weights; parameters undisclosed in the sources fetched.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **57.0%** (BenchLM + MiniMax model page); Terminal-Bench 2.1 (Vals): **48.7%** (BenchLM)
- Tau2-Bench: **84.8%** (BenchLM); Tau3: **no verified public score found**
- GDPval-AA: **1087 Elo** (BenchLM; normalized field 24.9%) / **1495 Elo** (MiniMax model page — vendor-run, claimed highest among open-source models)
- Toolathlon: **46.3%** (BenchLM + vendor page)
- MM-ClawBench: **62.7%** (BenchLM + vendor page — approaching Sonnet 4.6 per vendor)
- Claw-Eval: **48.7%** (BenchLM)
- MLE-Bench Lite: **66.6%** (BenchLM)
- AA Agentic Index **16.8%**, APEX-Agents-AA **10.6%**, Gert Labs **40.4%** (BenchLM)
- Vendor: 97% skill-adherence rate on 40 complex skills (>2000-token cases)

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (BenchLM; AA-GPQA 87.4%, Vals 86.6%)
- HLE: **AA-HLE 29.6%** (BenchLM — below the 40% frontier line; no plain-HLE row)
- LCR / MLCR: AA-LCR **78.3%** (BenchLM); MLCR no verified public score found
- CritPt: **0.6%** (BenchLM)
- Artificial Analysis Intelligence Index: **22.8** (BenchLM)
- Omniscience: Index **0.8**, Accuracy **26.8%**, hallucination-rate field **35.6%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- MMLU-Pro **80.8%**, AIME25 (Arcee) **80.0%**, AA-IFBench **75.7%** (BenchLM)

Coding:

- SWE-bench Verified (Arcee harness): **75.4%** (BenchLM)
- SWE-bench Pro: **56.2%** (BenchLM + vendor page — "nearly matching Opus's best level" per vendor)
- SWE Multilingual: **76.5%** (BenchLM); Multi-SWE Bench **52.7%**, SWE-Rebench **51.9%** (BenchLM)
- LiveCodeBench (Vals): **79.9%** (BenchLM)
- VIBE-Pro: **55.6%** (BenchLM + vendor page — end-to-end project delivery)
- React Native Evals **71.4%**, NL2Repo **39.8%**, AA-SciCode **50.1%** (BenchLM)
- Vibe Code Bench **27.0%**, AA Coding Index **52.6%** (BenchLM)
- Design Arena Website Elo: **1254** (BenchLM)

Long context:

- AA-LCR 78.3% (BenchLM) at the 200K window; no MRCR/RULER per-length data — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 66/100.** τ² 84.8%, TB 2.0 57%, MM-ClawBench 62.7% and MLE-Bench 66.6% are respectable value-tier results; GDPval-AA splits (1087 BenchLM vs 1495 vendor) and an AA Agentic Index of 16.8% keep it below the leaders.
- **Reasoning: 68/100.** GPQA ~87% is near-frontier and AA-LCR 78.3% solid, but AA-HLE 29.6%, CritPt 0.6%, an AA Index of 22.8 and near-zero Omniscience hold it mid-band.
- **Context window: 70/100.** 200K verified (200K anchor = 70); no longer-window tier.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only).
- **Coding: 70/100.** SWE-bench Verified 75.4%, SWE Multilingual 76.5%, LiveCodeBench 79.9% and VIBE-Pro 55.6% are good value-tier results; SWE Pro 56.2%, AA Coding Index 52.6% and Vibe Code Bench 27.0% cap it below the premium open models.
- **Cost efficiency: 93/100.** $0.30/$1.20 per 1M with $0.06 cached reads undercuts the ~$0.60/$2.20 (~92) anchor; M2.7-highspeed adds throughput.
- **Overall Score: 58/100.** Half-up mean of the five quality dims (66+68+70+15+70)/5 = 57.8 — the best-value paid text coding/agent for harness-driven work; text-only I/O and mid knowledge reliability are the limits, and M3 now supersedes it.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (BenchLM, MiniMax model page, OpenCode Zen pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
