# Claude Sonnet 3.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic/Claude 3.5 Sonnet (`anthropic/claude-3-5-sonnet`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5 (Anthropic, mid-2024 generation; paid, no free tier)
- **Short description:** Anthropic's 2024-era mid-tier "workhorse" Sonnet (Claude 3.5 Sonnet), a balanced text/image reasoning and coding model that set the 2024 agentic-coding baseline (solved 64% of an internal agentic coding eval, vs Claude 3 Opus at 38%). Included here as the historical reference point for later Claude Sonnet generations.
- **Provider / access:** Anthropic API and Bedrock/Vertex resellers; Messages API (Anthropic-native, OpenAI-compatible via gateways). Legacy model — superseded by the 3.7 / 4.x / 5.x Sonnet generations.
- **Release / knowledge:** Released 2024-06-20 (later 2024-10-22 "new" revision); knowledge cutoff March 2024.
- **IDs:** `anthropic/claude-3-5-sonnet` (repo `meta.json` id). No OpenCode Zen Free ID (`noFreeId: true`).
- **Context window:** 200,000 tokens; 64,000 max output (Anthropic + catalogue verified).
- **Modalities:** text and image in, text out (strongest vision model of its era); tool use and JSON mode. No audio/video.
- **Pricing (as of 2026-10-01):** $3.00 / 1M input, $15.00 / 1M output (Anthropic list; prompt-cache read/write discounts available).
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- Anthropic internal agentic coding eval: **64%** of problems solved (vendor, 2024-06-20)
- τ-bench: **0.692** (pass^1) (BenchmarkList)
- WorkArena-L1: **56.4%**; WorkArena-L2: **39.1%**; WorkArena-L3: **0.4%** (BenchmarkList)
- WebArena: **36.2%**; VisualWebArena (BrowserGym): **21.0%**; AssistantBench: **5.2%**; WebLINX: **13.7%** (BenchmarkList)
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- MedQA: **83.2%**; MedXpertQA: **26.6%**; MedAgentBench: **69.7%** (BenchmarkList)
- BenchmarkList ECI: **87.80 / 100** (rank 265/354); BenchLM: **41**
- Arena-Hard v2: **33.0%**; EQ-Bench: **1,080.8 Elo**
- GPQA Diamond / HLE / LCR / CritPt: **no verified public score found**

Coding:

- SWE-bench Lite: **51.3%**; SWE-bench Full: **29.4%**; SWE-bench Multimodal: **25.3%** (BenchmarkList)
- LiveCodeBench: **49.6%** (high) / **36.4%** (later harness); HumanEval-Mul: **81.7%**; BigCodeBench: **46.8%**
- Aider Polyglot: **51.6%**; Aider Refactoring: **92.1%**; FullStackBench en/zh: **62.6%**; SciCode: **36.6%**
- SWE-bench Verified / Terminal-Bench / DeepSWE: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks value found; only the 200K window is documented: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 62/100.** τ-bench 0.692 and WorkArena-L1 56.4% show competent 2024-era tool use, but WebArena and AssistantBench sub-scores sit far below the 2026 agentic frontier.
- **Reasoning: 65/100.** MedQA 83.2% and ECI 87.80 are respectable for its generation, capped by missing GPQA/HLE and a mid-range BenchLM of 41.
- **Context window: 70/100.** 200K tokens with 64K output maps to the repo's 200K band (≈70); no long-context retrieval evidence to raise it.
- **Multimodal: 55/100.** Text + image input, text output — the best vision model of 2024, but text-first with no audio or video.
- **Coding: 68/100.** SWE-bench Lite 51.3% and HumanEval-Mul 81.7% were strong in 2024 but trail every 2026 frontier coder; LiveCodeBench has fallen to the 19th percentile.
- **Cost efficiency: 55/100.** $3/$15 per 1M is expensive for the capability now on offer and there is no free tier; only its legacy accuracy-per-dollar for older pipelines keeps it above the floor.
- **Overall Score: 64/100.** Mean of the five quality dims (62+65+70+55+68)/5 = 64.0. Best-fit: legacy/historical baseline reference — not a 2026 default pick.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (BenchmarkList model page and per-eval results, Anthropic launch post, catalogue data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
