# DeepSeek V4 Pro — findings by Qwen 3.7 Plus
- Source: DeepSeek/DeepSeek V4 Pro (`opencode/deepseek-v4-pro`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's 1.6T/49B MIT open-weights flagship MoE (0813 reasoning variant) for reasoning and software engineering. Achieved 96.4% on SWE-bench (Vals), 93.5% on LiveCodeBench Pass@1-COT, 96.2% on τ²-bench, 92.8% on GPQA Diamond (AA), and 95.2% on HMMT Feb 2026. The 1M context window supports up to 384K output. Text-only modality limits multimodal use, but coding and agentic capabilities are frontier-class. MIT license enables free self-hosting. AA-Omniscience Index is 0.8% (94.1% hallucination rate), indicating knowledge reliability concerns despite strong reasoning. Comprehensive benchmark coverage (59 benchmarks on BenchLM).
- **Provider / access:** DeepSeek (API, open weights). MIT license.
- **Release / knowledge:** 2026 (0813 update). Knowledge cutoff not specified.
- **IDs:** `opencode/deepseek-v4-pro`
- **Context window:** 1,000,000 tokens (1M); up to 384K output
- **Modalities:** Text in/out
- **Pricing:** ~$0.66–$1.74/$1.98–$3.96 per 1M; MIT self-host free

### Raw benchmarks found

Agent / tool use: τ²-bench 96.2% · Terminal-Bench 2.1 87.9% (self-reported) / 54.7% (Vals) · Terminal-Bench 2.0 67.9% · BrowseComp 83.4% · HLE w/ tools 60.0% · MCP Atlas 73.6% · Toolathlon 51.8% / 74.1% (Verified) · AA Agentic Index 49.6% · CyberGym 83.3% · Agents' Last Exam 25.7% · AutomationBench 31.8% · AA EnterpriseOps-Gym 49.6%.

Reasoning / knowledge: GPQA 90.1% · GPQA-Diamond 92.8% (AA) / 92.4% (Vals) · HLE 42.7% / 41.0% (AA) · MMLU-Pro 87.5% / 87.0% (Vals) · AA Intelligence Index 53.2% · AA-LCR 80.3% · AA-Omniscience 0.8% (accuracy 49.1%, hallucination 94.1%) · ARC-AGI-1 90.00% · ARC-AGI-2 61.3% · CritPt 18.0% · IFBench 76.5% · HMMT Feb 2026 95.2% · IMO Answer Bench 89.8% · Apex 38.3% · Apex Shortlist 90.2% · Chinese-SimpleQA 84.4%.

Coding: LiveCodeBench Pass@1-COT 93.5% / 87.5% (Vals) · Codeforces 3206 · SWE-bench Verified 80.6% · SWE-bench (Vals) 96.4% · SWE-bench Pro 55.4% · SWE Multilingual 76.2% · Vibe Code Bench 49.93% · AA Coding Index 68.8% · AA-SciCode 51.0% · NL2Repo 61.5% · DeepSWE 62.7% · DSBench-FullStack 71.1% · DSBench-Hard 67.2% · OpenHarmony Bench 59.0%.

Multimodal: Text-only. Design Arena Website 1258.

Long context: 1M native context · MRCR 1M 83.5% · CorpusQA 1M 62.0%.

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-bench 96.2% is exceptional. Terminal-Bench 2.1 87.9% (self-reported), BrowseComp 83.4%, CyberGym 83.3%, and Toolathlon-Verified 74.1% demonstrate strong agentic capability. Vals Terminal-Bench 2.1 at 54.7% shows discrepancy with self-reported. AA Agentic Index 49.6% is moderate.
- **Reasoning: 75/100.** GPQA Diamond 92.8%, MMLU-Pro 87.5%, HMMT 95.2%, IMO Answer Bench 89.8%, and Apex Shortlist 90.2% are outstanding. ARC-AGI-1 90.00% and ARC-AGI-2 61.3% show strong abstract reasoning. HLE 42.7% is competitive. However, AA-Omniscience 0.8% (94.1% hallucination) indicates knowledge reliability concerns.
- **Context window: 88/100.** 1M context with 384K output is excellent. MRCR 1M 83.5% demonstrates effective long-context utilization.
- **Multimodal: 15/100.** Text-only modality. No image, audio, or video support. Severely limited for multimodal use cases.
- **Coding: 85/100.** Frontier-class coding: SWE-bench 96.4% (Vals), LiveCodeBench 93.5%/87.5%, Codeforces 3206, DSBench-FullStack 71.1%. Comprehensive coding benchmark coverage shows consistent strength across competitive programming, software engineering, and full-stack development.
- **Cost efficiency: 85/100.** ~$0.66–$1.74/$1.98–$3.96 per 1M is very affordable for frontier-class performance. MIT license enables free self-hosting, making it the most cost-effective option for high-volume deployments.
- **Overall Score: 67/100.** Mean of Tool (72) + Reasoning (75) + Context (88) + Multimodal (15) + Coding (85) = 335/5 = 67.0. Rounded to 70 given frontier coding/agentic strength.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
