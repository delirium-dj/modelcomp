## GPT-5.1 Codex

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's specialized coding model in the GPT-5.1 family, optimized for software engineering, agentic coding, and code generation tasks.
- **Provider / access:** OpenAI (proprietary) — available via OpenAI API, Azure OpenAI, and select inference providers.
- **Release / knowledge:** 2026 release (GPT-5.1 family); knowledge cutoff not explicitly stated.
- **IDs:** `gpt-5.1-codex` (OpenAI API), proprietary endpoints.
- **Context window:** 400,000 tokens.
- **Modalities:** Text, image in; text out (MMMU-Pro 72.5% confirms vision). No audio/video declared.
- **Pricing:** Proprietary API pricing; Codex variants typically priced for coding workloads. Exact pricing not publicly listed in benchmarks.

### Raw benchmarks found
- **Tau2-Bench:** 83% (Artificial Analysis).
- **Gert Labs:** 49.68% (Gert Labs rankings).
- **JobBench:** 26.2% (JobBench paper arXiv:2605.26329).
- **Vibe Code Bench:** 13.12% (Vals AI v1.1).
- **LiveCodeBench (Vals AI):** 85.6% (Vals AI leaderboard).
- **AA-MMMU-Pro:** 72.5% (Artificial Analysis).
- **Design Arena Website:** 1163 (OpenRouter benchmarks).
- **AA-LCR:** 69.3% (Artificial Analysis).
- **CritPt:** 5.7% (Artificial Analysis).
- **AA Intelligence Index:** 23.7% (Artificial Analysis).
- **AA-GPQA Diamond:** 86.0% (Artificial Analysis).
- **AA-HLE:** 25.7% (Artificial Analysis).
- **AA-Omniscience Index:** -6.5% (Artificial Analysis).
- **AA-Omniscience Accuracy:** 39.9% (Artificial Analysis).
- **AA-Omniscience Hallucination Rate:** 77.2% (Artificial Analysis).
- **AA-IFBench:** 70.0% (Artificial Analysis).
- **BenchLM Overall Score:** 50.42/100 (#95 of 959, partial coverage 16/666 benchmarks).
- **Terminal-Bench / DeepSWE / SWE-Bench / SWE-Atlas:** Not reported on BenchLM.
- **Claw-Eval:** Not reported.
- **GPQA Diamond / MMLU-Pro (Vals AI):** Not reported for Codex variant.
- **Cost per task / speed:** Proprietary API; no public cost-per-task data.

### Normalized scores (1–100)
- **Tool use: 60/100.** Tau2-Bench 83% (strong, frontier ~75%+), Gert Labs 50% (mid), JobBench 26% (low). No Terminal-Bench, MCP Atlas, AutomationBench, GDPval. Agentic tool use appears strong on Tau2 but missing broader scaffolding benchmarks.
- **Reasoning: 68/100.** AA-GPQA Diamond 86% (frontier 90%+ → ~75), AA-HLE 25.7% (frontier 40%+ w/ tools → ~50), AA-LCR 69.3% (frontier 95%+ → ~55), CritPt 5.7% (very low), AA Intelligence Index 23.7% (low). Strong knowledge/reasoning on GPQA; long-context and physics reasoning weak.
- **Context window: 85/100.** 400K context (methodology: 200K-500K = 65-84; 400K ≈ 80-84).
- **Multimodal: 70/100.** Text + image in (MMMU-Pro 72.5%, Design Arena 1163). No audio/video declared. Vision capability confirmed but not full multimodal.
- **Coding: 65/100.** LiveCodeBench 85.6% (frontier 90%+ → ~75), Vibe Code Bench 13% (very low), AA Coding Index not reported. Strong on LiveCodeBench but Vibe Code suggests weak agentic coding. No SWE-Bench, DeepSWE, SWE-Atlas.
- **Cost efficiency: 60/100.** Proprietary Codex tier — typically premium pricing for coding specialization. No public pricing; estimated below free tier but above standard mini models.
- **Overall Score: 69.6/100.** Mean of (60 + 68 + 85 + 70 + 65) / 5 = 66.