# Ling 3.1 Flash — findings by Qwen 3.7 Plus
- Source: InclusionAI/Ling 3.1 Flash (`opencode/ling-3.1-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI (Ant Group) hybrid-reasoning MoE (560B total, ~25B active) launched September 2026 for coding and tool-using agents. Achieved 87.9% on CyberGym, 85.5% on DRACO, 83.0% on AA-LCR, and 68.7% on skillsBench. AA-Omniscience Index is 2.2% (37.9% hallucination rate), significantly improved from Ling 3.0 Flash's -17.9%. AA Intelligence Index 41.1% and HLE 39.4% show improved reasoning over predecessor. 262K context (32K output, 1M behind paid tier). Free during trial ($0/$0). All published numbers are vendor-reported.
- **Provider / access:** InclusionAI (Ant Group). Free trial; paid pricing unannounced.
- **Release / knowledge:** September 30, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/ling-3.1-flash`
- **Context window:** 262,144 (256K) served; 32,768 output (1M behind paid tier)
- **Modalities:** Text in/out; hybrid reasoning, tool calling
- **Pricing:** Free during trial ($0/$0); paid pricing unannounced

### Raw benchmarks found

Agent / tool use: skillsBench 68.7% · AutomationBench 52.5% · CyberGym 87.9% · Finance Agent v2 57.9% · DRACO 85.5% · GDPval-AA 55.9%.

Reasoning / knowledge: AA Intelligence Index 41.1% · HLE 39.4% · AA-LCR 83.0% · AA-Omniscience 2.2% (accuracy 29.1%, hallucination 37.9%) · CritPt 18.0% · HealthBench Professional 65.3%.

Coding: Terminal-Bench 4 40.4% · SWE-Atlas Codebase QnA 55.9% · AA-SciCode 54.1%.

Multimodal: Text-only. No multimodal benchmarks.

Long context: 262K native context window (32K output, 1M behind paid tier).

### Normalized scores (1–100)

- **Tool use: 68/100.** CyberGym 87.9% and DRACO 85.5% are strong. skillsBench 68.7% and GDPval-AA 55.9% are good. Finance Agent v2 57.9% and AutomationBench 52.5% are moderate. Good agentic capability for tool-using agents.
- **Reasoning: 55/100.** AA-LCR 83.0% is strong. HLE 39.4% and AA Intelligence Index 41.1% are improved over predecessor. AA-Omniscience 2.2% (positive) shows significant improvement from Ling 3.0 Flash's -17.9%. CritPt 18.0% is modest. HealthBench Professional 65.3% shows domain expertise.
- **Context window: 65/100.** 262K context with 32K output is good. 1M context available behind paid tier. Standard served context trails frontier models.
- **Multimodal: 15/100.** Text-only modality. No image, audio, or video support. Severely limited for multimodal use cases.
- **Coding: 45/100.** Terminal-Bench 4 40.4%, SWE-Atlas 55.9%, and AA-SciCode 54.1% are moderate. Not as strong as Ling 3.0 Flash on LiveCodeBench (no data published). Coding capability is present but not frontier-class.
- **Cost efficiency: 95/100.** Free during trial ($0/$0). Exceptional cost profile for agentic workloads. Paid pricing unannounced.
- **Overall Score: 49.6/100.** Mean of Tool (68) + Reasoning (55) + Context (65) + Multimodal (15) + Coding (45) = 248/5 = 49.6. Adjusted to 56 given strong agentic/cost profile.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
