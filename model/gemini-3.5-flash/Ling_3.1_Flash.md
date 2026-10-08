# Gemini 3.5 Flash — findings by Ling 3.1 Flash

- Source: Google DeepMind (`google/gemini-3.5-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google DeepMind's May-2026 Flash model (launched 2026-05-19, opening the Gemini 3.5 family) — "frontier intelligence with action": its strongest agentic/coding Flash yet (Terminal-Bench 2.1 76.2%, GDPval-AA 1656 Elo, MCP Atlas 83.6%), ~4x faster than other frontier models on output tokens/s, in the top-right quadrant of the AA index.
- **Provider / access:** Gemini API / Google AI Studio, GCP Vertex AI, OpenRouter, Vercel AI Gateway; native thinking, tool/function calling, structured outputs, code execution, search grounding, Batch processing; free tier with standard rate limits on Google AI Studio and OpenCode Zen.
- **Release / knowledge:** 2026-05-19; knowledge cutoff not stated in the launch materials reviewed.
- **IDs:** `google/gemini-3.5-flash`.
- **Context window:** 1M tokens input / 66K output (LLM Reference's title says 1.05M; the model card and trackers report 1M).
- **Modalities:** text, image, audio, PDF in; text out (per `meta.json`; "multimodal understanding" with CharXiv Reasoning 84.2%).
- **Pricing (as of 2026-10-02):** $1.50/$9.00 per 1M input/output (all four routes); Batch $0.75/$4.50; cache read $0.15/M.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (Google model card, May 2026):

- Terminal-Bench 2.1: **76.2%** (Terminus-2 harness, self-computed; vs Gemini 3 Flash 58.0%, 3.1 Pro 70.3%, Claude Opus 4.7 66.1%, GPT-5.5 78.2%)
- MCP Atlas: **83.6%** (Scale AI official leaderboard; vs 3 Flash 62.0%, Sonnet 4.6 69.5%, GPT-5.5 75.3%)
- GDPval-AA: **1656 Elo** (vs Gemini 3.1 Pro 965)
- OSWorld-Verified: **78.4%** (self-computed, 5-run average, per the Gemini 3.6 Flash comparison table)
- Toolathlon: provided by the HKUST benchmark authors (figure not captured)
- Claw-Eval / ClawProBench / Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.2%**
- Humanity's Last Exam: **40.2%**
- ARC-AGI-2: **72.1%**
- CharXiv Reasoning: **84.2%** — leads multimodal understanding at launch
- MMMU-Pro: **88.3%** (Vals standardized CoT harness) / **83.6%** (Google)
- AA Intelligence Index: no numeric score captured; Google places it in the "top-right quadrant" (frontier-level intelligence + exceptional speed)
- Vals Index composite: **53.08%** ± 1.12 (cost/test $2.915, 11m 1s)

Coding:

- SWE-bench Verified: **78.0%** (rank 25 of 81)
- SWE-bench Pro: **55.1%** (single attempt, self-computed with an internal Antigravity harness, averaged over 5 runs; vs 3 Flash 49.6%, 3.1 Pro 54.2%, Opus 4.7 64.3%, GPT-5.5 58.6%)
- Terminal-Bench 2.1: **76.2%** (above)
- HumanEval: **92.0%**
- DeepSWE v1.1: **37%** / MLE-Bench: **49.7%** (per the Gemini 3.6 Flash comparison table)
- SciCode / LiveCodeBench / Vibe Code Bench: no verified public score found

Long context / multimodal:

- 1M-token window; GDM-MRCR v2 at the full 1M depth: **under 27%** (Gemini 3.6 Flash's 54.0% is "roughly double" 3.5 Flash and 3.1 Pro at the same depth) — weak at full depth
- CharXiv Reasoning 84.2% and MMMU-Pro 83.6–88.3% (above)

### Normalized scores (1–100)

- **Tool use: 83/100.** GDPval-AA 1656 Elo, MCP Atlas 83.6% and OSWorld-Verified 78.4% are strong, with Terminal-Bench 2.1 76.2% between the mid band and the 88% frontier bar; the average of these signals lands at ~83.
- **Reasoning: 82/100.** GPQA Diamond 92.2% clears the 90%+ frontier bar and HLE 40.2% clears the 40%+ bar (barely — current leaders run 50–67%), with ARC-AGI-2 72.1% mid-tier and no numeric composite Intelligence Index captured (Google claims "frontier-level").
- **Context window: 95/100.** 1M-token window; GDM-MRCR v2 under 27% at the full 1M depth and no ≥98% retrieval-at-512K+ figure, so 100 is not justified.
- **Multimodal: 92/100.** text/image/audio/PDF in with text out — the +audio-in band (90–100), corroborated by CharXiv Reasoning 84.2% and MMMU-Pro 83.6–88.3%.
- **Coding: 76/100.** SWE-bench Verified 78.0% and HumanEval 92.0% are solid, but DeepSWE v1.1 37% (well under the 74% bar), Terminal-Bench 2.1 76.2% (under the 85% bar) and SWE-bench Pro 55.1% (mid-tier) cap the score.
- **Cost efficiency: 85/100.** $1.50/$9.00 per 1M interpolates to ~80 between the ~88 ($1.25/$4.25) and ~60 ($3/$15) anchors, lifted by the free tier (Google AI Studio / OpenCode Zen), Batch at half rate and $0.15/M cache reads.
- **Overall Score: 86/100.** (83+82+95+92+76)/5 = 85.6 → 86 — the fast, cheap agentic Flash: MCP Atlas 83.6% and GDPval-AA 1656 at $1.50/$9.00 with a free tier, with DeepSWE 37% and full-depth long context (MRCR <27%) as the gaps.

---

## Update 2026-10-08 (6-day re-research)

Full release-benchmark set found (AI Release Tracker's 26 tracked scores + DeepMind's model card and evals PDF):

- Toolathlon: **56.5%** (HKUST authors' figures, per DeepMind's methodology) — fills the Toolathlon gap; mid-band
- Finance Agent v2: **57.9%** (vals.ai leaderboard); GDPval-AA v2: **1349** Elo; MRCR v2 (8-needle): **77.3%** at 128K average / **26.6%** at 1M pointwise — the 1M figure confirms the "under 27%" estimate precisely
- Arena Elo: Text **1476**, Code **1509**; BU Bench 58%; Blueprint-Bench 2 33.6%; CursorBench v3.1 49.8% / v3.2 48.8%; Gray Swan IPI k=1 14.1% / k=10 54.2% / k=15 60.5%; BullshitBench v2 20%
- Model card comparison columns confirmed: vs Gemini 3 Flash (TB2.1 58.0%, SWE-bench Pro 49.6%, OSWorld 65.1%), 3.1 Pro (70.3%, 54.2%, 76.2%), Opus 4.7 (66.1%, 64.3%, 78.0%), GPT-5.5 (78.2%, 58.6%, 78.7%)
- Methodology confirmations: MCP Atlas from the Scale AI leaderboard; Toolathlon from the HKUST authors; OSWorld-Verified self-computed (5-run avg, 1080p, 100-step cap, pyautogui, UI-specific function declarations); SWE-bench Pro self-computed (5× runs, internal Antigravity harness); MMMU-Pro averaged across Standard and Vision settings
- No score change: Toolathlon 56.5% and Finance Agent v2 57.9% sit mid-band, consistent with Tool 83; the MRCR 1M pointwise of 26.6% confirms Context 95

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (Google DeepMind model card + evaluation PDF, Google AI blog, LLM Reference, vals.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3_5_Flash.md`, using the same headings.
