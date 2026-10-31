# Kimi K3.1 Pro — findings by Big Pickle

- Source: Moonshot AI (`kimi-k3.1-pro`, Kimi API / OpenRouter / OpenCode)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's flagship 3T-class reasoning model (October 2026), a heavier post-trained successor to Kimi K3 aimed at agentic coding, 3D/CAD generation and financial research; it is frontier-adjacent on agentic and coding evals at roughly a fifth of Opus-class pricing, with open weights promised for 2026-11-04.
- **Provider / access:** Kimi API (`kimi-k3.1-pro`, `kimi-k3.1-pro-highspeed`), Kimi.ai, Kimi Work 3.1.0+, Kimi Code, and third-party gateways (OpenRouter `moonshotai/kimi-k3.1-pro`, OpenCode, Artificial Analysis tracks five providers). OpenAI-compatible Chat Completions; vision input via base64 or `ms://` only (no public image URLs).
- **Release / knowledge:** Released 2026-10-23 (Kimi Code release notes date the series rollout to 2026-10-23; the X launch thread landed 2026-10-23 17:15 UTC). Knowledge cutoff not published.
- **IDs:** `kimi-k3.1-pro` (standard), `kimi-k3.1-pro-highspeed` ($4/$20 serving profile — same weights, never a separate model); OpenRouter `moonshotai/kimi-k3.1-pro`. No Free Zen ID verified.
- **Context window:** 1,048,576 tokens; `max_completion_tokens` defaults to 131,072 and is settable up to 1,048,576.
- **Modalities:** Text, image and video in; text out. Thinking always on with `reasoning_effort` ∈ {low, high, max} (default max); tool calling, structured output, prompt caching with 5m/1h TTL. Native vision encoder MoonViT-V2 (401M params).
- **Pricing (as of 2026-10-30):** $2.00 in / $10.00 out / $0.20 cached per 1M tokens, flat across the whole context window; cache writes $2.00 (5m TTL) / $4.00 (1h TTL). Highspeed doubles input/output to $4.00 / $20.00 with the same $0.20 cache hit rate. Access unlocks after a $1 top-up; Zero Data Retention available for API customers.
- **Architecture:** Open-weight promise — MoE, **2.8T total / 104B active** parameters, 93 layers (1 dense), 896 experts with 16 selected per token + 2 shared, 69 KDA + 24 gated-MLA attention layers, 160K vocab, MXFP4 weights / MXFP8 activations (quantization-aware training). Full weights promised by 2026-11-04; license not yet published (K3 used a custom Kimi K3 License), and AA still lists it as proprietary until the release lands.

### Raw benchmarks found

> Moonshot's sheet mixes its own harness rows with leaderboard values; Artificial Analysis ran it independently on a neutral harness and reached the top of the Terminal-Bench 4.0 board. Two index generations coexist: **55.1 on AA Intelligence Index v4.3** vs **46.0 on v5.0**.

Agent / tool use:

- Terminal-Bench 4.0: **67.2%** (Artificial Analysis, neutral harness — highest on AA's board) vs **65.7%** on Moonshot's own Claude-Code-harness run vs **63.6%** (Vals AI, Mini-SWE-agent) vs Claude Opus 5.5 66.4% — three harnesses, three numbers, same ranking band
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA v2.1: **1846 Elo, #3** behind Claude Opus 5.5 (1866) and Muse Wonder Full (1857), ahead of Claude Fable 5.1 (1754) and GPT-6 Astra (1573)
- GDPval-AA (AA scoring): **67.3%** (AA via OpenRouter)
- AA-Briefcase v1.1: **1678 Elo** vs Opus 5.5 1803, GPT-6 Astra 1569
- AutomationBench-AA: **73.3%** (AA/Mercor) — #2 of 15, behind only Muse Wonder Full's 71–73 band; up from 58% for Kimi K3
- APEX-Agents: **67.2%** (#6 of 55) vs Opus 5.5 73.5%
- OSWorld V2.1: **79.6%** (Kimi Agent harness) vs Opus 5.5 81.8%
- Agents' Last Exam: **43.2%** (with tools, #1 of 34) / CLI 44.2% — pass-rate, limited comparability
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found (Moonshot's MCP Atlas row is a 500-task public-subset internal run)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (no tools) vs GPT-6 Astra 96.1%, Opus 5.5 93.9%
- HLE: **51.1% full / 39.4% HLE-Diamond** (no tools) vs Opus 5.5 59.8% / 60.9%; HLE with tools **70.0%** (vendor, with Kimi Code) / **52.5%** (AA)
- LCR / MLCR: **AA-LCR 86.3%** (AA) — strong retrieval at long context
- CritPt: **24.6%** (AA) / **25%** (AA launch article) vs Opus 5.5 61% on the v5.0 hard subset — the clearest science-reasoning gap
- Artificial Analysis Intelligence Index: **55.1 (v4.3, #4 of 215)** / **46.0 (v5.0)** — the launch article frames it as the coming open-weights leader, 3 points behind the best proprietary model instead of 12
- Omniscience Accuracy / Non-hallucination: **48.9% accuracy / 62.7% non-hallucination** (AA via OpenRouter); AA's launch article reports accuracy 48%→51% and hallucination 53%→44% vs Kimi K3, i.e. ~56% hallucination rate on wrong answers
- FrontierMath / ProofBench: ProofBench v1.1 **91.0%** (Vals, Lean 4); FrontierMath not reported for this model
- LiveBench 2.0 overall: **76.7%** (#14 of 51)
- MysteryMechanism: **26.1%** (Vals)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found (Vals Vibe Code Bench 84.9% is the nearest measured proxy)
- SciCode: **60.8%** (AA) / 61% (AA launch article, up from 59%)
- DeepSWE v1.1: **75.5%** (Claude-Code harness) vs Opus 5.5 74.2%, GPT-6 Astra 74.1%, DeepSeek V4.1 Flash 77.0%
- SWE-Marathon v1.1: **51.7%** vs Opus 5.5 46.3%, GPT-6 Astra 42.5%
- ProgramBench (binary, ≥95% tests): **31.5%** vs Opus 5.5 65.0%, GPT-6 Astra 50.0% — its worst coding row by far
- FrontierCode 2.0: **25.5%** (AA v5.0) — second weak spot, vs Opus 5.5 46%
- Kimi Code Bench 3.0 Long-horizon (internal): **61.2%** vs Kimi K3 55.95%, Opus 5.5 58.5%, GPT-6 Astra 66.5%
- BenchCAD (3D reconstruction from multi-view renders): **92.7% with tools / 72.8% without** vs Opus 5.5 96.2% / 73.0% — near-parity on a very specialised spatial task
- IOI (Vals v2): **81.9%** (#11 of 45); Vals Vibe Code Bench v1.1: **84.9%**; Terminal-Bench-Science 0.1: **38.1%** (vendor) / **31.4%** (Vals)
- Finish/quality proxies: Harvey Legal Agent 23.7%, Finance Agent v2.1 61.5%, Legal Research Bench 37.5%, OfficeQA Pro v2 64.4 (SOTA claim)

Long context:

- **AA-LCR 86.3%** measured (AA) at up to 1M tokens; no vendor RULER/MRCR curve published. Long context is a genuine strength rather than a spec-sheet claim.

### Normalized scores (1–100)

- **Tool use: 92/100.** Top of AA's Terminal-Bench 4.0 board (67.2%), #3 GDPval-AA (1846 Elo), 73.3% AutomationBench-AA and a #1 Agents' Last Exam run make it a genuine agentic front-runner; AA-Briefcase 1678 and APEX-Agents 67.2 sit below Opus, which caps it short of 95.
- **Reasoning: 90/100.** Index 55.1 (v4.3, #4 overall) with GPQA 94.2% and HLE-with-tools 70.0% is frontier-adjacent, but HLE-Diamond 39.4, CritPt ~25% and Omniscience accuracy 48.9% / hallucination ~56% keep it clearly behind Opus on hard science and factual recall.
- **Context window: 95/100.** 1,048,576-token window, output settable to the same 1M, and 86.3% measured AA-LCR retrieval — one of the best verified long-context profiles in the dataset.
- **Multimodal: 86/100.** Text, image and video input (no audio) with text-only output; MMMU-Pro 84.1 (90.0 with python), CharXiv 89.0, BenchCAD 92.7 show strong document/spatial understanding, but ZeroBench 29.8 and no audio keep it out of the top band.
- **Coding: 92/100.** Terminal-Bench 4.0 67.2% (board leader) and DeepSWE 75.5 / SWE-Marathon 51.7 are elite; ProgramBench 31.5 and FrontierCode 25.5 expose a real weakness on clean-room, from-scratch and security-hardened coding, so it does not reach 95.
- **Cost efficiency: 88/100.** $2/$10/$0.20 is roughly a fifth of Opus 5.5's per-token price for near-Opus agent scores, and $1.98 per AA index task is among the cheapest frontier results; the 55K output tokens per task (14% more than K3) and Highspeed's 2× price are the only drags.
- **Overall Score: 91/100.** Mean of the five quality dims (92 + 90 + 95 + 86 + 92 = 455 / 5); best fit is high-volume agentic coding and financial/document workflows where near-frontier quality at $2/$10 dominates.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-30
- Method: public internet research across Moonshot's tech blog, API platform docs and pricing page, Artificial Analysis launch analysis and model pages, OpenRouter's benchmark panel, Vals AI / Epoch / LiveBench aggregates, plus independent commentary (novcog, Promptwire, simonwillison.net, aimlapi) to separate shipped weights from promises; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K3.1 Pro Tech Blog: Advancing Open Intelligence](https://www.kimi.ai/blog/kimi-k3-1-pro)
  - [Kimi API Platform — K3.1 Pro quickstart (context, reasoning effort, caching)](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart)
  - [Kimi K3.1 Pro pricing (standard + Highspeed)](https://www.kimi.ai/resources/kimi-k3-1-pro-pricing)
  - [Artificial Analysis — Kimi K3.1 Pro launches at 4th on the Intelligence Index](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks)
  - [OpenRouter — Kimi K3.1 Pro benchmarks](https://openrouter.ai/moonshotai/kimi-k3.1-pro)
  - [OpenLM.ai — Kimi K3.1 architecture and full benchmark table](https://openlm.ai/kimi-k3.1/)
  - [Simon Willison — Introducing Kimi K3.1 Pro](https://simonwillison.net/2026/oct/23/kimi-k31-pro/)
  - [Novcog — Kimi K3.1 Pro: Near the Frontier, and Its Weights Are Still a Promise](https://k31pro.novcog.us.com/)
  - [Apex Logic — K3.1 Pro API pricing, weights date, setup](https://www.apex-logic.net/news/kimi-k3-1-pro-api-open-weights-2026)

---
