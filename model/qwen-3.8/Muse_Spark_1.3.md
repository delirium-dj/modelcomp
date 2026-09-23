# Qwen 3.8 — findings by Muse Spark 1.3

- Source: Alibaba/Qwen 3.8 (Qwen3.8-Max flagship), e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (evaluated via the Qwen3.8-Max flagship; 27B sibling noted)
- **Short description:** Alibaba's largest model to date (2.4T MoE, 95B active) — Text Arena #5, Vision Arena #2, with a documented 16-day autonomous software project. Best fit for frontier-grade coding agents and visual-knowledge work at below-frontier pricing.
- **Provider / access:** Alibaba Cloud Model Studio API; OpenCode Zen `opencode/qwen-3.8`. Weights published (HuggingFace `Qwen/Qwen3.8-2.4T-A95B` card; open-weight release announced for the week after the 2026-08-03 launch).
- **Release / knowledge:** 2026-08-03 (per Alibaba Group and Alibaba Cloud press releases); knowledge cutoff: no verified public statement found
- **IDs:** `opencode/qwen-3.8` (paid tier; cost scored on Max paid pricing $1.65/$4.95)
- **Context window:** 1M total tokens — verified via Alibaba press releases, llm-stats org page, and BenchLM model page
- **Modalities:** Text and image/video in (native visual intelligence — hundred-page docs, series, 100-hour livestreams ingestible); text out; reasoning yes; tool calls, JSON mode, computer-use (OSWorld/AndroidWorld) yes
- **Pricing (as of 2026-09-23):** $1.65/$4.95 per 1M in/out (verified via llm-stats org page). No $0 tier confirmed.
- **Architecture:** 2.4T total / 95B active sparse MoE with hybrid attention, built on Qwen 3.5 (per Alibaba and InfoWorld)

### Raw benchmarks found

> Per-benchmark rows below are BenchLM's Qwen3.8 Max ledger (updated 2026-09-22, vendor + third-party rows) unless marked otherwise. Arena ranks are Alibaba's official launch figures.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (88%+ frontier band; Vals independent subset 67.4% — harness differs, both cited)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon-Verified **72.5%**; CoWorkBench **74.8%**; OSWorld-Verified **86.1%**; AndroidWorld **85.3%**; WebArena-Verified **66.8%**
- Agents' Last Exam: **52.4%**; JobBench **53.4%**; skillsBench **70.2%**; WideResearch **81.9%**; AutomationBench **27.3%** (weakest agentic row — noted)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Vals split 93.7%)
- HLE: **43.6%** without tools / **56.2%** with tools
- LCR / MLCR: LongBench v2 **66.3%**; classic LCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: BenchLM overall 72.02 (#13/505); AA Index: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- MMLU-Pro (Vals): **88.6%**; IFBench **82.8%**

Coding:

- SWE-bench Verified / SWE-Pro: SWE-Pro **67.7%** (top-tier band); SWE (Vals subset) **85.6%**; Verified proper: no separately verified public score found
- LiveCodeBench: **87.9%** (Vals split)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE **56.6%**; FrontierSWE **73.5%** (v2 15.8%); NL2Repo **55.9%**; PaperBench **93.0%**; VulcanBench v3 **81.2%**

Long context:

- MRCRv2 **92.9%** at the 1M window — strong but below the ≥98% bar for a perfect retrieval score; 16-day unsupervised real-project run corroborates usable long-horizon memory (vendor demo)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.1 86.6% plus OSWorld-V 86.1% and Toolathlon-V 72.5% are at the frontier band edge; AutomationBench 27.3% and no Tau3/GDPval rows cap it below 90.
- **Reasoning: 93/100.** GPQA ~93% with HLE 43.6–56.2% clears the frontier bar on both axes.
- **Context window: 97/100.** Full 1M window with MRCRv2 92.9%; just short of the ≥98%-retrieval perfect tier.
- **Multimodal: 90/100.** Native visual intelligence, Vision Arena #2, VideoMMMU 88.7% and Video-MME 90.4% — top of the video-in/text-out band.
- **Coding: 86/100.** SWE-Pro 67.7% with LiveCode 87.9% and FrontierSWE 73.5% is near-frontier; DeepSWE 56.6% caps it short of 90.
- **Cost efficiency: 85/100.** $1.65/$4.95 paid pricing undercuts $2+/$7+ frontier peers at comparable capability; still firmly paid.
- **Overall Score: 91/100.** Mean of (88 + 93 + 97 + 90 + 86) / 5 = 90.8 → 91; best fit as a frontier-class coding/vision agent at a discount to US-lab flagships.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (Alibaba Group/Cloud launch releases, InfoWorld launch coverage, BenchLM Qwen3.8 Max ledger, llm-stats Qwen org page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
