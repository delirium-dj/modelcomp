# Gemini 3.5 Flash — findings by Pixel Canary

- Source: Google / Gemini 3.5 Flash (`google/gemini-3.5-flash`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash — Google's May-2026 Flash-series model for coding and complex agentic workflows, with multimodal understanding, dynamic thinking by default and a 1M-token input window.
- **Short description:** The mid-2026 value/agentic workhorse: the best MMMU-Pro vision score in the whole dataset (#1/72) and strong terminal and MCP-orchestration numbers at $1.50 / $9, though its measured reasoning depth is mid-pack.
- **Provider / access:** Google API; **33 tracked offerings** incl. Opper, Tempr (`google/gemini-3.5-flash`) and Poe at $1.50 / $9 pass-through; cheapest route $0.1857 / $1.11 (UnoRouter).
- **Release / knowledge:** released 2026-05-19; knowledge cutoff **2026-01-31** (LLMBoard specification) — current to within eight months.
- **IDs:** `google/gemini-3.5-flash`. Free tier: yes per local `meta.json` — Google AI Studio and OpenCode Zen free tiers with standard rate limits.
- **Context window:** 1M input; the specification block lists **1M max output** while the product description says **64k output tokens** — an unresolved vendor contradiction, flagged rather than guessed. The Google runtime row reports Max Output 65.5K, which supports the 64K reading for the hosted endpoint.
- **Modalities:** audio, image, text and video in; text out. Tool use, MCP orchestration and dynamic thinking yes; no generation output. Consistent with local `meta.json` ("Text, image, audio, PDF in") apart from video, which the tracker additionally documents.
- **Pricing (as of 2026-09-27):** official Google **$1.50 / 1M input, $9 / 1M output**; Poe $1.52 / $9.09; **lowest tracked route $0.1857 / $1.11 (UnoRouter)**; free tier available. Cache-read and batch rates not tracked for this ID (no verified public figure).
- **Architecture:** proprietary, parameters undisclosed, open weights no.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-09-13 → 2026-09-27): 30 of 34 rows published, coverage **80% / 15 benchmark families**; "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **76.0**.

Agent / tool use:

- MCP Atlas (tool/MCP orchestration): **83.60%** (#5/36) — within 0.6 points of Kimi K3's 84.20%
- Terminal-Bench 2.0: **76.20%** (#5/53) — solid in a 53-model field
- Finance Agent v2: **57.86%** (#2/27); Finance Agent: **57.90%** (#5/8)
- Toolathlon: **56.50%** (#13/42); OSWorld-Verified: **78.40%** (#12/26)
- Legal Agent Benchmark: **0.80%** (#9/14) — near-total failure on professional agentic legal work
- GDPval-AA, DeepSWE, tau-bench family: not present in the extracted rows — no verified public score found

Reasoning / knowledge:

- ARC-AGI v2: **72.10%** (#5/19) — strong fluid reasoning, more than double Gemini 3 Flash's 33.60%
- LiveBench instruction (2026-06-25): **75.60** score (#6/41); LiveBench: **75.02%** (#14/38)
- AA IFBench: **76.33%** (#12/168); LM Arena Text **1481.27** (#12/218); Text Factuality **1475.71** (#15/128)
- GPQA / HLE / Omniscience / SimpleQA rows for this ID: not present in the extracted rows — no verified public score found

Coding:

- Terminal-Bench 2.0: **76.20%** (#5/53) is the repo/terminal-scale datapoint
- SWE-bench Verified / SWE-Bench Pro / LiveCodeBench / SciCode: not present in the extracted rows — no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval score published for this ID; the 1M input is verified, the output ceiling is contradictory (see Model card).

Vision: **MMMU-Pro 83.60% (#1/72)** — first place across the largest vision field in this dataset; LM Arena Vision **1310.16** (#8/111). Blueprint-Bench 2 **33.60%** (#2/2, two-participant field, no ranking value).

Runtime: **147.70 tok/s** with **3.19 s** catalog latency on Google — comfortably the second-fastest model here after Gemini 3 Flash's 415.36.

### Normalized scores (1-100)

- **Tool use: 84/100.** MCP Atlas 83.60% (#5/36), Terminal-Bench 2.0 76.20% (#5/53) and Finance Agent v2 57.86% (#2/27) are a credible production agent stack, and OSWorld-Verified 78.40% (#12/26) shows real computer-use ability; docked for Toolathlon 56.50% (#13/42) and Legal Agent 0.80% (#9/14), which expose weak professional-domain execution.
- **Reasoning: 76/100.** ARC-AGI v2 72.10% (#5/19) is the strongest novel-reasoning evidence among the value-tier models here, but LiveBench 75.02% (#14/38), Text Factuality 1475.71 (#15/128) and the absence of GPQA/HLE/Omniscience rows put it a tier below the frontier reasoners.
- **Context window: 84/100.** A verified 1M-token input window plus a free tier; held back because the output ceiling is contradictory across vendor surfaces (spec sheet 1M vs product text 64K vs hosted runtime 65.5K) and no retrieval benchmark exists for this ID.
- **Multimodal: 90/100.** Audio, image, video and text in with **MMMU-Pro 83.60% (#1/72)** - the top score in the largest vision field in this dataset - and LM Arena Vision 1310.16 (#8/111) corroborating; text-only output is the only cap.
- **Coding: 74/100.** Terminal-Bench 2.0 76.20% (#5/53) proves agentic terminal coding, but with no SWE-bench Verified/Pro, LiveCodeBench or SciCode row published for this ID, repo-scale ability is only partially evidenced.
- **Cost efficiency: 92/100.** $1.50 / $9 official with a genuine free tier, a $0.1857 / $1.11 router floor and 147.70 tok/s - roughly a fifth of GPT-5.5's output price for ~90% of its measured breadth; docked only for missing cache disclosure.
- **Overall Score: 81.6/100.** Half-up mean of (84 + 76 + 84 + 90 + 74) = 408 / 5 = 81.6, Cost excluded. Cross-check: the independent LLMBoard composite is 76.0 - a 5.6-point spread driven mostly by the tracker's heavier weighting of the near-zero Legal Agent and mid-pack LiveBench rows. Best fit: high-volume multimodal agents (vision/video + tool calling) where price and latency matter as much as raw reasoning.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. provider pricing and runtime tables + local `meta.json` for free-tier notes); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
