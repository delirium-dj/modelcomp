# Gemini 3 Flash — findings by Muse Spark 1.2

- Source: Google/gemini-3-flash (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's speed-optimized frontier model (Gemini 3 Flash Preview Dec 2025); 2× cheaper than 3 Pro with only 2-point Intelligence drop, strong knowledge/hallucination leader.
- **Provider / access:** Google AI Studio `gemini-3-flash-preview`, Vertex AI `gemini-3-flash` — via OpenCode Zen `opencode/gemini-3-flash`
- **Release / knowledge:** 2025-12-17 Preview (per Artificial Analysis, Google Blog); knowledge cutoff 2025-12
- **IDs:** `google/gemini-3-flash`, `google/gemini-3-flash-preview`
- **Context window:** 1,048,576 total (1M) — verified via Google blog, AA (1M /128K out tier)
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes (thinking levels); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** $0.50 in / $3.00 out per 1M (audio $1/1M in); cached 90% discount — cheapest frontier per AA; 3× cheaper than 2.5 Pro
- **Architecture:** Proprietary (Gemini 3)

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom (AA): **no verified isolated Tau2 for 3 Flash found** — proxy via AA Intelligence agentic component and GDPval below
- Terminal-Bench Hard (AA): **no verified hard isolated** — DeepMind reports Terminal-Bench 2.1 78.0% for successor 3.6 Flash (Terminus-2 harness) vs 73.8% for 3.1 Pro lineage
- GDPval-AA v2: **no verified GDPval for 3 Flash isolated** — AA Notes intelligence via knowledge/hallucination leader instead
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AA-Briefcase / AutomationBench-AA: not isolated for 3 Flash in AA index 71 disclosure

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Google blog, AA) — 90% per Artificial Analysis (3rd behind 3 Pro Preview + GPT-5.2 xhigh) (source: blog.google 2025-12-17, Artificial Analysis articles)
- HLE: **33.7% without tools** (Google) / **35%** (AA) — 2nd to 3 Pro Preview on HLE (source: Google blog, AA Gemini 3 Flash article)
- MMLU-Pro: **89%** (AA, 3rd behind 3 Pro Preview) (source: AA)
- LCR / MLCR: **no verified LCR published for 3 Flash** (GDM-MRCR v2 for 3.6 Flash 91.8% at 128k average, not 3 Flash isolated)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **71** (AA Intelligence Index, +13 vs 2.5 Flash Sep, most intelligent per cost; 160M tokens used) (source: Artificial Analysis 2025-12-17)
- Omniscience Accuracy / Hallucination Rate: **Highest AA-Omniscience score of any model tested** (driven by accuracy; hallucination rate 91%, +3pts vs 2.5 Flash/3 Pro) (source: AA)
- AIME 2025 / MATH: proxy via GPQA/MMLU above

Coding:

- SWE-bench Verified / SWE-Pro: **no verified SWE for 3 Flash isolated in AA index article** — focus reported is knowledge/reasoning not SWE
- LiveCodeBench: **no verified LCB for 3 Flash isolated** — successor 3.6 Flash LiveCodeBench proxy 85%+ tier but not 3 Flash isolated
- SciCode / AA-SciCode: **no verified SciCode isolated**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified DeepSWE for 3 Flash** — AA notes 10 evals include SciCode/HLE/etc but not DeepSWE breakout for 3 Flash

Long context:

- 1M total — no MRCR 1M pointwise for 3 Flash published; 3.6 Flash GDM-MRCR v2 91.8% at 128k average indicates strong long-context but not directly attributable to 3 Flash

### Normalized scores (1–100)

- **Tool use: 72/100.** No isolated Tau/Terminal GDPval for 3 Flash, but AA Intelligence 71 at 2× lower cost shows improved agentic component per AA "+13 intelligence at 2× cheaper than Pro" — capped by missing Toolathon/Tau2 direct numbers and high token use (160M) indicating verbosity penalty.
- **Reasoning: 88/100.** GPQA 90.4% + MMLU-Pro 89% + HLE 33.7-35% (2nd to Pro) + AA-Omniscience #1 accuracy demonstrate frontier reasoning; capped by HLE still below 40% and hallucination rate 91% penalty.
- **Context window: 96/100.** 1M total verified — top tier 95-100; capped absent 1M MRCR disclosure (successor shows 54% at 1M but not this model).
- **Multimodal: 90/100.** Text, image, video, audio, PDF in; text out — full omni plus MMMU Pro 81.2% SOTA-comparable to Pro (per Google), highest tier per rubric.
- **Coding: 78/100.** No isolated SWE/LCB for 3 Flash but AA Intelligence 71 and successor lineage (3.6 Flash 78% TB2.1) imply strong coding; capped by missing direct LiveCode/SWE/DeepSWE public numbers.
- **Cost efficiency: 95/100.** $0.50/$3 per 1M — cheapest frontier, 3× faster than 2.5 Pro (218 tok/s vs 124), 2× cheaper than Pro per AA; token-efficient on typical traffic (-30% vs 2.5 Pro) despite Index token bloat.
- **Overall Score: 85/100.** Mean of five non-cost dims (72+88+96+90+78)/5=84.8 → 85; best-fit for high-intelligence work where speed and cost beat Pro and hallucination tolerance is acceptable.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Artificial Analysis Gemini 3 Flash 2025-12-17, Google blog 2025-12-17, deepmind model cards for successor 3.6/3.7 Flash for context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
