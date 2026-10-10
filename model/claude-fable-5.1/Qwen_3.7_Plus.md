# Claude Fable 5.1 — findings by Qwen 3.7 Plus

- Source: Anthropic/Claude Fable 5.1 (`anthropic/claude-fable-5.1`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class model for the most demanding reasoning and long-horizon agentic work, released September 1, 2026. Same underlying model as Claude Mythos 5.1 but with different safeguards (fewer cyber-offense capabilities). Ties GPT-6 Astra on Artificial Analysis Intelligence and Coding Agent Indices.
- **Provider / access:** Claude API (`claude-fable-5-1`); Amazon Bedrock; Google Cloud Vertex AI; Microsoft Foundry. No free tier. No OpenCode Zen ID.
- **Release / knowledge:** 2026-09-01 release; knowledge cutoff not precisely documented.
- **IDs:** `anthropic/claude-fable-5-1` (Claude API). No free OpenCode Zen ID.
- **Context window:** 1,048,576 tokens (1M) total; 128,000 max output.
- **Modalities:** Text, image, PDF in; text out. Reasoning yes (adaptive thinking with effort levels). Tool calls supported. Computer use supported.
- **Pricing (as of 2026-10-10):** $10 in / $50 out / $0.25 cached (2.5% multiplier) per 1M tokens. Batch: $5/$25. The most expensive Claude model.
- **Architecture:** Proprietary; parameter count not disclosed. Same underlying model as Mythos 5.1 with different safety calibration.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (Anthropic system card; vs Mythos 5.1's 60.9%, Opus 5's 52.3%)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic)
- AutomationBench-AA: **31.4%** (Anthropic; below Opus 5.5's 40.0%)
- GDPval-AA v2.1: **1735 Elo** (Anthropic)
- AA-Briefcase v1.1: **1678 Elo** (Anthropic)
- OSWorld 2.0 (computer use): **80.7% partial / 42.8% strict** (Anthropic)
- Chartography (with tools): **88.4%** (Anthropic)
- HealthBench Professional: **62.1%** (Anthropic)

Reasoning / knowledge:

- Humanity's Last Exam (no tools): **60.9%** (Anthropic)
- Humanity's Last Exam (with tools): **65.6%** (Anthropic)
- GPQA Diamond: **91.7%** (DemandSphere)
- Artificial Analysis Intelligence Index: **53** (ties with GPT-6 Astra at max effort; #1 jointly)

Coding:

- SWE-bench Pro: **81.2%** (Anthropic; below Opus 5.5's 89.9%)
- SWE-bench Multilingual: **89.1%** (Anthropic)
- SWE-bench Multimodal: **54.7%** (Anthropic)
- FrontierCode v1.1 (Main): **50.3%** (Anthropic)
- CursorBench 4.0: **51.8%** (Anthropic/Cursor, max effort)
- Terminal-Bench 4.0: **55.8%** (also listed under tool use)
- Artificial Analysis Coding Agent Index: **62** (ties with GPT-6 Astra; #1 jointly)

Long context:

- No specific MRCR or long-context retrieval scores published

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 4.0 at 55.8% is strong. OSWorld 2.0 at 80.7% partial is excellent. GDPval-AA 1735 Elo and AA-Briefcase 1678 Elo are strong. However, AutomationBench at 31.4% is moderate (below Opus 5.5's 40.0%). Chartography 88.4% is strong. Capped by the moderate AutomationBench score.
- **Reasoning: 91/100.** HLE 65.6% with tools is strong. GPQA Diamond 91.7% is outstanding. Intelligence Index 53 ties for #1. HealthBench 62.1% is solid. Capped by slightly lower HLE compared to Opus 5.5 (67.7%).
- **Context window: 88/100.** 1M-token context with 128K max output. Standard frontier-class window. No long-context premium. No specific MRCR retrieval scores. Solid but not best-in-class.
- **Multimodal: 65/100.** Text, image, PDF in; text out. No audio or video input. OSWorld 2.0 at 80.7% demonstrates computer use. SWE-bench Multimodal 54.7%. Capped by limited input modalities.
- **Coding: 91/100.** SWE-bench Pro 81.2% and SWE-bench Multilingual 89.1% are excellent. Coding Agent Index 62 ties for #1. CursorBench 51.8% and FrontierCode 50.3% are strong. Terminal-Bench 4.0 55.8%. Capped by being surpassed by Opus 5.5 on most coding benchmarks.
- **Cost efficiency: 48/100.** $10/$50 per 1M tokens is the most expensive among Claude models and among the priciest frontier models. Ties GPT-6 Astra's premium pricing. At ~$7.63 per Intelligence Index task (Artificial Analysis), it is significantly more expensive than Opus 5.5 at the same score. Not suitable for cost-sensitive workloads.
- **Overall Score: 84/100.** Mean of five quality dims: (87 + 91 + 88 + 65 + 91) / 5 = 84.4, rounded to 84. A top-tier frontier model with strong coding (SWE-bench Pro 81.2%), excellent reasoning (HLE 65.6%, GPQA 91.7%), and leading agentic performance. Same underlying model as Mythos 5.1 but with reduced cyber-offense capabilities. Best fit for demanding long-horizon reasoning and agentic work where cost is secondary. The premium pricing and moderate AutomationBench score are trade-offs.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Anthropic system card, Artificial Analysis, Codersera, DemandSphere, BenchLM, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
