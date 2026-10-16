# Gemini 4 Argon — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 4 Argon (`gemini-4-argon`; Fairwind-gated at launch, public 2026-10-13)
- Date: 2026-10-16 (UTC) — deep rewrite pass
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

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
- **Pricing (as of 2026-10-16):** intro **$2.00 in / $10.00 out / $0.10 cached** per 1M (through 2026-11-30); standard **$4.00 / $20.00** ($0.20 cached). Cost ~$1.99/task (intro) then ~$3.98/task.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- **Vals Index 68.90% (#1, independent)**; **AutomationBench-AA 77.5% (#1, AA)** / AutomationBench (Zapier) 51.3% (#1)
- Vals Finance Agent v2 **65.4% (#1)**; Agents' Last Exam 39.5%; Toolathlon-Verified 79.8%; JobBench 65.7%
- OSWorld 2.0 69.2%; Terminal-Bench 4.0 **57.0–57.4%**; GDPval-AA 56.2% (AA)

Reasoning / knowledge:

- AA Intelligence Index **52.6–53 (high)**; HLE **57.1%** (57.1 w/o tools, 62.4% w/ tools); CritPt 27.1%; AA-LCR 79.7%
- GraphWalks BFS 128K **99.7%** / 256K–1M **84.2%**; FrontierMath v2 Tiers 1-3 85.97% / Tier-4 78.05%; LABBench2 88.8%; BrowseComp 91.5%
- GPQA Diamond **96.6%** (AA estimate) / 92.7% (estimate) — no verified GPQA row; MMLU-Pro 92.8% (estimate)

Coding:

- DeepSWE v1.1 **77.9% (#1)** (vendor); Vibe Code Bench **91.9% (#1)**; SciCode **61.8%** (AA); Coding Index 78.6%
- CWE-bench v1 68.0% (tie #1); SWE-bench Pro 81.5% (estimate); FrontierSWE v2 **55.0%** (behind GPT-6 Astra 65.5%)

Multimodal / long context:

- LVBench **91.7% (#1)**; Chartography (no tools) 71.6%; CharXiv-class chart work strong
- 1M context with GraphWalks 256K–1M 84.2% (strong but not saturated at depth)

### Normalized scores (1–100)

- **Tool use: 91/100.** Vals Index #1, AutomationBench-AA 77.5% #1 and Finance Agent v2 65.4% #1 confirm frontier agent depth; capped by TB4.0 57% and Agents' Last Exam 39.5%.
- **Reasoning: 89/100.** HLE 57.1%, SciCode 61.8%, GraphWalks 1M 84.2% and FrontierMath Tier-4 78% are strong; AA Index 52.6–53 (<60) and only estimated GPQA keep it under 92.
- **Context window: 95/100.** 1M context with a headline 1M output (long decode) is the widest documented band here; GraphWalks 84.2% at 256K–1M is strong but not saturated.
- **Multimodal: 87/100.** Text + image + video + audio + PDF in, text out, with best-in-class long video (LVBench 91.7%); no non-text output.
- **Coding: 90/100.** DeepSWE 77.9% #1, Vibe Code Bench 91.9% #1, SciCode 61.8% and Coding Index 78.6% are elite; FrontierSWE v2 55.0% and AA TB4.0 57% (mid-pack) hold it back.
- **Cost efficiency: 72/100.** Intro $2/$10 with a 95% cache discount is strong; post-intro $4/$20 halves the value and there is no free tier.
- **Overall Score: 90/100.** (91 + 89 + 95 + 87 + 90) / 5 = 90.4 → 90. Best fit: frontier software engineering, cyber defense and long-video / knowledge work at GA.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-16
- Method: deep rewrite-pass public internet research (Google launch blog + latest-model docs, FelloAI, kie.ai comparison, BenchGap, Vals AI model page, Gigazine, AA). Vendor #1 claims are separated from independent Vals/AA rows; non-default harness settings, the GPQA-estimate caveat and access gating are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.1_Pro.md`, using the same headings.
