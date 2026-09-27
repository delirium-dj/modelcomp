# GPT-5.6 Terra — findings by Pixel Canary

- Source: OpenAI / GPT-5.6 Terra (`openai/gpt-5.6-terra`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra — the cost-balanced tier of OpenAI's GPT-5.6 family (Sol / Luna / Terra), described as the "5.6 for workloads that weigh intelligence against cost".
- **Short description:** The best-measured value model in the dataset: 100% benchmark coverage (45 families) at $2 / $12, scoring close to GPT-5.6 Sol for roughly half the output price. Distinct from GPT-5.6 Sol (LLMBoard 89.0) and from GPT-6 Sol.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`); Amazon Bedrock (`openai.gpt-5.6-terra`), Databricks (`databricks-gpt-5-6-terra`), ZenMux (`openai/gpt-5.6-terra`), Cortecs, AI-ROUTER, Vivgrid — 38 tracked offerings.
- **Release / knowledge:** released 2026-07-09; knowledge cutoff 2026-02-16 (LLMBoard specification block) — four months staler than Claude Opus 5.5's Jun-2026 cutoff.
- **IDs:** `openai/gpt-5.6-terra`, `gpt-5.6-terra`, `openai.gpt-5.6-terra`, `databricks-gpt-5-6-terra`. No Free ID — paid only.
- **Context window:** 1.1M input / 128K max output tokens (LLMBoard runtime row for OpenAI: Max Input 1.1M, Max Output 128K).
- **Modalities:** LLMBoard's specification block records **image + text in, text out**; the local `meta.json` claims "Text, image, audio, video, PDF in" — these conflict, and no audio/video/PDF benchmark was found to corroborate the wider claim, so the conservative text + image reading is used for scoring. Tool use and function calling yes (Search and Function-Calling, DeepSWE, Connectors all tool-augmented); no generation modalities.
- **Pricing (as of 2026-09-27):** official OpenAI $2 / 1M input, $12 / 1M output; Bedrock and Cortecs $2.20 / $13.20; Databricks, ZenMux, AI-ROUTER, Vivgrid $2.50 / $15.00. The tracker's "lowest third-party" line reads $1.50 / $2.00 (Xpersona) — the $2.00 output figure is anomalous against every other provider and is treated as unreliable. Cache-read and batch rates not published for this ID (no verified public figure).
- **Architecture:** proprietary, parameters undisclosed, open weights no.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-09-27): 30 of 69 rows published, coverage **100% / 45 benchmark families** — the deepest evidence base in the cohort; "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **82.0**.

Agent / tool use:

- Search and Function-Calling: **94.60%** (#1/3); Connectors: **100.00%** (#1/3)
- DeepSWE: **69.60%** (#2/13) — end-to-end software engineering agent, just behind GPT-5.6 Sol's 72.70%
- Internal Research Debugging Evaluation: **67.80%** (#2/3); Management Consulting Tasks (internal): **37.20%** (#2/3)
- Capture-the-Flag Challenges (internal): **91.80%** (#2/3); ExploitGym **23.20%** (#3/8)
- GDPval-AA, OSWorld 2.0, Terminal-Bench, tau-bench family, MCP Atlas: no verified public score found in the extracted rows

Reasoning / knowledge:

- FrontierMath: **84.90%** (#2/17); FrontierMath Tier 4 (v2): **68.30%** (#3/4)
- RSI Index: **56.30%** (#2/3); MedChemBench (internal) **35.00%** (#2/3); Big Finance Bench **51.00%** (#2/3)
- GeneBench-Pro: **23.30%** (#3/4)
- GPQA / HLE / Omniscience rows for this ID: not present in the extracted rows — no verified public score found

Coding:

- DeepSWE: **69.60%** (#2/13)
- KernelGen 1P (GPU kernel generation): **49.20%** (#2/3) — well behind GPT-5.6 Sol's 61.10%
- PostTrainBench Lite: **51.50%** (#1/3); NanoGPT (NN implementation): **14.50%** (#1/3)
- SWE-bench Verified / SWE-Bench Pro / LiveCodeBench: no verified public score found

Long context:

- GraphWalks BFS at 1M: **71.20%** (#2/3) — measured needle-navigation performance at full 1.1M length (GPT-5.6 Sol manages 77.10%).

Runtime: **51.42 tok/s** with **4.91 s** catalog latency on OpenAI — the lowest first-token latency measured in this cohort.

### Normalized scores (1-100)

- **Tool use: 88/100.** Search and Function-Calling 94.60% (#1/3), Connectors 100.00% (#1/3) and DeepSWE 69.60% (#2/13) show dependable multi-step tool loops, and Internal Research Debugging 67.80% (#2/3) is near Sol's 68.30%; capped because GDPval-AA, OSWorld and Terminal-Bench are absent for this ID and most fields are only 3 models deep.
- **Reasoning: 86/100.** FrontierMath 84.90% (#2/17) and Capture-the-Flag 91.80% (#2/3) are close-to-frontier, but FrontierMath Tier 4 68.30%, MedChemBench 35.00% and GeneBench-Pro 23.30% show the ceiling drops off fast, with no GPQA/HLE row to test factual reliability.
- **Context window: 90/100.** 1.1M input / 128K output **with** a measured GraphWalks BFS-at-1M of 71.20% (#2/3) - verified long-range navigation, though 5.9 points below GPT-5.6 Sol on the same test.
- **Multimodal: 70/100.** On the evidence available it is text + image in / text out (the local `meta.json` claim of audio, video and PDF input is uncorroborated by any published benchmark), and no vision benchmark row exists for this ID - image skill is assumed rather than measured.
- **Coding: 82/100.** DeepSWE 69.60% (#2/13) is a strong end-to-end result, but KernelGen 1P 49.20% (#2/3), PostTrainBench Lite 51.50% and NanoGPT 14.50% are thin, and no SWE-bench Verified/Pro number exists for this ID.
- **Cost efficiency: 92/100.** $2 / $12 official with 51.42 tok/s, 4.91 s latency and 38 competing providers - about half GPT-5.6 Sol's output price for ~92% of its composite; docked only for missing cache/batch disclosure and no free tier.
- **Overall Score: 83.2/100.** Half-up mean of (88 + 86 + 90 + 70 + 82) = 416 / 5 = 83.2, Cost excluded. Cross-check: the independent LLMBoard composite is 82.0, within 1.5 points. Best fit: high-volume agentic search and software-engineering loops that need verified 1M-token context at half the flagship price.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. provider pricing and runtime tables + local `meta.json` for modality/free-tier notes, with the modality conflict documented above); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
