## Qwen3 Max

- **Name:** Qwen3 Max
- **Short description:** Alibaba's proprietary flagship model in the Qwen 3 family. 1M context window, reasoning model. Positioned as top-tier proprietary offering.
- **Provider / access:** Alibaba (proprietary) — available via Alibaba Cloud Model Studio, DashScope API. Not open-weight.
- **Release / knowledge:** 2026 release (Qwen 3 family); knowledge cutoff not explicitly stated.
- **IDs:** `qwen3-max` (Alibaba Cloud), proprietary API endpoints.
- **Context window:** 1,048,576 tokens (1M).
- **Modalities:** Text in / text out only (proprietary Max tier typically text-only reasoning).
- **Pricing:** Proprietary API pricing; Max tier typically premium. Exact pricing not publicly listed in benchmarks.

### Raw benchmarks found
- **BenchLM Overall Score:** 39.57/100 (#143 of 959, partial coverage 12/666 benchmarks).
- **Tau2-Bench:** 74.3% (Artificial Analysis).
- **Gert Labs:** 43.74% (Gert Labs rankings).
- **Vibe Code Bench:** 3.51% (Vals AI v1.1).
- **AA-LCR:** 50.0% (Artificial Analysis).
- **CritPt:** 0.0% (Artificial Analysis).
- **AA Intelligence Index:** 15.6% (Artificial Analysis).
- **AA-GPQA Diamond:** 76.4% (Artificial Analysis).
- **AA-HLE:** 11.9% (Artificial Analysis).
- **AA-Omniscience Index:** -43.5% (Artificial Analysis).
- **AA-Omniscience Accuracy:** 24.4% (Artificial Analysis).
- **AA-Omniscience Hallucination Rate:** 89.9% (Artificial Analysis).
- **AA-IFBench:** 44.1% (Artificial Analysis).
- **Terminal-Bench / DeepSWE / SWE-Bench / SWE-Atlas / LiveCodeBench / GPQA / HLE / MMLU-Pro / FrontierMath / MMMU / MCP Atlas / AutomationBench / GDPval / OSWorld:** Not reported on BenchLM/Artificial Analysis for Qwen3 Max specifically.
- **Claw-Eval:** Not reported.
- **Cost per task / speed:** Proprietary API; no public cost-per-task data.

### Normalized scores (1–100)
- **Tool use: 55/100.** Tau2-Bench 74.3% (strong, frontier ~75%+), Gert Labs 43.7% (mid). No Terminal-Bench, MCP Atlas, AutomationBench, GDPval, OSWorld, BrowseComp. Strong on Tau2 but missing broader agentic scaffolding.
- **Reasoning: 58/100.** AA-GPQA Diamond 76.4% (frontier 90%+ → ~65), AA-HLE 11.9% (frontier 40%+ → ~20), AA-LCR 50% (frontier 95%+ → ~40), CritPt 0% (very low), AA Intelligence Index 15.6% (low), AA-Omniscience Index -43.5% (negative = more incorrect than correct). Knowledge/reasoning mixed; long-context and physics reasoning weak.
- **Context window: 100/100.** 1M context window confirmed.
- **Multimodal: 15/100.** Text-only model (no image, video, audio input or output).
- **Coding: 35/100.** Vibe Code Bench 3.51% (very low). No SWE-Bench, LiveCodeBench, DeepSWE, SWE-Atlas, AA Coding Index. Coding appears very weak for a Max-tier model.
- **Cost efficiency: 50/100.** Proprietary Max tier — typically premium pricing. No public pricing to normalize; estimated high-cost for proprietary flagship.
- **Overall Score: 53/100.** Mean of (55 + 58 + 100 + 15 + 35) / 5 = 53.