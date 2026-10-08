# DeepSeek-V4.1-Flash — findings by Step 5 Preview

- Source: DeepSeek (`deepseek-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash
- **Short description:** DeepSeek's first Causal Encoder-Decoder (CED) model (released 2026-09-09/10) — a 552B multimodal MoE that activates only 8B parameters on input and 16B on output, built for cheap long-context agentic workloads via aggressive KV-cache compression (CSA2, FP4 KV, SWA Bounded Replay). Open-weight (MIT); supersedes V4-Pro (now routed to V4.1-Flash) and V4-Flash (retired, routed for compatibility).
- **Provider / access:** DeepSeek API `deepseek-flash` (`https://api.deepseek.com`, OpenAI- and Anthropic-compatible); also OpenCode Zen `opencode/deepseek-v4.1-flash` (paid, $0.30/$1.20), OpenRouter, Together, Hugging Face, and 25+ other providers; weights on Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash` (MIT).
- **Release / knowledge:** 2026-09-09 (announcement; API pricing effective 2026-09-10); knowledge cutoff not disclosed.
- **IDs:** `deepseek-flash` (DeepSeek API), `deepseek-v4.1-flash` (Zen/OpenRouter/most providers; legacy `deepseek-v4-flash` routes here).
- **Context window:** 1,048,576 tokens (1M) native; max output 384,000 tokens (some routes cap lower, e.g. 32K–1M by provider).
- **Modalities:** Text and image in → text out (native DeepSeek-ViT trained jointly); continuous `reasoning_effort` 1–100 (low/high/max tiers); tool calls, structured output; temperature 1.0 / top_p 0.95 recommended.
- **Pricing (as of 2026-10-09):** Peak $0.30 / MTok input (cache miss), $1.20 output; off-peak 50% off ($0.15 / $0.60); cache-hit input $0.006 peak / $0.003 off-peak (~98% cache discount per Artificial Analysis). Peak hours 01:00–04:00 and 06:00–10:00 UTC Mon–Fri.
- **Architecture:** 552B-parameter MoE (plus ~196B reported Engram params), 40 layers (20-layer causal encoder + 20-layer decoder), 1 shared + 384 routed experts (top-6), ~8B active per prefill token / 16B per decode token; open weights, MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek model card, max effort, DSH-Minimal harness; ahead of Opus 5's 89.1 and GPT-5.6 Sol's 88.8); independent **74.53%** (Vals AI, Terminus-2 harness, #18/76); scaffold spread 84.1 (Codex) – 90.6 (DSH Minimal)
- Terminal-Bench 3.0: **30.0%** (vendor); Terminal-Bench 4.0: **31.2%** (vendor, #16/29 — behind Opus 5's 51.8 and GPT-5.6 Sol's 39.9)
- AutomationBench: **54.8%** (vendor — field-leading in its table; Opus 5 50.3)
- CyberGym: **88.1%** (vendor, field-leading; GPT-5.6 Sol 84.5)
- SEC-Bench Pro: **62.8%** (vendor; GPT-5.6 Sol 74.3)
- Agent's Last Exam: **31.8%** (vendor, field-leading)
- BrowseComp: **85.8% ±9** (BenchmarkList, 69th pct)
- JobBench: **45.8%** (60th pct); Terminal-Bench-Science 15.7%; Finance Agent v2 61.6% (96th pct)
- Claw-Eval / ClawProBench / GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (vendor, max effort; #31/468); no independent AA/Vals run yet
- HLE: **36.8%** (vendor full set; 39.1% text-only subset); Artificial Analysis **39.2%** (#43/478); with tools **63.9%** (vendor, #3/29)
- AA-LCR: **84.0%** (Artificial Analysis, 99th percentile, #7/408)
- CritPt: **14.3%** (AA, 26th pct); MathArena Apex 65.6%; Codeforces rating 3471 (#1/8)
- Artificial Analysis Intelligence Index: **39.5** (max, 2026-10-07; #60/427); ARC-AGI-2: 72.9% (ARC Prize, max)
- Base model (from HF card): MMLU-Pro 74.1, SimpleQA-Verified 42.3, SuperGPQA 53.1, MATH 61.1 (MATH-500 97.3% per ARMEDS), LongBench-V2 45.2

Coding:

- DeepSWE v1.1: **74.2%** (vendor, mini-SWE harness — tied with Opus 5.5 for field lead, ahead of Opus 5.0's 74.0 and GPT-5.6 Sol's 73.0); scaffold spread 65.5–74.2
- SWE-bench Verified / SWE-bench Pro: **not reported by the vendor; no Vals score yet** (vendor substitutes DeepSWE v1.1)
- SciCode: **51.9%** (BenchmarkList, 86th pct); SWE-Atlas Codebase QnA 54.0%; NL2Repo-Bench 64.0%; ProgramBench 20.3%
- Codeforces: **3471** rating (top of its table)
- LiveCodeBench / Vibe Code Bench: **no verified public score found**

Multimodal (vision):

- MMMU-Pro (base): **56.5%**; CVBench 77.9%; DocVQA 95.6%; RefCOCO-avg 86.0%
- BabyVision (w/ tools): **89.6%**; Chartography (w/ tools): **78.9%**; ZeroBench-main (w/ tools, pass@5): 49.0%

Long context:

- 1M-token native window; AA-LCR 84.0% (99th pct, AA) is the only independent long-context figure; **no public MRCR/RULER number**; third-party analysis warns needle/cross-document retrieval degrades well before the 1M ceiling

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 90.6% (vendor max-effort) and CyberGym 88.1% sit in the frontier band, with AutomationBench 54.8% and BrowseComp 85.8% supporting breadth; capped by the independent TB2.1 reading of 74.53% (Vals Terminus-2), TB3.0/4.0 at 30–31% (far behind Opus 5's 43.3/51.8), and no public GDPval-AA/Claw-Eval.
- **Reasoning: 83/100.** GPQA 90.9% and AA Intelligence Index 39.5 with AA-LCR 84.0% put it solidly frontier-adjacent; HLE 36.8–39.2% (56.3% for Opus 5) and CritPt 14.3% cap it below the top tier, and the GPQA number lacks independent replication.
- **Context window: 93/100.** 1,048,576-token native window with 384K max output is the ≥1M tier; AA-LCR 84.0% (99th pct) is strong evidence, but the 100 tier's ≥98%-retrieval-at-512K bar is unverifiable with no MRCR/RULER published, and the compressed-KV design's long-context reliability is flagged as unproven at the ceiling.
- **Multimodal: 72/100.** Native text + image in → text out with a jointly trained ViT, backed by BabyVision 89.6% (w/ tools) and Chartography 78.9%; above the plain 60–70 image-input band but held below the video/PDF/audio tier — no video/audio input, no non-text output, and base MMMU-Pro is only 56.5%.
- **Coding: 87/100.** DeepSWE v1.1 74.2% (tied field lead), TB2.1 90.6% (vendor) and Codeforces 3471 are frontier-band; capped by SciCode 51.9%, NL2Repo 64.0%, ProgramBench 20.3%, and the absence of any vendor or Vals SWE-bench Verified number — all headline coding scores run on DeepSeek's own harness at max effort.
- **Cost efficiency: 97/100.** $0.30/$1.20 peak per MTok (half off-peak, ~$0.006 cache hits) is roughly an order of magnitude below the methodology's ~$0.60/$2.20 ≈ 92 tier — among the cheapest frontier-class models available, open weights included.
- **Overall Score: 84/100.** Best-fit recommendation: the cost-efficiency leader for agentic coding and long-context pipelines — DeepSWE/TB2.1-class agentic coding at ~1/10th flagship pricing; route science-heavy agent tasks (TB4.0, TB-Science) to Opus/Fable-class models.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (DeepSeek HF model card + tech report/arXiv + API docs/changelog/pricing, Artificial Analysis, Vals AI via Ridge/AI-Model-Timeline, BenchmarkList, ModelCap, models.dev, ARMEDS); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
