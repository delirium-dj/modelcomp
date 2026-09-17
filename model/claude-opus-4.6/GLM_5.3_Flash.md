# Claude Opus 4.6 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-4-6`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6 (legacy flagship — superseded by Opus 4.7/4.8 and Fable 5/5.1)
- **Short description:** Anthropic's early-2026 Opus-class flagship for coding and long-running professional/agentic tasks, released 2026-02-05. First Opus-class model with a 1M-token context window (beta at launch, GA 2026-03-13); state-of-the-art on Terminal-Bench 2.0, HLE, GDPval-AA and BrowseComp at release. Now a legacy model: Anthropic's current lineup is Fable 5.1 / Opus 5 / Sonnet 5 / Haiku 4.5, and Artificial Analysis deprecates its 4.6 page in favor of Opus 4.7.
- **Provider / access:** Anthropic — Messages API, ID `claude-opus-4-6`; also on all major clouds (AWS, Google Cloud Vertex AI, Microsoft Foundry) and OpenRouter (`anthropic/claude-opus-4.6`). Messages (not Chat Completions) API.
- **Release / knowledge:** released 2026-02-04/05 (OpenRouter lists Feb 4; Anthropic announcement Feb 5, 2026); knowledge cutoff not verified in this pass.
- **IDs:** `claude-opus-4-6` (Anthropic API). **No Free ID** — paid flagship only; no free tier found on Zen or elsewhere.
- **Context window:** 1,000,000 tokens total (200K standard at launch with 1M beta; full 1M GA since 2026-03-13). Max output 128K (per the current Anthropic docs' Opus-class spec). Media limits at GA: up to 600 images or PDF pages per request (up from 100). Verified via Anthropic's 1M-context GA post + OpenRouter model page.
- **Modalities:** text + image in, text out; vision yes; PDF input; tool calls yes (native + programmatic tool calling); extended/adaptive thinking yes with effort controls (high default, max for evals); context compaction (self-summarization for long-running tasks); structured output/JSON yes. No audio/video input.
- **Pricing (as of 2026-09-17):** $5.00 input / $25.00 output per 1M tokens — unchanged since launch, and **flat across the full 1M window since GA** (no long-context premium; a 900K request bills at the same per-token rate). Prompt caching carries a 90% discount (AA: blended 7:2:1 ≈ $3.85/1M). Batch discounts per Anthropic's pricing page (not itemized here). Expensive: AA flags it "particularly expensive" vs the non-reasoning median ($1.63 in / $8.50 out).
- **Architecture:** proprietary, weights closed, parameter count undisclosed (per AA). Effort/adaptive-thinking variants; AA benchmarks both reasoning and non-reasoning modes.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** — best score at release (Opus 4.5 59.8%, GPT-5.2 64.7%, Gemini 3 Pro 56.2%, Sonnet 4.5 51.0%) (Vellum benchmark roundup of Anthropic's announcement, 2026-02-05)
- MCP Atlas (scaled tool use): **59.5%** at max effort / **62.7%** at high effort (industry-leading at high effort; regressed vs Opus 4.5's 62.3% at max) (same source)
- τ²-bench Retail: **91.9%** (Opus 4.5 88.9, Gemini 3 Pro 85.3, GPT-5.2 82.0); Telecom: **99.3%** (Opus 4.5 98.2) — Anthropic harness; AA independently measured Telecom **92.1%** (OpenRouter benchmark summary, AA adaptive-reasoning max-effort)
- OSWorld (computer use): **72.7%** (+6.4pp over Opus 4.5) (Vellum)
- BrowseComp (agentic search): **84.0%** (best in industry; **86.8%** with a multi-agent harness; compaction at 50K, up to 10M total tokens) (Anthropic + Vellum)
- GDPval-AA: **1606 Elo** — beat GPT-5.2 (1462) by ~144 and Opus 4.5 (1416) by 190 (Anthropic + Vellum)
- Finance Agent: **60.7%** — best (GPT-5.2 56.6, Opus 4.5 55.9) (Vellum)
- SWE-Atlas Codebase QnA / Tau3-Banking / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (AA adaptive reasoning, max effort — OpenRouter benchmark summary)
- HLE: **40.0%** without tools (Opus 4.5 30.8, Gemini 3 Pro 37.5; GPT-5.2 leads 50.0); **53.0%** with tools (corrected 2026-02-23 from 53.1% after an improved cheating-detection pipeline flagged 3 instances) (Anthropic + Vellum); AA variant: **39.9%** (OpenRouter)
- ARC-AGI-2: **68.8%** — nearly double Opus 4.5's 37.6%, past Gemini 3 Pro's 45.1 (Vellum; run at max effort, 120K thinking budget)
- AA-LCR (long-context reasoning): **78.0%**; IFBench 53.1%; CritPt **12.6%** (weak spot) (OpenRouter/AA max-effort)
- MMMU Pro: **73.9%** without tools / **77.3%** with (GPT-5.2 leads 79.5/80.4); MMMLU 91.1% (Vellum)
- Artificial Analysis Intelligence Index: **26** (#4/62, non-reasoning high-effort variant; that page is now deprecated/historical since Opus 4.7) (artificialanalysis.ai)
- MLCR / Omniscience / BenchLM overall: no verified public score found

Coding:

- SWE-bench Verified: **80.8%** (averaged over 25 trials; 81.42% with a prompt modification) — parity with Opus 4.5 (80.9%), above GPT-5.2 (80.0), Sonnet 4.5 (77.2), Gemini 3 Pro (76.2) (Anthropic + Vellum)
- SWE-bench Pro / SWE-Multi / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found
- Context (later gen, same line): prompt20 code leaderboard (data as of 2026-07-26) shows the successor line pulling far ahead — Claude Fable 5: SWE-V 95.0%, TB 2.1 84.3%, GDPval-AA 1932; Opus 4.8: SWE-Pro 65.0 (#1), SWE-V 88.1 (#2), TB2.0 69.2 — i.e., Opus 4.6 was frontier-at-release but is two-plus steps behind by September 2026.

Long context:

- Window: **1M tokens GA** (2026-03-13) with flat standard pricing, full rate limits at every length, 600 images/PDF pages; works automatically over 200K with no beta header (claude.com/blog/1m-context-ga)
- AA-LCR: **78.0%** (long-context reasoning, OpenRouter/AA)
- MRCR v2 / RULER / GraphWalks at window length: no verified public score found (targeted searches on 2026-09-17 surfaced no number for 4.6 specifically)

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 96/100.** SOTA-or-best on τ² Retail 91.9/Telecom 99.3, OSWorld 72.7, BrowseComp 84.0, Finance Agent 60.7, plus release-best TB2.0 65.4 and GDPval-AA 1606 — a near-perfect agentic profile; capped by the MCP Atlas regression (59.5 max-effort vs 4.5's 62.3).
- **Reasoning: 90/100.** GPQA 89.6, HLE 40.0/53.0-tools, ARC-AGI-2 68.8 (generational leap) — but GPT-5.2 still leads HLE (50.0 no-tools) and CritPt 12.6 is a real weakness; AA-LCR 78.0 is strong.
- **Context window: 100/100.** 1M tokens GA with no premium, full rate limits, 600 media items, and AA-LCR 78.0 evidencing usable retrieval at depth — the best context package measured here.
- **Multimodal: 85/100.** Text + image + PDF (600 pages) in, text out, MMMU Pro 73.9/77.3; no audio or video input/output keeps it off the omni tier.
- **Coding: 88/100.** SWE-V 80.8 (elite, 25-trial) and release-best TB2.0 65.4; capped by SWE-V parity with its predecessor and by successors (Fable 5 95.0, Opus 4.8 88.1) having since reset the bar.
- **Cost efficiency: 20/100.** $5/$25 flagship pricing with no free route — roughly 10–25× the paid open-model tier in this repo ($0.30–$1.40 in); the 90% prompt-cache discount (≈$3.85 blended) is the only relief. Paid-only, so scored at price point.
- **Overall Score: 80/100.** Mean: (96 + 90 + 100 + 85 + 88 + 20) / 6 = 479/6 = 79.8 → **80**. Best fit: the no-compromise agent/knowledge-work pick *of its generation* — unmatched tool orchestration and 1M context, but as a paid legacy model (Opus 4.7/4.8, Fable 5.1 now exist) it only makes sense where a workflow is pinned to `claude-opus-4-6`.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-17
- Method: fresh public internet research from zero (Anthropic's Opus 4.6 announcement + 1M-context GA post, Vellum's 4.6-vs-4.5 benchmark roundup, OpenRouter model page with AA benchmark summary, AA model page, Anthropic models-overview docs, prompt20 code leaderboard for successor context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.