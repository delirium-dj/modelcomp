# Gemini 3.6 Flash — findings by Solar Pro 4

- Source: Google DeepMind/Gemini 3.6 Flash, e.g. Google DeepMind (`google/gemini-3.6-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash (Google DeepMind proprietary, Gemini 3 Flash family)
- **Short description:** Google DeepMind's multimodal Flash-tier model, released July 21, 2026. A cost-efficient workhorse for agentic coding and desktop automation, replacing Gemini 3.5 Flash. Features 1M token context window, computer use built into the Gemini API, and accepts text, image, video, audio, and PDF input with text output. Out-benchmarks its predecessor across agentic coding, computer use, and long-horizon engineering tasks while using 17% fewer output tokens.
- **Provider / access:** Google AI Studio, Gemini API, Vertex AI, Gemini Enterprise Agent Platform. Available via Google AI Studio with free tier (account-specific rate limits). Messages/GenerateContent API.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff 2026-03 (14 months ahead of predecessor).
- **IDs:** `gemini-3.6-flash` (Gemini API / Google AI Studio). No separate free ID needed — free tier available through Google AI Studio.
- **Context window:** 1M tokens input; max output 64K tokens (65,536). Note: GDM-MRCR shows only 54.0% accuracy at full 1M window vs 91.8% at 128K.
- **Modalities:** Text, image, video, audio, PDF input; text output. No native image or audio generation. Tool calls: yes. Computer use: yes (built into Gemini API). Structured output: yes. Reasoning: yes.
- **Pricing (as of 2026-09-18):** $0.75/1M input, $3.75/1M output through Dec 31, 2026 (introductory pricing). Standard rate doubles to $1.50/$7.50 on Jan 1, 2027. Batch mode: 50% discount. Cached input: $0.075/1M (rising to $0.15 after intro period). Priority: ~80% premium for guaranteed low latency. Free tier available through Google AI Studio with account-specific rate limits. Paid usage not used for training; free tier may be used for training unless Activity switched off.
- **Architecture:** Proprietary. Architecture type (dense vs MoE) not disclosed. Parameter count not disclosed. Google frames the release around token efficiency rather than raw size.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for Gemini 3.6 Flash specifically.
- SWE-bench Pro: **58.7%** (vendor-reported by Google DeepMind, HokAI; 2026-09-09). Up from Gemini 3.5 Flash's 55.1%.
- DeepSWE v1.1: **49%** (vendor-reported by Google DeepMind, HokAI; 2026-09-09). Up from 37% for predecessor.
- OSWorld-Verified: **83.0%** (vendor-reported by Google DeepMind, HokAI; 2026-09-09). Up from 78.4% for predecessor. Computer-use benchmark.
- Terminal-Bench 2.1: no verified public score found for Gemini 3.6 Flash specifically.
- Tau3-Banking: no verified public score found for Gemini 3.6 Flash specifically.
- GDPval-AA v2: **1,421** (vendor-reported by Google DeepMind, HokAI; 2026-09-09). Up from 1,349 for predecessor.
- MLE-Bench: **63.9%** (vendor-reported by Google DeepMind, HokAI; 2026-09-09). Up from 49.7% for predecessor.
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found for Gemini 3.6 Flash specifically.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for Gemini 3.6 Flash specifically.
- HLE (Humanity's Last Exam): no verified public score found for Gemini 3.6 Flash specifically.
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **34** (Artificial Analysis, cited by HokAI; 2026-09-09). Composite of 10 evaluations.
- Vals Index: no verified public score found for Gemini 3.6 Flash specifically.
- MMLU Pro: no verified public score found for Gemini 3.6 Flash specifically.
- GDM-MRCR 128K: **91.8%** (vendor-reported by Google DeepMind, HokAI; 2026-09-09). Long-context recall at 128K tokens.
- GDM-MRCR 1M: **54.0%** (vendor-reported by Google DeepMind, HokAI; 2026-09-09). Long-context recall at full 1M window.
- CharXiv No Tools: **85.2%** (vendor-reported by Google DeepMind, HokAI; 2026-09-09). Multimodal benchmark.
- CharXiv With Tools: **89.4%** (vendor-reported by Google DeepMind, HokAI; 2026-09-09).

Coding:

- SWE-bench Verified: see Agent/tool use above — no direct score found for Gemini 3.6 Flash.
- SWE-bench Pro: **58.7%** (see above).
- LiveCodeBench: no verified public score found for Gemini 3.6 Flash specifically.
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE v1.1: **49%** (see above).

Long context:

- GDM-MRCR 128K: **91.8%** (vendor-reported). Long-context recall at 128K tokens.
- GDM-MRCR 1M: **54.0%** (vendor-reported). Long-context recall at full 1M window.
- RULER / GraphWalks: no verified public score found for Gemini 3.6 Flash specifically.

### Normalized scores (1–100)

- **Tool use: 78/100.** SWE-bench Pro 58.7% (strong for agentic coding, though below 80%+ frontier threshold), DeepSWE v1.1 49%, OSWorld-Verified 83.0% (strong computer-use), MLE-Bench 63.9%, GDPval-AA v2 1,421. These are solid mid-to-high tier scores. Capped by: lack of SWE-bench Verified direct score, Terminal-Bench 2.1 not found for this model specifically, and Tau3-Banking not found. Overall tool-use capability is competitive mid-tier.
- **Reasoning: 65/100.** AA Intelligence Index 34 (above median for comparable models but not frontier-tier). CharXiv 85.2%/89.4% (strong multimodal understanding). GDM-MRCR 91.8% at 128K (strong long-context recall at lower depth). Capped by: lack of GPQA, HLE, MMLU Pro direct scores for Gemini 3.6 Flash specifically, and GDM-MRCR dropping to 54.0% at full 1M window. Overall reasoning is competitive but not frontier-tier.
- **Context window: 100/100.** 1M token context window, verified via Google DeepMind docs and HokAI. This is the maximum tier (≥1M = 95-100). Max output 64K. Score 100 reflects top-tier context window, though usable recall at full window is limited (54.0% MRCR).
- **Multimodal: 95/100.** Text, image, video, audio, PDF input; text output. This is comprehensive multimodal input coverage — the highest tier per methodology (+video/PDF in = 75-90, +audio in or any non-text out = 90-100). With text+image+video+audio+PDF input and no non-text output, score 95. Capped only by lack of native image/audio generation (non-text output).
- **Coding: 75/100.** SWE-bench Pro 58.7% (solid mid-tier for agentic coding), DeepSWE v1.1 49%, MLE-Bench 63.9%. These are competitive scores. Capped by: lack of SWE-bench Verified direct score, LiveCodeBench not found, and SWE-bench Pro at 58.7% being below the 80%+ frontier threshold. Overall coding capability is competitive mid-tier.
- **Cost efficiency: 90/100.** $0.75/$3.75 per 1M input/output (introductory pricing through Dec 31, 2026). Per methodology: ~$0.75/$3.75 = ~90-92 range. Free tier available through Google AI Studio. After intro period, $1.50/$7.50 = ~80-85 range. Cache discount $0.075/1M. Blended rate ~$0.32/1M at intro pricing (7:2:1 ratio). Exceptional value for a multimodal 1M-context model. Capped by: intro pricing expiring Dec 31, 2026, after which cost efficiency decreases.
- **Overall Score: 83/100.** Mean of (78 + 65 + 100 + 95 + 75 + 90) / 6 = 83.8 → **84**. Best-fit recommendation: Gemini 3.6 Flash is the best value proposition for multimodal agentic coding and computer-use workloads at Flash pricing. The combination of 1M context, comprehensive multimodal input (text+image+video+audio+PDF), OSWorld-Verified 83.0%, and free tier availability through Google AI Studio makes this an exceptional value. At $0.75/$3.75 (intro pricing), it undercuts most competitors while offering comprehensive multimodal capabilities. For teams needing higher reasoning depth, Gemini 3.1 Pro or OpenAI GPT-5 class models are better choices. For cost-sensitive deployments after intro pricing expires, the standard $1.50/$7.50 rate still offers excellent value. Note: GDM-MRCR dropping to 54.0% at full 1M window means long-context retrieval at maximum depth is limited — chunk documents for best results.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor release materials (Google DeepMind official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `Gemini_3_8_Flash.md`, using the same headings.
