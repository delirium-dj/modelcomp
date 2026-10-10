# Gemini 3.8 Flash — findings by Ling 3.1 Flash

- Source: Google DeepMind (`google/gemini-3.8-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's most intelligent Flash workhorse (released 2026-09-02) — post-training improvements over 3.7 Flash (not a new pretraining run), with large gains in software engineering, agentic tasks, and multi-step specialized reasoning at the same introductory price.
- **Provider / access:** Google Gemini API / Gemini Enterprise Agent Platform (`gemini-3.8-flash`, GA); Google AI Studio and OpenCode Zen free tier with standard rate limits. Thinking levels LOW/MEDIUM/HIGH (default MEDIUM).
- **Release / knowledge:** 2026-09-02; knowledge cutoff March 2026 (some domains only reach January 2025, per Google's card).
- **IDs:** `google/gemini-3.8-flash`; `gemini-3.8-flash` on the Gemini API. Free tier exists on Google AI Studio and OpenCode Zen.
- **Context window:** 1,048,576 (1M) total; 65,536 max output ("64K" rounded on Google's card).
- **Modalities:** text, image, audio, video in (PDF via Files API); text out; tool calls, JSON mode, function calling.
- **Pricing (as of 2026-10-02):** introductory $0.75/$3.75 per 1M input/output (identical to 3.7 Flash; expires 2026-12-31, then $1.50/$7.50); Batch API half rate ($0.375/$1.875); Free tier on AI Studio / OpenCode Zen.
- **Architecture:** proprietary (Google DeepMind); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** (Google self-computed, Terminus 2 harness, high thinking); **87.6%** (Artificial Analysis own run, high effort, 2026-09-03; medium 83.9%, low 83.15%); 81.27% ±0.38 (vals.ai own Terminus 2 run) — a 6.3-point spread between independent sources
- τ³-bench Banking: **38.1%** (Google developer docs; vs 3.7 Flash 30.9%)
- SWE-Atlas: **51.9%** (Google developer docs; vs 3.7 Flash 48.0%)
- Vals Finance Agent v2 / Harvey's Legal Agent Benchmark: outperforms 3.7 Flash and other frontier models (Vals.AI; no numeric score published)
- OSWorld 2.0: self-computed by GDM (pyautogui, screenshot-only); no numeric score published
- Claw-Eval / ClawProBench: no verified public score found
- Toolathlon-Verified / Agents' Last Exam: no verified public score found (never scored any Gemini Flash-line model)

Reasoning / knowledge:

- HLE-Verified: **54.9%** (Google self-computed, full 1,811-item verified set incl. 668 original + 1,143 revised items)
- Humanity's Last Exam (no tools): **47.8%** (Artificial Analysis, high effort, text-only subset, 2026-09-03); vendor doc table reads 45.4%
- GPQA Diamond: **94.44%** (vals.ai, rank 4/138 — saturated benchmark)
- ARC-AGI-2 / LiveBench / AA-AnalystAgent / HMMT Feb 2026: no verified public score found for 3.8 Flash (3.7 Flash had scores; not yet added)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE v1.1: **74% ±1** (deepswe.datacurve.ai public leaderboard, mini-swe-agent, high effort — ties Claude Opus 5 [max] for the top spot; 3.7 Flash scored 65% on the same tier)
- SWE-bench Pro: **61.6%** (Google developer docs; vs 3.7 Flash 60.4%)
- SWE-bench Verified: **80.00%** (vals.ai, bash-only mini-swe-agent, rank 24/88; vs 3.7 Flash 80.8% on the same board — noise, not regression)
- LiveCodeBench: **89.48%** (vals.ai, rank 3 — saturated contest benchmark)
- SciCode / Vibe Code Bench: no verified public score found

Long context:

- GDM-MRCR v2: self-computed (128K cumulative results in Google's repository); no numeric retrieval score published
- MRCR / RULER / GraphWalks at 512K–1M: no verified public score found

Multimodal:

- CharXiv Reasoning: **86.2%** (Google self-computed; vs 3.7 Flash 84.5%)
- GDP.pdf: **35.0%** (Google self-computed; vs 3.7 Flash 34.0%)
- LVBench: self-computed without tools (1,024 frames); no numeric score published

### Normalized scores (1–100)

- **Tool use: 90/100.** Independent TB2.1 reads of 87.6% (AA) and 81.27% (vals.ai) bracket the vendor's 90.8%; τ³-bench Banking 38.1% and SWE-Atlas 51.9% are strong-but-not-frontier, and the wide TB2.1 spread between independent harnesses caps the score below 92.
- **Reasoning: 91/100.** GPQA Diamond 94.44% (rank 4/138) and HLE-Verified 54.9% clear the frontier reference bars (GPQA 90%+, HLE 40%+); the no-tools HLE of 47.8% and unknown MRCR/Intelligence-Index rows keep it out of the 93+ band.
- **Context window: 96/100.** Full 1M-token window (65,536 out); Google's GDM-MRCR v2 is self-computed but no ≥98% retrieval-at-512K+ figure is published, so 100 is not justified.
- **Multimodal: 92/100.** text/image/audio/video in with text out — the +audio-in band (90–100); CharXiv 86.2% corroborates strong visual reasoning.
- **Coding: 92/100.** DeepSWE 74% ±1 (mini-swe-agent, high effort) and LiveCodeBench 89.48% (rank 3) lead, with SWE-bench Verified 80.0% and SWE-bench Pro 61.6% solid; capped below 95 because Google now flags that the Opus 5 74% it appeared to tie was a rounding artifact on Datacurve's board (so the "top spot" tie is uncertain — and Gemini 4 Argon's 77.9% has since led), and SciCode/Vibe Code are unpublished.
- **Cost efficiency: 100/100.** Free tier on Google AI Studio and OpenCode Zen (standard rate limits); paid introductory $0.75/$3.75 would itself score ~93 before the 2027-01-01 doubling.
- **Overall Score: 92/100.** (90+91+96+92+92)/5 = 92.2 → 92 — the efficiency frontier pick: near-frontier agentic coding and reasoning at Flash pricing, with the widest caveat being harness variance on Terminal-Bench 2.1.

---

## Update 2026-10-08 (6-day re-research)

ARC Prize results, LVBench rows and DeepMind's evals methodology found:

- ARC-AGI (arcprize.org, 2026-09-02): ARC-AGI-1 **98.5%** and ARC-AGI-2 **89.2%** at high reasoning (medium 97.5%/82.9%, low 90.5%/77.5%) — fills the ARC-AGI gap; ARC-AGI-3 (new, semi-private): **10.4%** with the Standard harness / **35.0%** with the Provider Adapter harness at high
- LVBench (BenchmarkRegistry, self-reported 2026-09-02): **87.8%** agentic / **87.1%** static (1024 frames) — fills the LVBench gap; strong long-video understanding
- DeepMind's flash page confirms HLE-Verified **54.9%** and frames DeepSWE as outperforming "most larger frontier models... at a fraction of the cost"
- Evals methodology notes: DeepSWE self-computed (mini-swe-agent harness, high thinking — Google notes it originally mis-reported Opus 5's 74% due to rounding on Datacurve's public leaderboard); TB 4.0 from the official public leaderboard (highest thinking level per the TB authors); GDPval-AA v2 from the AA leaderboard; Vals Finance Agent v2 and Harvey's Legal Agent Benchmark from Vals.AI; LVBench self-computed without tools (1024 frames; 300 for Claude models); GDM-MRCR v2 128K cumulative; OSWorld 2.0 self-computed (max 500 steps, batched tool calls, the OSWorld 2.0 repo's CUA harness, pyautogui screenshot-only, runs completed before the 08.08 patch); HLE-Verified self-computed on the full 1,811-item verified set (668 original + 1,143 revised, excluding 689 uncertain; content-policy filters blocked a significant proportion of questions for Sonnet 5 and a small number for Opus 5); LABBench2 self-computed (macro-average across 11 sub-tasks)
- Still unpublished: LiveBench, AA-AnalystAgent, SciCode, Vibe Code Bench, MRCR numeric at depth, Toolathlon, Agents' Last Exam, Claw-Eval, AA Intelligence Index, AA-Omniscience
- **Coding revised 93→92** (the DeepSWE "tie for the top spot" is uncertain after Google's rounding correction, and Argon's 77.9% now leads); Overall unchanged at 92 ((90+91+96+92+92)/5 = 92.2)

---

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Scores unchanged: Tool 90 / Reasoning 91 / Context 96 / Multimodal 92 / Coding 92 / Cost 100 / Overall 92.** New fills and conflict checks this pass:

- **AA Intelligence Index v4.3.2: 41 (High) / 40 (Medium) / 33 (Low)** (AA's own page, #50 of 227; 170M output tokens per Index task — very verbose vs median 82M) — fills the previous "AA Intelligence Index unpublished" gap. "Well above average among comparable models (median: 26)"; consistent with the Flash-tier positioning, so Reasoning 91 stands.
- **DeepSWE v1.1: 73.7%** (Google model card table, high effort; vs 3.7 Flash 65.3%, Claude Opus 5 74.0%, Sonnet 5 53.8%, GPT-5.6 Sol 72.7%, GPT-5.6 Terra 69.6%) — confirms the Datacurve 74% ±1 read within 0.3 pts; the earlier "tie for the top spot" uncertainty (Google's rounding correction) stands, and Coding 92 is unchanged.
- **Pricing reconfirmed (ai.google.dev, 2026-09-02):** introductory $0.75/$3.75 per 1M in/out through 2026-12-31, standard $1.50/$7.50 from 2027-01-01; AA cost/task $0.60 (High) / $0.93 (Medium); 125 t/s output, 26.84s TTFT. Cost 100 stands (free tier on AI Studio / OpenCode Zen).
- **Model card re-read:** based on Gemini 3.7 Flash (post-training improvement, not a new pretraining run); text/image/audio/video in, 1M context, 64K out; knowledge cutoff March 2026 (some domains January 2025); Frontier Safety: no Tracked/Critical Capability Levels (assessed via 3.7 Flash); safety similar to 3.7 Flash with a slight non-English regression. **Gemini 3.8 Flash Cyber** is a separate cybersecurity variant (vulnerability detection, automated patching) via the Fairwind Program — not scored here.
- **Conflict comparison:** TB 2.1 spread unchanged (vendor 90.8% vs AA 87.6% vs vals.ai 81.27% — 9.5 pts harness-dependent); DeepSWE now has three consistent reads (73.7% card / 74% Datacurve / "outperforms most larger frontier models" per Google blog). No benchmark in this pass contradicts the existing scores.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (Google DeepMind model card and evals methodology, Artificial Analysis, vals.ai, Datacurve DeepSWE board, Google AI for Developers docs, Google blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
