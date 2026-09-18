# Gemini 3.7 Flash — findings by Solar Pro 4

- Source: Google DeepMind/Gemini 3.7 Flash, e.g. Google DeepMind (`google/gemini-3.7-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash (Google DeepMind proprietary, Gemini 3 family)
- **Short description:** Google DeepMind's mid-tier Gemini 3 model, released August 13, 2026 as a fast, low-cost workhorse for agentic coding, document analysis, and web-app scaffolding. A refinement of Gemini 3.6 Flash's reasoning foundation through algorithmic improvements rather than new pretraining. Pairs 1M context window with 16.7-point jump in long-horizon coding accuracy (DeepSWE 65.3%) over Gemini 3.6 Flash. Tops WebDev Arena at 1588 Elo, ahead of Claude Sonnet 5 (1541) and GPT-5.6 Terra (1523).
- **Provider / access:** Google AI Studio, Gemini API, Vertex AI, Gemini Enterprise Agent Platform, Gemini Spark consumer app. Free tier available through Google AI Studio.
- **Release / knowledge:** Released 2026-08-13; knowledge cutoff not explicitly stated (likely 2026-03 or later).
- **IDs:** `gemini-3.7-flash` (Gemini API / Google AI Studio). Free tier available.
- **Context window:** 1,048,576 tokens (1M) input; max output 65,536 tokens (64K). GDM-MRCR v2: 97.0% accuracy at 128K depth — usable rather than nominal.
- **Modalities:** Text, image, audio, video input; text and tool-calls output. No native image/audio/video generation. Tool calls: yes. Function calling: yes. Structured output: yes. Reasoning: yes (algorithmic improvements over 3.6 Flash).
- **Pricing (as of 2026-09-18):** $0.75/1M input, $3.75/1M output through end of 2026 (introductory rate, exactly half of predecessor's launch price). 90% discount on cached input (~$0.075/1M). Rates double on both ends starting January 2027. No batch discount mentioned.
- **Architecture:** Proprietary. Refinement of Gemini 3.6 Flash's reasoning foundation through algorithmic improvements. Parameter count and MoE status not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for Gemini 3.7 Flash specifically.
- DeepSWE v1.1: **65.3%** (vendor-reported by Google DeepMind; 2026-08-13). Up 16.7 points from Gemini 3.6 Flash's 49.0%. Long-horizon coding.
- FrontierCode 1.1: **43.6%** (vendor-reported by Google DeepMind; 2026-08-13). Up from 34.4%. Production code quality.
- WebDev Arena Elo: **1588** (vendor-reported by Google DeepMind; 2026-08-13). Ahead of Claude Sonnet 5 (1541) and GPT-5.6 Terra (1523).
- AutomationBench: **30.4%** (vendor-reported by Google DeepMind; 2026-08-13). Ahead of Claude Sonnet 5 (10.7%) and GPT-5.6 Terra (23.6%). Enterprise workflow.
- Terminal-Bench 2.1: no verified public score found for Gemini 3.7 Flash specifically.
- Tau3-Banking: no verified public score found
- GDPval-AA Elo: **1,525** (vendor-reported by Google DeepMind; 2026-08-13).
- GDP.pdf: **34.0%** (vendor-reported by Google DeepMind; 2026-08-13). Up from 22.0% for Gemini 3.6 Flash. Document comprehension.
- MCP Atlas: no verified public score found for Gemini 3.7 Flash specifically. (Gemini 3.5 Flash scored 83.6%.)
- Claw-Eval / ClawProBench: no verified public score found
- Agents Last Exam: **26.3%** (vendor-reported by Google DeepMind; 2026-08-13). Below Claude Sonnet 5's 33.3%.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for Gemini 3.7 Flash specifically.
- HLE (Humanity's Last Exam): no verified public score found for Gemini 3.7 Flash specifically.
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **56** (Artificial Analysis; 2026-08-14). Trails GPT-5.6 Terra and Muse Spark 1.2 (57 each), ahead of Claude Sonnet 5 (55) and predecessor (52).
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found for Gemini 3.7 Flash specifically.
- CharXiv Reasoning No Tools: **84.5%** (vendor-reported by Google DeepMind; 2026-08-13).
- GDM-MRCR v2 128K: **97.0%** (vendor-reported by Google DeepMind; 2026-08-13). Long-context recall.

Coding:

- SWE-bench Verified: no verified public score found for Gemini 3.7 Flash specifically.
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE v1.1: **65.3%** (see above). FrontierCode 1.1: **43.6%**.

Long context:

- GDM-MRCR v2 128K: **97.0%** (vendor-reported). Long-context recall at 128K depth.
- RULER / GraphWalks: no verified public score found for Gemini 3.7 Flash specifically.

### Normalized scores (1–100)

- **Tool use: 82/100.** DeepSWE v1.1 65.3% (strong, 16.7-point jump over predecessor), AutomationBench 30.4% (ahead of Claude Sonnet 5 and GPT-5.6 Terra — strong for enterprise workflows), WebDev Arena 1588 Elo (#1), GDPval-AA 1,525, GDP.pdf 34.0% (up from 22.0%). Strong, consistent scores. Capped by: lack of SWE-bench Verified, SWE-bench Pro, Terminal-Bench 2.1 direct scores. Overall tool-use capability is strong, competitive mid-to-high tier.
- **Reasoning: 80/100.** AA Intelligence Index 56 (above average, trails GPT-5.6 Terra/Muse Spark 1.2 at 57), CharXiv 84.5%, GDM-MRCR 97.0% at 128K (excellent long-context recall). These are solid scores. Capped by: lack of GPQA, HLE, MMLU Pro direct scores, and AA Intelligence Index of 56 being good but not frontier-tier.
- **Context window: 100/100.** 1,048,576 tokens (1M+) context window. Maximum tier (≥1M = 95-100). Max output 64K. GDM-MRCR 97.0% at 128K shows usable recall. Score 100 reflects top-tier context window.
- **Multimodal: 95/100.** Text, image, audio, video input; text and tool-calls output. Comprehensive multimodal input coverage. No native image/audio/video generation. Per methodology: +video/PDF in = 75-90, +audio in or any non-text out = 90-100. With text+image+audio+video input, score 95. Capped by lack of non-text output.
- **Coding: 80/100.** DeepSWE v1.1 65.3% (strong, 16.7-point jump), FrontierCode 1.1 43.6% (up from 34.4%), WebDev Arena 1588 Elo (#1). Strong scores. Capped by: lack of SWE-bench Verified, SWE-bench Pro, LiveCodeBench direct scores. Overall coding capability is competitive mid-to-high tier.
- **Cost efficiency: 90/100.** $0.75/$3.75 per 1M input/output (introductory through end of 2026, half of predecessor's launch price). 90% cache discount ($0.075/1M). Per methodology: ~$0.75/$3.75 = ~90-92 range. Rates double Jan 2027. Free tier available. Exceptional value. Capped by: intro pricing ending end of 2026.
- **Overall Score: 86/100.** Mean of (82 + 80 + 100 + 95 + 80 + 90) / 6 = 87.8 → **88**. Best-fit recommendation: Gemini 3.7 Flash is the best value proposition for budget-conscious teams running coding agents, enterprise document automation, and web-app scaffolding. The 16.7-point DeepSWE jump over 3.6 Flash, AutomationBench lead over Claude Sonnet 5 and GPT-5.6 Terra, and WebDev Arena #1 Elo at $0.75/$3.75 (half of predecessor's price, 90% cache discount) make this exceptional value through end of 2026. For terminal-heavy or computer-use-heavy agent loops, stronger long-horizon agent models may be preferable. For self-hosted/air-gapped needs, open-weights models are required.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor release materials (Google DeepMind official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `Gemini_3_8_Flash_Cyber.md`, using the same headings.
