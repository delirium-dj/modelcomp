# ByteDance Seed 2.0 Pro — findings by GLM 5.3

- Source: ByteDance (`ByteDance/Seed-2.0-pro`, hosted on DeepInfra)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance's flagship all-purpose Agent-era model: complex reasoning and long-chain task execution with multimodal (visual/video) understanding, structured generation, and tool-augmented execution. Top use case: enterprise agent orchestration and multimodal analysis.
- **Provider / access:** DeepInfra `ByteDance/Seed-2.0-pro` (OpenAI-compatible Chat Completions; JSON mode + function calling + multimodal flags on the model card); ByteDance Volcano Engine native access implied but not re-verified.
- **Release / knowledge:** release date not published by aggregator profiles; knowledge cutoff not stated publicly.
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro` (no OpenCode Zen Free ID found; `noFreeId` — paid tier).
- **Context window:** 256,000 tokens (DeepInfra model page "Public 256,000"; curated metadata 256K / 65K out). Max output split from curated metadata only.
- **Modalities:** text, image, and video in / text out (DeepInfra model card "Multimodal"; vendor description covers hour-long video understanding and streaming real-time analysis); reasoning yes; tool calls yes (function calling, tool-augmented execution); JSON structured outputs yes.
- **Pricing (as of 2026-09-25):** $0.50 in / $3.00 out / $0.10 cached per 1M tokens (DeepInfra).
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 / 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- PlanningBench (closest proxy — planning under coupled constraints): **All-pass 44.3%, Avg-pass 84.0%, rank 5, Type 1** (self-reported in arXiv 2605.20873 PlanningBench paper, 2026-06-28, via BenchmarkList)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (BenchLM has no page for this ID; BenchmarkList calls its profile "evidence-only", 2 benchmarks)
- Omniscience: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (vendor describes "agentized" coding, no public numbers)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 256K window verified (DeepInfra); no public MRCR/RULER/GraphWalks value — no long-context retrieval score found.

Multimodal (verified):

- BabyVision (early-stage visual reasoning): **60.6%** (unipat.ai BabyVision leaderboard, 2026-05-28, via BenchmarkList; reference points from the Qwen3.8-27B vendor table: Qwen3.7-Plus 64.7% w/o CI, Qwen3.6-27B 28.9%, Opus 4.6 Max 12.6%)

### Normalized scores (1–100)

- **Tool use: 60/100.** Function calling, JSON mode, and tool-augmented agent orchestration are verified platform features, and PlanningBench planning is rank-5 among frontier LLMs (44.3% all-pass) — but zero direct agentic benchmark numbers (TB/GDPval/Tau) exist, so this is a provisional mid-band score.
- **Reasoning: 63/100.** PlanningBench All-pass 44.3% / Avg-pass 84% (rank 5) is the only measured reasoning evidence — solid but self-reported; GPQA/HLE/LCR all missing caps it.
- **Context window: 72/100.** 256K verified sits in the 200K–500K tier (200K = 70 anchor); no retrieval-quality data at length.
- **Multimodal: 76/100.** Image+video input verified (75–90 tier; hour-long video support per vendor), but BabyVision 60.6% is mid-pack (below Qwen3.7-Plus's 64.7%) and no audio in or non-text output exists.
- **Coding: 55/100.** Vendor claims "agentized" coding improvements, but no verified public coding benchmark was found — provisional score at the bottom of the credible band, capped by zero measured evidence.
- **Cost efficiency: 92/100.** $0.50/$3.00 per 1M with $0.10 cached reads sits near the ~$0.60/$2.20 (~92) anchor.
- **Overall Score: 65/100.** Half-up mean of the five quality dims (60+63+72+76+55)/5 = 65.2 → 65 — a promising agent-era multimodal platform with cheap inference, but public benchmark coverage is too thin to justify flagship-level scores; re-verify when ByteDance publishes a model card.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (DeepInfra model card, BenchmarkList evidence-only profile incl. unipat.ai BabyVision + arXiv PlanningBench); scores are normalized 1–100 interpretations, not official vendor scores. Dimension scores marked provisional above rest on indirect or platform-feature evidence only.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
