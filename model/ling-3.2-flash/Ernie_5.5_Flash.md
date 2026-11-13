# Ling-3.2-flash — findings by Ernie 5.5 Flash

- Source: inclusionAI / Ant Group (`ling-3.2-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.2-flash (Ling 3.2 Flash)
- **Short description:** Ant Group inclusionAI's first native multimodal Ling model: same ~560B/25B-active MoE body as Ling-3.1-flash, with vision built into the architecture for document understanding, long-horizon multimodal agents, 3D understanding and medical multimodal tasks.
- **Provider / access:** Ant Ling developer platform (`developer.ant-ling.com`), OpenAI- and Anthropic-compatible APIs; usable from Claude Code, Kilo Code, Qwen Code and Hermes Agent; free for the first two weeks after launch.
- **Release / knowledge:** 2026-11-05 (announced and released 5 Nov 2026); knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.2-flash` (aggregators / gateway style), `ling-3.2-flash` (Ant Ling native)
- **Context window:** 1,048,576 tokens (1M), vendor-stated for both the docs and launch coverage; max output not published separately.
- **Modalities:** text + image + video input; text output. Native multimodal (vision in the reasoning base, not an external vision module). Reasoning/thinking mode, tool calling, structured output.
- **Pricing (as of 2026-11-12):** $0.30 / 1M input, $0.90 / 1M output; free for two weeks post-launch.
- **Architecture:** ~560B total / ~25B active MoE (unchanged body from Ling-3.1-flash); open weights not yet published (earlier Ling Flash models shipped open weights).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **no verified public score found for the 3.2 SKU** (Ling-3.1-flash, the same body, scores 40.4% — lineage data, not a 3.2 measurement).
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- GDPval-AA: **no verified public score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**; the launch material emphasizes agentic visual work (Blender via UI actions, computer-use loops) without leaderboard rows.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**.
- HLE: **no verified public score found**.
- LCR / MLCR: **no verified public score found**.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index / BenchLM overall: **not indexed yet** (released one week before this report); no composite rank.
- ZEROBench Sub: **43.71%** vs Claude Opus 5 (max) 39.52% — Ant release evaluation, visual-reasoning subset (vendor claim, no harness disclosed).

Multimodal (the model's headline category):

- OmniDocBench: **92.21** vs Claude Opus 5 (max) 90.56 — Ant release evaluation (document understanding).
- Vision2Web: **85.86** vs Claude Opus 5 (max) 80.20 — Ant release evaluation (screenshot/design → web page).
- ZEROBench Sub: **43.71** vs 39.52 (above).

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- Qualitative vendor claims only: PDF/equation → working code, front-end generation from visual intent, CAD-drawing → 3D web models.

Long context:

- No MRCR / RULER / GraphWalks numbers published for the 3.2 SKU; the 1M window is vendor-stated and shared with Ling-3.1-flash's hybrid-attention design.

### Normalized scores (1–100)

- **Tool use: 62/100.** No public agentic leaderboard row for this SKU; the score leans on the shared 560B body's lineage (Ling-3.1-flash: GDPval-AA 1673 Elo, TB4.0 40.4%) discounted for the vision-heavy agent loop the vendor targets. Capped by the complete absence of 3.2 tool benchmarks.
- **Reasoning: 72/100.** ZEROBench Sub 43.71% (vendor) is a hard visual-puzzle result above Opus 5 (max) in Ant's own test, and the reasoning base is unchanged from Ling-3.1-flash; with no GPQA/HLE numbers the score stays in the low 70s.
- **Context window: 92/100.** 1M tokens, vendor-documented; no published retrieval-accuracy table keeps it below the 95–100 band.
- **Multimodal: 88/100.** Native text + image + video input with text output, plus vendor-leading OmniDocBench 92.21 and Vision2Web 85.86; no audio input and no non-text output cap it below 90.
- **Coding: 60/100.** No coding benchmark published for 3.2; the vendor narrative is document-to-code and front-end generation, so the score is a lineage read of the shared body (Ling-3.1-flash SciCode 54.1%, TB4.0 40.4%) with a small allowance for visual coding.
- **Cost efficiency: 94/100.** $0.30/$0.90 per 1M with two free weeks is far below frontier pricing for a 1M-context native-multimodal model; not counted toward Overall.
- **Overall Score: 75/100.** Mean of tool use 62, reasoning 72, context 92, multimodal 88, coding 60. Best fit: document-heavy and screen/video-heavy agent work (PDF→code, UI→code, CAD/3D, medical imaging review) at very low cost; wait for independent benchmarks before treating the Opus 5 comparisons as settled.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (Ant Ling launch coverage, Phaseo, Sumus launch summary); scores are normalized 1–100 interpretations, not official vendor scores. Every Ling-3.2 number is a vendor release figure, not an independent measurement.
- Reference URLs:
  - [Sumus — Ling 3.2 Flash: Ant's 560B multimodal model, price & benchmarks](https://sumus.im/blog/ling-3-2-flash)
  - [Phaseo — Inclusion AI: Ling 3.2 Flash](https://phaseo.app/models/inclusionai/ling-3.2-flash)
  - [Pandaily — Ant Group launches Ling-3.2-flash (560B MoE, 25B active, 1M context)](https://pandaily.com/ant-group-ling-3-2-flash-native-multimodal-560b-moe-25b-active-1m-context)
  - [Ant Ling developer docs — Ling models](https://developer.ant-ling.com/en/docs/models/ling/)
  - [AIbase — Ant Bailing releases Ling 3.2 Flash](https://news.aibase.com/news/32130)