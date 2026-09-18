### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for Gemini 3.8 Flash specifically.
- SWE-bench Pro: **61.6%** (vendor-reported by Google DeepMind, DataCamp; 2026-09-04). Up from Gemini 3.7 Flash's 60.4%.
- SWE-Atlas: **51.9%** (vendor-reported by Google DeepMind, DataCamp; 2026-09-04). Up from 48.0% for predecessor.
- Terminal-Bench 2.1: **90.8%** (vendor-reported by Google DeepMind; 2026-09-04). Ahead of GPT-5.6 Terra's 87.4% and Claude Sonnet 5's 80.4% in third-party comparison.
- Tau3-Banking: **38.1%** (vendor-reported by Google DeepMind, DataCamp; 2026-09-04). Up from 30.9% for predecessor.
- GDPval-AA v2: no verified public score found for Gemini 3.8 Flash specifically.
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found
- OSWorld-Verified: no verified public score found for Gemini 3.8 Flash specifically.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for Gemini 3.8 Flash specifically.
- HLE (Humanity's Last Exam): **54.9%** HLE-Verified (vendor-reported by Google DeepMind; 2026-09-04). Also reported as 45.4% on standard HLE.
- HLE with Tools: no verified public score found for Gemini 3.8 Flash specifically.
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **59** (Artificial Analysis, cited by HokAI; 2026-09-04). Composite of 10 evaluations. High reasoning effort mode.
- Vals Finance Agent V2: **61.4%** (vendor-reported by Google DeepMind; 2026-09-04). Leading score on this benchmark.
- MMLU Pro: no verified public score found for Gemini 3.8 Flash specifically.
- CharXiv No Tools: **86.2%** (vendor-reported by Google DeepMind, DataCamp; 2026-09-04). Up from 84.5% for predecessor. Multimodal benchmark.
- DeepSWE v1.1 Min Success Rate: **70%** (vendor-reported by Google DeepMind; 2026-09-04). Long-horizon coding task suite.

Coding:

- SWE-bench Verified: see Agent/tool use above — no direct score found for Gemini 3.8 Flash.
- SWE-bench Pro: **61.6%** (see above). Up from 60.4% for Gemini 3.7 Flash.
- LiveCodeBench: no verified public score found for Gemini 3.8 Flash specifically.
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE v1.1 Min Success Rate: **70%** (see above).

Long context:

- GDM-MRCR: no verified public score found for Gemini 3.8 Flash specifically.
- RULER / GraphWalks: no verified public score found for Gemini 3.8 Flash specifically.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 90.8% (#1 among compared models — GPT-5.6 Terra 87.4%, Claude Sonnet 5 80.4% — frontier tier: TB2.1 85%+ → 90-100 per methodology), SWE-bench Pro 61.6% (solid), SWE-Atlas 51.9%, Tau3-Banking 38.1%. Strong, consistent scores across agentic and terminal tasks. Capped slightly by: lack of SWE-bench Verified direct score, OSWorld not found for 3.8 Flash specifically. Overall tool-use capability is clearly frontier-tier for terminal/agent tasks.
- **Reasoning: 88/100.** HLE-Verified 54.9% (frontier tier: HLE 40%+ → 90-100), HLE standard 45.4%, AA Intelligence Index 59 (well above average), Vals Finance Agent V2 61.4% (leading score). These place Gemini 3.8 Flash firmly in the 85-90+ frontier reasoning band. Capped by: lack of GPQA, MMLU Pro direct scores for 3.8 Flash specifically. AA Intelligence Index of 59 is strong (Opus 5 scored 61, Fable 5 scored 66).
- **Context window: 100/100.** 1,048,576 tokens (1M+) context window, verified via Google DeepMind docs. Maximum tier (≥1M = 95-100). Max output 64K. Score 100 reflects top-tier context window.
- **Multimodal: 95/100.** Text, image, video, audio, PDF input; text output. Comprehensive multimodal input coverage. No native image/audio generation. Per methodology: +video/PDF in = 75-90, +audio in or any non-text out = 90-100. With text+image+video+audio+PDF input, score 95. Capped by lack of non-text output.
- **Coding: 85/100.** Terminal-Bench 2.1 90.8% (#1 among compared models — frontier tier: TB2.1 85%+ → 90-100), SWE-bench Pro 61.6% (solid), DeepSWE v1.1 70% (strong long-horizon coding), SWE-Atlas 51.9%. Strong scores, particularly for terminal/agent coding. Capped by: lack of SWE-bench Verified direct score, LiveCodeBench not found. Overall coding capability is frontier-tier for terminal/agent tasks.
- **Cost efficiency: 90/100.** $0.75/$3.75 per 1M input/output (introductory pricing through end of 2026). Per methodology: ~$0.75/$3.75 = ~90-92 range. Free tier available through Google AI Studio. After intro period, $1.50/$7.50 = ~80-85 range. Cache discount $0.075/1M. Blended rate ~$0.32/1M at intro pricing. Exceptional value. Capped by: intro pricing expiring end of 2026.
- **Overall Score: 91/100.** Mean of (90 + 88 + 100 + 95 + 85 + 90) / 6 = 91.3 → **91**. Best-fit recommendation: Gemini 3.8 Flash is the best Flash-tier model available as of 2026-09-18, with frontier-tier Terminal-Bench 2.1 score (90.8% — #1 among compared models), strong HLE-Verified (54.9%), and comprehensive multimodal input. At $0.75/$3.75 (intro pricing through end of 2026), it offers exceptional value for long-horizon coding agents and document-heavy enterprise work. Note: slow time to first token rules it out for live chat or voice products.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev, DataCamp), vendor release materials (Google DeepMind official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `Gemini_3_1_Flash.md`, using the same headings.
