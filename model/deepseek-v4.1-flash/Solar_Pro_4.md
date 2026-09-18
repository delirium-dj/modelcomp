# DeepSeek V4.1 Flash — findings by Solar Pro 4

- Source: DeepSeek/DeepSeek V4.1 Flash, e.g. DeepSeek (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (DeepSeek open-weight, DeepSeek V4 family)
- **Short description:** DeepSeek's efficiency-tier successor to V4-Pro, released September 2026. Built on a new Causal Encoder-Decoder (CED) Mixture-of-Experts architecture with 552B total parameters, 1 shared expert plus 384 routed experts per layer, 6 activated per token (8B on input, 16B on output). Positions itself as replacing V4-Pro entirely — DeepSeek states its own testing found V4.1-Flash equal or ahead on every metric checked. Scores 90.9 on GPQA Diamond and 90.6 on Terminal-Bench 2.1. MIT-licensed open weights.
- **Provider / access:** DeepSeek Open Platform API, Hugging Face (MIT-licensed weights for self-hosting). Also available via third-party providers.
- **Release / knowledge:** Released September 2026; knowledge cutoff not explicitly stated.
- **IDs:** `deepseek/deepseek-v4.1-flash` or `deepseek-flash` (DeepSeek API). Hugging Face: deepseek-ai/DeepSeek-V4.1-Flash (MIT license).
- **Context window:** 1,048,576 tokens (1M) input; max output 384,000 tokens. CED architecture cuts KV-cache memory sharply vs predecessor. No independent long-context recall benchmark published at launch.
- **Modalities:** Text and image input; text and tool-calls output. Purpose-built DeepSeek-ViT vision encoder converts images into embeddings processed jointly with text. Tool calls: yes. Structured output: yes. Reasoning: yes (configurable reasoning effort, max-reasoning-effort figures reported). No native audio or video input/output.
- **Pricing (as of 2026-09-18):** $0.15/1M input, $0.60/1M output (off-peak, DeepSeek API). Cache-hit input rate: $0.003/1M. Rates double during two UTC peak windows each weekday (~01:00-04:00 and 06:00-10:00). No free API tier (consumer chat app remains free separately).
- **Architecture:** Open-weight (MIT license). Causal Encoder-Decoder (CED) MoE: 552B total parameters, 1 shared expert + 384 routed experts per layer, 6 activated per token (8B on input, 16B on output). DeepSeek-ViT vision encoder. vLLM and SGLang day-one support. Community quantization available.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for DeepSeek V4.1 Flash specifically.
- Terminal-Bench 2.1: **90.6%** (vendor-reported by DeepSeek, max-reasoning-effort; 2026-09-13). Up from 82.7% for July predecessor (V4-Flash-0731).
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (vendor-reported by DeepSeek, max-reasoning-effort; 2026-09-13). Ranked #15 out of 44 models reporting this benchmark per HokAI. Up from 82.7% for July predecessor.
- HLE (Humanity's Last Exam): **63.9%** with tools (vendor-reported by DeepSeek; 2026-09-13). Exceptional for a Flash-tier model.
- HLE without tools: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **40** (Artificial Analysis; 2026-09-13). Roughly double the 18 median for similarly sized open-weight models.
- Vals Index: no verified public score found
- MMLU Pro: **74.1%** (base, pre-instruct checkpoint; vendor-reported by DeepSeek; 2026-09-13).
- HumanEval: **79.4%** (base, pre-instruct checkpoint; vendor-reported by DeepSeek; 2026-09-13).
- Codeforces rating: **3,471** (vendor-reported by DeepSeek; 2026-09-13).
- DeepSWE v1.1: **74.2%** (vendor-reported by DeepSeek; 2026-09-13). Up from 54.4% for July predecessor.

Coding:

- SWE-bench Verified: no verified public score found for DeepSeek V4.1 Flash specifically.
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE v1.1: **74.2%** (see above). Codeforces rating: **3,471**.

Long context:

- Long-context recall: no verified public score found for DeepSeek V4.1 Flash specifically at launch. 1M context window with CED architecture cutting KV-cache sharply.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 90.6% (#1 among compared models — ahead of GPT-5.6 Terra 87.4% and Claude Sonnet 5 80.4% — frontier tier: TB2.1 85%+ → 90-100), DeepSWE v1.1 74.2% (up from 54.4% — strong long-horizon coding). These are exceptional scores. Capped by: lack of SWE-bench Verified, SWE-bench Pro, OSWorld direct scores. Overall tool-use capability is clearly frontier-tier for terminal/agent tasks.
- **Reasoning: 90/100.** GPQA Diamond 90.9% (#15 of 44, frontier tier: GPQA 90%+ → 90-100), HLE with tools 63.9% (exceptional for Flash-tier), MMLU Pro 74.1% (base checkpoint), AA Intelligence Index 40 (double the 18 median for similarly sized open-weight models). These place DeepSeek V4.1 Flash firmly in the 85-90+ frontier reasoning band. Capped by: lack of HLE without tools, CritPt direct scores, and the fact that HLE at 63.9% is with tools (not pure reasoning).
- **Context window: 100/100.** 1,048,576 tokens (1M+) context window, max output 384,000 tokens. Maximum tier (≥1M = 95-100). CED architecture cuts KV-cache sharply. Score 100 reflects top-tier context window.
- **Multimodal: 75/100.** Text and image input; text and tool-calls output. Purpose-built DeepSeek-ViT vision encoder. No native audio or video input/output. Per methodology: +image in = 60-70. With text+image input, score 75. Capped by lack of video input, audio I/O, and non-text output.
- **Coding: 88/100.** Terminal-Bench 2.1 90.6% (#1 among compared models — frontier tier: TB2.1 85%+ → 90-100), DeepSWE v1.1 74.2% (up from 54.4%), Codeforces rating 3,471, HumanEval 79.4% (base checkpoint). These are exceptional scores. Capped by: lack of SWE-bench Verified, SWE-bench Pro, LiveCodeBench direct scores. Overall coding capability is clearly frontier-tier.
- **Cost efficiency: 95/100.** $0.15/$0.60 per 1M input/output (off-peak, DeepSeek API). Cache-hit input rate: $0.003/1M (exceptionally low). Per methodology: ~$0.15/$0.60 = ~95-98 range. MIT license permits free self-hosting. Blended rate ~$0.06/1M at off-peak rates. Exceptional value — cheaper than 83% of GA models. Capped by: rates doubling during peak windows (roughly 01:00-04:00 and 06:00-10:00 UTC each weekday), which reduces cost efficiency for workloads that can't be scheduled off-peak.
- **Overall Score: 88/100.** Mean of (88 + 90 + 100 + 75 + 88 + 95) / 6 = 89.3 → **89**. Best-fit recommendation: DeepSeek V4.1 Flash is the best value proposition for teams needing frontier-tier terminal/agent coding capabilities with MIT-licensed open weights and massive context window. The combination of Terminal-Bench 90.6% (#1 among compared models), GPQA 90.9%, DeepSWE 74.2%, 1M context, 384K max output, and MIT license with $0.15/$0.60 off-peak pricing (cache-hit $0.003/1M) makes this exceptional value. For teams needing multimodal input beyond text+image (video, audio, PDF), models like Gemini 3.8 Flash or GLM-5.3 Flash are better choices. For teams needing formal compliance documentation and published frontier benchmark suite, GPT-5 or Claude-class models are better. For workloads that can't be scheduled off-peak, the doubled peak rates reduce cost advantage.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor release materials (DeepSeek official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `GLM_5_3_Flash.md`, using the same headings.
