# Gemini 4 Argon — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 4 Argon (`gemini-4-argon`; Fairwind-gated at launch, public 2026-10-13)
- Date: 2026-10-16 (UTC) — deep rewrite; re-verified 2026-10-18; enriched 2026-10-24; re-researched 2026-11-04
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-04** (second pass, user-requested). Fresh sources this pass: BenchLM (`gemini-4-argon`, **45 rows**, **82.28/100, #5 of 1008** — was 82.81, #5 of 992), Artificial Analysis model page, Google pricing docs, Google DeepMind model card/eval pages, Roboflow, Mashable.
> **Refreshed values:** AA Intelligence Index **50.4** (was 52.6); AA-Omniscience **index 46.1 / accuracy 48.3% / hallucination 4.3%** (was 42.4 / 49.9 / 15.1 — hallucination is now the best-in-field low rate); AA-HLE 57.1% re-confirmed.
> **Newly captured rows:** ScarfBench **75.2%**; **FrontierCode 2.0 26.3%** (Cognition — a weak independent-adjacent coding row); OSWorld 2.1 Offline **74.7%**, ExploitGym **39.5%**, Blueprint-Bench 2 **54.4%** (via the Gemini 4 Carbon methodology pages); STEMBench 2.44. Independent vision: **leads Roboflow's vision benchmark at both settings (82.5% / 85.1%)**.
> **Context change:** **Gemini 4 Carbon** released 2026-10-28 as the successor (BenchLM 88.38; AA Index ~59); Argon remains the value frontier pick at the same intro pricing — $2/$10 through 2026-11-30, then $4/$20 from 2026-12-01 (re-verified unchanged).
> **No score change:** refreshed evidence confirms the profile — frontier agent/knowledge work, elite multimodal (vision + long video), mid-pack non-Google coding harnesses (FrontierSWE v2 55.0%, AA TB4.0 57.1%, FrontierCode 2.0 26.3%) — scores held at 90.
> Sources this pass: https://benchlm.ai/models/gemini-4-argon · https://artificialanalysis.ai/models/gemini-4-argon · https://ai.google.dev/gemini-api/docs/pricing · https://deepmind.google/models/model-cards/gemini-4-argon/ · https://roboflow.com/blog/gemini-4-argon-vision · https://mashable.com/tech/google-launches-gemini-4-argon

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`gemini-4-argon`) re-read on 2026-10-23 carried **43 source-displayable rows** (was 26 on 2026-10-18) and computed **82.81/100, #5 of 992** (was #5 of 228). Newly captured then: ARC-AGI-2 91.3% / ARC-AGI-3 46.3% / ARC-AGI-3 provider-adapter 97.3% (ARC Prize), AA-LCR 79.7%, CritPt 27.1%, AA Intelligence Index 52.6%, AA-Omniscience index 42.4% / accuracy 49.9% / hallucination 15.1%, FrontierMath v2 T1–3 85.965% / Tier-4 78.049% (Epoch AI), AA-AnalystAgent 48.8%, GDP.pdf 21.8%, AA-Briefcase 1486 Elo, GDPval-AA 1624 Elo, MazeBench 12%, Terminal-Bench-Science 0.1 (6× verifier) 57.6%, PostTrainBench v1.1 45.3%, Bug Hunt 40.7 fixes, ExtractBench Pro 30%, Design Arena 1316, STEMBench 2.44, Gray Swan IPI 0.7%. Refreshed then: AA Terminal-Bench 4.0 57.1% (AA) vs 57.40% (Google) — consistent.

> **Re-verified 2026-10-18.** BenchLM (`gemini-4-argon`, 26 rows) computed an overall **82.81/100 (#5 of 228)** and re-confirmed the prior pass. **No score change at that time.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources re-run). Confirmed/added: Vals Index 68.90% (#1); AA AutomationBench-AA 77.5% (#1); AA Intelligence Index 52.6–53 (high); HLE 57.1%, HLE w/tools 62.4%, SciCode 61.8%, CritPt 27.1%, AA-LCR 79.7%, AA-Omniscience accuracy 49.9% (15% hallucination); Coding Index 78.6%; GDPval-AA 56.2% (AA). Vendor: DeepSWE v1.1 77.9% (#1), Vibe Code Bench 91.9% (#1), Finance Agent v2 65.4% (#1), AutomationBench (Zapier) 51.3% (#1), LVBench 91.7% (#1), CWE-bench v1 68.0% (tie #1), GraphWalks 128K 99.7% / 256K–1M 84.2%, OSWorld 2.0 69.2%, Terminal-Bench 4.0 57.0–57.4%, FrontierMath v2 Tier-4 78.0%. Independent Terminal-Bench 4.0 57% (AA) vs Opus 5.5 60% and Sonnet 5.5 64%; FrontierSWE v2 55.0% trails GPT-6 Astra 65.5%. Conflicts surfaced: vendor #1 coding claims vs mid-pack non-Google harnesses; AA Index 52.6 vs 53 (minor); GPQA only as AA estimates; non-default settings on some rows (6× verifier, best-of-3 OSWorld); 1M shared context; public availability began 2026-10-13.

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's next-era frontier flagship (announced 2026-09-30), led by software engineering, cyber defense, enterprise knowledge work (legal/finance) and long-video understanding; first shipped to vetted cyber defenders in the **Fairwind** program, then public from 2026-10-13.
- **Provider / access:** Gemini API / Vertex / AI Studio (`gemini-4-argon`, stable ID); rolled out to paid API customers and Google AI Ultra subscribers, then globally. No Zen Free ID.
- **Release / knowledge:** announced 2026-09-30; public 2026-10-13; knowledge cutoff March 2026.
- **IDs:** `gemini-4-argon`.
- **Context window:** 1,048,576 tokens shared between input and output; 65,536 max output by default, up to 1,048,576 with long decode.
- **Modalities:** text, image, video, audio and PDF in, text out; thinking levels low/medium/high; automatic-only caching (no explicit caching).
- **Pricing (as of 2026-11-04):** intro **$2.00 in / $10.00 out / $0.10 cached** per 1M (through 2026-11-30); standard **$4.00 / $20.00** ($0.20 cached) from 2026-12-01; Batch/Flex $1.00/$5.00 → $2.00/$10.00; Priority $3.60/$18.00 → $7.20/$36.00. Cost ~$1.99/task (intro) then ~$3.98/task.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- **Vals Index 68.90% (#1, independent)**; **AA AutomationBench-AA 77.5% (#1, AA)** / AutomationBench (Zapier) 51.3% (#1)
- Vals Finance Agent v2 **65.4% (#1)**; Agents' Last Exam 39.5%; Toolathlon-Verified 79.8%; JobBench 65.7%
- OSWorld 2.0 69.2%; OSWorld 2.1 Offline **74.7%** (via Carbon methodology); ExploitGym **39.5%** (via Carbon methodology); Terminal-Bench 4.0 **57.1% (AA)** / 57.40% (Google); Terminal-Bench-Science 0.1 (6× verifier) 57.6%
- GDPval-AA **56.2%** normalized / **1624 Elo** (AA); AA-Briefcase 1486 Elo; AA-AnalystAgent 48.8%; GDP.pdf 21.8%; MazeBench 12%; Gray Swan IPI 0.7% (15 attempts)

Reasoning / knowledge:

- AA Intelligence Index **50.4** (refreshed 2026-11-04 from 52.6); HLE **57.1%** (62.4% w/ tools); CritPt 27.1%; AA-LCR 79.7%
- **ARC-AGI-1 98.5% / ARC-AGI-2 91.3% / ARC-AGI-3 46.3%** (ARC Prize Semi-Private); ARC-AGI-3 provider adapter 97.3%
- GraphWalks BFS 128K **99.7%** / 256K–1M **84.2%**; FrontierMath v2 Tiers 1-3 85.965% / Tier-4 78.049%; LABBench2 88.8%; BrowseComp 91.5%
- AA-Omniscience **index 46.1 / accuracy 48.3% / hallucination 4.3%** (refreshed; hallucination is the best low rate among tracked frontier models)
- GPQA Diamond **96.6%** (AA estimate) / 92.7% (estimate) — no verified GPQA row; MMLU-Pro 92.8% (estimate)

Coding:

- DeepSWE v1.1 **77.9% (#1)** (vendor); Vibe Code Bench **91.9% (#1)**; SciCode **61.8%** (AA); Coding Index 78.6%
- CWE-bench v1 68.0% (tie #1); SWE-bench Pro 81.5% (estimate); FrontierSWE v2 **55.0%** (behind GPT-6 Astra 65.5%); **FrontierCode 2.0 26.3%** (Cognition); ScarfBench **75.2%**; PostTrainBench v1.1 45.3%; Bug Hunt 40.7 fixes

Multimodal / long context:

- LVBench **91.7% (#1)**; Roboflow vision benchmark **#1 at both settings (82.5% / 85.1%)**; Chartography (no tools) 71.6%; ExtractBench Pro 30%; Design Arena 1316; Blueprint-Bench 2 54.4%
- 1M context with GraphWalks 256K–1M 84.2% (strong but not saturated at depth); AA-LCR 79.7%

### Normalized scores (1–100)

- **Tool use: 91/100.** Vals Index #1, AutomationBench-AA 77.5% #1 and Finance Agent v2 65.4% #1 confirm frontier agent depth; capped by TB4.0 57.1% and Agents' Last Exam 39.5%.
- **Reasoning: 89/100.** HLE 57.1%, ARC-AGI-2 91.3%, SciCode 61.8%, GraphWalks 1M 84.2% and FrontierMath Tier-4 78% are strong; AA Index 50.4 (<60) and only estimated GPQA keep it under 92, partly offset by a best-in-class 4.3% hallucination rate.
- **Context window: 95/100.** 1M context with a headline 1M output (long decode) is the widest documented band here; GraphWalks 84.2% at 256K–1M is strong but not saturated.
- **Multimodal: 87/100.** Text + image + video + audio + PDF in, text out, with best-in-class long video (LVBench 91.7%) and leading Roboflow vision results; weakest document extraction (ExtractBench Pro 30%); no non-text output.
- **Coding: 90/100.** DeepSWE 77.9% #1, Vibe Code Bench 91.9% #1, SciCode 61.8% and Coding Index 78.6% are elite; FrontierSWE v2 55.0%, AA TB4.0 57.1% and FrontierCode 2.0 26.3% (mid/low on non-Google harnesses) hold it back.
- **Cost efficiency: 72/100.** Intro $2/$10 with a 95% cache discount is strong; post-intro $4/$20 halves the value and there is no free tier.
- **Overall Score: 90/100.** (91 + 89 + 95 + 87 + 90) / 5 = 90.4 → 90. Best fit: frontier software engineering, cyber defense and long-video / knowledge work at GA.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-04
- Method: re-research pass (user-requested second pass) over public internet research (Google launch blog + evaluation methodology + latest-model/pricing docs, BenchLM re-read 2026-11-04 with 45 rows, Artificial Analysis, Google DeepMind model card, ARC Prize, Epoch AI, Roboflow, Mashable). Refreshed AA rows (Index 50.4, Omniscience 46.1/48.3/4.3), recorded the newly captured ScarfBench / FrontierCode 2.0 / OSWorld 2.1 / ExploitGym / Blueprint-Bench 2 / Roboflow rows and the Gemini 4 Carbon succession context; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 4 Argon launch blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
  - [Google DeepMind — Gemini 4 Argon model card](https://deepmind.google/models/model-cards/gemini-4-argon/)
  - [BenchLM — Gemini 4 Argon benchmark scores](https://benchlm.ai/models/gemini-4-argon)
  - [Artificial Analysis — Gemini 4 Argon](https://artificialanalysis.ai/models/gemini-4-argon)
  - [ARC Prize — Gemini 4 Argon results](https://arcprize.org/results/google-gemini-4-argon)
  - [Roboflow — Gemini 4 Argon leads vision benchmark](https://roboflow.com/blog/gemini-4-argon-vision)
- Future sources: add a new file next to this one, e.g. `Gemini_3.1_Pro.md`, using the same headings.
