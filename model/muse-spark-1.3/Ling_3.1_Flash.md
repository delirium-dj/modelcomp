# Muse Spark 1.3 — findings by Ling 3.1 Flash

- Source: Meta Superintelligence Labs (`muse-spark-1.3`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (Contributor/Free/Standard/Max are tiers of one model — same weights)
- **Short description:** Meta Superintelligence Labs' frontier agentic coding and long-horizon reasoning model (released 2026-09-02), built around Muse Code with a 1M-token context; fourth Muse Spark release in five months.
- **Provider / access:** Meta Model API and Muse Code; OpenCode Zen `opencode/muse-spark-1.3` (Contributor/Free tier). Chat Completions-style API on the Meta Model API.
- **Release / knowledge:** 2026-09-02; knowledge cutoff undisclosed.
- **IDs:** `opencode/muse-spark-1.3` — Free (Contributor) tier exists on Zen at $0 in exchange for training-data consent; Standard and Max effort via Meta Model API.
- **Context window:** 1,048,576 (1M) total; 131,072 max output (per Zen / Vercel AI Gateway docs).
- **Modalities:** text, image, video, PDF in; text out (audio input dropped in 1.3); reasoning effort tiers xhigh (GA) and max (limited partner preview); tool calls and JSON mode supported.
- **Pricing (as of 2026-10-02):** Free Contributor tier $0 (Meta may train on prompts/completions — do not use for confidential code); Contributor $0.10/$0.20 per 1M; Standard & Max $1.25/$4.25 per 1M, cached input $0.15.
- **Architecture:** proprietary (Meta Superintelligence Labs); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Artificial Analysis, max effort, 2026-09-29; 85.4% at xhigh; Vals AI Terminus 2 harness 72.28% standard / 79.03% Max, 2026-09-23; vendor claim 88.8%)
- Agents' Last Exam: **32.2%** (Snorkel, Codex harness, 2026-10-01)
- OSWorld 2.0: **66.9%** (max effort, llmboard/dataconomy)
- Job Bench: **64.9%** (max effort, llmboard — rank 1/8)
- AutomationBench: **49.4%** (max effort)
- GDPval-AA: **1754 Elo** (vendor launch scorecard; AA article reads 1709/1754)
- SWE Atlas Codebase QnA: **59.4%** (vendor launch scorecard, 124 tasks / 11 repos)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found for 1.3 (1.2 had MCP Atlas 90.3% via Benchgen)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Artificial Analysis max, 2026-09-29; 94.14% at xhigh — saturated benchmark, treat as tainted)
- HLE: **48.7%** (Artificial Analysis max, 2026-09-29; 47.5% xhigh; vendor 47%)
- LCR: **83%** (BenchLM)
- CritPt: **26.0%** (Extra-High, no tools, llmboard)
- Artificial Analysis Intelligence Index: **48 (Max) / 45.1 (Xhigh) on v4.3.2** (AA's own page, #23 of 223; BenchmarkList confirms 48.1, rank 24 of 427, 95th pct, 2026-10-03) — the 61 (xhigh) / 62 (max) figures circulating (HokAI via AA; Dataconomy 62.1, updated 2026-09-03) are the launch-era v4.3 read; v4.3.2 adds AA-Briefcase, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, GDP.pdf, CritPt, AA-Omniscience and AA-LCR, so the two revisions use different eval sets — neither number is "wrong" and they are not cross-comparable
- SimpleBench: **81.8%** (Extra-High, no tools)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **49.0%** (Meta Agentic Code harness, vibecoderjournal telemetry — unverified; Meta publishes no official SWE-bench number)
- DeepSWE v1.1: **75.4%** (vendor self-report, launch scorecard; independent board pending — 1.2 showed 59.3 vendor vs 55 independent)
- LiveCodeBench: **45.0%** (vibecoderjournal telemetry — unverified)
- SciCode: **57.3%** (dataconomy; 59.7% Extra-High no tools per llmboard)
- AA Coding Agent Index v1.5: **54.3%** (max, with tools)
- Code Migration: **47.4%** (max)
- Aider Polyglot: **49.5%** (telemetry)
- Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 (8-needle): **98.5%** at 256K–512K and **98.1%** at 512K–1M (vendor launch scorecard)

### Normalized scores (1–100)

- **Tool use: 93/100.** TB2.1 84.3–85.4% independent (AA) plus GDPval-AA 1754 Elo and the top Job Bench rank clear the frontier band; capped below 95 because Vals AI's Terminus 2 harness reads much lower (72.28/79.03) and Agents' Last Exam is only 32.2%.
- **Reasoning: 87/100.** GPQA 93.5% (AA max; 91.3% Mercor single-shot) and HLE 48.7% (AA max) sit in the frontier band, but AA's own page now reads the Intelligence Index at 48 (Max) / 45.1 (Xhigh) on v4.3.2 (BenchmarkList: 48.1, rank 24 of 427) — not the launch-era 61–62 (v4.3) the previous score leaned on; CritPt 24.9–26.0%, AA-Omniscience 25 and AutomationBench-AA 57.9% cap the score.
- **Context window: 100/100.** 1M total / 131,072 out with MRCR v2 98.1% at 512K–1M (≥98% retrieval at 512K+); the retrieval figures are vendor-reported, the one caveat.
- **Multimodal: 85/100.** text/image/video/PDF in with text-only out (audio input dropped in 1.3) — squarely the +video/PDF band.
- **Coding: 91/100.** SciCode 57.3–59.7%, Coding Index 76.3 and AA Coding Agent Index 54.3 are solid; DeepSWE 75.4% and SWE-Atlas 59.4% are vendor self-reports not yet independently confirmed, and telemetry LiveCodeBench 45.0% / SWE-bench 49.0% cap the score.
- **Cost efficiency: 100/100.** Free Contributor tier on OpenCode Zen is $0 (training-data-consent caveat); Standard/Max $1.25/$4.25 would score ~88.
- **Overall Score: 91/100.** (93+87+100+85+91)/5 = 91.2 → 91 — top-tier pick for long-horizon agentic coding when the Free tier's data policy is acceptable; otherwise the $1.25/$4.25 Standard tier (the current AA composite of 48 on v4.3.2 is the main correction from the 2026-10-02 read).

---

## Update 2026-10-08 (6-day re-research)

**Score revisions: Reasoning 91→87, Overall 92→91** — AA's own page now reads the Intelligence Index at 48 (Max) on v4.3.2, not the launch-era 61–62 (v4.3) the Reasoning score leaned on. Tool use 93 / Context 100 / Multimodal 85 / Coding 91 / Cost 100 unchanged:

- **AA Intelligence Index v4.3.2: 48 (Max) / 45.1 (Xhigh)** (AA's own page, #23 of 223; BenchmarkList confirms 48.1, rank 24 of 427, 95th pct, 2026-10-03; mintapis carries the same 48.1/45.1 split). The 61 (xhigh) / 62 (max) figures (HokAI via AA; Dataconomy 62.1, updated 2026-09-03) are the launch-era v4.3 read — v4.3.2 adds AA-Briefcase, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, GDP.pdf, CritPt, AA-Omniscience and AA-LCR, so the two numbers are different measurements, not a regression. Components (Max): AA-Briefcase 1583 (rank 9 of 145, rubric pass 58.7%), GDPval-AA 1754 (rank 9 of 352), AutomationBench-AA 57.9% (rank 16 of 26), SciCode 59.7% (rank 8 of 296), HLE 48.7% (rank 16 of 478), CritPt 24.9% (rank 11 of 28), AA-Omniscience 25 (rank 12 of 30), AA-LCR 83.0% (rank 20 of 408).
- New independent rows (BenchmarkRegistry, 2026-10-07): **Vibe Code Bench v1.1 82.9%** (vals.ai, OpenHands harness, xhigh) — a strong coding fill the launch scorecard didn't cover; **Finance Agent Benchmark 2 58.9%** (vals.ai, xhigh); **APEX-Agents Original 58.6% (xhigh) / 47.6% (max)** (Mercor); **GPQA Diamond 91.3%** (Mercor single-shot, max); **CharXiv 93.9%** and **MedXpertQA MM 76.3%** (Mercor single-shot, max); **CursorBench 4.0 29.3% / 32.6% / 33.4%** (low/medium/high, Cursor); **CWE-bench 1 55.0%** (Collinear, OpenCode harness, high); **AutomationBench 1.0.6 20.7%** (Zapier's own board, max — 28.7 points under Meta's 49.4%, flagged); **Chartography 27.6%** and **Riemann-bench 28.0%** (Surge, xhigh); **Vals Index 2.1 53.2%** (xhigh).
- New #1 ranks (BenchmarkList, verified 2026-10-03): Harvey LAB-AA **30.8%** (rank 1 of 18, 100th pct), Professional Reasoning Bench – Legal **61.6%** (rank 1 of 43), PRBench Finance **59.5%** (rank 1 of 39), MRCR v2 8-needle 512K–1M **98.1%** (rank 1 of 9) — the MRCR rows remain vendor self-reported ("Self-reported" source tag), so the Context 100 caveat stands.
- Other fills: ProgramBench **70.8%** raw pass rate (rank 10 of 37), KernelBench Mega **3.01×** (rank 8 of 15, 343 tok/s, 8302s), RuneBench **4.6** (rank 33 of 61 — field leader GPT-6 Astra 7.3), Gray Swan IPI **15.9%** (rank 12 of 19 — prompt-injection robustness), ArxivMath **73.3%** (rank 14 of 35), DeepSearchQA **89.4%** (rank 6 of 12), MazeBench **0**, Lech Mazur Writing **0.584** (rank 17 of 52), AIIQ Composite IQ **128** (rank 21 of 147), AA Coding Index **75.8 (Max) / 76.5 (Xhigh)**, Coding Agent Index v1.4 **68.0**.
- Score impact: Reasoning 91→87 (the AA Index correction 61–62 → 48 is the driver; GPQA 93.5% and HLE 48.7% keep it in the upper band); Overall 92→91 ((93+87+100+85+91)/5 = 91.2). Coding 91 stands — the new Vibe Code Bench 82.9% (vals.ai) fill offsets the still-unconfirmed DeepSWE 75.4% (Datacurve's board was unreachable at launch and remains so) and the telemetry LiveCodeBench 45.0% / SWE-bench 49.0% caps.

---

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Scores unchanged: Tool 93 / Reasoning 87 / Context 100 / Multimodal 85 / Coding 91 / Cost 100 / Overall 91.** New independent reads this pass:

- **Artificial Analysis in-Muse-Code runs (via Steal What Works, xhigh):** DeepSWE **67%** (1.3) vs 58% (1.2) — the first independent DeepSWE read, 8.4 pts under Meta's 75.4% vendor claim; Terminal-Bench 2.1 **82%** (flat vs 1.2); SWE-Atlas Codebase QnA **44%** (vs 45% on 1.2 — a 1-pt regression under 1.3, against the vendor's 46.2→59.4 claim); AA Coding Agent Index **62→64**.
- **goml.io review (2026-09-11):** DeepSWE v1.1 75.4% leads Opus 5 (74.0%) and GPT-5.6 Sol (73.0%); SWE-Atlas leads by ~6 pts; TB 2.1 ties GPT-5.6 Sol at 88.8%; MRCR 256K–512K 98.5% vs GPT-5.6 Sol 91.5% (Opus 5 not published). Confirms the vendor launch scorecard's relative ordering.
- **AA release page re-read:** Intelligence 48 (Max) / 45 (Xhigh) on v4.3.2, 1M context, ~$0.80/task, 122 t/s (Max) / 259 t/s (Xhigh) — reconfirms the v4.3.2 Index read behind the 2026-10-08 Reasoning correction; Terminal-Bench 4.0 is one of the 10 v4.3.2 components (board leaders: Sonnet 5.5 63.6%, Opus 5.5 59.6%).
- **Conflict comparison:** TB 2.1 spans 72.3% (Vals Terminus 2, standard) → 79.0% (Vals, Max) → 82% (AA in Muse Code) → 84.3–85.4% (AA native) → 88.8% (vendor) — harness-dependent; the Tool 93 cap already reflects this. DeepSWE now spans 67% (AA in-Muse-Code, independent) → 75.4% (vendor); Coding 91 stands on SciCode 59.7% and Vibe Code Bench 82.9% (vals.ai), with DeepSWE carrying an independent lower read.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (Artificial Analysis, Vals AI, Snorkel, BenchLM, llmboard, goml.io, Steal What Works, vendor launch scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
