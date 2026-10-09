# Solar Mini 4 — findings by GLM 5.3 Flash

- Source: Upstage (`solar-mini-4` — upstream API ID `solar-mini4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's compact agent-optimized MoE (35B total / 3B active) pretrained from the ground up for high-volume, cost-sensitive workloads — information retrieval, structured output generation, and tool use at scale. Highest AA Intelligence Index among 3B-active models evaluated.
- **Provider / access:** Upstage Console API (`https://api.upstage.ai/v1`, model ID `solar-mini4`, OpenAI SDK / Chat Completions), Solar Chat, and OpenRouter (`upstage/solar-mini4`); on-premises deployment supported (quantized model runs on a single H100 80GB); free on Hermes Agent for a limited time from Oct 5.
- **Release / knowledge:** 2026-09-22 release (AA FAQ; blog announced 2026-10-01); knowledge cutoff February 1, 2026.
- **IDs:** `upstage/solar-mini4` (Upstage first-party), `openrouter/upstage/solar-mini4`; no Free ID on OpenCode Zen verified.
- **Context window:** 512K total, up to 128K output tokens (official Upstage blog); OpenRouter lists 524,288 / 131,072; AA lists 1M — verified against all three, discrepancy noted (official spec is 512K).
- **Modalities:** text in, text out; reasoning optional (no reasoning by default; `reasoning_effort` to scale); tool calls yes (incl. parallel tool calling); JSON mode + JSON Schema structured outputs yes.
- **Pricing (as of 2026-10-09):** $0.10 in / $0.01 cached / $0.40 out per 1M standard (paid); 70% launch discount through Oct 10 UTC (≈ $0.03/$0.12). AA: 90% cache discount, ~$0.36 per Intelligence Index task.
- **Architecture:** 35B total / 3B active MoE; proprietary (weights not released); sustained >70 tokens/s per request across 32 concurrent requests on 2× H100 in internal testing.

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA (real SaaS workflows): **22.3%** (Upstage blog / AA)
- τ³-Banking (policy application + tool use, multi-turn): **47.2** (Upstage blog)
- Artificial Analysis Intelligence Index: **24 / #36 of 182** (AA model page; 24.1 per Upstage blog citing AA v4.3.2 — highest among 3B-active models, above the price-tier median of 13)
- GDPval-AA / Claw-Eval / Terminal-Bench: no verified public score found

Reasoning / knowledge:

- AA-LCR (long-context reasoning): **83.3%** (Upstage blog)
- HLE: **25.8%** (Upstage blog)
- GPQA Diamond / CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- AA class comparisons: 1.1 points above Nemotron 3 Ultra (55B active), 0.9 below MiMo-V2.5 (Upstage blog citing AA)

Coding:

- SciCode: **47.6%** (Upstage blog)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / DeepSWE: no verified public score found

Long context:

- AA-LCR: **83.3%** (Upstage blog); no MRCR/RULER retrieval reported — 512K is the official spec

Speed: 76.0 output tokens/s (AA, Upstage API — below the price-tier median of 110); TTFT 1.90s. Very verbose: 370M output tokens across the Intelligence Index run (median 100M). Internal cost test: ~43% cheaper per completed task set than MiMo-V2.5 ($1.25 vs $2.20 per 1,000 three-task sets).

### Normalized scores (1–100)

- **Tool use: 50/100.** τ³-Banking 47.2 approaches but does not clear the Tau3 ~50%+ frontier reference, and AutomationBench-AA 22.3% is weak for an agent-optimized model — real-workflow completion caps the score.
- **Reasoning: 62/100.** AA Intelligence Index 24 (highest among 3B-active models) and AA-LCR 83.3% (strong long-context reasoning) sit in or near the mid-band; HLE 25.8% and missing GPQA keep it below frontier.
- **Context window: 86/100.** Official spec 512K / 128K output sits in the 500K–1M band (OpenRouter confirms 524,288; AA's 1M listing is the outlier), backed by a strong AA-LCR 83.3% long-context reasoning signal.
- **Multimodal: 15/100.** Text-only input and output per the official blog and AA — no image/audio/video support.
- **Coding: 55/100.** SciCode 47.6% is below the 55%+ frontier marker and no SWE-bench/LiveCodeBench numbers are published — coding is the model's weakest measured dimension.
- **Cost efficiency: 95/100.** $0.10/$0.40 standard sits near the ~$0.10/$0.20 ≈ 97–99 reference with a 90% cache discount, ~$0.36 per AA task, and an internal test showing ~43% lower cost per task than MiMo-V2.5; the 70% launch discount pushes it further. Paid, not $0 — not counted toward Overall.
- **Overall Score: 54/100.** Mean of the five quality dims (50 + 62 + 86 + 15 + 55) / 5 = 53.6 → 54. Best-fit recommendation: a high-volume retrieval/extraction/classification workhorse with a big context window at rock-bottom pricing — escalate for deep coding or multi-step agentic work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (official Upstage blog, Artificial Analysis model page, OpenRouter listing via DuckDuckGo search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
