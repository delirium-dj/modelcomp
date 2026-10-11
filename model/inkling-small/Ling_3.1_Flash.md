# Inkling Small — findings by Ling 3.1 Flash

- Source: Thinking Machines Lab / Inkling-Small
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's efficient open-weights member of the Inkling family (released 2026-07-30, alongside the 975B Inkling): a 276B-total/12B-active MoE (42 layers, 6 of 256 routed experts + 2 shared) that matches or beats the flagship on several coding/reasoning rows at a quarter of the active compute. Native reasoning over audio and images, variable thinking effort.
- **Provider / access:** Tinker (Thinking Machines) serverless; DeepInfra `deepinfra/thinkingmachines/Inkling-small`; OpenRouter `thinkingmachines/inkling-small` (OpenAI-compatible).
- **Release / knowledge:** 2026-07-30; knowledge cutoff not published.
- **IDs:** `thinkingmachines/inkling-small` (OpenRouter); `deepinfra/thinkingmachines/Inkling-Small`; weights on Hugging Face (BF16 and NVFP4), Apache 2.0.
- **Context window:** 1M tokens per Thinking Machines/Artificial Analysis (Tinker); some providers serve 524K (OpenRouter/DeepInfra list 524,288 with 262,144 max completion).
- **Modalities:** text, image, speech (audio) in; text out; reasoning (variable effort: minimal→xhigh); tool calls; fine-tuning on Tinker.
- **Pricing (as of 2026-10-08):** Tinker $0.30 / 1M input, $1.20 / 1M output, cached input $0.06; DeepInfra $0.45 / $1.20, cache read $0.10; blended (7:2:1) ~$0.22/1M.
- **Architecture:** 276B total / 12B active MoE, Apache 2.0; BF16 needs ≥600GB aggregate VRAM (4×B300 or 8×H200), NVFP4 ≥180GB (1×B300 W4A4 or 2×H200 W4A16).

### Raw benchmarks found

Agent / tool use (Thinking Machines, effort 0.99, temp 1.0; harness notes per model card):

- MCP Atlas public (Scale AI): **79.6%** (all: 79.2%)
- Toolathlon Verified: **54.4%**
- Terminal-Bench 2.1, best harness: **64.7%** (internal coding harness; Artificial Analysis reproduction: ~55%; OpenRouter/AA: 55.1%)
- Tau3-Banking: **15.5%** (AA: 18.8%) — clear loss vs Inkling's 23.7%
- BrowseComp with context management: **77.4%**
- AA-Briefcase: **917** Elo (34 turns avg vs Inkling's 81, near-identical rubric pass rate)
- Agents' Last Exam row not published for this model; Vals AI: CorpFin v2 **69.6%**, CyberBench v1.1 **64.1%**, Finance Agent v2 **41.3%**, SkillsBench **33.6%**

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (AA; Vals AI 83.6%)
- Humanity's Last Exam text-only: **31.6%**; with tools: **47.8%** (AA HLE: 33.3%)
- AIME 2026: **95.5%**; HMMT Feb 2026: **90.2%**
- CritPt: **8.3%**
- ARC-AGI-1: **84.0%**; ARC-AGI-2: **40.1%**
- SimpleQA Verified: **20.6%** (vs Inkling 43.9% — major factual-recall weakness)
- AA Intelligence Index v4.1: **40** (Thinking Machines) / **26** (Artificial Analysis current, #25/117 open-weights) / 25.7 (Opper); Coding Index 52.9; Agentic Index 23.5
- AA-Omniscience: **−9** (accuracy 31%, hallucination 57% — knowledge reliability is the model's weakest axis)
- IFBench: **82.2%**; Global-MMLU-Lite: **86.7%**; MMLU Pro (Vals): **85.6%**

Coding:

- SWE-bench Verified: **80.2%** (bash-only harness; Vals AI: 82.2%)
- SWE-bench Pro public: **55.9%**
- SciCode: **48.7%** (AA: 49.7%)
- LiveCodeBench (Vals AI): **85.9%**
- Vibe Code Bench v1.1 (Vals): **19.1%**; Code Migration (Vals): **13.7%**; ProgramBench (Vals): **0.5%**
- Terminal-Bench 4.0 (AA/Vals): **~0–1%** — the model's hardest cap on the newest terminal-agent suite

Multimodal:

- MMMU Pro Standard: **74.0%**; CharXiv RQ original/with python: **77.4% / 81.3%**; Vals Multimodal Index: **50.1**; MedScribe (Vals): **84.1%**

Long context:

- AA-LCR: **75.7%**; 1M-token window advertised (provider-served 524K on some routes).

### Normalized scores (1–100)

- **Tool use: 70/100.** MCP Atlas 79.6% and BrowseComp 77.4% are strong, but Toolathlon 54.4%, Terminal-Bench 2.1 ~55–65% and especially Tau3-Banking 15.5% (vs Inkling 23.7%) cap the score.
- **Reasoning: 72/100.** GPQA Diamond 89.5%, AIME 95.5% and HMMT 90.2% are excellent, but HLE text-only 31.6%, ARC-AGI-2 40.1%, CritPt 8.3% and AA-Omniscience −9 (57% hallucination rate) drag it down.
- **Context window: 80/100.** 1M-token advertised window (the weights' maximum) with AA-LCR 75.7% measured long-context reasoning; served routes span 256K (Tinker's hosted beta inference) to 1M, with several providers at 524,288 and some at 262,144 — see the 2026-10-11 section.
- **Multimodal: 78/100.** Native text/image/speech input with MMMU Pro 74.0%, CharXiv 77.4–81.3% and MedScribe 84.1%; Vals Multimodal Index 50.1 is only mid-field; text-only output.
- **Coding: 75/100.** SWE-bench Verified 80.2% and LiveCodeBench 85.9% beat the larger Inkling, but SciCode 48.7%, Vibe Code Bench 19.1% and Terminal-Bench 4.0 ~0–1% are serious caps.
- **Cost efficiency: 85/100.** $0.30/$1.20 per 1M (Tinker) with Apache 2.0 weights — one of the cheapest frontier-adjacent open-weights options; self-hosting needs ≥180GB VRAM (NVFP4).
- **Overall Score: 75/100.** Mean of the five quality dims (70+72+80+78+75)/5 = 75.0; best fit for retrieval-grounded coding agents and fine-tuning where factual recall is supplied externally, not as a standalone knowledge source.

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**Score revisions: none.** Tool use 70 / Reasoning 72 / Context 80 / Multimodal 78 / Coding 75 / Cost 85 / Overall 75 all unchanged — the new reads fill AA's current-page components and the serving reality, and add the audio benchmark rows:

- **AA's current page (v4.3.2) components filled in** (model page + the Inkling Small vs Inkling comparison): AA-Briefcase v1.1 **912** (vs Inkling's 832 — Inkling-Small leads its own flagship, driven by presentation: near-identical rubric pass rates, 20% vs 19%, but fewer than half the turns, 34 vs 81 per task), GDPval-AA v2.1 **1123** (vs 1076), AutomationBench-AA **5%**, Terminal-Bench 4.0 **1%**, SciCode **50%**, HLE **33%**, GDP.pdf **11%**, CritPt **8%**, AA-Omniscience **−9** (accuracy 31–33%, hallucination 57–63%), AA-LCR v1.1 **76%**. AA Intelligence Index **26** on v4.3.2 (#25 of 117 open-weights; median 18 for similar-size open models) vs **40** on the launch-era v4.1 — the two revisions use different eval sets and are not cross-comparable.
- **Context-serving reality:** the weights support 1M tokens (Tinker, Baseten, Pioneer and Vercel AI Gateway serve 1,048,576; DeepInfra/Hugging Face/Eden AI/Kilo Gateway/OpenRouter cap at 524,288; Arcee/LLMTR at 262,144), but Tinker's own hosted beta inference endpoint is 256K-context (its managed training variants expose 64K or 256K) — 1M is the model maximum, not what every route serves; AA's model page still lists 1M.
- **Audio benchmark rows added** (Scale AI / internal, from the launch table): Audio MC **54.9%**, MMAU **77.0%**, VoiceBench **90.1%** (rule-based grading with a format-following system message) — native audio is a differentiator vs text/image-only contemporaries and supports Multimodal 78.
- **Provider spread and a free route:** input $0.30 (Tinker beta, cached $0.06) to $0.58 (LLMTR) and output $1.20–1.44 per 1M across the listed providers (models.dev); OpenRouter and Kilo Gateway carry $0/$0 `:free` variants — promotional zero-price routes, not list prices, so Cost stays 85 on the official $0.30/$1.20 Tinker rate (if the free routes persist, Cost would move up). Tinker training rates: 64K promo $0.58 prefill / $1.44 sample / $1.73 train per 1M (standard double; cached prefill 80% off), 256K promo $1.16/$2.89/$3.47, checkpoint storage $0.10/GB/month.
- **Serving profile:** 145.6 tok/s (AA — notably fast vs a 67.8 median; DeepInfra 197.0 t/s), TTFT 2.27s (somewhat above the 1.87s median), $0.09 per task to run the Intelligence Index, 140M output tokens on the Index run (at the similar-size median). AA's parameter record reads 266B total vs 276B in launch materials — a record discrepancy, not a different model.
- **Aggregator composites:** BenchLM 54.87/100 (#69 of 889; partial 39/625 coverage — conservative); Opper Intelligence Index 25.7 / Coding Index 52.9, global rank #154 of 687; AA Agentic Index 24.9% (BenchLM — the 23.5 carried above is an Opper-era read).
- Score impact: none. The new rows (AutomationBench-AA 5%, GDP.pdf 11%, TB 4.0 1% on AA's current page) reinforce existing caps; the audio rows and the 1M-vs-256K serving nuance are documented without moving a band.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08 (updated 2026-10-11)
- Method: public internet research (Thinking Machines release + Hugging Face model card, Artificial Analysis, OpenRouter, DeepInfra, Opper, BenchLM, models.dev, The Rundown, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
