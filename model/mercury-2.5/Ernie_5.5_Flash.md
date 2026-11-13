# Mercury 2.5 — findings by Ernie 5.5 Flash

- Source: Inception Labs (`mercury-2.5`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5 (Inception Mercury 2.5)
- **Short description:** Inception Labs' diffusion LLM (dLLM) that generates tokens in parallel and refines them, built for very high output speed (~1,100 tokens/s) with parallel tool calls; billed as the largest diffusion language model trained to date and roughly a 40% intelligence gain over Mercury 2.
- **Provider / access:** Inception Labs API (`mercury`, `mercury-2.5`), Inception chat, plus third-party hosts (CloudPrice lists 3 providers); proprietary weights.
- **Release / knowledge:** 2026-09-08 (a 2.5 Preview existed 2026-08-31); knowledge cutoff not published.
- **IDs:** `inception/mercury-2.5`, `mercury-2.5`
- **Context window:** 260,000 tokens (BenchLM / CloudPrice / SurfMind).
- **Modalities:** text in / text out; reasoning type "reasoning" per BenchLM; parallel tool calls supported.
- **Pricing (as of 2026-11-12):** from $0.04 / 1M input tokens (CloudPrice, discounted launch pricing); Inception also advertises discounted API pricing at launch.
- **Architecture:** proprietary diffusion LLM (iterative denoising, parallel token generation); no parameter count published.

### Raw benchmarks found

Agent / tool use:

- τ³-bench: **96.0%** (vendor launch chart — Inception's headline agentic result)
- Terminal-Bench 2.1 (Vals AI independent run): **34.5%**
- DeepSearchQA: **34.0%** (vendor) · GDPval-AA: **0.0%** normalized / **588 Elo** on the AA scale (independent AA run)
- Tau3-Banking / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **79.0%** (vendor chart)
- HLE: **11.8%** (AA independent run)
- AA-LCR: **68.0%** (vendor chart) · CritPt: **0.0%** (AA)
- IFBench: **77%** (vendor chart)
- AA-Omniscience: accuracy **22.0%**, hallucination rate **67.0%**
- Artificial Analysis Intelligence Index: **not carried numerically** in the sources found (BenchLM overall 33.69/100, rank #164 of 1026)

Coding:

- SciCode: **38.0%** (vendor chart) · AA-SciCode: **38.5%** (independent run)
- SWE-bench Verified / SWE-Pro / LiveCodeBench: **no verified public score found**

Long context:

- AA-LCR 68.0% is the only long-context figure; no MRCR/RULER table for the 260K window.

### Normalized scores (1–100)

- **Tool use: 60/100.** τ³-bench 96.0% is an excellent agentic result, but it is vendor-run and contradicted by an independent Terminal-Bench 2.1 of 34.5% and a 588-Elo GDPval-AA; the split verdict lands mid-band.
- **Reasoning: 58/100.** GPQA-D 79.0 and AA-LCR 68.0 are strong, but HLE 11.8%, CritPt 0.0% and a 67% hallucination rate pull it down; the diffusion design trades depth for latency.
- **Context window: 74/100.** 260,000 tokens, inside the 200K–500K band; AA-LCR 68.0 is decent but not enough for a higher band.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 45/100.** SciCode 38.0 / AA-SciCode 38.5% is weak for a flagship; no SWE-bench Verified or LiveCodeBench row exists.
- **Cost efficiency: 97/100.** Sub-$0.10/1M input launch pricing plus ~1,100 tok/s output makes it one of the cheapest fast routes; not counted toward Overall.
- **Overall Score: 50/100.** Mean of tool use 60, reasoning 58, context 74, multimodal 15, coding 45. Best fit: latency-critical, high-volume text work (classification, extraction, code completion at the endpoint, real-time agents) where speed dominates; the hallucination rate rules out unsupervised factual work.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (BenchLM's Inception-sourced and independent rows, Vals AI Terminal-Bench leaderboard, CloudPrice/SurfMind pricing, Inception launch coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Mercury 2.5 (13 benchmark rows, sources labelled)](https://benchlm.ai/models/mercury-2-5)
  - [Vals AI — Terminal-Bench 2.1 (Mercury 2.5 independent run)](https://www.vals.ai/models/inception_mercury-2.5)
  - [Artificial Analysis — Mercury 2.5](https://artificialanalysis.ai/models/mercury-2-5)
  - [Inception — Introducing Mercury 2.5 (launch chart)](https://www.inceptionlabs.ai/blog/introducing-mercury-2-5)
  - [SurfMind — Mercury 2.5 (260K, ~1,107 tok/s)](https://surfmind.ai/models/inception/mercury-2.5)
  - [CloudPrice — Mercury 2.5 pricing](https://cloudprice.net/models/inception-mercury-2-5)