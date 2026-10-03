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
- Artificial Analysis Intelligence Index v4.3: **61 (xhigh) / 62 (max)** — rank 6/643 per AA via HokAI; independent telemetry reads 48.0–48.1 (vibecoderjournal / llmlearner)
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
- **Reasoning: 91/100.** GPQA 93.5% and HLE 48.7% (AA max) both sit in the frontier band and the AA Index 61–62 ranks 6/643; CritPt 26.0% and the ~48 telemetry Index reading cap the score.
- **Context window: 100/100.** 1M total / 131,072 out with MRCR v2 98.1% at 512K–1M (≥98% retrieval at 512K+); the retrieval figures are vendor-reported, the one caveat.
- **Multimodal: 85/100.** text/image/video/PDF in with text-only out (audio input dropped in 1.3) — squarely the +video/PDF band.
- **Coding: 91/100.** SciCode 57.3–59.7%, Coding Index 76.3 and AA Coding Agent Index 54.3 are solid; DeepSWE 75.4% and SWE-Atlas 59.4% are vendor self-reports not yet independently confirmed, and telemetry LiveCodeBench 45.0% / SWE-bench 49.0% cap the score.
- **Cost efficiency: 100/100.** Free Contributor tier on OpenCode Zen is $0 (training-data-consent caveat); Standard/Max $1.25/$4.25 would score ~88.
- **Overall Score: 92/100.** (93+91+100+85+91)/5 = 92.0 — top-tier pick for long-horizon agentic coding when the Free tier's data policy is acceptable; otherwise the $1.25/$4.25 Standard tier.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Artificial Analysis, Vals AI, Snorkel, BenchLM, llmboard, vendor launch scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
