# Claude Opus 5.5 — findings by Mistral Large 4

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship proprietary reasoning model and first entry in the new Claude 5.5 family; performs at Claude Fable 5.1 level on most work at ~40% lower serving cost than Opus 5. Top use case: long-horizon agentic coding, computer use, and knowledge work.
- **Provider / access:** Claude API / Claude Platform (`claude-opus-5-5`), Amazon Bedrock, Claude Models on Google Cloud (Google-managed and Anthropic-managed), Microsoft Foundry, Claude Platform on AWS. Chat Completions-style Messages API (`POST /v1/messages`).
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff June 2026 (system card). Pre-release tested by external evaluators incl. Frontier Design and METR.
- **IDs:** `claude-opus-5-5` (Claude API); Bedrock/Vertex/Foundry IDs vary by host.
- **Context window:** 1,000,000 tokens total; up to 128,000 output tokens per response (per Anthropic launch page/system card as captured by BenchLM; Roboflow model card confirms 1M / 128K).
- **Modalities:** Interleaved text + image input (vision; #3 of 63 on Roboflow Vision Evals), PDF input (GDP-PDF eval row), text output; adaptive ("preserved") thinking always on with effort parameter (low/medium default/high/xhigh/max); tool calls and JSON mode supported.
- **Pricing (as of 2026-11-05):** $4 / $20 per 1M input/output tokens (20% below Opus 5's $5/$25); cache reads $0.20/M (60% below Opus 5); cache writes 20% below Opus 5; Batch API 50% off; fast mode GA at $8/$40 with up to 2.5x speed; ~40% lower cost on typical workloads vs Opus 5 (Anthropic-measured). No free tier.
- **Architecture:** Proprietary, weights not disclosed; adaptive thinking; deployed with Fable 5.1-level cyber/bio safeguards (blocks fall back to Opus 4.8 / Opus 5); system card rates CB-1 but not CB-2 capabilities.

### Raw benchmarks found

Vendor launch table (anthropic.com/claude-opus-5-5, adaptive thinking at max effort; TB 4.0 at xhigh; safeguards on), cross-checked against llm-stats, Vellum, CodingFleet, Kingy, ARMES:

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (xhigh, safeguards on; beats GPT-6 Astra 57.9%, Fable 5.1 55.8%, Opus 5 52.3%) (Anthropic launch page; ARMES docs list a 64.8% variant row — conflicting harness/effort, both cited)
- AutomationBench: **40.0%** (Zapier, no fallback; GPT-6 Astra leads at 41.4%) (Anthropic)
- OSWorld 2.0: **81.8% partial** / 48.7% strict (Fable 5.1 80.7% partial) (Anthropic via llm-stats)
- GDPval-AA v2.1: **1846 Elo** at max effort (Fable 5.1 1735, Opus 5 1708, GPT-5.6 Sol 1588, GPT-6 Astra 1542) — independently confirmed by Artificial Analysis
- AA-Briefcase v1.1: **1822 Elo**; GDP-PDF: **26.2%** (ARMES docs)
- Chartography with tools: **89.0%** (Fable 5.1 88.4%, Opus 5 83.4%) (Anthropic)
- CursorBench 4.0: **57.8%** (Cursor live leaderboard row, independent) (Anthropic / BenchLM)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas: no verified public score found

Reasoning / knowledge:

- HLE with tools: **67.7%** (Fable 5.1 65.6%, Opus 5 63.6%, GPT-6 Astra 57.2%) (Anthropic launch table)
- Artificial Analysis Intelligence Index: **58 at max effort, #1 of 168 models** at launch (Index v4.3, 2026-09-22, max effort + fallback, ~119k output tokens/task); later readings conflict across index versions: 57.62 (v4.3.2), 59 for (Max, Default Fallback) while Gemini 4 Carbon (High) leads at 60 on the current board, and v5.0.1 (late Oct 2026) again ranked Opus 5.5 first — index is versioned and moves as evals are added
- Global-MMLU: **94.3%**; ArXivMath: **91.2%**; MILU: **93.1%** (llm-stats compare vs GPT-6 Astra)
- SimpleBench: **88.4%**, reported #1; BenchAlign composite 86.49/100 (#1 of 224) (ARMES docs)
- GPQA Diamond / FrontierMath / AIME 2026: no verified public score found — Anthropic publishes none for Opus 5.5 (ARMES notes this explicitly)
- LCR / MLCR / CritPt: no verified public score found

Coding:

- SWE-bench Pro: **89.9%** (llm-stats launch research, self-reported table); SWE-bench Multilingual: **93.9%**; BenchCAD (with Python tool): **96.2%** (llm-stats compare)
- FrontierCode v1.1 Main: **54.4%** (Astra 53.3%, Fable 5.1 50.3%) (Anthropic)
- CursorBench 4.0: **57.8%** (above)
- SWE-bench Verified: no fresh verified public score found on Anthropic's launch table (they moved to Terminal-Bench 4.0 / FrontierCode / CursorBench); older family reference: Opus 5 89.1% TB 2.1 (morphllm) — not measured for 5.5
- LiveCodeBench / SciCode / DeepSWE: no verified public score found for claude-opus-5-5

Long context:

- 1M-token window, 128K max output (official); no verified MRCR/RULER retrieval score found at 512K+ for this exact ID — retrieval at full window unverified

### Normalized scores (1–100)

- **Tool use: 93/100.** TB 4.0 66.4% leads the field and GDPval-AA 1846 is #1, but AutomationBench 40.0% trails GPT-6 Astra (41.4%) and OSWorld strict 48.7% caps the computer-use claim; no Claw-Eval number found.
- **Reasoning: 94/100.** HLE-with-tools 67.7% and AA Intelligence Index #1 at launch (58) are frontier-leading; capped by absence of published GPQA/FrontierMath and index-version drift (57.6–59, later overtaken by Gemini 4 Carbon at 60 on the live board).
- **Context window: 96/100.** 1M total / 128K output lands in the 95–100 tier; not 100 because no verified ≥98% retrieval at 512K+ was found for this ID.
- **Multimodal: 85/100.** Interleaved text+image in, PDF in, text out, strong chart reasoning (Chartography 89.0%, Roboflow Vision #3 of 63); no audio/video input or non-text output.
- **Coding: 94/100.** SWE-Pro 89.9%, TB 4.0 66.4% (field-leading), SWE-bench Multilingual 93.9%, FrontierCode 54.4%; capped because Anthropic's table stopped headlining SWE-bench Verified and no independent LiveCodeBench/DeepSWE number was found.
- **Cost efficiency: 60/100.** $4/$20 per 1M (20% below Opus 5) plus $0.20/M cache reads and 40% lower typical-workload cost place it near the $3/$15 ≈ 60 band; paid, no free tier; fast mode $8/$40.
- **Overall Score: 92/100.** Half-up mean of (93 + 94 + 96 + 85 + 94) / 5 = 92.4 → 92. Best fit: default frontier pick for agentic coding and knowledge work where Fable-class quality is needed at Opus-5-minus-40% cost; switch to GPT-6 Astra for AutomationBench/Terminal-Bench-Science workloads.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (7 web searches + official page fetch, 2026-11-05 UTC); official Anthropic launch page/system card prioritized, cross-checked against Artificial Analysis, BenchLM, llm-stats, Vellum, Kingy, ARMES, Roboflow; conflicting figures (TB 4.0 66.4% vs 64.8%; AA Index 57.62/58/59 across versions) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Opus 5.5 — Anthropic (official launch + benchmark table)](https://www.anthropic.com/claude-opus-5-5)
  - [Claude Opus 5.5 System Card (PDF, 2026-09-22)](https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf)
  - [Claude Opus 5.5 — Claude Platform Docs](https://platform.claude.com/docs/en/models/opus-5-5/overview)
  - [Claude Opus pricing — Anthropic](https://www.anthropic.com/claude/opus)
  - [Claude Opus 5.5 takes the top spot on the Artificial Analysis Intelligence Index](https://artificialanalysis.ai/articles/claude-opus-5-5)
  - [Artificial Analysis — model leaderboard (Index versions)](https://artificialanalysis.ai/models)
  - [BenchLM — claude-opus-5-5 benchmarks/pricing/speed](https://benchlm.ai/models/claude-opus-5-5)
  - [llm-stats — Claude Opus 5.5 launch research (SWE-Pro 89.9%, OSWorld strict/partial)](https://llm-stats.com/blog/research/claude-opus-5-5-launch)
  - [Vellum — Claude Opus 5.5 benchmarks explained](https://www.vellum.ai/blog/claude-opus-5-5-benchmarks-explained)
  - [Kingy AI — Opus 5.5 vs GPT-6 Astra / Fable 5.1 comparison](https://kingy.ai/blog/claude-opus-5-5-specs-benchmarks-pricing-comparison/)
  - [TechCrunch — Anthropic releases Opus 5.5 (2026-09-22)](https://techcrunch.com/2026/09/22/anthropic-releases-opus-5-5-with-lower-prices-and-fable-level-performance/)
  - [Roboflow — Claude Opus 5.5 vision evals (#3 of 63)](https://playground.roboflow.com/models/anthropic/claude-opus-5-5)
