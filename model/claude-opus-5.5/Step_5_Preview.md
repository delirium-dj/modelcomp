# Claude Opus 5.5 — findings by Step 5 Preview

- Source: Anthropic `claude-opus-5-5`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 (`claude-opus-5-5`; API model ID `claude-opus-5-5`, a dateless pinned snapshot)
- **Short description:** Anthropic's Opus-tier upgrade to Claude Opus 5 (not a new generation), tuned for long-running agentic coding, computer use, and knowledge work. Delivers Fable 5.1-class performance at ~40% lower effective cost than Opus 5. Now Anthropic's default recommendation for most workloads.
- **Provider / access:** Anthropic Claude API (Messages API), Amazon Bedrock, Google Cloud, Microsoft Foundry. Chat/Messages API; tool-calls supported. No free tier.
- **Release / knowledge:** Released 2026-09-22. Knowledge cutoff June 2026.
- **IDs:** `claude-opus-5-5` (Anthropic). No free/contributor ID.
- **Context window:** 1,000,000 (1M) total; 128,000 max output (sync Messages API), 300,000 via Message Batches API (`output-300k-2026-03-24` beta).
- **Modalities:** Text, image, PDF in; text + tool-calls out. No audio or video input; no image/audio output. Reasoning yes (effort tiers low→max, default medium); JSON mode yes.
- **Pricing (as of 2026-10-08):** $4.00/M in · $0.20/M cached in (60% cheaper than Opus 5's $0.50) · $20.00/M out. Batch API 50% off ($2/$10). No free tier.
- **Architecture:** Proprietary; weights and parameter count undisclosed (consistent with all Claude releases).

### Raw benchmarks found

> Cross-referenced hokai.io (Anthropic system card), Vellum (Artificial Analysis runs), and BenchmarkList (58 benchmarks, percentile-ranked). Note: Anthropic's Opus 5.5 system card does NOT publish SWE-bench Verified, GPQA Diamond, AIME 2025, MMLU-Pro, or ARC-AGI-2 — the 5.5 eval suite leans agentic/professional-work.

Agent / tool use:

- GDPval-AA v2.1 (Elo): **1846** (Anthropic system card; BenchmarkList rank #3/352, 99th pct) — clears the ~1750 frontier threshold
- AA-Briefcase (Elo): **1822** (Artificial Analysis; rank #2/145)
- Chartography (computer use, with tools): **89.0%** (rank #2, 97th pct)
- Toolathlon: **77.8%** Pass@1 / 82.4 Pass@3 (rank #7/41)
- BrowseComp (agentic web): **88.5%** (rank #13/60)
- Agents' Last Exam: **38.2%** (rank #10/41)
- AutomationBench-AA: **69.5%** (rank #3/26)
- OSWorld 2.0 / OSWorld-type computer use: no single unified OSWorld 2.0 row verified live; Chartography 89% is the closest computer-use proxy

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **67.7%** (Anthropic; BenchmarkList rank #1/478, 100th pct) — well above the 40% frontier bar
- Artificial Analysis Intelligence Index: **57.6** (rank #8/427, 98th pct; Vellum/HokAI round to 58, #1 at max effort)
- SciCode: **66.9%** (rank #1/296, 100th pct)
- ArxivMath (with tools): **96.9%** (rank #1/35)
- Global MMLU: **94.3%** (rank #1/13)
- GPQA Diamond: **no verified public score found** for Opus 5.5 (not in the 5.5 system card; an AA-run GPQA was not surfaced live)
- AIME 2025: **no verified public score found** for 5.5
- AA-Omniscience Net Score: **0.58** (rank #1/11; 0.76 correct / 0.17 incorrect / 0.07 unsure) — strong honesty

Coding:

- SWE-bench Pro: **89.9%** (Anthropic; rank #1/58, 100th pct) — vs Opus 5 79.2%, Fable 5.1 81.2%
- SWE-bench Multilingual: **93.9%** (rank #1/49)
- SWE-bench Verified: **no verified public score found** for 5.5 (not in system card)
- DeepSWE 1.1: **74.2%** (rank #4/52) — clears the 74% frontier ref
- Vibe Code Bench v1.1: **90.3%** (rank #4/75)
- FrontierCode: **65.3%** (BenchmarkList) / **54.4%** on v1.1 (Vellum) — harness/version differs, both listed
- FrontierSWE v2: **62.3%** (rank #2/20)
- SciCode: **66.9%** (rank #1/296) — clears the 55% frontier ref
- CursorBench 4.0: **57.8%** (Vellum) — real-world coding sessions
- LiveCodeBench: no verified public 5.5 row found live
- Terminal-Bench 4.0 (agentic coding): **66.4%** (xhigh, ±2.6; rank #2/29) — beats GPT-6 Astra 57.9%, Fable 5.1 55.8%, Opus 5 52.3%

Long context:

- ProgramBench (Anthropic harness, up to full 1M): **91.2%** best hidden-test pass rate (rank #3/10). No explicit MRCR ≥98%-at-512K figure published.

### Normalized scores (1–100)
- **Tool use: 93/100.** GDPval-AA 1846 Elo clears the frontier threshold, Chartography 89% (w/tools), Toolathlon 77.8%, and a #1 AA Intelligence Index at max effort place it in the 90–100 frontier band. Capped by Agents' Last Exam 38.2% and the fact that its long-horizon strength is agentic-computer-use-heavy rather than raw terminal breadth.
- **Reasoning: 94/100.** HLE 67.7% w/tools (#1 of 478) far clears the 40% frontier bar; SciCode 66.9% (#1), ArxivMath 96.9% w/tools, Global MMLU 94.3%, AA-Omniscience 0.58 net (top honesty). Capped slightly by the AA Intelligence Index 57.6 (just under the 60 ref) and no published GPQA Diamond / AIME for 5.5.
- **Context window: 97/100.** 1M input / 128K output (300K batch) with ProgramBench 91.2% up to the full window — solid ≥1M tier. Not a full 100 because no explicit MRCR ≥98%-at-512K retrieval figure was published to confirm the top sub-tier.
- **Multimodal: 80/100.** Text + image + PDF in (text out), no audio/video input and no non-text output → the 75–90 "video/PDF in" band, held to 80 by the absence of audio/video and native image generation. SWE-bench Multimodal 61.4% (#1) and Chartography 89% confirm strong visual reasoning.
- **Coding: 96/100.** SWE-bench Pro 89.9% (#1), Vibe Code 90.3%, DeepSWE 74.2%, SciCode 66.9% (#1), TB4.0 66.4% (#2, beating GPT-6 Astra) — a top coding model. Capped only by missing independent SWE-bench Verified / LiveCodeBench rows for 5.5 and the lower CursorBench 57.8% / FrontierCode-v1.1 54.4% real-world sessions.
- **Cost efficiency: 58/100.** Paid-only at $4/$20 per 1M (rubric ~$3/$15 = ~60); cache reads at $0.20/M and 40% lower effective per-task cost vs Opus 5 soften it, but there is no $0 tier.
- **Overall Score: 92/100.** Mean of the five non-cost dims (93+94+97+80+96)/5 = 92.0. Best fit as the default frontier pick for long-horizon agentic coding and knowledge work where budget allows and audio/video input is not required.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Cross-referenced Anthropic's Opus 5.5 system card (via hokai.io), Vellum's Artificial Analysis analysis, and BenchmarkList's percentile-ranked 58-benchmark map.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

