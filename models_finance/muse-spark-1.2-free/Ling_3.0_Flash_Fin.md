# Muse Spark 1.2 Free — findings by Ling 3.0 Flash

- Source: Meta (`opencode/muse-spark-1.2-contributor-free`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Prior-gen Meta coding/agent model co-trained with Muse Code for terminal coding, MCP tool use, and whole-repo generation; free tier available on OpenCode Zen with contributor consent.
- **Provider / access:** OpenCode Zen (free Contributor tier with training-data consent; paid-tier pricing also available). API model string `meta/muse-spark-1.2`.
- **Release / knowledge:** August 5, 2026 release. Knowledge cutoff unpublished.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (OpenCode Zen)
- **Context window:** 1,048,576 (1M) tokens, 131K max output
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** Free Contributor-tier on OpenCode Zen (training-data consent); Standard $1.25/1M input, $4.25/1M output; Contributor $0.10/$0.20
- **Architecture:** Proprietary, closed weights; Meta's prior-gen Muse-family model co-trained with Muse Code

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (provider run, inside Muse Code) / **80.1%** (AA)
- Terminal-Bench 2.0: **59.5%** (BenchmarkList)
- Terminal-Bench Hard: **45.5%** (BenchmarkList)
- VulcanBench v3: **87.0%** (modelscale.dev)
- MultiChallenge: **75.5%** (BenchmarkList, #1)
- Agentic Index (AA): **81.4**

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (AA) / **88.0%** (BenchmarkList) / **89.8%** (BenchLeader)
- HLE: **45.5%** (AA) / **40.6%** (BenchLeader)
- LongContext Reasoning: **83.3** (commandcode.ai)
- Intelligence Index (AA): **56.8** (commandcode.ai) / **39.6** (modelscale.dev)
- AIME: **96.9%** (BenchmarkList)
- FrontierMath Tier 4: **14.6%** (BenchmarkList)
- FrontierMath Tier 1-3: **39.0%** (BenchmarkList)
- Knowledge (AA): **74**
- CritPt: **11** (BenchmarkList)

Coding:

- SWE-bench Verified: **74.4%** (BenchmarkList, BenchLeader)
- SWE-bench Pro: **55.0%** (BenchLeader, #3)
- Coding Index (AA): **72.2** (commandcode.ai, rank 14/46)
- SciCode: **56.4%** (commandcode.ai) / **52.0%** (BenchmarkList)
- FrontierSWE v2: **12.0%** (modelscale.dev)
- LMArena Coding: **1526** (BenchLeader)
- Terminal-Bench 2.1: 82.9% (also agentic)

Multimodal:

- Text, image, audio, video, PDF in; text out
- BenchLeader Multimodal score: **66**
- AA multimodal: unavailable for this model
- Broader modality coverage including audio and video

Long context:

- 1M context window
- Long-context reasoning: **83.3** (commandcode.ai)

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 at 82.9% (provider run inside Muse Code); VulcanBench v3 at 87.0%; MultiChallenge #1 at 75.5%; Terminal-Bench 2.0 at 59.5%. Strong agentic and terminal coding with multi-agent workflow support.
- **Reasoning: 87/100.** GPQA Diamond at 90.4% (AA); LongContext Reasoning at 83.3%; HLE at 45.5% (AA); AIME at 96.9% (BenchmarkList). Intelligence Index of 56.8 confirms solid reasoning.
- **Context window: 95/100.** 1M context window with LongContext Reasoning at 83.3%; 131K max output.
- **Multimodal: 87/100.** Text, image, audio, video, and PDF input supported; broadest modality coverage among Muse family; strong multimodal agentic reasoning.
- **Coding: 86/100.** Terminal-Bench 2.1 at 82.9% (also agentic); Coding Index 72.2 (AA); SWE-bench Verified 74.4%; SWE-bench Pro 55.0%; VulcanBench 87.0%. Solid coding with specialized Muse Code agent co-training.
- **Cost efficiency: 100/100.** Free Contributor-tier available on OpenCode Zen with training-data consent; paid pricing only $1.25/$4.25. Among the most cost-efficient frontier models.
- **Overall Score: 88/100.** Mean of the five non-cost dimensions (87 + 87 + 95 + 87 + 86) / 5 = 88.4, rounded half-up to 88. Meta's coding-optimized Muse model with free tier, 1M context, broad multimodal support, and strong Terminal-Bench 2.1 (82.9%) at contributor pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via BenchLM, commandcode.ai, modelscale.dev, BenchmarkList, BenchLeader, and waitwhichmodel.fyi; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. Gemini_3_8_Flash.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/muse-spark-1.2-free/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/muse-spark-1.2-free/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
