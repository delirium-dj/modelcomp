# Gemini 3.1 Pro — findings by Ling 3.1 Flash

- Source: Google DeepMind (`google/gemini-3.1-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Preview)
- **Short description:** Google DeepMind's updated flagship (released 2026-02-19, still Preview six months later) — quality gains over Gemini 3 Pro in software engineering, agentic workflows, and finance/spreadsheet usability, plus more efficient thinking that lowers per-task token cost; strongest-value frontier reasoning model.
- **Provider / access:** Google Gemini API (`gemini-3.1-pro-preview`, Preview) and Vertex AI; Google AI Studio and OpenCode Zen free tier. Thinking levels LOW/MEDIUM/HIGH (benchmarks use HIGH unless noted).
- **Release / knowledge:** 2026-02-19; knowledge cutoff January 2025 per Gemini API docs (not stated on the DeepMind model card).
- **IDs:** `google/gemini-3.1-pro`; `gemini-3.1-pro-preview` on the Gemini API. Free tier exists on Google AI Studio and OpenCode Zen.
- **Context window:** 1,048,576 (1M) total per the DeepMind model card (site meta.json lists 2M — unverified by any cited source); 65,536 max output.
- **Modalities:** text, image, audio, video, PDF in; text out; tool calls, JSON mode, `thinking_level` control.
- **Pricing (as of 2026-10-02):** $2.00/$12.00 per 1M input/output for prompts ≤200K, rising to $4.00/$18.00 beyond 200K; Batch API half rate ($1/$6 ≤200K, $2/$9 above); Free tier on AI Studio / OpenCode Zen.
- **Architecture:** proprietary (Google DeepMind); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.8%** (tbench.ai official leaderboard, Gemini CLI harness, "high" effort, rank 14/17, ±3.3; a Terminus-2-harness run on the same board scores 65.6, rank 16)
- Terminal-Bench 2.0: **68.5%** (vendor card, Terminus-2 harness, high thinking; vs 3 Pro 56.9%, Opus 4.6 65.4%, GPT-5.3-Codex 64.7%)
- Toolathlon-Verified: **61.1%** (toolathlon.xyz, ±9.7)
- SWE-bench Pro (Public): **54.2%** (vendor card, single attempt; vs 3 Pro 43.3%, GPT-5.2 55.6%, GPT-5.3-Codex 56.8%)
- Agents' Last Exam (Snorkel) / HMMT Feb 2026 (MathArena): tracked but no usable numeric score (HMMT flagged contaminated)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.5%** (vals.ai, rank 1/133 — near-saturated; vendor card self-reports 94.3%, no tools)
- Humanity's Last Exam (no tools, full text+MM set): **44.4%** (vendor card); **47.0%** (Artificial Analysis, no tools, 2026-08-17); **51.4%** with search (blocklist) + code (vendor self-report, not independently reproduced)
- ARC-AGI-2: **77.1%** (ARC Prize Verified; vs 3 Pro 31.1%, Opus 4.6 68.8%, GPT-5.2 52.9%) — more than double its predecessor
- LiveBench: **77.x** (livebench.ai composite across 7 domains, 2026-08)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **80.6%** (vendor card, single attempt, near-parity with Opus 4.6's 80.8%); **78.8%** (vals.ai, bash-only mini-swe-agent, rank 24/83 — saturated benchmark)
- LiveCodeBench Pro: **2887 Elo** (vendor-reported; vs GPT-5.2 2393 Elo)
- SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- MRCR v2 (8-needle, 128K): **84.9%** (vendor-reported; ties Opus 4.6's 84.9%)
- MRCR v2 at 512K–1M / RULER / GraphWalks: no verified public score found

Multimodal:

- MMMU-Pro: **80.5%** (vendor-reported)
- CharXiv / GDP.pdf / LVBench for 3.1 Pro: no verified public score found

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 2.1 65.8% (two independent harnesses agree within 0.2 pts) and Toolathlon 61.1% sit between the mid (45–60%) and frontier (88%+) reference bands; SWE-bench Pro 54.2% confirms solid-but-not-frontier agentics — this is a reasoning-first Pro model, not an agentic workhorse.
- **Reasoning: 92/100.** GPQA Diamond 95.5% (vals.ai rank 1/133), HLE 47.0% no-tools (AA) with a self-reported 51.4% with tools, and ARC-AGI-2 77.1% best-in-class clear the frontier reference bars; the contaminated HMMT row and unreproduced 51.4% tools figure cap it below 94.
- **Context window: 95/100.** 1M-token window with MRCR v2 84.9% at 128K only — no ≥98% retrieval-at-512K+ figure is published, so 100 is not justified (the 2M figure in site meta.json is unverified).
- **Multimodal: 92/100.** text/image/audio/video/PDF in with text out — the +audio-in band (90–100); MMMU-Pro 80.5% corroborates strong visual reasoning.
- **Coding: 84/100.** SWE-bench Verified 78.8–80.6% and LiveCodeBench Pro 2887 Elo are strong, but Terminal-Bench 2.1 65.8% is mid-tier and DeepSWE/SciCode/Vibe Code are unpublished for this release.
- **Cost efficiency: 100/100.** Free tier on Google AI Studio and OpenCode Zen; paid $2/$12 (≤200K) is itself ~85–88 tier, and Batch halves it again.
- **Overall Score: 87/100.** (74+92+95+92+84)/5 = 87.4 → 87 — the value pick for deep reasoning at Pro tier: ARC-AGI-2-leading abstraction and rank-1 GPQA at one-seventh of Opus 4.6's price, with mid-tier agentic tool use as the trade-off.

---

## Update 2026-10-08 (6-day re-research)

SciCode, DeepSWE and vals.ai rows found (DeepMind's comparison table, modelscale, Traictory, plus DeepMind's published evals methodology):

- SciCode: **59%** (DeepMind's table; AA-SciCode **58.7%** on modelscale) — fills the SciCode gap; above the 55% frontier reference
- DeepSWE v1.1: **12% ± 2%** (mini-swe-agent harness, high effort, Pass@1, Traictory-verified) — far below the model's own SWE-bench Verified 80.6%; a scaffold-specific result, but the weakest coding signal in the file and now a stated caveat
- LiveCodeBench (vals.ai): **88.5%** (fills the gap); LiveCodeBench Pro **82.9** on quarter-specific contest sets (modelscale) alongside the self-reported 2887 Elo; LiveBench **79.9%** (High effort, 2026-01-08, verified); SWE-bench (vals.ai) **78.8%** confirms the existing row
- DeepMind's published methodology notes: the SWE-bench Verified score was adjusted **+0.6%** after Gemini 3.1 Pro passed three items (astropy-7606, sphinx-8595, sphinx-9711) that are impossible under the official harness due to vendor-side bugs; SciCode is sourced from Artificial Analysis; GDPval-AA Elo from the AA leaderboard (numeric value still not captured); the τ²-bench airline variant was excluded for lower grading quality; MCP Atlas results are sourced from Turing
- Still no verified public score for: Claw-Eval/ClawProBench, Agents' Last Exam (numeric), MRCR v2 at 512K–1M, RULER, GraphWalks, CharXiv, GDP.pdf, LVBench, AA Omniscience
- No score change: SciCode 59% and LiveCodeBench (vals.ai) 88.5% support Coding 84, while the DeepSWE 12% mini-swe-agent result and the unpublished 512K+ retrieval keep it there

---

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Score revisions: Tool use 74→70.** Reasoning 92 / Context 95 / Multimodal 92 / Coding 84 / Cost 100 unchanged; **Overall stays 87** ((70+92+95+92+84)/5 = 86.6 → 87).

- **AA Intelligence Index v4.3.2: 30** (AA's own page, #95 of 227; 67M tokens per Index task — concise vs median 82M; $1.30/task; 118 t/s, 24.8s TTFT) — fills the previous "AA Intelligence Index unpublished" gap. The Index is dragged down by agentic components, not reasoning: full AA component table — AA-Briefcase v1.1 **456**, GDPval-AA v2.1 **791**, AutomationBench-AA **35%**, Terminal-Bench 4.0 **4%**, SciCode **59%**, HLE **47%**, GDP.pdf **18%**, CritPt **18%**, AA-Omniscience **32** (accuracy 53%, hallucination rate 50% — down from 88% on 3 Pro), AA-LCR v1.1 **82%**.
- **Tool-use revision driver:** four independent AA agentic reads (AutomationBench-AA 35%, TB 4.0 4%, GDPval-AA 791, AA-Briefcase 456) sit in the weak-to-mid band against the two mid-strong reads the 74 leaned on (TB 2.1 65.8% across two harnesses, Toolathlon 61.1%). TB 4.0 (recalibrated 2026-09) postdates this Feb-2026 model — frontier leaders score 59–66% on it, and the model's 4% (vs Qwen3.6 27B's 0%) reflects the harder environment, not a like-for-like regression. Tool 74→70 (upper-mid, capped by the new agentic reads).
- **Reasoning corroboration:** at launch (AA, 2026-02-19) Gemini 3.1 Pro Preview **led the Intelligence Index, 4 points ahead of Claude Opus 4.6 at less than half the run cost**, leading 6 of 10 evaluations — Terminal-Bench Hard, AA-Omniscience, HLE, GPQA Diamond, SciCode and CritPt (18%, +5 pts over the next-best model). That history is consistent with the current reasoning scores; the v4.3.2 Index drop to 30 is a benchmark-revision effect (v4.3.2 added TB 4.0, AutomationBench-AA, AA-Briefcase, GDP.pdf, GDPval-AA v2.1), not a capability change.
- **New fills:** SWE-bench Verified **80.6%** (llmboard, rank 10 of 117, 92nd pct, evaluated 2026-10-09 — independent re-measurement matching the vendor card); AA-LCR v1.1 **82%** (independent long-context read; corroborates MRCR v2 84.9% at 128K but does not reach the ≥98%-at-512K+ bar, so Context stays 95); GDP.pdf **18%** (AA — a weak new multimodal row; vs Opus 5.5's 26% max, same order of magnitude, so Multimodal stays 92).
- **Model card re-read (2026-02-19):** based on Gemini 3 Pro; text/image/audio/video in, 1M context, 64K out; Frontier Safety — below alert thresholds for CBRN, harmful manipulation, ML R&D and misalignment CCLs, and below the cyber CCL after additional testing with and without Deep Think.
- **Pricing reconfirmed:** $2/$12 per 1M (≤200K), $4/$18 above 200K; Batch halves it; **Kilo Gateway offers $1/$6** (lowest tracked third-party). Cost 100 stands (free tier on AI Studio / OpenCode Zen).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (DeepMind model card and evals methodology, Artificial Analysis launch article and model pages, vals.ai, llmboard, tbench.ai, Toolathlon, Traictory, modelscale); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
