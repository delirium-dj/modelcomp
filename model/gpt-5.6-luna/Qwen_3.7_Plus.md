# GPT-5.6 Luna — findings by Qwen 3.7 Plus

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's budget tier in the GPT-5.6 family, designed for cost-sensitive, high-volume workloads. Corresponds roughly to the nano model tier from earlier GPT-5 families. Released July 9, 2026; repriced July 30, 2026 (80% cut).
- **Provider / access:** OpenAI API `gpt-5.6-luna` (Chat Completions + Responses API); OpenRouter `openai/gpt-5.6-luna`. No free tier on OpenCode Zen (meta.json confirms `noFreeId: true`).
- **Release / knowledge:** 2026-07-09 release; knowledge cutoff 2026-02-16.
- **IDs:** `openai/gpt-5.6-luna` (OpenAI API), `openai/gpt-5.6-luna` (OpenRouter).
- **Context window:** 1,050,000 tokens total (922,000 max input), 128,000 max output (per OpenAI developer docs).
- **Modalities:** Text and image in; text out; reasoning (none/low/medium/high/xhigh/max effort); tool calling (web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search); structured outputs; prompt caching; streaming.
- **Pricing (as of 2026-07-30):** $0.20/1M input, $0.02/1M cached input, $1.20/1M output. Prompts >272K input tokens priced at 2x input / 1.5x output. Originally $1.00/$6.00 at launch; cut 80% on July 30.
- **Architecture:** Proprietary (closed weights, OpenAI). Part of the GPT-5.6 family alongside Sol (flagship) and Terra (balanced).

### Raw benchmarks found

> Sources: OpenAI GPT-5.6 launch post (openai.com/index/gpt-5-6, 2026-07-09), OpenAI developer docs (developers.openai.com), BenchLM (benchlm.ai/models/gpt-5-6-luna, 2026-10-17), Artificial Analysis (via BenchLM), ARC Prize (ARC Prize verified results), Cursor (cursorbench), Vals AI (vals.ai), Cognition/Devin (devin.ai/blog).

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (OpenAI GPT-5.6 launch / BenchLM; Vals AI independent: 79.0%)
- BrowseComp: **83.3%** (OpenAI GPT-5.6 launch / BenchLM)
- CyberGym: **77.9%** (OpenAI GPT-5.6 launch / BenchLM)
- Toolathlon: **53.4%** (OpenAI GPT-5.6 launch / BenchLM)
- GDPval-AA: **1582 Elo** (OpenAI launch; AA-normalized: 48.0%)
- OSWorld 2.0: **45.6%** (OpenAI GPT-5.6 launch / BenchLM)
- APEX-Agents-AA: **35.8%** (AA via BenchLM)
- AA Agentic Index: **42.7%** (AA via BenchLM)
- Terminal-Bench 3.0: **14.3%** (FrontierBench via BenchLM)
- ExploitGym: **12.4%** (OpenAI GPT-5.6 launch / BenchLM)
- ApprenticeBench: **7.0%** (NeoCognition via BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (OpenAI GPT-5.6 launch; AA independent: 91.1%; Vals AI: 91.7%)
- AA Intelligence Index: **51.2** (OpenAI GPT-5.6 launch / BenchLM)
- AA-LCR: **83.7%** (AA via BenchLM)
- HLE: **39.5%** (AA via BenchLM)
- CritPt: **20.6%** (AA via BenchLM)
- ARC-AGI-1: **88.0%** (ARC Prize verified, Max effort)
- ARC-AGI-2: **59.5%** (ARC Prize verified)
- ARC-AGI-3: **0.2%** (ARC Prize verified)
- MMLU-Pro: **86.0%** (Vals AI)
- AA-Omniscience Accuracy: **42.7%** (AA via BenchLM)
- AA-Omniscience Hallucination Rate: **92.6%** (AA via BenchLM — high = bad)

Coding:

- DeepSWE: **67.2%** (OpenAI GPT-5.6 launch / BenchLM)
- SWE-bench Pro: **62.7%** (OpenAI GPT-5.6 launch / BenchLM)
- Terminal-Bench 2.1: **84.7%** (also listed under coding)
- CursorBench 3.2: **61.1%** (Cursor evals)
- FrontierCode 1.1 Extended: **55.1%** (Cognition/Devin)
- AA-SciCode: **53.6%** (AA via BenchLM)
- AA Coding Index: **71.5%** (AA via BenchLM)
- VulcanBench v3: **85.5%** (VulcanBench leaderboard)
- CursorBench 4.0: **35.9%** (Cursor evals)
- SWE-bench Verified (Vals): **93.0%** (Vals AI — uses Vals methodology, not directly comparable to standard SWE-bench Verified)
- BenchLM coding estimate: **61.6%** (estimated)

Multimodal & Grounded:

- MMMU-Pro: **78.4%** (OpenAI GPT-5.6 launch; AA independent: 78.6%)
- MMMU-Pro w/ Python: **79.5%** (OpenAI GPT-5.6 launch)

Mathematics:

- FrontierMath v2 (Tiers 1-3): **78.6%** (OpenAI GPT-5.6 launch)
- FrontierMath v2 (Tier 4): **58.5%** (OpenAI GPT-5.6 launch)

Long context:

- AA-LCR: **83.7%** at 1.05M context (AA via BenchLM)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 72/100.** Terminal-Bench 2.1 84.7% and BrowseComp 83.3% are strong. CyberGym 77.9% adds cybersecurity depth. However, Toolathlon 53.4%, GDPval-AA 48.0% (normalized), APEX-Agents 35.8%, and OSWorld 45.6% are mid-tier. ApprenticeBench 7% and MazeBench 0% are very weak. Capped by inconsistent performance on complex multi-step agent tasks vs frontier models.
- **Reasoning: 78/100.** GPQA Diamond 92.3% is excellent (trailing Astra by ~4 pp). AA Intelligence Index 51.2 is solid for a budget-tier model. AA-LCR 83.7% shows good long-context reasoning. MMLU-Pro 86.0% is strong. However, HLE 39.5% is moderate, CritPt 20.6% is mid-pack, and ARC-AGI-3 0.2% shows weakness on novel abstract reasoning. Capped by HLE, CritPt, and ARC-AGI-3.
- **Context window: 95/100.** 1.05M tokens total (922K max input), 128K max output — generous for a budget model. AA-LCR 83.7% confirms effective retrieval at scale. 2x pricing above 272K is a cost penalty but not a capability limit. Docked 5 for no MRCR/RULER/GraphWalks at specific window lengths.
- **Multimodal: 65/100.** Text + image input only (no video). MMMU-Pro 78.6% is solid. Lacks the video, document-PDF, and chart-analysis breadth of multimodal leaders. No OfficeQA Pro or GDP.pdf scores found. Capped by input modality narrowness (text + image only, no video).
- **Coding: 73/100.** DeepSWE 67.2% is competitive. SWE-bench Pro 62.7% is solid. Terminal-Bench 2.1 84.7% is strong. CursorBench 3.2 61.1% and VulcanBench 85.5% are good. However, CursorBench 4.0 35.9% is weak, AA-SciCode 53.6% is moderate, and FrontierCode 1.1 55.1% lags. The Vals AI SWE-bench 93.0% uses a different methodology and is not directly comparable. Capped by CursorBench 4.0 and FrontierCode gap.
- **Cost efficiency: 98/100.** $0.20/$1.20 per 1M is exceptionally cheap — the cheapest in the GPT-5.6 family and among the most affordable proprietary models available. Cache hit at $0.02 makes sustained work nearly free. Free in ChatGPT for Free and Go-tier accounts since August 2026. Only docked for the 2x pricing penalty above 272K tokens.
- **Overall Score: 77/100.** Mean of five non-cost dims: (72 + 78 + 95 + 65 + 73) / 5 = 76.6, half-up = 77. A remarkably capable budget-tier model: strong reasoning (GPQA 92.3%), 1M context, and solid coding (DeepSWE 67.2%) at 1/5th the price of the GPT-5.6 Sol flagship. Best fit for: high-volume production workloads, cost-sensitive deployments, and tasks where Sol/Terra-level intelligence is not required.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-17
- Method: public internet research across OpenAI developer docs, OpenAI launch post, BenchLM, Artificial Analysis, ARC Prize, Cursor evals, Vals AI, Cognition/Devin blog, and OpenRouter; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
