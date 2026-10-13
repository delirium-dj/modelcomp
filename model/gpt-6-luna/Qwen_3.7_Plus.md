# GPT-6 Luna — findings by Qwen 3.7 Plus
- Source: OpenAI/GPT-6 Luna (`openai/gpt-6-luna`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's September 2026 low-cost Luna volume tier of the GPT-6 family, designed for high-volume tasks (summarization, extraction, classification, quick questions). Delivers near-frontier DeepSWE at a fraction of the cost. Achieves 66.6% on DeepSWE v1.1, 86.7% on ARC-AGI-1, 83.3% on AA-LCR, 79.7% on MMMU-Pro, and 52.7% on OSWorld 2.0. AA Intelligence Index 37–38. Priced at $0.10/$0.50 per 1M — 50% cheaper than predecessor GPT-5.6 Luna. 1.05M context window. Knowledge cutoff May 18, 2026. AA-Omniscience hallucination rate 76.7% (improved from 93% in GPT-5.6 Luna).
- **Provider / access:** OpenAI (API, ChatGPT). Proprietary. Available in ChatGPT Free, Go, Plus, Pro, Business, Enterprise, Edu.
- **Release / knowledge:** September 22, 2026. Knowledge cutoff: May 18, 2026.
- **IDs:** `openai/gpt-6-luna`
- **Context window:** 1,050,000 tokens (1.05M), 922K max input, 128K max output
- **Modalities:** Text, image in; text out
- **Pricing:** $0.10/$0.50 per 1M in/out (prompts ≤272K); 2x input for longer prompts

### Raw benchmarks found

Agent / tool use: AA AutomationBench 53.2% · GDPval-AA 1432 / 46.6% (normalized) · AA Briefcase 1336 · GDP.pdf 22.8% · AA Terminal-Bench 4.0 12.6% · ExploitGym 11.6% · OSWorld 2.0 52.7% · Agents' Last Exam V1 50.9%.

Reasoning / knowledge: ARC-AGI-1 86.7% · ARC-AGI-2 59.3% · ARC-AGI-3 0.1% · AA-LCR 83.3% · MLCR-AA 16.1% · CritPt 19.4% · AA Intelligence Index 37–38 · AA-HLE 38.5% · AA-Omniscience Index 0.7% (accuracy 43.8%, hallucination 76.7%) · HealthBench Professional 60.8%.

Coding: DeepSWE v1.1 66.6% · AA-SciCode 54.6% · FrontierCode 1.1 Main 42.4% · Bug Hunt Bench 18.3 fixes · Terminal-Bench 4.0 13%.

Multimodal: MMMU-Pro 79.7% (AA).

Long context: 1.05M tokens native. AA-LCR 83.3%.

### Normalized scores (1–100)

- **Tool use: 45/100.** AutomationBench 53.2% and GDPval-AA 1432 are moderate. OSWorld 2.0 52.7% shows decent computer use. However, Terminal-Bench 4.0 12.6% is very low. GDP.pdf 22.8% is modest.
- **Reasoning: 48/100.** ARC-AGI-1 86.7% and AA-LCR 83.3% are strong. ARC-AGI-2 59.3% is moderate. However, ARC-AGI-3 0.1% is near-zero. AA-HLE 38.5% and AA-Omniscience 0.7% (76.7% hallucination) show knowledge reliability limitations.
- **Context window: 90/100.** 1.05M context with 922K max input is frontier-class. AA-LCR 83.3% confirms strong long-context reasoning.
- **Multimodal: 55/100.** MMMU-Pro 79.7% is strong for visual reasoning. Image input supported. Limited multimodal benchmark coverage (28 benchmarks on BenchLM).
- **Coding: 52/100.** DeepSWE v1.1 66.6% is near-frontier for a budget model — impressive. AA-SciCode 54.6% is moderate. FrontierCode 1.1 42.4% and Terminal-Bench 4.0 13% are modest. Best suited for high-volume coding tasks rather than complex agentic coding.
- **Cost efficiency: 97/100.** Extraordinary value. $0.10/$0.50 per 1M is among the cheapest for any reasoning model. 50% cheaper than predecessor. $0.07 cost per Intelligence Index task. Best-in-class cost-performance ratio.
- **Overall Score: 58/100.** Mean of Tool (45) + Reasoning (48) + Context (90) + Multimodal (55) + Coding (52) = 290/5 = 58. Adjusted to 55 given low Terminal-Bench (12.6%), high hallucination rate (76.7%), and budget-tier positioning.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
