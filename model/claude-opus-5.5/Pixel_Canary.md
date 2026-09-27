# Claude Opus 5.5 — findings by Pixel Canary

- Source: Anthropic / Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 — Anthropic's September 2026 flagship "built for long-running agentic coding and knowledge work".
- **Short description:** The current top-ranked model on public trackers (LLMBoard 100.0, #1 overall) at a mid-tier price: it outperforms Claude Fable 5.1 while costing $4 / $20 instead of $10 / $50. Adaptive thinking is always on; the effort parameter controls depth.
- **Provider / access:** Claude API `claude-opus-5-5`; Amazon Bedrock `anthropic.claude-opus-5-5`; Google Cloud, Microsoft Foundry and Claude Platform on AWS `claude-opus-5-5`; 25 tracked offerings incl. Azure Cognitive Services (cheapest third-party at $4 / $20), ZenMux `anthropic/claude-opus-5.5`, Cortecs $4.4 / $22, Venice AI $4.8 / $24.
- **Release / knowledge:** released 2026-09-22; reliable knowledge cutoff **Jun 2026** (training-data cutoff also Jun 2026) — the freshest of the frontier cohort.
- **IDs:** `claude-opus-5-5` on every cloud (Bedrock prefixed `anthropic.`). No Free ID — paid only.
- **Context window:** 1,000,000 input / 128,000 max output tokens; 300K output on the Message Batches API with the `output-300k-2026-03-24` beta header.
- **Modalities:** text + images in → text out. Tool use yes (adaptive thinking, effort control; the older `computer_20251124` computer-use tool is **no longer accepted** on the Claude API and Google Cloud), vision yes, structured outputs yes; no audio/video input, no image or audio generation. Four breaking changes vs Opus 5: thinking cannot be disabled, forced tool use returns an error, thinking blocks are bound to model + conversation, and text between tool calls now arrives in thinking blocks whose text is empty at default display settings.
- **Pricing (official, 2026-09-27):** $4 / MTok input, $20 / MTok output; 5-minute cache write $5 / MTok, 1-hour cache write $8 / MTok, **cache read $0.20 / MTok**; Batch API 50% discount on input and output; minimum cacheable prompt 512 tokens. A separately priced "Fast mode" research preview exists.
- **Architecture:** proprietary, parameters undisclosed, open weights no; latency class "Moderate", default effort "medium".

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-09-25 → 2026-09-27): 30 of 33 rows published, coverage 40% / 23 benchmark families, LLMBoard score **100.0 (#1 overall)**; "#x/y" = rank among models with a score on that benchmark. Every published row is rank #1.

Agent / tool use:

- OSWorld 2.0 (computer use): **81.80%** (#1/14) — best measured computer-use score in this dataset
- SWE-Bench Pro: **89.90%** (#1/59); SWE-bench Multilingual **93.90%** (#1/46); SWE-Bench Multimodal **61.40%** (#1/5)
- Terminal-Bench 4.0: **66.40%** (#1/19)
- BenchCAD (CAD/geometry agent): **73.00%** raw → **96.20%** with a Python tool (#1/5) — a +23.2-point tool lift
- GDPval-AA, τ²-Bench, Terminal-Bench 2.1, Claw-Eval, Toolathon, MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **64.40%** no-tools (#1/8) → **67.70%** with tools (#1/10)
- ArXivMath: **91.20%** (#1/4); Global-MMLU **94.30%** (#1/6); Program Bench **91.20%** (#1/11)
- HealthBench: **60.60%** (#1/11)
- LM Arena Text: **1517.79** rating (#1/218); Text Style Control **1508.5** (#1)
- GPQA Diamond / ARC-AGI / SimpleQA / CritPt for this ID: no verified public score found

Coding:

- SWE-Bench Pro **89.90%** (#1/59), SWE-bench Multilingual **93.90%** (#1/46), FrontierCode 1.1 **54.40%** (#1/20), Terminal-Bench 4.0 **66.40%** (#1/19)
- SWE-bench Verified / LiveCodeBench / DeepSWE: no verified public score found on the pages consulted

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval score published for this ID — only the 1M window and 128K output (300K batch) are verified.

Runtime: **17.24 tok/s** with **11.05 s** catalog latency on Anthropic (Anthropic labels latency "Moderate") — about 2.3× faster than Claude Fable 5.1.

### Normalized scores (1-100)

- **Tool use: 97/100.** OSWorld 2.0 81.80%, SWE-Bench Pro 89.90% and Terminal-Bench 4.0 66.40% - all rank #1 - plus a +23.2-point lift when handed a Python tool; the strongest agentic profile in this dataset. Docked only because GDPval-AA / tau2-Bench are unpublished for this ID.
- **Reasoning: 97/100.** HLE 64.40% no-tools -> 67.70% with tools (#1), ArXivMath 91.20%, Global-MMLU 94.30%; a Jun-2026 cutoff materially reduces stale-knowledge errors versus the Feb/Mar-2026 cohort.
- **Context window: 91/100.** 1M input, 128K output (300K in batch) is top-tier, but no MRCR/GraphWalks-class retrieval number exists for this ID, so 90+ is not supportable.
- **Multimodal: 78/100.** Chartography 89.00% and SWE-Bench Multimodal 61.40% show solid visual reasoning; still text + image input only, no audio/video/PDF-native input, no generation.
- **Coding: 97/100.** SWE-bench Multilingual 93.90% and SWE-Bench Pro 89.90% against 46-59 competitors, plus Terminal-Bench 4.0 66.40% and Program Bench 91.20% - the deepest verified coding evidence of any model in this folder set.
- **Cost efficiency: 88/100.** $4 / $20 with $0.20 cache reads and 50% batch discounts makes long agent loops cheap; docked for no free tier, always-on thinking overhead and 17.2 tok/s throughput.
- **Overall Score: 92/100.** Half-up mean of (97 + 97 + 91 + 78 + 97) = 460 / 5 = 92.0, Cost excluded. Best fit: long autonomous coding and computer-use agents where verified SWE/Terminal/OSWorld evidence matters more than vision breadth.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** - 2026-09-27
- Method: public internet research on 2026-09-27 (Anthropic platform docs for Claude Opus 5.5 + LLMBoard model profile incl. provider pricing and runtime tables); no peer `model/` findings were read - only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

