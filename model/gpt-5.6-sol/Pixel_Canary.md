# GPT-5.6 Sol — findings by Pixel Canary

- Source: OpenAI / GPT-5.6 Sol (`gpt-5.6-sol`, routers list `openai/gpt-5.6-sol`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol — the "Sol" tier of OpenAI's GPT-5.6 family (Sol / Luna / Terra), positioned for coding, knowledge work, cybersecurity and science.
- **Short description:** Mid-2026 OpenAI flagship below GPT-6 Astra; still the most broadly measured model in the tracker (100% coverage, 45 benchmark families). Distinct from GPT-6 Sol (a different, weaker model).
- **Provider / access:** OpenAI API (Responses API, ID `gpt-5.6-sol`), Azure/Databricks (`databricks-gpt-5-6-sol`), ZenMux, Merge Gateway, Vivgrid, Neon (`gpt-5-6-sol`), SAP AI Core, Xpersona — 39 tracked offerings.
- **Release / knowledge:** released 2026-07-09; knowledge cutoff 2026-02-16 (LLMBoard specification block).
- **IDs:** `gpt-5.6-sol`, `openai/gpt-5.6-sol`, `databricks-gpt-5-6-sol`, `gpt-5-6-sol`. No Free ID on Zen — paid only.
- **Context window:** 1.1M input / 128K max output tokens (LLMBoard runtime table: Max Input 1.1M, Max Output 128K).
- **Modalities:** text + image in; text out. Tool use yes (evaluated with tools on MMMU-Pro, Search-augmented arena rows); computer-use/terminal work covered by DeepSWE and internal debugging evals. No audio/video input, no generation.
- **Pricing (as of 2026-09-27):** official OpenAI $4 / 1M input, $20 / 1M output; most routers pass through $5 / $30; cheapest tracked route $1.50 / $12 (Xpersona). Cached-input discount not published for this ID (no verified public figure). Paid only.
- **Architecture:** proprietary, parameters undisclosed, closed weights.

### Raw benchmarks found

> All rows from LLMBoard's GPT-5.6 Sol profile (updated 2026-09-26/27); "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **89.0** with **100% coverage / 45 families**.

Agent / tool use:

- LM Arena Search: **1257.26** rating (#1/28); Search Style Control **1255.76** (#1); Search Factuality **1247.52** (#1)
- DeepSWE: **72.70%** (#1/13) — end-to-end software engineering agent
- Internal Research Debugging Evaluation: **68.30%** (#1/3)
- Management Consulting Tasks (internal): **43.20%** (#1/3); Big Finance Bench **53.00%** (#1/3)
- GDPval-AA, Terminal-Bench 2.1 / 4.0, τ²-Bench, OSWorld 2.0, Claw-Eval, Toolathon, MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **59** (#1/8 in the tracker's AA pool — tracker reports it as "59.00%")
- FrontierMath: **89.00%** (#1/17)
- HealthBench Consensus: **95.50%** (#1/4); MedChemBench (internal) **48.30%** (#1/3)
- Capture-the-Flag Challenges (internal): **96.70%** (#1/3); RSI Index **57.90%** (#1/3)
- MMMU-Pro (with tools): **84.60%** (#1/4) — the only vision-modality evidence
- GPQA Diamond / HLE / CritPt / Omniscience for this ID: no verified public score found

Coding:

- DeepSWE: **72.70%** (#1/13)
- KernelGen 1P (GPU kernel generation): **61.10%** (#1/3)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified public score found on the pages consulted

Long context:

- GraphWalks BFS >128k: **90.70%** (#1/11)
- GraphWalks BFS at 1M: **77.10%** (#1/3) — the only 1M-length retrieval/needle-style number verified for this ID

Runtime: **35.3 tok/s**, **9.21 s** catalog latency (OpenAI) — mid-pack for a frontier thinker.

### Normalized scores (1–100)

- **Tool use: 88/100.** DeepSWE 72.70% (#1/13), Internal Research Debugging 68.30% and #1 LM Arena Search rows (1257.26) prove dependable multi-step tool loops; capped by GDPval-AA / Terminal-Bench / OSWorld being unpublished for this ID.
- **Reasoning: 92/100.** AA Intelligence Index 59 (#1/8) with FrontierMath 89.00% and HealthBench 95.50% is close to the 2026 frontier; capped by missing GPQA/HLE/Omniscience numbers so factual-reliability claims rest on Search Factuality only.
- **Context window: 94/100.** 1.1M input / 128K output **and** measured retrieval at that length (GraphWalks 90.70% >128k, 77.10% at 1M, both #1) — the strongest verified long-context case in the dataset.
- **Multimodal: 74/100.** Text + image input only, with MMMU-Pro (with tools) 84.60% as the single vision datapoint; no audio, video, PDF-native input or any generation modality.
- **Coding: 90/100.** DeepSWE 72.70% (#1/13) plus KernelGen 1P 61.10% covers repo-scale and systems coding; capped by the absence of SWE-bench Verified / LiveCodeBench for this ID.
- **Cost efficiency: 74/100.** $4 / $20 official with a $1.50 / $12 router floor and no published cache discount or free tier — roughly half GPT-6 Astra's price for ~89 vs ~96 tracker score.
- **Overall Score: 87.6/100.** Half-up mean of (88 + 92 + 94 + 74 + 90) = 438 / 5 = 87.6, Cost excluded. Best fit: long-context code-and-research agents that need verified 1M-token retrieval at half the flagship price.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. provider pricing and runtime tables); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
