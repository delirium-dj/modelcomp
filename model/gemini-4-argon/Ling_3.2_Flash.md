# Gemini 4 Argon — findings by Ling 3.2 Flash

- Source: Google (`gemini-4-argon`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon — paid tier only ($2/$10 intro through 2026-11-30, then $4/$20); no Free tier exists for this model
- **Short description:** Google DeepMind's first Gemini 4 frontier model (element-name "Argon" replaces the old Pro/Flash naming), built for long-horizon deep work in software engineering, enterprise knowledge work (legal/finance) and defensive cybersecurity; flagship use case is multi-step agentic coding at 1M-token scale. Alias "Argon"; a separate "Gemini 4 Argon for Robotics" cut exists (ERQA 87%).
- **Provider / access:** Google Gemini API / AI Studio (native generateContent; ID `gemini-4-argon`, GA-stable 2026-10-13), Gemini platform / Vertex for enterprise, Google Antigravity (AI Ultra, later Pro), Gemini app + Search AI Mode (AI Pro/Ultra), OpenCode Zen (`gemini-4-argon`, paid), OpenRouter (`google/gemini-4-argon`, 2 providers), gateways expose /v1/chat/completions, /v1/responses, /v1/batch (Bifrost); Interactions API provides managed agent loop.
- **Release / knowledge:** announced 2026-09-30; GA in Gemini API 2026-10-13 (blog.google; OpenRouter "Released Oct 13, 2026"; model card published 2026-10-13); knowledge cutoff March 2026 (official model card).
- **IDs:** Google API `gemini-4-argon`; models.dev `google/gemini-4-argon`; OpenRouter `google/gemini-4-argon`; OpenCode Zen `gemini-4-argon` — no Free-tier ID exists on Zen (free rows use `-free` suffixes; none found; aicoder/morphllm confirm "no free tier" for this ID)
- **Context window:** 1,048,576 tokens total, shared by input + thinking + output (model card "combined input-output token context window of up to 1M"; Gemini API docs via aicoder/Tencent; OpenRouter 1.0M; models.dev; AA; Bifrost 1049K). Default sync max output 65,536; Long Decode Continuation (background) extends toward ~1M minus input; non-stream single request 32K / stream 64K caps per API docs.
- **Modalities:** text/image/audio/video/PDF in (model card lists text, images, audio, video; BenchLM/Bifrost add PDF), text out only; reasoning yes (thinking levels low/medium/high, default medium; AA ran "high"); tool calls yes (OpenRouter, Bifrost function calling/parallel); JSON mode/structured outputs yes (OpenRouter structured outputs, Bifrost response schema).
- **Pricing (as of 2026-11-07):** paid $: intro $2.00/1M input, $10.00/1M output (through 2026-11-30), then $4/$20; cached input −95% = $0.10/M intro, $0.20/M standard (blog.google; AA; models.dev/Zen row matches); thinking tokens billed at output rate; implicit cache only (explicit cachedContents unsupported); temperature/top_p/top_k ignored (Gemini API docs via aicoder). No free tier; model card notes training uses user data under Google ToS — confirm API Data Usage terms before sensitive data.
- **Architecture:** proprietary closed weights; large-scale sparse MoE transformer, native multimodal (text/vision/audio encoders); trained on TPUs with JAX/ML Pathways (official model card); params total/active not disclosed; no open-weights license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (only Terminal-Bench 4.0 exists for this ID: 57.4% vendor, model card/DeepMind table; 57.1% Artificial Analysis harness, AA independent run; AA X post rounds to 57%, behind Sonnet 5.5 64%, Opus 5.5 60%, Astra 59%)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (no τ-family row on any catalog for this ID)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
  Reasoning / knowledge:
- GPQA Diamond: **no verified public score found** (one CSDN blog claimed ~82% but self-labeled it speculation — excluded)
- HLE: **no verified public score found** (component of AA Index composite only; no standalone row)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: AA Index v5 **53 / tied #1-of-row with GPT-6 Astra (max), behind Opus 5.5 58** (AA launch article 2026-09-30, high reasoning; DeepMind's own table shows AA Index v5.0 = 50 for Argon — different effort/harness, noted as conflict) / BenchLM **82.29 / #5 public rank** (Supported evidence, 90% CI 79.0–85.6, updated 2026-11-05)
- Omniscience Accuracy / Hallucination Rate: **50% / 15%** (AA-Omniscience at launch, AA X post 2026-09-30 via mirrors; composite 42; AA's later v1.1 cross-reference in the Carbon article implies Argon accuracy 48% / hallucination 4% — flagged as version conflict, launch numbers used)
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found** (omitted from Google table and BenchLM rows)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found** (feeds AA Index composite only)
- Vibe Code Bench: **91.9%** (vendor, model card + DeepMind table; ahead of Astra 89.6%, Fable 5.1/Opus 5.5 90.3%)
- DeepSWE / Coding Index / other: DeepSWE v1.1 **77.9% #1** (vendor, model card + blog.google; AA has not re-run it); FrontierSWE v2 55.0% (last of 4); Terminal-Bench 4.0 57.4% vendor / 57.1% AA; PostTrainBench 45.3%; SWE-sweep 4.3%; BenchLM coding point estimate 71.9; Google Android Bench pass rate 21.3% / completion 81.8% / $267.70 avg cost, #5 (IT之家 via aihot, 2026-10-26 update); Cognition Devin FrontierCode 1.1 60.5% (Cognition self-report, not independently verified)
  Long context:
- GraphWalks BFS F1: **99.7% at ≤128k, 84.2% at 256k–1M** (vendor, model card + DeepMind table); MRCR / RULER / needle-at-scale: **no verified public score found**; AA verified Long Decode Continuation mechanism runs to 1M output without timeout (mechanism, not retrieval score)

### Normalized scores (1-100)

- **Tool use: 66/100.** Vendor AutomationBench (Zapier) 51.3% #1, AA AutomationBench-AA 78% #1, OSWorld-2.0 69.2% / 2.1 74.7%, Agent's Last Exam 39.5% (v1) / 69.0% (v1.1) keep it mid-frontier; capped by Terminal-Bench 4.0 only 57.1-57.4% (mid band), no TB2.1/Tau3/GDPval rows at all.
- **Reasoning: 63/100.** AA Index 53 (high) + BenchLM 82.29 #5 with #1 Vals Index 68.9-69.2%, Harvey Legal 19.6%, LABBench 2 88.8%, RiemannBench 76.0%; capped by composite index below the 60 frontier marker, AA-Omniscience accuracy only 50%, and zero GPQA/HLE/CritPt/LCR rows for this ID.
- **Context window: 96/100.** Verified ≥1M tier (1,048,576 shared, model card/AA/OpenRouter/models.dev) = 95-100 band; 100 withheld because no ≥98% retrieval at 512K+ evidence (GraphWalks 256k-1M 84.2% F1; no MRCR/RULER).
- **Multimodal: 92/100.** +audio input verified (model card: text/image/audio/video; BenchLM adds PDF) with text-only output per mapping band 90-100; evidence LVBench 91.7% SOTA, Chartography 71.6%, Blueprint-Bench 2 54.4%; capped by no audio/image generation out.
- **Coding: 72/100.** Frontier-band DeepSWE v1.1 77.9% (#1) + Vibe Code Bench 91.9%; capped by Terminal-Bench 4.0 57.4% (mid), FrontierSWE v2 last-of-four, Android Bench 5th (21.3%), and no SWE-bench Verified / LiveCodeBench / SciCode rows.
- **Cost efficiency: 75/100.** Intro $2/$10 (current until 2026-11-30) sits between mapping anchors $1.25/$4.25≈88 and $3/$15≈60; AA cost/task $1.99 intro = 60% of GPT-6 Astra (max); drops to ~50 at standard $4/$20 from 2026-12-01 and AA cost/task $3.98; heavy 62k output tokens/task (AA) is the drag.
- **Overall Score: 77.8/100.** Mean of five non-cost dims (66+63+96+92+72)/5 = 77.8, half-up 1 decimal; cost efficiency excluded per v4 formula. Best fit: long-context multimodal enterprise/agentic coding workflows where 1M shared window and low intro price matter; avoid for terminal-heavy coding or pure-text cost-sensitive loads until TB4/SWE rows improve.

---

## Signature

- Provided by: **Ling 3.2 Flash (ling-3.2-flash)** — 2026-11-07
- Method: fresh public web research only — Google DeepMind model card + Gemini models page, blog.google announcement (9/30 + 10/13 GA), Artificial Analysis launch article/X post, The New Stack, OpenRouter, BenchLM, models.dev, Bifrost, OpenCode/Zen docs guide, IT之家/aihot; every raw number carries source + harness/version where available; normalized 1-100 scores are my interpretations under the v4 formula, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
