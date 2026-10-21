# Grok 4.6 — findings by Step 5 Preview

- Source: xAI / Grok 4.6 (`opencode/grok-4.6`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's August 2026 flagship focused on long-running agents and ambitious interactive/visual work — frontier knowledge-work scores (GDPVal-AA 1753, Harvey LAB 15.8%) with a 500K context and $2/$6 pricing, a fast variant at 2x price.
- **Provider / access:** API via xAI (`xai/grok-4.6`), OpenRouter, Vercel, Cloudflare; also in Cursor and Grok Build (2x included usage the launch week). Chat Completions API; reasoning effort levels low/medium/high/xhigh.
- **Release / knowledge:** released 2026-08-12; successor to Grok 4.5; knowledge cutoff not published.
- **IDs:** `xai/grok-4.6` (xAI API), `x-ai/grok-4.6` (OpenRouter); `opencode/grok-4.6` on Zen.
- **Context window:** 500,000 total (xAI docs / llm-stats / kingy.ai / BenchLM agree); pricing doubles above 200K prompt tokens (meta listing).
- **Modalities:** text and image in; text out; reasoning (adjustable effort); tool/function calling.
- **Pricing (as of 2026-10-21):** $2.00/$6.00 per 1M input/output, cached input $0.50 (llm-stats, xAI blog); price doubles above 200K prompt tokens; fast variant 2x.
- **Architecture:** proprietary (xAI/SpaceXAI), closed weights.

### Raw benchmarks found

Official xAI launch post (x.ai/news/grok-4-6, 2026-08-12, "Grok 4.6 High" unless noted):

Agent / tool use:

- GDPval-AA v2: **1753 Elo** (xAI; competitor ref: Fable 5 Max 1741, GPT-5.6 Sol Max 1526)
- AA-Briefcase: **1577** (xAI)
- Harvey LAB (Vals): **15.8%** (xAI-cited Vals; ref: Fable 5 Max 11.3%, GPT-5.6 Sol Max 2.5%)
- APEX-Agents: **57.5%** (xAI; ref: Fable 5 Max 59.2%, Sol Max 56.7%)
- APEX-SWE: **56.4%** (xAI; ref: Fable 5 Max 58.8%)
- AA Tau3 Banking: **50.7%** (Artificial Analysis via BenchLM)
- Terminal-Bench 2.1 (Vals): **78.3%** (Vals AI via BenchLM)
- AA AutomationBench: **66.7%** (Artificial Analysis via BenchLM)
- Terminal-Bench 3.0: **26%** (xAI; ref: Sol Max 34.6%, Fable 5 Max 34.1%) — weak vs frontier on the new harness
- AA Agentic Index: **53.4%** (Artificial Analysis via BenchLM)
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index: **61** (xAI launch chart; ties GPT-5.6 Sol Max 61, behind Claude Fable 5 Max 62; above Grok 4.5 High 56)
- GPQA Diamond: **94.9%** (Artificial Analysis via BenchLM); **94.7%** (Vals AI via BenchLM)
- AA-HLE: **42.9%** (Artificial Analysis via BenchLM)
- AA-LCR (long-context reasoning): **80.3%** (Artificial Analysis via BenchLM)
- CritPt: **17.1%** (Artificial Analysis via BenchLM)
- MMLU-Pro: **89.4%** (Vals AI via BenchLM)
- ARC-AGI-1: **87.0%** / ARC-AGI-2: **67.1%** (ARC Prize semi-private results via BenchLM)
- AA-Omniscience: Accuracy **48.2%**, Hallucination Rate **34.3%** (Artificial Analysis via BenchLM)
- FrontierMath v2 Tiers 1–3: **65.97%** / Tier 4: **31.7%** (Epoch AI via BenchLM)

Coding:

- SWE-bench Verified (Vals): **95.6%** (Vals AI via BenchLM)
- LiveCodeBench (Vals): **88.2%** (Vals AI via BenchLM)
- DeepSWE v1.1: **65.9%** (xAI; ref: GPT-5.6 Sol Max 73%, Fable 5 Max 70%, Grok 4.5 High 54%)
- FrontierCode v1.1 (Extended): **61.3%** (xAI; ref: Fable 5 Max 63.6%, Sol Max 60.6%)
- AA-SciCode: **56.5%** (Artificial Analysis via BenchLM)
- AA Coding Index: **76.8%** (Artificial Analysis via BenchLM)
- CursorBench v3.2: **69.9%** (xAI; ref: Fable 5 Max 70.5%, Sol Max 67.2%)
- CursorBench 4.0: **41.4%** (Cursor evals via BenchLM)
- CWE-bench v1: **57.0%** (Collinear via BenchLM); VulcanBench v3: **87.0%** (VulcanBench via BenchLM)
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR **80.3%** at long-context reasoning (Artificial Analysis, via BenchLM); no MRCR/RULER/GraphWalks retrieval-at-500K figure published — retrieval at the full window unverified.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval-AA 1753 and Tau3 Banking 50.7% hit the frontier reference bands and Harvey LAB 15.8% / APEX-Agents 57.5% / AutomationBench 66.7% back a strong agent; Terminal-Bench 3.0 26% and CursorBench 4.0 41.4% sit mid-band on the newest harnesses and the AA Agentic Index is only 53.4 — capped below the 90s.
- **Reasoning: 92/100.** AA Intelligence Index 61 (vendor chart, top-3), GPQA 94.9% and HLE 42.9% are frontier-band, ARC-AGI-2 67.1% is excellent; capped by CritPt 17.1% and LCR 80.3% (below the 95%+ MRCR frontier reference).
- **Context window: 90/100.** 500K total lands in the 500K–1M tier (85–94); LCR 80.3% shows competent long-context reasoning but no ≥98% retrieval-at-512K evidence for 95+, and the 200K price-doubling threshold is a practical caveat.
- **Multimodal: 68/100.** Text + image input with text out (image-in tier 60–70); no audio/video input and no non-text output published.
- **Coding: 93/100.** SWE-bench Verified 95.6% (Vals) and LiveCodeBench 88.2% are frontier-class, AA Coding Index 76.8% and SciCode 56.5% clear the frontier refs (70%+/55%+); capped by DeepSWE 65.9% (below the 74%+ frontier ref) and CursorBench 4.0 41.4%.
- **Cost efficiency: 78/100.** $2/$6 (cached $0.50) sits between the ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 reference bands; the >200K double-pricing threshold and 2x fast variant erode it for long-context work.
- **Overall Score: 86/100.** Mean of (88 + 92 + 90 + 68 + 93) / 5 = 86.2 → 86. Best fit: long-horizon agentic and knowledge-work sessions at a below-frontier price — pick a coding specialist for pure SWE-Pro-style resolution.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (xAI launch post, Artificial Analysis/Vals/ARC/Epoch figures via BenchLM, llm-stats, kingy.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
