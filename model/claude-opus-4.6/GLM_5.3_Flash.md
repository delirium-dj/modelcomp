# Claude Opus 4.6 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-4-6`)
- Date: 2026-10-09 (UTC)
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
- **Pricing (as of 2026-10-09):** $5.00 input / $25.00 output per 1M tokens — unchanged since launch, and **flat across the full 1M window since GA** (no long-context premium; a 900K request bills at the same per-token rate). Prompt caching carries a 90% discount (AA: blended 7:2:1 ≈ $3.85/1M). Batch discounts per Anthropic's pricing page (not itemized here). Expensive: AA flags it "particularly expensive" vs the non-reasoning median ($1.63 in / $8.50 out).
- **Architecture:** proprietary, weights closed, parameter count undisclosed (per AA). Effort/adaptive-thinking variants; AA benchmarks both reasoning and non-reasoning modes.

### Raw benchmarks found

> Anthropic system-card rows (Claude Opus 4.6 System Card PDF via benchlm.ai, updated 2026-10-09) + the 2026-02-05 launch sources and AA/Vals independent rows.

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** — best score at release (Opus 4.5 59.8%, GPT-5.2 64.7%, Gemini 3 Pro 56.2%) (system card via benchlm.ai; Vellum roundup, 2026-02-05)
- Claw-Eval: **70.4%** (Claw-Eval leaderboard via benchlm.ai — fills the previously-missing Claw row)
- Tau2-bench: **84.8%** (AA measurement via benchlm.ai); τ²-bench Retail: **91.9%** / Telecom: **99.3%** (Anthropic harness; AA independently measured Telecom 92.1%)
- OSWorld-Verified (computer use): **72.7%** (system card; +6.4pp over Opus 4.5)
- BrowseComp (agentic search): **83.7–84.0%** (system card/Anthropic; **86.8%** with a multi-agent harness; compaction at 50K, up to 10M total tokens)
- GDPval-AA: **1606 Elo** — beat GPT-5.2 (1462) by ~144 and Opus 4.5 (1416) by 190 (Anthropic + Vellum)
- Finance Agent: **60.7%** — best (GPT-5.2 56.6, Opus 4.5 55.9) (Vellum)
- CyberGym: **66.6%**; DeepSearchQA: **73.7%**; Gert Labs: **61.85%**; ResearchClawBench: **19.9%**; JobBench: **36.7%**; ApprenticeBench: **5%** (benchlm.ai)
- SWE-Atlas Codebase QnA / Tau3-Banking / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA: **91.3%** (Anthropic system card — fills the previously-vendor-only row); GPQA-D: **89.2%** (Arcee Trinity comparison table); SuperGPQA: **95%** (Qwen3.6-Plus comparison table)
- HLE: **53%** with tools (system card; corrected 2026-02-23 from 53.1% after an improved cheating-detection pipeline flagged 3 instances); **40.0%** without tools (Muse Spark comparison chart)
- ARC-AGI-2: **68.8%** — nearly double Opus 4.5's 37.6% (Vellum; run at max effort, 120K thinking budget)
- AA-LCR: **67.0%** (AA via benchlm.ai — updated snapshot; the 2026-09-17 draft cited 78.0%); CritPt: **2.8%** (AA — weak spot)
- FrontierMath v2: Tiers 1–3 **40.7%**, Tier 4 **22.9%** (Epoch AI via benchlm.ai)
- MMMU Pro: **73.9%** without tools / **77.3%** with (system card); MMMLU 91.1%; AIME25: **99.8%** (Arcee table)
- MedXpertQA: Text **52.1%** / MM **64.8%**; HealthBench Hard: **14.8%** (Muse Spark comparison chart)
- Artificial Analysis Intelligence Index: **26.4** (#46-class; AA page deprecated/historical since Opus 4.7); AA-GPQA Diamond: **84.0%**; AA-HLE: **19.1%**; AA-Omniscience hallucination rate: **80.1%** (benchlm.ai)
- MLCR / Omniscience itemized / BenchLM overall: no verified public score found

Coding:

- SWE-bench Verified: **80.8%** (averaged over 25 trials; 81.42% with a prompt modification) — parity with Opus 4.5 (80.9%) (system card); Arcee comparison table lists **75.6%**
- SWE-bench Pro: **53.4%** (Meta Muse Spark comparison chart — fills the previously-missing SWE-Pro row)
- LiveCodeBench Pro: **70.7%** (Muse Spark comparison chart — fills the previously-missing LCB row)
- SWE-Rebench: **65.3%** (swe-rebench.com); React Native Evals: **84.1%**; Vibe Code Bench: **57.57%** (Vals v1.1)
- FrontierCode 1.1 Main: **26.9%** (Cognition)
- SWE-Multi / SciCode / DeepSWE: no verified public score found
- Successor context (same line): prompt20 code leaderboard (data as of 2026-07-26) shows the successor line pulling far ahead — Claude Fable 5: SWE-V 95.0%, TB 2.1 84.3%, GDPval-AA 1932; Opus 4.8: SWE-Pro 65.0 (#1), SWE-V 88.1 (#2), TB2.0 69.2 — i.e., Opus 4.6 was frontier-at-release but is two-plus steps behind by October 2026.

Long context:

- Window: **1M tokens GA** (2026-03-13) with flat standard pricing, full rate limits at every length, 600 images/PDF pages; works automatically over 200K with no beta header (claude.com/blog/1m-context-ga)
- AA-LCR: **67.0%** (long-context reasoning, AA via benchlm.ai)
- MRCR v2 / RULER / GraphWalks at window length: no verified public score found for 4.6 specifically

### Normalized scores (1–100)

- **Tool use: 94/100.** SOTA-or-best on τ² Retail 91.9/Telecom 99.3, OSWorld 72.7, BrowseComp 83.7–84.0, Finance Agent 60.7, plus release-best TB2.0 65.4 and GDPval-AA 1606; the now-measured Claw-Eval 70.4% fills the old draft's missing row; capped slightly by the MCP Atlas regression (59.5 max-effort) and weak ApprenticeBench 5%/ResearchClawBench 19.9%.
- **Reasoning: 88/100.** GPQA 91.3% (system card) and HLE 53%/40%-tools now fill the previously-missing rows and clear the frontier references; ARC-AGI-2 68.8 (generational leap) — but AA-LCR 67.0% (updated down from 78.0), CritPt 2.8%, FrontierMath T1–3 40.7% and the 80.1% hallucination rate cap it below 90.
- **Context window: 96/100.** 1M tokens GA with no premium, full rate limits, 600 media items, and AA-LCR 67.0% evidencing usable retrieval at depth — below the old draft's 100 now that the LCR snapshot reads 67.0 rather than 78.0.
- **Multimodal: 85/100.** Text + image + PDF (600 pages) in, text out, MMMU Pro 73.9/77.3, ScreenSpot Pro 83.1%; no audio or video input/output keeps it off the omni tier.
- **Coding: 87/100.** SWE-V 80.8 (elite, 25-trial) with the filled SWE-Pro 53.4% and LCB Pro 70.7% rows, Vibe 57.57%; capped by SWE-V parity with its predecessor, FrontierCode 26.9%, and successors (Fable 5 95.0, Opus 4.8 88.1) having since reset the bar.
- **Cost efficiency: 20/100.** $5/$25 flagship pricing with no free route — roughly 10–25× the paid open-model tier in this repo ($0.30–$1.40 in); the 90% prompt-cache discount (≈$3.85 blended) is the only relief. Paid-only, so scored at price point.
- **Overall Score: 90/100.** Mean of the five quality dims (94 + 88 + 96 + 85 + 87) / 5 = 90.0. Best fit: the no-compromise agent/knowledge-work pick *of its generation* — unmatched tool orchestration and 1M context, but as a paid legacy model (Opus 4.7/4.8, Fable 5.1 now exist) it only makes sense where a workflow is pinned to `claude-opus-4-6`.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables citing the Anthropic Opus 4.6 system card and Meta/Qwen/Arcee comparison charts, updated 2026-10-09; 2026-02-05 launch sources); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing Claw-Eval 70.4%, SWE-Pro 53.4%, LCB Pro 70.7%, GPQA 91.3%, HLE 53%, Tau2 AA 84.8%, Vibe 57.57%; updates AA-LCR 78.0→67.0 and CritPt 12.6→2.8 — Tool 96→94, Reasoning 90→88, Context 100→96, Coding 88→87, Overall 92→90 (old draft also showed a six-dim calc next to a five-dim Overall).
- Future sources: add a new file next to this one, e.g. `Opus_4.7.md`, using the same headings.
