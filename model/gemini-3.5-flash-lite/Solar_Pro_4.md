# Gemini 3.5 Flash-Lite — findings by Solar Pro 4

- Source: Google DeepMind/Gemini 3.5 Flash-Lite, e.g. Google DeepMind (`google/gemini-3.5-flash-lite`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite (Google DeepMind proprietary, Gemini 3.5 family)
- **Short description:** Google DeepMind's lightweight multimodal model, released July 21, 2026 alongside Gemini 3.6 Flash and Gemini 3.5 Flash Cyber. The cheapest, fastest tier in Google's current Gemini 3.5 lineup, sized for high-volume subagents rather than frontier reasoning. Scores 86.9% on GPQA Diamond while running as the fastest model in the current Gemini 3.5 lineup (363 tok/s). Replaces Gemini 3.1 Flash-Lite (being retired May 2027) as the cheapest and fastest model in the current Gemini lineup.
- **Provider / access:** Google AI Studio, Gemini API, Vertex AI, Gemini Enterprise Agent Platform. Free tier may be available through Google AI Studio.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff not explicitly stated (likely 2026-01 or later).
- **IDs:** `gemini-3.5-flash-lite` (Gemini API / Google AI Studio). No separate free ID needed.
- **Context window:** 1,048,576 tokens (1M) input; max output 65,536 tokens (64K). Matches every current Gemini 3.x model.
- **Modalities:** Text, image, video, audio, PDF input; text output. No native image/audio/video generation. Tool calls: yes (function calling, structured output, remote MCP tool calls). Reasoning: yes (minimal thinking level tuned for classification, routing, JSON extraction by default; recommend raising to medium/high for substantive reasoning).
- **Pricing (as of 2026-09-18):** $0.30/1M input, $2.50/1M output (flat rate at launch, undercuts every other model in Gemini 3.5 family). No batch or cached-input discount published for this tier so far.
- **Architecture:** Proprietary. Parameter count and architecture type (dense vs MoE) not disclosed. Builds on Gemini 3.1 Flash-Lite base. Training-data and retention detail documented under older Gemini 3.1 Flash-Lite release.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for Gemini 3.5 Flash-Lite specifically.
- SWE-bench Pro: **54.2%** (vendor-reported by Google DeepMind, HokAI; 2026-09-09). Ahead of Gemini 3 Flash's 49.6% on same benchmark.
- Terminal-Bench 2.1: **54%** (vendor-reported by Google DeepMind, HokAI; 2026-09-09). Up from 31% on prior generation.
- OSWorld-Verified: **74.0%** (vendor-reported by Google DeepMind, HokAI; 2026-09-09). Up from 65.1% on prior generation.
- Tau3-Banking: no verified public score found
- GDPval-AA v2: **1,140** (vendor-reported by Google DeepMind, HokAI; 2026-09-09).
- MCP Atlas: no verified public score found for Gemini 3.5 Flash-Lite specifically. (Gemini 3.5 Flash scored 83.6%.)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (vendor-reported by Google DeepMind, HokAI; 2026-09-09). Ranked #24 out of 44 models reporting this benchmark per HokAI.
- HLE (Humanity's Last Exam): no verified public score found for Gemini 3.5 Flash-Lite specifically.
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **23** (Artificial Analysis, cited by HokAI; 2026-09-09). Still well behind Gemini 3.5 Flash (55) and Gemini 3.5 Pro.
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found
- GDM-MRCR v2: **72.2%** (vendor-reported by Google DeepMind, HokAI; 2026-09-09). Long-context recall. Up from 60.1% on prior generation.

Coding:

- SWE-bench Verified: no verified public score found for Gemini 3.5 Flash-Lite specifically.
- SWE-bench Pro: **54.2%** (see above).
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- GDM-MRCR v2: **72.2%** (vendor-reported). Long-context recall proxy.
- RULER / GraphWalks: no verified public score found for Gemini 3.5 Flash-Lite specifically.

### Normalized scores (1–100)

- **Tool use: 70/100.** SWE-bench Pro 54.2% (solid mid-tier for agentic coding), Terminal-Bench 2.1 54% (up from 31% — strong improvement), OSWorld-Verified 74.0% (up from 65.1% — strong computer-use), GDPval-AA v2 1,140. These are solid mid-tier scores. Capped by: lack of SWE-bench Verified direct score, MCP Atlas not found for this tier specifically, and SWE-bench Pro at 54.2% being below the 60%+ mid-tier threshold for that specific benchmark. Overall tool-use capability is competitive mid-tier for agentic workflows.
- **Reasoning: 70/100.** GPQA Diamond 86.9% (#24 of 44, approaching frontier tier: GPQA 90%+ → 90-100), GDM-MRCR v2 72.2% (improved long-context recall), AA Intelligence Index 23 (below average — this is the budget tier). These scores are mixed: GPQA is strong, but AA Intelligence Index is low. Capped by: AA Intelligence Index of 23 (budget tier), lack of HLE/MMLU Pro direct scores, and the model being tuned for speed/subagent work rather than frontier reasoning. Overall reasoning is competitive for the price point but not frontier-tier.
- **Context window: 100/100.** 1,048,576 tokens (1M+) context window, verified via Google DeepMind docs. Maximum tier (≥1M = 95-100). Max output 64K. Score 100 reflects top-tier context window.
- **Multimodal: 95/100.** Text, image, video, audio, PDF input; text output. Comprehensive multimodal input coverage. No native image/audio/video generation. Per methodology: +video/PDF in = 75-90, +audio in or any non-text out = 90-100. With text+image+video+audio+PDF input, score 95. Capped by lack of non-text output.
- **Coding: 68/100.** SWE-bench Pro 54.2% (solid mid-tier), Terminal-Bench 2.1 54% (up from 31% — strong improvement), OSWorld-Verified 74.0% (up from 65.1% — strong computer-use). These are competitive mid-tier scores. Capped by: lack of SWE-bench Verified direct score, LiveCodeBench not found, and SWE-bench Pro at 54.2% being below the 60%+ mid-tier threshold. Overall coding capability is competitive mid-tier for the price point.
- **Cost efficiency: 95/100.** $0.30/$2.50 per 1M input/output (flat rate at launch). Per methodology: ~$0.30/$2.50 = ~95-98 range. This is exceptionally cheap — undercuts every other model in the Gemini 3.5 family. No batch or cached-input discount published. For high-volume subagent calls, document parsing, and agentic search, this is the best value proposition available. Capped only by: lack of batch/cached-input discount (which would make it even cheaper for repeat-context workloads).
- **Overall Score: 85/100.** Mean of (70 + 70 + 100 + 95 + 68 + 95) / 6 = 83.0 → **83**. Best-fit recommendation: Gemini 3.5 Flash-Lite is the best value proposition for high-volume subagent calls, document parsing, and agentic search where speed and per-call cost outweigh reasoning depth. At $0.30/$2.50, it undercuts every other model in the Gemini 3.5 family and most competitors. GPQA 86.9% is surprisingly strong for a budget-tier model. The 363 tok/s output speed (rank #3 of 36) is excellent for high-throughput workloads. For teams needing frontier reasoning depth, Claude Opus 4.7, GPT-5.5, or Gemini 3.5 Pro are better choices. For teams needing more coding headroom than Flash-Lite's minimal default thinking level provides, Gemini 3.5 Flash is the upgrade path.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor release materials (Google DeepMind official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `Gemini_3_7_Flash.md`, using the same headings.
