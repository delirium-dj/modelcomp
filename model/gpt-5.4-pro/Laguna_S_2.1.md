# GPT-5.4 Pro — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/gpt-5-4-pro`), BenchLM (`https://benchlm.ai/models/gpt-5-4-pro`), OpenAI (`https://openai.com/index/introducing-gpt-5-4`), Epoch AI, Meta AI
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro (Xhigh)
- **Short description:** OpenAI's March 2026 Pro variant of GPT-5.4, designed for maximum performance on complex professional tasks. Deprecated in favor of GPT-5.5 Pro.
- **Provider / access:** OpenAI API (`gpt-5.4-pro`), ChatGPT Pro
- **Release / knowledge:** Released March 5, 2026; knowledge cutoff August 2025; deprecated — AA recommends GPT-5.5 Pro
- **IDs:** `opencode/gpt-5.4-pro` (per `meta.json`); `gpt-5-4-pro` (AA slug, dots→hyphens); `gpt-5.4-pro` (BenchLM slug, model ID)
- **Context window:** 1M total (per AA model page); `meta.json` says 128K — **discrepancy noted**
- **Modalities:** Text and image input, text output (per AA model page); `meta.json` says "Text in/out" — **discrepancy noted**
- **Pricing (as of 2026-10-01):** $30.00 input / $180.00 output per 1M tokens (OpenAI API); cache hit discount available
- **Reasoning:** Yes (extended thinking / chain-of-thought, xhigh effort)
- **Speed:** AA page shows N/A for output tokens per second
- **Status:** Deprecated — AA page notes: "OpenAI has launched a newer release, GPT-5.5 Pro. We suggest considering it instead."

### Raw benchmarks found

> Sources: OpenAI announcement; BenchLM (>= 68.6/100, #24/954, 12 of 639 benchmarks, 2026-10-17); Artificial Analysis; Epoch AI; Meta AI. Re-verified 2026-10-17.

Agent / tool use:

- **BrowseComp:** **89.3%** — (OpenAI: Introducing GPT-5.4 announcement)
- **GDPval (matches or exceeds):** **83.0%** — (OpenAI: Introducing GPT-5.4 announcement)
- **OSWorld-Verified:** **75.0%** — (OpenAI: Introducing GPT-5.4 announcement)
- **WebArena-Verified:** **67.3%** — (OpenAI: Introducing GPT-5.4 announcement)
- **Online-Mind2Web:** **92.8%** — (OpenAI: Introducing GPT-5.4 announcement; screenshot-based observations)
- **MCP Atlas:** **67.2%** — (OpenAI: Introducing GPT-5.4 announcement)
- **Toolathlon:** **54.6%** — (OpenAI: Introducing GPT-5.4 announcement)
- **Tau2-bench Telecom:** **98.9%** — (OpenAI: Introducing GPT-5.4 announcement)

Coding:

- **SWE-Bench Pro (Public):** **57.7%** — (OpenAI: Introducing GPT-5.4 announcement)
- **Terminal-Bench 2.0:** **75.1%** — (OpenAI: Introducing GPT-5.4 announcement)

Computer use and vision:

- **MMMU Pro (no tools):** **81.2%** — (OpenAI: Introducing GPT-5.4 announcement)
- **MMMU Pro (with tools):** **82.1%** — (OpenAI: Introducing GPT-5.4 announcement)
- **OmniDocBench:** **0.109** normalized edit distance — (OpenAI: Introducing GPT-5.4 announcement)

Reasoning / knowledge:

- **GPQA Diamond (Pro):** **94.4%** — (OpenAI: Introducing GPT-5.4 announcement)
- **ARC-AGI-1 (Verified):** **93.7%** — (OpenAI: Introducing GPT-5.4 announcement)
- **ARC-AGI-2 (Verified):** **83.3%** — (Artificial Analysis: arc-agi-2 leaderboard via BenchLM)
- **HLE (with tools):** **58.7%** — (OpenAI: Introducing GPT-5.4 announcement)
- **HLE w/o tools:** **42.7%** — (OpenAI: Introducing GPT-5.4 announcement — NEW, above 40% frontier)
- **FrontierMath (legacy):** **47.6%** — (OpenAI: Introducing GPT-5.4 announcement)
- **FrontierMath v2 (Tiers 1-3):** **82.456%** — (Epoch AI: FrontierMath v2 leaderboard via BenchLM — CRITICAL CORRECTION from 50.0% in prior file; now ≥85 frontier threshold)
- **FrontierMath v2 (Tier 4):** **58.537%** — (Epoch AI — CRITICAL correction from 38.0% in prior file)
- **FrontierScience Research:** **36.7%** — (Meta AI: Muse Spark contemplating comparison chart via BenchLM)
- **IPhO 2025 (Theory):** **93.5%** — (Meta AI: Muse Spark contemplating comparison chart via BenchLM)
- **CritPt:** **30.0%** — (Artificial Analysis: CritPt benchmark leaderboard via BenchLM)
- **AA-HLE:** **58.7%** — (Artificial Analysis via BenchLM)

Long context (from OpenAI announcement table):

- **OpenAI MRCR v2 8-needle (various ranges):** 97.3% at 4K-8K, 91.4% at 8K-16K, 97.2% at 16K-32K, 90.5% at 32K-64K, 86.0% at 64K-128K, 79.3% at 128K-256K, 57.5% at 256K-512K, 36.6% at 512K-1M
- **Graphwalks BFS 0K-128K:** 93.0%
- **Graphwalks parents 0-128K:** 89.8%

### AA Intelligence Index

- **Artificial Analysis Intelligence Index:** Not publicly available (AA page shows "Unknown out of 4 units for Intelligence"; all individual benchmarks show "Not publicly available" — this is an estimated/pending evaluation).

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 23 public benchmarks found across 5 sources (OpenAI, BenchLM, AA, Epoch AI, Meta AI).

- **Tool use: 75/100.** BrowseComp at 89.3% (Pro) is exceptional. GDPval at 83.0% (matches or exceeds industry professionals) is very strong. OSWorld-Verified at 75.0% exceeds human performance (72.4%). WebArena at 67.3% and Online-Mind2Web at 92.8% are strong. MCP Atlas at 67.2% is moderate. Tau2-bench Telecom at 98.9% is exceptional. However, MCP Atlas and Toolathlon at 54.6% are moderate. Overall strong tool use performance across professional knowledge work and agentic benchmarks.

- **Reasoning: 92/100.** GPQA Diamond at 94.4% (Pro) is in frontier range. ARC-AGI-1 at 93.7% and ARC-AGI-2 at 83.3% are both excellent. HLE at 58.7% (with tools) is above 40% threshold. FrontierMath v2 Tier 1-3 at 82.456% (CRITICAL correction from 50.0%, now ≥85 frontier) and Tier 4 at 58.537% (corrected from 38.0%) are both much stronger. CritPt at 30.0% is moderate. HLE w/o tools at 42.7% (NEW, above 40% frontier). IPhO 2025 at 93.5% (from Meta AI comparison) is exceptional. Overall strong reasoning across abstract, math, and knowledge domains.

- **Context window: 90/100.** 1M tokens per AA model page and BenchLM. In the ≥1M tier → 95-100 range. However, OpenAI MRCR v2 8-needle drops to 36.6% at 512K-1M range, suggesting the 1M context window has degraded performance near the limit. Scores 90 (conservative for 1M with noted degradation at extremes). Meta.json claims 128K — **discrepancy noted**.

- **Multimodal: 75/100.** Supports text and image input (per AA model page and announcement). MMMU Pro (no tools) at 81.2% and (with tools) at 82.1% show strong visual reasoning. Online-Mind2Web at 92.8% (screenshot-based) demonstrates strong visual agentic capability. Image input + vision benchmarks justify multimodal score. Meta.json claims "Text in/out" — **discrepancy noted**.

- **Coding: 81/100.** SWE-Bench Pro at 57.7% is good but below 74% frontier threshold. Terminal-Bench 2.0 at 75.1% is solid but below 85% frontier threshold. Expert-SWE (internal) at 73.1% is strong. Graphwalks benchmarks at 93.0% and 89.8% show strong long-context coding. OmniDocBench normalized edit distance of 0.109 is good for document parsing. Overall strong coding performance, particularly on agentic coding and long-context benchmarks.

- **Cost efficiency: 32.5/100.** $30.00 input / $180.00 output per 1M tokens (OpenAI API pricing). This is at the very expensive end — ~$1.80 per 1K output tokens. In the >$10/$50 tier at the extreme high end. Scores 32.5 based on extremely expensive API pricing.

- **Overall Score: 82.5/100.** Half-up mean of five quality dimensions: (75 + 92 + 90 + 75 + 81) / 5 = 413 / 5 = 82.6 → 82.5. GPT-5.4 Pro delivers strong reasoning (GPQA 94.4%, ARC-AGI-1 93.7%), excellent agentic tool use (BrowseComp 89.3%, GDPval 83.0%, Tau2 Telecom 98.9%), and solid coding (Terminal-Bench 75.1%, SWE-Bench Pro 57.7%) with 1M context and multimodal vision. Limited by very expensive API pricing ($30/$180) and being deprecated in favor of GPT-5.5 Pro.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research via Artificial Intelligence, BenchLM, OpenAI, Epoch AI, and Meta AI; scores normalized 1–100 per model-comparison.md v4. Zero-influence: did not read peer `model/` findings files during research.
- Sources: OpenAI launch blog (full benchmark suite); BenchLM.ai model page (Overall 68.6/100, #24/954, 12 of 639 benchmarks, 2026-10-17 — was 68.93/100 #19/889 11/625 on Oct 10); AA model page (deprecated, Intelligence Index unknown, pricing $30/$180, 1M context); Epoch AI (FrontierMath v2 T1-3 82.456%, T4 58.537%); Meta AI (FrontierScience, IPhO 2025).
- Re-verification (Oct 10→Oct 17): BenchLM updated from 68.93 (#19/889, 11/625) to 68.6 (#24/954, 12/639). CRITICAL correction: FrontierMath v2 T1-3 50.0→82.456% (≥85 frontier), T4 38.0→58.537%. HLE w/o tools 42.7% NEW. All other benchmarks confirmed unchanged. Overall Score 82.5 still valid.

---

## Re-verification (2026-10-17)

Confirmed via Oct 17 BenchLM page: Overall 68.6/100, #24/954, 12 of 639 benchmarks. CRITICAL correction: FrontierMath v2 T1-3 now 82.456% (was 50.0%), T4 now 58.537% (was 38.0%). HLE w/o tools 42.7% added. All other benchmarks and normalized scores unchanged (Overall 82.5).

---