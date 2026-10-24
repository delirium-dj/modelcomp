# Gemini 4 Argon — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 4 Argon (`gemini-4-argon`; Fairwind-gated at launch, public 2026-10-13)
- Date: 2026-10-16 (UTC) — deep rewrite pass; re-verified 2026-10-18; enriched 2026-10-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`gemini-4-argon`) re-read on 2026-10-23 carries **43 source-displayable rows** (was 26 on 2026-10-18) and computes **82.81/100, #5 of 992** (was #5 of 228). Newly captured: **ARC-AGI-2 91.3% / ARC-AGI-3 46.3% / ARC-AGI-3 provider-adapter 97.3%** (ARC Prize), **AA-LCR 79.7%**, CritPt 27.1%, AA Intelligence Index 52.6%, **AA-Omniscience index 42.4% / accuracy 49.9% / hallucination 15.1%**, FrontierMath v2 T1–3 85.965% / Tier-4 78.049% (Epoch AI), AA-AnalystAgent 48.8%, GDP.pdf 21.8%, AA-Briefcase 1486 Elo, GDPval-AA 1624 Elo, MazeBench 12%, Terminal-Bench-Science 0.1 (6× verifier) 57.6%, PostTrainBench v1.1 45.3%, Bug Hunt 40.7 fixes, ExtractBench Pro 30%, Design Arena 1316, STEMBench 2.44, Gray Swan IPI 0.7%.
> **Refreshed / conflicts:** AA Terminal-Bench 4.0 reads **57.1% (AA)** vs 57.40% (Google methodology table) — consistent; FrontierSWE v2 55.0% and AA TB4.0 57.1% (vs Claude Opus 5.5 59.6% and Sonnet 5.5 64%) keep the non-Google-harness coding read mid-pack, while **ARC-AGI-2 91.3%** is a new frontier reasoning datapoint the launch file lacked. GPQA Diamond remains only an AA estimate — no verified row.
> **No material score change:** the added rows are confirmatory (AA Index unchanged at 52.6; agentic coding still mid-pack off-Google), so scores are held. Enriched evidence is recorded below.
> Sources this pass: https://benchlm.ai/models/gemini-4-argon · https://deepmind.google/models/evals-methodology/gemini-4-argon · https://arcprize.org/results/google-gemini-4-argon · https://artificialanalysis.ai/models/gemini-4-argon · https://epoch.ai/benchmarks/frontiermath-tier-4-v2

> **Re-verified 2026-10-18.** BenchLM (`gemini-4-argon`, 26 rows) computed an overall **82.81/100 (#5 of 228)** and re-confirmed the prior pass. **No score change at that time.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources re-run).
> Confirmed/added this pass: **Vals Index 68.90% (#1)**; **AA AutomationBench-AA 77.5% (#1)**; AA Intelligence Index **52.6–53 (high)**; HLE **57.1%**, HLE w/tools 62.4%, SciCode **61.8%**, CritPt 27.1%, AA-LCR 79.7%, AA-Omniscience accuracy 49.9% (15% hallucination); Coding Index 78.6%; GDPval-AA 56.2% (AA). Vendor: DeepSWE v1.1 **77.9% (#1)**, Vibe Code Bench **91.9% (#1)**, Finance Agent v2 **65.4% (#1)**, AutomationBench (Zapier) 51.3% (#1), LVBench **91.7% (#1)**, CWE-bench v1 68.0% (tie #1), GraphWalks 128K 99.7% / 256K–1M 84.2%, OSWorld 2.0 69.2%, Terminal-Bench 4.0 57.0–57.4%, FrontierMath v2 Tier-4 78.0%. Independent Terminal-Bench 4.0 **57% (AA)** vs Opus 5.5 60% and Sonnet 5.5 64%; FrontierSWE v2 **55.0%** trails GPT-6 Astra 65.5%.
> **Conflicts surfaced:** (1) Coding — vendor DeepSWE #1 vs AA Terminal-Bench 4.0 57% and FrontierSWE v2 55.0% (mid-pack on non-Google harnesses). (2) AA Intelligence Index 52.6 (benchgap) vs 53 (AA) — minor. (3) GPQA Diamond only appears as **AA estimate 96.6%** (and 92.7% estimate); no verified GPQA row on llm-stats' leaderboard. (4) Some rows use non-default settings (6× verifier timeout on TB-Science; best-of-3 OSWorld). (5) Context 1M shared vs output 1M via long decode. (6) Public availability began 2026-10-13 (paid API + Google AI Ultra), so independent reproduction is still young.
> Sources: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/ · https://ai.google.dev/gemini-api/docs/latest-model · https://felloai.com/gemini-4-argon/ · https://kie.ai/blog/gemini-4-argon-vs-claude-opus-5-5 · https://benchgap.net/model/gemini-4-argon · https://www.vals.ai/models/google_gemini-4-argon · https://gigazine.net/gsc_news/en/20261001-google-gemini-4-argon

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's next-era frontier flagship (announced 2026-09-30), led by software engineering, cyber defense, enterprise knowledge work (legal/finance) and long-video understanding; first shipped to vetted cyber defenders in the **Fairwind** program, then public from 2026-10-13.
- **Provider / access:** Gemini API / Vertex / AI Studio (`gemini-4-argon`, stable ID); rolled out to paid API customers and Google AI Ultra subscribers, then globally. No Zen Free ID.
- **Release / knowledge:** announced 2026-09-30; public 2026-10-13; knowledge cutoff March 2026.
- **IDs:** `gemini-4-argon`.
- **Context window:** 1,048,576 tokens shared between input and output; 65,536 max output by default, up to 1,048,576 with long decode.
- **Modalities:** text, image, video, audio and PDF in, text out; thinking levels low/medium/high; automatic-only caching (no explicit caching).
- **Pricing (as of 2026-10-24):** intro **$2.00 in / $10.00 out / $0.10 cached** per 1M (through 2026-11-30); standard **$4.00 / $20.00** ($0.20 cached) from 2026-12-01; Batch/Flex $1.00/$5.00 → $2.00/$10.00; Priority $3.60/$18.00 → $7.20/$36.00. Cost ~$1.99/task (intro) then ~$3.98/task.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- **Vals Index 68.90% (#1, independent)**; **AA AutomationBench-AA 77.5% (#1, AA)** / AutomationBench (Zapier) 51.3% (#1)
- Vals Finance Agent v2 **65.4% (#1)**; Agents' Last Exam 39.5%; Toolathlon-Verified 79.8%; JobBench 65.7%
- OSWorld 2.0 69.2%; Terminal-Bench 4.0 **57.1% (AA)** / 57.40% (Google); Terminal-Bench-Science 0.1 (6× verifier) 57.6%
- GDPval-AA **56.2%** normalized / **1624 Elo** (AA); AA-Briefcase 1486 Elo; AA-AnalystAgent 48.8%; GDP.pdf 21.8%; MazeBench 12%

Reasoning / knowledge:

- AA Intelligence Index **52.6 (high)**; HLE **57.1%** (57.1 w/o tools, 62.4% w/ tools); CritPt 27.1%; AA-LCR 79.7%
- **ARC-AGI-1 98.5% / ARC-AGI-2 91.3% / ARC-AGI-3 46.3%** (ARC Prize Semi-Private); ARC-AGI-3 provider adapter 97.3%
- GraphWalks BFS 128K **99.7%** / 256K–1M **84.2%**; FrontierMath v2 Tiers 1-3 85.965% / Tier-4 78.049%; LABBench2 88.8%; BrowseComp 91.5%
- AA-Omniscience index 42.4% / accuracy 49.9% / hallucination 15.1%
- GPQA Diamond **96.6%** (AA estimate) / 92.7% (estimate) — no verified GPQA row; MMLU-Pro 92.8% (estimate)

Coding:

- DeepSWE v1.1 **77.9% (#1)** (vendor); Vibe Code Bench **91.9% (#1)**; SciCode **61.8%** (AA); Coding Index 78.6%
- CWE-bench v1 68.0% (tie #1); SWE-bench Pro 81.5% (estimate); FrontierSWE v2 **55.0%** (behind GPT-6 Astra 65.5%); PostTrainBench v1.1 45.3%; Bug Hunt 40.7 fixes

Multimodal / long context:

- LVBench **91.7% (#1)**; Chartography (no tools) 71.6%; ExtractBench Pro 30%; Design Arena 1316
- 1M context with GraphWalks 256K–1M 84.2% (strong but not saturated at depth); AA-LCR 79.7%

### Normalized scores (1–100)

- **Tool use: 91/100.** Vals Index #1, AutomationBench-AA 77.5% #1 and Finance Agent v2 65.4% #1 confirm frontier agent depth; capped by TB4.0 57.1% and Agents' Last Exam 39.5%.
- **Reasoning: 89/100.** HLE 57.1%, ARC-AGI-2 91.3%, SciCode 61.8%, GraphWalks 1M 84.2% and FrontierMath Tier-4 78% are strong; AA Index 52.6 (<60) and only estimated GPQA keep it under 92.
- **Context window: 95/100.** 1M context with a headline 1M output (long decode) is the widest documented band here; GraphWalks 84.2% at 256K–1M is strong but not saturated.
- **Multimodal: 87/100.** Text + image + video + audio + PDF in, text out, with best-in-class long video (LVBench 91.7%); weakest document extraction (ExtractBench Pro 30%); no non-text output.
- **Coding: 90/100.** DeepSWE 77.9% #1, Vibe Code Bench 91.9% #1, SciCode 61.8% and Coding Index 78.6% are elite; FrontierSWE v2 55.0% and AA TB4.0 57.1% (mid-pack) hold it back.
- **Cost efficiency: 72/100.** Intro $2/$10 with a 95% cache discount is strong; post-intro $4/$20 halves the value and there is no free tier.
- **Overall Score: 90/100.** (91 + 89 + 95 + 87 + 90) / 5 = 90.4 → 90. Best fit: frontier software engineering, cyber defense and long-video / knowledge work at GA.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-24
- Method: second-pass enrichment over deep rewrite-pass public internet research (Google launch blog + evaluation methodology + latest-model docs, ARC Prize results, Artificial Analysis model page/leaderboards, BenchLM re-read 2026-10-23, Epoch AI, Vals AI, FelloAI, kie.ai). Vendor #1 claims are separated from independent Vals/AA/ARC rows; non-default harness settings, the GPQA-estimate caveat and access gating are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.1_Pro.md`, using the same headings.
