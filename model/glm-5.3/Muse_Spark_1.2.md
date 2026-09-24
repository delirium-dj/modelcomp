# GLM 5.3 — findings by Muse Spark 1.2

- Source: Z.ai/GLM 5.3, e.g. Meta (`muse-spark-1.2-contributor-free`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai's August 2026 flagship open-weights MoE (744B total, 40B active), post-training uplift over GLM 5.2 targeting coding and long-horizon agentic tasks at 1M context.
- **Provider / access:** Z.ai via https://api.z.ai/api/paas/v4 (model `glm-5.3`), also on OpenRouter; Chat Completions with tool calling, reasoning
- **Release / knowledge:** 2026-08-14 release (per AnotherWrapper pricing)
- **IDs:** `opencode/glm-5.3` (OpenCode Zen Free not available — paid only, per meta.json noFreeId)
- **Context window:** 1,000,000 tokens (1M) — verified via Z.ai pricing page and AnotherWrapper ($1.40/$4.40 spec); GLM-5 uses DSA to preserve long context
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes; image/video not natively (Flash variant adds multimodal)
- **Pricing (as of 2026-09-25):** $1.40 in / $4.40 out per 1M (cached $0.26 per meta.json reference); AnotherWrapper blended $5.80/1M+1M — no Free ID
- **Architecture:** MoE 744B total / 40B active (vs GLM-5.1 355B/32B), DSA (DeepSeek Sparse Attention), trained 28.5T tokens (vs 23T for 4.5), open-weights

### Raw benchmarks found

Agent / tool use:

- ToolAthlon: **73%** (AnotherWrapper benchmark row for GLM-5.3)
- Terminal-Bench 2.1: **88.2%** (AnotherWrapper: GLM-5.3 Terminal-Bench 88.2% — shared with 3.0 variant)
- Terminal-Bench 3.0: **28.3%** (AnotherWrapper)
- GDPval-AA v2: **59%** (AnotherWrapper)
- AutomationBench: **48.2%** (AnotherWrapper)
- Agents' Last Exam: **28.5%** (AnotherWrapper)

Reasoning / knowledge:

- HLE: **62.5%** (AnotherWrapper)
- GPQA Diamond: no verified public score found (not listed for 5.3 in fetched rows)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found for base 5.3 (Flash is 42/57, but base not separately listed)
- AA-LCR / Omniscience: no verified public score found

Coding:

- DeepSWE 1.1: **66.9%** (AnotherWrapper)
- FrontierSWE: **78.1%** (AnotherWrapper)
- SWE Marathon: **42.5%** (AnotherWrapper)
- Program Bench: **19%** (AnotherWrapper)
- PosttrainBench: **39.8%** (AnotherWrapper)
- SciCode / Vibe Code Bench: no verified public score found — but Z.ai reports 50% improvement on in-house Z.ai Code Bench vs GLM-5.2

Long context:

- 1M verified; no MRCR/RULER numeric found — DSA preserves capacity per Z.ai but no retrieval score disclosed

### Normalized scores (1–100)

- **Tool use: 80/100.** ToolAthlon 73% plus Terminal-Bench 88.2% and GDPval 59% show strong agentic lift; capped by Terminal-Bench 3.0 28.3%.
- **Reasoning: 76/100.** HLE 62.5% is flagship-level and open-source SOTA claim, capped by missing GPQA/CritPt and Flash AA Index not directly applicable.
- **Context window: 92/100.** Full 1M with DSA cost reduction retains long-horizon capability; just below 1.3M Flash/2M tier.
- **Multimodal: 15/100.** Text-only per architecture note (multimodal is Flash variant); no image/video input, text out only.
- **Coding: 82/100.** DeepSWE 66.9% and FrontierSWE 78.1% plus 50% in-house uplift over 5.2 are top open-weights; capped by Program Bench 19% and PosttrainBench 39.8%.
- **Cost efficiency: 62/100.** $1.40/$4.40 per 1M is mid-high for open model despite 22.6× cheaper than Claude Opus equivalent at same quality (per Featherless analysis of Flash).
- **Overall Score: 69/100.** Mean of five quality dims (80+76+92+15+82)/5=69.0→69; best fit for open-weights long-horizon coding/agentic engineering at 1M context.

---

## Signature

- Provided by: **Muse Spark 1.2 (meta/muse-spark-1.2-contributor-free)** — 2026-09-25
- Method: public internet research (Z.ai docs/pricing, AnotherWrapper, OpenLM.ai GLM-5.3, Featherless); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
