# Gemini 3.7 Flash — findings by Ling 3.1 Flash

- Source: Google DeepMind (`google/gemini-3.7-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google DeepMind's GA Flash workhorse (released 2026-08-13, three weeks after 3.6 Flash) — large coding gains (DeepSWE +17 pts, FrontierCode top of Google's comparison set), 56 on the AA Intelligence Index, at half the original 3.6 Flash launch price; superseded as flagship by 3.8 Flash on 2026-09-02.
- **Provider / access:** Google Gemini API (`gemini-3.7-flash`, GA) and Vertex; Google AI Studio and OpenCode Zen free tier. Reasoning tiers low/medium/high (benchmarks use high); thinking tokens billed as output.
- **Release / knowledge:** 2026-08-13; knowledge cutoff March 2026 (some domains only reach January 2025, per DeepMind's card).
- **IDs:** `google/gemini-3.7-flash`. Free tier exists on Google AI Studio and OpenCode Zen.
- **Context window:** 1,048,576 (1M) total (1.05M per OpenRouter/AI Atlas); 65,536 max output.
- **Modalities:** text, image, audio, PDF in; text out; tool calls, JSON mode.
- **Pricing (as of 2026-10-02):** introductory $0.75/$3.75 per 1M input/output through 2026-12-31, then $1.50/$7.50 from 2027-01-01; cached input 90% off (~$0.075/M); Batch half rate ($0.375/$1.875).
- **Architecture:** proprietary (Google DeepMind); closed weights, no self-hosting or fine-tuning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Artificial Analysis own run, high effort, 2026-08-20; vendor also 85.8%); vals.ai Terminus 2 archive: 77.53%; Terminal-Bench 3.0: **14.9%** (AA; vs GPT-5.6 Terra 20.8%)
- AutomationBench: **30.4%** (vendor; vs Claude Sonnet 5 10.7%, GPT-5.6 Terra 23.6%)
- GDPval-AA Elo: **1525** (vendor-reported)
- AA-AnalystAgent: **60.0** (Artificial Analysis, 2026-09-29, ±11.2)
- Agents' Last Exam (multimodal desktop tasks): **26.3%** pass rate (vs Claude Sonnet 5's 33.3%)
- FrontierCode 1.1 Main: **43.6%** (vendor — top score in Google's comparison set; vs Sonnet 5 42.7%, GPT-5.6 Terra 41.3%)
- Claw-Eval / ClawProBench / Toolathlon-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (Artificial Analysis, high, 2026-09-11; vals.ai 93.94%, rank 4)
- HLE-Verified: **53.6%** (vendor; vs GPT-5.6 Terra 51.1%, Claude Sonnet 5 31.0%)
- Humanity's Last Exam (no tools): **47.9%** (Artificial Analysis, high, text-only subset, 2026-08-17)
- AA Intelligence Index: **56** (high; +4 over 3.6 Flash's 52, +1 over Claude Sonnet 5's 55; behind GPT-5.6 Terra and Muse Spark 1.2 at 57)
- ARC-AGI-2 (high): **84.6%** (arcprize.org, 2026-08-24, ±9.2)
- LiveBench: **78.8** (livebench.ai composite across 7 domains, 2026-08-24, ±2.7)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE v1.1: **65.3%** (vendor, high effort; independent Datacurve board 65%±2 on mini-swe-agent, 2026-08-13) — +17 pts over 3.6 Flash; GPT-5.6 Terra leads at 69.6%
- LiveCodeBench: **88.7%** (vals.ai, 88.652, rank 3 — just ahead of Grok 4.6)
- SWE-bench Verified: **80.8%** (vals.ai, bash-only harness, 2026-08-14)
- WebDev Arena / Code Arena: **1588 Elo** (vendor — tops Google's comparison set; Sonnet 5 1541, GPT-5.6 Terra 1523)
- SciCode / Vibe Code Bench: no verified public score found

Long context:

- GDM-MRCR v2 (128K): **97.0%** (vendor-reported; vs 3.6 Flash 91.8%, Sonnet 5 81.5%, GPT-5.6 Terra 93.5%)
- MRCR at 512K–1M / RULER / GraphWalks: no verified public score found

Multimodal:

- CharXiv Reasoning (no tools): **84.5%** (vendor; -0.7 vs 3.6 Flash)
- GDP.pdf (expert PDF comprehension): **34.0%** (vendor; vs 3.6 Flash 22.0%)

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 85.8% (AA) is just under the 88%+ frontier bar and the vals.ai run (77.53%) shows harness spread; AutomationBench 30.4% and GDPval-AA 1525 are mid-tier despite leading Sonnet 5 and Terra.
- **Reasoning: 90/100.** GPQA 94.5% (AA) and HLE-Verified 53.6% (47.9% no-tools, AA) clear the frontier reference bars; the AA Intelligence Index of 56 (just under the 60+ bar) and ARC-AGI-2 84.6% keep it out of the 92+ band.
- **Context window: 95/100.** 1M-token window with GDM-MRCR v2 97.0% at 128K only — no ≥98% retrieval-at-512K+ figure, so 100 is not justified.
- **Multimodal: 92/100.** text/image/audio/PDF in with text out — the +audio-in band (90–100); CharXiv 84.5% and GDP.pdf 34.0% corroborate.
- **Coding: 88/100.** LiveCodeBench 88.7% (rank 3), SWE-bench Verified 80.8%, FrontierCode 43.6% (top of Google's set) and WebDev Arena 1588 Elo are strong; DeepSWE 65.3% sits 9 pts under the 74% frontier reference.
- **Cost efficiency: 100/100.** Free tier on Google AI Studio and OpenCode Zen; the $0.75/$3.75 introductory paid rate (through 2026-12-31) would itself score ~93 before doubling to $1.50/$7.50 in 2027.
- **Overall Score: 90/100.** (86+90+95+92+88)/5 = 90.2 → 90 — the value workhorse: frontier GPQA/HLE and rank-3 LiveCodeBench at Flash pricing, with Terminal-Bench 3.0 (14.9%) showing the ceiling of the Flash tier on open-ended agentics.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Google DeepMind launch blog, Artificial Analysis, vals.ai, Datacurve DeepSWE board, ARC Prize, LiveBench, The Model Gap, Emergent, HokAI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
