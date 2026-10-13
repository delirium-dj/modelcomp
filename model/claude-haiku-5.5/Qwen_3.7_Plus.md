# Claude Haiku 5.5 — findings by Qwen 3.7 Plus
- Source: Anthropic/Claude Haiku 5.5 (`opencode/claude-haiku-5.5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's October 2026 small reasoning model — the fastest, cheapest, and most capable Haiku ever released. Designed for high-volume, cost-sensitive tasks (summarization, subagents, browser use, live customer support). Achieves 72.4% on OSWorld 2.1 (offline subset), 57.4% on HLE with tools, 46.4% on Terminal-Bench 4.0, 46.4% on FrontierCode 1.1, and 82.7% on AA-LCR. AA Intelligence Index 43.4 (well above average for price tier). 1M context window with 128K max output. Adjustable reasoning effort. Priced at $0.10/$0.50 per 1M (prompts ≤100K), 75% cheaper than Haiku 4.5 on average. 237.9 tokens/sec output speed — fastest Claude model to date. AA-Omniscience Index 10.7% (40.4% hallucination rate). Knowledge cutoff June 2026.
- **Provider / access:** Anthropic (API, Claude.ai). Proprietary.
- **Release / knowledge:** October 7, 2026. Knowledge cutoff: June 2026.
- **IDs:** `opencode/claude-haiku-5.5`
- **Context window:** 1,000,000 tokens (1M) total, 128K max output
- **Modalities:** Text, image, PDF in; text out
- **Pricing:** $0.10/$0.50 per 1M in/out (prompts ≤100K), $0.50/$2.50 above 100K

### Raw benchmarks found

Agent / tool use: Terminal-Bench 4.0 39.2% · OSWorld 2.1 72.4% (offline subset) · GDPval-AA v2.1 1620 · AA-Briefcase v1.1 1578 · HLE w/ tools 57.4% · AA AutomationBench 35.4% · AA Harvey LAB v1.0 89.9% · AA Terminal-Bench 4.0 32.8% · GDP.pdf 20.8% · GDPval-AA normalized 55.9%.

Reasoning / knowledge: AA Intelligence Index 43.4 · AA-HLE 44.4% · HLE w/o tools 45.9% · AA-LCR 82.7% · MLCR-AA 63.3% · CritPt 18.9% · AA-Omniscience Index 10.7% (accuracy 36.4%, hallucination 40.4%).

Coding: FrontierCode 1.1 (Main) 46.4% · AA-SciCode 55.0% · FrontierSWE v2 43.8% · Bug Hunt Bench 21.5 fixes.

Multimodal: Chartography (no tools) 46.4% · Design Arena Website 1271.

Long context: 1M tokens native context. AA-LCR 82.7%.

### Normalized scores (1–100)

- **Tool use: 58/100.** GDPval-AA 1620 and AA-Briefcase 1578 are strong for a small model. Harvey LAB 89.9% is excellent for legal agentic work. OSWorld 2.1 72.4% shows strong computer use. However, Terminal-Bench 4.0 39.2% and AutomationBench 35.4% are modest.
- **Reasoning: 48/100.** AA-LCR 82.7% is strong for long context reasoning. HLE 45.9% (no tools) / 57.4% (with tools) is good for a small model. AA Intelligence Index 43.4 is well above median (13) for price tier. However, CritPt 18.9% and AA-Omniscience 10.7% (40.4% hallucination) show knowledge reliability limitations.
- **Context window: 90/100.** 1M context with 128K max output is frontier-class. AA-LCR 82.7% confirms strong long-context reasoning.
- **Multimodal: 40/100.** Text and image input supported. Chartography 46.4% shows moderate visual reasoning. Design Arena 1271 is competitive. Limited multimodal benchmark coverage (only 24 benchmarks on BenchLM).
- **Coding: 48/100.** FrontierCode 1.1 46.4%, FrontierSWE v2 43.8%, and AA-SciCode 55.0% are moderate. Terminal-Bench 4.0 39.2% is modest for agentic coding. Appropriate for a small model — best used as a subagent alongside larger models.
- **Cost efficiency: 97/100.** Extraordinary value. $0.10/$0.50 per 1M (≤100K) is among the cheapest for any reasoning model. 75% cheaper than Haiku 4.5 on average. 237.9 tokens/sec output speed is fastest in class. $0.21 cost per Intelligence Index task.
- **Overall Score: 56.8/100.** Mean of Tool (58) + Reasoning (48) + Context (90) + Multimodal (40) + Coding (48) = 284/5 = 56.8. Adjusted to 54 given modest coding/multimodal coverage and knowledge reliability limitations, though outstanding cost efficiency.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
