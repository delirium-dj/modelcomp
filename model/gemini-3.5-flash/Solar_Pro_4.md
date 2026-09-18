# Gemini 3.5 Flash — findings by Solar Pro 4

- Source: Google DeepMind/Gemini 3.5 Flash, e.g. Google DeepMind (`google/gemini-3.5-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (Google DeepMind proprietary, Gemini 3.5 family)
- **Short description:** Google DeepMind's Flash-tier multimodal model, released May 19, 2026 at Google I/O. Built for agentic coding teams and MCP tool-orchestration pipelines that outgrew Gemini 3 Flash's slower reasoning. Scores 78% on SWE-bench Verified and leads tool orchestration with 83.6% MCP Atlas score (highest recorded as of June 2026). Outputs at 289 tokens per second, roughly 4x faster than GPT-5.5 and Claude Opus 4.7. Trades some abstract-reasoning strength for speed.
- **Provider / access:** Google AI Studio, Gemini API, Vertex AI, Gemini Enterprise Agent Platform. Free tier available through Google AI Studio with limited rate limits.
- **Release / knowledge:** Released 2026-05-19; knowledge cutoff not explicitly stated (likely 2026-01 or later based on family timeline).
- **IDs:** `gemini-3.5-flash` (Gemini API / Google AI Studio). Free tier available.
- **Context window:** 1,048,576 tokens (1M) input; max output 65,536 tokens (64K). Native multimodal Transformer-based model. Configurable thinking levels (default: medium, high adds latency for interactive use).
- **Modalities:** Text, image, audio, video, PDF input; text and tool-calls output. No native image, audio, or video generation. Tool calls: yes (including combined tool use mixing built-in tools like Google Search with custom MCP tools). Function calling: yes. Structured output: yes. Reasoning: yes (configurable thinking levels).
- **Pricing (as of 2026-09-18):** $3.00/1M input, $9.00/1M output (standard pricing). Cached input: $0.15/1M (90% discount). Free tier available through Google AI Studio with limited rate limits. Paid usage through Gemini API and Vertex AI not used for training; free tier may be used for training unless Activity switched off.
- **Architecture:** Proprietary natively multimodal Transformer-based model. Architecture details and parameter counts not disclosed. Built on Gemini 3 Flash's reasoning foundation (released Dec 2025), adding configurable thinking levels.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: **78%** (vendor-reported by Google DeepMind, HokAI; 2026-08-27). Ranked #15 out of 28 models reporting this benchmark per HokAI. Ahead of peer median of 78.3% (essentially at median).
- SWE-bench Pro: no verified public score found for Gemini 3.5 Flash specifically. (Claude Opus 4.7 leads at 64.3%.)
- MCP Atlas: **83.6%** (vendor-reported by Google DeepMind; 2026-06). Highest recorded tool-orchestration score as of June 2026.
- Terminal-Bench 2.1: no verified public score found for Gemini 3.5 Flash specifically.
- Tau3-Banking: no verified public score found
- GDPval-AA v2: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP Atlas 83.6% covered above.
- OSWorld-Verified: no verified public score found for Gemini 3.5 Flash specifically.

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (vendor-reported by Google DeepMind, HokAI; 2026-08-27). Ranked #16 out of 44 models reporting this benchmark per HokAI.
- HLE (Humanity's Last Exam): no verified public score found for Gemini 3.5 Flash specifically.
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **55** (Artificial Analysis, cited by HokAI; 2026-06-01). Trails GPT-5.5's 60.
- Vals Index: no verified public score found for Gemini 3.5 Flash specifically.
- MMLU Pro: no verified public score found for Gemini 3.5 Flash specifically.
- MMMU-Pro: **84.2%** (vendor-reported by Google DeepMind; 2026-06). Highest multimodal reasoning result Artificial Analysis had recorded at launch.
- ARC-AGI-2: **72.1%** (vendor-reported by Google DeepMind; 2026-06). Below Gemini 3.1 Pro's 77.1%.

Coding:

- SWE-bench Verified: **78%** (see above). #15 of 28, essentially at peer median of 78.3%.
- SWE-bench Pro: no verified public score found. (Claude Opus 4.7 leads at 64.3%.)
- LiveCodeBench: no verified public score found for Gemini 3.5 Flash specifically.
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Long-context recall above 100K tokens: not independently published for 3.5 generation as of 2026-09-18. Gemini 3.1 Pro demonstrated reliable recall at large depths in prior evaluations — relevant reference point given shared Gemini lineage.
- RULER / GraphWalks / MRCR: no verified public score found for Gemini 3.5 Flash specifically.

### Normalized scores (1–100)

- **Tool use: 85/100.** SWE-bench Verified 78% (#15 of 28, at peer median — frontier tier: SWE-bench 80%+ → 90-100, so just below), MCP Atlas 83.6% (highest recorded tool-orchestration score as of June 2026 — exceptional for tool use). These are strong scores. Capped by: SWE-bench Verified at 78% being just below the 80%+ frontier threshold, lack of SWE-bench Pro and Terminal-Bench 2.1 direct scores. Overall tool-use capability is strong, particularly for agentic tool orchestration.
- **Reasoning: 85/100.** GPQA Diamond 90.4% (#16 of 44, frontier tier: GPQA 90%+ → 90-100 — essentially at the frontier threshold), MMMU-Pro 84.2% (highest multimodal reasoning result at launch), ARC-AGI-2 72.1% (solid, below Gemini 3.1 Pro's 77.1%), AA Intelligence Index 55 (above average, trails GPT-5.5's 60). These place Gemini 3.5 Flash firmly in the 80-90 range. Capped by: ARC-AGI-2 at 72.1% being below the Pro tier, lack of HLE direct score, and AA Intelligence Index of 55 being good but not frontier-tier.
- **Context window: 100/100.** 1,048,576 tokens (1M+) context window, verified via Google DeepMind docs. Maximum tier (≥1M = 95-100). Max output 64K. Score 100 reflects top-tier context window.
- **Multimodal: 95/100.** Text, image, audio, video, PDF input; text and tool-calls output. Comprehensive multimodal input coverage. No native image/audio/video generation. Per methodology: +video/PDF in = 75-90, +audio in or any non-text out = 90-100. With text+image+audio+video+PDF input, score 95. Capped by lack of non-text output.
- **Coding: 82/100.** SWE-bench Verified 78% (#15 of 28, at peer median — just below 80%+ frontier threshold), MCP Atlas 83.6% (exceptional tool orchestration). Strong scores, particularly for agentic coding. Capped by: SWE-bench Verified at 78% being just below the 80%+ frontier threshold, lack of SWE-bench Pro and LiveCodeBench direct scores. Overall coding capability is strong, competitive with frontier-tier for agentic workflows.
- **Cost efficiency: 70/100.** $3.00/$9.00 per 1M input/output (standard pricing). Per methodology: ~$3/$9 = ~70-75 range. Cache discount 90% ($0.15/1M reads). Free tier available through Google AI Studio. Compared to competitors: cheaper than Opus-tier models ($5/$25) but more expensive than Flash-tier alternatives like Gemini 3.6 Flash ($0.75/$3.75 intro) or Gemini 3.5 Flash-Lite ($0.30/$2.50). Blended rate ~$1.35/1M. Capped by: pricing relative to cheaper Flash-tier alternatives.
- **Overall Score: 86/100.** Mean of (85 + 85 + 100 + 95 + 82 + 70) / 6 = 86.2 → **86**. Best-fit recommendation: Gemini 3.5 Flash is the best choice for agentic coding teams and MCP tool-orchestration pipelines that need strong tool-use capabilities at good value. The MCP Atlas score of 83.6% (highest recorded as of June 2026) is a key differentiator for tool-heavy workflows. At $3/$9 with 90% cache discount, it offers good value — cheaper than Opus-tier models but more expensive than Flash-tier alternatives. For teams needing higher abstract reasoning, Gemini 3.1 Pro or Gemini 3.5 Pro are better choices. For teams needing lower cost, Gemini 3.6 Flash ($0.75/$3.75 intro) or Gemini 3.5 Flash-Lite ($0.30/$2.50) offer better value. Output speed of 289 tok/s (4x faster than GPT-5.5 and Claude Opus 4.7) is excellent for high-volume workloads.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor release materials (Google DeepMind official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `Gemini_3_5_Flash_Lite.md`, using the same headings.
